# Grove Launch Site — Session Continuation

## Open threads carried forward

- **Trellis fast-follow piece** — pending NotebookLM steered read + Clement brief. Sequencing is: steered read through NotebookLM first, then the brief to Clement; piece drafts off both.
- **GRV-003 v1.0 naive-URL QA results** — pending. Live at `the-grove.ai/standards/003`. Awaiting results of a naive-URL pass (fresh browser, no context, click/scroll/read the whole thing) to surface anything the architectural edits missed.
- **NEXT-SESSION-PROMPT.md hygiene** — body section still references v0.8 / unresolved continuation items that are now shipped at v1.0. Cleanup pass needed: rewrite the most-recent-session block to reflect v1.0 ship state and clear resolved items from the outstanding list.

---

## Most recent session (April 19, 2026) — GRV-003 v0.8 polish pass

### Shipped

GRV-003 is live at `the-grove.ai/standards/003`. Tonight's session shipped the AI-readability pass driven by Gemini feedback, plus a mobile fix.

- **Code-block mobile fix** — `font-size:11px` + reduced padding at 768px for the routing.config YAML in §11 (commit `ac3a72f`).
- **Item D — Architectural Guarantee box in §4** — new `.guarantee-box` component pairs each zone (Green / Yellow / Red) with its named enforcement mechanism (prior approval / pipeline halt / OS permission level). Amber-bordered, mono-headed, sits between the zone model paragraph and the "Stage 4 is always human" subhead (commit `ac3a72f`).
- **Item B — Tier numerals + Data Residency Invariant in §7** — six tier subheads now prepend `Tier N · ` with Sovereign deterministic = Tier 0 counting up to Commercial apex = Tier 5. Numbering encodes the ratchet direction (lower number = higher sovereignty). New "Data Residency Invariant" paragraph at end of §7 names the residency property explicitly (commit `781b3e3`).
- **Item C — Flywheel/Atrophy inversion comparison table in §9.1** — new `.compare-table` component, five-row two-column contrast showing that both architectures capture the same artifact (authorized human judgment) and diverge on direction of flow, what compounds, effect on capability, and tradable asset class. Placed at top of §9.1 ("The Inversion") rather than top of §9 as originally spec'd, because §9's rhetorical build to the pullquote shouldn't be interrupted (commit `04f3265`).
- **Item A — Mermaid five-stage pipeline diagram in §4** — closed-loop flowchart showing Stage 1 → 2 → 3 → 4 → 5 with a dotted feedback arrow from Stage 5 back to Stage 1 labeled `memorialized judgment`. Renders via Mermaid ES module CDN, themed to match the amber/dark design tokens. Follow-up paragraph names the feedback arrow as the load-bearing property (commit `049b795`).
- **Item E — §15 lede promotion** — title changed from "The Federated Expertise Economy" to "The Federated Expertise Economy and the Provenance Arc as *Asset*". The "tradable object" sentence from §15.1 moved to top of §15 as the lede, removed from §15.1 to avoid duplication (commit `049b795`).

### Key design decisions worth remembering

- `.compare-table` was ported with fresh CSS because GRV-002's version has no custom styling. The GRV-003 version is the canonical styled version — backport to GRV-002 if Jim wants visual parity there.
- `.guarantee-box` is a new component distinct from `.pullquote`. Pullquote = italic rhetorical claim. Guarantee box = structured architectural assertion with zone rows. The two should not be conflated going forward.
- Mermaid is loaded as ES module from `cdn.jsdelivr.net` in the script block at the bottom of the body, right before the intersection-observer script. `startOnLoad: true` handles DOM-ready. Theme variables override the `base` theme to match the Grove palette.
- Tier 0 = Sovereign convention was confirmed with Jim and Erik. The Ratchet's structural direction is always toward lower tier numbers (inward, toward the learner). This is consistent with the "cloud is up" intuition Erik uses for the Ratchet visualization.

### Outstanding from the GRV-003 continuation prompt

- **Eyeball pass — still needs Jim's visual verification.** Specifically: (a) the `Tier N · ` prefix reading balanced in the serif subhead (mixing arabic numeral with em-italic concept word), (b) the `.compare-table` columns reading clearly distinct (platform dim, autonomaton normal), (c) the Mermaid diagram rendering correctly against the dark bg (watch for any Mermaid default styling bleeding through), (d) the guarantee-box rgba amber tint on §4's bg2 backdrop.
- **Footer audit** — `NEXT-SESSION-PROMPT.md` from prior sessions flagged this as outstanding site-wide. The GRV-003 footer was built to match the GRV-002 pattern (cross-link to 001 + 002, CC BY 4.0 meta line, contact, 501(c)(6) boilerplate). Spot-check confirmation needed; full site audit still queued.
- **Optional canonical PDF** — `Desktop Commander:write_pdf` from the v0.8 Markdown source to `standards/003/learner-autonomaton-v0.8.pdf`, add download link to footer download bar. Jim didn't greenlight tonight. Take-it-or-leave-it.
- **Gemini's kill-switch question** — unresolved design question worth Jim's consideration for v0.9 or a §10.6 addition: *"If you were to implement a Kill Switch for the flywheel — where a user could instantly purge the last hour of local telemetry — how would you architect that to ensure it doesn't break the long-term provenance arc required for the degree?"* The §9.7 Reversibility Property addresses preservation-as-default but doesn't specifically answer the partial-purge case. Recommend surfacing as a candidate v0.9 edit, not adding to v0.8 without Jim's greenlight.

### Commits landed in this session

| Commit | Description |
|---|---|
| `ac3a72f` | Code-block mobile fix + Item D (guarantee box) |
| `781b3e3` | Item B (tier numerals + data residency invariant) |
| `04f3265` | Item C (Flywheel/Atrophy comparison table) |
| `049b795` | Items A + E (Mermaid pipeline + §15 Provenance Arc lede) |

All four commits pushed to `origin/master`. All four Vercel deploys completed successfully.

---

## Prior-sessions content below — may be stale

The content below was written before GRV-003 was built. Several queued items (the /about page, email opt-in component, some footer work) have since been completed and integrated into the live site. Triage against current reality before acting on anything below.

---

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
