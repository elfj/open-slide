import {
  type DesignSystem,
  type Page,
  SharedElement,
  type SlideMeta,
  type SlideTransition,
  useSlidePageNumber,
} from '@open-slide/core';
import type { CSSProperties, ReactNode } from 'react';

export const design: DesignSystem = {
  palette: { bg: '#11130f', text: '#f4f0e6', accent: '#7bdcb5' },
  fonts: {
    display: 'Avenir Next, "SF Pro Display", system-ui, sans-serif',
    body: 'Avenir, "SF Pro Text", system-ui, sans-serif',
  },
  typeScale: { hero: 156, body: 34 },
  radius: 20,
};

export const meta: SlideMeta = {
  title: 'Magic Move Prototype',
  createdAt: '2026-06-22T17:00:36.438Z',
};

const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)';

export const transition: SlideTransition = {
  duration: 1400,
  easing: EASE,
  exit: {
    duration: 360,
    easing: 'cubic-bezier(0.4, 0, 1, 1)',
    keyframes: [{ opacity: 1 }, { opacity: 0.34 }],
  },
  enter: {
    duration: 520,
    delay: 420,
    easing: EASE,
    keyframes: [{ opacity: 0.34 }, { opacity: 1 }],
  },
  sharedElements: {
    duration: 1400,
    easing: EASE,
  },
};

const mono = '"SF Mono", "JetBrains Mono", Menlo, ui-monospace, monospace';
const muted = 'rgba(244, 240, 230, 0.58)';
const faint = 'rgba(244, 240, 230, 0.24)';
const hairline = 'rgba(244, 240, 230, 0.12)';
const yellow = '#f5c95f';
const coral = '#ff7f6e';
const blue = '#7aa7ff';

const root: CSSProperties = {
  width: '100%',
  height: '100%',
  position: 'relative',
  overflow: 'hidden',
  background: 'var(--osd-bg)',
  color: 'var(--osd-text)',
  fontFamily: 'var(--osd-font-body)',
  backgroundImage:
    'linear-gradient(rgba(244,240,230,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(244,240,230,0.055) 1px, transparent 1px)',
  backgroundSize: '80px 80px',
};

const Header = ({ label }: { label: string }) => (
  <div
    style={{
      position: 'absolute',
      top: 70,
      left: 100,
      right: 100,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontFamily: mono,
      fontSize: 18,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: muted,
    }}
  >
    <span>{label}</span>
    <span style={{ color: 'var(--osd-accent)' }}>same object / new geometry</span>
  </div>
);

