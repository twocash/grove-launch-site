# Grove Launch Site — Session Continuation

## What happened last session

We expanded the Standings page (`/lambda`) from a basic scoreboard into the definitive Λ methodology page. Seven commits across the session:

### Nav & cleanup
* Unified nav across all three pages: Thesis · Observations · Standings · Open Standards · Playground ↗ · About
* Removed dead scoreboard JS from `/observations` (data array, renderBoard, stoggle — all orphaned after the scoreboard HTML was removed in a prior session)
* Deleted build artifacts: `old-index-backup.html`, `trim_obs.py`, `build_lambda.py`, `landscape_extract.html`

### Standings page expansion (`/lambda`)
Added six new sections to transform a scoreboard into the full methodology page:
1. **Structural Share** — Full-width 83%/17% sovereign vs. concentrated panel with bar chart
2. **Dependency vs. Sovereignty profiles** — Renamed to "Centralized, API-First Architectures & Platform Bundles" vs. "Open Weight Models & Sovereign Architectures" (includes Apple Intelligence, ready for Gemma 4 breakout in Q2)
3. **Historical Calibrations** — TCP/IP, Bitcoin, ISO Container, U.S. Metric System validation table
4. **Enhanced Formula + Core Asymmetry** — Variable cards with Linear/Denominator badges, plus the "reduce friction by half, adoption quadruples" insight
5. **Phase States** — Headline: "Adoption is not a gradient. It's a phase transition." Four-tier diagnostic (CTAs removed — descriptive only)
6. **Methodology intro** — Grounded in Bass Diffusion, Granovetter threshold models, Arthur's increasing returns. No more "In its glory."

### Critical data fix
* **Meta Llama scores corrected** to match the Lambda 2.0 Recalculation Doc (`173S3JW6MoiLepP0fkZlu_LzbRYFxFeTolOKkhs127gU`):
  - S: 0.70 → 0.60 (S1 downgraded for EU geofencing in Llama 4 license)
  - β: 1.357 → 2.321 (β_ideo downgraded for Avocado closed-source pivot)
  - Λ: 0.0104 → 0.0031 (collapsed from Sub-Critical to Structurally Inert)
  - Rank: #2 → #4 (now below Apple Intelligence and Anthropic Claude)
* Removed unverified falsifiable prediction (was deck language from preview hub, not from methodology docs)
* Authoritative scoring source: Recalculation Doc Phase 1 Tab 1

### Home page
* Added navigation paragraph to identity block linking to Observations, Standings, and Autonomaton Playground with the "dependency ratchet" framing

## What needs to happen next session

### 1. GitHub repo
Pushed to `understory-ip/grove-launch-site` (the formal IP-holding entity, to be assigned to the Grove Foundation once founded). Remote: `https://github.com/understory-ip/grove-launch-site.git`

### 2. Build `/standards/001` — The Autonomaton Pattern publication
This is the "school of thought" document — the anchor asset of the entire GTM plan. Nav link already exists but currently 404s.
* Structure from project instructions: Problem → Lineage → Pattern (5-stage pipeline) → Principles (DEX pillars) → Reference Schemas → Zone Model → Flywheel → Implications
* Format: Long-scroller HTML page in Grove design system, not a PDF
* Quality gate: CTO, mid-career dev, and product leader each find something that changes how they think
* License: CC BY 4.0
* Source material: Pattern Document Draft 1.3 (PDF in project files), preview hub autonomaton deck, Trellis Architecture docs in project files

### 3. Build `/about` — Foundation page
Nav link exists but currently 404s.
* Content: 501(c)(6) status, mission, three-act vision (Autonomaton → DEX/Trellis → Knowledge Commons), advisors (Clement Mok confirmed), location (Indianapolis)
* Keep it tight — institutional credibility page, not a marketing page

### 4. Open task: Revisit Bluesky vs. Threads historical calibration
The V1 methodology included Bluesky vs. Threads as a calibration case. Needs to be recalculated under V2 power law decay formula and geometric mean β. This is a separate task from the site build — capture it in Notion as a research item.

### 5. Open task: Gemma 4 scoring
Google announced serious progress on open weights. When ready, break out as a separate pattern in the scoreboard. The profile taxonomy is already set up to accommodate it under "Open Weight Models & Sovereign Architectures."

### 6. Λ Scoreboard data on Observations page
The observations page still has the floating scorecard panel (83/17 sovereign vs concentrated) but now that Standings has a full Structural Share section, consider whether to keep it on observations or remove it to avoid duplication. The scorecard was designed as a teaser — now that the full page exists, it may be redundant.

## Key files and locations
* Repo: `C:\GitHub\grove-launch-site\`
* Vercel project: `grove-launch-site` (prj_FpKHXIO5VoGGN5ieWMvMeXJ9yh7N)
* Vercel team: `team_odJBQTq9WJT64ceCXCYei9gl`
* Deploy command: `cd /d C:\GitHub\grove-launch-site && vercel --prod --yes`
* Commit pattern: write `do-commit.bat` then run it (CMD can't handle spaces in commit messages)
* Git operations: use `cmd` shell with `cd /d` flag
* Python: `C:\Python313\python.exe` with `PYTHONIOENCODING=utf-8`
* The `/autonomaton` route is a Vercel rewrite in `vercel.json` — DO NOT TOUCH the `grove-autonomaton-pattern` repo or project

## Authoritative data sources
* **Λ scores:** Recalculation Doc `173S3JW6MoiLepP0fkZlu_LzbRYFxFeTolOKkhs127gU` (Phase 1 Tab 1)
* **Methodology:** Research Doc `1Dq2IaL8LQZpuxNpisTesn5xheaAxMiKWqGXxEp65mxc`
* **Preview hub decks** (password-protected reference, not public): `C:\GitHub\grove-preview-hub\decks\`

## Design system reference
* Background: `#080808`, grid texture overlay
* Amber: `#D4621A` / `#F07030` / `#8B3D10`
* Fonts: Fragment Mono (mono), Instrument Serif (serif), DM Sans (sans)
* Nav: fixed, 56px, blurred background, Fragment Mono 10px uppercase
* Active nav link: amber color + amber bottom border
