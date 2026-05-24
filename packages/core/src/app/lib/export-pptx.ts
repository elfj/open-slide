import { createElement } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { designToCssVars } from './design';
import { SlidePageProvider } from './page-context';
import { waitForDataWaitfor, waitForFonts } from './print-ready';
import { CANVAS_HEIGHT, CANVAS_WIDTH, type SlideModule } from './sdk';

// The pptx geometry maps the 1920×1080 canvas onto a 13.333in × 7.5in
// widescreen slide. That makes 1in = 144px, so positions divide by 144 and
// font/line sizes (points, 72pt = 1in) multiply by 0.5.
const PX_PER_IN = CANVAS_WIDTH / 13.333_333_333;
const SLIDE_W_IN = CANVAS_WIDTH / PX_PER_IN;
const SLIDE_H_IN = CANVAS_HEIGHT / PX_PER_IN;

const inches = (px: number): number => px / PX_PER_IN;
const points = (px: number): number => (px / PX_PER_IN) * 72;

export type PptxExportProgress = {
  phase: 'processing' | 'writing' | 'done';
  current: number;
  total: number;
  percent: number;
};

type Shadow = {
  hex: string;
  alpha: number;
  blurPx: number;
  offsetPx: number;
  angleDeg: number;
};

type PptxShadow = {
  type: 'outer';
  color: string;
  opacity: number;
  blur: number;
  offset: number;
  angle: number;
};

type TextRun = {
  text: string;
  options: {
    bold?: boolean;
    italic?: boolean;
    underline?: { style: 'sng' };
    strike?: 'sngStrike';
    color?: string;
    fontFace?: string;
    fontSize?: number;
    breakLine?: boolean;
  };
};

const BLOCK_DISPLAYS = new Set([
  'block',
  'flex',
  'grid',
  'list-item',
  'table',
  'table-row',
  'table-cell',
  'flow-root',
  'grid',
]);

const SVG_PRESENTATION_PROPS = [
  'fill',
  'fill-opacity',
  'fill-rule',
  'stroke',
  'stroke-width',
  'stroke-linecap',
  'stroke-linejoin',
  'stroke-dasharray',
  'stroke-dashoffset',
  'stroke-opacity',
  'stroke-miterlimit',
  'opacity',
  'visibility',
  'display',
  'font-family',
  'font-size',
  'font-weight',
  'font-style',
  'text-anchor',
  'dominant-baseline',
  'letter-spacing',
  'transform',
  'transform-origin',
  'filter',
  'mask',
  'clip-path',
  'mix-blend-mode',
];

export async function exportSlideAsPptx(
  slide: SlideModule,
  slideId: string,
  onProgress?: (progress: PptxExportProgress) => void,
): Promise<void> {
  const pages = slide.default ?? [];
  if (pages.length === 0) return;
  const total = pages.length;

  const { default: PptxGenJs } = await import('pptxgenjs');
  const pptx = new PptxGenJs();
  pptx.defineLayout({ name: 'OPEN_SLIDE', width: SLIDE_W_IN, height: SLIDE_H_IN });
  pptx.layout = 'OPEN_SLIDE';
  pptx.title = slide.meta?.title ?? slideId;

  const container = document.createElement('div');
  container.setAttribute('aria-hidden', 'true');
  Object.assign(container.style, {
    position: 'fixed',
    left: '-99999px',
    top: '0',
    width: `${CANVAS_WIDTH}px`,
    height: `${CANVAS_HEIGHT}px`,
    pointerEvents: 'none',
  });
  document.body.appendChild(container);

  const designVars = slide.design ? designToCssVars(slide.design) : null;

  onProgress?.({ phase: 'processing', current: 0, total, percent: 0 });

  try {
    await waitForFonts();
    const fontCssPromise = collectInlineFontCss();
    for (let i = 0; i < pages.length; i++) {
      const Page = pages[i];
      if (!Page) continue;

      const host = document.createElement('div');
      host.setAttribute('data-osd-canvas', '');
      Object.assign(host.style, {
        width: `${CANVAS_WIDTH}px`,
        height: `${CANVAS_HEIGHT}px`,
        position: 'relative',
        overflow: 'hidden',
      });
      if (designVars) {
        for (const [k, v] of Object.entries(designVars)) host.style.setProperty(k, v);
      }
      container.appendChild(host);

      const root: Root = createRoot(host);
      root.render(
        createElement(SlidePageProvider, { index: i, total: pages.length }, createElement(Page)),
      );

      // Two paints so React commits and CSS intro animations have started; we
      // skip waiting for them to finish and capture the final (post-animation)
      // styles instead, since pptx can't represent motion.
      await nextPaint();
      await nextPaint();
      await waitForDataWaitfor(host);
      freezeAnimations(host);
      await nextPaint();

      const pptxSlide = pptx.addSlide();
      await buildSlide(pptx, pptxSlide, host, fontCssPromise);

      root.unmount();
      container.removeChild(host);

      onProgress?.({
        phase: 'processing',
        current: i + 1,
        total,
        percent: Math.min(95, ((i + 1) / total) * 95),
      });
    }

    onProgress?.({ phase: 'writing', current: total, total, percent: 97 });
    const blob = (await pptx.write({ outputType: 'blob' })) as Blob;
    downloadBlob(blob, `${slideId}.pptx`);
  } finally {
    onProgress?.({ phase: 'done', current: total, total, percent: 100 });
    container.remove();
  }
}

