# coherence-v1 — HANDOFF

*Sprint: `coherence-v1`*
*Close: 2026-05-14*
*Author: Claude Code (CC)*
*Operator: Jim Calhoun, The Grove Foundation*

---

## 1. What shipped

Three commits on `master`. Coherence break closed: footer-nav and homepage card-grid now speak the rationalized vocabulary established by `nav-rationalization-v1`.

| # | Touch | Commit | Scope | Δ |
|---|---|---|---|---|
| 1 | Touch 1 | `5090de5` — chore: rename footer-nav vocabulary on /about and /ratchet to match nav-rationalization-v1 (coherence-v1 Touch 1) | `about/index.html`, `ratchet/index.html` | +4 / −4 |
| 2 | Touch 2 | `0db81ec` — chore: rename homepage card-grid vocabulary to match nav-rationalization-v1 (coherence-v1 Touch 2) | `index.html` | +2 / −2 |
| 3 | Touch 3 | *(this commit)* — docs: write coherence-v1 HANDOFF + deploy (coherence-v1 Touch 3) | `sprints/coherence-v1/HANDOFF.md` (new), `SPRINT-BACKLOG.md` | TBD |

---

## 2. Deviations from SPEC

**none.** Three pre-flight judgment calls all resolved cleanly via inspection before any write; SPEC executed verbatim across Touch 1 and Touch 2.

---

## 3. Pre-flight findings

### PF-1. Footer-nav inventory ✓

`about/index.html` (line 383) and `ratchet/index.html` (line 969) both carried identical `<div class="footer-nav">` blocks: same wrapper class, same 7 anchors, same sequence (Ratchet Test, CIO Alerts, Observations, Standings, Open Standards, Membership, About). No structural surprise — both files received the same edit pattern in Touch 1.

### PF-2. Footer-nav CSS — global scope ✓

The `.nav-label-full` and `.nav-label-mobile` rules added in `nav-rationalization-v1` Touch 2 are declared without parent qualification on both files: desktop default `display:none` and inside-media-query swap rules target the class names directly. Wrapping the `/lambda` footer-nav anchor in the same two-span markup composed with existing global CSS — **no new CSS rules added in Touch 1**. Footer-nav font-size at 10px (identical to header-nav at desktop) plus `flex-wrap:wrap` on the `.footer-nav` container provides safe overflow behavior.

### PF-3. Card-grid current state ✓

Six cards confirmed at `index.html` lines 686–712. Touch 2 updated exactly two heading texts (`<h3>&Lambda; Standings</h3>` → `<h3>Lambda (&Lambda;) Watch</h3>`, `<h3>Open Standards</h3>` → `<h3>Published Standards</h3>`). Card descriptions, `href` values, card count, card order, and the other four cards preserved verbatim.

### PF-4. Card-grid H3 sizing ✓

`.explore-card h3` at line 409: `font-family: var(--serif); font-size: 20px; font-weight: 400; font-style: italic;` (Instrument Serif italic at 20px). At the 640px mobile breakpoint, `.explore-grid` switches to `grid-template-columns: 1fr` (single column).

Mobile width calculation at 320px viewport:
- Viewport: 320px
- Section-inner padding at 640px breakpoint: 24px × 2 = 48px
- Card border + padding: 2px + 48px = 50px
- **Available content width: ~222px** at 320px viewport

"Lambda (Λ) Watch" at 20px Instrument Serif italic renders at approximately 175–185px — comfortably under the 222px content width. For comparison, the existing "The Architectural Gap" card heading (21 characters) renders cleanly today; the new "Lambda (Λ) Watch" heading is 16 characters and shorter. Two-span pattern was unnecessary — Touch 2 shipped the literal text without mobile abbreviation. Over-engineering avoided.

### PF-5. Prior-sprint close ✓

`discoverability-v1` closed at commit `8640a85`. HANDOFF.md §7 deploy log populated; verification PASS on four `curl -I` checks (200 status) and three content checks (sitemap 21 entries, manifest corpus length 4, llms.txt Lambda (Λ) Watch count 2). Production canonical: `https://the-grove.ai`. Build time 7s. Verification timestamp 2026-05-14T22:56:36Z.

`coherence-v1` appropriate to begin.

---

## 4. Mobile abbreviation implementation

Two distinct decisions, each justified by the surface's font-sizing context:

### Footer-nav (Touch 1) — two-span pattern applied

`/about` and `/ratchet` footer-nav anchors for `/lambda` use the same two-span markup as header-nav established in `nav-rationalization-v1`:

```html
<a href="/lambda">
  <span class="nav-label-full">Lambda (&Lambda;) Watch</span>
  <span class="nav-label-mobile">&Lambda; Watch</span>
</a>
```

Composes with the global CSS rules already on both files. No new CSS added.

### Card-grid (Touch 2) — full label, no abbreviation

The H3 heading on `index.html` card grid uses literal `<h3>Lambda (&Lambda;) Watch</h3>` at all breakpoints. Larger font sizing (20px serif italic vs nav-link 10–11px mono) means the longer label fits without overflow — confirmed by PF-4 width math. Adding a two-span here would have been over-engineering.

---

## 5. Andons surfaced

**none.** All three pre-flight uncertainties resolved by inspection before any write. No surprises mid-sprint.

---

## 6. Inheritance package status update

Roll-forward across `nav-rationalization-v1`, `discoverability-v1`, and this sprint. Two inheritance items resolved by this sprint:

