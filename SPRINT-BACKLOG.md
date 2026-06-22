# Grove Site — Sprint Backlog

*Authoritative running ledger of sprint-eligible work for the-grove.ai. Updated at sprint close. Operator + Claude maintain this jointly; CC reads but doesn't update unless directed.*

**Last updated:** 2026-06-21 (post `grv001-red-learning-reconcile-v1` close; queued `governance-write-protection-v1`)

---

## Active sprint

*(none currently active — operator selects next from Queued)*

---

## Queued sprints — in suggested priority order

### `governance-write-protection-v1` — substantive · **critical coherence fix**
Re-key GRV-001 zones from *action category* to *operator scope*, and authorize operator-directed **inline** mutation of scope-defining config (zones/routing/permission boundaries) under a live, authenticated, provenance-stamped operator grant. Fixes the drift where a category-keyed guard ("operator config cannot be written by the agent") was over-generalized to block *any* filesystem write — so an Autonomaton refuses to persist an in-scope knowledge artifact into a granted workspace, contradicting its own ratchet thesis. Surfaced by operator while QA-ing GRV-001 against a Hermes Agent (Nous Research) refactor. Must deliver confused-deputy / downstream-read protection (an in-scope file later parsed as config = scope change) before any relaxation ships. Includes a **§VII reference-schema rewrite** and replaces the v1.3 "observes" placeholder with "writes, within scope, under authenticated grant, with provenance." Likely a GRV-001 → 2.0 bump. SPEC stub at `sprints/governance-write-protection-v1/SPEC.md`. **Probable sprint size:** large; spec-design heavy, multi-phase. Gated on Gemini pre-execution review + circularity resolution.

### `protocol-retrofit-v1` — substantive
Substantive Bicameral Canon / GRV-004 conformance work on homepage and non-upgraded pages. Each page gets Handshake, machine-readable Declaration in `<head>`, operator-empathy Keg payload, register declarations. Judgment-required composition per page; not mechanical. Pages in scope: `/` (homepage), `/about`, `/membership`, `/ratchet`, `/observations`, `/alerts` index, possibly `/standards` index. Conforming Cellar entries in `llms.txt` get promoted from "Pending" to "Conforming" as each page ships its Declaration. **Probable sprint size:** large; may want to split into per-page sub-sprints or by-page-class batches.

### `manifest-design-v1` — schema design
Enrich `/.well-known/grove-standards.json` with `lineage`, `composes-with`, `published_date`, and similar fields. Author per-corpus manifests for alerts (`grove-alerts.json`), observations (`grove-observations.json`), substrate (`grove-substrate.json`), and research papers. Decide whether to author custom Grove JSON-LD context document at `/contexts/grove-corpus-v1.jsonld` (replacing the current `schema.org` placeholder). Composes naturally with `protocol-retrofit-v1` — could be folded in or run parallel. **Probable sprint size:** medium; one design pass + N manifests.

### `css-coherence-v1` — CSS infrastructure
Standardize the CSS breakpoint variance across 21 production files (currently 640px on 2, 768px on 18, 900px on 1 — recorded in `nav-rationalization-v1` HANDOFF). Decide whether to consolidate inline-per-page CSS into a shared stylesheet or formally adopt inline-per-page as site convention. Visual-QA heavy; touches many pages with potential layout side effects. **Probable sprint size:** medium-large depending on consolidation decision.

### `footer-nav-standardization-v1` — content/structure
Decide footer-nav presence policy across the 19 production pages that currently lack one (only `/about` and `/ratchet` have footer-navs). Either add footer-navs to all pages for consistency, or remove from `/about` and `/ratchet` and rely on header-nav only. Either direction is a coherence move; the current asymmetry is the question. **Probable sprint size:** small-medium depending on direction.

### `homepage-card-grid-redesign-v1` — content/design
Reconsider the homepage "Go deeper" card grid composition. Currently six cards: two CIO Alert deep-links + four section landing pages. Questions: should the grid mix deep-links with landing pages or pick one paradigm? Should Ratchet Test and/or Membership get cards? Should the grid match the rationalized nav vocabulary in card *selection*, not just card *labeling*? **Probable sprint size:** small if just card adjustments, medium if grid rethink.

---