type PptxInstance = InstanceType<typeof import('pptxgenjs').default>;
type PptxSlide = ReturnType<PptxInstance['addSlide']>;

type BuildContext = {
  pptx: PptxInstance;
  slide: PptxSlide;
  host: HTMLElement;
  origin: DOMRect;
  ops: Array<() => void | Promise<void>>;
  fontCssPromise: Promise<string>;
};

async function buildSlide(
  pptx: PptxInstance,
  slide: PptxSlide,
  host: HTMLElement,
  fontCssPromise: Promise<string>,
): Promise<void> {
  const origin = host.getBoundingClientRect();

  const rootBg = parseColor(getComputedStyle(host).backgroundColor);
  if (rootBg && rootBg.a > 0.01) {
    slide.background = { color: rootBg.hex };
  } else {
    slide.background = { color: 'FFFFFF' };
  }

  // Image work is async; collect ops in DOM order, then run sequentially so
  // shapes keep their stacking order in the final deck.
  const ctx: BuildContext = { pptx, slide, host, origin, ops: [], fontCssPromise };
  walk(host, ctx);
  for (const op of ctx.ops) await op();
}

function walk(el: HTMLElement, ctx: BuildContext): void {
  const style = getComputedStyle(el);
  if (style.display === 'none' || style.visibility === 'hidden') return;
  if (Number(style.opacity) === 0) return;

  const rect = el.getBoundingClientRect();
  const box = {
    x: inches(rect.left - ctx.origin.left),
    y: inches(rect.top - ctx.origin.top),
    w: inches(rect.width),
    h: inches(rect.height),
  };
  const hasArea = rect.width > 0.5 && rect.height > 0.5;
  const tag = el.tagName.toLowerCase();

  if (tag === 'img') {
    const img = el as HTMLImageElement;
    if (hasArea && img.currentSrc) {
      const shadow = parseSimpleBoxShadow(style.boxShadow);
      ctx.ops.push(async () => {
        const data = await toDataUrl(img.currentSrc);
        if (data) {
          const opts: Record<string, unknown> = { data, ...box };
          if (shadow) opts.shadow = toPptxShadow(shadow);
          ctx.slide.addImage(opts as Parameters<PptxSlide['addImage']>[0]);
        }
      });
    }
    return;
  }

  if (tag === 'svg') {
    if (hasArea) {
      ctx.ops.push(async () => {
        const data = await rasterizeSvg(el as unknown as SVGSVGElement, rect.width, rect.height);
        if (data) ctx.slide.addImage({ data, ...box });
      });
    }
    return;
  }

  if (tag === 'canvas') {
    if (hasArea) {
      try {
        const data = (el as HTMLCanvasElement).toDataURL('image/png');
        ctx.ops.push(() => {
          ctx.slide.addImage({ data, ...box });
        });
      } catch {}
    }
    return;
  }

  if (el !== ctx.host && hasArea && shouldRasterizeSubtree(style)) {
    ctx.ops.push(async () => {
      const fontCss = await ctx.fontCssPromise;
      const data = await rasterizeElement(el, rect.width, rect.height, fontCss);
      if (data) ctx.slide.addImage({ data, ...box });
    });
    return;
  }

  if (el !== ctx.host && hasArea) {
    emitBoxDecoration(style, box, ctx.slide, ctx.pptx);
  }

  if (isTextLeaf(el)) {
    emitText(el, style, ctx);
    return;
  }

  for (const child of Array.from(el.children)) {
    if (child instanceof HTMLElement || child instanceof SVGElement) {
      walk(child as HTMLElement, ctx);
    }
  }
}

