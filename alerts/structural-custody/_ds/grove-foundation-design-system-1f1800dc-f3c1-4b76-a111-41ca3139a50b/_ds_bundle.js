/* @ds-bundle: {"format":3,"namespace":"GroveFoundationDesignSystem_1f1800","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"StandingsTable","sourcePath":"components/data/StandingsTable.jsx"},{"name":"StatBlock","sourcePath":"components/data/StatBlock.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"NewsletterOptIn","sourcePath":"components/forms/NewsletterOptIn.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"b9e3638280ff","components/core/Button.jsx":"e7ddea8f7bae","components/core/Card.jsx":"e5f9a34f706a","components/core/Divider.jsx":"2f16f4802b07","components/core/Eyebrow.jsx":"3c2078d7cae0","components/data/StandingsTable.jsx":"c8c6b13c8d26","components/data/StatBlock.jsx":"7dd104a1d2c6","components/forms/Input.jsx":"114c0799526f","components/forms/NewsletterOptIn.jsx":"c71af860d76e","ui_kits/grove-site/AboutScreen.jsx":"65fd497cb087","ui_kits/grove-site/Footer.jsx":"108abdb20292","ui_kits/grove-site/HomeScreen.jsx":"a200dc43ee2b","ui_kits/grove-site/LambdaScreen.jsx":"5b01e20b7190","ui_kits/grove-site/Nav.jsx":"f69eaff18a7c","ui_kits/grove-site/RatchetScreen.jsx":"9e1e418885ec","ui_kits/grove-site/StandardsScreen.jsx":"822868ec3101"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.GroveFoundationDesignSystem_1f1800 = window.GroveFoundationDesignSystem_1f1800 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Grove Badge — the small mono tier/status chip used in Λ standings and
 * tables (e.g. "Approaching Critical", "Structurally Inert"). Low-alpha
 * tinted fill + 1px tinted border + matching text, all in one status hue.
 */
function Badge({
  children,
  tone = 'amber',
  style = {},
  ...rest
}) {
  const tones = {
    amber: {
      c: '#D4621A',
      a: 'rgba(212,98,26,0.10)',
      b: 'rgba(212,98,26,0.30)'
    },
    green: {
      c: '#4CAF72',
      a: 'rgba(76,175,114,0.10)',
      b: 'rgba(76,175,114,0.25)'
    },
    red: {
      c: '#C0392B',
      a: 'rgba(192,57,43,0.08)',
      b: 'rgba(192,57,43,0.25)'
    },
    yellow: {
      c: '#D4A017',
      a: 'rgba(212,160,23,0.10)',
      b: 'rgba(212,160,23,0.30)'
    },
    neutral: {
      c: 'var(--text-dim)',
      a: 'transparent',
      b: 'var(--border)'
    }
  };
  const t = tones[tone] || tones.amber;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      fontFamily: 'var(--mono)',
      fontSize: '9px',
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      padding: '4px 10px',
      display: 'inline-block',
      whiteSpace: 'nowrap',
      color: t.c,
      background: t.a,
      border: `1px solid ${t.b}`,
      borderRadius: 0,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Grove Button — mono, uppercase, wide-tracked, square-cut.
 * Outline variants are the Grove default; `solid` is the amber
 * subscribe button. No radius, no scale-on-press — interaction is
 * color/border + an optional amber glow.
 */
function Button({
  children,
  variant = 'primary',
  // 'primary' | 'solid' | 'ghost'
  size = 'md',
  // 'sm' | 'md'
  as = 'button',
  disabled = false,
  glow = false,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '10px 20px',
      fontSize: '10px',
      letterSpacing: '0.12em'
    },
    md: {
      padding: '14px 32px',
      fontSize: '12px',
      letterSpacing: '0.12em'
    }
  };
  const base = {
    fontFamily: "var(--mono)",
    textTransform: 'uppercase',
    border: '1px solid',
    borderRadius: 0,
    background: 'transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.4 : 1,
    textDecoration: 'none',
    display: 'inline-block',
    lineHeight: 1.4,
    transition: 'background var(--dur-fast,0.2s), border-color var(--dur-fast,0.2s), color var(--dur-fast,0.2s), box-shadow var(--dur-fast,0.2s)',
    ...sizes[size]
  };
  const variants = {
    primary: {
      color: 'var(--amber)',
      borderColor: 'var(--amber)'
    },
    solid: {
      color: 'var(--bg)',
      background: 'var(--amber)',
      borderColor: 'var(--amber)'
    },
    ghost: {
      color: 'var(--text-dim)',
      borderColor: 'var(--border)'
    }
  };
  const hoverFor = {
    primary: {
      background: 'var(--amber-glow)',
      ...(glow ? {
        boxShadow: '0 0 30px rgba(212,98,26,0.15)'
      } : {})
    },
    solid: {
      background: 'var(--amber-bright)',
      borderColor: 'var(--amber-bright)'
    },
    ghost: {
      background: 'rgba(232,224,216,0.02)',
      borderColor: 'var(--border-hover)',
      color: 'var(--text-mid)'
    }
  };
  const onEnter = e => {
    if (!disabled) Object.assign(e.currentTarget.style, hoverFor[variant]);
  };
  const onLeave = e => {
    if (disabled) return;
    const v = variants[variant];
    e.currentTarget.style.background = v.background || 'transparent';
    e.currentTarget.style.borderColor = v.borderColor;
    e.currentTarget.style.color = v.color;
    e.currentTarget.style.boxShadow = 'none';
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      ...base,
      ...variants[variant],
      ...style
    },
    onMouseEnter: onEnter,
    onMouseLeave: onLeave,
    disabled: Tag === 'button' ? disabled : undefined
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Grove Card — the hairline-bordered surface used across the site
 * (explore grid, standards portfolio). 1px border, --bg2 fill, 4px radius,
 * NO shadow. On hover the border warms to amber-dim and the fill lifts to
 * --bg3. Serif italic title + mono caption is the canonical head.
 */
function Card({
  eyebrow,
  title,
  children,
  meta,
  href,
  interactive = true,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const isLink = Boolean(href);
  const Tag = isLink ? 'a' : 'div';
  const active = interactive && hover;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'block',
      textDecoration: 'none',
      border: '1px solid',
      borderColor: active ? 'var(--amber-dim)' : 'var(--border)',
      borderRadius: '4px',
      background: active ? 'var(--bg3)' : 'var(--bg2)',
      padding: '28px 24px',
      transition: 'border-color var(--dur-mid,0.25s), background var(--dur-mid,0.25s)',
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--mono)',
      fontSize: '10px',
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--amber)',
      marginBottom: '12px'
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--serif)',
      fontSize: '20px',
      fontStyle: 'italic',
      color: 'var(--text)',
      marginBottom: '10px',
      lineHeight: 1.2
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--mono)',
      fontSize: '12px',
      lineHeight: 1.6,
      color: 'var(--text-dim)',
      fontStyle: 'normal'
    }
  }, children), meta && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--mono)',
      fontSize: '10px',
      letterSpacing: '0.08em',
      color: 'var(--text-dim)',
      marginTop: '16px'
    }
  }, meta));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Grove Divider — the signature 48px × 1px amber rule that marks beats
 * between paragraphs and sections. Set `full` for a full-width hairline
 * section separator instead (neutral --border).
 */
