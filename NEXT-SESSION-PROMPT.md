# Grove Launch Site — Session Continuation

## What happened last session

Three major deliverables across two commits plus nav cleanup:

### 1. Telemetry Trap white paper page (`/papers/telemetry-trap`) — COMPLETE
Full seven-section long-scroller built from Jim's white paper docx:
- **Hero** with subtitle, download link, CC BY 4.0
- **I. The Conway Signal** — leak context, five-move platform strategy grid, .cnw.zip paradox. Canonical link to VentureBeat coverage added.
- **II. The Telemetry Trap** — Three Layers of Lock-In (layer stack visual with green/yellow/red), compounding problem, CIO Warning banner (amber warning-banner component)
- **III. The Structural Alternative** — Independent Lineage provenance callout (green warning-banner, "March 31, 2026"), five-stage pipeline visualization, 8-row Conway vs Autonomaton comparison grid (compare-row with dim/bad/good columns), Sovereignty Architecture (three properties)
- **IV. The Procurement Gap** — Contract gap table (layer-card components), Timeline Pressure
- **V. The Structural Intervention** — Six demand cards (demand-card components with numbered sidebar)
- **VI. The Precedent** — TCP/IP, Linux Foundation parallel, Regulatory Reframe
- **VII. The Window** — Closing argument, "three files and a loop" callback
- Footer with PDF/DOCX download bar, CC BY 4.0, contact
- Provenance sentence updated per Jim's edit: "...and CIOs needed to be aware of the telemetry trap they're negotiating themselves into."

### 2. Nav cleanup — ALL PAGES
- Logo (`The Grove Foundation`) now a clickable `<a>` link to `/` across all four pages (was non-clickable `<div>`)
- Added `text-decoration:none` to `.nav-logo` CSS
- Added "Papers" nav link pointing to `/papers/telemetry-trap` across all pages
- Nav order: Thesis · Observations · Standings · Open Standards · Papers · Playground ↗ · About
- Active states set correctly per page

### 3. `/standards/001` — The Autonomaton Pattern (WIP, Sections I–V complete)
The anchor asset. Long-scroller HTML page in Grove design system. Five of eight sections built:
- **Hero** — "The Autonomaton Pattern: Toward Self-Authoring Software Systems", GRV-001, CC BY 4.0
- **I. The Problem** — Reactive assistant paradigm (no learning, no governance, no sovereignty)
- **II. The Lineage** — PC revolution insight + four CS theory cards (Autonomic Computing, Computational Reflection, Digital Jidoka, Telemetry-Driven Development)
- **III. The Pattern** — Five-stage invariant pipeline visualization + Cognitive Router with T0–T3 tier cards showing cost gradient and downward migration
- **IV. The Principles** — Four DEX pillars as principle cards (Declarative Sovereignty, Capability Agnosticism, Provenance as Infrastructure, Human-AI Symbiosis) each with "The test:" criteria
- **V. The Zone Model** — Three-zone grid (Green/Yellow/Red) with color-coded top borders and governance descriptions

### Docs directory created
- `docs/the-telemetry-trap-grove-white-paper.pdf` — condensed PDF version
- `docs/the-telemetry-trap-grove-white-paper.docx` — STUB, needs to be replaced with Jim's formatted version from uploads

## What needs to happen next session

### 1. PRIORITY: Finish `/standards/001` — Sections VI–VIII + footer

The page is at `C:\GitHub\grove-launch-site\standards\001\index.html` (~230 lines so far). Three sections remain:

**VI. The Flywheel (The Skill Ratchet)**
- The self-reinforcing improvement loop: Observe → Detect pattern → Propose skill spec → Human approves → Execute autonomously → Refine through use → Deprecate when stale
- Use the `flywheel` CSS class (5-column grid, already defined in the page CSS)
- Key content from source materials: "The LLM is the brain; keywords are the bootstrap cache." Confirmed patterns migrate from T3→T0. Every skill is a readable specification, not an opaque weight adjustment. Delete a skill and the behavior stops.
- Include the Ratchet metaphor: skills only move in one direction (toward cheaper execution) unless explicitly reset by the operator

**VII. Reference Schemas**
- JSON examples for: telemetry entry, intent classification, skill specification, routing config
- Use the `schema-block` CSS class (already defined — dark bg, mono font, pre-formatted)
- Source: Pattern Draft 1.3, Trellis Architecture docs, grove-architecture-map-v1.md
- These should be illustrative, not exhaustive — show enough structure that a developer says "I could implement this"