function emitBoxDecoration(
  style: CSSStyleDeclaration,
  box: { x: number; y: number; w: number; h: number },
  slide: PptxSlide,
  pptx: PptxInstance,
): void {
  const bg = parseColor(style.backgroundColor);
  const border = parseBorder(style);
  const shadow = parseSimpleBoxShadow(style.boxShadow);
  if ((!bg || bg.a <= 0.01) && !border && !shadow) return;

  const radius = Math.max(
    parseFloat(style.borderTopLeftRadius) || 0,
    parseFloat(style.borderTopRightRadius) || 0,
  );
  const shapeType = radius > 1 ? pptx.ShapeType.roundRect : pptx.ShapeType.rect;

  const options: Record<string, unknown> = { ...box };
  if (bg && bg.a > 0.01) {
    options.fill = { color: bg.hex, transparency: Math.round((1 - bg.a) * 100) };
  } else {
    options.fill = { type: 'none' };
  }
  if (border) {
    options.line = { color: border.hex, width: border.width };
  }
  if (shadow) {
    options.shadow = toPptxShadow(shadow);
  }
  if (shapeType === pptx.ShapeType.roundRect) {
    // pptx rectRadius is a fraction of the shorter side.
    const shorter = Math.min(box.w, box.h) * PX_PER_IN;
    options.rectRadius = Math.min(0.5, radius / Math.max(1, shorter)) * Math.min(box.w, box.h);
  }
  slide.addShape(shapeType, options);
}

function emitText(el: HTMLElement, style: CSSStyleDeclaration, ctx: BuildContext): void {
  const range = document.createRange();
  range.selectNodeContents(el);
  const bbox = range.getBoundingClientRect();
  const elRect = el.getBoundingClientRect();
  const rect = bbox.width >= 1 && bbox.height >= 1 ? bbox : elRect;

  const fontSizePx = parseFloat(style.fontSize) || 16;
  let lineHeightPx = parseFloat(style.lineHeight);
  if (!Number.isFinite(lineHeightPx)) lineHeightPx = fontSizePx * 1.2;
  const align = mapTextAlign(style.textAlign);
  const singleLine = rect.height <= lineHeightPx * 1.4;
  const isInline = style.display.startsWith('inline') && style.display !== 'inline-block';

  let runs: TextRun[];
  if (singleLine) {
    runs = collectRuns(el);
  } else {
    runs = collectLineWrappedRuns(el, lineHeightPx);
    if (runs.length === 0) runs = collectRuns(el);
  }
  if (runs.length === 0) return;

  // For text the browser wrapped onto one line, keep the tight bbox and disable
  // wrapping so PowerPoint's wider font metrics can't break a word. For wrapped
  // text we've already inserted explicit breakLine markers per browser line, so
  // we still set wrap:false but size the frame to the element's content box so
  // alignment (center/right) resolves against the same width the browser used.
  let x: number;
  let w: number;
  if (singleLine || isInline) {
    x = inches(rect.left - ctx.origin.left);
    w = inches(rect.width) + 0.12;
  } else {
    const padL = parseFloat(style.paddingLeft) || 0;
    const padR = parseFloat(style.paddingRight) || 0;
    const borderL = parseFloat(style.borderLeftWidth) || 0;
    const contentLeft = elRect.left + borderL + padL;
    const contentWidth = el.clientWidth - padL - padR;
    x = inches(contentLeft - ctx.origin.left);
    w = inches(contentWidth > 1 ? contentWidth : rect.width) + 0.08;
  }

  const y = inches(rect.top - ctx.origin.top);
  const h = inches(rect.height) + 0.08;

  ctx.ops.push(() => {
    ctx.slide.addText(runs, {
      x,
      y,
      w,
      h,
      align,
      valign: 'top',
      margin: 0,
      lineSpacing: points(lineHeightPx),
      wrap: false,
      autoFit: false,
    });
  });
}