## Operator-gated — indefinite timing

### Letter pages auth gate
Build actual authentication gate on `/substrate/jim-calhoun/letter/` and `/substrate/jim-calhoun/letter/andon/`. Currently protected by robots.txt Disallow + sitemap exclusion (per `discoverability-v1` Touch 1b). Operator decides when to ship real auth. When it ships: robots.txt comment updates from "gated for diligence access" to "authentication-gated"; sitemap exclusion can stay as defense in depth.

---

## Tracking — completed sprints (most recent first)

### `grv001-red-learning-reconcile-v1` (closed 2026-06-21)
One atomic commit, both surfaces. Prose-only drift fix GRV-001 v1.2 → v1.3: surfaced the operator-promotion learning loop in Stage 04 (Approval), §V Red Zone, and Principle IV — operator promotes patterns through governed checkpoints, the agent *observes* the sanctioned outcome, the Skill Flywheel turns. Append-only on all three passages; version/date stamps bumped across HTML (byline, footer, JSON-LD, og/DC modified-time) + JSON twin + `version_history`. Deliberately observe-only interim. Gate #1 (Gemini wording review) PASSED, verdict "publish as-is." Surfaced a deeper enforcement drift → spun out `governance-write-protection-v1` (queued). Sprint docs + Gemini brief in `sprints/grv001-red-learning-reconcile-v1/`.

### `nav-text-extraction-fix-v1` (closed 2026-05-15)
Four commits. Collapsed two-span responsive Lambda Watch label pattern to bare `&Lambda; Watch` text across 21 header-nav files (Touch 1, +21/−21) and 2 footer-nav files (Touch 2, +2/−2). Removed orphaned `.nav-label-*` rules from 21 inline `<style>` blocks (Touch 3, +7/−56). Plain-text extractors now read nav labels without the duplicated-label artifact. Single-span / bare-text is now canonical Grove convention for nav labels. HANDOFF at `sprints/nav-text-extraction-fix-v1/HANDOFF.md`.

### `coherence-v1` (closed 2026-05-14)
Three commits. Renamed footer-nav vocabulary on `/about` and `/ratchet` to match `nav-rationalization-v1` header-nav (Lambda (Λ) Watch with two-span markup, Published Standards, reorder). Renamed homepage `Go deeper` card-grid headings (Λ Standings → Lambda (Λ) Watch, Open Standards → Published Standards). Two `nav-rationalization-v1` inheritance items resolved (footer-nav vocabulary, homepage card-grid vocabulary). HANDOFF at `sprints/coherence-v1/HANDOFF.md`.

### `discoverability-v1` (closed 2026-05-14)
Six commits. Shipped `robots.txt` with AI crawler welcome blocks, `sitemap.xml` (21 URLs), `/.well-known/grove-standards.json` corpus manifest, substantive `llms.txt` refresh. HANDOFF at `sprints/discoverability-v1/HANDOFF.md`. Operator next-step: Google Search Console setup (operator-handled).

### `nav-rationalization-v1` (closed 2026-05-14)
Six commits. Renamed *Standings* → *Lambda (Λ) Watch* and *Open Standards* → *Published Standards* across header navigation on 21 production files. Updated `/lambda` page H1, title, meta, OG tags. Refreshed homepage Standings section copy. Refreshed `SITE-IA.md`. Footer-nav and card-grid intentionally deferred to `coherence-v1`. HANDOFF at `sprints/nav-rationalization-v1/HANDOFF.md`.

---

## Conventions

**Sprint naming.** Functional name + `-v1` suffix. Bumps to `-v2` only for revisits of the same scope; new related work gets a new sprint name. Example: `coherence-v1` is this sprint; if a future sprint addresses different coherence issues, it gets a new name (e.g., `voice-coherence-v1`).

**Sprint sizing heuristic.**
- Tight: 2–4 touches, mechanical, single session
- Medium: 4–6 touches, some judgment work, single session possible
- Large: 6+ touches or per-item judgment, may split or stage

**Backlog update discipline.** Operator + Claude update at sprint close. CC reads this file in pre-flight when scoping a new sprint; never updates unless explicitly directed.

---

*CC BY 4.0 · The Grove Foundation · Indianapolis · 2026-05-14*