**VIII. Implications**
- Governance by architecture (not policy)
- Auditability as byproduct (not feature)
- Sovereign computing (operator owns telemetry, config, skills)
- The three-act vision tease: Autonomaton (individual) → Trellis/DEX (domain) → Knowledge Commons (network) — "the transistor, the integrated circuit, the network"
- Close with the distillery metaphor: "Four companies are spending $650 billion to build nuclear reactors so they can boil water. The Autonomaton Pattern is the still."

**Footer**
- Download bar (link to future PDF when ready)
- CC BY 4.0 license notice
- Contact: jim@the-grove.ai
- IntersectionObserver reveal script (same pattern as telemetry-trap page)

### 2. Replace docs/docx with formatted version
Jim uploaded an updated version of the Telemetry Trap white paper during last session. The docx in `docs/` is an auto-generated stub. Jim needs to manually copy his formatted version to `C:\GitHub\grove-launch-site\docs\the-telemetry-trap-grove-white-paper.docx` (the upload was at `/mnt/user-data/uploads/the-telemetry-trap-grove-white-paper__1_.docx` which can't be bridged to Windows filesystem from the container).

### 3. Open tasks from prior session (capture to Notion when time permits)
- Bluesky vs. Threads V2 recalculation — research item
- Gemma 4 scoring — breakout as separate pattern when data ready
- Observations page scorecard duplication — decide whether 83/17 teaser stays now that Standings has full Structural Share section

### 4. `/about` page
Nav link exists but 404s. Content: 501(c)(6) status, mission, three-act vision, advisors (Clement Mok confirmed), location (Indianapolis). Institutional credibility page, not marketing.

## Key files and locations
* Repo: `C:\GitHub\grove-launch-site\`
* Standards page WIP: `C:\GitHub\grove-launch-site\standards\001\index.html`
* Telemetry Trap page: `C:\GitHub\grove-launch-site\papers\telemetry-trap\index.html`
* Vercel project: `grove-launch-site` (prj_FpKHXIO5VoGGN5ieWMvMeXJ9yh7N)
* Deploy command: `cd /d C:\GitHub\grove-launch-site && vercel --prod --yes`
* Commit pattern: write `do-commit.bat` then run it
* Git operations: use `cmd` shell with `cd /d` flag
* Python: `C:\Python313\python.exe` with `PYTHONIOENCODING=utf-8`

## Source materials for remaining sections
* Architecture map: `/mnt/project/grove-architecture-map-v1.md` (distillery metaphor, three-act vision, network economics)
* Trellis kernel codex: `/mnt/project/260119-s-architecture-trellis-architecture-kernel-codex_md--FINAL.md` (DEX schemas, insight lifecycle)
* Distillation metaphor: `/mnt/project/grove-distillation-metaphor.md` (pipeline-to-distillery mapping)
* Autonomaton deck: `/mnt/project/autonomaton-intro-deck.html` or `/mnt/project/grove-autonomaton-deck.html`

## CSS classes already defined in standards/001/index.html
All component CSS is pre-built in the page — no new styles needed for remaining sections:
- `flywheel` / `fly-step` / `fly-num` / `fly-name` / `fly-desc` — 5-column grid for flywheel steps
- `schema-block` / `schema-label` — dark code blocks for JSON schemas
- `principle-grid` / `principle-card` — numbered card layout (reusable for implications)
- `download-bar` / `download-meta` — footer download links
- `pullquote` — amber-bordered quote blocks
- `reveal` — scroll-triggered fade-in animation (needs IntersectionObserver script in footer)

## Design system reference
* Background: `#080808`, grid texture overlay
* Amber: `#D4621A` / `#F07030` / `#8B3D10`
* Fonts: Fragment Mono (mono), Instrument Serif (serif), DM Sans (sans)
* Nav: fixed, 56px, blurred background, Fragment Mono 10px uppercase
* Active nav link: amber color + amber bottom border

## Authoritative data sources
* **Λ scores:** Recalculation Doc `173S3JW6MoiLepP0fkZlu_LzbRYFxFeTolOKkhs127gU` (Phase 1 Tab 1)
* **Methodology:** Research Doc `1Dq2IaL8LQZpuxNpisTesn5xheaAxMiKWqGXxEp65mxc`
