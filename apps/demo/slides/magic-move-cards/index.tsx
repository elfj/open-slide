import {
  type DesignSystem,
  type Page,
  SharedElement,
  type SlideMeta,
  type SlideTransition,
} from '@open-slide/core';
import type { CSSProperties } from 'react';

export const design: DesignSystem = {
  palette: { bg: '#000000', text: '#f4f4f1', accent: '#ff2f50' },
  fonts: {
    display: 'Avenir Next, "SF Pro Display", system-ui, sans-serif',
    body: 'Avenir, "SF Pro Text", system-ui, sans-serif',
  },
  typeScale: { hero: 84, body: 28 },
  radius: 14,
};

export const meta: SlideMeta = {
  title: 'Magic Move Cards',
  createdAt: '2026-06-22T17:36:06.307Z',
};

const EASE = 'cubic-bezier(0.4, 0, 0.2, 1)';

export const transition: SlideTransition = {
  duration: 1200,
  easing: EASE,
  sharedElements: {
    duration: 1200,
    easing: EASE,
  },
};

const CARD_WIDTH = 224;
const CARD_HEIGHT = 312;
const CARD_GAP = 26;
const CARD_TOP = 384;
const CENTER_Y = CARD_TOP + CARD_HEIGHT / 2;
const TWO_CARD_LEFT = (1920 - CARD_WIDTH * 2 - CARD_GAP) / 2;
const THREE_CARD_LEFT = (1920 - CARD_WIDTH * 3 - CARD_GAP * 2) / 2;
const QUEUE_LEFT = THREE_CARD_LEFT + (CARD_WIDTH + CARD_GAP) * 2;
const BORDER = 'rgba(255, 255, 255, 0.22)';
const CARD_FILL = 'rgba(0, 0, 0, 0.86)';
const RED = '#ff2f50';

const root: CSSProperties = {
  width: '100%',
  height: '100%',
  position: 'relative',
  overflow: 'hidden',
  color: 'var(--osd-text)',
  fontFamily: 'var(--osd-font-body)',
  backgroundColor: 'var(--osd-bg)',
  backgroundImage:
    'radial-gradient(ellipse 760px 390px at 43% 54%, rgba(255,255,255,0.095), rgba(255,255,255,0.034) 38%, rgba(255,255,255,0.01) 63%, transparent 78%), linear-gradient(90deg, rgba(255,255,255,0.018), transparent 18%, transparent 82%, rgba(255,255,255,0.018))',
};

const vignette: CSSProperties = {
  position: 'absolute',
  inset: 0,
  background:
    'radial-gradient(ellipse 900px 460px at 50% 52%, transparent 36%, rgba(0,0,0,0.42) 74%, rgba(0,0,0,0.92) 100%)',
};

const Card = ({
  id,
  label,
  left,
  opacity = 1,
}: {
  id: string;
  label: string;
  left: number;
  opacity?: number;
}) => (
  <SharedElement id={`card-${id}`}>
    <div
      style={{
        position: 'absolute',
        left,
        top: CARD_TOP,
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        opacity,
        borderRadius: 'var(--osd-radius)',
        border: `2px solid ${BORDER}`,
        background: CARD_FILL,
        boxSizing: 'border-box',
        display: 'grid',
        placeItems: 'center',
        boxShadow: '0 0 0 1px rgba(255,255,255,0.035), 0 26px 90px rgba(0,0,0,0.62)',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--osd-font-display)',
          fontSize: 'var(--osd-size-body)',
          lineHeight: 1,
          fontWeight: 700,
          letterSpacing: 0,
          color: 'var(--osd-text)',
          transform: 'translateY(2px)',
        }}
      >
        {label}
      </span>
    </div>
  </SharedElement>
);

const Connector = ({ id, left, opacity }: { id: string; left: number; opacity: number }) => (
  <SharedElement id={`connector-${id}`}>
    <div
      style={{
        position: 'absolute',
        left,
        top: CENTER_Y - 17,
        width: CARD_GAP,
        height: 34,
        opacity,
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 16,
          height: 2,
          background: RED,
          boxShadow: '0 0 18px rgba(255,47,80,0.55)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: 2,
          height: 34,
          background: RED,
          boxShadow: '0 0 20px rgba(255,47,80,0.72)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          width: 2,
          height: 34,
          background: RED,
          boxShadow: '0 0 20px rgba(255,47,80,0.72)',
        }}
      />
    </div>
  </SharedElement>
);

const Stage = ({
  cards,
  connectors,
  queueOpacity,
}: {
  cards: 'two' | 'three';
  connectors: number;
  queueOpacity: number;
}) => {
  const firstLeft = cards === 'two' ? TWO_CARD_LEFT : THREE_CARD_LEFT;
  const secondLeft = firstLeft + CARD_WIDTH + CARD_GAP;
  const thirdLeft = cards === 'two' ? QUEUE_LEFT : secondLeft + CARD_WIDTH + CARD_GAP;

  return (
    <section style={root}>
      <div style={vignette} />
      <SharedElement id="stage-glow">
        <div
          style={{
            position: 'absolute',
            left: firstLeft,
            top: CARD_TOP - 88,
            width: cards === 'two' ? CARD_WIDTH * 2 + CARD_GAP : CARD_WIDTH * 3 + CARD_GAP * 2,
            height: CARD_HEIGHT + 176,
            background:
              'radial-gradient(ellipse at 30% 52%, rgba(255,255,255,0.045), transparent 62%)',
            filter: 'blur(12px)',
          }}
        />
      </SharedElement>
      <Connector id="backends-workflows" left={firstLeft + CARD_WIDTH} opacity={connectors} />
      <Connector id="workflows-queues" left={secondLeft + CARD_WIDTH} opacity={connectors} />
      <Card id="backends" label="Backends" left={firstLeft} />
      <Card id="workflows" label="Workflows" left={secondLeft} />
      <Card id="queues" label="Queues" left={thirdLeft} opacity={queueOpacity} />
    </section>
  );
};

const TwoCards: Page = () => <Stage cards="two" connectors={0} queueOpacity={0} />;

const ThreeCards: Page = () => <Stage cards="three" connectors={0} queueOpacity={1} />;

const ConnectedCards: Page = () => <Stage cards="three" connectors={1} queueOpacity={1} />;

export default [TwoCards, ThreeCards, ConnectedCards] satisfies Page[];