function isTextLeaf(el: HTMLElement): boolean {
  if (!el.textContent?.trim()) return false;
  for (const child of Array.from(el.children)) {
    if (!(child instanceof HTMLElement)) continue;
    if (!child.textContent?.trim()) continue;
    const d = getComputedStyle(child).display;
    if (BLOCK_DISPLAYS.has(d)) return false;
  }
  return true;
}

function collectRuns(el: HTMLElement): TextRun[] {
  const runs: TextRun[] = [];
  let pendingBreak = false;

  const visit = (node: Node): void => {
    if (node.nodeType === Node.TEXT_NODE) {
      const raw = node.textContent ?? '';
      const text = raw.replace(/\s+/g, ' ');
      if (!text.trim() && !text) return;
      const parent = node.parentElement;
      if (!parent) return;
      const ps = getComputedStyle(parent);
      runs.push({
        text,
        options: {
          ...runStyle(ps),
          ...(pendingBreak ? { breakLine: true } : {}),
        },
      });
      pendingBreak = false;
      return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE) return;
    const childEl = node as HTMLElement;
    if (childEl.tagName.toLowerCase() === 'br') {
      pendingBreak = true;
      return;
    }
    const cs = getComputedStyle(childEl);
    if (cs.display === 'none' || cs.visibility === 'hidden') return;
    for (const child of Array.from(childEl.childNodes)) visit(child);
  };

  for (const child of Array.from(el.childNodes)) visit(child);

  while (runs.length && !runs[0].text.trim()) runs.shift();
  while (runs.length && !runs[runs.length - 1].text.trim()) runs.pop();
  return runs;
}

type LineSeg = {
  text: string;
  style: TextRun['options'];
  top: number;
};

function collectLineWrappedRuns(el: HTMLElement, lineHeightPx: number): TextRun[] {
  const segs: LineSeg[] = [];
  const range = document.createRange();
  const tolerance = Math.max(2, lineHeightPx * 0.4);

  const visit = (node: Node): void => {
    if (node.nodeType === Node.TEXT_NODE) {
      const tn = node as Text;
      const parent = tn.parentElement;
      if (!parent) return;
      const ps = getComputedStyle(parent);
      const style = runStyle(ps);
      const data = tn.data;
      if (data.length === 0) return;

      let segStart = 0;
      let segTop: number | null = null;
      const flush = (end: number, nextTop: number | null) => {
        if (end > segStart && segTop !== null) {
          const text = data.slice(segStart, end).replace(/\s+/g, ' ');
          if (text.length > 0) segs.push({ text, style, top: segTop });
        }
        segStart = end;
        segTop = nextTop;
      };

      for (let i = 0; i < data.length; i++) {
        range.setStart(tn, i);
        range.setEnd(tn, i + 1);
        const rects = range.getClientRects();
        if (rects.length === 0) continue;
        const rect = rects[0];
        if (rect.width === 0 && rect.height === 0) continue;
        const top = rect.top;
        if (segTop === null) {
          segTop = top;
        } else if (Math.abs(top - segTop) > tolerance) {
          flush(i, top);
        }
      }
      flush(data.length, null);
      return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE) return;
    const childEl = node as HTMLElement;
    if (childEl.tagName.toLowerCase() === 'br') {
      // BRs surface as a top jump in the next text node; nothing to emit here.
      return;
    }
    const cs = getComputedStyle(childEl);
    if (cs.display === 'none' || cs.visibility === 'hidden') return;
    for (const child of Array.from(childEl.childNodes)) visit(child);
  };

  for (const child of Array.from(el.childNodes)) visit(child);
  if (segs.length === 0) return [];

  type Line = { top: number; segs: LineSeg[] };
  const lines: Line[] = [];
  for (const seg of segs) {
    const last = lines[lines.length - 1];
    if (last && Math.abs(seg.top - last.top) <= tolerance) {
      last.segs.push(seg);
    } else {
      lines.push({ top: seg.top, segs: [seg] });
    }
  }

  const runs: TextRun[] = [];
  for (let li = 0; li < lines.length; li++) {
    const line = lines[li];
    const cleaned = line.segs.map((s) => ({ ...s }));
    if (cleaned.length > 0) {
      cleaned[0].text = cleaned[0].text.replace(/^\s+/, '');
      cleaned[cleaned.length - 1].text = cleaned[cleaned.length - 1].text.replace(/\s+$/, '');
    }
    const nonEmpty = cleaned.filter((s) => s.text.length > 0);
    if (nonEmpty.length === 0) {
      // preserve blank line — pptx needs a run to render the gap
      runs.push({ text: ' ', options: { ...(li > 0 ? { breakLine: true } : {}) } });
      continue;
    }
    for (let si = 0; si < nonEmpty.length; si++) {
      const seg = nonEmpty[si];
      const isFirstOfLine = si === 0;
      runs.push({
        text: seg.text,
        options: {
          ...seg.style,
          ...(isFirstOfLine && li > 0 ? { breakLine: true } : {}),
        },
      });
    }
  }
  return runs;
}

