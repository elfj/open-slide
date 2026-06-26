import { useSlidePageNumber as W } from '@open-slide/core';
import * as S from 'react';
import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';

const e = { jsx: _jsx, jsxs: _jsxs, Fragment: _Fragment };
const asset = (path) => new URL(`./assets/extracted/${path}`, import.meta.url).href,
  rootAsset = (path) => new URL(`./assets/${path}`, import.meta.url).href,
  w = asset('figures/image1.png'),
  L = asset('figures/image11.png'),
  H = asset('figures/image13.png'),
  B = asset('figures/image15.png'),
  R = asset('figures/image17.png'),
  z = asset('figures/image19.png'),
  E = asset('figures/image21.png'),
  N = asset('figures/image23.png'),
  $ = asset('figures/image25.png'),
  V = asset('figures/image27.png'),
  q = asset('figures/image29.png'),
  G = asset('figures/image3.png'),
  U = asset('figures/image31.png'),
  X = asset('figures/image33.png'),
  O = asset('figures/image35.png'),
  K = asset('figures/image5.png'),
  Y = asset('figures/image7.png'),
  Z = asset('figures/image9.png'),
  Q = asset('requirements/req_table_01.png'),
  J = asset('requirements/req_table_02.png'),
  ee = asset('requirements/req_table_03.png'),
  te = asset('requirements/req_table_04.png'),
  ie = asset('requirements/req_table_05.png'),
  se = asset('requirements/req_table_06.png'),
  le = asset('requirements/req_table_07.png'),
  ne = asset('requirements/req_table_08.png'),
  re = asset('requirements/req_table_09.png'),
  de = asset('tables/table_01.png'),
  oe = asset('tables/table_02.png'),
  ae = asset('tables/table_03.png'),
  ce = asset('tables/table_04.png'),
  he = asset('tables/table_05.png'),
  xe = asset('tables/table_06.png'),
  ge = asset('tables/table_07.png'),
  pe = asset('tables/table_08.png'),
  je = asset('tables/table_09.png'),
  be = asset('tables/table_10.png'),
  me = asset('tables/table_11.png'),
  _e = asset('tables/table_12.png'),
  ue = asset('tables/table_13.png'),
  fe = asset('tables/table_14.png'),
  ye = asset('tables/table_15.png'),
  ve = asset('tables/table_16.png'),
  Se = asset('tables/table_17.png'),
  Me = asset('tables/table_18.png'),
  Ae = asset('tables/table_19.png'),
  Te = asset('tables/table_20.png'),
  Ce = asset('tables/table_21.png'),
  De = asset('tables/table_22.png'),
  Fe = asset('tables/table_23.png'),
  Ie = asset('tables/table_24.png'),
  ke = asset('tables/table_25.png'),
  Pe = asset('tables/table_26.png'),
  We = asset('tables/table_27.png'),
  we = asset('tables/table_28.png'),
  Le = asset('tables/table_29.png'),
  He = asset('tables/table_30.png'),
  Be = asset('tables/table_31.png'),
  Re = asset('tables/table_32.png'),
  ze = asset('tables/table_33.png'),
  Ee = asset('tables/table_34.png'),
  Ne = asset('tables/table_35.png'),
  $e = asset('tables/table_36.png'),
  Ve = asset('tables/table_37.png'),
  qe = asset('tables/table_38.png'),
  Ge = asset('tables/table_39.png'),
  Ue = asset('tables/table_40.png'),
  Xe = asset('tables/table_41.png'),
  Oe = rootAsset('header-full.png'),
  Ke = rootAsset('logo-ncku-h-small.png'),
  Ye = rootAsset('logo-wtmh-new-small.png'),
  Ze = Object.assign({
    './assets/extracted/figures/image1.png': w,
    './assets/extracted/figures/image11.png': L,
    './assets/extracted/figures/image13.png': H,
    './assets/extracted/figures/image15.png': B,
    './assets/extracted/figures/image17.png': R,
    './assets/extracted/figures/image19.png': z,
    './assets/extracted/figures/image21.png': E,
    './assets/extracted/figures/image23.png': N,
    './assets/extracted/figures/image25.png': $,
    './assets/extracted/figures/image27.png': V,
    './assets/extracted/figures/image29.png': q,
    './assets/extracted/figures/image3.png': G,
    './assets/extracted/figures/image31.png': U,
    './assets/extracted/figures/image33.png': X,
    './assets/extracted/figures/image35.png': O,
    './assets/extracted/figures/image5.png': K,
    './assets/extracted/figures/image7.png': Y,
    './assets/extracted/figures/image9.png': Z,
    './assets/extracted/requirements/req_table_01.png': Q,
    './assets/extracted/requirements/req_table_02.png': J,
    './assets/extracted/requirements/req_table_03.png': ee,
    './assets/extracted/requirements/req_table_04.png': te,
    './assets/extracted/requirements/req_table_05.png': ie,
    './assets/extracted/requirements/req_table_06.png': se,
    './assets/extracted/requirements/req_table_07.png': le,
    './assets/extracted/requirements/req_table_08.png': ne,
    './assets/extracted/requirements/req_table_09.png': re,
    './assets/extracted/tables/table_01.png': de,
    './assets/extracted/tables/table_02.png': oe,
    './assets/extracted/tables/table_03.png': ae,
    './assets/extracted/tables/table_04.png': ce,
    './assets/extracted/tables/table_05.png': he,
    './assets/extracted/tables/table_06.png': xe,
    './assets/extracted/tables/table_07.png': ge,
    './assets/extracted/tables/table_08.png': pe,
    './assets/extracted/tables/table_09.png': je,
    './assets/extracted/tables/table_10.png': be,
    './assets/extracted/tables/table_11.png': me,
    './assets/extracted/tables/table_12.png': _e,
    './assets/extracted/tables/table_13.png': ue,
    './assets/extracted/tables/table_14.png': fe,
    './assets/extracted/tables/table_15.png': ye,
    './assets/extracted/tables/table_16.png': ve,
    './assets/extracted/tables/table_17.png': Se,
    './assets/extracted/tables/table_18.png': Me,
    './assets/extracted/tables/table_19.png': Ae,
    './assets/extracted/tables/table_20.png': Te,
    './assets/extracted/tables/table_21.png': Ce,
    './assets/extracted/tables/table_22.png': De,
    './assets/extracted/tables/table_23.png': Fe,
    './assets/extracted/tables/table_24.png': Ie,
    './assets/extracted/tables/table_25.png': ke,
    './assets/extracted/tables/table_26.png': Pe,
    './assets/extracted/tables/table_27.png': We,
    './assets/extracted/tables/table_28.png': we,
    './assets/extracted/tables/table_29.png': Le,
    './assets/extracted/tables/table_30.png': He,
    './assets/extracted/tables/table_31.png': Be,
    './assets/extracted/tables/table_32.png': Re,
    './assets/extracted/tables/table_33.png': ze,
    './assets/extracted/tables/table_34.png': Ee,
    './assets/extracted/tables/table_35.png': Ne,
    './assets/extracted/tables/table_36.png': $e,
    './assets/extracted/tables/table_37.png': Ve,
    './assets/extracted/tables/table_38.png': qe,
    './assets/extracted/tables/table_39.png': Ge,
    './assets/extracted/tables/table_40.png': Ue,
    './assets/extracted/tables/table_41.png': Xe,
  }),
  M = (s) => Ze[`./assets/extracted/${s}`] ?? '',
  Qe =
    'https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;600;700&family=Inter:wght@400;500;600;700&family=Noto+Sans+TC:wght@400;500;700&family=Noto+Serif+TC:wght@500;700&display=swap';