const Footer = ({ note }: { note: string }) => {
  const { current, total } = useSlidePageNumber();
  return (
    <div
      style={{
        position: 'absolute',
        left: 100,
        right: 100,
        bottom: 70,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: mono,
        fontSize: 16,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: faint,
      }}
    >
      <span>{note}</span>
      <span>
        {String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </span>
    </div>
  );
};

const BigText = ({ children, style }: { children: ReactNode; style?: CSSProperties }) => (
  <h1
    style={{
      margin: 0,
      fontFamily: 'var(--osd-font-display)',
      fontSize: 'var(--osd-size-hero)',
      lineHeight: 0.9,
      letterSpacing: '-0.055em',
      fontWeight: 850,
      ...style,
    }}
  >
    {children}
  </h1>
);

const BrandMark = ({ left, top, size }: { left: number; top: number; size: number }) => (
  <SharedElement id="brand-mark">
    <div
      style={{
        position: 'absolute',
        left,
        top,
        width: size,
        height: size,
        borderRadius: size * 0.28,
        background: 'var(--osd-accent)',
        boxShadow: '0 28px 80px rgba(123, 220, 181, 0.22)',
        display: 'grid',
        placeItems: 'center',
        color: '#11130f',
        fontFamily: mono,
        fontSize: size * 0.17,
        letterSpacing: '0.12em',
        fontWeight: 850,
      }}
    >
      OS
    </div>
  </SharedElement>
);

const StatusChip = ({ left, top, width }: { left: number; top: number; width: number }) => {
  const height = width * 0.16;
  return (
    <SharedElement id="state-chip">
      <div
        style={{
          position: 'absolute',
          left,
          top,
          width,
          height,
          borderRadius: 999,
          background: yellow,
          color: '#11130f',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: mono,
          fontSize: width * 0.045,
          letterSpacing: '0.14em',
          fontWeight: 850,
          textTransform: 'uppercase',
        }}
      >
        shared object
      </div>
    </SharedElement>
  );
};

const Metric = ({
  label,
  value,
  color,
  scale,
}: {
  label: string;
  value: string;
  color: string;
  scale: number;
}) => (
  <div style={{ borderTop: `${Math.max(1, scale)}px solid ${hairline}`, paddingTop: 18 * scale }}>
    <div
      style={{
        fontFamily: mono,
        fontSize: 13 * scale,
        color,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
      }}
    >
      {label}
    </div>
    <div style={{ marginTop: 10 * scale, fontSize: 44 * scale, lineHeight: 1, fontWeight: 850 }}>
      {value}
    </div>
  </div>
);

const Bar = ({ height, color, scale }: { height: number; color: string; scale: number }) => (
  <div
    style={{
      width: 34 * scale,
      height: height * scale,
      borderRadius: 10 * scale,
      background: color,
      alignSelf: 'end',
    }}
  />
);

const SharedArtifact = ({ left, top, width }: { left: number; top: number; width: number }) => {
  const scale = width / 760;
  const height = width * 0.62;
  return (
    <SharedElement id="artifact-card">
      <div
        style={{
          position: 'absolute',
          left,
          top,
          width,
          height,
          borderRadius: 28 * scale,
          background: 'rgba(244, 240, 230, 0.078)',
          border: `${Math.max(1, scale)}px solid ${hairline}`,
          boxShadow: `0 ${40 * scale}px ${120 * scale}px rgba(0, 0, 0, 0.32)`,
          backdropFilter: 'blur(16px)',
          padding: 34 * scale,
          boxSizing: 'border-box',
          display: 'grid',
          gridTemplateRows: 'auto 1fr auto',
          gap: 28 * scale,
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontFamily: mono,
            fontSize: 14 * scale,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: muted,
          }}
        >
          <span>open-slide runtime</span>
          <span style={{ color: 'var(--osd-accent)' }}>id: artifact-card</span>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            alignItems: 'center',
            gap: 42 * scale,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: 'var(--osd-font-display)',
                fontSize: 74 * scale,
                lineHeight: 0.9,
                letterSpacing: '-0.045em',
                fontWeight: 850,
              }}
            >
              SAME
              <br />
              OBJECT
            </div>
            <p
              style={{
                margin: `${26 * scale}px 0 0`,
                fontSize: 24 * scale,
                lineHeight: 1.36,
                color: muted,
              }}
            >
              Position and size change. The visual identity stays intact.
            </p>
          </div>
          <div
            style={{
              height: 210 * scale,
              display: 'flex',
              alignItems: 'end',
              gap: 14 * scale,
              borderLeft: `${Math.max(1, scale)}px solid ${hairline}`,
              paddingLeft: 32 * scale,
            }}
          >
            <Bar height={80} color={coral} scale={scale} />
            <Bar height={126} color={yellow} scale={scale} />
            <Bar height={174} color="var(--osd-accent)" scale={scale} />
            <Bar height={108} color={blue} scale={scale} />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24 * scale }}>
          <Metric label="source" value="same" color={coral} scale={scale} />
          <Metric label="motion" value="flip" color={yellow} scale={scale} />
          <Metric label="target" value="same" color="var(--osd-accent)" scale={scale} />
        </div>
      </div>
    </SharedElement>
  );
};

const Cover: Page = () => (
  <div style={root}>
    <Header label="core primitive / source state" />
    <BrandMark left={146} top={214} size={184} />
    <StatusChip left={146} top={442} width={344} />
    <div style={{ position: 'absolute', left: 146, top: 560, width: 920 }}>
      <BigText>
        Magic Move
        <br />
        means same.
      </BigText>
    </div>
    <SharedArtifact left={1088} top={232} width={650} />
    <Footer note="cover state" />
  </div>
);

const LayoutMorph: Page = () => (
  <div style={root}>
    <Header label="one magic move / target state" />
    <BrandMark left={1562} top={170} size={116} />
    <StatusChip left={1238} top={838} width={356} />
    <SharedArtifact left={148} top={238} width={760} />
    <div style={{ position: 'absolute', left: 1088, top: 302, width: 600 }}>
      <h2
        style={{
          margin: 0,
          fontFamily: 'var(--osd-font-display)',
          fontSize: 96,
          lineHeight: 0.98,
          letterSpacing: '-0.045em',
          fontWeight: 820,
        }}
      >
        Core moves the object.
        <br />
        The slide explains.
      </h2>
      <p style={{ margin: '42px 0 0', fontSize: 31, lineHeight: 1.46, color: muted }}>
        Text that changes between pages should not be part of the shared element. It belongs around
        the object, not inside the identity being moved.
      </p>
    </div>
    <Footer note="same mark / same chip / same card" />
  </div>
);

export default [Cover, LayoutMorph] satisfies Page[];