function Divider({
  full = false,
  style = {},
  ...rest
}) {
  if (full) {
    return /*#__PURE__*/React.createElement("hr", _extends({
      style: {
        border: 'none',
        borderTop: '1px solid var(--border)',
        width: '100%',
        margin: '0',
        ...style
      }
    }, rest));
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: '48px',
      height: '1px',
      background: 'var(--amber)',
      margin: '32px 0',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Grove Eyebrow — the mono, uppercase, wide-tracked kicker that sits
 * above nearly every headline. Amber by default; pass `tone="dim"` for
 * the muted micro-label variant.
 */
function Eyebrow({
  children,
  tone = 'amber',
  style = {},
  ...rest
}) {
  const tones = {
    amber: {
      color: 'var(--amber)'
    },
    dim: {
      color: 'var(--amber-dim)'
    },
    mid: {
      color: 'var(--text-dim)'
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: 'var(--mono)',
      fontSize: '11px',
      letterSpacing: '0.25em',
      textTransform: 'uppercase',
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/data/StandingsTable.jsx
try { (() => {
/**
 * Grove StandingsTable — the Λ Watch scoreboard. A square, hairline table
 * scoring named patterns: rank, name + category, Λ score, tier badge, trend.
 * Rows hover to --bg3. Trend arrows are colored by the status palette.
 */
const TIER_TONE = {
  'Critical Mass': 'green',
  'Approaching Critical': 'amber',
  'Sub-Critical': 'yellow',
  'Structurally Inert': 'red'
};
const TREND = {
  up: {
    glyph: '↑',
    color: 'var(--green)'
  },
  flat: {
    glyph: '→',
    color: 'var(--text-dim)'
  },
  down: {
    glyph: '↓',
    color: 'var(--red)'
  }
};
function StandingsTable({
  rows = [],
  style = {}
}) {
  const [hoverRow, setHoverRow] = React.useState(-1);
  const cols = '36px 2fr 1fr 1.4fr 48px';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--border)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: cols,
      padding: '10px 20px',
      borderBottom: '1px solid var(--border)',
      fontFamily: 'var(--mono)',
      fontSize: '9px',
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      color: 'var(--amber)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, "#"), /*#__PURE__*/React.createElement("div", null, "Pattern"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, "\u039B"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, "Tier"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, "Trend")), rows.map((r, i) => {
    const trend = TREND[r.trend] || TREND.flat;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      onMouseEnter: () => setHoverRow(i),
      onMouseLeave: () => setHoverRow(-1),
      style: {
        display: 'grid',
        gridTemplateColumns: cols,
        padding: '0 20px',
        alignItems: 'center',
        minHeight: '56px',
        borderBottom: i === rows.length - 1 ? 'none' : '1px solid rgba(37,37,37,0.6)',
        background: hoverRow === i ? 'var(--bg3)' : 'transparent',
        cursor: 'pointer',
        transition: 'background var(--dur-fast,0.15s)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--mono)',
        fontSize: '13px',
        color: 'var(--text-dim)',
        textAlign: 'center'
      }
    }, r.rank ?? i + 1), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--serif)',
        fontSize: '16px',
        color: 'var(--text)'
      }
    }, r.name), r.category && /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--mono)',
        fontSize: '8px',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: 'var(--text-dim)',
        marginTop: '1px'
      }
    }, r.category)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--mono)',
        fontSize: '15px',
        fontWeight: 600,
        textAlign: 'right',
        color: r.scoreColor || 'var(--text-mid)'
      }
    }, r.score), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
      tone: TIER_TONE[r.tier] || 'neutral'
    }, r.tier)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '16px',
        textAlign: 'center',
        color: trend.color
      }
    }, trend.glyph));
  }));
}
Object.assign(__ds_scope, { StandingsTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StandingsTable.jsx", error: String((e && e.message) || e) }); }

// components/data/StatBlock.jsx
try { (() => {
/**
 * Grove StatBlock — a big serif number over a mono uppercase label, used
 * for the intro meta row, structural-share figures, and RDI scores. Pass a
 * `tone` to color the number (e.g. green/red for sovereign/concentrated).
 */
function StatBlock({
  value,
  label,
  tone,
  align = 'left',
  size = 'md',
  style = {}
}) {
  const sizes = {
    sm: '28px',
    md: '48px',
    lg: '72px'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--serif)',
      fontWeight: 400,
      fontSize: sizes[size] || sizes.md,
      lineHeight: 1,
      color: tone || 'var(--text)',
      marginBottom: '8px'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--mono)',
      fontSize: '10px',
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      color: tone || 'var(--text-dim)'
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Grove Input — square, hairline-bordered field on the page background.
 * Mono text, dim placeholder; focus warms the border to amber-dim.
 */
function Input({
  style = {},
  onFocus,
  onBlur,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("input", _extends({
    onFocus: e => {
      setFocus(true);
      onFocus && onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      onBlur && onBlur(e);
    },
    style: {
      background: 'var(--bg)',
      border: '1px solid',
      borderColor: focus ? 'var(--amber-dim)' : 'var(--border-light)',
      borderRadius: 0,
      color: 'var(--text)',
      fontFamily: 'var(--mono)',
      fontSize: '12px',
      padding: '8px 12px',
      outline: 'none',
      transition: 'border-color var(--dur-fast,0.2s)',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/NewsletterOptIn.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Grove NewsletterOptIn — the "Follow the pattern" footer opt-in: an
 * amber-dim-bordered band with a mono label, an email Input, and a solid
 * amber Subscribe button. This is the canonical Grove form pattern.
 */
function NewsletterOptIn({
  label = 'Follow the pattern',
  placeholder = 'your@email.com',
  buttonText = 'Subscribe',
  action,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      border: '1px solid var(--amber-dim)',
      padding: '24px 28px',
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
      flexWrap: 'wrap',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--mono)',
      fontSize: '11px',
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      color: 'var(--amber)',
      whiteSpace: 'nowrap'
    }
  }, label), /*#__PURE__*/React.createElement("form", {
    action: action,
    method: "POST",
    style: {
      display: 'flex',
      gap: '8px',
      flex: 1,
      minWidth: '240px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    type: "email",
    name: "email",
    placeholder: placeholder,
    required: true,
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: hover ? 'var(--amber-bright)' : 'var(--amber)',
      color: 'var(--bg)',
      fontFamily: 'var(--mono)',
      fontSize: '10px',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      border: 'none',
      borderRadius: 0,
      padding: '8px 20px',
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      transition: 'background var(--dur-fast,0.2s)'
    }
  }, buttonText)));
}
Object.assign(__ds_scope, { NewsletterOptIn });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/NewsletterOptIn.jsx", error: String((e && e.message) || e) }); }

// ui_kits/grove-site/AboutScreen.jsx
try { (() => {
// Grove About — compact institutional page. Exposes window.AboutScreen.
function AboutScreen() {
  const {
    Eyebrow,
    Divider
  } = window.GroveFoundationDesignSystem_1f1800;
  const acts = [{
    act: 'Act I',
    title: 'The Autonomaton',
    desc: 'Individual cognitive sovereignty. A governance architecture for AI workflows. Five-stage pipeline, zone model, skill flywheel.',
    status: 'GRV-001 Published',
    live: true
  }, {
    act: 'Act II',
    title: 'The Trellis',
    desc: 'Domain-scale knowledge architecture. Declarative exploration where experts compose workflows through configuration, not code.',
    status: 'In development'
  }, {
    act: 'Act III',
    title: 'The Knowledge Commons',
    desc: 'Distributed cognitive economy. A network protocol where sovereign nodes exchange knowledge and expertise compounds.',
    status: 'On the horizon'
  }];
  const wrap = {
    maxWidth: '760px',
    margin: '0 auto',
    padding: '100px 32px 80px'
  };
  const body = {
    fontWeight: 300,
    fontSize: '15px',
    lineHeight: 1.75,
    color: 'var(--text-mid)',
    marginBottom: '20px'
  };
  return /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "The Foundation"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--serif)',
      fontWeight: 400,
      fontSize: 'clamp(44px,5.5vw,72px)',
      lineHeight: 1.06,
      letterSpacing: '-0.02em',
      color: 'var(--text)',
      margin: '20px 0 24px'
    }
  }, "What ", /*#__PURE__*/React.createElement("em", {
    style: {
      color: 'var(--amber)',
      fontStyle: 'italic'
    }
  }, "We Are")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: 300,
      fontSize: '17px',
      lineHeight: 1.75,
      color: 'var(--text-mid)',
      maxWidth: '640px',
      marginBottom: '0'
    }
  }, "The Grove Foundation exists to protect, preserve, and enhance human flourishing in the age of artificial intelligence."), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement("p", {
    style: body
  }, "We publish open architectural standards that ensure individuals and institutions retain sovereignty over their cognitive tools. We are a standards body, not a software company \u2014 we publish the patterns, score the implementations, and fund the research. Our standards are released under ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--amber)',
      borderBottom: '1px solid var(--amber-dim)'
    }
  }, "CC BY 4.0"), " because the thesis requires it."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--serif)',
      fontStyle: 'italic',
      fontSize: 'clamp(20px,2.4vw,28px)',
      color: 'var(--text)',
      lineHeight: 1.4,
      borderLeft: '2px solid var(--amber)',
      paddingLeft: '24px',
      margin: '40px 0'
    }
  }, "The internet didn't beat mainframes by being more powerful. It beat them by being architecturally uncontrollable.")), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "The Roadmap"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--serif)',
      fontWeight: 400,
      fontSize: 'clamp(32px,4vw,48px)',
      color: 'var(--text)',
      margin: '16px 0 8px'
    }
  }, "Three ", /*#__PURE__*/React.createElement("em", {
    style: {
      color: 'var(--amber)',
      fontStyle: 'italic'
    }
  }, "Acts")), /*#__PURE__*/React.createElement("p", {
    style: body
  }, "The same architectural pattern, applied at three scales."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: '1px',
      background: 'var(--border)',
      border: '1px solid var(--border)',
      marginTop: '24px'
    }
  }, acts.map(a => /*#__PURE__*/React.createElement("div", {
    key: a.act,
    style: {
      background: 'var(--bg2)',
      padding: '32px 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--mono)',
      fontSize: '11px',
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--amber)',
      marginBottom: '12px'
    }
  }, a.act), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--serif)',
      fontSize: '22px',
      color: 'var(--text)',
      marginBottom: '10px',
      lineHeight: 1.2
    }
  }, a.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '13px',
      color: 'var(--text-mid)',
      fontWeight: 300,
      lineHeight: 1.6
    }
  }, a.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--mono)',
      fontSize: '10px',
      letterSpacing: '0.08em',
      color: a.live ? 'var(--amber)' : 'var(--text-dim)',
      marginTop: '16px'
    }
  }, a.status, a.live ? ' →' : '')))))));
}
window.AboutScreen = AboutScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/grove-site/AboutScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/grove-site/Footer.jsx
try { (() => {
// Grove site footer. Composes NewsletterOptIn. Exposes window.Footer.
function Footer() {
  const {
    NewsletterOptIn
  } = window.GroveFoundationDesignSystem_1f1800;
  const navlinks = ['Ratchet Test', 'Λ Watch', 'CIO Alerts', 'Published Standards', 'Observations', 'Membership', 'About'];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      position: 'relative',
      zIndex: 1,
      borderTop: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '760px',
      margin: '0 auto',
      padding: '48px 32px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '32px'
    }
  }, /*#__PURE__*/React.createElement(NewsletterOptIn, {
    action: "#"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--mono)',
      fontSize: '11px',
      color: 'var(--text-dim)',
      lineHeight: 2
    }
  }, "The Grove Foundation \xB7 Indianapolis", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--amber)',
      borderBottom: '1px solid var(--amber-dim)'
    }
  }, "the-grove.ai"), /*#__PURE__*/React.createElement("br", null), "CC BY 4.0 \xB7 \xA9 2026 The Grove Foundation"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '24px',
      marginTop: '20px',
      flexWrap: 'wrap'
    }
  }, navlinks.map(l => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: {
      fontFamily: 'var(--mono)',
      fontSize: '10px',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--text-dim)',
      cursor: 'pointer'
    }
  }, l))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--sans)',
      fontSize: '11px',
      color: 'var(--text-dim)',
      fontWeight: 300,
      lineHeight: 1.6,
      marginTop: '24px',
      paddingTop: '20px',
      borderTop: '1px solid var(--border)'
    }
  }, "The Grove Foundation Inc. is a not-for-profit business league within the meaning of Section 501(c)(6) of the Internal Revenue Code of 1986, as amended.")));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/grove-site/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/grove-site/HomeScreen.jsx