function runStyle(cs: CSSStyleDeclaration): TextRun['options'] {
  const weight = Number(cs.fontWeight);
  const color = parseColor(cs.color);
  const decoration = cs.textDecorationLine || cs.textDecoration;
  return {
    bold: Number.isFinite(weight) ? weight >= 600 : cs.fontWeight === 'bold',
    italic: cs.fontStyle === 'italic',
    underline: decoration?.includes('underline') ? { style: 'sng' } : undefined,
    strike: decoration?.includes('line-through') ? 'sngStrike' : undefined,
    color: color?.hex ?? '000000',
    fontFace: primaryFontFamily(cs.fontFamily),
    fontSize: points(parseFloat(cs.fontSize) || 16),
  };
}

function mapTextAlign(value: string): 'left' | 'center' | 'right' | 'justify' {
  if (value === 'center') return 'center';
  if (value === 'right' || value === 'end') return 'right';
  if (value === 'justify') return 'justify';
  return 'left';
}

function primaryFontFamily(family: string): string {
  const first = family.split(',')[0]?.trim() ?? '';
  return first.replace(/^["']|["']$/g, '') || 'Arial';
}

function parseBorder(style: CSSStyleDeclaration): { hex: string; width: number } | null {
  const w = parseFloat(style.borderTopWidth);
  if (!Number.isFinite(w) || w <= 0) return null;
  if (style.borderTopStyle === 'none' || style.borderTopStyle === 'hidden') return null;
  const color = parseColor(style.borderTopColor);
  if (!color || color.a <= 0.01) return null;
  return { hex: color.hex, width: Math.max(0.25, points(w)) };
}

function parseColor(value: string | null): { hex: string; a: number } | null {
  if (!value) return null;
  const m = value.match(/rgba?\(([^)]+)\)/);
  if (!m) return null;
  const parts = m[1].split(',').map((p) => parseFloat(p.trim()));
  const [r, g, b] = parts;
  const a = parts.length >= 4 ? parts[3] : 1;
  if (![r, g, b].every(Number.isFinite)) return null;
  return { hex: toHex(r, g, b), a };
}

function toHex(r: number, g: number, b: number): string {
  const c = (n: number) =>
    Math.max(0, Math.min(255, Math.round(n)))
      .toString(16)
      .padStart(2, '0');
  return `${c(r)}${c(g)}${c(b)}`.toUpperCase();
}

function shouldRasterizeSubtree(style: CSSStyleDeclaration): boolean {
  if (style.filter && style.filter !== 'none') return true;
  if (style.backdropFilter && style.backdropFilter !== 'none') return true;
  if (style.maskImage && style.maskImage !== 'none') return true;
  const bgImage = style.backgroundImage;
  if (bgImage && bgImage !== 'none' && bgImage.includes('gradient(')) return true;
  const shadow = style.boxShadow;
  if (shadow && shadow !== 'none') {
    if (shadow.includes('inset')) return true;
    if (splitShadowLayers(shadow).length > 1) return true;
  }
  return false;
}

function splitShadowLayers(value: string): string[] {
  // Split top-level commas, ignoring commas inside parentheses (e.g. rgba()).
  const parts: string[] = [];
  let depth = 0;
  let start = 0;
  for (let i = 0; i < value.length; i++) {
    const ch = value[i];
    if (ch === '(') depth++;
    else if (ch === ')') depth--;
    else if (ch === ',' && depth === 0) {
      parts.push(value.slice(start, i).trim());
      start = i + 1;
    }
  }
  parts.push(value.slice(start).trim());
  return parts.filter((p) => p.length > 0);
}

function parseSimpleBoxShadow(value: string | null): Shadow | null {
  if (!value || value === 'none') return null;
  const layers = splitShadowLayers(value);
  if (layers.length !== 1) return null;
  const layer = layers[0];
  if (layer.includes('inset')) return null;

  const colorMatch = layer.match(/rgba?\([^)]+\)|#[0-9a-fA-F]{3,8}/);
  const color = colorMatch ? parseColor(colorMatch[0]) : null;
  const rest = colorMatch ? layer.replace(colorMatch[0], '').trim() : layer.trim();
  const nums = rest
    .split(/\s+/)
    .map((s) => parseFloat(s))
    .filter((n) => Number.isFinite(n));
  if (nums.length < 2) return null;
  const [offsetX, offsetY, blurPx = 0] = nums;
  const dist = Math.hypot(offsetX, offsetY);
  // PowerPoint angle: 0 = right, 90 = down. CSS uses (x, y) with y down,
  // so atan2(y, x) gives the same convention.
  let angleDeg = (Math.atan2(offsetY, offsetX) * 180) / Math.PI;
  if (angleDeg < 0) angleDeg += 360;
  return {
    hex: color?.hex ?? '000000',
    alpha: color?.a ?? 1,
    blurPx: Math.max(0, blurPx),
    offsetPx: dist,
    angleDeg,
  };
}

function toPptxShadow(s: Shadow): PptxShadow {
  return {
    type: 'outer',
    color: s.hex,
    opacity: Math.max(0, Math.min(1, s.alpha)),
    blur: Math.min(100, points(s.blurPx)),
    offset: Math.min(200, points(s.offsetPx)),
    angle: Math.round(s.angleDeg) % 360,
  };
}

function freezeAnimations(root: HTMLElement): void {
  if (typeof document.getAnimations !== 'function') return;
  for (const anim of document.getAnimations()) {
    const target = (anim.effect as KeyframeEffect | null)?.target;
    if (target && root.contains(target)) {
      try {
        anim.finish();
      } catch {}
    }
  }
}

async function toDataUrl(url: string): Promise<string | null> {
  if (url.startsWith('data:')) return url;
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    const blob = await res.blob();
    return await blobToDataUrl(blob);
  } catch {
    return null;
  }
}

