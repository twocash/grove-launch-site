# Grove Launch Site — Session Continuation

## Most recent session (2026-04-20) — Hospitable Graph Sprint 1 SHIPPED on branch `hg01-foundation`

Sprint `hospitable-graph-01-foundation` executed per `sprints/hospitable-graph-01-foundation/SPEC.md` + `CONTRACT.md` + `EXECUTION_PROMPT.md`. Work lives on branch `hg01-foundation` in worktree `../grove-hg01-foundation`; not yet merged to master.

**What shipped:**

- **GRV-001 v1.1** at `standards/001/index.html` — full AI-First Publication Standard conformance: Dublin Core + citation + Open Graph + Twitter Card meta stacks; JSON-LD TechArticle with 6-entry `isBasedOn` lineage chain (Kephart/Chess, B.C. Smith, Ohno, Alexander, Cunningham/Beck, Gamma et al.), 5-entry `citation[]`, 9-entry `mentions[]`, 9-entry `hasPart` covering every section, `speakable` specification; FAQPage JSON-LD with 5 cruxes.
- **Composability as the fifth Autonomaton invariant** — Gate-1-ratified text, verbatim — shipped in §IV at anchor `#composability`. Load-bearing for Sprint 2's interlock-closure work. Principle card structure mirrors I–IV exactly.
- **22 stable semantic anchor IDs** on every major section and key subsection, including the three optional §VIII subsection IDs (`#governance-by-architecture`, `#auditability-byproduct`, `#sovereign-computing`) shipped at executor's discretion.
- **21 `<dfn>` tags** on canonical-term first mentions (hero Autonomaton + self-authoring engine, lineage card titles, principle card titles, zone labels, five-stage invariant pipeline, Cognitive Router, Skill Flywheel, DEX, Zone Model, ratchet, three-act architecture).
- **Pronunciation span** on first "Autonomaton" in hero (IPA + respelling, inline per GRV-003 precedent).
- `rel="external"` on the Creative Commons footer link.
- **`/standards/GRV-001.json`** — JSON manifest exposing the pattern as structured data. 5 invariants (with test fields), 5 pipeline stages, 3 zones, 4 tiers, three-act architecture, six-parent lineage array, version history. Linked from the HTML page via `<link rel="alternate">` and from the footer download bar.
- **`/standards/001/og.png`** — 1200×630 Grove-themed placeholder (Pillow-generated). Operator may replace with final artwork post-ship.
- **Hero meta and footer download bar** bump from v1.0 · March 2026 to v1.1 · April 20, 2026. Specific-day convention: GRV-001 v1.1 ships the same day the White House invokes DPA §303 to underwrite the centralized hyperscale architecture's energy buildout.
- **Gate-2 vocabulary ratifications — all 12 entries** committed to `docs/grove-canonical-vocabulary.md`. Three new coinages (three-act architecture, DEX, self-authoring engine); seven new architectural-canon entries (Composability, Skill Flywheel, Tier landscape, Declarative Sovereignty, Capability Agnosticism, Provenance as Infrastructure, Human-AI Symbiosis); one Grove-adjacent entry (Telemetry-Driven Development); five pipeline stage sub-entries folded into the existing five-stage pipeline entry. Composability entry revised per operator correction to restore the full *Variance of substrate, of domain, of scale* phrase and add the explicit `cultivation-architecture` cross-reference.
- **Authoring docs committed to version control alongside the sprint:** `docs/grove-canonical-vocabulary.md`, `docs/ai-first-publication-standard.md`, `docs/content-audits/grove-content-audit-2026-04-20.md`, `docs/epics/hospitable-graph-epic.md`, and the `sprints/hospitable-graph-01-foundation/` SPEC + CONTRACT + EXECUTION_PROMPT. These were previously untracked working-copy files in the main repo; committing them to the branch makes Sprint 2/3 references resolvable in git history.

**Gate 1 (Composability text):** Ratified by operator at planning session; re-confirmed at execution-session open. Ships verbatim.