if (typeof document < 'u' && !document.getElementById('wtmh-fonts')) {
  const s = document.createElement('link');
  s.id = 'wtmh-fonts';
  s.rel = 'stylesheet';
  s.href = Qe;
  document.head.appendChild(s);
}
const bi = {
    palette: { bg: '#FFFFFF', text: '#1B2030', accent: '#B7282E' },
    fonts: {
      display: "'Crimson Pro','Noto Serif TC',Georgia,serif",
      body: "'Inter','Noto Sans TC',-apple-system,'Segoe UI',Roboto,sans-serif",
    },
    typeScale: { hero: 132, body: 34 },
    radius: 15,
  },
  t = {
    red: '#B7282E',
    redDeep: '#8E1A20',
    ink: '#1B2030',
    inkSoft: '#3C4253',
    muted: '#6B7388',
    line: '#E2E5EC',
    teal: '#0E9FBA',
    amber: '#D96A18',
    white: '#FFFFFF',
    light: '#FAFBFC',
    blush: '#FAF5F5',
  },
  p = (s) => (s === 'teal' ? t.teal : s === 'amber' ? t.amber : t.red),
  D = {
    width: '100%',
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
    boxSizing: 'border-box',
    fontFamily: 'var(--osd-font-body)',
    color: 'var(--osd-text)',
    background: 'var(--osd-bg)',
  },
  F = ({ appendix: s = !1 }) => {
    const { current: l, total: c } = W();
    return e.jsxs('div', {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 90,
        display: 'flex',
        alignItems: 'stretch',
        zIndex: 12,
        background: t.white,
      },
      children: [
        e.jsxs('div', {
          style: {
            width: 360,
            display: 'flex',
            alignItems: 'center',
            gap: 24,
            paddingLeft: 33,
            borderTop: `1px solid ${t.line}`,
          },
          children: [
            e.jsx('img', { src: Ke, alt: 'NCKU', style: { width: 154, height: 'auto' } }),
            e.jsx('img', { src: Ye, alt: 'WTMH Lab', style: { width: 66, height: 'auto' } }),
          ],
        }),
        e.jsxs('div', {
          style: {
            flex: 1,
            marginLeft: -27,
            clipPath: 'polygon(54px 0,100% 0,100% 100%,0 100%)',
            background: `linear-gradient(95deg,${t.red} 0%,${t.redDeep} 100%)`,
            color: t.white,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 48px 0 93px',
            fontSize: 21,
            letterSpacing: '.02em',
            fontWeight: 600,
          },
          children: [
            e.jsxs('span', {
              children: [
                '115年度「藥品供應AI技術監測應用研究」',
                e.jsx('span', {
                  style: { opacity: 0.72, marginLeft: 18 },
                  children: s ? 'Appendix' : 'Proposal Briefing',
                }),
              ],
            }),
            e.jsx('span', {
              style: {
                width: 57,
                height: 57,
                borderRadius: 999,
                background: t.white,
                color: t.red,
                display: 'grid',
                placeItems: 'center',
                fontFamily: 'var(--osd-font-display)',
                fontSize: 28,
                fontWeight: 700,
                fontVariantNumeric: 'tabular-nums',
              },
              children: String(l).padStart(2, '0'),
            }),
            e.jsx('span', { style: { display: 'none' }, children: c }),
          ],
        }),
      ],
    });
  },
  Je = ({ children: s }) =>
    e.jsxs('div', {
      style: {
        marginTop: 'auto',
        color: t.muted,
        fontSize: 18,
        lineHeight: 1.4,
        letterSpacing: '.01em',
      },
      children: [e.jsx('b', { style: { color: t.inkSoft }, children: 'Source' }), '｜', s],
    }),
  n = ({ title: s, subtitle: l, children: c, source: h, appendix: d = !1 }) =>
    e.jsxs('div', {
      style: D,
      children: [
        e.jsx('div', {
          style: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: 255,
            height: 21,
            background: t.red,
            zIndex: 8,
          },
        }),
        e.jsx('div', {
          'aria-hidden': !0,
          style: {
            position: 'absolute',
            right: -160,
            top: 170,
            width: 620,
            height: 620,
            borderRadius: 999,
            background: 'radial-gradient(circle, rgba(183,40,46,.08), transparent 68%)',
          },
        }),
        e.jsxs('div', {
          style: { position: 'absolute', top: 51, left: 90, right: 90, zIndex: 7 },
          children: [
            e.jsx('h2', {
              style: {
                margin: 0,
                paddingLeft: 30,
                borderLeft: `9px solid ${t.red}`,
                fontFamily: 'var(--osd-font-display)',
                fontSize: 58,
                lineHeight: 1.1,
                color: t.ink,
                fontWeight: 700,
                letterSpacing: '-.004em',
              },
              children: s,
            }),
            l
              ? e.jsx('div', {
                  style: {
                    marginTop: 12,
                    marginLeft: 39,
                    color: t.muted,
                    fontSize: 21,
                    fontWeight: 600,
                  },
                  children: l,
                })
              : null,
          ],
        }),
        e.jsxs('div', {
          style: {
            position: 'absolute',
            top: 207,
            left: 90,
            right: 90,
            bottom: 162,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            zIndex: 5,
          },
          children: [c, h ? e.jsx(Je, { children: h }) : null],
        }),
        e.jsx(F, { appendix: d }),
      ],
    }),
  et = ({ children: s }) =>
    e.jsx('div', {
      style: {
        fontFamily: 'var(--osd-font-display)',
        fontStyle: 'italic',
        color: t.inkSoft,
        fontSize: 31,
        lineHeight: 1.42,
        marginBottom: 30,
        maxWidth: 1540,
      },
      children: s,
    }),
  i = ({ label: s, title: l, children: c, tone: h = 'red', style: d }) =>
    e.jsxs('div', {
      style: {
        background: t.white,
        border: `1px solid ${t.line}`,
        borderTop: `6px solid ${p(h)}`,
        borderRadius: 15,
        padding: '28px 32px 30px',
        boxShadow: '0 21px 48px -33px rgba(20,30,60,.28)',
        ...d,
      },
      children: [
        s
          ? e.jsx('div', {
              style: {
                color: p(h),
                fontSize: 16,
                fontWeight: 800,
                letterSpacing: '.18em',
                textTransform: 'uppercase',
                marginBottom: 12,
              },
              children: s,
            })
          : null,
        e.jsx('h3', {
          style: {
            margin: 0,
            color: t.ink,
            fontFamily: 'var(--osd-font-display)',
            fontSize: 35,
            lineHeight: 1.16,
            fontWeight: 700,
          },
          children: l,
        }),
        e.jsx('div', {
          style: { marginTop: 18, color: t.inkSoft, fontSize: 25, lineHeight: 1.48 },
          children: c,
        }),
      ],
    }),
  tt = (s) => {
    if (typeof s !== 'string') return s;
    const l = s.indexOf('：');
    return l <= 0 || l > 10
      ? s
      : e.jsxs(e.Fragment, {
          children: [
            e.jsx('b', { style: { color: t.ink, fontWeight: 800 }, children: s.slice(0, l + 1) }),
            s.slice(l + 1),
          ],
        });
  },
  I = ({ children: s, size: l, lineHeight: c, gap: h, bulletSize: d, tone: u = 'teal' }) =>
    e.jsx('ul', {
      style: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
        color: t.inkSoft,
        fontSize: l,
        lineHeight: c,
      },
      children: S.Children.map(s, (f) => {
        if (!S.isValidElement(f)) return f;
        const v = f;
        return S.cloneElement(v, {
          style: {
            display: 'grid',
            gridTemplateColumns: `${d}px 1fr`,
            columnGap: 12,
            alignItems: 'start',
            marginBottom: h,
            ...v.props.style,
          },
          children: e.jsxs(e.Fragment, {
            children: [
              e.jsx('span', {
                'aria-hidden': !0,
                style: {
                  width: d,
                  height: d,
                  borderRadius: 999,
                  background: p(u),
                  marginTop: Math.round(l * 0.52),
                  boxShadow: `0 0 0 5px ${p(u)}18`,
                },
              }),
              e.jsx('span', { children: tt(v.props.children) }),
            ],
          }),
        });
      }),
    }),
  o = ({ children: s, tone: l = 'teal' }) =>
    e.jsx(I, { size: 24, lineHeight: 1.42, gap: 10, bulletSize: 8, tone: l, children: s }),
  r = ({ children: s, tone: l = 'teal' }) =>
    e.jsx(I, { size: 20, lineHeight: 1.38, gap: 8, bulletSize: 7, tone: l, children: s }),
  k = ({ children: s }) =>
    e.jsx('div', {
      style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 },
      children: s,
    }),
  a = ({ children: s }) =>
    e.jsx('div', {
      style: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 },
      children: s,
    }),
  A = ({ children: s }) =>
    e.jsx('div', {
      style: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 22 },
      children: s,
    }),
  j = ({ asset: s, caption: l, height: c = 430 }) =>
    e.jsxs('div', {
      style: {
        background: t.white,
        border: `1px solid ${t.line}`,
        borderRadius: 15,
        padding: 16,
        height: c,
        boxShadow: '0 18px 40px rgba(27,32,48,.08)',
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
      },
      children: [
        e.jsx('div', {
          style: { flex: 1, minHeight: 0, display: 'grid', placeItems: 'center' },
          children: e.jsx('svg', {
            viewBox: '0 0 900 520',
            width: '100%',
            height: '100%',
            role: 'img',
            'aria-label': l,
            children: e.jsx('image', {
              href: M(s),
              x: '0',
              y: '0',
              width: '900',
              height: '520',
              preserveAspectRatio: 'xMidYMid meet',
            }),
          }),
        }),
        e.jsx('div', { style: { color: t.muted, fontSize: 16, lineHeight: 1.25 }, children: l }),
      ],
    }),
  b = ({ value: s, label: l, note: c, tone: h = 'red' }) =>
    e.jsxs('div', {
      style: {
        background: t.light,
        border: `1px solid ${t.line}`,
        borderTop: `7px solid ${p(h)}`,
        borderRadius: 15,
        padding: '24px 26px',
        minHeight: 184,
      },
      children: [
        e.jsx('div', {
          style: {
            color: p(h),
            fontFamily: 'var(--osd-font-display)',
            fontSize: 60,
            lineHeight: 1,
            fontWeight: 700,
          },
          children: s,
        }),
        e.jsx('div', {
          style: { color: t.ink, fontSize: 25, fontWeight: 800, marginTop: 14 },
          children: l,
        }),
        e.jsx('div', {
          style: { color: t.muted, fontSize: 19, lineHeight: 1.36, marginTop: 8 },
          children: c,
        }),
      ],
    }),
  y = ({ children: s, tone: l = 'red' }) =>
    e.jsx('span', {
      style: {
        display: 'inline-block',
        color: p(l),
        background: `${p(l)}1A`,
        borderRadius: 999,
        padding: '7px 13px',
        fontSize: 18,
        fontWeight: 800,
        marginRight: 8,
        marginBottom: 8,
      },
      children: s,
    }),
  x = ({ children: s, tone: l = 'teal' }) =>
    e.jsx('div', {
      style: {
        marginTop: 18,
        padding: '14px 18px',
        borderLeft: `5px solid ${p(l)}`,
        background: `${p(l)}10`,
        color: t.inkSoft,
        fontSize: 18,
        lineHeight: 1.38,
        borderRadius: 8,
      },
      children: s,
    }),
  m = ({ n: s, title: l, children: c, tone: h = 'red' }) =>
    e.jsxs('div', {
      style: {
        background: t.white,
        border: `1px solid ${t.line}`,
        borderRadius: 15,
        padding: '24px 24px 26px',
        boxShadow: '0 18px 40px -34px rgba(20,30,60,.28)',
        minHeight: 230,
      },
      children: [
        e.jsx('div', {
          style: {
            width: 54,
            height: 54,
            borderRadius: 14,
            display: 'grid',
            placeItems: 'center',
            background: `${p(h)}1F`,
            color: p(h),
            fontFamily: 'var(--osd-font-display)',
            fontSize: 26,
            fontWeight: 700,
            marginBottom: 16,
          },
          children: s,
        }),
        e.jsx('div', {
          style: { color: t.ink, fontSize: 28, fontWeight: 800, marginBottom: 10 },
          children: l,
        }),
        e.jsx('div', { style: { color: t.inkSoft, fontSize: 22, lineHeight: 1.42 }, children: c }),
      ],
    }),
  T = ({ children: s }) =>
    e.jsx('div', {
      style: {
        background: t.white,
        border: `1px solid ${t.line}`,
        borderRadius: 14,
        overflow: 'hidden',
        boxShadow: '0 18px 40px rgba(27,32,48,.08)',
      },
      children: s,
    }),
  _ = {
    padding: '12px 14px',
    borderRight: `1px solid ${t.line}`,
    borderBottom: `1px solid ${t.line}`,
    color: t.inkSoft,
    fontSize: 18,
    lineHeight: 1.32,
  },
  C = ({ children: s, tone: l = 'teal' }) =>
    e.jsx('span', {
      style: {
        display: 'inline-grid',
        placeItems: 'center',
        minWidth: 36,
        height: 30,
        borderRadius: 9,
        background: `${p(l)}1A`,
        color: p(l),
        fontWeight: 900,
        fontSize: 17,
      },
      children: s,
    }),
  it = () =>
    e.jsxs('div', {
      style: D,
      children: [
        e.jsx('img', {
          src: Oe,
          alt: '',
          style: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            width: '100%',
            height: 160,
            objectFit: 'cover',
            opacity: 0.95,
          },
        }),
        e.jsx('div', {
          style: {
            position: 'absolute',
            left: 105,
            top: 225,
            width: 430,
            height: 430,
            borderRadius: 999,
            background:
              'radial-gradient(circle, rgba(183,40,46,.13), rgba(14,159,186,.09) 52%, transparent 54%)',
            border: `1px solid ${t.line}`,
            display: 'grid',
            placeItems: 'center',
          },
          children: e.jsxs('div', {
            style: {
              width: 270,
              height: 270,
              borderRadius: 999,
              border: `12px solid ${t.red}`,
              display: 'grid',
              placeItems: 'center',
              color: t.ink,
              fontFamily: 'var(--osd-font-display)',
              fontSize: 62,
              fontWeight: 700,
              textAlign: 'center',
              lineHeight: 1.08,
            },
            children: ['AI', e.jsx('br', {}), 'Supply', e.jsx('br', {}), 'Watch'],
          }),
        }),
        e.jsxs('div', {
          style: { position: 'absolute', left: 600, top: 220, right: 110 },
          children: [
            e.jsx('div', {
              style: {
                color: t.red,
                fontSize: 19,
                fontWeight: 800,
                letterSpacing: '.22em',
                textTransform: 'uppercase',
              },
              children: 'TFDA Proposal Briefing',
            }),
            e.jsx('h1', {
              style: {
                margin: '24px 0 24px',
                fontFamily: 'var(--osd-font-display)',
                fontSize: 76,
                lineHeight: 1.08,
                fontWeight: 700,
                color: t.ink,
              },
              children: '115年度「藥品供應AI技術監測應用研究」',
            }),
            e.jsx('div', {
              style: {
                borderLeft: `5px solid ${t.red}`,
                paddingLeft: 24,
                color: t.inkSoft,
                fontSize: 31,
                lineHeight: 1.45,
                maxWidth: 1040,
              },
              children:
                '食藥署委託研究投標簡報：聚焦 AI 監測方法、投標前 PoC 證據與七個月履約交付規劃。',
            }),
            e.jsxs('div', {
              style: { marginTop: 46, color: t.muted, fontSize: 24, lineHeight: 1.5 },
              children: [
                '國立成功大學｜Wearable Technology and Mobile Healthcare Laboratory',
                e.jsx('br', {}),
                '報告時間：20 分鐘主文 + 答詢附錄｜AI Supply Watch 為本案預警能力框架名稱',
              ],
            }),
          ],
        }),
        e.jsx(F, {}),
      ],
    }),
  st = () =>
    e.jsxs(n, {
      title: '團隊介紹：工程 × 藥學 × 臨床',
      subtitle: '先說明為什麼這個團隊能把藥品供應 AI 從方法做到落地',
      source: '服務建議書 第陸章 pp.45-47；第柒章一、五，PDF pp.48, 52-53；表20、表22',
      children: [
        e.jsxs(a, {
          children: [
            e.jsx(i, {
              label: 'PI',
              title: '林哲偉教授',
              tone: 'red',
              children: 'AI 模型方法論、分階段架構整合、雲端／邊緣 AI 部署、系統工程實作。',
            }),
            e.jsx(i, {
              label: 'Co-PI',
              title: '鄭靜蘭教授',
              tone: 'teal',
              children:
                'ATC/DDD、藥物流行病學、健保資料應用；銜接 TFDA ATC 編修與臺灣端臨床語境驗證。',
            }),
            e.jsx(i, {
              label: 'Co-PI',
              title: '吳律萱臨床助理教授',
              tone: 'amber',
              children: '臨床藥事、用藥安全、處方評估、CDSS 驗證。',
            }),
          ],
        }),
        e.jsxs('div', {
          style: { marginTop: 30, display: 'grid', gridTemplateColumns: '1.1fr .9fr', gap: 24 },
          children: [
            e.jsx(i, {
              title: '跨域治理分工',
              tone: 'teal',
              children:
                '工程團隊負責 AI 方法、系統架構與部署；藥學／臨床團隊負責短缺定義、替代藥、嚴重度與 XAI 合理性簽核，讓模型結果能回到藥事標準與處方安全判讀。',
            }),
            e.jsxs('div', {
              style: {
                background: t.white,
                border: `2px dashed ${t.line}`,
                borderRadius: 15,
                minHeight: 170,
                padding: '24px 26px',
                color: t.muted,
                boxShadow: '0 18px 40px -34px rgba(20,30,60,.28)',
              },
              children: [
                e.jsx('div', {
                  style: { color: t.red, fontSize: 18, fontWeight: 900, letterSpacing: '.16em' },
                  children: 'AI TRACK RECORD',
                }),
                e.jsx('div', {
                  style: {
                    marginTop: 12,
                    fontFamily: 'var(--osd-font-display)',
                    color: t.ink,
                    fontSize: 31,
                    fontWeight: 700,
                  },
                  children: '林哲偉教授 AI 發表與專利',
                }),
                e.jsx('div', {
                  style: { marginTop: 12, fontSize: 22, lineHeight: 1.45 },
                  children:
                    '今年 AI 發表、專利、系統落地與代表性證據於口頭補充；本頁僅保留已核對資料，避免列入未確認成果。',
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  lt = () =>
    e.jsxs(n, {
      title: '需求書要求的六大重點',
      subtitle: '先定義評審真正要聽的六件事',
      source: '需求說明書 pp.2-4',
      children: [
        e.jsx(et, {
          children:
            '本案不是展示單一模型，而是建立一套可被食藥署採用的預警方法：從國際研析、模型雛形、供應鏈關聯到國內回溯驗證。',
        }),
        e.jsxs(a, {
          children: [
            e.jsx(i, {
              label: '01',
              title: '國際技術研析',
              tone: 'red',
              children: '比較 WHO、美國、歐盟、日本等 AI 監測與短缺預警機制，完成預警研析機制。',
            }),
            e.jsx(i, {
              label: '02',
              title: '進階 AI 方法學',
              tone: 'teal',
              children: '蒐整深度學習等方法，完成至少 1 套藥品監測預警模型雛形機制。',
            }),
            e.jsx(i, {
              label: '03',
              title: '供應鏈關聯機制',
              tone: 'amber',
              children: '以品項、製造商、供應商、替代藥品等節點，建立短缺關聯機制與運作流程。',
            }),
          ],
        }),
        e.jsx('div', { style: { height: 24 } }),
        e.jsxs(a, {
          children: [
            e.jsx(i, {
              label: '04',
              title: '異常變動偵測',
              tone: 'red',
              children: '整理供應鏈資料，分析數量突然變化等異常情形，建立初步偵測演算法。',
            }),
            e.jsx(i, {
              label: '05',
              title: '歷史事件回溯',
              tone: 'teal',
              children: '分析國內近 1 年歷史缺藥事件與供應鏈資料，初步驗證 AI 方法預測能力。',
            }),
            e.jsx(i, {
              label: '06',
              title: '導入治理建議',
              tone: 'amber',
              children: '提供後續系統建置、資料來源、分析流程與專家討論會修正建議。',
            }),
          ],
        }),
      ],
    }),
  nt = () =>
    e.jsxs(n, {
      title: '我們的回應：已完成證據與交付方式',
      subtitle: '接下來逐項說明：我們已完成什麼、履約期交付什麼',
      source: '服務建議書摘要、第參章、第伍章',
      children: [
        e.jsxs(a, {
          children: [
            e.jsx(i, {
              label: 'Response 1',
              title: '三層式方法架構',
              tone: 'red',
              children:
                '資料層、AI 模型層、應用層；把資料整合、預測、異常偵測與決策支援串成一條流程。',
            }),
            e.jsx(i, {
              label: 'Response 2',
              title: '投標前 PoC 證據',
              tone: 'teal',
              children: '已用 FDA 公開資料完成異常偵測、知識圖譜、共形預測與 LLM 文本結構化測試。',
            }),
            e.jsx(i, {
              label: 'Response 3',
              title: '零條件 MVP',
              tone: 'amber',
              children: '即使無新增跨部會資料，仍以 DSMS 既有資料交付可操作的早期預警儀表板。',
            }),
          ],
        }),
        e.jsx('div', { style: { height: 24 } }),
        e.jsxs(a, {
          children: [
            e.jsx(i, {
              label: 'Response 4',
              title: '國內回溯驗證',
              tone: 'red',
              children: '以近一年真實缺藥事件進行回溯驗證；臺灣端效能以信賴區間誠實呈現。',
            }),
            e.jsx(i, {
              label: 'Response 5',
              title: '署內落地治理',
              tone: 'teal',
              children:
                '地端、非中國來源開源 LLM；原始資料不離署，輸出以去識別化與可稽核格式交付。',
            }),
            e.jsx(i, {
              label: 'Response 6',
              title: '七個月交付',
              tone: 'amber',
              children:
                '對齊 M1-M7 WBS、期中期末會議、專家討論會、live demo、期末報告與資料銷毀確認。',
            }),
          ],
        }),
        e.jsx('div', {
          style: { marginTop: 26, fontSize: 24, color: t.inkSoft, lineHeight: 1.45 },
          children: '後續主文依需求書順序展開，每個工作項目都拆成：需求、已完成證據、後續交付。',
        }),
      ],
    }),
  rt = () =>
    e.jsx(n, {
      title: '工作項目一｜國際 AI 監測技術研析',
      subtitle: '先用國際標竿界定臺灣缺口，再導出本案方法設計',
      source: '需求說明書 p.2；服務建議書摘要、貳章、表1',
      children: e.jsxs(a, {
        children: [
          e.jsx(i, {
            label: '需求書要求',
            title: '研析國際機制',
            tone: 'red',
            children: e.jsxs(r, {
              children: [
                e.jsx('li', { children: '蒐集 WHO、美國、歐盟、日本等 AI 監測或短缺預警方法。' }),
                e.jsx('li', { children: '比較藥品供應鏈監測與短缺預警機制。' }),
                e.jsx('li', { children: '完成至少 1 份藥品供應預警研析機制。' }),
              ],
            }),
          }),
          e.jsx(i, {
            label: '已經完成',
            title: '國際標竿與落差',
            tone: 'teal',
            children: e.jsxs(r, {
              children: [
                e.jsx('li', {
                  children: '已整理 WHO、FDA、EMA、PMDA/MHLW、FIP 與 Bluesight 等參照。',
                }),
                e.jsx('li', { children: '歸納資料層、分析層、決策層三層共通架構。' }),
                e.jsx('li', {
                  children: '完成國際比較矩陣，指出臺灣缺口：預測、圖譜、多源整合與自動異常偵測。',
                }),
              ],
            }),
          }),
          e.jsx(i, {
            label: '後續規劃',
            title: '轉成可用機制',
            tone: 'amber',
            children: e.jsxs(r, {
              children: [
                e.jsx('li', { children: 'M3 完成 ≥4 國際組織、≥30 篇文獻/灰色文獻之研析報告。' }),
                e.jsx('li', { children: '把國際標竿轉譯為資料需求、功能模組與導入優先序。' }),
                e.jsx('li', { children: '作為後續 AI 模型、系統白皮書與政策建議的共同基準。' }),
              ],
            }),
          }),
        ],
      }),
    }),
  dt = () =>
    e.jsx(n, {
      title: '工作項目二｜進階 AI 方法學與模型雛形',
      subtitle: '從國際缺口進入可實作的 AI 模型雛形',
      source: '需求說明書 pp.2-3；服務建議書摘要、參章、附錄D',
      children: e.jsxs(a, {
        children: [
          e.jsx(i, {
            label: '需求書要求',
            title: '至少一套雛形',
            tone: 'red',
            children: e.jsxs(r, {
              children: [
                e.jsx('li', { children: '研讀論文、商業案例與專家訪談，評估深度學習等進階 AI。' }),
                e.jsx('li', {
                  children: '完成至少 1 套運用進階 AI 技術建構之藥品監測預警模型雛形。',
                }),
                e.jsx('li', { children: '提出後續系統建置可採用的方法學基礎。' }),
              ],
            }),
          }),
          e.jsxs(i, {
            label: '已經完成',
            title: '方法選型與 PoC',
            tone: 'teal',
            children: [
              e.jsxs(r, {
                children: [
                  e.jsx('li', {
                    children: '已定義 TFT＋HGNN＋Conformal Prediction＋XAI＋地端 LLM 架構。',
                  }),
                  e.jsx('li', {
                    children: '投標前完成異常偵測、知識圖譜、共形預測與 LLM 文本結構化 PoC。',
                  }),
                  e.jsx('li', {
                    children:
                      '計畫書列明共形覆蓋率 92.6%、LLM 成因分類最佳 93.8%、混合法 MASE 0.413。',
                  }),
                ],
              }),
              e.jsx(x, {
                children:
                  '文獻依據：TFT（Lim et al., 2021）、HGNN/HAN（Wang et al., 2019）、Isolation Forest（Liu et al., 2008）、Conformal Prediction（Angelopoulos & Bates, 2023）、SHAP（Lundberg & Lee, 2017）。',
              }),
            ],
          }),
          e.jsx(i, {
            label: '後續規劃',
            title: '可重現交付',
            tone: 'amber',
            children: e.jsxs(r, {
              children: [
                e.jsx('li', {
                  children: 'M5 完成 AI 預警模型雛形，並附 Model Card 與 Data Card。',
                }),
                e.jsx('li', { children: '與基線模型比較，保留可審計、可解釋、可校準的推論紀錄。' }),
                e.jsx('li', { children: '地端使用非中國來源開源 LLM，原始資料不離署。' }),
              ],
            }),
          }),
        ],
      }),
    }),
  ot = () =>
    e.jsx(n, {
      title: '工作項目三｜供應鏈短缺關聯機制',
      subtitle: 'Requirement 3: Relational analysis and supply-chain linkage',
      source: '需求說明書 p.3；服務建議書表1、參章、附錄D.3',
      children: e.jsxs(a, {
        children: [
          e.jsx(i, {
            label: '需求書要求',
            title: '建立關聯機制',
            tone: 'red',
            children: e.jsxs(r, {
              children: [
                e.jsx('li', { children: '以藥品品項、製造商、供應商、替代藥品等為節點。' }),
                e.jsx('li', { children: '建構供應鏈藥品短缺關聯機制。' }),
                e.jsx('li', { children: '研析其運作流程，作為後續應用基礎。' }),
              ],
            }),
          }),
          e.jsxs(i, {
            label: '已經完成',
            title: '知識圖譜 Schema',
            tone: 'teal',
            children: [
              e.jsxs(r, {
                children: [
                  e.jsx('li', { children: '計畫書已定義 ≥7 類節點、≥8 種關聯邊之異質知識圖譜。' }),
                  e.jsx('li', { children: '已以 FDA 公開資料完成知識圖譜 PoC。' }),
                  e.jsx('li', {
                    children: 'PoC 顯示可辨識學名藥跨製造商系統性風險與關鍵製造商樞紐。',
                  }),
                ],
              }),
              e.jsx(x, {
                children:
                  'PoC 條件：以 FDA 公開資料建圖，先驗證節點/關聯 schema、製造商樞紐與跨品項風險辨識，再轉入 DSMS 與臺灣資料欄位。',
              }),
            ],
          }),
          e.jsx(i, {
            label: '後續規劃',
            title: '變成監測引擎',
            tone: 'amber',
            children: e.jsxs(r, {
              children: [
                e.jsx('li', { children: 'M5 交付供應鏈短缺關聯機制設計文件。' }),
                e.jsx('li', { children: '導入中心性、社群偵測、替代藥品路徑與節點風險評分。' }),
                e.jsx('li', { children: '與 TFT 預測、異常偵測與 XAI 解釋層串接。' }),
              ],
            }),
          }),
        ],
      }),
    }),
  at = () =>
    e.jsx(n, {
      title: '工作項目四｜供應鏈異常變動偵測',
      subtitle: 'Requirement 4: Initial anomaly-detection algorithm',
      source: '需求說明書 p.3；服務建議書表1、參章、摘要',
      children: e.jsxs(a, {
        children: [
          e.jsx(i, {
            label: '需求書要求',
            title: '偵測異常變動',
            tone: 'red',
            children: e.jsxs(r, {
              children: [
                e.jsx('li', { children: '整理藥品供應鏈相關資料。' }),
                e.jsx('li', { children: '分析數量突然變化等異常情形。' }),
                e.jsx('li', { children: '建立初步異常變動偵測演算法。' }),
              ],
            }),
          }),
          e.jsxs(i, {
            label: '已經完成',
            title: '多演算法集成',
            tone: 'teal',
            children: [
              e.jsxs(r, {
                children: [
                  e.jsx('li', {
                    children: '已規劃 Isolation Forest＋Autoencoder＋Spectral Residual＋變點偵測。',
                  }),
                  e.jsx('li', {
                    children: '涵蓋突增、突降、漂移、季節性偏離、結構性斷裂五類異常。',
                  }),
                  e.jsx('li', {
                    children: '投標前已以 FDA 公開資料完成異常偵測 PoC 與儀表板雛形。',
                  }),
                ],
              }),
              e.jsx(x, {
                children:
                  'PoC 條件：openFDA enforcement 月資料用於公開情境壓力測試；異常月份與大型召回事件對照，作為轉入臺灣資料前的可行性證據。',
              }),
            ],
          }),
          e.jsx(i, {
            label: '後續規劃',
            title: '監管可用訊號',
            tone: 'amber',
            children: e.jsxs(r, {
              children: [
                e.jsx('li', { children: 'M6 完成異常偵測演算法與資料需求/應用建議書。' }),
                e.jsx('li', { children: '針對必要藥品與一般用藥建立不同動態閾值。' }),
                e.jsx('li', { children: '輸出異常原因、風險等級、時間點與建議查核方向。' }),
              ],
            }),
          }),
        ],
      }),
    }),
  ct = () =>
    e.jsx(n, {
      title: '工作項目五｜歷史缺藥事件回溯驗證',
      subtitle: 'Requirement 5: Preliminary prediction and domestic backtesting',
      source: '需求說明書 p.3；服務建議書摘要、參章、附錄D.1',
      children: e.jsxs(a, {
        children: [
          e.jsx(i, {
            label: '需求書要求',
            title: '近一年國內事件',
            tone: 'red',
            children: e.jsxs(r, {
              children: [
                e.jsx('li', { children: '初步運用 AI 預測方法。' }),
                e.jsx('li', { children: '分析國內近 1 年歷史缺藥事件及供應鏈資料。' }),
                e.jsx('li', { children: '執行回溯測試，初步驗證 AI 方法預測能力。' }),
              ],
            }),
          }),
          e.jsx(i, {
            label: '已完成設計',
            title: 'DSMS-only 也可驗收',
            tone: 'teal',
            children: e.jsxs(r, {
              children: [
                e.jsx('li', {
                  children: '已設計 Track A 美國公開資料完整驗證、Track B 臺灣套用驗證。',
                }),
                e.jsx('li', {
                  children: '已凍結 DSMS-only 最低交付路徑：儀表板、事件回放與回溯報告。',
                }),
                e.jsx('li', { children: '目標指標含 F1、AUPRC、Lead Time 與信賴區間。' }),
              ],
            }),
          }),
          e.jsx(i, {
            label: '後續規劃',
            title: '誠實呈現效能',
            tone: 'amber',
            children: e.jsxs(r, {
              children: [
                e.jsx('li', { children: 'M6-M7 以國內近一年缺藥事件完成 walk-forward 回溯報告。' }),
                e.jsx('li', {
                  children: '效能依資料可得性誠實回報；資料不足時呈現信賴區間與限制。',
                }),
                e.jsx('li', { children: '把資料釋出邊際效益轉化為跨部會資料整合建議。' }),
              ],
            }),
          }),
        ],
      }),
    }),
  ht = () =>
    e.jsx(n, {
      title: '工作項目六｜協助研究與系統開發',
      subtitle: 'Requirement 6: Consultation for future AI system construction',
      source: '需求說明書 p.4；服務建議書摘要、參章、伍章',
      children: e.jsxs(a, {
        children: [
          e.jsx(i, {
            label: '需求書要求',
            title: '提供專業諮詢',
            tone: 'red',
            children: e.jsxs(r, {
              children: [
                e.jsx('li', { children: '協助藥品供應研究與系統開發計畫。' }),
                e.jsx('li', { children: '配合需求出席相關會議並提供專業意見。' }),
                e.jsx('li', { children: '就資料來源、分析流程、模型調整機制提出規劃構想。' }),
              ],
            }),
          }),
          e.jsxs(i, {
            label: '已經完成',
            title: '系統藍圖已成形',
            tone: 'teal',
            children: [
              e.jsxs(r, {
                children: [
                  e.jsx('li', { children: '已提出資料層、AI 模型層、應用層三層式架構。' }),
                  e.jsx('li', {
                    children: '已整理 DSMS、健保、製造異動、關務、國際警訊等資料藍圖。',
                  }),
                  e.jsx('li', {
                    children: '已規劃署內地端運算、Data Card、Model Card 與可稽核流程。',
                  }),
                ],
              }),
              e.jsx(x, {
                children:
                  '方法簡介：LLM 僅用於召回/通報自由文字結構化，將原因、嚴重度與產品資訊轉成特徵；模型採地端非中國來源開源模型，不作外部 API 傳輸。',
              }),
            ],
          }),
          e.jsx(i, {
            label: '後續規劃',
            title: '導入白皮書',
            tone: 'amber',
            children: e.jsxs(r, {
              children: [
                e.jsx('li', { children: 'M6 提交系統建置建議白皮書與資料介接規格。' }),
                e.jsx('li', { children: '提供模型重訓、閾值調整、版本控管與人機協作流程。' }),
                e.jsx('li', { children: '會議中依食藥署實務需求調整功能優先序。' }),
              ],
            }),
          }),
        ],
      }),
    }),
  xt = () =>
    e.jsx(n, {
      title: '工作項目七｜每 2 個月履約進度說明會',
      subtitle: 'Requirement 7: Progress meetings, materials and minutes',
      source: '需求說明書 p.4；服務建議書伍章',
      children: e.jsxs(a, {
        children: [
          e.jsx(i, {
            label: '需求書要求',
            title: '定期掌握進度',
            tone: 'red',
            children: e.jsxs(r, {
              children: [
                e.jsx('li', { children: '每 2 個月辦理 1 場履約執行進度會議。' }),
                e.jsx('li', { children: '會議資料須於會前 4 個工作天提交。' }),
                e.jsx('li', { children: '會後 5 個工作天內提供會議紀錄。' }),
              ],
            }),
          }),
          e.jsx(i, {
            label: '已經完成',
            title: 'WBS 與節點',
            tone: 'teal',
            children: e.jsxs(r, {
              children: [
                e.jsx('li', {
                  children: '已建立 M1-M7 七個月 WBS、六大強制里程碑與交付時程總表。',
                }),
                e.jsx('li', { children: '已規劃雙週站立會、月度檢討與三級進度/風險警示。' }),
                e.jsx('li', { children: '主持團隊與技術人員列席機制已納入計畫書。' }),
              ],
            }),
          }),
          e.jsx(i, {
            label: '後續規劃',
            title: '用會議控風險',
            tone: 'amber',
            children: e.jsxs(r, {
              children: [
                e.jsx('li', { children: 'M2、M4、M6 對齊資料、模型、回溯驗證與 MVP 進度。' }),
                e.jsx('li', { children: '每次會議輸出決議、風險、待辦、責任人與完成期限。' }),
                e.jsx('li', { children: '將會議紀錄納入期末報告附件，供驗收追蹤。' }),
              ],
            }),
          }),
        ],
      }),
    }),
  gt = () =>
    e.jsx(n, {
      title: '工作項目八｜專家討論會議',
      subtitle: 'Requirement 8: Expert consultation for technical direction',
      source: '需求說明書 p.4；服務建議書伍章、柒章',
      children: e.jsxs(a, {
        children: [
          e.jsx(i, {
            label: '需求書要求',
            title: '至少 1 場',
            tone: 'red',
            children: e.jsxs(r, {
              children: [
                e.jsx('li', { children: '邀請計畫相關領域專家學者參與討論。' }),
                e.jsx('li', { children: '確認計畫執行方向的正確性與妥適性。' }),
                e.jsx('li', { children: '研議未來藥品 AI 技術預警研究規劃。' }),
              ],
            }),
          }),
          e.jsx(i, {
            label: '已經完成',
            title: '跨域題綱已明確',
            tone: 'teal',
            children: e.jsxs(r, {
              children: [
                e.jsx('li', { children: '團隊已涵蓋工程、藥學、臨床與藥物流行病學核心能力。' }),
                e.jsx('li', { children: '計畫書已把專家會議定位為方向校準與導入建議修正節點。' }),
                e.jsx('li', { children: '議題可對齊資料來源、臨床合理性、AI 治理與系統落地。' }),
              ],
            }),
          }),
          e.jsx(i, {
            label: '後續規劃',
            title: '把建議寫回交付物',
            tone: 'amber',
            children: e.jsxs(r, {
              children: [
                e.jsx('li', { children: 'M6 辦理專家討論會，必要時依本署同意採線上形式。' }),
                e.jsx('li', { children: '邀請臨床藥學、供應鏈、AI、法規/資安等領域代表。' }),
                e.jsx('li', { children: '將會議意見回寫至白皮書、MVP 功能與後續系統建置建議。' }),
              ],
            }),
          }),
        ],
      }),
    }),
  pt = () =>
    e.jsx(n, {
      title: '工作項目九｜其他履約、期末與保密要求',
      subtitle: 'Requirement 9: Ad hoc meetings, final report and data governance',
      source: '需求說明書 pp.4-5；服務建議書摘要、陸章、附錄A',
      children: e.jsxs(a, {
        children: [
          e.jsx(i, {
            label: '需求書要求',
            title: '履約與保密',
            tone: 'red',
            children: e.jsxs(r, {
              children: [
                e.jsx('li', { children: '配合本署分析研討或臨時會議。' }),
                e.jsx('li', { children: '期末報告須含工作執行內容與各場進度會議紀錄。' }),
                e.jsx('li', {
                  children: '涉及本署資訊系統資料者須於署內使用，不得外流或另作研究/商業用途。',
                }),
              ],
            }),
          }),
          e.jsx(i, {
            label: '已經完成',
            title: '治理承諾已寫入',
            tone: 'teal',
            children: e.jsxs(r, {
              children: [
                e.jsx('li', {
                  children:
                    '已承諾全部資料處理於食藥署地端環境進行，原始資料不複製、不下載、不外流。',
                }),
                e.jsx('li', {
                  children: '已規劃成員保密切結、最小權限、存取紀錄與資料保密教育訓練。',
                }),
                e.jsx('li', {
                  children: '已承諾產出 IP、模型權重、程式碼、技術文件依需求書歸屬食藥署。',
                }),
              ],
            }),
          }),
          e.jsx(i, {
            label: '後續規劃',
            title: '期末可驗收',
            tone: 'amber',
            children: e.jsxs(r, {
              children: [
                e.jsx('li', { children: '12/15 前提交期末報告初稿，12/31 前繳交定稿與電子檔。' }),
                e.jsx('li', {
                  children:
                    '交付 MVP live demo、回溯驗證、會議紀錄、Model/Data Card 與資料銷毀確認。',
                }),
                e.jsx('li', { children: '所有對外揭露資料均須經食藥署書面核可。' }),
              ],
            }),
          }),
        ],
      }),
    }),
  jt = () =>
    e.jsxs(n, {
      appendix: !0,
      title: '評選重點決定簡報重點',
      subtitle: '100分評選項目；主文必須對齊高配分項目',
      source: '需求說明書 pp.13, 15, 23',
      children: [
        e.jsxs(A, {
          children: [
            e.jsx(b, { value: '30', label: '計畫內容', note: '完整性與合理性', tone: 'red' }),
            e.jsx(b, { value: '20', label: '專業能力', note: '組織能力與相關成果', tone: 'teal' }),
            e.jsx(b, { value: '20', label: '經費合理', note: '報價與經費組成', tone: 'amber' }),
            e.jsx(b, { value: '10', label: '進度品質', note: '工作期程與品質控管', tone: 'red' }),
          ],
        }),
        e.jsx('div', { style: { height: 30 } }),
        e.jsxs(a, {
          children: [
            e.jsx(i, {
              title: '掌握程度 10分',
              tone: 'teal',
              children: '需求理解與回應方式須清楚呈現。',
            }),
            e.jsx(i, { title: 'CSR 5分', tone: 'amber', children: '依需求書列入評分項目。' }),
            e.jsx(i, {
              title: '簡報答詢 5分',
              tone: 'red',
              children: '20 分鐘簡報、10 分鐘答詢；現場不接受補充資料。',
            }),
          ],
        }),
      ],
    }),
  bt = () =>
    e.jsxs(n, {
      title: '資料治理答詢：資料在哪裡、誰能碰、能否帶走',
      subtitle: 'Security and confidentiality answers',
      source: '需求說明書 pp.4-5, 17, 27',
      children: [
        e.jsxs(a, {
          children: [
            e.jsx(i, {
              title: '資料在哪裡處理？',
              tone: 'red',
              children: e.jsxs(o, {
                children: [
                  e.jsx('li', { children: '本署資訊系統資料於署內指定環境處理。' }),
                  e.jsx('li', { children: '使用 VPN／VDI 或核可隔離設備。' }),
                ],
              }),
            }),
            e.jsx(i, {
              title: '誰可以接觸？',
              tone: 'teal',
              children: e.jsxs(o, {
                children: [
                  e.jsx('li', { children: '限主持團隊與核可研究人員。' }),
                  e.jsx('li', { children: '成員簽署保密、資安與資料處理文件。' }),
                ],
              }),
            }),
            e.jsx(i, {
              title: '能否複製或攜出？',
              tone: 'amber',
              children: e.jsxs(o, {
                children: [
                  e.jsx('li', { children: '未經書面同意不得複製、保有或攜出原始資料。' }),
                  e.jsx('li', { children: '僅交付核可之去識別報告、模型與程式碼。' }),
                ],
              }),
            }),
          ],
        }),
        e.jsx('div', {
          style: { marginTop: 26 },
          children: e.jsx(i, {
            title: '個資、人體研究與性別分析邊界',
            tone: 'red',
            children:
              '若使用人為對象或個人隱私資料，依人體研究、個資與性別統計要求辦理；若僅使用非個資 DSMS 公開資料，則於期末報告明確說明不適用範圍。',
          }),
        }),
      ],
    }),
  mt = () =>
    e.jsx(n, {
      title: '三層式 AI 預警架構',
      subtitle: '資料層 → AI模型層 → 應用層',
      source: '服務建議書 第參章第二節，PDF pp.17-19',
      children: e.jsxs('div', {
        style: { display: 'grid', gridTemplateColumns: '1.3fr .7fr', gap: 28 },
        children: [
          e.jsx(j, {
            asset: 'figures/image1.png',
            caption: '服務建議書原圖：資料層、AI 模型層、應用層的閉環架構。',
            height: 560,
          }),
          e.jsxs(i, {
            title: '方法與輸出',
            tone: 'teal',
            style: { minHeight: 560 },
            children: [
              e.jsxs(o, {
                children: [
                  e.jsx('li', {
                    children: '方法：資料層匯入 DSMS、健保、製造、召回與國際風險訊號。',
                  }),
                  e.jsx('li', {
                    children:
                      '模型：HGNN 辨識結構風險，TFT 預測 30/60/90 日趨勢，異常偵測分流預警。',
                  }),
                  e.jsx('li', {
                    children: '結果：輸出風險儀表板、決策建議、回溯審計紀錄與 Model/Data Card。',
                  }),
                ],
              }),
              e.jsx(x, {
                children:
                  '設計來源：計畫書文獻回顧將國際短缺監測歸納為資料層、分析層、決策層；本案把該三層轉成可交付的 AI 預警架構。',
              }),
            ],
          }),
        ],
      }),
    }),
  _t = () =>
    e.jsx(n, {
      title: '雙軌策略：方法論先驗證，再套用臺灣',
      subtitle: 'Track A and Track B',
      source: '服務建議書 第參章第六節，PDF pp.20-22；附錄 D.1 p.68',
      children: e.jsxs('div', {
        style: { display: 'grid', gridTemplateColumns: '.78fr 1.22fr', gap: 28 },
        children: [
          e.jsxs(i, {
            title: '方法、資料與驗證結果',
            tone: 'red',
            style: { minHeight: 560 },
            children: [
              e.jsxs(o, {
                children: [
                  e.jsx('li', { children: '方法：先用美國公開金標準資料完成模型與指標驗證。' }),
                  e.jsx('li', { children: '套用：再把同一套流程轉入臺灣 DSMS 與可取得資料。' }),
                  e.jsx('li', {
                    children: '結果：即使跨部會資料未到位，仍能交付 DSMS-only MVP 與國內事件回溯。',
                  }),
                ],
              }),
              e.jsx(x, {
                tone: 'red',
                children:
                  '驗證條件：Track A 使用 FDA Drug Shortages、openFDA、CMS Part D、ASHP/UUDIS；Track B 以 DSMS 公開資料先完成有限度真實驗證。',
              }),
            ],
          }),
          e.jsx(j, {
            asset: 'figures/image31.png',
            caption: '服務建議書原圖：美國全面驗證軌與臺灣套用軌的分階段驗證設計。',
            height: 560,
          }),
        ],
      }),
    }),
  ut = () =>
    e.jsx(n, {
      appendix: !0,
      title: '工作項目二｜雙軌驗證設計',
      subtitle: '完整原圖：美國全面驗證軌 × 臺灣套用軌',
      source: '服務建議書 Word 圖片萃取：image31.png',
      children: e.jsx('div', {
        style: {
          height: 610,
          flexShrink: 0,
          display: 'grid',
          placeItems: 'center',
          padding: '8px 0 18px',
        },
        children: e.jsx('div', {
          style: {
            width: '100%',
            height: '100%',
            border: `1px solid ${t.line}`,
            borderRadius: 12,
            background: t.white,
            display: 'grid',
            placeItems: 'center',
            overflow: 'hidden',
            boxShadow: '0 18px 40px rgba(27,32,48,.08)',
          },
          children: e.jsx('svg', {
            viewBox: '0 0 1600 610',
            width: '100%',
            height: '100%',
            role: 'img',
            'aria-label': '雙軌驗證設計',
            children: e.jsx('image', {
              href: M('figures/image31.png'),
              x: '0',
              y: '0',
              width: '1600',
              height: '610',
              preserveAspectRatio: 'xMidYMid meet',
            }),
          }),
        }),
      }),
    }),
  ft = () =>
    e.jsx(n, {
      title: 'HGNN／知識圖譜刻畫結構性風險',
      subtitle: 'Supply chain relationship mechanism',
      source: '服務建議書 第參章第二節（二）模組A pp.18-19；第參章第七節（三）pp.25-26',
      children: e.jsxs('div', {
        style: { display: 'grid', gridTemplateColumns: '1.25fr .75fr', gap: 28 },
        children: [
          e.jsx(j, {
            asset: 'figures/image5.png',
            caption: '服務建議書原圖：藥品、製造商、供應商、API、替代藥與產地的圖譜節點。',
            height: 560,
          }),
          e.jsxs(i, {
            title: '方法與結果',
            tone: 'teal',
            style: { minHeight: 560 },
            children: [
              e.jsxs(o, {
                children: [
                  e.jsx('li', {
                    children: '方法：建立藥品、製造商、供應商、API、替代藥與產地節點。',
                  }),
                  e.jsx('li', {
                    children: '結果：找出單一來源、替代藥不足與共同 API 依賴等結構性風險。',
                  }),
                  e.jsx('li', { children: '驗收：交付供應鏈關聯機制設計文件與可查詢知識圖譜。' }),
                  e.jsx('li', {
                    children: '以 ATC code 與許可證字號對齊；處理製造商名稱變異與實體解析。',
                  }),
                  e.jsx('li', {
                    children:
                      'Degree、Betweenness、PageRank 與 Louvain／Leiden 找出關鍵節點與供應集群。',
                  }),
                ],
              }),
              e.jsx(x, {
                children:
                  '文獻依據：GCN/GAT/GraphSAGE 奠定供應鏈圖建模基礎；HAN 處理多型節點與多型關聯；KG-GCN-LSTM 支持圖譜特徵結合時序預測。',
              }),
            ],
          }),
        ],
      }),
    }),
  yt = () =>
    e.jsx(n, {
      title: 'TFT 預測多視野需求與庫存水位',
      subtitle: '30／60／90 日預警視窗',
      source: '服務建議書 第參章第二節（二）模組B p.19；第參章第七節（二）p.23',
      children: e.jsxs(k, {
        children: [
          e.jsxs(i, {
            title: '不是單點預測，而是風險區間',
            tone: 'teal',
            children: [
              e.jsxs(o, {
                children: [
                  e.jsx('li', { children: '預測未來 30、60、90 日需求與庫存水位。' }),
                  e.jsx('li', { children: '輸出 P10／P50／P90 分位數。' }),
                  e.jsx('li', {
                    children: '納入圖嵌入、製造／進口、季節／假日與國際警訊等協變量。',
                  }),
                  e.jsx('li', { children: '以 ARIMA/SARIMA、LSTM/GRU 作基線；TFT 為主幹模型。' }),
                ],
              }),
              e.jsx(x, {
                children:
                  '文獻依據：TFT 具變數選擇、注意力與多視窗預測能力（Lim et al., 2021）；以 Transformer 注意力機制（Vaswani et al., 2017）支援可解釋時間序列預測。',
              }),
            ],
          }),
          e.jsx('div', {
            style: {
              background: t.white,
              border: `1px solid ${t.line}`,
              borderRadius: 15,
              padding: 24,
            },
            children: e.jsxs('svg', {
              viewBox: '0 0 760 420',
              width: '100%',
              height: '420',
              children: [
                e.jsx('rect', {
                  x: '0',
                  y: '0',
                  width: '760',
                  height: '420',
                  fill: t.light,
                  rx: '12',
                }),
                e.jsx('line', {
                  x1: '70',
                  y1: '340',
                  x2: '700',
                  y2: '340',
                  stroke: t.line,
                  strokeWidth: '3',
                }),
                e.jsx('line', {
                  x1: '70',
                  y1: '70',
                  x2: '70',
                  y2: '340',
                  stroke: t.line,
                  strokeWidth: '3',
                }),
                e.jsx('path', {
                  d: 'M80 280 C160 245 220 260 290 215 C360 170 430 198 500 150 C570 115 640 138 690 100',
                  fill: 'none',
                  stroke: t.red,
                  strokeWidth: '8',
                }),
                e.jsx('path', {
                  d: 'M80 310 C180 270 260 292 360 235 C470 185 570 185 700 130',
                  fill: 'none',
                  stroke: t.teal,
                  strokeWidth: '4',
                  opacity: '.55',
                }),
                e.jsx('path', {
                  d: 'M80 250 C180 220 260 228 360 195 C470 145 570 124 700 78',
                  fill: 'none',
                  stroke: t.amber,
                  strokeWidth: '4',
                  opacity: '.55',
                }),
                e.jsx('text', {
                  x: '80',
                  y: '45',
                  fill: t.ink,
                  fontSize: '26',
                  fontWeight: '700',
                  children: 'P10 / P50 / P90 forecast band',
                }),
                e.jsx('text', {
                  x: '520',
                  y: '375',
                  fill: t.muted,
                  fontSize: '22',
                  children: '30 / 60 / 90 日視窗',
                }),
              ],
            }),
          }),
        ],
      }),
    }),
  vt = () =>
    e.jsx(n, {
      title: '集成異常偵測覆蓋五類供應變動',
      subtitle: 'Ensemble anomaly detection',
      source: '服務建議書 第參章第二節（二）模組C p.19；第參章第七節（四）pp.26-27',
      children: e.jsxs('div', {
        style: { display: 'grid', gridTemplateColumns: '.75fr 1.25fr', gap: 28 },
        children: [
          e.jsxs(i, {
            title: '方法與結果',
            tone: 'teal',
            style: { minHeight: 560 },
            children: [
              e.jsxs(o, {
                children: [
                  e.jsx('li', {
                    children: '方法：以多偵測器處理突增、突降、漂移、季節偏離與結構斷裂。',
                  }),
                  e.jsx('li', { children: '結果：集成分數轉成高／中／低三級預警，支援監管分流。' }),
                  e.jsx('li', { children: '驗收：交付異常偵測演算法、資料需求清單與應用建議書。' }),
                ],
              }),
              e.jsxs('div', {
                style: { marginTop: 22 },
                children: [
                  e.jsx(y, { tone: 'red', children: '突增' }),
                  e.jsx(y, { tone: 'red', children: '突降' }),
                  e.jsx(y, { tone: 'teal', children: '漂移' }),
                  e.jsx(y, { tone: 'amber', children: '季節性偏離' }),
                  e.jsx(y, { tone: 'amber', children: '結構性斷裂' }),
                ],
              }),
              e.jsx(x, {
                children:
                  '文獻依據：Isolation Forest 偵測孤立點與分布偏移；Spectral Residual 處理短期波動；CUSUM/PELT 偵測變點；自編碼器以重構誤差捕捉結構偏離。',
              }),
            ],
          }),
          e.jsx(j, {
            asset: 'figures/image7.png',
            caption: '服務建議書原圖：多演算法集成異常偵測與三級預警輸出。',
            height: 560,
          }),
        ],
      }),
    }),
  St = () =>
    e.jsxs(n, {
      title: 'XAI 讓每一次預警可審計、可追溯',
      subtitle: '每個預警都要回答：為什麼？',
      source: '服務建議書 第參章第二節（二）模組D p.19；第參章第四節 p.20；第伍章第七節 p.43',
      children: [
        e.jsxs(A, {
          children: [
            e.jsx(i, { title: 'SHAP', tone: 'red', children: '呈現 TFT 特徵重要性。' }),
            e.jsx(i, { title: 'Attention', tone: 'teal', children: '視覺化關鍵時間點與特徵。' }),
            e.jsx(i, {
              title: '圖譜路徑',
              tone: 'amber',
              children: '追溯「藥品 ← 原料藥 ← 產地／製造異動」風險路徑。',
            }),
            e.jsx(i, {
              title: '自然語言摘要',
              tone: 'red',
              children: '把模型輸出轉成監管可讀說明。',
            }),
          ],
        }),
        e.jsx('div', {
          style: {
            marginTop: 34,
            padding: '26px 32px',
            background: `${t.red}10`,
            borderLeft: `6px solid ${t.red}`,
            borderRadius: 8,
            color: t.inkSoft,
            fontSize: 30,
            lineHeight: 1.42,
          },
          children: '每次預警至少輸出：特徵重要性、注意力時間熱圖、圖譜風險路徑與自然語言摘要。',
        }),
        e.jsx(x, {
          tone: 'red',
          children:
            '文獻依據：SHAP 以 Shapley value 解釋特徵貢獻（Lundberg & Lee, 2017）；共形預測提供具理論保證的預測區間（Angelopoulos & Bates, 2023），補足監管級 AI 的不確定性說明。',
        }),
      ],
    }),
  Mt = () =>
    e.jsxs(n, {
      title: '資料藍圖：從 DSMS 到跨資料源擴充',
      subtitle: 'Data capability ladder',
      source: '服務建議書 第參章第二節（一）p.18；附錄 C p.66；附錄 D.1 p.68',
      children: [
        e.jsxs('div', {
          style: { display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 18 },
          children: [
            e.jsx(m, {
              n: '0',
              title: 'DSMS',
              tone: 'red',
              children: '零條件 MVP、通報事件標籤與國內近一年回溯依據。',
            }),
            e.jsx(m, {
              n: '1',
              title: '健保調劑／藥價',
              tone: 'teal',
              children: '提供需求端訊號，解鎖 TFT 需求端預警。',
            }),
            e.jsx(m, {
              n: '2',
              title: '製造／進口／召回',
              tone: 'amber',
              children: '補足供給端與品質風險訊號。',
            }),
            e.jsx(m, {
              n: '3',
              title: '國際警訊／OSINT',
              tone: 'red',
              children: '補足外部風險與國際供應鏈變動。',
            }),
          ],
        }),
        e.jsx('div', {
          style: { marginTop: 30, color: t.inkSoft, fontSize: 27, lineHeight: 1.45 },
          children:
            '資料釋出越完整，模型能力越往上解鎖；本案會用 Data Card 說明欄位、缺漏、偏差與可用限制。',
        }),
      ],
    }),
  At = () =>
    e.jsx(n, {
      title: '零條件 MVP：沒有新增資料也能交付可操作儀表板',
      subtitle: 'MVP does not depend on new cross-agency data',
      source: '服務建議書 第參章第六節 pp.21-22；附錄 C p.66',
      children: e.jsxs(k, {
        children: [
          e.jsx(i, {
            title: '最低可行交付',
            tone: 'red',
            children: e.jsxs(o, {
              children: [
                e.jsx('li', { children: '硬性交付：以 DSMS 公開資料完成可操作 MVP 儀表板。' }),
                e.jsx('li', {
                  children: '輸入：通報事件、必要藥品清單、缺藥標籤與近一年國內回溯資料。',
                }),
                e.jsx('li', {
                  children: '輸出：風險分級、地圖視覺化、XAI 溯源、事件回放與 Lead Time。',
                }),
                e.jsx('li', {
                  children: '限制：效能數值依資料可得性誠實回報，不把資料不足包裝成高準確率。',
                }),
              ],
            }),
          }),
          e.jsxs('div', {
            style: {
              background: t.ink,
              borderRadius: 15,
              padding: 26,
              color: t.white,
              minHeight: 410,
            },
            children: [
              e.jsx('div', {
                style: {
                  fontSize: 22,
                  color: t.teal,
                  fontWeight: 800,
                  letterSpacing: '.18em',
                  textTransform: 'uppercase',
                },
                children: 'MVP Dashboard Mock',
              }),
              e.jsxs('div', {
                style: { marginTop: 24, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 },
                children: [
                  e.jsxs('div', {
                    style: { background: 'rgba(255,255,255,.09)', borderRadius: 12, padding: 20 },
                    children: [
                      e.jsx('div', {
                        style: {
                          color: t.white,
                          fontSize: 44,
                          fontFamily: 'var(--osd-font-display)',
                          fontWeight: 700,
                        },
                        children: 'High',
                      }),
                      e.jsx('div', {
                        style: { color: '#CBD5E1', fontSize: 22 },
                        children: '風險分級清單',
                      }),
                    ],
                  }),
                  e.jsxs('div', {
                    style: { background: 'rgba(255,255,255,.09)', borderRadius: 12, padding: 20 },
                    children: [
                      e.jsx('div', {
                        style: {
                          color: t.white,
                          fontSize: 44,
                          fontFamily: 'var(--osd-font-display)',
                          fontWeight: 700,
                        },
                        children: 'XAI',
                      }),
                      e.jsx('div', {
                        style: { color: '#CBD5E1', fontSize: 22 },
                        children: '風險溯源',
                      }),
                    ],
                  }),
                  e.jsx('div', {
                    style: {
                      gridColumn: '1 / span 2',
                      background: 'rgba(255,255,255,.09)',
                      borderRadius: 12,
                      padding: 20,
                    },
                    children: e.jsxs('svg', {
                      viewBox: '0 0 680 120',
                      width: '100%',
                      height: '120',
                      children: [
                        e.jsx('path', {
                          d: 'M20 78 C110 34 190 82 280 48 C370 16 450 62 530 38 C590 20 640 34 660 28',
                          fill: 'none',
                          stroke: t.teal,
                          strokeWidth: '7',
                        }),
                        e.jsx('line', {
                          x1: '20',
                          y1: '95',
                          x2: '660',
                          y2: '95',
                          stroke: 'rgba(255,255,255,.18)',
                          strokeWidth: '3',
                        }),
                        e.jsx('circle', { cx: '530', cy: '38', r: '10', fill: t.amber }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  Tt = () =>
    e.jsx(n, {
      title: '投標前 PoC：方法已先被壓力測試',
      subtitle: 'Proposal-grounded metrics',
      source: '服務建議書 第參章第七節（二之一）至（二之三）PDF pp.23-25；第參章第七節（五）p.27',
      children: e.jsxs('div', {
        style: { display: 'grid', gridTemplateColumns: '.88fr 1.12fr', gap: 28 },
        children: [
          e.jsxs('div', {
            children: [
              e.jsxs('div', {
                style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 },
                children: [
                  e.jsx(b, {
                    value: '0.413',
                    label: 'MASE',
                    note: '混合法時序預測；優於列示比較模型',
                    tone: 'red',
                  }),
                  e.jsx(b, {
                    value: '92.6%',
                    label: '覆蓋率',
                    note: '90% 共形預測區間之經驗覆蓋率',
                    tone: 'teal',
                  }),
                  e.jsx(b, {
                    value: '93.8%',
                    label: '分類準確率',
                    note: 'Meta Llama-3.1-8B 成因分類',
                    tone: 'amber',
                  }),
                  e.jsx(b, {
                    value: '7',
                    label: '異常月份',
                    note: 'openFDA 2016/01-2026/04 共 124 月測試',
                    tone: 'red',
                  }),
                ],
              }),
              e.jsxs('div', {
                style: { marginTop: 20 },
                children: [
                  e.jsx(y, { tone: 'teal', children: 'Precision ≥0.70' }),
                  e.jsx(y, { tone: 'teal', children: 'Recall ≥0.65' }),
                  e.jsx(y, { tone: 'teal', children: 'F1 ≥0.67' }),
                  e.jsx(y, { tone: 'amber', children: 'Lead Time ≥30日' }),
                ],
              }),
              e.jsx(x, {
                tone: 'red',
                children:
                  '輸入：openFDA enforcement 公開月資料 2016/01-2026/04，共 124 個月份；用途是投標前壓力測試，確認方法可處理召回事件的時間序列與成因文字。',
              }),
              e.jsx(x, {
                children:
                  '設計：採時間序列切分與 walk-forward 思維避免未來資料洩漏；MASE 對照 XGBoost、Random Forest、SARIMA、LSTM 等基線，90% 預測區間檢查經驗覆蓋率，分類結果以 Meta Llama-3.1-8B 與 Gemma-2-9B 比較。',
              }),
            ],
          }),
          e.jsx(j, {
            asset: 'figures/image13.png',
            caption: '服務建議書原圖：openFDA 異常偵測 PoC 儀表板與異常月份清單。',
            height: 560,
          }),
        ],
      }),
    }),
  Ct = () =>
    e.jsx(n, {
      title: 'Holdout 24 個月：用保留期間檢查預測是否外推',
      subtitle: 'Concrete validation evidence from proposal PoC',
      source:
        '服務建議書 Word 圖片萃取：image17.png；服務建議書 第參章第七節（二之一）至（二之三）',
      children: e.jsxs('div', {
        style: { display: 'grid', gridTemplateColumns: '1.18fr .82fr', gap: 28 },
        children: [
          e.jsx(j, {
            asset: 'figures/image17.png',
            caption: '服務建議書原圖：保留期間預測表現與時間序列外推。',
            height: 560,
          }),
          e.jsxs(i, {
            title: '輸入、方法與結果',
            tone: 'teal',
            style: { minHeight: 560 },
            children: [
              e.jsxs(o, {
                children: [
                  e.jsx('li', {
                    children:
                      '輸入：openFDA enforcement 月資料，保留後段月份作為 holdout，不參與訓練。',
                  }),
                  e.jsx('li', {
                    children: '方法：時間序列外推與 walk-forward 驗證，避免用未來月份預測過去。',
                  }),
                  e.jsx('li', {
                    children: '基線：與 XGBoost、Random Forest、SARIMA、LSTM 等模型比較 MASE。',
                  }),
                  e.jsx('li', {
                    children:
                      '結果：混合法 MASE 0.413，作為後續轉入 DSMS 回溯驗證前的方法壓力測試。',
                  }),
                ],
              }),
              e.jsx(x, {
                children:
                  '說法重點：這裡先證明「方法能在公開召回資料上外推」；履約期再用國內近一年 DSMS 事件做同樣的時間切分回溯，並誠實揭露命中、誤警與 Lead Time。',
              }),
            ],
          }),
        ],
      }),
    }),
  Dt = () =>
    e.jsx(n, {
      title: '回溯驗證：用近一年國內缺藥事件檢驗可行性',
      subtitle: 'Required by CFP',
      source: '需求說明書 p.3；服務建議書 pp.27, 36',
      children: e.jsxs('div', {
        style: { display: 'grid', gridTemplateColumns: '1.25fr .75fr', gap: 28 },
        children: [
          e.jsx(j, {
            asset: 'figures/image9.png',
            caption: '服務建議書原圖：每 30 日滾動的 Walk-forward 回溯驗證設計。',
            height: 560,
          }),
          e.jsxs(i, {
            title: '方法、結果與限制',
            tone: 'amber',
            style: { minHeight: 560 },
            children: [
              e.jsxs(o, {
                children: [
                  e.jsx('li', {
                    children: '方法：只用過去資料預測未來 30／60／90 日，避免時序資料洩漏。',
                  }),
                  e.jsx('li', {
                    children: 'M6-M7 硬性交付：用國內近一年缺藥事件完成回溯驗證報告。',
                  }),
                  e.jsx('li', {
                    children: 'DSMS-only：若新增資料未釋出，仍以 DSMS 與合成情境交付可行性證據。',
                  }),
                  e.jsx('li', {
                    children: '結果呈現：命中、誤警、Lead Time 與 95% 信賴區間；不過度宣稱。',
                  }),
                ],
              }),
              e.jsx(x, {
                tone: 'amber',
                children:
                  '目前已完成的是公開資料 PoC 與驗證設計；DSMS 國內實測將於履約期執行。交叉驗證採時間序列分塊/滾動式 walk-forward，不打亂月份，每一輪僅使用當時以前資料，模擬真實預警情境。',
              }),
            ],
          }),
        ],
      }),
    }),
  Ft = () =>
    e.jsx(n, {
      title: 'AI 與資安答詢：不上商業雲、不用中國來源模型',
      subtitle: 'Model source, cloud boundary and data destruction',
      source: '需求說明書 pp.4-5；服務建議書 pp.20-22, 63-64',
      children: e.jsxs(a, {
        children: [
          e.jsx(i, {
            title: '模型是否上雲？',
            tone: 'red',
            children: e.jsxs(o, {
              children: [
                e.jsx('li', { children: '署內原始資料不送商業雲端 API。' }),
                e.jsx('li', { children: '公開資料 PoC 與署內資料處理環境清楚切開。' }),
              ],
            }),
          }),
          e.jsx(i, {
            title: '模型來源是否合規？',
            tone: 'teal',
            children: e.jsxs(o, {
              children: [
                e.jsx('li', { children: '採地端、非中國來源開源模型或公部門核可算力。' }),
                e.jsx('li', { children: 'LLM 僅作文字結構化支援，非資料外流管道。' }),
              ],
            }),
          }),
          e.jsx(i, {
            title: '結案如何處理資料？',
            tone: 'amber',
            children: e.jsxs(o, {
              children: [
                e.jsx('li', { children: '期末交付資料銷毀/轉移確認文件。' }),
                e.jsx('li', { children: '保留稽核紀錄與核可交付物，原始資料不外流。' }),
              ],
            }),
          }),
        ],
      }),
    }),
  It = () =>
    e.jsxs(n, {
      title: '進度與交付物：從七個月路徑到期末驗收',
      subtitle: 'Schedule, meetings, milestones and acceptance package',
      source: '服務建議書 第伍章；需求說明書 pp.3-5',
      children: [
        e.jsxs(a, {
          children: [
            e.jsx(i, {
              title: '七個月路徑',
              tone: 'red',
              children: 'M1-M4 完成 Track A 方法驗證，M5-M7 轉入臺灣套用、回溯驗證與 MVP demo。',
            }),
            e.jsx(i, {
              title: '會議控管',
              tone: 'teal',
              children:
                '每二個月履約進度會議、M6 專家討論會，會前資料與會後紀錄都有明確工作天要求。',
            }),
            e.jsx(i, {
              title: '期末驗收',
              tone: 'amber',
              children:
                '12/15 期末初稿、12/31 定稿與電子檔，搭配 live demo、會議紀錄與資料銷毀確認。',
            }),
          ],
        }),
        e.jsx('div', {
          style: { marginTop: 34, color: t.inkSoft, fontSize: 28, lineHeight: 1.42 },
          children:
            '後續頁面將截圖表格重繪為簡報版：工作分解矩陣、六大強制里程碑、交付物對應驗收節點。',
        }),
      ],
    }),
  kt = () =>
    e.jsxs(n, {
      title: '七個月執行路徑：M1-M4驗證，M5-M7落地',
      subtitle: 'Work breakdown structure',
      source: '服務建議書 第伍章一、二，PDF p.40；表14',
      children: [
        e.jsxs('div', {
          style: { display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 14 },
          children: [
            e.jsx(m, {
              n: 'M1',
              title: '啟動與國際研析',
              tone: 'red',
              children: '國際資料與需求啟動。',
            }),
            e.jsx(m, {
              n: 'M2',
              title: '方法學設計',
              tone: 'teal',
              children: '模型與資料流程設計。',
            }),
            e.jsx(m, { n: 'M3', title: '雛形開發', tone: 'amber', children: 'AI 預警雛形。' }),
            e.jsx(m, { n: 'M4', title: '整合圖譜', tone: 'red', children: '關聯機制分析。' }),
            e.jsx(m, { n: 'M5', title: '異常偵測', tone: 'teal', children: '資料需求與演算法。' }),
            e.jsx(m, { n: 'M6', title: '回溯驗證', tone: 'amber', children: '國內事件驗證。' }),
            e.jsx(m, { n: 'M7', title: '結案驗收', tone: 'red', children: '期末與 MVP demo。' }),
          ],
        }),
        e.jsx('div', {
          style: { marginTop: 30, color: t.inkSoft, fontSize: 26, lineHeight: 1.45 },
          children:
            'Track A 於 M1-M4 完成公開資料方法驗證；Track B 於 M5-M7 轉入臺灣套用、回溯驗證與 MVP 展示；資料治理全期並行。',
        }),
      ],
    }),
  Pt = () =>
    e.jsxs(n, {
      title: '三段式交付地圖：方法驗證、導入回溯、期末驗收',
      subtitle: 'Main delivery map for briefing',
      source: '服務建議書 第伍章二、三，表14-16',
      children: [
        e.jsxs(a, {
          children: [
            e.jsx(i, {
              title: 'M1-M4｜方法驗證',
              tone: 'red',
              style: { minHeight: 360 },
              children: e.jsxs(o, {
                children: [
                  e.jsx('li', { children: '國際 AI 監測研析與比較矩陣。' }),
                  e.jsx('li', { children: 'HGNN＋TFT 模型雛形與 Model/Data Card。' }),
                  e.jsx('li', { children: '知識圖譜與初步異常偵測結果。' }),
                ],
              }),
            }),
            e.jsx(i, {
              title: 'M5-M6｜導入與回溯',
              tone: 'teal',
              style: { minHeight: 360 },
              children: e.jsxs(o, {
                children: [
                  e.jsx('li', { children: '異常偵測演算法與資料需求清單。' }),
                  e.jsx('li', { children: '國內近一年缺藥事件回溯驗證。' }),
                  e.jsx('li', { children: '系統建置與功能擴充建議白皮書。' }),
                ],
              }),
            }),
            e.jsx(i, {
              title: 'M7｜MVP 與期末驗收',
              tone: 'amber',
              style: { minHeight: 360 },
              children: e.jsxs(o, {
                children: [
                  e.jsx('li', { children: 'DSMS-only MVP 儀表板與 live demo。' }),
                  e.jsx('li', { children: '期末報告定稿、電子檔與 GRB 填報。' }),
                  e.jsx('li', { children: '會議紀錄、資料銷毀確認與驗收包。' }),
                ],
              }),
            }),
          ],
        }),
        e.jsx('div', {
          style: { marginTop: 30, color: t.inkSoft, fontSize: 27, lineHeight: 1.45 },
          children:
            '主文用三段交付地圖說清楚「何時交、交什麼、如何驗收」；完整工作分解矩陣與交付物明細放在附錄供答詢查閱。',
        }),
      ],
    }),
  Wt = () => {
    const s = ['M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7'],
      l = [
        ['1. 國際研析', ['◆▣', '▣', '◇', '', '', '', '']],
        ['2. 進階方法學', ['◆▣', '▣', '▣', '◇', '', '', '']],
        ['3. 關聯分析（圖譜）', ['', '◆', '▣', '▣', '◇', '', '']],
        ['4. 異常偵測', ['', '', '◆', '▣', '▣', '◇', '']],
        ['5. 回溯驗證', ['', '', '', '◆', '▣', '▣◇', '◇']],
        ['6. 系統諮詢', ['◆', '▣', '▣', '▣', '▣◇', '▣', '']],
        ['7. 資料治理', ['◆', '▣', '▣', '▣', '▣', '▣', '◇']],
        ['8. 進度會議', ['', '◆', '', '▣', '', '▣', '']],
        ['9. 專家會議', ['', '', '', '◆', '', '▣', '']],
      ],
      c = ['A', 'A', 'A', 'A', 'B', 'B', 'B'],
      h = (d, u) => {
        if (!d) return null;
        const f = u < 4 ? 'teal' : 'amber';
        return e.jsx(C, { tone: d.includes('◇') ? 'red' : f, children: d });
      };
    return e.jsxs(n, {
      appendix: !0,
      title: '工作分解矩陣：九項工作對齊七個月',
      subtitle: 'Redrawn from Table 14',
      source: '服務建議書 第伍章二，表14；◆啟動、▣主要執行、◇收斂交付',
      children: [
        e.jsx(T, {
          children: e.jsxs('div', {
            style: {
              display: 'grid',
              gridTemplateColumns: '300px repeat(7, 1fr)',
              background: t.white,
            },
            children: [
              e.jsx('div', {
                style: { ..._, background: t.blush, color: t.ink, fontWeight: 900, fontSize: 20 },
                children: '工作項目',
              }),
              s.map((d) =>
                e.jsx(
                  'div',
                  {
                    style: {
                      ..._,
                      background: t.blush,
                      color: t.ink,
                      fontWeight: 900,
                      textAlign: 'center',
                      fontSize: 20,
                    },
                    children: d,
                  },
                  d,
                ),
              ),
              l.map(([d, u]) =>
                e.jsxs(
                  S.Fragment,
                  {
                    children: [
                      e.jsx(
                        'div',
                        { style: { ..._, color: t.ink, fontWeight: 800 }, children: d },
                        `${d}-label`,
                      ),
                      u.map((f, v) =>
                        e.jsx(
                          'div',
                          {
                            style: { ..._, textAlign: 'center', minHeight: 46 },
                            children: h(f, v),
                          },
                          `${d}-${s[v]}`,
                        ),
                      ),
                    ],
                  },
                  d,
                ),
              ),
              e.jsx('div', {
                style: { ..._, color: t.ink, fontWeight: 900, background: t.light },
                children: '雙軌階段',
              }),
              c.map((d, u) =>
                e.jsx(
                  'div',
                  {
                    style: { ..._, textAlign: 'center', background: t.light },
                    children: e.jsx(C, { tone: d === 'A' ? 'teal' : 'amber', children: d }),
                  },
                  `${d}-${s[u]}`,
                ),
              ),
            ],
          }),
        }),
        e.jsx('div', {
          style: { marginTop: 24, color: t.inkSoft, fontSize: 24, lineHeight: 1.42 },
          children:
            'A＝美國公開資料全面驗證；B＝臺灣 DSMS 套用與回溯驗證。資料治理全期貫穿，M7 收斂至期末報告、MVP demo 與資料銷毀確認。',
        }),
      ],
    });
  },
  wt = () => {
    const s = [
      ['啟動會議', '決標後 14 個工作天內', '§貳一(一)', '計畫啟動報告、團隊名冊、資料治理 SOP'],
      ['期中會議①', 'M2 末／約第 60 日', '§貳一(七)', '國際研析初稿、候選模型基線、Schema 草稿'],
      ['期中會議②', 'M4 末／約第 120 日', '§貳一(七)', '雙引擎雛形、圖譜分析結果、初步異常偵測'],
      [
        '期中會議③＋專家會議',
        'M6 中／約第 180 日',
        '§貳一(七)、(八)',
        '回溯驗證指標、可行性評估、系統白皮書草稿',
      ],
      ['期末報告初稿', '115/12/15 前', '§拾二(二)', '期末報告初稿 1 式 6 份'],
      ['期末報告繳交', '115/12/31 前', '§拾二(二)', '期末報告定稿、MVP 現場 demo、資料銷毀確認書'],
    ];
    return e.jsxs(n, {
      appendix: !0,
      title: '六大強制里程碑：每兩個月盤點一次',
      subtitle: 'Redrawn from Table 15',
      source: '服務建議書 第伍章三，表15；需求說明書 pp.3-4',
      children: [
        e.jsx(T, {
          children: e.jsxs('div', {
            style: { display: 'grid', gridTemplateColumns: '300px 260px 220px 1fr' },
            children: [
              ['里程碑', '預定時點', '對應條款', '主要交付物'].map((l) =>
                e.jsx(
                  'div',
                  {
                    style: {
                      ..._,
                      background: t.blush,
                      color: t.ink,
                      fontWeight: 900,
                      fontSize: 20,
                    },
                    children: l,
                  },
                  l,
                ),
              ),
              s.map((l) =>
                l.map((c, h) =>
                  e.jsx(
                    'div',
                    {
                      style: {
                        ..._,
                        color: h === 0 ? t.ink : t.inkSoft,
                        fontWeight: h === 0 ? 850 : 500,
                        fontSize: h === 3 ? 17 : 18,
                      },
                      children: c,
                    },
                    `${l[0]}-${h}`,
                  ),
                ),
              ),
            ],
          }),
        }),
        e.jsx('div', {
          style: { marginTop: 24, color: t.inkSoft, fontSize: 24, lineHeight: 1.42 },
          children:
            '會前 4 個工作天送交資料，會後 5 個工作天內提供紀錄；專家會議可與第三次期中會議合併或分開辦理。',
        }),
      ],
    });
  },
  Lt = () => {
    const s = [
      ['計畫啟動報告、資料治理 SOP 與切結書', '七', 'M1', '啟動會議'],
      ['國際 AI 研析報告＋國際比較矩陣', '一', 'M3', '期中會議①'],
      ['AI 預警模型雛形（HGNN＋TFT）＋Model／Data Card', '二', 'M5', '期中會議②（現場 Demo）'],
      ['供應鏈短缺關聯機制設計文件＋知識圖譜', '三', 'M5', '期中會議②'],
      ['異常偵測演算法＋資料需求清單＋應用建議書', '四', 'M6', '期中會議③'],
      ['歷史缺藥事件回溯驗證報告＋可行性評估報告', '五', 'M6-M7', '期中會議③'],
    ];
    return e.jsx(n, {
      appendix: !0,
      title: '交付時程總表（一）：方法與驗證交付',
      subtitle: 'Redrawn from Table 16',
      source: '服務建議書 第伍章三，表16',
      children: e.jsx(P, { rows: s }),
    });
  },
  Ht = () => {
    const s = [
      ['系統建置與功能擴充建議白皮書', '六', 'M6', '期中會議③'],
      [
        '藥品短缺預警 MVP 儀表板＋國內真實缺藥事件回溯',
        '二、四、五、六',
        'M7',
        '期末驗收（現場 live demo）',
      ],
      ['期中會議紀錄 ×3', '八', 'M2／M4／M6', '各期中會議'],
      ['專家討論會議紀錄 ×1', '九', 'M6', '專家會議'],
      ['期末報告初稿（1 式 6 份）', '全案', '115/12/15', '期末初稿里程碑'],
      ['期末報告定稿＋電子檔＋GRB 填報', '全案', '115/12/31', '期末驗收'],
      ['結案資料銷毀確認書', '七', 'M7', '期末驗收'],
    ];
    return e.jsxs(n, {
      appendix: !0,
      title: '交付時程總表（二）：期末驗收與文件',
      subtitle: 'Redrawn from Table 16',
      source: '服務建議書 第伍章三，表16；需求說明書 pp.4-5',
      children: [
        e.jsx(P, { rows: s, compact: !0 }),
        e.jsx('div', {
          style: { marginTop: 22, color: t.inkSoft, fontSize: 24, lineHeight: 1.42 },
          children:
            '核心硬性交付為零條件 MVP：即使未取得新增跨部會資料，也以 DSMS 公開資料完成可操作儀表板、國內事件回溯與 live demo。',
        }),
      ],
    });
  },
  P = ({ rows: s, compact: l = !1 }) =>
    e.jsx(T, {
      children: e.jsxs('div', {
        style: { display: 'grid', gridTemplateColumns: '1.55fr 180px 190px 1fr' },
        children: [
          ['交付物', '工作項目', '預定完成', '里程碑／驗收'].map((c) =>
            e.jsx(
              'div',
              {
                style: { ..._, background: t.blush, color: t.ink, fontWeight: 900, fontSize: 20 },
                children: c,
              },
              c,
            ),
          ),
          s.map((c) =>
            c.map((h, d) =>
              e.jsx(
                'div',
                {
                  style: {
                    ..._,
                    color: d === 0 ? t.ink : t.inkSoft,
                    fontWeight: d === 0 ? 800 : 500,
                    fontSize: l ? 17 : 18,
                    minHeight: l ? 48 : 56,
                  },
                  children: h,
                },
                `${c[0]}-${d}`,
              ),
            ),
          ),
        ],
      }),
    }),
  Bt = () =>
    e.jsxs(n, {
      title: '會議回饋會轉成模型與政策建議調整',
      subtitle: 'Progress meetings and expert meeting',
      source: '需求說明書 pp.3-4；服務建議書 第伍章三 p.41',
      children: [
        e.jsxs(a, {
          children: [
            e.jsx(i, {
              title: '履約進度會議',
              tone: 'red',
              children: '每二個月辦理一次，全期至少三次；團隊內部每兩週站會、每月審查。',
            }),
            e.jsx(i, {
              title: '文件時程',
              tone: 'teal',
              children: '會前 4 個工作天提交資料，會後 5 個工作天內提供紀錄。',
            }),
            e.jsx(i, {
              title: '專家討論會',
              tone: 'amber',
              children: '至少一場；涵蓋臨床藥學、供應鏈、AI／資料科學、藥事法規。',
            }),
          ],
        }),
        e.jsx('div', { style: { height: 34 } }),
        e.jsx(i, {
          title: '回饋閉環',
          tone: 'teal',
          children:
            '會議意見會進入資料需求、模型調整、異常偵測閾值與政策建議修訂；臨時諮詢 5 個工作天內回應。',
        }),
      ],
    }),
  Rt = () =>
    e.jsxs(n, {
      title: '風險控管與品質保證',
      subtitle: '把七個月時程風險轉成可追蹤的資料、模型與驗收閘門',
      source: '服務建議書 第伍章四、五、七，PDF pp.42-43；表17',
      children: [
        e.jsxs(a, {
          children: [
            e.jsx(i, {
              title: '資料風險',
              tone: 'red',
              children: e.jsxs(o, {
                children: [
                  e.jsx('li', {
                    children: '國內事件標籤不足時，以 DSMS-only 回溯與信賴區間誠實呈現。',
                  }),
                  e.jsx('li', { children: '欄位缺漏、定義差異與資料限制寫入 Data Card。' }),
                ],
              }),
            }),
            e.jsx(i, {
              title: '模型風險',
              tone: 'teal',
              children: e.jsxs(o, {
                children: [
                  e.jsx('li', {
                    children: '以 openFDA/FAERS 先完成公開資料壓力測試，再轉入臺灣回溯。',
                  }),
                  e.jsx('li', { children: '模型版本、資料切分、指標與錯誤案例寫入 Model Card。' }),
                ],
              }),
            }),
            e.jsx(i, {
              title: '驗收風險',
              tone: 'amber',
              children: e.jsxs(o, {
                children: [
                  e.jsx('li', {
                    children: 'M7 預留 10 個工作天作期末校對、文件緩衝與 demo 演練。',
                  }),
                  e.jsx('li', {
                    children: 'Git／DVC／MLflow、Definition of Done 與三層審閱控管交付品質。',
                  }),
                ],
              }),
            }),
          ],
        }),
        e.jsx('div', {
          style: { marginTop: 28 },
          children: e.jsx(i, {
            title: '品質底線',
            tone: 'red',
            children:
              '任何效能數字都必須能回溯到輸入資料、切分條件、評估指標與限制說明；若資料不足，不以高準確率包裝。',
          }),
        }),
      ],
    }),
  zt = () =>
    e.jsx(n, {
      title: 'MDIC 與機構級支援補足落地能力',
      subtitle: 'Institutional support',
      source: '服務建議書 第陸章一至四，PDF pp.45-46；表18、表19',
      children: e.jsxs(a, {
        children: [
          e.jsx(i, {
            title: '品質與法規',
            tone: 'red',
            children: 'ISO 13485、醫療器材製造／販賣雙許可、TFDA 核可醫材技術人員訓練認證。',
          }),
          e.jsx(i, {
            title: '算力與場域',
            tone: 'teal',
            children: 'NCHC iService、成大計網 A100／A10、實驗室 DGX Spark 三層公部門算力。',
          }),
          e.jsx(i, {
            title: '資料處理原則',
            tone: 'amber',
            children: '資料於臺灣境內、地端處理；不使用商業雲端或對外商業 LLM API，保留存取紀錄。',
          }),
        ],
      }),
    }),
  Et = () =>
    e.jsxs(n, {
      title: '投標承諾單頁：零條件 MVP、資料不離署、模型來源可控',
      subtitle: 'One-page defense for likely committee questions',
      source: '需求說明書 pp.3-5；服務建議書 第參章、第伍章、第陸章',
      children: [
        e.jsxs(a, {
          children: [
            e.jsx(i, {
              title: 'A｜零條件 MVP',
              tone: 'red',
              children: e.jsxs(r, {
                children: [
                  e.jsx('li', { children: '即使沒有新增跨部會資料，仍以 DSMS 既有資料交付 MVP。' }),
                  e.jsx('li', {
                    children: '交付儀表板、事件回放、風險分級、XAI 溯源與國內事件回溯。',
                  }),
                  e.jsx('li', { children: '效能不足時不包裝，改以信賴區間與限制條件誠實呈現。' }),
                ],
              }),
            }),
            e.jsx(i, {
              title: 'B｜模型與運算邊界',
              tone: 'teal',
              children: e.jsxs(r, {
                children: [
                  e.jsx('li', { children: '署內原始資料不上商業雲端 API，不作外部模型訓練資料。' }),
                  e.jsx('li', { children: '採地端、非中國來源開源模型或公部門核可算力。' }),
                  e.jsx('li', {
                    children: 'NCHC iService、成大計網中心與實驗室設備作為三層算力支援。',
                  }),
                ],
              }),
            }),
            e.jsx(i, {
              title: 'C｜資料、IP 與銷毀',
              tone: 'amber',
              children: e.jsxs(r, {
                children: [
                  e.jsx('li', { children: '原始資料於指定環境處理，未經書面同意不得複製或攜出。' }),
                  e.jsx('li', { children: '模型權重、程式碼、技術文件依需求書歸屬食藥署。' }),
                  e.jsx('li', { children: '期末交付資料銷毀/轉移確認文件與稽核紀錄。' }),
                ],
              }),
            }),
          ],
        }),
        e.jsx('div', {
          style: { marginTop: 34, fontSize: 24, lineHeight: 1.5, color: t.inkSoft },
          children: '對齊需求書：國內回溯驗證、MVP 現場展示、保密與資料治理、期末可驗收交付。',
        }),
      ],
    }),
  Nt = () =>
    e.jsxs(n, {
      title: '經費編列：400萬支撐七個月核心交付',
      subtitle: 'Budget alignment after the nine work items',
      source: '服務建議書 第捌章一、六、七，PDF pp.57, 59-60；表28-30',
      children: [
        e.jsxs(A, {
          children: [
            e.jsx(b, { value: '400萬', label: '總經費', note: 'NT$ 4,000,000', tone: 'red' }),
            e.jsx(b, {
              value: '53.2%',
              label: '人事費',
              note: 'NT$ 2,127,496，高階人力為核心',
              tone: 'teal',
            }),
            e.jsx(b, {
              value: '33.9%',
              label: '業務費',
              note: 'NT$ 1,356,261，算力與外部專家諮詢',
              tone: 'amber',
            }),
            e.jsx(b, {
              value: '11.6%',
              label: '管理費',
              note: 'NT$ 463,763；設備費 NT$ 52,480',
              tone: 'red',
            }),
          ],
        }),
        e.jsx('div', { style: { height: 24 } }),
        e.jsxs(a, {
          children: [
            e.jsx(i, {
              label: '人力',
              title: '預算主體是研究人力',
              tone: 'teal',
              style: { padding: '22px 28px 24px' },
              children: e.jsxs(r, {
                children: [
                  e.jsx('li', {
                    children:
                      '主持團隊、博士級 2 名、碩士專任 1 名、碩士兼任 3 名、學士兼任 1 名。',
                  }),
                  e.jsx('li', {
                    children:
                      '涵蓋 AI 模型、領域適應、臺灣資料整理、ETL、儀表板、MLOps 與人工檢核。',
                  }),
                  e.jsx('li', { children: '依法編列勞健保、勞退與職災保險雇主負擔。' }),
                ],
              }),
            }),
            e.jsx(i, {
              label: '算力',
              title: '租用公部門三層算力',
              tone: 'amber',
              style: { padding: '22px 28px 24px' },
              children: e.jsxs(r, {
                children: [
                  e.jsx('li', {
                    children:
                      '業務費含租金 50 萬，優先支應 NCHC、成大計網中心與實驗室既有 DGX Spark。',
                  }),
                  e.jsx('li', { children: '不另購 GPU 伺服器，避免結案後設備閒置。' }),
                  e.jsx('li', { children: '全程不採商業私有雲，不使用對外商業 LLM API。' }),
                ],
              }),
            }),
            e.jsx(i, {
              label: '控管',
              title: '費用對應驗收節點',
              tone: 'red',
              style: { padding: '22px 28px 24px' },
              children: e.jsxs(r, {
                children: [
                  e.jsx('li', { children: '設備費僅列行動辦公裝置，結案後依規定登錄為計畫財產。' }),
                  e.jsx('li', { children: '啟動後 1 個月內訂 GPU 使用上限與每週使用報表。' }),
                  e.jsx('li', {
                    children: '付款為簽約後 30%；期末報告、MVP demo 與驗收合格後 70%。',
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    }),
  $t = () =>
    e.jsxs(n, {
      title: '結語：從事件反應走向風險預警',
      subtitle: 'Three commitments grounded in the proposal',
      source: '服務建議書摘要、第三章、第五章；需求說明書 pp.2-4',
      children: [
        e.jsxs(a, {
          children: [
            e.jsx(i, {
              title: '監管級 AI',
              tone: 'red',
              children: '可審計、可解釋、可校準、可在署內落地。',
            }),
            e.jsx(i, {
              title: '零條件 MVP',
              tone: 'teal',
              children: '沒有新增跨部會資料，也以 DSMS 公開資料交付可操作儀表板與國內事件回溯。',
            }),
            e.jsx(i, {
              title: '政策證據',
              tone: 'amber',
              children: '用回溯驗證與資料能力階梯，量化未來資料釋出的應用價值。',
            }),
          ],
        }),
        e.jsx('div', {
          style: {
            marginTop: 42,
            fontFamily: 'var(--osd-font-display)',
            fontSize: 44,
            lineHeight: 1.25,
            color: t.ink,
          },
          children: '目標不是多做一個模型，而是建立食藥署可持續擴充的藥品供應預警能力。',
        }),
      ],
    }),
  g =
    ({ title: s, subtitle: l, asset: c, source: h, appendix: d = !0 }) =>
    () => {
      const f = M(c);
      return e.jsx(n, {
        appendix: d,
        title: s,
        subtitle: l,
        source: h,
        children: e.jsx('div', {
          style: {
            height: 610,
            flexShrink: 0,
            display: 'grid',
            placeItems: 'center',
            padding: '8px 0 18px',
          },
          children: e.jsx('div', {
            style: {
              width: '100%',
              height: '100%',
              border: `1px solid ${t.line}`,
              borderRadius: 12,
              background: t.white,
              display: 'grid',
              placeItems: 'center',
              overflow: 'hidden',
              boxShadow: '0 18px 40px rgba(27,32,48,.08)',
            },
            children: e.jsx('svg', {
              viewBox: '0 0 1600 610',
              width: '100%',
              height: '100%',
              role: 'img',
              'aria-label': s,
              children: e.jsx('image', {
                href: f,
                x: '0',
                y: '0',
                width: '1600',
                height: '610',
                preserveAspectRatio: 'xMidYMid meet',
              }),
            }),
          }),
        }),
      });
    },
  Vt = g({
    title: '工作項目二｜三層式 AI 預警架構',
    subtitle: '完整原圖：資料層 → AI模型層 → 應用層',
    asset: 'figures/image1.png',
    source: '服務建議書 Word 圖片萃取：image1.png',
  }),
  qt = () =>
    e.jsx(n, {
      title: '工作項目二｜模組協作流程',
      subtitle: '從資料匯集到監管行動：九步驟閉環',
      source: '服務建議書 Word 圖片萃取：image3.png；服務建議書 第參章第二節',
      children: e.jsxs('div', {
        style: { display: 'grid', gridTemplateColumns: '1.22fr .78fr', gap: 28 },
        children: [
          e.jsx(j, {
            asset: 'figures/image3.png',
            caption: '服務建議書原圖：資料匯集、HGNN、TFT、集成異常、XAI 與監管行動閉環。',
            height: 560,
          }),
          e.jsxs(i, {
            title: '流程邏輯與交付結果',
            tone: 'teal',
            style: { minHeight: 560 },
            children: [
              e.jsxs(o, {
                children: [
                  e.jsx('li', {
                    children: '輸入：每日匯入多源資料，先完成欄位整理與事件標籤對齊。',
                  }),
                  e.jsx('li', {
                    children: '方法：HGNN 更新供應鏈風險群，TFT 預測 30/60/90 日需求與庫存區間。',
                  }),
                  e.jsx('li', {
                    children:
                      '偵測：集成異常模組把突增、突降、漂移、季節偏離與結構斷裂轉成風險分級。',
                  }),
                  e.jsx('li', {
                    children: '解釋：XAI 產出圖譜路徑與 SHAP 線索，讓監管人員知道為何預警。',
                  }),
                  e.jsx('li', { children: '閉環：監管行動結果回饋為再訓練標籤，持續改善模型。' }),
                ],
              }),
              e.jsx(x, {
                children:
                  '對抗式檢查：這頁要回答「模型輸出後誰用、怎麼回饋」；因此重點不是單一模型，而是可稽核的監管閉環。',
              }),
            ],
          }),
        ],
      }),
    }),
  Gt = g({
    title: '工作項目二附錄｜模組協作流程完整原圖',
    subtitle: '完整原圖：資料匯集、HGNN、TFT、集成異常、XAI 與監管行動閉環',
    asset: 'figures/image3.png',
    source: '服務建議書 Word 圖片萃取：image3.png',
  }),
  Ut = g({
    title: '工作項目三｜知識圖譜節點示意',
    subtitle: '完整原圖：藥品、成分、供應鏈、替代藥與風險節點',
    asset: 'figures/image5.png',
    source: '服務建議書 Word 圖片萃取：image5.png',
  }),
  Xt = g({
    title: '工作項目四｜集成異常偵測流程',
    subtitle: '完整原圖：多偵測器整合與二級預警分流',
    asset: 'figures/image7.png',
    source: '服務建議書 Word 圖片萃取：image7.png',
  }),
  Ot = g({
    title: '工作項目五｜Walk-forward 回溯驗證',
    subtitle: '完整原圖：時間序列訓練、驗證與滾動評估',
    asset: 'figures/image9.png',
    source: '服務建議書 Word 圖片萃取：image9.png',
  }),
  Kt = () =>
    e.jsx(n, {
      title: '工作項目四｜openFDA 異常偵測時序',
      subtitle: '先用公開資料展示訊號可被抓到，再轉入 DSMS 回溯驗證',
      source: '服務建議書 Word 圖片萃取：image11.png；服務建議書 第參章第七節',
      children: e.jsxs('div', {
        style: { display: 'grid', gridTemplateColumns: '1.2fr .8fr', gap: 28 },
        children: [
          e.jsx(j, {
            asset: 'figures/image11.png',
            caption:
              'PoC 以 openFDA enforcement 月資料建立異常偵測展示，標示歷史異常月份與模型提示訊號。',
            height: 560,
          }),
          e.jsxs(i, {
            title: '方法、條件與解讀方式',
            tone: 'red',
            style: { minHeight: 560 },
            children: [
              e.jsxs(o, {
                children: [
                  e.jsx('li', {
                    children:
                      '輸入資料：openFDA enforcement 公開資料，按月彙整召回與品質事件訊號。',
                  }),
                  e.jsx('li', {
                    children:
                      '方法：Isolation Forest、Spectral Residual 與 CUSUM/PELT 交叉檢查突升、突降與漂移。',
                  }),
                  e.jsx('li', {
                    children: '結果：模型將高峰月份標記為候選異常，供人工確認是否對應真實事件。',
                  }),
                  e.jsx('li', {
                    children:
                      '限制：公開資料只證明方法可行；正式履約需以 DSMS 近一年資料完成國內回溯。',
                  }),
                ],
              }),
              e.jsx(x, {
                tone: 'red',
                children:
                  '文獻依據：Isolation Forest 用於少標籤異常偵測；Spectral Residual 可凸顯時序突變；CUSUM/PELT 用於變點偵測。本案將三類方法合併，避免單一演算法誤判。',
              }),
            ],
          }),
        ],
      }),
    }),
  Yt = g({
    title: '工作項目四附錄｜openFDA 異常偵測時序完整原圖',
    subtitle: '完整原圖：公開資料情境下的異常訊號展示',
    asset: 'figures/image11.png',
    source: '服務建議書 Word 圖片萃取：image11.png',
  }),
  Zt = g({
    title: '工作項目四｜異常偵測儀表板 PoC',
    subtitle: '完整原圖：預警訊號、異常分流與儀表板呈現',
    asset: 'figures/image13.png',
    source: '服務建議書 Word 圖片萃取：image13.png',
  }),
  Qt = g({
    title: '工作項目五｜預測模型 MASE 比較',
    subtitle: '完整原圖：模型預測誤差與基準方法比較',
    asset: 'figures/image15.png',
    source: '服務建議書 Word 圖片萃取：image15.png',
  }),
  Jt = g({
    title: '工作項目五｜Holdout 24 個月預測',
    subtitle: '完整原圖：保留期間預測表現與時間序列外推',
    asset: 'figures/image17.png',
    source: '服務建議書 Word 圖片萃取：image17.png',
  }),
  ei = () =>
    e.jsx(n, {
      title: '工作項目三｜知識圖譜 PoC',
      subtitle: '已完成結果：供應鏈關聯與風險節點展示',
      source: '服務建議書 Word 圖片萃取：image19.png；服務建議書 第參章、表1',
      children: e.jsxs('div', {
        style: { display: 'grid', gridTemplateColumns: '1.25fr .75fr', gap: 28 },
        children: [
          e.jsx(j, {
            asset: 'figures/image19.png',
            caption: 'PoC 實測：以 openFDA 召回紀錄建立可疑製造商、藥品與事件關聯。',
            height: 560,
          }),
          e.jsxs(i, {
            title: '輸入資料、方法與結果',
            tone: 'teal',
            style: { minHeight: 560 },
            children: [
              e.jsxs(o, {
                children: [
                  e.jsx('li', {
                    children:
                      '輸入資料：openFDA enforcement 公開召回資料，作為投標前 PoC 測試資料。',
                  }),
                  e.jsx('li', {
                    children:
                      '圖譜條件：連結製造商、藥品品項、召回事件與批號資訊，先呈現可追溯關聯。',
                  }),
                  e.jsx('li', {
                    children:
                      '方法：以節點與邊描述供應鏈關係，搭配中心性與群聚分析找出高關聯節點。',
                  }),
                  e.jsx('li', {
                    children:
                      '結果：可視化疑似高風險製造商與事件聚集，支援後續監管分流與查核排序。',
                  }),
                  e.jsx('li', {
                    children:
                      '驗證限制：目前是公開資料 PoC；國內 DSMS 資料匯入後再做臺灣端回溯驗證。',
                  }),
                ],
              }),
              e.jsx(x, {
                children:
                  '結果解讀：這張圖不是單純展示模型，而是證明資料可被轉成「可追問的風險網絡」； 後續以 DSMS 事件與必要藥品清單補足國內欄位，再檢查是否能提前定位重複或集中風險。',
              }),
            ],
          }),
        ],
      }),
    }),
  ti = () =>
    e.jsx(n, {
      title: '工作項目二｜TFT 與共形預測',
      subtitle: '30/60/90 日預測不只給點估計，也給委員可檢核的不確定性區間',
      source: '服務建議書 Word 圖片萃取：image21.png；服務建議書 第參章第二節',
      children: e.jsxs('div', {
        style: { display: 'grid', gridTemplateColumns: '1.16fr .84fr', gap: 28 },
        children: [
          e.jsx(j, {
            asset: 'figures/image21.png',
            caption: 'TFT 產生多視野預測；共形預測校準區間，讓預警輸出可呈現信心範圍。',
            height: 560,
          }),
          e.jsxs(i, {
            title: '輸入、方法、結果',
            tone: 'teal',
            style: { minHeight: 560 },
            children: [
              e.jsxs(o, {
                children: [
                  e.jsx('li', {
                    children:
                      '輸入資料：投標前 PoC 使用 openFDA／FAERS 類公開月資料與需求代理序列。',
                  }),
                  e.jsx('li', {
                    children:
                      '方法：Temporal Fusion Transformer 做 30/60/90 日多視野預測，處理趨勢與外生變項。',
                  }),
                  e.jsx('li', {
                    children: '校準：共形預測把模型殘差轉成 90% 預測區間，避免只報單一數字。',
                  }),
                  e.jsx('li', {
                    children:
                      '驗證：以保留月份檢查 MASE 與區間覆蓋率，後續用 DSMS 回溯確認臺灣可用性。',
                  }),
                ],
              }),
              e.jsx(x, {
                children:
                  '文獻依據：TFT 適合多步時序預測與可解釋 attention；conformal prediction 提供分布假設較少的預測區間校準。',
              }),
            ],
          }),
        ],
      }),
    }),
  ii = g({
    title: '工作項目二附錄｜TFT 與共形預測完整原圖',
    subtitle: '完整原圖：30/60/90 日預測與不確定性區間',
    asset: 'figures/image21.png',
    source: '服務建議書 Word 圖片萃取：image21.png',
  }),
  si = () =>
    e.jsx(n, {
      title: '工作項目六｜LLM 文本結構化比較',
      subtitle: '把事件文字轉成可查詢欄位，支援 MVP 的原因分類與追蹤',
      source: '服務建議書 Word 圖片萃取：image23.png；服務建議書 第參章第八節',
      children: e.jsxs('div', {
        style: { display: 'grid', gridTemplateColumns: '1.12fr .88fr', gap: 28 },
        children: [
          e.jsx(j, {
            asset: 'figures/image23.png',
            caption: '模型比較聚焦藥品事件文字的結構化欄位抽取與分類準確率。',
            height: 560,
          }),
          e.jsxs(i, {
            title: '方法與已完成證據',
            tone: 'amber',
            style: { minHeight: 560 },
            children: [
              e.jsxs(o, {
                children: [
                  e.jsx('li', {
                    children: '輸入資料：公開藥品事件文字、召回敘述與品質事件描述，先做 PoC 評估。',
                  }),
                  e.jsx('li', {
                    children:
                      '方法：LLM 將自由文字轉為成因、影響、供應鏈節點與可能行動等結構化欄位。',
                  }),
                  e.jsx('li', {
                    children:
                      '結果：比較 Llama-3.1-8B 與 Gemma-2-9B，已取得成因分類準確率作為投標證據。',
                  }),
                  e.jsx('li', {
                    children:
                      '後續：正式資料不外流；以署內可用環境執行，輸出需經人工複核後進入儀表板。',
                  }),
                ],
              }),
              e.jsx(x, {
                tone: 'amber',
                children:
                  '文獻依據：LLM 可用於資訊抽取與弱結構資料標準化；本案不讓模型自行決策，而是產生可稽核欄位與說明。',
              }),
            ],
          }),
        ],
      }),
    }),
  li = g({
    title: '工作項目六附錄｜LLM 文本結構化比較完整原圖',
    subtitle: '完整原圖：藥品事件文本結構化與模型比較',
    asset: 'figures/image23.png',
    source: '服務建議書 Word 圖片萃取：image23.png',
  }),
  ni = () =>
    e.jsx(n, {
      title: '工作項目六｜Agentic AI／LLM 架構',
      subtitle: 'AI 只做資料整理與草案建議，決策仍保留在人與制度流程內',
      source: '服務建議書 Word 圖片萃取：image25.png；服務建議書 第參章第八節',
      children: e.jsxs('div', {
        style: { display: 'grid', gridTemplateColumns: '1.15fr .85fr', gap: 28 },
        children: [
          e.jsx(j, {
            asset: 'figures/image25.png',
            caption:
              'Agentic AI 架構示意：查詢、彙整、生成摘要與回寫任務分層，不直接取代承辦決策。',
            height: 560,
          }),
          e.jsxs(i, {
            title: '治理邏輯與邊界',
            tone: 'teal',
            style: { minHeight: 560 },
            children: [
              e.jsxs(o, {
                children: [
                  e.jsx('li', {
                    children: '資料邊界：署內資料不送外部 API；模型與程式碼依需求書歸屬食藥署。',
                  }),
                  e.jsx('li', {
                    children: '工具調用：只能查詢允許資料源、產生摘要、列出證據與建議追蹤事項。',
                  }),
                  e.jsx('li', {
                    children: '風險控制：每次輸出保留來源、時間戳與使用資料版本，避免無來源回答。',
                  }),
                  e.jsx('li', {
                    children:
                      '交付定位：本頁支撐 MVP 儀表板與導入白皮書，不是無人監管的自動處分系統。',
                  }),
                ],
              }),
              e.jsx(x, {
                children:
                  '方法依據：retrieval-augmented generation 與 tool-use agent 可降低幻覺風險；本案以權限、日誌與人工覆核作為治理層。',
              }),
            ],
          }),
        ],
      }),
    }),
  ri = g({
    title: '工作項目六附錄｜Agentic AI／LLM 架構完整原圖',
    subtitle: '完整原圖：工具調用、資料查詢與決策支援流程',
    asset: 'figures/image25.png',
    source: '服務建議書 Word 圖片萃取：image25.png',
  }),
  di = () =>
    e.jsx(n, {
      title: '工作項目六｜LLM 比較曲線',
      subtitle: '用公開資料先證明可分辨事件成因，正式履約再以署內資料重測',
      source: '服務建議書 Word 圖片萃取：image27.png；服務建議書 第參章第八節',
      children: e.jsxs('div', {
        style: { display: 'grid', gridTemplateColumns: '1.12fr .88fr', gap: 28 },
        children: [
          e.jsx(j, {
            asset: 'figures/image27.png',
            caption: 'LLM 分類比較曲線用於展示不同模型在事件文字任務上的穩定性與表現差異。',
            height: 560,
          }),
          e.jsxs(i, {
            title: '結果怎麼解讀',
            tone: 'red',
            style: { minHeight: 560 },
            children: [
              e.jsxs(o, {
                children: [
                  e.jsx('li', {
                    children:
                      '任務：將藥品事件文字分類為成因類別，作為供應鏈風險儀表板的可查詢欄位。',
                  }),
                  e.jsx('li', {
                    children: '條件：投標前以公開資料測試，正式案不宣稱可直接代表 DSMS 最終表現。',
                  }),
                  e.jsx('li', {
                    children: '成果：Llama-3.1-8B、Gemma-2-9B 已完成比較，作為模型選型與基準線。',
                  }),
                  e.jsx('li', {
                    children:
                      '交付：履約期將重跑資料切分、人工複核與錯誤分析，誠實呈現可得資料下的效能。',
                  }),
                ],
              }),
              e.jsx(x, {
                tone: 'red',
                children:
                  '結果頁必須和限制一起說明：公開資料 PoC 證明方法雛形，國內回溯驗證才是需求書要求的正式交付。',
              }),
            ],
          }),
        ],
      }),
    }),
  oi = g({
    title: '工作項目六附錄｜LLM 比較曲線完整原圖',
    subtitle: '完整原圖：文本分類／結構化任務的模型表現比較',
    asset: 'figures/image27.png',
    source: '服務建議書 Word 圖片萃取：image27.png',
  }),
  ai = () =>
    e.jsxs(n, {
      title: '工作項目一｜國際標竿比較摘要',
      subtitle: '主文讀結論：各國共同趨勢是平台化、資料整合與風險預警',
      source: '服務建議書 Word 表格萃取：table_05.png；服務建議書國際研析章節',
      children: [
        e.jsxs(a, {
          children: [
            e.jsx(i, {
              title: 'WHO / 全球機制',
              tone: 'red',
              children: e.jsxs(r, {
                children: [
                  e.jsx('li', { children: '以 GSMS 蒐集國際藥品供應與短缺訊號。' }),
                  e.jsx('li', { children: '重點在跨國通報與趨勢彙整，AI 應用尚未完整公開。' }),
                  e.jsx('li', { children: '對本案啟示：需要把通報資料標準化，才能做後續預警。' }),
                ],
              }),
            }),
            e.jsx(i, {
              title: '美國 FDA',
              tone: 'teal',
              children: e.jsxs(r, {
                children: [
                  e.jsx('li', {
                    children: 'Drug Shortages、openFDA、CMS Part D 可作為公開驗證資料源。',
                  }),
                  e.jsx('li', { children: 'CDER AI Council 與資料平台提供 AI 治理參考。' }),
                  e.jsx('li', {
                    children: '對本案啟示：先用公開資料壓力測試模型，再轉入臺灣資料。',
                  }),
                ],
              }),
            }),
            e.jsx(i, {
              title: '歐盟 EMA / 日本',
              tone: 'amber',
              children: e.jsxs(r, {
                children: [
                  e.jsx('li', { children: 'EMA ESMP 平台化管理短缺與脆弱性評估。' }),
                  e.jsx('li', { children: '日本以品質、製造事件與供應鏈盤點作為治理脈絡。' }),
                  e.jsx('li', {
                    children: '對本案啟示：預警不是單一模型，而是平台、資料與治理流程。',
                  }),
                ],
              }),
            }),
          ],
        }),
        e.jsx('div', {
          style: { marginTop: 28 },
          children: e.jsx(i, {
            title: '臺灣 TFDA 的切入點',
            tone: 'teal',
            children: e.jsxs(r, {
              children: [
                e.jsx('li', {
                  children:
                    '既有 DSMS、必要藥品清單與藥事治理基礎，可先建立可審計的 DSMS-only MVP。',
                }),
                e.jsx('li', {
                  children:
                    '缺口在預測、知識圖譜、多源資料整合與自動異常偵測；這正是後續工作項目二到五的主線。',
                }),
              ],
            }),
          }),
        }),
      ],
    }),
  ci = g({
    title: '工作項目一附錄｜國際藥品短缺監測機制比較完整表',
    subtitle: '完整表格：WHO、美國 FDA、歐盟 EMA、日本 MHLW／PMDA 與我國 TFDA',
    asset: 'tables/table_05.png',
    source: '服務建議書 Word 表格萃取：table_05.png',
  }),
  hi = [
    g({
      title: 'F17｜團隊能力雷達圖',
      subtitle: 'Extracted figure from proposal document',
      asset: 'figures/image33.png',
      source: '服務建議書 Word 圖片萃取：image33.png',
    }),
    g({
      title: 'F18｜監管級 AI 治理架構',
      subtitle: 'Extracted figure from proposal document',
      asset: 'figures/image35.png',
      source: '服務建議書 Word 圖片萃取：image35.png',
    }),
  ],
  xi = [
    '工作項目、方法、交付物與驗收指標',
    '評選構面與本案對應重點',
    'FDA AI 治理里程碑',
    '既有研究強項與本案補強缺口',
    '國際藥品短缺監測機制比較',
    '本案 KPI 總表',
    '資料來源、型態、更新頻率與用途',
    '美國公開資料源與採用方法',
    '跨部會資料釋出與能力解鎖矩陣',
    '異常型態、監管意義與偵測器',
    '回溯驗證指標定義',
    '承諾目標與國際對標',
    '風險限制與控管措施',
    '七個月工作甘特圖',
    '里程碑、時點與交付物',
    '交付物對應工作項目與驗收',
    '要徑風險與緩解措施',
    'MDIC 資格與公開來源',
    '商業雲與三層公部門算力比較',
    '主持團隊角色與分工',
    '代表研究與領域專業',
    '研究人力員額與分工',
    '人力投入月別配置',
    '主持人同期計畫與投入',
    '林哲偉教授相關計畫',
    '鄭靜蘭教授 TFDA／ATC 相關計畫',
    '團隊歷年相關案與本計畫比較',
    '經費科目總表',
    '人事費子項估算',
    '業務費科目明細',
    'CSR 指標承諾',
    '需求說明書工作項目對照',
    '資料階段與解鎖能力',
    '附錄 D 小節索引',
    '知識圖譜節點類型與屬性',
    '知識圖譜關聯邊與監管意義',
    '跨部會資料類別與預期效益',
    '主持人專利清單',
    '主持人履歷摘要表',
    '主持人學經歷說明書',
    '共同主持人學經歷說明書',
  ],
  gi = xi
    .map((s, l) => ({ tableTitle: s, tableNumber: l + 1 }))
    .filter(({ tableNumber: s }) => s !== 3 && s !== 5 && ![14, 15, 16].includes(s))
    .map(({ tableTitle: s, tableNumber: l }) =>
      g({
        title: `T${String(l).padStart(2, '0')}｜${s}`,
        subtitle: 'Extracted table from proposal document',
        asset: `tables/table_${String(l).padStart(2, '0')}.png`,
        source: `服務建議書 Word 表格萃取：table_${String(l).padStart(2, '0')}.png`,
      }),
    ),
  mi = { title: 'TFDA AI Drug Supply Monitoring', createdAt: '2026-06-25T22:14:24.255Z' },
  _i = [
    it,
    st,
    lt,
    nt,
    rt,
    ai,
    dt,
    mt,
    _t,
    qt,
    yt,
    ti,
    St,
    ot,
    ft,
    ei,
    at,
    vt,
    Tt,
    Ct,
    Kt,
    ct,
    Dt,
    ht,
    Mt,
    At,
    Et,
    si,
    ni,
    di,
    It,
    kt,
    Pt,
    xt,
    Bt,
    gt,
    pt,
    Rt,
    Nt,
    zt,
    bt,
    Ft,
    $t,
    jt,
    Vt,
    ci,
    ut,
    Gt,
    ii,
    Ut,
    Xt,
    Ot,
    Yt,
    Zt,
    Qt,
    Jt,
    li,
    ri,
    oi,
    Wt,
    wt,
    Lt,
    Ht,
    ...hi,
    ...gi,
  ];

export { _i as default, bi as design, mi as meta };