function blobToDataUrl(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(blob);
  });
}

async function rasterizeSvg(
  svg: SVGSVGElement,
  width: number,
  height: number,
): Promise<string | null> {
  try {
    const clone = svg.cloneNode(true) as SVGSVGElement;
    inlineSvgStyles(svg, clone);
    clone.setAttribute('width', String(width));
    clone.setAttribute('height', String(height));
    if (!clone.getAttribute('xmlns')) {
      clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    }
    if (!clone.getAttribute('viewBox')) {
      const vbW = svg.viewBox.baseVal?.width || width;
      const vbH = svg.viewBox.baseVal?.height || height;
      clone.setAttribute('viewBox', `0 0 ${vbW} ${vbH}`);
    }
    const serialized = new XMLSerializer().serializeToString(clone);
    const svgUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(serialized)}`;
    const img = await loadImage(svgUrl);
    const scale = 2;
    const canvas = document.createElement('canvas');
    canvas.width = Math.max(1, Math.round(width * scale));
    canvas.height = Math.max(1, Math.round(height * scale));
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL('image/png');
  } catch {
    return null;
  }
}

function inlineSvgStyles(src: Element, dst: Element): void {
  if (!(dst instanceof Element)) return;
  if (src instanceof SVGElement || src.namespaceURI === 'http://www.w3.org/2000/svg') {
    const cs = getComputedStyle(src);
    const declarations: string[] = [];
    for (const prop of SVG_PRESENTATION_PROPS) {
      const value = cs.getPropertyValue(prop);
      if (value && value !== 'normal' && value !== 'auto') {
        declarations.push(`${prop}:${value}`);
      }
    }
    if (declarations.length > 0) {
      const existing = dst.getAttribute('style') ?? '';
      dst.setAttribute('style', `${declarations.join(';')};${existing}`);
    }
  }
  const srcKids = Array.from(src.children);
  const dstKids = Array.from(dst.children);
  for (let i = 0; i < srcKids.length && i < dstKids.length; i++) {
    inlineSvgStyles(srcKids[i], dstKids[i]);
  }
}

async function rasterizeElement(
  el: HTMLElement,
  width: number,
  height: number,
  fontCss: string,
): Promise<string | null> {
  try {
    const clone = el.cloneNode(true) as HTMLElement;
    inlineHtmlStyles(el, clone);
    await inlineImages(clone);
    const fontStyle = fontCss
      ? `<style xmlns="http://www.w3.org/1999/xhtml">${escapeXml(fontCss)}</style>`
      : '';
    const xhtml = new XMLSerializer().serializeToString(clone);
    const svg =
      `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">` +
      `<foreignObject width="100%" height="100%">` +
      `<div xmlns="http://www.w3.org/1999/xhtml" style="width:${width}px;height:${height}px;overflow:hidden;">` +
      `${fontStyle}${xhtml}` +
      `</div></foreignObject></svg>`;
    const svgUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
    const img = await loadImage(svgUrl);
    const scale = 2;
    const canvas = document.createElement('canvas');
    canvas.width = Math.max(1, Math.round(width * scale));
    canvas.height = Math.max(1, Math.round(height * scale));
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL('image/png');
  } catch {
    return null;
  }
}

