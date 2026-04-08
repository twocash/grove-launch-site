# Grove Launch Site — Session Continuation

## What happened last session

### `/standards/001` — The Autonomaton Pattern — COMPLETE
All eight sections plus footer shipped (commit b8a942a). Full long-scroller: Problem, Lineage, Pattern (pipeline + Cognitive Router + tiers), Principles (4 DEX pillars), Zone Model, Flywheel, Reference Schemas (4 JSON blocks), Implications (governance by architecture, auditability as byproduct, sovereign computing, three-act vision tease, distillery closing).

### `/standards/002` — TCP/IP for the Cognitive Layer — COMPLETE
Nine-section long-scroller built from Jim's Google Doc (commit d1e9a00). The Missing Protocol, Six TCP/IP Principles (card grid), Same Principles Cognitive Domain (six subsection mappings), Composition Primitives (six cards), The Reverse Tax, The Governance Innovation, Structural Correspondence (7-row comparison table), Implications & Open Questions, Conclusion with 12-item references list.

### `/standards/` — Index Page — COMPLETE
Standards landing page with two numbered cards (GRV-001 and GRV-002). Nav link "Open Standards" updated across ALL pages to point to `/standards` instead of `/standards/001` (commit 4b72509).

### Nav-logo underline fix — ALL PAGES
Fixed missing `text-decoration:none` on `.nav-logo` CSS in papers/telemetry-trap and lambda pages.

---

## What needs to happen this session

### 1. PRIORITY: Build `/about` page

Nav link exists but 404s. This is the institutional credibility page — NOT marketing, NOT a pitch.

**Content per SITE-IA.md (Page 4: "What We Are"):**
- Standards body modeled after the Linux Foundation
- Mission: open, inspectable, capture-resistant architecture for cognitive sovereignty
- 501(c)(6) status (target, not yet filed — frame as "organized as" or "structured as")
- Three-act roadmap sketch:
  - Act I: The Autonomaton (individual cognitive sovereignty) — link to /standards/001
  - Act II: The Trellis (domain-scale knowledge architecture) — coming soon
  - Act III: The Knowledge Commons (distributed cognitive economy) — coming soon
- Advisors section: Clement Mok (confirmed). Keep space for others. Do NOT list names that aren't confirmed.
- Location: Indianapolis, Indiana
- Contact: jim@the-grove.ai
- Tone: institutional, quiet confidence, zero startup energy. Think Linux Foundation or W3C "About" page.

**Design:** Same Grove design system. Not a long-scroller like the standards pages — this should be compact, maybe 2-3 screen-lengths max. Use the existing component CSS patterns (principle-cards for the three acts, section-inner for prose).

### 2. Footer Consistency Audit & Standardization

Current footer situation is inconsistent across pages:

**Pages WITH proper footers (CC BY 4.0 + contact + copyright):**
- `/standards/001` — download bar + CC BY 4.0 + Jim contact + copyright
- `/standards/002` — cross-link to 001 + CC BY 4.0 + Jim contact + copyright
- `/standards/` — CC BY 4.0 sentence + copyright line (minimal)

**Pages likely WITHOUT standardized footers (need audit):**
- `/` (root/thesis)
- `/observations`
- `/lambda` (standings)
- `/papers/telemetry-trap`

**Target standard footer component** (apply to ALL pages):
```
┌─────────────────────────────────────────────────────┐
│  [Email opt-in component — see task #3 below]       │
├─────────────────────────────────────────────────────┤
│  The Grove Foundation · Indianapolis                │
│  jim@the-grove.ai                                   │
│  CC BY 4.0 · © 2026 The Grove Foundation            │
│                                                     │
│  Thesis · Standards · Papers · About                │
│  (footer nav links, Fragment Mono, 10px)            │
└─────────────────────────────────────────────────────┘
```

Audit each page's current footer, then replace with the standard component. The standards pages (001, 002) keep their document-specific download bars ABOVE the standard footer.

### 3. Email Opt-In Component

Simple email capture — not a newsletter signup, not a product launch. Frame as:
- "Follow the pattern" or "Watch the standard" — language that fits a standards body
- Single email field + submit button
- No name, no company, no fields beyond email
- Store submissions somewhere Jim can access (options: Notion database, Google Form backend, or simple mailto: link as MVP)
- Design: amber-bordered component, Fragment Mono label, minimal. Should feel institutional, not SaaS.
- Placement: appears in the standard footer on every page, above the contact/copyright block
- Also consider a more prominent placement on the `/standards/` index page (inline, after the two cards)

**Decision needed from Jim:** What backend for email capture? Options:
1. **Google Form embed** — zero code, Jim gets a spreadsheet, ugly but functional
2. **Notion database via API** — on-brand, but requires a small serverless function
3. **Mailto link** — simplest possible, but no list building
4. **Buttondown / beehiiv** — newsletter service, free tier, handles subscribe/unsubscribe compliance
5. **Static form service** (Formspree, Getform) — free tier, email forwarded to Jim, no list management

Recommend: Buttondown or Formspree as MVP. Both have free tiers, both work with a static HTML form, no serverless function needed.

### 4. Open items from prior sessions
- Generate PDF of the Autonomaton Pattern for `/docs/the-autonomaton-pattern-grv-001.pdf` (download bar link currently 404s)
- Replace `docs/the-telemetry-trap-grove-white-paper.docx` stub with Jim's formatted version
- Bluesky vs. Threads V2 recalculation
- Gemma 4 scoring
- Observations page scorecard duplication decision

---

## Key files and locations
* Repo: `C:\GitHub\grove-launch-site\`
* About page (TO BUILD): `C:\GitHub\grove-launch-site\about\index.html`
* Standards index: `C:\GitHub\grove-launch-site\standards\index.html`
* Standards 001: `C:\GitHub\grove-launch-site\standards\001\index.html`
* Standards 002: `C:\GitHub\grove-launch-site\standards\002\index.html`
* Telemetry Trap: `C:\GitHub\grove-launch-site\papers\telemetry-trap\index.html`
* Root/Thesis: `C:\GitHub\grove-launch-site\index.html`
* Observations: `C:\GitHub\grove-launch-site\observations\index.html`
* Lambda/Standings: `C:\GitHub\grove-launch-site\lambda\index.html`
* Site IA doc: `C:\GitHub\grove-launch-site\SITE-IA.md`
* Vercel project: `grove-launch-site` (prj_FpKHXIO5VoGGN5ieWMvMeXJ9yh7N)
* Deploy: `cd /d C:\GitHub\grove-launch-site && vercel --prod --yes`
* Commit pattern: write `do-commit.bat` then run it
* Git: use `cmd` shell with `cd /d` flag

## Design system reference
* Background: `#080808`, grid texture overlay
* Amber: `#D4621A` / `#F07030` / `#8B3D10`
* Fonts: Fragment Mono (mono), Instrument Serif (serif), DM Sans (sans)
* Nav: fixed, 56px, blurred bg, Fragment Mono 10px uppercase, `text-decoration:none` on nav-logo
* Active nav link: amber color + amber bottom border
* Standard components: principle-card, pullquote, divider, eyebrow, section-num, download-bar

## Current nav order (all pages)
Thesis · Observations · Standings · Open Standards · Papers · Playground ↗ · About

## Authoritative data sources
* Λ scores: Recalculation Doc `173S3JW6MoiLepP0fkZlu_LzbRYFxFeTolOKkhs127gU`
* Methodology: Research Doc `1Dq2IaL8LQZpuxNpisTesn5xheaAxMiKWqGXxEp65mxc`
