# nav-rationalization-v1 — HANDOFF

*Sprint: `nav-rationalization-v1`*
*Close: 2026-05-14*
*Author: Claude Code (CC)*
*Operator: Jim Calhoun, The Grove Foundation*

---

## 1. What shipped

Five commits on `master`.

| # | Touch | Commit | Scope | Δ |
|---|---|---|---|---|
| 1 | Touch 2 | `1e8d214` — refactor: rename Standings to Lambda (Λ) Watch, Open Standards to Published Standards, reorder nav (nav-rationalization-v1 Touch 2) | 21 nav-bearing HTML files | +119 / −70 |
| 2 | Touch 3 | `86dbd74` — chore: update /lambda page H1, title, meta for Lambda Watch (nav-rationalization-v1 Touch 3) | `lambda/index.html` | +18 / −3 |
| 3 | Touch 4 | `fb0471e` — chore: align homepage Standings section with Lambda Watch framing (nav-rationalization-v1 Touch 4) | `index.html` | +3 / −3 |
| 4 | Touch 5 | `1be57f3` — docs: refresh SITE-IA.md to current state (nav-rationalization-v1 Touch 5) | `SITE-IA.md` | +45 / −17 |
| 5 | Touch 6 | *(this commit)* — docs: write nav-rationalization-v1 HANDOFF + deploy (nav-rationalization-v1 Touch 6) | `sprints/nav-rationalization-v1/HANDOFF.md` | TBD |

### Touch 2 file list (21 nav-bearing files)

```
about/index.html
alerts/ai-deployment-pattern-benchmark/index.html
alerts/architectural-gap/index.html
alerts/architecture-and-accountability/index.html
alerts/index.html
alerts/polarity-and-the-grove-protocol/index.html
alerts/sovereignty-is-all-you-need/index.html
alerts/telemetry-trap/index.html
index.html
lambda/index.html
membership/index.html
observations/index.html
ratchet/index.html
registrar/index.html
research/knowledge-polarity/index.html
standards/001/index.html
standards/002/index.html
standards/003/index.html
standards/004/index.html
standards/index.html
substrate/jim-calhoun/index.html
```

---

## 2. Deviations from SPEC

Two approved scope-adjacent calls. Both ratified at their respective Touch planning gates.

1. **Touch 3 OG-tags expansion.** SPEC item 5 implied existing OG tags to update; the `/lambda` page had no Open Graph or Twitter Card meta tags at all. Operator approved Path 5a — add a fresh OG + Twitter Card block (10 new meta tags inserted between `<meta name="DC.subject">` and the first JSON-LD block) rather than skip the OG part.

2. **Touch 5 Page-1 card-grid description fix.** SPEC Touch 5 enumerated four explicit refresh targets; the existing line 16 description of the homepage "Go deeper" card grid referenced old vocabulary and wasn't on that list. Operator flagged during Touch 5 review. Live card grid was verified (six cards, literal alert titles, preserved old labels) and line 16 was updated to describe live reality. The card-grid HTML itself was not touched (header-nav-only invariant honored); the label staleness is recorded as a coherence-sprint inheritance item in §6.

Otherwise: none. Five touches landed as scoped.

---

## 3. Pre-flight enumeration results

**21 production nav-bearing files** identified — matches the SPEC working list exactly.

Both `standards/index.html` and `standards/002/index.html` confirmed present.

**Excluded per resolved policy:**

- `substrate/jim-calhoun/letter/index.html` — orphaned, sitemap-excluded in `discoverability-v1`
- `substrate/jim-calhoun/letter/andon/index.html` — orphaned, sitemap-excluded in `discoverability-v1`
- `docs/planning/*.html` — non-production
- `sprints/**/*.html` — non-production

**Minor structural variations preserved as-is** per the "no improvements" invariant:

- `<nav class="site-nav">` on `ratchet/index.html` (the other 20 use bare `<nav>`)
- `class="active"` markers on the current-page anchor across 12 of the 21 files — preserved and re-anchored where the active anchor moved to a new position after rename. Most notably on `lambda/index.html`, where the marker moved from the old `Standings` anchor to the new `Lambda (Λ) Watch` anchor in its new position-2 slot.
- `<span class="nav-new-bug">` indicator absent on 4 files: `substrate/jim-calhoun`, `registrar`, `alerts/architecture-and-accountability`, `alerts/polarity-and-the-grove-protocol`

---

## 4. Mobile abbreviation implementation

**Markup:** two-span pattern per SPEC recommendation.

```html
<a href="/lambda">
  <span class="nav-label-full">Lambda (Λ) Watch</span>
  <span class="nav-label-mobile">Λ Watch</span>
</a>
```

