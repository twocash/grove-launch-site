# Grove Launch Site — Session Continuation

## What happened last session

### `/standards/001` — The Autonomaton Pattern — COMPLETE
All eight sections plus footer shipped and deployed (commit b8a942a):

- **I. The Problem** — Reactive assistant paradigm critique
- **II. The Lineage** — PC revolution + four CS theory cards
- **III. The Pattern** — Five-stage pipeline + Cognitive Router + T0–T3 tiers
- **IV. The Principles** — Four DEX pillars with "The test:" criteria
- **V. The Zone Model** — Green/Yellow/Red governance grid
- **VI. The Flywheel** — Five-step ratchet grid (Observe → Detect → Propose → Approve → Execute), downward migration callout
- **VII. Reference Schemas** — Four JSON blocks (Telemetry Entry, Intent Classification, Skill Specification, Routing Configuration)
- **VIII. Implications** — Governance by Architecture, Auditability as Byproduct, Sovereign Computing, three-act vision tease, distillery closing pullquote
- **Footer** — PDF download bar (link to future PDF), CC BY 4.0, contact, IntersectionObserver reveal script

### Nav-logo underline fix — ALL PAGES
Fixed missing `text-decoration:none` on `.nav-logo` CSS in papers/telemetry-trap and lambda pages. Logo no longer underlines anywhere.

## What needs to happen next session

### 1. Generate PDF of the Autonomaton Pattern
The download bar on `/standards/001` links to `/docs/the-autonomaton-pattern-grv-001.pdf` which doesn't exist yet. Need to produce a clean PDF version of the pattern document.

### 2. `/about` page
Nav link exists but 404s. Content: 501(c)(6) status, mission, three-act vision, advisors (Clement Mok confirmed), location (Indianapolis). Institutional credibility page, not marketing.

### 3. Replace docs/docx with formatted version
The docx in `docs/` for the Telemetry Trap is an auto-generated stub. Jim needs to manually copy his formatted version to `C:\GitHub\grove-launch-site\docs\the-telemetry-trap-grove-white-paper.docx`.

### 4. Open tasks from prior sessions
- Bluesky vs. Threads V2 recalculation — research item
- Gemma 4 scoring — breakout as separate pattern when data ready
- Observations page scorecard duplication — decide whether 83/17 teaser stays now that Standings has full Structural Share section

## Key files and locations
* Repo: `C:\GitHub\grove-launch-site\`
* Standards page (COMPLETE): `C:\GitHub\grove-launch-site\standards\001\index.html`
* Telemetry Trap page: `C:\GitHub\grove-launch-site\papers\telemetry-trap\index.html`
* Vercel project: `grove-launch-site` (prj_FpKHXIO5VoGGN5ieWMvMeXJ9yh7N)
* Deploy command: `cd /d C:\GitHub\grove-launch-site && vercel --prod --yes`
* Commit pattern: write `do-commit.bat` then run it
* Git operations: use `cmd` shell with `cd /d` flag
* Python: `C:\Python313\python.exe` with `PYTHONIOENCODING=utf-8`

## Source materials for reference
* Architecture map: `/mnt/project/grove-architecture-map-v1.md`
* Trellis kernel codex: `/mnt/project/260119-s-architecture-trellis-architecture-kernel-codex_md--FINAL.md`
* Distillation metaphor: `/mnt/project/grove-distillation-metaphor.md`

## Design system reference
* Background: `#080808`, grid texture overlay
* Amber: `#D4621A` / `#F07030` / `#8B3D10`
* Fonts: Fragment Mono (mono), Instrument Serif (serif), DM Sans (sans)
* Nav: fixed, 56px, blurred background, Fragment Mono 10px uppercase
* Active nav link: amber color + amber bottom border

## Authoritative data sources
* **Λ scores:** Recalculation Doc `173S3JW6MoiLepP0fkZlu_LzbRYFxFeTolOKkhs127gU` (Phase 1 Tab 1)
* **Methodology:** Research Doc `1Dq2IaL8LQZpuxNpisTesn5xheaAxMiKWqGXxEp65mxc`