function inlineHtmlStyles(src: Element, dst: Element): void {
  if (src instanceof HTMLElement && dst instanceof HTMLElement) {
    const cs = getComputedStyle(src);
    let cssText = '';
    for (let i = 0; i < cs.length; i++) {
      const prop = cs.item(i);
      const value = cs.getPropertyValue(prop);
      if (value) cssText += `${prop}:${value};`;
    }
    dst.setAttribute('style', cssText);
    // foreignObject ignores class-derived styles, so drop the attributes
    // and rely on the inlined values above.
    dst.removeAttribute('class');
  } else if (src instanceof SVGElement && dst instanceof SVGElement) {
    const cs = getComputedStyle(src);
    const declarations: string[] = [];
    for (const prop of SVG_PRESENTATION_PROPS) {
      const value = cs.getPropertyValue(prop);
      if (value) declarations.push(`${prop}:${value}`);
    }
    if (declarations.length > 0) {
      dst.setAttribute('style', declarations.join(';'));
    }
    dst.removeAttribute('class');
  }
  const srcKids = Array.from(src.children);
  const dstKids = Array.from(dst.children);
  for (let i = 0; i < srcKids.length && i < dstKids.length; i++) {
    inlineHtmlStyles(srcKids[i], dstKids[i]);
  }
}

async function inlineImages(root: Element): Promise<void> {
  const imgs = root.querySelectorAll('img');
  await Promise.all(
    Array.from(imgs).map(async (img) => {
      const src = img.getAttribute('src') || img.currentSrc;
      if (!src || src.startsWith('data:')) return;
      const dataUrl = await toDataUrl(src);
      if (dataUrl) img.setAttribute('src', dataUrl);
    }),
  );
}

function escapeXml(s: string): string {
  return s.replace(/[<>&]/g, (c) => (c === '<' ? '&lt;' : c === '>' ? '&gt;' : '&amp;'));
}

let cachedFontCss: Promise<string> | null = null;
async function collectInlineFontCss(): Promise<string> {
  if (cachedFontCss) return cachedFontCss;
  cachedFontCss = (async () => {
    const parts: string[] = [];
    for (const sheet of Array.from(document.styleSheets)) {
      let rules: CSSRuleList | null = null;
      try {
        rules = sheet.cssRules;
      } catch {
        rules = null;
      }
      if (!rules) continue;
      const base = sheet.href ?? document.baseURI;
      for (const rule of Array.from(rules)) {
        if (rule.constructor.name !== 'CSSFontFaceRule') continue;
        const fr = rule as CSSFontFaceRule;
        let cssText = fr.cssText;
        const urls = [...cssText.matchAll(/url\(\s*(["']?)([^"')]+)\1\s*\)/g)];
        for (const m of urls) {
          const orig = m[2];
          if (orig.startsWith('data:')) continue;
          try {
            const absUrl = new URL(orig, base).href;
            const res = await fetch(absUrl);
            if (!res.ok) continue;
            const blob = await res.blob();
            const dataUrl = await blobToDataUrl(blob);
            cssText = cssText.split(orig).join(dataUrl);
          } catch {}
        }
        parts.push(cssText);
      }
    }
    return parts.join('\n');
  })();
  return cachedFontCss;
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = (e) => reject(e);
    img.src = src;
  });
}

function nextPaint(): Promise<void> {
  return new Promise((resolve) => requestAnimationFrame(() => resolve()));
}

function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.rel = 'noopener';
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 0);
}
