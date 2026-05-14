# Grove Foundation — Public Launch Site
## Information Architecture
**Last updated:** May 14, 2026
**Target audience:** Lumina Foundation (Jamie Merisotis), Humanity AI / Pierre Omidyar Foundation, institutional funders, technical reviewers, CIOs, press
**Domain:** the-grove.ai

---

## Site Structure

### Page 1: Home — "Infrastructure Makes Policy Real"
- Plain-English human-stakes framing (no RLHF, no tokens, no jailbreak mechanics)
- Four paragraphs: AI as extended cognition → concentration risk → intention vs reality → market demand
- "We publish that architecture as open standards" section
- Breaker box analogy (works without technical prerequisites)
- "Go deeper" card grid linking to The Architectural Gap, The Telemetry Trap, Λ Standings, Open Standards, Observations, About
- Subscribe footer with Formspree integration
- Scroll cue arrow on hero

### Page 2: CIO Alerts (/alerts/) — Deep Arguments
- Index page listing all papers, most recent first
- Each entry: tag, date, title, one-paragraph description
- Currently six papers:
  - **Ground the Circuit, Shape the Current** (April 22, 2026) — autonomic composition mechanics, first alert-class GRV-004 implementation
  - **Architecture and Accountability** (April 22, 2026) — how sovereign AI satisfies SR 11-7, FFIEC, OCC
  - **Sovereignty Is All You Need** (April 20, 2026) — response to Ramaswamy/Perault (WSJ); the missing architectural primitive
  - **The Telemetry Trap** (April 2026) — vendor telemetry lock-in
  - **The AI Market Runs on Subsidy, Not Structure** (March 2026) — quarterly Λ benchmark, eight patterns scored
  - **The Architectural Gap** (March 2026) — full technical thesis (former homepage content)

### Page 3: Lambda (Λ) Watch (/lambda/) — Standings of AI architectural patterns
- Live structural-viability scores (Λ = (S × R × V) / (1 + (β · Fc)²)) for eight AI deployment patterns
- Methodology summary (linear S/R/V multipliers, squared-denominator Fc/β resistors)
- Tier thresholds (Structurally Inert / Sub-Critical / Approaching Critical / Critical Mass)
- Conflict-of-interest disclosure (Grove scores own pattern at the floor)
- Subscribe footer

### Page 4: Published Standards (/standards/) — Open architectural specifications
- Standards publication page (IETF/W3C aesthetic, not product launch)
- 001: Autonomaton Pattern — five-stage pipeline, zone model, Cognitive Router, Skill Flywheel
- 002: TCP/IP for the Cognitive Layer — architectural theory paper, thin-waist invariant
- 003: The Learner Autonomaton — lifelong cognitive router in a composable university
- 004: The Autonomaton Protocol — sovereign Declaration for the polarity-compliant internet
- CC BY 4.0 license; conformance is architectural, not technological
- Subscribe footer

### Page 5: Observations (/observations/) — Reactive Commentary
- G7 divergence argument, structural share scoreboard
- 150-node distributed vs centralized visualization (interactive)
- Epistemic capture argument
- Subscribe footer

### Page 6: About (/about/) — "What We Are"
- Standards body modeled after the Linux Foundation
- Mission: open, inspectable, capture-resistant architecture
- Three-act roadmap sketch (Autonomaton → Trellis → Knowledge Commons)
- Autonomaton self-assessment checklist
- Subscribe footer

### Page 7: Ratchet Test (/ratchet/) — Diagnostic instrument
- Interactive diagnostic measuring whether an enterprise's AI architecture accumulates sovereign capability or deepens vendor dependency
- Single-page application: intro → questions → scored result
- Mobile-first UX; no login required
- Subscribe footer

### Page 8: Membership (/membership/) — Inquiry surface
- 501(c)(6) standards body membership inquiry form
- Two tracks: Alliance Members (software companies, research institutions, practitioners) and Research Members (investment firms, allocators, strategy teams)
- Linux Foundation / S&P Global model split; methodology stays independent from member influence on scores
- Subscribe footer

### Page 9: Run the Pattern (https://the-grove.ai/autonomaton) — Playground
- Live, hosted Autonomaton implementation running the GRV-001 pattern
- Demonstrates the five-stage pipeline, Zone Model, and provenance arc in operation
- External link from nav (target="_blank"); not part of the main site index

---

## Design System
- Background: #080808
- Amber: #D4621A / #F07030
- Typography: Fragment Mono / Instrument Serif / DM Sans
- Grid texture overlay (40px, 0.15-0.2 opacity)

## Navigation
- Top nav: Ratchet Test | Lambda (Λ) Watch | CIO Alerts | Published Standards | Observations | Membership | About | Run the Pattern ↗
- Footer nav: (deferred to discoverability-v1; current state varies per page)
- Subscribe block in all footers ("Follow the pattern")

## What's NOT on the site
- Atlas source code
- Fundraising language or venture fund structure
- Anything that smells like a pitch
- Startup energy
- Technical jargon on the landing page

## Key Design Decisions
1. Landing page speaks plain English — technical depth lives in CIO Alerts
2. Former thesis content rehomed as "The Architectural Gap" paper
3. CIO Alerts section replaces "Thesis" nav link — positions content as executive-relevant
4. All pages include subscribe footer with Formspree
5. Pattern document lives as designed HTML + PDF under /standards/
6. Lambda standings feel like live research, not static content

---

**2026-05-14 — IA rationalized in `nav-rationalization-v1`.** Resolved the Standings/Open Standards label collision by promoting Λ to nav-visible brand (Lambda (Λ) Watch) and dropping the redundant *Open* modifier (Published Standards). Reordered nav by visitor action-density. Run the Pattern moved to terminal CTA position. Footer-nav standardization, sitemap creation, Search Console submission, and llms.txt protocol refresh deferred to `discoverability-v1` follow-up sprint.
