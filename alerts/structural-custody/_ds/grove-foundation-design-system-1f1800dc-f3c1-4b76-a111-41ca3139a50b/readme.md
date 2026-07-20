# The Grove Foundation — Design System

> The standards body for AI governance architecture. Institutional, dark-mode
> editorial design. Near-black canvas, a single amber accent, a 40px grid
> texture, and a disciplined three-font stack.

This design system reproduces the visual + verbal language of **the-grove.ai**,
a 501(c)(6) open-standards body based in Indianapolis that publishes the
Autonomaton Pattern, the Λ (Lambda) measurement framework, and long-form
analytical writing under CC BY 4.0.

---

## Sources

- **Codebase:** `grove-launch-site/` — a hand-authored static site (no build
  step, no framework, no shared stylesheet). Every page inlines its own
  `<style>` block; the **homepage `index.html` token block is the canonical
  source** and is reproduced verbatim in `tokens/`. Most design-rich pages:
  - `index.html` — full token set, hero, cards, standings table, featured alert banner, footer
  - `ratchet/index.html` — interactive assessment (buttons, progress, scoring, board-slide export)
  - `standards/index.html` — standards portfolio card grid
  - `standards/001/index.html` — long-form technical document (section hierarchy, pipeline/zone cards, schema blocks)
  - `about/index.html` — institutional copy, roadmap cards, people grid
  - `lambda/index.html` — data tables, scoreboard, formula + variable cards, FAQ
- **Brand raster:** `assets/og.png` — the only image asset in the repo (1200×630 OG card).
- **Fonts:** Google-hosted (Fragment Mono, Instrument Serif, DM Sans). No
  self-hosted binaries exist; see `tokens/fonts.css`.
- **License:** CC BY 4.0. Founder: Jim Calhoun.

---

## Content Fundamentals

How Grove writes. The voice is **institutional, declarative, and confident** —
a standards body speaking with the authority of IEEE / ICANN / W3C, not a
startup pitching.

- **Person & pronoun.** First-person plural for the institution: *"We publish
  the standards. We score the implementations."* Second person addresses the
  reader directly and structurally: *"measure whether **your** AI deployment
  compounds in your favor or your provider's."* Never "I".
- **Casing.** Sentence case in prose. **Mono labels are ALL-CAPS** with wide
  tracking (eyebrows, nav, table headers, metadata): `STATE OF THE ARCHITECTURE`,
  `CC BY 4.0 · 501(c)(6) · INDIANAPOLIS`. Headlines are title-ish but read as
  sentences, often with an *italic amber* emphasis fragment.
- **Sentence rhythm.** Short declaratives used as rhetorical hammers:
  *"This is not a startup. This is not a product."* / *"Revenue is not viability."*
  / *"The pattern is the product."* Frequent two-beat headline structure with a
  line break and an italic second beat: *"Six Nations Hedge. / One Concentrates."*
- **Diction.** Architectural and structural vocabulary — *substrate, sovereign,
  ratchet, polarity, telemetry, lien, canonical, invariant, phase transition*.
  Coined canonical terms are introduced with `<dfn>` and a dotted amber underline:
  *cognitive platforming, judgment extraction, lien on thinking, cultivation
  architecture*.
