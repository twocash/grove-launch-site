# Grove Foundation — Public Launch Site
## Information Architecture
**Last updated:** April 8, 2026
**Target audience:** Lumina Foundation (Jamie Merisotis), Humanity AI / Pierre Omidyar Foundation, institutional funders, technical reviewers, CIOs, press
**Domain:** the-grove.ai

---

## Site Structure

### Page 1: Home — "Infrastructure Makes Policy Real"
- Plain-English human-stakes framing (no RLHF, no tokens, no jailbreak mechanics)
- Four paragraphs: AI as extended cognition → concentration risk → intention vs reality → market demand
- "We publish that architecture as open standards" section
- Breaker box analogy (works without technical prerequisites)
- "Go deeper" card grid linking to CIO Alerts, Standings, Standards, Observations, About
- Subscribe footer with Formspree integration
- Scroll cue arrow on hero

### Page 2: CIO Alerts (/papers/) — Deep Arguments
- Index page listing all papers, most recent first
- Each entry: tag, date, title, one-paragraph description
- Currently two papers:
  - **The Telemetry Trap** (April 2026, CIO Alert) — vendor telemetry lock-in
  - **The Architectural Gap** (March 2026, CIO Alert) — full technical thesis (former homepage content)

### Page 3: The Λ Landscape (/lambda/) — "Measuring What Nobody Else Measures"
- Live Lambda standings (updated with Gemma 4 when available)
- Methodology summary (power law, geometric mean β, V multiplier)
- Conflict of interest disclosure (Grove scores own pattern lowest)
- Subscribe footer

### Page 4: Open Standards (/standards/) — Standards Publications
- Standards publication page (IETF/W3C aesthetic, not product launch)
- 001: Autonomaton Pattern — five-stage pipeline, zone model, ratchet mechanism
- 002: [future standard]
- CC BY 4.0 license, full spec as designed HTML + PDF download
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

---

## Design System
- Background: #080808
- Amber: #D4621A / #F07030
- Typography: Fragment Mono / Instrument Serif / DM Sans
- Grid texture overlay (40px, 0.15-0.2 opacity)

## Navigation
- Top nav: CIO Alerts | Observations | Standings | Open Standards | Playground ↗ | About
- Footer nav: CIO Alerts | Observations | Standings | Open Standards | About
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