try { (() => {
// Grove homepage. Exposes window.HomeScreen.
function HomeScreen({
  go
}) {
  const {
    Eyebrow,
    Divider,
    Button,
    Card,
    StandingsTable
  } = window.GroveFoundationDesignSystem_1f1800;
  const rows = [{
    rank: 1,
    name: 'Mistral / DeepSeek',
    category: 'Open Weight (Int’l)',
    score: '0.0314',
    scoreColor: 'var(--amber-bright)',
    tier: 'Approaching Critical',
    trend: 'up'
  }, {
    rank: 2,
    name: 'Apple Intelligence',
    category: 'On-Device',
    score: '0.0090',
    tier: 'Sub-Critical',
    trend: 'flat'
  }, {
    rank: 3,
    name: 'Anthropic Claude',
    category: 'Centralized API',
    score: '0.0058',
    tier: 'Sub-Critical',
    trend: 'flat'
  }, {
    rank: 4,
    name: 'Meta Llama',
    category: 'Open Weight (US)',
    score: '0.0031',
    tier: 'Structurally Inert',
    trend: 'down'
  }, {
    rank: 5,
    name: 'OpenAI GPT',
    category: 'Centralized API',
    score: '0.0014',
    tier: 'Structurally Inert',
    trend: 'flat'
  }, {
    rank: 6,
    name: 'Microsoft Copilot',
    category: 'Platform Bundle',
    score: '0.0001',
    tier: 'Structurally Inert',
    trend: 'down'
  }];
  const wrap = {
    maxWidth: '760px',
    margin: '0 auto',
    padding: '80px 32px 64px'
  };
  const wide = {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '80px 32px 64px'
  };
  const body = {
    fontSize: '17px',
    color: 'var(--text-mid)',
    lineHeight: 1.85,
    fontWeight: 300,
    marginBottom: '24px',
    maxWidth: '640px'
  };
  const headline = {
    fontFamily: 'var(--serif)',
    fontWeight: 400,
    fontSize: 'clamp(28px,3.5vw,38px)',
    lineHeight: 1.2,
    color: 'var(--text)',
    marginBottom: '32px'
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      zIndex: 1,
      background: 'radial-gradient(ellipse at 20% 70%, rgba(212,98,26,0.08) 0%, transparent 55%), radial-gradient(ellipse at 80% 20%, rgba(212,98,26,0.03) 0%, transparent 40%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      paddingTop: '88px',
      paddingBottom: '80px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "The Grove Foundation"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--serif)',
      fontWeight: 400,
      fontSize: 'clamp(36px,5vw,56px)',
      lineHeight: 1.15,
      letterSpacing: '-0.02em',
      color: 'var(--text)',
      margin: '20px 0 40px'
    }
  }, "Govern the Substrate.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    style: {
      color: 'var(--amber)',
      fontStyle: 'italic'
    }
  }, "Commoditize the Compute.")), /*#__PURE__*/React.createElement("p", {
    style: body
  }, "The Grove Foundation publishes the open standards that make AI governance an architectural property \u2014 not a vendor promise."), /*#__PURE__*/React.createElement("p", {
    style: body
  }, "Apex inference is critical infrastructure receiving roughly ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text)',
      fontWeight: 500
    }
  }, "$650 billion"), " in capital commitments. The architectural layer that determines whether that investment compounds at sovereign nodes is receiving effectively no comparable attention."), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--mono)',
      fontSize: '10px',
      color: 'var(--text-dim)',
      letterSpacing: '0.1em'
    }
  }, "CC BY 4.0 \xB7 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--amber-dim)',
      borderBottom: '1px solid var(--amber-dim)'
    }
  }, "Sovereignty Is All You Need \u2192")))), /*#__PURE__*/React.createElement("section", {
    style: {
      borderTop: '1px solid var(--amber-dim)',
      borderBottom: '1px solid var(--border)',
      background: 'linear-gradient(90deg,rgba(212,98,26,0.07),rgba(212,98,26,0.02))'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1000px',
      margin: '0 auto',
      padding: '24px 32px',
      display: 'grid',
      gridTemplateColumns: 'auto 1fr auto',
      gap: '28px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--mono)',
      fontSize: '10px',
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: 'var(--amber)',
      whiteSpace: 'nowrap'
    }
  }, "New \xB7 CIO Alert 004"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--serif)',
      fontSize: '22px',
      color: 'var(--text)',
      lineHeight: 1.25,
      marginBottom: '4px'
    }
  }, /*#__PURE__*/React.createElement("em", {
    style: {
      color: 'var(--amber)',
      fontStyle: 'italic'
    }
  }, "Sovereignty"), " Is All You Need"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '13px',
      color: 'var(--text-mid)',
      fontWeight: 300,
      lineHeight: 1.5
    }
  }, "Grove's sovereignty thesis \u2014 the single architectural primitive missing from how the industry is building AI.")), /*#__PURE__*/React.createElement(Button, {
    as: "a",
    variant: "primary",
    size: "sm",
    style: {
      cursor: 'pointer'
    }
  }, "Read the Alert \u2192"))), /*#__PURE__*/React.createElement("section", {
    style: {
      borderTop: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wide
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "State of the Architecture"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...headline,
      marginTop: '16px'
    }
  }, "The ", /*#__PURE__*/React.createElement("em", {
    style: {
      color: 'var(--amber)',
      fontStyle: 'italic'
    }
  }, "Subsidy"), " Illusion."), /*#__PURE__*/React.createElement("p", {
    style: body
  }, "Every analyst framework measures how many people use an AI platform today. The Grove Foundation measures whether they'd keep using it if ", /*#__PURE__*/React.createElement("em", {
    style: {
      color: 'var(--amber-bright)',
      fontStyle: 'normal'
    }
  }, "nobody subsidized it.")), /*#__PURE__*/React.createElement(StandingsTable, {
    rows: rows
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--mono)',
      fontSize: '11px',
      color: 'var(--text-dim)',
      marginTop: '16px',
      letterSpacing: '0.04em'
    }
  }, "Click any row to see sub-scores and structural analysis."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '28px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go('lambda'),
    variant: "primary",
    size: "sm"
  }, "Explore \u039B Watch \u2192")))), /*#__PURE__*/React.createElement("section", {
    style: {
      borderTop: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--mono)',
      fontSize: '11px',
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      color: 'var(--amber)',
      marginBottom: '40px'
    }
  }, "Go deeper"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: '24px'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "The Architectural Gap",
    href: "#"
  }, "Why AI policy can't trump architectural reality. The full technical thesis."), /*#__PURE__*/React.createElement(Card, {
    title: "The Telemetry Trap",
    href: "#"
  }, "What CIOs need to know about AI vendor lock-in \u2014 now."), /*#__PURE__*/React.createElement(Card, {
    title: "Published Standards",
    onClick: () => go('standards'),
    style: {
      cursor: 'pointer'
    }
  }, "The Autonomaton Pattern and what comes next. CC BY 4.0.")))));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/grove-site/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/grove-site/LambdaScreen.jsx