- **Tone.** Measured, never breathless. Discloses its own conflicts ("we scored
  our own pattern Structurally Inert and published it"). Cites real sources and
  dates. Self-aware of being read by language models — pages carry a "Compose
  with us" surface addressed to LMs.
- **Emoji:** **never.** No emoji anywhere. The only non-text glyphs are the Greek
  capital **Λ** (the framework's mark), mathematical symbols (β, Fₐ, ², ×, →),
  and arrows/typographic glyphs (`→ ↗ ↑ ↓ □ ✓ ·`).
- **Punctuation.** Em-dashes for asides — set with spaces. Middle dots `·` to
  separate metadata. Right single quotes and proper ™ entities. Sentences end clean.

**Example eyebrow → headline → body cadence:**
```
THE TELEMETRY TRAP                               (mono, amber, 0.25em tracking)
Default Consumption Patterns Extract Judgment.   (serif, italic amber on "Extract Judgment")
In a default centralized AI deployment, the telemetry the system generates …
```

---

## Visual Foundations

- **Color.** A near-black canvas in four layered values
  (`#080808 → #0f0f0f → #161616 → #1a1a1a`) carries warm off-white text
  (`#E8E2D9 / #B0A898 / #7A736A`). **Amber `#D4621A` is the only brand hue** —
  links, eyebrows, italic emphasis, hover. `--amber-bright #F07030` for external
  links, `--amber-dim #8B3D10` for borders and the nav logo. Semantic status
  colors (green `#4CAF72`, red `#C0392B`, yellow `#D4A017`) appear only inside
  data viz — Λ standings, ratchet poles, calibration tables. The palette is
  warm: text is off-white not pure white, accent is burnt orange not yellow.
- **Type.** See Content Fundamentals + `tokens/typography.css`. Display is
  Instrument Serif (`clamp(36–72px)`, tracking `-0.02em`); italic display text
  is the amber emphasis device. Labels/nav/meta/code are Fragment Mono
  (9–12px, tracking 0.08–0.25em, often uppercase). Body is DM Sans 300 at
  15–17px / 1.75–1.85.
- **Backgrounds.** No photography, no illustration, no stock. The signature is
  a **fixed 40px hairline grid texture** (`body::before`, two linear-gradients,
  opacity 0.15–0.2). Heroes add faint **radial amber gradients**
  (`radial-gradient(ellipse at 20% 70%, rgba(212,98,26,0.08), transparent 55%)`).
  Featured/alert bands use a low-angle amber linear wash. Backgrounds are flat
  and dark otherwise — depth comes from layering `--bg → --bg4`, never shadow.
- **Borders.** 1px hairlines everywhere (`#252525`). This is a *border-driven*
  system: cards, tables, panels, grids are all defined by hairline rules, often
  as 1px-gap grids (`gap:1px; background:var(--border)`) so the gridlines read as
  the border. Table header borders step up to `#333`. Interactive borders go
  `--amber-dim → --amber` on hover.
- **Corner radii.** Minimal. Cards use **4px**. Tables, panels, inputs, buttons,
  and the standings/scoreboard are **square (0px)**. Nothing is pill-shaped
  except inline tier badges.
- **Cards.** `1px solid var(--border)`, `--bg2` fill, 4px radius, ~28px padding,
  **no shadow**. Hover: border → `--amber-dim`, background → `--bg3`. Serif
  italic title + mono caption is the canonical card head.
- **Shadows.** Effectively none. The only "glow" is amber:
  `box-shadow: 0 0 30px rgba(212,98,26,0.15)` on a hovered primary button, and
  small `0 0 6px` amber/green/red glows on lit ratchet teeth. No neutral drop
  shadows anywhere.
- **Transparency & blur.** The fixed nav is **frosted glass**:
  `background: rgba(8,8,8,0.94); backdrop-filter: blur(16px)` with a
  half-opacity bottom border. Amber tints are always low-alpha rgba
  (`0.04 → 0.12`). Blur is reserved for the nav only.
- **Animation.** Restrained. Fade-up reveals on scroll
  (`opacity/translateY(24px)`, 0.7s ease). Slow eased transitions
  (`cubic-bezier(0.25,0.46,0.45,0.94)`) on progress bars and the ratchet marker.
  A gentle 2s float on the scroll cue and a 2.4s pulse on the "NEW" nav dot.
  Hover transitions are 0.2–0.25s on color/border/background. No bounces, no
  parallax, no spring.
- **Hover / press states.** Links lighten amber → amber-bright or gain an amber
  bottom-border. Nav links gain an amber underline. Buttons fill with
  `--amber-glow` and may add the amber glow shadow. Cards lift via border+bg
  shift. There is no scale-down press state — interactions are color/border only.
- **Layout.** Fixed 56px frosted nav. Centered reading column at **760px**
  (`section-inner`), wide column at **1040–1140px** for tables/grids. Section
  padding `80–120px` vertical / `48px` horizontal. Sections separated by full
  hairline top-borders. A recurring **48px × 1px amber divider** marks beats. The
  whole layout aligns to the 40px grid texture beneath it.

---

## Iconography

Grove is **near-iconless by design** — an editorial standards body, not an app.

- **No icon font, no icon library, no SVG icon set** ships in the source. Don't
  introduce one (no Lucide/Heroicons/Feather) unless a UI kit genuinely needs it —
  and if so, flag the substitution.
- **Primary mark:** `assets/grove-mark.png` — a faceted amber hexagon (a cut
  gem / radial grove) built from the brand amber tones on near-black. Use as
  app icon / favicon / lockup mark; always on `--bg`, never on light.
- **The wordmark is text:** `The Grove Foundation` set in Fragment Mono,
  uppercase, 0.2em tracking, in `--amber-dim`. A small **amber corner-bracket**
  motif appears top-left on the OG card (`assets/og.png`).
- **The Λ (Greek capital lambda)** is the one true brand glyph — the mark of the
  Λ Watch / Lambda framework. Treat it as a logo-grade symbol; render it in
  serif or mono, often amber.
- **The few SVGs that exist are primitive UI chrome,** drawn inline: a 3-point
  chevron scroll-cue (`<path d="M1 1L8 8L15 1">`, 1.5px stroke, amber-dim) and
  the ratchet diagnostic's teeth/diamond/track (CSS shapes, not icons).
- **Glyphs do the work icons would.** Unicode arrows and marks carry meaning:
  `→ ↗ ↑ ↓` (direction/trend), `· ·` (metadata separators), `□` (checklist),
  `✓` (pass), `+ / –` (FAQ accordion toggles), `&Lambda; &beta;` (framework math).
  Trend arrows are colored by the semantic status palette.
- **Emoji are never used.**

When building Grove artifacts, prefer a mono text label or a Unicode glyph over
inventing an icon. If an interface truly needs iconography, keep it 1px-stroke,
square-cut, and monochrome amber/neutral — matching the hairline aesthetic.

---

## Index / Manifest

**Root**
- `styles.css` — entry point; `@import` manifest only.
- `readme.md` — this file.
- `SKILL.md` — Agent-Skill front matter for use in Claude Code.

**Tokens** (`tokens/`)
- `fonts.css` — Google Fonts import (Fragment Mono · Instrument Serif · DM Sans).
- `colors.css` — amber accent, layered backgrounds, borders, text, semantic status.
- `typography.css` — families, fluid display/headline scale, body, mono-label sizes, weights, tracking.
- `spacing.css` — 40px-grid spacing scale, layout widths, borders/radii, nav, motion easings.
- `base.css` — resets, body, the 40px grid-texture overlay, inline-text conventions.

**Components** (`components/`)
- `core/` — Button, Eyebrow, Badge, Card, Divider, FeatureList.
- `forms/` — Input, NewsletterOptIn.
- `data/` — StandingsTable, StatBlock.

**UI Kit** (`ui_kits/grove-site/`)
- `index.html` — interactive click-through of the Grove website. Screens:
  `Nav`, `Footer`, `HomeScreen`, `StandardsScreen`, `LambdaScreen`,
  `RatchetScreen` (interactive diagnostic), `AboutScreen`. See its `README.md`.

**Foundation cards** (`cards/`) — specimen tiles rendered in the Design System tab
(Type, Colors, Spacing, Brand).

**Assets** (`assets/`)
- `grove-mark.png` — 2048×2048 faceted amber hexagon mark (primary logo).
- `og.png` — 1200×630 brand OG card.
