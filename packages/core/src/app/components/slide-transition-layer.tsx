import { type MutableRefObject, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { SlidePageProvider } from '../lib/page-context';
import type { Page } from '../lib/sdk';
import {
  type EntryDirection,
  type StepAggregate,
  type StepController,
  StepHost,
} from '../lib/step-context';
import {
  resolveTransition,
  type SharedElementTransition,
  type SlideTransition,
  type TransitionPhase,
} from '../lib/transition';

type Props = {
  pages: Page[];
  index: number;
  total: number;
  moduleTransition?: SlideTransition;
  disabled?: boolean;
  stepControllerRef?: MutableRefObject<StepController | null>;
  entryDirection?: EntryDirection;
  onStepAggregateChange?: (aggregate: StepAggregate) => void;
};

type Direction = 'forward' | 'backward';

const DEFAULT_EASING = 'cubic-bezier(.4, 0, .2, 1)';
const SHARED_ELEMENT_SELECTOR = '[data-osd-shared-element]';

function runPhase(
  el: HTMLElement,
  phase: TransitionPhase | undefined,
  fallbackDuration: number,
  fallbackEasing: string,
): Animation | null {
  if (!phase) return null;
  return el.animate(phase.keyframes, {
    duration: phase.duration ?? fallbackDuration,
    easing: phase.easing ?? fallbackEasing,
    delay: phase.delay ?? 0,
    fill: 'both',
  });
}

type ResolvedSharedElementTransition = Required<SharedElementTransition>;

function resolveSharedElementTransition(
  sharedElements: SlideTransition['sharedElements'],
  fallbackDuration: number,
  fallbackEasing: string,
): ResolvedSharedElementTransition | null {
  if (!sharedElements) return null;
  if (sharedElements === true) {
    return { duration: fallbackDuration, easing: fallbackEasing, delay: 0 };
  }
  return {
    duration: sharedElements.duration ?? fallbackDuration,
    easing: sharedElements.easing ?? fallbackEasing,
    delay: sharedElements.delay ?? 0,
  };
}

type LocalRect = {
  left: number;
  top: number;
  width: number;
  height: number;
};

function measureLocalRect(el: HTMLElement, wrapper: HTMLElement, wrapperRect: DOMRect): LocalRect {
  const rect = el.getBoundingClientRect();
  const scaleX = wrapperRect.width / (wrapper.offsetWidth || wrapperRect.width || 1) || 1;
  const scaleY = wrapperRect.height / (wrapper.offsetHeight || wrapperRect.height || 1) || 1;
  return {
    left: (rect.left - wrapperRect.left) / scaleX,
    top: (rect.top - wrapperRect.top) / scaleY,
    width: rect.width / scaleX,
    height: rect.height / scaleY,
  };
}

function hasUsableRect(rect: LocalRect): boolean {
  return rect.width > 0 && rect.height > 0;
}

function collectSharedElements(root: HTMLElement): Map<string, HTMLElement> {
  const elements = new Map<string, HTMLElement>();
  for (const el of root.querySelectorAll<HTMLElement>(SHARED_ELEMENT_SELECTOR)) {
    const id = el.dataset.osdSharedElement;
    if (id && !elements.has(id)) elements.set(id, el);
  }
  return elements;
}

function copyComputedStyles(source: HTMLElement, target: HTMLElement): void {
  const styles = getComputedStyle(source);
  for (let i = 0; i < styles.length; i++) {
    const prop = styles[i];
    target.style.setProperty(prop, styles.getPropertyValue(prop), styles.getPropertyPriority(prop));
  }

  const sourceChildren = source.querySelectorAll<HTMLElement>('*');
  const targetChildren = target.querySelectorAll<HTMLElement>('*');
  for (let i = 0; i < sourceChildren.length; i++) {
    const child = targetChildren[i];
    if (!child) continue;
    copyComputedStyles(sourceChildren[i], child);
  }
}

function cloneSharedElement(source: HTMLElement): HTMLElement {
  const clone = source.cloneNode(true) as HTMLElement;
  copyComputedStyles(source, clone);
  clone.removeAttribute('data-osd-shared-element');
  return clone;
}

function parsePx(value: string): number | null {
  const n = Number.parseFloat(value);
  return Number.isFinite(n) ? n : null;
}

function scaleRadius(value: string, scaleX: number, scaleY: number): string {
  const parts = value.trim().split(/\s+/);
  const x = parsePx(parts[0] ?? '');
  const y = parsePx(parts[1] ?? parts[0] ?? '');
  if (x === null || y === null) return value;
  const nextX = x / scaleX;
  const nextY = y / scaleY;
  return Math.abs(nextX - nextY) < 0.001 ? `${nextX}px` : `${nextX}px ${nextY}px`;
}

function radiusKeyframe(styles: CSSStyleDeclaration, scaleX = 1, scaleY = 1): Keyframe {
  return {
    borderTopLeftRadius: scaleRadius(styles.borderTopLeftRadius, scaleX, scaleY),
    borderTopRightRadius: scaleRadius(styles.borderTopRightRadius, scaleX, scaleY),
    borderBottomRightRadius: scaleRadius(styles.borderBottomRightRadius, scaleX, scaleY),
    borderBottomLeftRadius: scaleRadius(styles.borderBottomLeftRadius, scaleX, scaleY),
  };
}

function hideOriginal(el: HTMLElement): () => void {
  const value = el.style.getPropertyValue('visibility');
  const priority = el.style.getPropertyPriority('visibility');
  el.style.setProperty('visibility', 'hidden', 'important');
  return () => {
    if (value) el.style.setProperty('visibility', value, priority);
    else el.style.removeProperty('visibility');
  };
}

function appendPositionedClone(
  wrapper: HTMLElement,
  overlay: HTMLElement,
  source: HTMLElement,
  rect: LocalRect,
): HTMLElement {
  if (!overlay.parentElement) wrapper.appendChild(overlay);

  const clone = cloneSharedElement(source);
  Object.assign(clone.style, {
    position: 'absolute',
    left: '0',
    top: '0',
    width: `${rect.width}px`,
    height: `${rect.height}px`,
    margin: '0',
    transformOrigin: 'top left',
    pointerEvents: 'none',
    boxSizing: 'border-box',
  });
  overlay.appendChild(clone);
  return clone;
}

function sharedElementAnimationOptions(
  phase: ResolvedSharedElementTransition,
): KeyframeAnimationOptions {
  return {
    duration: phase.duration,
    easing: phase.easing,
    delay: phase.delay,
    fill: 'both',
  };
}

function runStationarySharedElementAnimation(
  clone: HTMLElement,
  rect: LocalRect,
  styles: CSSStyleDeclaration,
  fromOpacity: string,
  toOpacity: string,
  phase: ResolvedSharedElementTransition,
): Animation {
  const transform = `translate(${rect.left}px, ${rect.top}px) scale(1, 1)`;
  return clone.animate(
    [
      {
        ...radiusKeyframe(styles),
        opacity: fromOpacity,
        transform,
      },
      {
        ...radiusKeyframe(styles),
        opacity: toOpacity,
        transform,
      },
    ],
    sharedElementAnimationOptions(phase),
  );
}

function runSharedElementTransition(
  wrapper: HTMLElement,
  outgoingLayer: HTMLElement,
  incomingLayer: HTMLElement,
  phase: ResolvedSharedElementTransition,
): { animations: Animation[]; cleanup: () => void } {
  const wrapperRect = wrapper.getBoundingClientRect();
  if (wrapperRect.width === 0 || wrapperRect.height === 0) {
    return { animations: [], cleanup: () => {} };
  }

  const incoming = collectSharedElements(incomingLayer);
  const overlay = document.createElement('div');
  overlay.setAttribute('data-osd-shared-layer', '');
  Object.assign(overlay.style, {
    position: 'absolute',
    inset: '0',
    zIndex: '5',
    pointerEvents: 'none',
  });

  const animations: Animation[] = [];
  const restore: Array<() => void> = [];
  const outgoing = collectSharedElements(outgoingLayer);
  const handledIncoming = new Set<string>();

  for (const [id, source] of outgoing) {
    const target = incoming.get(id);
    const from = measureLocalRect(source, wrapper, wrapperRect);
    if (!hasUsableRect(from)) {
      if (target) {
        const to = measureLocalRect(target, wrapper, wrapperRect);
        if (hasUsableRect(to)) {
          handledIncoming.add(id);
          const clone = appendPositionedClone(wrapper, overlay, target, to);
          restore.push(hideOriginal(target));

          const targetStyles = getComputedStyle(target);
          animations.push(
            runStationarySharedElementAnimation(
              clone,
              to,
              targetStyles,
              '0',
              targetStyles.opacity,
              phase,
            ),
          );
        }
      }
      continue;
    }

    if (!target) {
      const clone = appendPositionedClone(wrapper, overlay, source, from);
      restore.push(hideOriginal(source));

      const sourceStyles = getComputedStyle(source);
      animations.push(
        runStationarySharedElementAnimation(
          clone,
          from,
          sourceStyles,
          sourceStyles.opacity,
          '0',
          phase,
        ),
      );
      continue;
    }

    const to = measureLocalRect(target, wrapper, wrapperRect);
    if (!hasUsableRect(to)) {
      const clone = appendPositionedClone(wrapper, overlay, source, from);
      restore.push(hideOriginal(source));

      const sourceStyles = getComputedStyle(source);
      animations.push(
        runStationarySharedElementAnimation(
          clone,
          from,
          sourceStyles,
          sourceStyles.opacity,
          '0',
          phase,
        ),
      );
      continue;
    }

    handledIncoming.add(id);

    const clone = appendPositionedClone(wrapper, overlay, source, from);
    restore.push(hideOriginal(source), hideOriginal(target));

    const sourceStyles = getComputedStyle(source);
    const targetStyles = getComputedStyle(target);
    const scaleX = to.width / from.width;
    const scaleY = to.height / from.height;
    animations.push(
      clone.animate(
        [
          {
            ...radiusKeyframe(sourceStyles),
            opacity: sourceStyles.opacity,
            transform: `translate(${from.left}px, ${from.top}px) scale(1, 1)`,
          },
          {
            ...radiusKeyframe(targetStyles, scaleX, scaleY),
            opacity: targetStyles.opacity,
            transform: `translate(${to.left}px, ${to.top}px) scale(${scaleX}, ${scaleY})`,
          },
        ],
        sharedElementAnimationOptions(phase),
      ),
    );
  }

  for (const [id, target] of incoming) {
    if (handledIncoming.has(id) || outgoing.has(id)) continue;

    const to = measureLocalRect(target, wrapper, wrapperRect);
    if (!hasUsableRect(to)) continue;

    const clone = appendPositionedClone(wrapper, overlay, target, to);
    restore.push(hideOriginal(target));

    const targetStyles = getComputedStyle(target);
    animations.push(
      runStationarySharedElementAnimation(
        clone,
        to,
        targetStyles,
        '0',
        targetStyles.opacity,
        phase,
      ),
    );
  }

  if (animations.length === 0) overlay.remove();

  let cleaned = false;
  return {
    animations,
    cleanup: () => {
      if (cleaned) return;
      cleaned = true;
      for (const fn of restore) fn();
      overlay.remove();
    },
  };
}

export function SlideTransitionLayer({
  pages,
  index,
  total,
  moduleTransition,
  disabled,
  stepControllerRef,
  entryDirection = 'jump',
  onStepAggregateChange,
}: Props) {
  const [current, setCurrent] = useState(index);
  const [outgoing, setOutgoing] = useState<number | null>(null);
  const [direction, setDirection] = useState<Direction>('forward');

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const outgoingLayerRef = useRef<HTMLDivElement | null>(null);
  const incomingLayerRef = useRef<HTMLDivElement | null>(null);
  const animsRef = useRef<Animation[]>([]);
  const cleanupRef = useRef<(() => void) | null>(null);
  const currentRef = useRef(current);
  currentRef.current = current;

  useEffect(() => {
    if (index === currentRef.current) return;

    const prev = currentRef.current;
    const next = index;

    // Interrupt: cancel in-flight animations. The previously-incoming page
    // (currentRef) becomes the new outgoing; React reuses its DOM slot.
    for (const a of animsRef.current) {
      try {
        a.cancel();
      } catch {}
    }
    animsRef.current = [];
    cleanupRef.current?.();
    cleanupRef.current = null;

    const transition = resolveTransition(pages, next, moduleTransition);
    if (disabled || !transition) {
      setCurrent(next);
      setOutgoing(null);
      return;
    }

    setDirection(next > prev ? 'forward' : 'backward');
    setOutgoing(prev);
    setCurrent(next);
  }, [index, pages, moduleTransition, disabled]);

  useLayoutEffect(() => {
    if (outgoing === null) return;

    const transition = resolveTransition(pages, current, moduleTransition);
    const wrapper = wrapperRef.current;
    const out = outgoingLayerRef.current;
    const inc = incomingLayerRef.current;
    if (!transition || !wrapper || !out || !inc) {
      setOutgoing(null);
      return;
    }

    wrapper.dataset.osdDir = direction;
    wrapper.style.setProperty('--osd-dir', direction === 'forward' ? '1' : '-1');

    const easing = transition.easing ?? DEFAULT_EASING;
    const duration = transition.duration;

    const anims: Animation[] = [];
    const exitAnim = runPhase(out, transition.exit, duration, easing);
    const enterAnim = runPhase(inc, transition.enter, duration, easing);
    if (exitAnim) anims.push(exitAnim);
    if (enterAnim) anims.push(enterAnim);

    const cleanups: Array<() => void> = [];
    const sharedPhase = resolveSharedElementTransition(transition.sharedElements, duration, easing);
    if (sharedPhase) {
      const shared = runSharedElementTransition(wrapper, out, inc, sharedPhase);
      anims.push(...shared.animations);
      cleanups.push(shared.cleanup);
    }
    animsRef.current = anims;

    if (anims.length === 0) {
      for (const fn of cleanups) fn();
      setOutgoing(null);
      return;
    }

    let cleaned = false;
    const cleanup = () => {
      if (cleaned) return;
      cleaned = true;
      for (const fn of cleanups) fn();
      if (cleanupRef.current === cleanup) cleanupRef.current = null;
    };
    cleanupRef.current = cleanup;

    let cancelled = false;
    Promise.all(anims.map((a) => a.finished))
      .then(() => {
        if (cancelled) return;
        cleanup();
        animsRef.current = [];
        setOutgoing(null);
      })
      .catch(() => {
        // AbortError fires when we cancel mid-flight on an interrupt.
      });

    return () => {
      cancelled = true;
    };
  }, [outgoing, current, direction, pages, moduleTransition]);

  useEffect(() => {
    return () => {
      for (const a of animsRef.current) {
        try {
          a.cancel();
        } catch {}
      }
      animsRef.current = [];
      cleanupRef.current?.();
      cleanupRef.current = null;
    };
  }, []);

  const CurrentPage = pages[current];
  const OutgoingPage = outgoing !== null ? pages[outgoing] : null;

  // Outgoing layer mirrors the direction we just navigated so its <Steps>
  // re-mounts in the state the audience just saw: forward nav → outgoing was
  // fully revealed; backward nav → outgoing was at zero reveals.
  const outgoingEntryDirection: EntryDirection =
    entryDirection === 'backward' ? 'forward' : 'backward';

  const noopControllerRef = useRef<StepController | null>(null);
  const activeControllerRef = stepControllerRef ?? noopControllerRef;

  return (
    <div
      ref={wrapperRef}
      className="relative h-full w-full"
      style={{ background: 'var(--osd-bg)' }}
    >
      {OutgoingPage && outgoing !== null ? (
        <div ref={outgoingLayerRef} className="absolute inset-0">
          <SlidePageProvider index={outgoing} total={total}>
            <StepHost
              isActivePage={false}
              entryDirection={outgoingEntryDirection}
              controllerRef={activeControllerRef}
            >
              <OutgoingPage />
            </StepHost>
          </SlidePageProvider>
        </div>
      ) : null}
      {CurrentPage ? (
        <div ref={incomingLayerRef} className="absolute inset-0">
          <SlidePageProvider index={current} total={total}>
            <StepHost
              isActivePage
              entryDirection={entryDirection}
              controllerRef={activeControllerRef}
              onAggregateChange={onStepAggregateChange}
            >
              <CurrentPage />
            </StepHost>
          </SlidePageProvider>
        </div>
      ) : null}
    </div>
  );
}