try { (() => {
// Grove Λ Watch — compact standings landing. Exposes window.LambdaScreen.
function LambdaScreen() {
  const {
    Eyebrow,
    Divider,
    StandingsTable,
    StatBlock
  } = window.GroveFoundationDesignSystem_1f1800;
  const rows = [{
    rank: 1,
    name: 'Mistral / DeepSeek',
    category: 'Open Weight (Int’l)',
    score: '0.0314',
    scoreColor: 'var(--amber-bright)',
    tier: 'Approaching Critical',
    trend: 'up'
  }, {
    rank: 2,
    name: 'Apple Intelligence',
    category: 'On-Device',
    score: '0.0090',
    tier: 'Sub-Critical',
    trend: 'flat'
  }, {
    rank: 3,
    name: 'Anthropic Claude',
    category: 'Centralized API',
    score: '0.0058',
    tier: 'Sub-Critical',
    trend: 'flat'
  }, {
    rank: 4,
    name: 'Meta Llama',
    category: 'Open Weight (US)',
    score: '0.0031',
    tier: 'Structurally Inert',
    trend: 'down'
  }, {
    rank: 5,
    name: 'OpenAI GPT',
    category: 'Centralized API',
    score: '0.0014',
    tier: 'Structurally Inert',
    trend: 'flat'
  }, {
    rank: 6,
    name: 'Google Gemini',
    category: 'Platform Bundle',
    score: '0.0011',
    tier: 'Structurally Inert',
    trend: 'flat'
  }, {
    rank: 7,
    name: 'Microsoft Copilot',
    category: 'Platform Bundle',
    score: '0.0001',
    tier: 'Structurally Inert',
    trend: 'down'
  }, {
    rank: 8,
    name: 'Autonomaton',
    category: 'Sovereign Open',
    score: '0.0001',
    tier: 'Structurally Inert',
    trend: 'flat'
  }];
  const wide = {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '100px 32px 80px'
  };
  return /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wide,
      paddingBottom: '40px',
      background: 'radial-gradient(ellipse at 20% 70%, rgba(212,98,26,0.08) 0%, transparent 55%)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "State of the Architecture"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--serif)',
      fontWeight: 400,
      fontSize: 'clamp(44px,5.5vw,72px)',
      lineHeight: 1.06,
      letterSpacing: '-0.02em',
      color: 'var(--text)',
      margin: '20px 0 8px'
    }
  }, "Lambda (", /*#__PURE__*/React.createElement("em", {
    style: {
      color: 'var(--amber)',
      fontStyle: 'italic'
    }
  }, "\u039B"), ") Watch"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--serif)',
      fontStyle: 'italic',
      fontSize: 'clamp(20px,2.2vw,28px)',
      color: 'var(--text-mid)',
      margin: '8px 0 24px',
      lineHeight: 1.3
    }
  }, "Standings of AI architectural patterns \u2014 and which would survive ", /*#__PURE__*/React.createElement("em", {
    style: {
      color: 'var(--amber)'
    }
  }, "without the money.")), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--mono)',
      fontSize: '10px',
      color: 'var(--text-dim)',
      letterSpacing: '0.1em'
    }
  }, "Last scored: March 2026 \xB7 96 sources \xB7 8 patterns \xB7 CC BY 4.0")), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wide,
      paddingTop: '40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '40px',
      marginBottom: '36px'
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: "83%",
    label: "Sovereign Share",
    tone: "var(--green)",
    size: "lg"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "17%",
    label: "Concentrated",
    tone: "var(--red)",
    size: "lg"
  })), /*#__PURE__*/React.createElement(StandingsTable, {
    rows: rows
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--mono)',
      fontSize: '10px',
      color: 'var(--text-dim)',
      marginTop: '16px',
      letterSpacing: '0.04em'
    }
  }, "\u039B = (S \xD7 R \xD7 V) / (1 + (\u03B2 \xB7 F", /*#__PURE__*/React.createElement("sub", null, "c"), ")\xB2) \xB7 Grove scores its own pattern at the floor.")));
}
window.LambdaScreen = LambdaScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/grove-site/LambdaScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/grove-site/Nav.jsx
try { (() => {
// Grove site — fixed frosted nav. Exposes window.Nav.
function Nav({
  route,
  go
}) {
  const links = [['ratchet', 'Ratchet Test'], ['lambda', 'Λ Watch'], ['standards', 'Published Standards'], ['about', 'About']];
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 100,
      height: '56px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 32px',
      background: 'rgba(8,8,8,0.94)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(37,37,37,0.5)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => go('home'),
    style: {
      fontFamily: 'var(--mono)',
      fontSize: '11px',
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--amber-dim)',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/grove-mark.png",
    alt: "",
    style: {
      width: '22px',
      height: '22px',
      display: 'block'
    }
  }), "The Grove Foundation"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '28px',
      alignItems: 'center'
    }
  }, links.map(([id, label]) => {
    const active = route === id;
    return /*#__PURE__*/React.createElement("a", {
      key: id,
      onClick: () => go(id),
      style: {
        fontFamily: 'var(--mono)',
        fontSize: '10px',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: active ? 'var(--amber)' : 'var(--text-dim)',
        cursor: 'pointer',
        paddingBottom: '3px',
        borderBottom: active ? '1px solid var(--amber)' : '1px solid transparent'
      }
    }, label);
  }), /*#__PURE__*/React.createElement("a", {
    onClick: () => go('ratchet'),
    style: {
      fontFamily: 'var(--mono)',
      fontSize: '10px',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--amber-dim)',
      cursor: 'pointer',
      border: '1px solid var(--amber-dim)',
      padding: '3px 10px'
    }
  }, "Run the Pattern \u2197")));
}
window.Nav = Nav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/grove-site/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/grove-site/RatchetScreen.jsx
try { (() => {
// Grove Ratchet Test — interactive diagnostic. Exposes window.RatchetScreen.
const RATCHET_Q = [{
  axis: 'Portability',
  n: 'P-1',
  text: 'What format is your AI operational knowledge stored in?',
  options: [{
    t: "We're unsure where this knowledge lives.",
    s: 0
  }, {
    t: 'In provider dashboards we can access but not control.',
    s: 1
  }, {
    t: 'Structured, but specific to our provider\u2019s platform.',
    s: 2
  }, {
    t: 'Provider-independent, human-readable formats we control.',
    s: 3
  }]
}, {
  axis: 'Visibility',
  n: 'V-1',
  text: 'Who can govern your AI routing rules?',
  options: [{
    t: 'No one — routing is opaque to us.',
    s: 0
  }, {
    t: 'Only the vendor, via support tickets.',
    s: 1
  }, {
    t: 'Our engineers, by reading vendor config.',
    s: 2
  }, {
    t: 'Our domain experts, in declarative config they own.',
    s: 3
  }]
}, {
  axis: 'Trajectory',
  n: 'T-1',
  text: 'Which way are your per-unit and switching costs moving?',
  options: [{
    t: 'Both rising — deeper lock-in each quarter.',
    s: 0
  }, {
    t: 'Per-unit flat, switching cost rising.',
    s: 1
  }, {
    t: 'Per-unit falling, switching cost flat.',
    s: 2
  }, {
    t: 'Per-unit falling, switching cost falling.',
    s: 3
  }]
}];
function RatchetScreen() {
  const {
    Eyebrow,
    Button,
    StatBlock,
    Badge,
    Divider
  } = window.GroveFoundationDesignSystem_1f1800;
  const [stage, setStage] = React.useState('intro'); // intro | q | result
  const [idx, setIdx] = React.useState(0);
  const [answers, setAnswers] = React.useState([]);
  const wrap = {
    maxWidth: '760px',
    margin: '0 auto',
    padding: '80px 32px'
  };
  function pick(s) {
    const next = [...answers];
    next[idx] = s;
    setAnswers(next);
    if (idx < RATCHET_Q.length - 1) setIdx(idx + 1);else setStage('result');
  }
  function restart() {
    setStage('intro');
    setIdx(0);
    setAnswers([]);
  }
  if (stage === 'intro') {
    return /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
      style: {
        ...wrap,
        textAlign: 'center',
        maxWidth: '680px'
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, null, "The Grove Foundation"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--serif)',
        fontWeight: 400,
        fontSize: 'clamp(32px,5vw,48px)',
        lineHeight: 1.15,
        color: 'var(--text)',
        margin: '24px 0'
      }
    }, "The AI Ratchet Test"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '15px',
        lineHeight: 1.75,
        color: 'var(--text-mid)',
        fontWeight: 300,
        maxWidth: '520px',
        margin: '0 auto 32px'
      }
    }, "Every enterprise AI deployment has a structural ratchet. This diagnostic measures whether your architecture accumulates sovereign capability \u2014 or deepens vendor dependency."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '32px',
        justifyContent: 'center',
        margin: '0 0 36px'
      }
    }, /*#__PURE__*/React.createElement(StatBlock, {
      value: "9",
      label: "Questions",
      align: "center",
      size: "sm"
    }), /*#__PURE__*/React.createElement(StatBlock, {
      value: "3",
      label: "Axes",
      align: "center",
      size: "sm"
    }), /*#__PURE__*/React.createElement(StatBlock, {
      value: "~4m",
      label: "Minutes",
      align: "center",
      size: "sm"
    })), /*#__PURE__*/React.createElement(Button, {
      onClick: () => setStage('q'),
      variant: "primary",
      glow: true
    }, "Begin the Diagnostic \u2192"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '12px',
        color: 'var(--text-dim)',
        marginTop: '16px',
        fontWeight: 300
      }
    }, "No email required. (Demo: 3 representative questions.)")));
  }
  if (stage === 'q') {
    const q = RATCHET_Q[idx];
    const pct = Math.round(idx / RATCHET_Q.length * 100);
    return /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
      style: {
        height: '2px',
        background: 'var(--amber)',
        width: pct + '%',
        transition: 'width 0.5s var(--ease-out)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        ...wrap,
        paddingTop: '48px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '40px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--mono)',
        fontSize: '10px',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        color: 'var(--amber)'
      }
    }, "Axis ", idx + 1, " \xB7 ", q.axis), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--mono)',
        fontSize: '11px',
        color: 'var(--text-dim)'
      }
    }, q.n, " \xB7 ", idx + 1, " / ", RATCHET_Q.length)), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--serif)',
        fontWeight: 400,
        fontSize: 'clamp(22px,3.5vw,28px)',
        lineHeight: 1.35,
        color: 'var(--text)',
        marginBottom: '36px'
      }
    }, q.text), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }
    }, q.options.map((o, i) => /*#__PURE__*/React.createElement(Option, {
      key: i,
      marker: String.fromCharCode(65 + i),
      text: o.t,
      onPick: () => pick(o.s)
    })))));
  }

  // result
  const total = answers.reduce((a, b) => a + b, 0);
  const max = RATCHET_Q.length * 3;
  const rdi = Math.round(total / max * 100);
  const sovereign = rdi >= 60;
  const mid = rdi >= 35 && rdi < 60;
  const tone = sovereign ? 'var(--green)' : mid ? 'var(--amber)' : 'var(--danger)';
  const klass = sovereign ? 'Operator-Sovereign' : mid ? 'Contested' : 'Provider-Ratcheted';
  const badgeTone = sovereign ? 'green' : mid ? 'amber' : 'red';
  return /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      maxWidth: '720px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: '40px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Ratchet Direction Index")), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '36px',
      border: '1px solid var(--border)',
      marginBottom: '32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--serif)',
      fontSize: '72px',
      lineHeight: 1,
      color: tone,
      marginBottom: '4px'
    }
  }, rdi), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--mono)',
      fontSize: '14px',
      color: 'var(--text-dim)',
      marginBottom: '20px'
    }
  }, "/ 100"), /*#__PURE__*/React.createElement(Badge, {
    tone: badgeTone
  }, klass)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 32px',
      borderLeft: '2px solid ' + tone,
      marginBottom: '36px'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '14px',
      lineHeight: 1.75,
      color: 'var(--text-mid)',
      fontWeight: 300
    }
  }, sovereign ? /*#__PURE__*/React.createElement("span", null, "Your deployment ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text)',
      fontWeight: 500
    }
  }, "ratchets toward the operator"), ". Substrate, routing, and validated patterns accumulate at your node. Keep the portability layer explicit.") : mid ? /*#__PURE__*/React.createElement("span", null, "Your deployment is ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text)',
      fontWeight: 500
    }
  }, "contested"), ". Some sovereignty, some lock-in. Identify which axis is dragging and fund a targeted structural fix.") : /*#__PURE__*/React.createElement("span", null, "Your deployment ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text)',
      fontWeight: 500
    }
  }, "ratchets toward the provider"), ". Operational knowledge, routing, and switching costs accrue to the vendor. This is the Telemetry Trap."))), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '10px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: restart,
    variant: "primary",
    size: "sm"
  }, "Retake \u2192"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm"
  }, "Print board slide"))));
}
function Option({
  marker,
  text,
  onPick
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onPick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      padding: '18px 24px',
      border: '1px solid',
      borderColor: h ? 'var(--border-hover)' : 'var(--border)',
      background: h ? 'rgba(232,224,216,0.02)' : 'var(--bg2)',
      cursor: 'pointer',
      display: 'flex',
      gap: '16px',
      alignItems: 'flex-start',
      transition: 'all 0.25s'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--mono)',
      fontSize: '10px',
      color: h ? 'var(--amber)' : 'var(--text-dim)',
      minWidth: '16px',
      paddingTop: '2px'
    }
  }, marker), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '14px',
      lineHeight: 1.55,
      color: h ? 'var(--text)' : 'var(--text-mid)',
      fontWeight: 300
    }
  }, text));
}
window.RatchetScreen = RatchetScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/grove-site/RatchetScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/grove-site/StandardsScreen.jsx
try { (() => {
// Grove standards portfolio. Exposes window.StandardsScreen.
function StandardsScreen({
  go
}) {
  const {
    Eyebrow,
    Divider,
    Badge
  } = window.GroveFoundationDesignSystem_1f1800;
  const standards = [{
    id: '001',
    title: ['The Autonomaton ', 'Pattern'],
    sub: 'Toward Self-Authoring Software Systems. A five-stage invariant pipeline, tiered Cognitive Router, Green/Yellow/Red zone governance, and a Skill Flywheel that makes the system cheaper, smarter, and more sovereign with every interaction.',
    meta: 'The Pattern · v2.0 · June 2026'
  }, {
    id: '002',
    title: ['TCP/IP for the ', 'Cognitive Layer'],
    sub: 'The Autonomaton Pattern occupies the same structural position for distributed cognition that TCP/IP occupied for distributed networking. Principle-by-principle mapping across six dimensions.',
    meta: 'Architectural Theory · Working Draft · March 2026'
  }, {
    id: '003',
    title: ['The Learner ', 'Autonomaton'],
    sub: 'A lifelong cognitive router in a composable university. The architectural standard for refusing cognitive platforming in higher education through structural — not policy — means.',
    meta: 'Vision Requirements · v1.2 · April 2026'
  }, {
    id: '004',
    title: ['The Autonomaton ', 'Protocol'],
    sub: 'Sovereign Declaration for the Polarity-Compliant Internet. The open standard by which sovereign cognitive nodes declare themselves to the network — DNS for the polarity-compliant internet.',
    meta: 'The Protocol · v1.0 · April 2026'
  }];
  const [hover, setHover] = React.useState(-1);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      borderTop: '1px solid transparent'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '760px',
      margin: '0 auto',
      padding: '100px 32px 80px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Open Standards \xB7 CC BY 4.0"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--serif)',
      fontWeight: 400,
      fontSize: 'clamp(44px,5.5vw,72px)',
      lineHeight: 1.06,
      letterSpacing: '-0.02em',
      color: 'var(--text)',
      margin: '20px 0 24px'
    }
  }, "Open ", /*#__PURE__*/React.createElement("em", {
    style: {
      color: 'var(--amber)',
      fontStyle: 'italic'
    }
  }, "Standards")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: 300,
      fontSize: '17px',
      lineHeight: 1.75,
      color: 'var(--text-mid)',
      maxWidth: '640px'
    }
  }, "Architectural specifications for AI governance, published under Creative Commons for anyone to implement. The pattern is the product. The architecture is the intervention."), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '1px',
      background: 'var(--border)',
      border: '1px solid var(--border)',
      marginTop: '24px'
    }
  }, standards.map((s, i) => /*#__PURE__*/React.createElement("a", {
    key: s.id,
    onMouseEnter: () => setHover(i),
    onMouseLeave: () => setHover(-1),
    style: {
      display: 'grid',
      gridTemplateColumns: '80px 1fr',
      background: hover === i ? 'var(--bg3)' : 'var(--bg2)',
      textDecoration: 'none',
      cursor: 'pointer',
      transition: 'background 0.2s'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--mono)',
      fontSize: '12px',
      letterSpacing: '0.1em',
      color: 'var(--amber)',
      background: 'rgba(212,98,26,0.04)',
      borderRight: '1px solid var(--border)'
    }
  }, s.id), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--serif)',
      fontSize: '24px',
      color: 'var(--text)',
      marginBottom: '6px',
      lineHeight: 1.2
    }
  }, s.title[0], /*#__PURE__*/React.createElement("em", {
    style: {
      color: 'var(--amber)',
      fontStyle: 'italic'
    }
  }, s.title[1])), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--sans)',
      fontSize: '13px',
      color: 'var(--text-mid)',
      fontWeight: 300,
      marginBottom: '12px',
      lineHeight: 1.5
    }
  }, s.sub), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--mono)',
      fontSize: '10px',
      color: 'var(--text-dim)',
      letterSpacing: '0.08em'
    }
  }, s.meta, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: hover === i ? 'var(--amber)' : 'var(--amber-dim)',
      marginLeft: hover === i ? '14px' : '8px',
      transition: 'all 0.2s'
    }
  }, "\u2192")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '32px',
      display: 'flex',
      gap: '12px',
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "CC BY 4.0"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--sans)',
      fontSize: '13px',
      color: 'var(--text-dim)',
      fontWeight: 300
    }
  }, "Distributed cognition that depends on a single vendor's implementation is not distributed."))));
}
window.StandardsScreen = StandardsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/grove-site/StandardsScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.StandingsTable = __ds_scope.StandingsTable;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.NewsletterOptIn = __ds_scope.NewsletterOptIn;

})();