| Item | Source | Status after this sprint |
|---|---|---|
| Footer-nav vocabulary on `/about` and `/ratchet` | nav-rationalization-v1 §6.1 | **RESOLVED — coherence-v1 Touch 1** |
| Homepage `Go deeper` card-grid vocabulary (Λ Standings, Open Standards labels) | nav-rationalization-v1 §6.2 | **RESOLVED — coherence-v1 Touch 2** (vocabulary only; card composition / grid redesign deferred to `homepage-card-grid-redesign-v1`) |
| Letter-page orphans (`/substrate/jim-calhoun/letter/*`) | nav-rationalization-v1 §6.4 / discoverability-v1 §8 | Resolved in `discoverability-v1` (robots.txt + sitemap); actual auth gate operator-gated indefinite |
| CSS breakpoint variance (640px / 768px / 900px) across 21 production files | nav-rationalization-v1 §6.3 | Deferred to **`css-coherence-v1`** |
| Custom Grove JSON-LD context (`grove-corpus-v1.jsonld`) | discoverability-v1 §8 | Deferred to **`protocol-retrofit-v1`** |
| Manifest enrichment (`lineage`, `composes-with`, `published_date`) + per-corpus manifests for alerts / observations / substrate / research | SPRINT-BACKLOG | Deferred to **`manifest-design-v1`** |
| Substantive Bicameral Canon / GRV-004 retrofit on homepage + non-upgraded pages | SPRINT-BACKLOG | Deferred to **`protocol-retrofit-v1`** |
| Footer-nav presence on the other 19 production pages (asymmetry question) | SPRINT-BACKLOG | Deferred to **`footer-nav-standardization-v1`** |
| `jq` Python-fallback for deploy-verification commands | discoverability-v1 §7 substrate-awareness note | Pattern recorded; no jq-dependent verification step required this sprint |
| HTML-entity false-negative on literal-Λ regex during post-deploy verification | nav-rationalization-v1 §7 | Operationalized this sprint via corrected-fingerprint regex variant — see §7 below |

---

## 7. Deploy execution log

```
Command:                npx vercel --prod --yes
Vercel CLI:             48.10.4
Project:                twocashs-projects/grove-launch-site
Deployment URL:         https://grove-launch-site-j98fk5phl-twocashs-projects.vercel.app
Production canonical:   https://the-grove.ai
Inspect URL:            https://vercel.com/twocashs-projects/grove-launch-site/Gzm2NNxyUu4df2si8LrVxvk8fhRf
Build time:             8s
Verification timestamp: 2026-05-14T23:48:28Z (UTC)
Notes:                  clean — no warnings or errors during upload, build, or completion phase
```

### Post-deploy verification

**Round 1 — CC-PROMPT literal-Λ regex (60s after deploy):**

```bash
curl -s https://the-grove.ai/<page> | grep -oE "Lambda \(.{0,3}\) Watch|Published Standards|Standings|Open Standards"
```

| Page | Result | Interpretation |
|---|---|---|
| `/about` | `Published Standards` only | Old labels absent ✓ &nbsp;&nbsp; Lambda Watch false-negative on literal-Λ (markup uses `&Lambda;` entity, 8 chars between parens vs regex `.{0,3}` allowing ≤3 — known pattern documented in `nav-rationalization-v1` §7) |
| `/ratchet` | `Published Standards` only | Same as above |
| `/` | 2 matches | Two `Published Standards` (header-nav + card-grid); zero literal-Λ Lambda Watch matches (entity-encoded across all four positions) |

**Round 2 — corrected-fingerprint `&Lambda;`-entity regex:**

```bash
curl -s https://the-grove.ai/<page> | grep -oE "Lambda \(&Lambda;\) Watch|Published Standards|Standings|Open Standards"
```

| Page | Unique matches | Interpretation |
|---|---|---|
| `/about` | `Lambda (&Lambda;) Watch`, `Published Standards` | New vocabulary live ✓ &nbsp;&nbsp; Old vocabulary absent ✓ |
| `/ratchet` | `Lambda (&Lambda;) Watch`, `Published Standards` | Same as above |
| `/` | 6 total matches | Detailed below |

**Round 3 — per-page occurrence counts via entity regex:**

| Page | `Lambda (&Lambda;) Watch` count | `Published Standards` count | Expected positions accounted for |
|---|---|---|---|
| `/about` | 2 | 2 | header-nav + footer-nav for each label |
| `/ratchet` | 2 | 2 | header-nav + footer-nav for each label |
| `/` | 4 | 2 | Lambda Watch: header-nav + body sentence + CTA + card-grid. Published Standards: header-nav + card-grid. |

All counts match the per-surface inventory exactly. CDN edge propagation completed cleanly within the 60s window — no retry needed.

### Verification verdict: PASS

Footer-nav and homepage card-grid now speak the rationalized vocabulary across all three sampled pages. No old labels persist on these surfaces. Coherence break closed.

### Substrate-awareness note (carried forward)

The HTML-entity false-negative pattern documented in `nav-rationalization-v1` §7 was anticipated this sprint and operationalized via a parallel corrected-fingerprint regex. Future verification command templates should default to the entity-aware form when sprint scope involves new Lambda (Λ) Watch surfaces, or run both rounds for completeness.

---

*Sprint close. Three commits landed. Footer-nav and homepage card-grid now speak the rationalized vocabulary. Inheritance ledger updated in §6; persistent `SPRINT-BACKLOG.md` updated to move `coherence-v1` from Active to Completed in the same atomic commit.*

*CC BY 4.0 · The Grove Foundation · Indianapolis · 2026-05-14*