**CSS placement:** inline per-page inside each file's existing `<style>` block. No shared site stylesheet exists — PF-3 surfaced this and the CC-PROMPT invariant block was updated mid-sprint to reflect the established per-page-inline convention.

**Breakpoint matching** — each file's existing nav-shrink `@media` rule was extended with the swap rules, preserving per-page visual coherence:

| Breakpoint | Files | Count |
|---|---|---|
| `@media (max-width:640px)` | `index.html`, `alerts/architectural-gap/index.html` | 2 |
| `@media (max-width:768px)` | (everything else) | 18 |
| `@media (max-width:900px)` | `alerts/ai-deployment-pattern-benchmark/index.html` | 1 |

The breakpoint variance is recorded in §6.3 as a `css-coherence-v1` inheritance item.

---

## 5. Andons surfaced

Four during the sprint. All paid off — each prevented silent drift and was resolved through an operator decision before any write that would have locked the wrong choice in.

1. **PF-3 — No shared site stylesheet.** SPEC and CC-PROMPT initially specified that `.nav-label-full` / `.nav-label-mobile` rules live in "whatever shared stylesheet the nav consumes." Reality: no such stylesheet exists. All site CSS is inlined per page. Operator approved **Option B** (inline per-page CSS). The CC-PROMPT Invariants block was updated mid-sprint to reflect corrected guidance ("CSS additions follow site convention").

2. **PF-2 correction — `ai-deployment-pattern-benchmark` shrinks at 900px not 768px.** Initial PF-2 report bucketed the file with the 768px group. Discovery during CSS-context pulls showed `.nav-links` shrinks inside `@media(max-width:900px)`. Corrected mapping reported; operator confirmed the principle ("match each page's own breakpoint") and the 900px swap landed on that file alone.

3. **Touch 3 — `/lambda` page has no OG/Twitter Card meta tags.** SPEC item 5 implied existing OG tags to update; none existed. Operator approved **Path 5a** — add a fresh OG + Twitter Card block as part of Touch 3 scope.

4. **Touch 5 — Homepage `Go deeper` card grid mismatches operator's proposed label set.** Operator-proposed line 16 update implied five destinations with new vocabulary. Live grid has six cards including About, two of which are deep-link alert cards (Architectural Gap, Telemetry Trap), no Ratchet Test or Membership card, and retains pre-rationalization labels. Operator approved **Path A**: SITE-IA.md describes live reality literally; card-grid HTML refresh deferred to a coherence sprint.

---

## 6. Inheritance package for follow-up sprints

Four items recorded for `discoverability-v1` and `css-coherence-v1`.

### 6.1 Footer-nav state on `about/index.html` and `ratchet/index.html`

Only two production pages carry an actual footer nav. Both retain pre-rationalization labels and lack a *Run the Pattern* link.

**Current label set (identical on both pages):**

```
Ratchet Test | CIO Alerts | Observations | Standings | Open Standards | Membership | About
```

The other 19 production nav-bearing pages have a generic `<footer>` element (subscribe / "Follow the pattern" block) with no nav links — no footer-nav refresh required for those pages.

Inherits to: **`discoverability-v1`**.

### 6.2 Homepage `Go deeper` card-grid vocabulary staleness

The six-card grid on `index.html` (lines 685–712) retains pre-rationalization labels and a mixed link structure:

| # | Card title | href |
|---|---|---|
| 1 | The Architectural Gap | `/alerts/architectural-gap` (deep link) |
| 2 | The Telemetry Trap | `/alerts/telemetry-trap` (deep link) |
| 3 | Λ Standings | `/lambda` |
| 4 | Open Standards | `/standards` |
| 5 | Observations | `/observations` |
| 6 | About | `/about` |

No *Ratchet Test* or *Membership* card. Label refresh (`Λ Standings` → `Lambda (Λ) Watch`, `Open Standards` → `Published Standards`) deferred. Card-mix decisions (whether to convert the two deep-link alert cards into a single top-level CIO Alerts card, whether to add Ratchet Test / Membership cards, whether to keep About in the grid) belong to a coherence sprint.

Inherits to: a coherence sprint (homepage refresh — likely `discoverability-v1` or a sibling).

### 6.3 Breakpoint variance across 21 production files

Three distinct `@media(max-width: ...)` values govern nav-shrink behavior across the site:

- 640px (2 files)
- 768px (18 files)
- 900px (1 file)

Per-page-matched swap was the right call for this sprint; the underlying inconsistency is a separate concern.

Inherits to: **`css-coherence-v1`** (or whenever a coherence sprint runs).

### 6.4 Letter pages — orphan note

