# Grove Launch Site — Session State
## Saved: April 7, 2026

---

## WHAT EXISTS

### Directory: C:\GitHub\grove-launch-site\
```
grove-launch-site/
├── index.html                          ← FULL SITE (639 lines, all 6 sections, content complete)
├── SITE-IA.md                          ← Information architecture document
├── content/
│   ├── beat-1-architecture-is-the-policy.md   ← Beat 1 copy with sources
│   ├── g7-reference-table.html                ← Standalone G7 research artifact
│   ├── lambda-page-strategy.md                ← Strategic thinking (decisions resolved)
│   ├── lambda-scoreboard.html                 ← Standalone interactive scoreboard
│   ├── observations-visualization.html        ← Updated node viz (from preview hub + edits)
│   └── observations.html                      ← (may be duplicate, check)
└── research/
    ├── g7-ai-divergence.md                    ← Country-by-country G7 research + quotes
    └── stargate-abilene.md                    ← Stargate failure timeline + facts
```

### Archived (DO NOT MODIFY): C:\GitHub\grove-preview-hub\
The existing confidential preview site. Reverted to clean git state after accidental edits.
Contains the original deck designs that are the QUALITY BAR for the new site.
Key reference decks: autonomaton-reveal-v2.html, architecture.html, lambda.html, thesis.html

---

## CONTENT STATUS — ALL LOCKED

All six sections have final content. The writing is done. What follows is purely a DESIGN session.

### Section 1: "The architecture is the policy"
- G7 divergence (6 of 7 building sovereign, US consolidating)
- Centralized = bad CS (latency, SPOF, no auditability, vendor dependency)
- OpenAI GPT-4o deprecation as concrete vendor dependency example
- Stargate Abilene failure (physics, financing, grid politics)
- Telemetry signal exploitation ("the data retention policy covers the content, nobody covers the signal")

### Section 2: "The geometry of knowledge"
- Interactive 150-node sphere visualization (canvas-based JS)
- Slider: 1-150 nodes, dynamic insight text at breakpoints
- Labels updated: "Distributed AI Architecture" vs "Centralized AI Vendor"
- Sovereignty bridge annotation in stat panel
- Center label: "vendor / controls model, pricing, TOS, and deprecation"

### Section 3: "When you become the knowledge surface"
- Capture canvas (you → domain mesh vs you → vendor)
- Epistemic capture argument
- Fifth bullet added: "What your industry needs next"
- Telemetry closer: "vendor keeps the map"

### Section 4: Λ Landscape
- Interactive scoreboard (click rows to expand sub-scores + insight)
- 8 patterns ranked with directional arrows (↑↓→)
- Structural profiles: Sovereignty (green) vs Dependency (red) vs Hybrid (yellow)
- Formula display with variable strip
- Dependency/Sovereignty profiles comparison
- Integrity disclosure (Grove scores itself last)
- Timestamp: "Last scored: March 2026 · Next update: June 2026"
- Quarterly public / Monthly members (Linux Foundation model)
- Autonomaton V stays at 0.2 (publication doesn't move it)

### Section 5: The Autonomaton Pattern
- Structural absence argument (no standards body, companies not institutions)
- Five-stage pipeline visual (Telemetry → Recognition → Compilation → Approval → Execution)
- Three unlock boxes (Tiered Routing, Composability, Model Independence)
- Zone model (Green/Yellow/Red with color-coded strips)
- Ratchet + Guarantee boxes
- Insight box with lodestar quote
- Call for reviewers section

### Section 6: The Foundation
- Three-act roadmap (Autonomaton → Trellis → Knowledge Commons)
- Linux Foundation analogy
- Lodestar: "Design is philosophy expressed through constraint"

---

## WHAT NEEDS TO HAPPEN NEXT — DESIGN PASS

### The Problem (Jim's words: "the design is dogshit when slapped together like this")
The content is complete but the visual treatment is uniform — every section uses identical
containers, identical padding, identical typography rhythm. The existing decks in the preview
hub (autonomaton-reveal-v2.html, architecture.html, lambda.html) are the quality bar.
Those decks work because each slide is a self-contained designed moment with background
gradients, radial glows, different spatial compositions.

### What the Design Pass Must Do
1. HERO TREATMENT for Section 1 — full-viewport, headline as the first visual moment
2. VISUAL DIFFERENTIATION between sections — background shifts, radial glows, spatial variety
3. G7 DATA AS VISUAL ELEMENT — the reference table (g7-reference-table.html) integrated
4. STARGATE FAILURE AS DATA CALLOUT — not a paragraph, a visual moment
5. SPHERE VISUALIZATION NEEDS BREATHING ROOM — dark-on-darker, full-width canvas
6. LAMBDA SCOREBOARD is closest to working — table has structure, but methodology below is paragraph soup
7. AUTONOMATON SECTION needs the reveal deck's spatial treatment
8. CONSIDER MULTI-PAGE vs INFINITE SCROLL — Jim flagged this concern

### Design System (from preview hub)
- Background: #080808
- Amber: #D4621A / #F07030
- Green: #4CAF72
- Red: #C0392B
- Typography: Fragment Mono / Instrument Serif / DM Sans
- Grid texture overlay (40px, 0.25 opacity)
- Radial gradient glows on key sections
- Border: #252525

### Reference Files for Design Quality
Read these BEFORE designing:
- C:\GitHub\grove-preview-hub\decks\autonomaton-reveal-v2.html (best spatial composition)
- C:\GitHub\grove-preview-hub\decks\architecture.html (best variety of visual treatments)
- C:\GitHub\grove-preview-hub\decks\lambda.html (scoreboard design)
- C:\GitHub\grove-preview-hub\index.html (sphere/capture canvas rendering)
- C:\GitHub\grove-preview-hub\decks\thesis.html (hero treatment)

### Target Audience
Jamie Merisotis (Lumina Foundation), Pierre Omidyar Foundation, Humanity AI group.
Institutional funders. Technical reviewers. NOT startup investors. NOT VCs.