**Gate 2 (vocabulary):** Operator approved entries 1–6, 8–12 as-drafted. Entry 7 (Composability) revised per operator correction: (a) full three-dimension *Variance of substrate, of domain, of scale* phrase restored; (b) explicit `cultivation-architecture` Markdown link added inline. All 12 entries written.

**What's queued for Sprint 2** (per audit § Sprint 2 — Graph): five pages brought to AI-First Publication Standard conformance — GRV-002, GRV-003 (lifted to Alert #04 baseline: `isBasedOn`, `mentions[]`, `article:*` taxonomy, `og:image`), Telemetry Trap, Architectural Gap, AI Deployment Pattern Benchmark. Deep-linking pass closes the composability interlock: every prose mention of *compose*, *composition*, *federate*, *interface* wraps in an anchor link to `standards/001#composability`, `standards/002#composition-primitives`, or `standards/003#composition-interfaces`. Legacy `/papers/` link repair across three papers. Alert #04's stale `/papers/telemetry-trap` `isBasedOn` URL repair. JSON manifests for GRV-002 and GRV-003. Λ landscape published as structured data. Second round of vocabulary ratification (Sprint-2-sourced terms).

**Flagged-followup items:**

- **Principle card V (Composability) word balance.** Card V description is ~170 words; cards I–IV are ~50–70 words. The visual weight is heavier. Gate-1 text is locked and ships verbatim; the imbalance is a direct consequence of the invariant's explanatory depth, not a transcription error. Operator may iterate the card text post-ship if the on-page rhythm reads off against the existing four. Not a ship blocker.
- **OG image** (`standards/001/og.png`) is a Pillow placeholder. Operator may replace with brand-polished artwork; OG meta URL stays at the same path.
- **Pronunciation span** uses the same inline-IPA format as Alert #04's post-fix state (no `title` attribute fallback).
- **`<cite>` wraps: zero applied** per Gate-1 sweep approval. The `<cite>` CSS rule shipped for future use; no external work titles appear by name in GRV-001 body prose.
- **`cio-alert-01` NEW-bug script at end of GRV-001 body** preserved as-is per CONTRACT §1 (self-expires 2026-04-27). Not Sprint 1's concern.
- **Prior "hg01-foundation PLANNING (scaffolding only)" block** that lived at the top of NEXT-SESSION-PROMPT.md in the main repo working tree is superseded by this SHIPPED block. If the main repo has an untracked planning-state version of NEXT-SESSION-PROMPT.md at merge time, merge will overwrite with this committed sprint-close version.

**Commit hash:** see `git log hg01-foundation -1 --oneline` for the sprint tip.

**Operator action items (in order):**

1. Visually review local render. Load `C:\GitHub\grove-hg01-foundation\standards\001\index.html` in a browser. Confirm: hero renders with pronunciation span; principle card V (Composability) renders identically to I–IV; OG image loads; footer shows v1.1 · April 20, 2026; all 22 anchor IDs resolve when appended as URL fragments.
2. Validate JSON-LD at https://validator.schema.org/ (paste the two LD blocks separately). Report any errors.
3. Merge `hg01-foundation` → `master` when satisfied.
4. Deploy: `npx vercel --prod --yes` from `C:\GitHub\grove-launch-site`.

**Sprint 2 does not begin until this sprint's anchor IDs — especially `#composability` — are live in production.**

---

## Previous session (2026-04-20) — CIO Alert 01 shipped on branch `cio-alert-01`

Sprint `cio-alert-01` executed per `sprints/cio-alert-01/SPEC.md` + `CONTRACT.md` + `EXECUTION_PROMPT.md`. Work lives on branch `cio-alert-01` in worktree `../grove-cio-alert`; not yet merged to master.

**Commits on the branch** (newest first): see `git log cio-alert-01` for the run; each commit is scoped to one logical change.