- `substrate/jim-calhoun/letter/index.html`
- `substrate/jim-calhoun/letter/andon/index.html`

Both carry headers and `<nav>` blocks with pre-rationalization labels. Not touched in this sprint per operator direction. Status: orphaned, sitemap-excluded in `discoverability-v1`. May move behind login later.

Inherits to: **`discoverability-v1`** (sitemap exclusion + login decision).

---

## 7. Deploy execution log

```
Command:                npx vercel --prod --yes
Vercel CLI:             48.10.4
Project:                twocashs-projects/grove-launch-site
Deployment URL:         https://grove-launch-site-c8z9kxkxq-twocashs-projects.vercel.app
Production canonical:   https://the-grove.ai
Inspect URL:            https://vercel.com/twocashs-projects/grove-launch-site/9Ty6HJ2E8P4cosN8smE4bfnspp6C
Build time:             6s
Verification timestamp: 2026-05-14T21:17:35Z (UTC)
Notes:                  clean — no warnings or errors during build, upload, or completion phase
```

### Post-deploy verification

**Round 1 (operator-specified regex, 60s after deploy).** Three-page curl using the original pattern `Lambda \(.{0,3}\) Watch|Published Standards|Standings|Open Standards`:

| Page | Result |
|---|---|
| `/` | `Published Standards` ✓ &nbsp;&nbsp;&nbsp; `Open Standards` (expected — homepage `Go deeper` card grid, §6.2) &nbsp;&nbsp;&nbsp; `Standings` (expected — same card grid, `Λ Standings`) &nbsp;&nbsp;&nbsp; **no `Lambda (Λ) Watch` match — regex false negative (see below)** |
| `/standards/002` | `Published Standards` ✓ &nbsp;&nbsp;&nbsp; `Open Standards` (expected — JSON-LD series name `"Grove Open Standards"`) &nbsp;&nbsp;&nbsp; **no `Lambda (Λ) Watch` match — regex false negative** |
| `/lambda` | `Lambda (Λ) Watch` ✓ &nbsp;&nbsp;&nbsp; `Published Standards` ✓ &nbsp;&nbsp;&nbsp; `Open Standards` (JSON-LD series name) &nbsp;&nbsp;&nbsp; `Standings` (expected — preserved body prose using *Λ Standings* as section concept per SPEC Touch 3.6) |

**Regex false-negative diagnosis.** Touch 2 nav HTML uses `&Lambda;` HTML entity (8 characters) between literal parens; Touch 3 `/lambda` page uses the literal Λ character in `<title>` / meta / OG / Twitter content attributes. The operator's regex `Lambda \(.{0,3}\) Watch` permits 0–3 chars between escaped parens, which matches the literal Λ (1 char) but fails on `&Lambda;` (8 chars). False negative on home + `/standards/002`. Not a deploy / propagation issue.

**Round 2 (corrected fingerprint, Touch 2-only markers).** Re-verified by grepping for `nav-label-full` (the Touch 2 desktop span class that did not exist pre-sprint) and the new `Published Standards` label. Counts include both HTML element occurrences and CSS rule occurrences:

| Page | `nav-label-full` | `nav-label-mobile` | `Published Standards` | Verdict |
|---|---|---|---|---|
| `/` | 2 | 3 | 1 | **PASS** |
| `/standards/002` | 2 | 3 | 1 | **PASS** |
| `/lambda` | 2 | 3 | 1 | **PASS** |

Identical counts across all three pages confirm:
1. Touch 2 two-span nav HTML reached production (`nav-label-full` × 2 = markup + CSS rule; `nav-label-mobile` × 3 = markup + outer-scope CSS rule + inside-media-query CSS rule).
2. Touch 2 rename to `Published Standards` is live in the header nav.
3. CDN edge propagation completed cleanly within the 60s window — no need for retry.

**Verification verdict: PASS — sprint vocabulary is live across all three sampled pages.**

### Operator-facing notes

- The pre-existing footer-nav state on `about/index.html` and `ratchet/index.html` (HANDOFF §6.1) means a quick browser visit to those two pages will surface the intentional header-vs-footer label inconsistency. This is recorded as the principal `discoverability-v1` inheritance item, not a sprint bug.
- The homepage `Go deeper` card grid (HANDOFF §6.2) still renders pre-rationalization card titles. Also intentional, recorded.
- Letter pages (HANDOFF §6.4) still serve pre-rationalization labels. Sitemap-excluded next sprint; out of scope here.

---

*Sprint close. Discoverability-v1 footer-nav inventory captured in §6 alongside three sibling inheritance items.*
*CC BY 4.0 · The Grove Foundation · Indianapolis · 2026-05-14*
