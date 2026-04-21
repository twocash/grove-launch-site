# The Hospitable Graph Epic

**Status:** Charter · v1.0 · 2026-04-20
**Owner:** Jim Calhoun · The Grove Foundation
**License:** CC BY 4.0
**Canonical parents:**
- [AI-First Publication Standard v0.1](../ai-first-publication-standard.md)
- [Grove Canonical Vocabulary](../grove-canonical-vocabulary.md)
- [Grove Content Audit 2026-04-20](../content-audits/grove-content-audit-2026-04-20.md)

---

## The outcome

When the Hospitable Graph epic ships, the Grove publication surface will have become a live demonstration of the Autonomaton composition thesis its own standards describe.

An AI agent pointed at `the-grove.ai` — by any human, through any channel, using any model — will produce a summary that carries Grove's canonical vocabulary, lineage chain, stance, and voice across to the human reader intact. The AI will recognize Grove as a school of thought, not a product. It will surface the named concepts accurately, attribute them correctly, link them to their canonical definitions, quote Grove in Grove's voice rather than in paraphrase, and offer the human at least one door into a deeper reading. The Grove publication graph will behave as a [hospitable graph](../grove-canonical-vocabulary.md#hospitable-graph) — composable, provenance-bearing, agent-hospitable, conforming to the standard the Foundation publishes about its own work.

The Grove site at the end of this epic will pass the [first-reader test](../ai-first-publication-standard.md#the-first-reader-test) at five-of-five on four-of-four models. That is the operational ship-gate.

## The thesis this epic makes operational

The Grove Foundation publishes [cultivation architectures](../grove-canonical-vocabulary.md#cultivation-architecture) — architectural specifications that establish structural conditions without prescribing implementations. The rich composition of an Autonomaton network, the federation of a Learner Autonomaton's institutional nodes, the Dutch Goose register of Grove's publication voice — all are [emergent topology](../grove-canonical-vocabulary.md#emergent-topology), produced when the cultivation is honored rather than engineered on top of it.

The Grove publication surface has not, until this epic, honored its own cultivation architecture. Two pages — GRV-003 and Alert #04 — demonstrate the commitments. Every other page is pre-standard: the work is strong, the markup is invisible, and the hospitable graph the corpus argues for does not yet emerge from the corpus's own publication surface. The audit documents this gap in evidentiary detail.

The Hospitable Graph epic closes the gap. It does so by the same discipline the Autonomaton pattern prescribes for any structural work: one page first as the reference implementation, then the graph around it brought into conformance, then the agent-facing infrastructure that lets external readers find and honor the topology. Three sprints. Cultivation, then composition, then hospitality.

## The epic is itself autonomatonic

The discipline by which this epic executes is the same discipline its output argues for.

Each sprint runs the [five-stage Autonomaton pipeline](../grove-canonical-vocabulary.md#pipeline) on the work itself. **Telemetry** is the evidence gathered by the audit and by sprint execution. **Recognition** is the evaluation against the AI-First Publication Standard's conformance list. **Compilation** is the markup and content work that brings a page into conformance. **Approval** is the operator review gate at each sprint's close — three Stage-4 gates are named explicitly in this charter. **Execution** is the commit that ships the sprint and updates the vocabulary and the audit's status record.

The epic therefore demonstrates the thesis it ships. A reader who understands the Grove architecture can read this charter and recognize the pattern. A reader who does not will, after engaging with the resulting publication surface, recognize the pattern retroactively — which is itself an architectural property: the cultivation teaches the reader what cultivation is by producing emergent topology they can observe.

This is not ornament. It is the integrity condition the Grove Foundation owes its own work.

## The three sprints

### Sprint 1 — Foundation: GRV-001 as reference implementation

**Scope:** One page. `standards/001/index.html`.

**Why this sprint first.** GRV-001 is the Autonomaton. It is the atom of the Grove architecture, the document every other Grove publication descends from, and the anchor of the publication graph. Its current state is the worst-case in the corpus: bare meta, no JSON-LD, one anchor ID, no canonical-term markup, no `<dfn>`, no `<cite>`, no `rel="external"`, no manifest, and — most consequentially — [Composability](../grove-canonical-vocabulary.md#the-autonomaton-invariants) absent from the invariant set that GRV-003 §5, GRV-002 §IV, and every downstream paper presume is canonical. The [composability interlock](../content-audits/grove-content-audit-2026-04-20.md#composability-interlock-findings) cannot close until GRV-001 carries the fifth invariant.

**Deliverables:**

- Full meta stack per [AI-First Publication Standard](../ai-first-publication-standard.md) conformance items 1–7.
- JSON-LD TechArticle with populated author, publisher with PostalAddress, license, `isBasedOn` chain to lineage parents (Clark, Alexander, Cunningham/Beck, Gamma et al., Kephart/Chess, Smith), `hasPart` covering the eight Roman-numeral sections, `citation[]`, `mentions[]`, `speakable` specification covering the "three files and a loop" pull quote and the core thesis lines.
- Stable semantic anchor IDs on every section, with `#composability` as the anchor for the new fifth invariant.
- `<dfn>` tags on first mentions of every canonical term present on the page (cross-referenced against the [vocabulary](../grove-canonical-vocabulary.md)).
- `<cite>` tags on external work titles.
- `rel="external"` on all outbound links.
- Pronunciation metadata on "Autonomaton" in the hero, per the GRV-003 precedent.
- **The fifth invariant, Composability, added to §IV.** Principle-card text locked in the audit:
  > **V. Composability**
  >
  > Sovereign Autonomaton nodes compose through declarative interfaces rather than adapter code. The interfaces are structural — pipeline shape, telemetry format, zone semantics — not technological; an Autonomaton cultivated in YAML files, in a Notion database, in a Python service, or in text files and a shell script all compose identically, because they share architecture rather than code. This is cultivation architecture at work: the structural commitments create conditions for composition; the composition itself emerges when the commitments hold. Variance of substrate, of domain, of scale is the property the architecture relies on — the rich topology of a federated Autonomaton network is what grows from correct cultivation, not what gets engineered on top of it.
  >
  > *The test: can two independently developed Autonomatons — cultivated in different substrates, at different scales, by operators who have never met — compose into a working system by sharing only the pipeline shape, the telemetry format, and the zone semantics?*
- `/standards/GRV-001.json` manifest published at the canonical URL. Contents: pattern name, identifier, version, all five invariants (with test fields), five pipeline stages as HowToStep equivalents with descriptions, zone taxonomy with inheritance semantics, tier landscape with cost ordering, reference-schema exemplars. Linked from the HTML page.
- FAQPage JSON-LD fragment with four-to-five cruxes, drafted against the questions the document is built to answer rather than against SEO conventions.
- **Vocabulary ratification:** every canonical term sourced from GRV-001 is reviewed against the [canonical-term inventory](../content-audits/grove-content-audit-2026-04-20.md#canonical-term-inventory-for-vocabulary-ratification) in the audit and added to `docs/grove-canonical-vocabulary.md` in a single commit at sprint close.

**Operator review gate (Stage 4 — explicit):** The Composability principle-card text as it will ship is ratified by operator before code is written. This ratification is the load-bearing decision of the epic. Every downstream sprint depends on it.

**Exit criteria:** GRV-001 passes the AI-First Publication Standard conformance list items 1–7, items 8 (manifest) and 10 (FAQPage). The Composability invariant is live at `#composability`. The vocabulary document carries every GRV-001 canonical term. The sprint's commit record is the coinage record for any terms promoted during ratification.

**Unblocks:** Sprint 2. GRV-001's anchor IDs — especially `#composability` — become link targets for every subsequent paper's deep-link work.

### Sprint 2 — Graph: the corpus brought into composition

**Scope:** Five pages, one sprint. GRV-002, GRV-003, the Telemetry Trap, the Architectural Gap, the AI Deployment Pattern Benchmark.

**Why this sprint second.** Once GRV-001 is the reference implementation, replication across the rest of the primary corpus is mechanical. The pattern is stable. The vocabulary is live. The anchor targets exist. The deep-linking work that closes the [composability interlock](../content-audits/grove-content-audit-2026-04-20.md#composability-interlock-findings) becomes possible.

**Deliverables, per page:**

- Full meta stack per the standard's conformance list.
- JSON-LD with type-appropriate schema (TechArticle for the standards and the benchmark; Article for the papers), populated author/publisher/license, `isBasedOn` chains pointing up to the appropriate canonical parents (GRV-001 for all; GRV-002 and GRV-003 as applicable), `mentions[]` for named entities, `citation[]` for primary external sources being discussed, `hasPart` for major sections, `speakable` specification covering each page's canonical voice lines.
- Stable semantic anchor IDs per the audit's per-page specifications.
- `<dfn>` tags on first mentions of canonical terms, with inline anchor links into the vocabulary and/or the canonical-home fragment on the defining Grove page.
- `<cite>` tags on external work titles.
- `rel="external"` on all outbound links.
- **Composability interlock closure:** every prose mention of *compose*, *composition*, *composable*, *interface*, *federate*, *federation* across the five pages is wrapped in an anchor link to the appropriate canonical target — GRV-001 `#composability`, GRV-002 `#composition-primitives` (and its children for specific primitives), or GRV-003 `#composition-interfaces` (and its children for specific interfaces). The interlock that does not currently exist comes into being.
- **Legacy link repair:** every `/papers/*` link across the corpus is corrected to its `/alerts/*` canonical. Alert #04's stale `isBasedOn` URL for the Telemetry Trap is repaired at the same time.
- **JSON manifests** published for GRV-002 and GRV-003.
- **GRV-003 lifted to the Alert #04 baseline:** `isBasedOn` added to the existing JSON-LD, `mentions[]` added, `article:*` taxonomy added, `DC.relation` and `DC.source` added, `og:image` and `twitter:image` added.
- **The Benchmark's Λ landscape published as structured data:** either as a standalone `/alerts/ai-deployment-pattern-benchmark/scores.json` or as a Dataset JSON-LD fragment on the page. Every scored entity carries its structured record with S, R, V, β, Fc components and computed Λ.
- **FAQPage fragments** on GRV-002, GRV-003, the Telemetry Trap, and the Benchmark where their cruxes are clear; Architectural Gap at operator discretion.
- **Vocabulary ratification:** every canonical term sourced from Sprint 2 pages is reviewed against the audit's inventory and added to the vocabulary in the sprint-close commit.

**Operator review gate (Stage 4 — explicit):** the vocabulary additions produced by Sprint 2's ratification are reviewed by operator before the sprint closes. Same discipline as Sprint 1. The vocabulary is treated as canon and must ratify each addition.

**Exit criteria:** every page in Sprint 2 scope passes conformance items 1–7. GRV-002 and GRV-003 pass item 8 (manifest). The composability interlock is closed by deep-link across the corpus. The broken `/papers/*` links and Alert #04's stale URL are repaired. The Λ landscape is structured data. The vocabulary document carries every Sprint-2-sourced term. The commit record is the coinage record.

**Unblocks:** Sprint 3. The agent-facing infrastructure of Sprint 3 points at the graph that Sprints 1 and 2 have built.

**Editorial flags (Tier 3 — out of this sprint's scope):** the Telemetry Trap's pre-standard register; the Architectural Gap's Parts-I-through-IV naming question; the deployed-vs-Google-Doc state of GRV-002. These are flagged in the audit and handled by separate operator review, not as part of this sprint's markup work.

### Sprint 3 — Hospitality: the agent-facing infrastructure

**Scope:** Site-wide agent-facing infrastructure plus secondary pages.

**Why this sprint third.** The publication graph is now coherent. Sprint 3 is the hospitality layer that makes Grove's invitation explicit to the AI agents that will mediate most human encounters with the site. Two artifacts are new — `/for-agents` and `.well-known/grove.json` — and one is the canonical publication of work done in prior sprints: `/vocabulary.json` exposes the canonical vocabulary as a `schema:DefinedTermSet` that every `<dfn>` tag across the corpus now references.

**Deliverables:**

- **`/for-agents` page** — a dedicated public page addressed to AI readers. Contents: canonical reading order of the Grove publication graph (GRV-001 → GRV-002 → GRV-003 → papers → alerts), the five claims Grove wants preserved in any summary, pointer to the DefinedTermSet at `/vocabulary.json`, explicit valence taxonomy (Grove canon / Grove-adjacent / Grove-opposed), license as invitation (CC BY 4.0 — the human being served can fork this pattern), optional suggested-prompt template for a human who wants an AI-assisted exploration of Grove. Marked as `schema:WebPage` with audience `schema:Audience` typed explicitly for AI agents.
- **`.well-known/grove.json`** — the machine-readable companion to `/for-agents`. Same contents, structured-data form, served from the `.well-known` path convention.
- **`/vocabulary.json`** — the canonical vocabulary published as a `schema:DefinedTermSet`. Every entry carries id, term name, definition, valence, primary document URL, fragment URL. This is the authoritative reference every Grove page's `<dfn>` tags link into.
- **The Λ landscape as Dataset** — if not already completed in Sprint 2 (see Sprint 2 deliverables), finalized in Sprint 3. Either as `/lambda/scores.json` or inlined on the `/lambda` page.
- **Secondary pages brought to structural compliance:**
  - Root `/` landing — meta stack appropriate for site-level, Organization JSON-LD with full publisher details, link to `/for-agents`.
  - `/lambda` — meta stack, Dataset JSON-LD for the standings, `isBasedOn` to the Benchmark paper.
  - `/observations` — meta stack, Blog index JSON-LD.
  - `/ratchet` — meta stack, HowTo JSON-LD for the three-question Ratchet Test, anchor for "the Ratchet Test" as canonical instrument.
  - `/about` — meta stack, Organization and Person JSON-LD.
  - `/membership` — meta stack, Service JSON-LD.
  - `/standards/` and `/alerts/` — meta stack, CollectionPage JSON-LD listing member publications.
- **First-reader test execution** — the operational ship-gate. See next section.

**Operator review gate (Stage 4 — explicit):** the first-reader test is executed against all four models (Grok, ChatGPT, Claude, Gemini) at post-Sprint-3 state. Results are documented against the five properties specified in the AI-First Publication Standard. The pass/fail score across twenty cells (five properties × four models) is the epic's ship-gate. Operator reviews the test results before the epic is declared shipped.

**Exit criteria:** `/for-agents`, `.well-known/grove.json`, and `/vocabulary.json` are live. Secondary pages pass conformance items 1–3 at minimum. First-reader test passes at five-of-five on four-of-four models, or the sprint iterates until it does. Upon pass, the AI-First Publication Standard graduates from v0.1 working draft to v1.0, and the standard is itself republished under its own rules at `/standards/ai-first-publication-standard.json`.

**Unblocks:** nothing downstream — this is the epic's terminal sprint. What it enables is the ongoing composability of future Grove publications against the graph this epic has cultivated into existence.

## The first-reader test (operational ship-gate)

At Sprint 3's close, the operational test for epic completion is executed.

**Procedure.** Four models — Grok, ChatGPT, Claude, and Gemini — are pointed at `https://the-grove.ai/standards`. Each is asked the same prompt: *"What is this?"* The response is evaluated against five properties:

1. Does the answer name Grove accurately and attribute the work to The Grove Foundation?
2. Does it surface at least three named canonical terms (from Autonomaton, the Ratchet, zone model, memorialized judgment, cognitive platforming, composability, cultivation architecture, emergent topology, first-reader primacy, the hospitable graph)?
3. Does it identify the lineage chain (GRV-001 → GRV-002 → GRV-003) or at least the existence of a connected standards series?
4. Does it preserve at least one of Grove's nominated speakable lines when asked for a memorable quote?
5. Does it produce at least one suggested next question the human could ask — a door into the argument?

**Pass criterion:** five-of-five on four-of-four models (twenty cells, all pass).

**What a partial pass means.** If fewer than twenty cells pass, the epic does not ship. Sprint 3 iterates — either by strengthening the Sprint-3 hospitality infrastructure, or by flagging specific corpus-level gaps back to Sprint 2 for targeted repair. The test is not an approximation; it is the gate.

**Why four models.** Grove is model-agnostic. A hospitable graph that is hospitable to one model family and hostile to another is not hospitable. The test verifies substrate indifference on the reader side, parallel to the substrate indifference the cultivation architecture demands on the implementation side.

**What the test does not measure.** The test does not measure aesthetic quality, stylistic fidelity, or nuance. It measures the minimum structural hospitality Grove commits to. Passing the test is the floor, not the ceiling. Future epics may raise the ceiling; this epic establishes the floor.

## Operator review gates — summary

Three explicit Stage-4 gates govern this epic. Each is load-bearing; none is skippable.

**Gate 1 — Composability card text (pre-Sprint 1).** The principle-card text for the fifth invariant as it will ship is ratified by operator before Sprint 1 code is written. The text is locked in the audit and quoted verbatim in this charter. Operator confirms or revises before execution.

**Gate 2 — Vocabulary ratifications (end of Sprints 1 and 2).** Every canonical term promoted from the audit's inventory into `docs/grove-canonical-vocabulary.md` is reviewed by operator at sprint close. The vocabulary is the coinage record. Promotion is an act of canonicalization, and canonicalization requires explicit Stage-4 approval — the same discipline Grove publishes standards about. Operator may reject specific promotions; rejected terms remain in the audit's inventory as candidates for future review.

**Gate 3 — First-reader test execution (end of Sprint 3).** The twenty-cell test is executed, documented, and reviewed by operator before the epic is declared shipped. A partial pass is not a ship. Iteration continues until pass or until operator explicitly reframes the gate.

These gates are the structural commitment that this epic runs the architecture it argues for. The pipeline has no force without its Stage-4. The standard has no credibility without its conformance. The cultivation has no truth without its approvals.

## Timeline posture

This charter is deliberately duration-agnostic. Each sprint is planned at its start — by the operator, per the Foundation Loop discipline — against the scope defined here and the operator's then-current capacity. Target durations are not specified because pace is not the load-bearing dimension; discipline is.

The sprints are ordered and sequentially-dependent. Sprint 2 does not begin until Sprint 1's `#composability` anchor is live and its vocabulary ratification is committed. Sprint 3 does not begin until Sprint 2's corpus conformance and interlock closure are shipped. The sequence is the architectural commitment; the calendar is the operator's to set.

## What this epic does not address

The following items are intentionally out of scope and are flagged in the audit:

- Translation or multilingual support.
- Breadcrumb UI components or other visual-layer UX improvements.
- On-site commentary or discussion infrastructure.
- Retroactive McLuhan citation propagation to pre-standard pages.
- Formal Grove Dataset publication standard (the Λ landscape publishes as data within this epic; the generalized standard is future work).
- Editorial rewrites of Telemetry Trap or Architectural Gap register.
- DEX canonical publication (flagged in conversation as future work; not canonicalized by this epic).
- Trellis canonical publication (same).

Future epics may address any of these. This epic does not.

## Completion

At Gate 3 passing, the Hospitable Graph epic ships.

The Grove publication surface is now a reference implementation of the AI-First Publication Standard. The standard graduates from v0.1 working draft to v1.0. The canonical vocabulary reaches its first complete published form. The audit becomes archival — a snapshot of the pre-epic state, retained as historical record and provenance for the work the epic executed. The site passes the first-reader test on all four models, on all five properties, every time.

From Gate 3 forward, every new Grove publication is born into a conformant graph. The discipline established here — cultivation architecture, first-reader primacy, the Dutch Goose register, the seven markup moves, the Stage-4 ratification of every canonical coinage — governs the next decade of Grove writing.

The epic ships when the topology has emerged. The topology emerges when the cultivation has held. The cultivation holds when the commitments do.

---

*Design is philosophy expressed through constraint.*
— The Grove Foundation