**What shipped:**
- `/papers/` renamed to `/alerts/` (directory rename preserving git history). Existing three alerts (001 architectural-gap, 002 ai-deployment-pattern-benchmark, 003 telemetry-trap) now live under `/alerts/`. Their internal content (head blocks, bodies, footers) was NOT modified per sprint directive — stale `/papers/...` references inside those three alerts are covered by the 301 redirect rule added to `vercel.json`. Queue a follow-up sprint to normalize their internal links, canonical URLs, and footer.
- New inaugural Alert 004 — **"Sovereignty Is All You Need"** at `/alerts/sovereignty-is-all-you-need/`. Originally published 2026-04-20 under the title "Open Weights Won't Be Enough to Beat China" as a WSJ-response piece; repositioned same day as thesis-first under the new title with a Λ-framework Ledger upgrade and a three-link pathway to Standings / Benchmark methodology / membership. 301 redirects in place from the old slug. Rich markup: JSON-LD Article with `isBasedOn` chain to GRV-003 / GRV-001 / Telemetry Trap / Pattern Benchmark; Dublin Core; citation meta; Open Graph; Twitter Card; `speakable` spec; `<dfn>` semantic markup on canonical terms; seven anchored references into GRV-003 fragments.
- OG image placeholder at `/alerts/sovereignty-is-all-you-need/og.png` (1200×630, Grove-themed, generated via Pillow). Jim can replace with final artwork if desired.
- Featured-alert module injected on root `/index.html` between hero and "The Global Reality" section; self-expires 2026-04-27 via inline JS.
- NEW-bug treatment (amber pulsing dot, 6px) on the CIO ALERTS nav link across all 14 nav-bearing pages; self-expires 2026-04-27.
- `vercel.json` gained `redirects` block: `/papers/:path*` → `/alerts/:path*` (permanent 301).
- LinkedIn companion draft at `sprints/cio-alert-01/linkedin-companion.md` — 240 words, seed-corn frame, operator to post manually 0–2 hours after deploy.
- Notion thread-keeper `348780a78eef81d69ad7edfc38635e6e` updated: Phase 3 → COMPLETE, Phase 4 → READY.

**Operator action items (in order):**
1. Visually review the local render in the worktree `../grove-cio-alert`. Confirm hero, featured-alert strip, nav NEW bug, Alert page, OG image, Evidence Ledger subordinate treatment.
2. Merge `cio-alert-01` → `master` when satisfied.
3. Deploy: `npx vercel --prod --yes` from `C:\GitHub\grove-launch-site`.
4. Post LinkedIn companion from `sprints/cio-alert-01/linkedin-companion.md`.
5. 24 hours post-publication, contingent on signal: send the pre-drafted Phase 4 Jai DM from Notion page `348780a78eef81d69ad7edfc38635e6e`.

## Open threads carried forward

- **Stale `/papers` references in existing alerts' internal content** — covered by 301 redirect but should be normalized in a follow-up sprint. Files: `alerts/architectural-gap/index.html` (body back-link + footer + head-block canonical), `alerts/ai-deployment-pattern-benchmark/index.html` (inline citation + footer + canonical), `alerts/telemetry-trap/index.html` (footer + canonical).
- **SESSION-STATE.md refresh** — file is stale (snapshot from 2026-04-07). A refresh pass would benefit the next session opener. Kept out of scope for `cio-alert-01` per Rule 3.
- **Trellis fast-follow piece** — pending NotebookLM steered read + Clement brief. Sequencing: steered read through NotebookLM first, then the brief to Clement; piece drafts off both.
- **GRV-003 v1.0 naive-URL QA results** — pending. Live at `the-grove.ai/standards/003`. Awaiting results of a naive-URL pass (fresh browser, no context, click/scroll/read the whole thing) to surface anything the architectural edits missed.
- **NEXT-SESSION-PROMPT.md hygiene** — body section below still references v0.8 / unresolved continuation items that are now shipped at v1.2. Cleanup pass needed: rewrite the prior "most recent session" block to reflect v1.2 ship state and clear resolved items from the outstanding list.
- **v1.1 canonical artifact drift (pronunciation respelling)** — HTML + v1.1 .md carry the corrected `auto-NAHM-uh-tawn` respelling and the inline-IPA pronunciation treatment. `grv-003-v1.1-learner-autonomaton.docx` and `.pdf` were NOT regenerated for this fix and still carry `auto-NAH-muh-tawn`. Reconcile at the next full Google-Docs export round (or any other trigger that regenerates the canonical artifacts).

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
