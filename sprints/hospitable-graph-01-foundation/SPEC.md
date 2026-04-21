# SPEC — Hospitable Graph 01 · Foundation

**Sprint ID:** hospitable-graph-01-foundation
**Branch:** `hg01-foundation` (worktree: `../grove-hg01-foundation`)
**Created:** 2026-04-20
**Operator:** Jim Calhoun
**Authoring sessions:** Claude Desktop (planning + Gate 1), Claude Code (execution)
**Epic parent:** [Hospitable Graph Epic Charter v1.0](../../docs/epics/hospitable-graph-epic.md)

## Goal

Bring `standards/001/index.html` (GRV-001 — The Autonomaton Pattern) to full conformance with the [AI-First Publication Standard v0.1](../../docs/ai-first-publication-standard.md). Ship the Composability principle as the fifth Autonomaton invariant in §IV. Publish the canonical pattern as structured data at `/standards/GRV-001.json`. Ratify GRV-001-sourced terms into the [canonical vocabulary](../../docs/grove-canonical-vocabulary.md). One page modified, one new manifest file created, one vocabulary doc updated. That is the entire scope.

## Strategic context

This is Sprint 1 of three in the Hospitable Graph epic. It is sequenced first because GRV-001 is the anchor of the publication graph and because the [Composability interlock](../../docs/content-audits/grove-content-audit-2026-04-20.md#composability-interlock-findings) cannot close until GRV-001 carries the fifth invariant as a canonical anchor. Sprint 2 deep-links into the IDs this sprint ships; Sprint 3 publishes the agent-facing infrastructure that points at the graph this sprint and Sprint 2 build. Sprint 1 unblocks both.

The audit and the epic charter are both authoritative sources. This SPEC does not re-derive their findings; it operationalizes them. Per-element detail lives in the audit's [GRV-001 delta table](../../docs/content-audits/grove-content-audit-2026-04-20.md#grv-001--the-autonomaton-pattern-standards001); conformance criteria live in the [AI-First Publication Standard §Conformance](../../docs/ai-first-publication-standard.md#conformance); the Composability text and the Stage-4 ratification discipline live in the [epic charter](../../docs/epics/hospitable-graph-epic.md#sprint-1--foundation-grv-001-as-reference-implementation).

## Stage-4 gates governing this sprint

Two of the epic's three Stage-4 gates fall inside this sprint.

**Gate 1 — Composability principle-card text.** Ratified 2026-04-20 by operator in Claude Desktop session preceding sprint execution. The text below is locked verbatim and ships in §IV principle V. Claude Code does not rewrite, re-paragraph, or re-cast this text during execution. Any apparent improvement is a violation of Gate 1 and a sprint failure.

**Gate 2 — Vocabulary ratifications.** At sprint close, before the commit, Claude Code presents the GRV-001-sourced vocabulary additions to the operator in a single review block. Operator approves, revises, or rejects each. Approved entries are written into `docs/grove-canonical-vocabulary.md` in the same commit as the GRV-001 markup work. Rejected entries remain in the audit's inventory as candidates for future review. The vocabulary commit is part of the sprint, not a follow-up.

## The ratified Composability text (Gate 1, locked)

The following ships in `standards/001/index.html` §IV as the fifth principle card. Markup mirrors the existing four principle-card structures (`.principle-card`, `.principle-num`, `.principle-body`, `.principle-title`, `.principle-desc`, `.principle-test`). Anchor ID: `#composability`.

> **V. Composability**
>
> Sovereign Autonomaton nodes compose through declarative interfaces rather than adapter code. The interfaces are structural — pipeline shape, telemetry format, zone semantics — not technological; an Autonomaton cultivated in YAML files, in a Notion database, in a Python service, or in text files and a shell script all compose identically, because they share architecture rather than code. This is cultivation architecture at work: the structural commitments create conditions for composition; the composition itself emerges when the commitments hold. Variance of substrate, of domain, of scale is the property the architecture relies on — the rich topology of a federated Autonomaton network is what grows from correct cultivation, not what gets engineered on top of it.
>
> *The test: can two independently developed Autonomatons — cultivated in different substrates, at different scales, by operators who have never met — compose into a working system by sharing only the pipeline shape, the telemetry format, and the zone semantics?*

The principle number is `V` (capital roman, matching the existing four). The card-num element renders the same as `I` through `IV`. The principle title is `Composability`. The principle description is the first paragraph above. The principle test is the italic interrogative line.

## Deliverables

### D1 — Full meta stack on `standards/001/index.html`

Conformance items 1 of the AI-First Publication Standard. Modeled on the [Alert #04 head block](../../alerts/sovereignty-is-all-you-need/index.html) (lines 1–60). All meta tags below populate with GRV-001-specific content; do not transcribe Alert #04 strings verbatim.

- `<title>` and `<meta name="description">` retained from current state, refreshed if needed.
- `<meta name="author" content="Jim Calhoun">`
- `<link rel="canonical" href="https://the-grove.ai/standards/001">`
- **Open Graph (7 tags):** `og:title`, `og:description`, `og:type` ("article"), `og:url`, `og:site_name` ("The Grove Foundation"), `og:image` (path: `https://the-grove.ai/standards/001/og.png` — placeholder acceptable; see CONTRACT §8), and `article:published_time` ("2026-03-01" or operator-confirmed date), `article:author`, `article:section` ("Open Standard"), `article:tag` (4 entries: "AI governance", "Autonomaton Pattern", "open standard", "cognitive architecture").
- **Twitter Card (4 tags):** `twitter:card` ("summary_large_image"), `twitter:title`, `twitter:description`, `twitter:image`.
- **Dublin Core (11 tags):** `DC.title`, `DC.creator`, `DC.publisher` ("The Grove Foundation"), `DC.date`, `DC.type` ("Text"), `DC.format` ("text/html"), `DC.identifier` (canonical URL), `DC.rights` ("CC BY 4.0"), `DC.subject` (canonical-term subject string), `DC.relation` (chain to GRV-002 and GRV-003 canonical URLs), `DC.source` (omit if no specific external source; the standard does not respond to a single external work).
- **Citation meta (5 tags):** `citation_title`, `citation_author`, `citation_publication_date`, `citation_publisher`, `citation_fulltext_html_url`.

### D2 — JSON-LD `TechArticle` block

Conformance item 2. `@type` is `TechArticle` (not `Article`; GRV-001 is a technical specification). Required properties:

- `headline`, `alternativeHeadline` ("Toward Self-Authoring Software Systems"), `url`, `datePublished`, `dateModified`, `inLanguage` ("en"), `articleSection` ("Open Standard"), `identifier` ("GRV-001"), `version` ("1.0").
- `author` — Person object with name "Jim Calhoun", affiliation Organization "The Grove Foundation" with URL.
- `publisher` — Organization object with `address` PostalAddress (Indianapolis, IN, US — same as Alert #04).
- `license` — `https://creativecommons.org/licenses/by/4.0/`.
- `isBasedOn[]` — architectural lineage parents. Candidate set (operator confirms in Gate 1 ratification of D2 contents at execution-plan review):
  - Kephart & Chess, *The Vision of Autonomic Computing*, IEEE Computer 2003 (the canonical Autonomic Computing citation; supersedes the bare "IBM 2001" reference in §II).
  - Brian Cantwell Smith, *Reflection and Semantics in a Procedural Language*, MIT 1982 (the canonical Computational Reflection reference).
  - Christopher Alexander et al., *A Pattern Language*, Oxford University Press 1977 (the publication-format and Pattern-language lineage).
  - Cunningham & Beck, "Using Pattern Languages for Object-Oriented Programs", OOPSLA 1987 (patterns-in-software lineage).
  - Gamma, Helm, Johnson, Vlissides, *Design Patterns: Elements of Reusable Object-Oriented Software*, Addison-Wesley 1994 (the pattern-catalog lineage).
- `mentions[]` — named entities appearing in body prose. Required entries: IBM, Toyota, Christopher Alexander, Brian Cantwell Smith, Randy Wigginton, Susan Kare, Clement Mok, Apple Inc., Anthropic. Operator may add or remove at Gate 1 plan review.
- `citation[]` — reserve for primary sources directly quoted or substantively engaged. For GRV-001 this is sparse; populate with the same lineage works as `isBasedOn[]` if no separately-cited primary sources exist.
- `hasPart[]` — eight Roman-numeral sections as `WebPageElement` or `CreativeWork` children, each carrying `name`, brief `description`, and fragment URL.
- `speakable` — `SpeakableSpecification` with `cssSelector` covering `.lead`, `.pullquote`, `.eyebrow`, `.display`. Same selector set as Alert #04 (proven pattern).

### D3 — Stable semantic anchor IDs

Conformance item 3. Sprint 2 deep-links into these IDs from every other primary page in the corpus; once shipped, they are load-bearing. Renaming an ID after Sprint 1 ships is a Sprint-2 contract violation. Operator-confirmed at Gate 1 plan review.

**Required IDs (per audit):**

| ID | Section | Notes |
|---|---|---|
| `#hero` | Hero | Already exists; retain. |
| `#problem` | §I main | Audit's per-page list does not name §I main explicitly but its directive ("every section") covers it. Use `#problem`. |
| `#governance` | §I "Architectural Governance" subsection | The `<section>` immediately following §I that contains the gov-cols grid. |
| `#lineage` | §II | "The Lineage" |
| `#pattern` | §III main | "The Pattern" |
| `#pipeline` | §III pipeline grid container | The five-stage pipeline. The single most-linked-into anchor in the corpus after Sprint 2. |
| `#cognitive-router` | §III "The Cognitive Router" subsection | |
| `#tiers` | §III tier grid | The T0/T1/T2/T3 grid. |
| `#principles` | §IV main | "The Principles" |
| `#declarative-sovereignty` | §IV principle 1 card | |
| `#capability-agnosticism` | §IV principle 2 card | |
| `#provenance-as-infrastructure` | §IV principle 3 card | |
| `#human-ai-symbiosis` | §IV principle 4 card | |
| `#composability` | §IV principle 5 card (NEW) | The audit's most-load-bearing anchor. Sprint 2 closes the interlock against this ID. |
| `#zone-model` | §V | "The Zone Model" |
| `#flywheel` | §VI | "The Flywheel" |
| `#reference-schemas` | §VII | "Reference Schemas" |
| `#implications` | §VIII main | "The Implications" |
| `#vision` | §VIII "The Vision" subsection | The three-act architecture passage. |

§VIII subsections "Governance by Architecture", "Auditability as Byproduct", "Sovereign Computing" are not on the audit's required list; CC may add IDs for them at execution discretion using `#governance-by-architecture`, `#auditability-byproduct`, `#sovereign-computing` if useful, but these are optional and not load-bearing for Sprint 2.

### D4 — `<dfn>` tags on canonical first mentions

Conformance item 4. Style rule already shipped in Alert #04 (`dfn { font-style:normal; color:var(--text); border-bottom:1px dotted var(--amber-dim); }`); transcribe this rule into the GRV-001 `<style>` block alongside the `cite` rule.

**Required `<dfn>` wraps (first mention only, body prose):**

- *Autonomaton* (hero, first occurrence — also gets pronunciation span, see D7)
- *self-authoring engine* (hero — Grove-coined positioning phrase)
- *five-stage pipeline* (§III opening prose or governance subsection)
- *Cognitive Router* (§III)
- *Tiers* / *tier landscape* (§III)
- *Skill Flywheel* (§I governance subsection or §VI)
- *Declarative Sovereignty* (§IV principle 1 title — the title itself is the dfn anchor)
- *Capability Agnosticism* (§IV principle 2)
- *Provenance as Infrastructure* (§IV principle 3)
- *Human-AI Symbiosis* (§IV principle 4)
- *Composability* (§IV principle 5 — NEW)
- *Zone Model* (§V or first appearance in §I/§III)
- *Green Zone* / *Yellow Zone* / *Red Zone* (§V — the three card titles or first prose mention)
- *Digital Jidoka* (§II lineage card)
- *Autonomic Computing* (§II)
- *Computational Reflection* (§II)
- *Telemetry-Driven Development* (§II)
- *the Ratchet* (§VI)
- *DEX* / *Declarative Exploration* (§IV opening — currently appears unmarked)
- *three-act architecture* (§VIII vision)

A term's `<dfn>` lives at its **first body-prose appearance**, not in section headings. Section headings remain `<h2>` / `<h3>` per the existing structure. If a term appears first in a card title (e.g., the principle titles), CC may judge whether the card title itself is the appropriate dfn anchor; the existing card markup uses `.principle-title` divs which can hold the `<dfn>` semantically.

When a term has a fragment URL (anchor on this same page or on another Grove page), the `<dfn>` wraps the term and an inline `<a>` may follow or the dfn may itself be wrapped in an `<a>` per CC judgment. Sprint 1 does not require deep-linking from GRV-001 dfn tags into other pages — Sprint 2 handles cross-page deep-linking. Within-page anchor links (e.g., from §III prose mentioning "the principles" → `#principles`) are encouraged but not required in Sprint 1.

### D5 — `<cite>` tags on external work titles

Conformance item 6. Style rule (`cite { font-style:italic; color:var(--text); }`) transcribed alongside the dfn rule.

**Required `<cite>` wraps:**
- *A Pattern Language* (Alexander, §II lineage prose if mentioned; otherwise omit)
- *Design Patterns* (Gamma et al., §II if mentioned; otherwise omit)
- IBM *Autonomic Computing* white paper (§II if mentioned by name)
- The Macintosh (§II — referenced as a worldview rendered in silicon; not a publication, so this is an editorial call — CC may skip)

GRV-001's body prose currently has very few external work titles by name. The cite wraps will be sparse. This is correct — GRV-001 is more axiomatic than referential. Do not invent citations to pad the cite count.

### D6 — `rel="external"` on outbound links

Conformance item 7. Apply to every off-site link in the page. Currently the only off-site link is the `creativecommons.org` license link in the footer (line 530 area). Retain `rel="noopener noreferrer"` where it exists; add `rel="external noopener noreferrer"` (rel attribute supports multiple tokens).

### D7 — Pronunciation metadata on "Autonomaton"

Conformance: not a numbered standard item but precedent set by GRV-003 and reinforced by the audit. Wrap the first occurrence of "Autonomaton" in the hero with a `<span class="pronunciation">` carrying the IPA `/ɔːˈtɒnəmətɒn/` and the audible form `auto-NAHM-uh-tawn`. Add a CSS rule for `.pronunciation` matching the GRV-003 precedent (small, mono, amber-dim, parenthetical). Do not pronunciation-decorate subsequent mentions.

### D8 — Composability principle card added to §IV

The Gate-1-ratified text from above ships as the fifth `.principle-card` element inside the `.principle-grid` container in §IV. Card structure mirrors the existing four:

```html
<div class="principle-card" id="composability">
  <div class="principle-num">V</div>
  <div class="principle-body">
    <div class="principle-title"><dfn>Composability</dfn></div>
    <div class="principle-desc">[paragraph from Gate-1 ratified text]</div>
    <div class="principle-test">The test: can two independently developed Autonomatons — cultivated in different substrates, at different scales, by operators who have never met — compose into a working system by sharing only the pipeline shape, the telemetry format, and the zone semantics?</div>
  </div>
</div>
```

The `id="composability"` lives on the `.principle-card` element, not on a child. This is the load-bearing anchor for Sprint 2's interlock closure. Do not move it to a child element.

The §IV opening prose currently reads "These are not guidelines. They are structural constraints. A system that violates them may work, but it is not an Autonomaton." This may need a one-clause edit to read "five" instead of an implied "four" — CC checks the existing wording during execution and adjusts only if literally referencing the count of principles. No other §IV prose changes.

### D9 — `/standards/GRV-001.json` manifest

Conformance item 8. New file. Path: `standards/GRV-001.json` (sibling to `standards/001/index.html`). Linked from the HTML page via a `<link rel="alternate" type="application/json" href="/standards/GRV-001.json">` in the head, and optionally surfaced in the footer download bar alongside the PDF link.

**Required structure (JSON, not JSON-LD — this is the standard's data form, not a schema.org expression):**

```json
{
  "pattern": "The Autonomaton Pattern",
  "identifier": "GRV-001",
  "version": "1.1",
  "license": "CC BY 4.0",
  "publisher": "The Grove Foundation",
  "canonical_url": "https://the-grove.ai/standards/001",
  "invariants": [
    {"id": "declarative-sovereignty", "title": "Declarative Sovereignty", "description": "...", "test": "..."},
    {"id": "capability-agnosticism", "title": "Capability Agnosticism", "description": "...", "test": "..."},
    {"id": "provenance-as-infrastructure", "title": "Provenance as Infrastructure", "description": "...", "test": "..."},
    {"id": "human-ai-symbiosis", "title": "Human-AI Symbiosis", "description": "...", "test": "..."},
    {"id": "composability", "title": "Composability", "description": "...", "test": "..."}
  ],
  "pipeline": [
    {"stage": 1, "name": "Telemetry", "description": "..."},
    {"stage": 2, "name": "Recognition", "description": "..."},
    {"stage": 3, "name": "Compilation", "description": "..."},
    {"stage": 4, "name": "Approval", "description": "..."},
    {"stage": 5, "name": "Execution", "description": "..."}
  ],
  "zones": [
    {"id": "green", "name": "Green Zone", "semantics": "autonomous"},
    {"id": "yellow", "name": "Yellow Zone", "semantics": "supervised"},
    {"id": "red", "name": "Red Zone", "semantics": "human-only"}
  ],
  "tiers": [
    {"id": "T0", "name": "Deterministic", "cost": "$0"},
    {"id": "T1", "name": "Local Model", "cost": "~$0"},
    {"id": "T2", "name": "Cloud (Fast)", "cost": "Low"},
    {"id": "T3", "name": "Cloud (Frontier)", "cost": "High"}
  ],
  "version_note": "v1.1 adds Composability as fifth invariant. v1.0 (March 2026) shipped four invariants."
}
```

The full description and test text for each invariant comes from the existing GRV-001 §IV principle cards (transcribed verbatim) plus the Gate-1-ratified Composability text. Pipeline stage descriptions come from the existing pipeline grid in §III. CC populates these by reading the rendered HTML, not by paraphrasing.

The version field bumps from `1.0` to `1.1` because adding a fifth invariant is a substantive change to the standard's contract. The HTML hero meta string ("v1.0 · March 2026") in `.hero-meta` updates to "v1.1 · April 2026" or operator-specified date. The footer download bar similarly updates. This is one of the few **content-edit** changes Sprint 1 makes outside the new principle card.

### D10 — FAQPage JSON-LD fragment

Conformance item 10 (conditional). Five cruxes from the audit, embedded as a separate JSON-LD `<script type="application/ld+json">` block alongside the main TechArticle JSON-LD (one head, two LD blocks is acceptable; alternatively the FAQPage can be expressed as `mainEntity` of a `WebPage` parent — CC chooses, with the caveat that schema.org validators handle parallel LD blocks correctly).

**The five cruxes:**

1. *Why is policy insufficient for AI governance?* — Answer: Policy describes intent; architecture determines what systems can do. The Autonomaton's zone model enforces authority boundaries structurally, not declaratively. (Draws from §VIII Governance by Architecture.)
2. *What does "three files and a loop" actually mean?* — Answer: A routing config (zone boundaries and tier preferences), a zones schema (operation classifications), a structured telemetry log (interaction history), and the five-stage pipeline that traverses them. (Draws from hero and §VII reference schemas.)
3. *How is this different from existing agent frameworks?* — Answer: Agent frameworks orchestrate model calls; the Autonomaton governs them. The pipeline is invariant; the zone model is the consent boundary; the Skill Flywheel ratchets confirmed patterns toward cheaper tiers. No existing framework specifies all three. (Draws from §III, §V, §VI.)
4. *What does it mean to own memorialized judgment?* — Answer: The behavioral intelligence the system accumulates lives at the operator endpoint, not in vendor infrastructure. Telemetry, configuration, and confirmed skills are inspectable, exportable, and portable. (Draws from §VIII Sovereign Computing; canonical home is GRV-003 §9 — Sprint 2 adds the deep link.)
5. *Is this compatible with enterprise compliance?* — Answer: Auditability is a byproduct of the pipeline; every action traces to a telemetry entry, classification, skill, zone, and approval. The Red Zone is enforced at OS-level permissions, not policy. (Draws from §VIII Auditability as Byproduct.)

CC drafts the answer prose to be substantive (~40–80 words each), keyed to existing GRV-001 prose, and pasted into the FAQPage `acceptedAnswer` text fields. CC does not invent new claims — every answer is supported by existing GRV-001 body content.

### D11 — Vocabulary ratifications

Per Gate 2. The following GRV-001-sourced terms are presented to the operator at sprint close for ratification into `docs/grove-canonical-vocabulary.md`. Each is a candidate; operator approves, revises, or rejects in a single review block before the sprint commit.

**Candidate ratifications (from audit's canonical-term inventory, GRV-001 corpus):**

1. **Telemetry / Recognition / Compilation / Approval / Execution** — the five pipeline stage names individually. CC's recommendation: fold these as sub-entries inside the existing "the five-stage pipeline" entry rather than five standalone entries, because they are properties of the pipeline, not separately deployable patterns. Operator confirms or overrides.
2. **Tier landscape (T0 / T1 / T2 / T3)** — currently the cognitive router entry references tiers in passing. Promote to a standalone entry "the tier landscape" with the four tiers as sub-properties.
3. **Declarative Sovereignty** — Autonomaton invariant 1, currently named only in the principle-list summary inside "the Autonomaton invariants". Standalone entry.
4. **Capability Agnosticism** — invariant 2. Standalone entry.
5. **Provenance as Infrastructure** — invariant 3. Standalone entry. (Note: phrase "a fact without a root is a weed" is the canonical Grove epigram for this invariant; consider including in the entry.)
6. **Human-AI Symbiosis** — invariant 4. Standalone entry.
7. **Composability** — invariant 5 (NEW). Standalone entry. Definition mirrors the Gate-1-ratified card text; vocabulary entry is the prose-form complement to the principle-card structural form.
8. **Skill Flywheel** — currently folded into the Ratchet entry. Separate entry: the Flywheel is the loop (Observe → Detect → Propose → Approve → Execute); the Ratchet is the directional property of the Flywheel (cheaper, faster, more private over time).
9. **Three-act architecture** — Autonomaton → Trellis → Knowledge Commons. Standalone entry naming the three-scale Grove vision.
10. **Telemetry-Driven Development** — §II lineage. Standalone entry, Grove-adjacent valence.
11. **DEX (Declarative Exploration)** — §IV opening. Standalone entry, Grove canon. Currently referenced in canonical vocabulary's "Maintenance" section but not defined.
12. **Self-authoring engine** — Grove-coined hero phrase. Standalone entry, Grove canon.

If operator rejects any candidate at Gate 2, the rejected terms remain documented in this SPEC's Sprint-close report for future review.

## File manifest

### Files to create
- `standards/GRV-001.json` — the JSON manifest exposing the standard as data (D9).
- `sprints/hospitable-graph-01-foundation/SPEC.md` — this file (already exists at sprint planning).
- `sprints/hospitable-graph-01-foundation/CONTRACT.md` — the invariants document (created at planning).
- `sprints/hospitable-graph-01-foundation/EXECUTION_PROMPT.md` — the handoff (created at planning).

Optional artifact:
- `standards/001/og.png` — Open Graph social-share image. Placeholder acceptable; 1200×630, Grove design system, GRV-001 mark + "The Autonomaton Pattern" headline + "GRV-001 · Open Standard · CC BY 4.0" eyebrow. CC may generate a placeholder during execution if no operator-supplied asset exists; SVG-to-PNG via Python/Playwright permitted, or a flat-color text-only fallback acceptable.

### Files to modify
- `standards/001/index.html` — all of D1 through D8 land here. Net additions: ~280–350 lines per audit estimate. The CSS additions (dfn, cite, pronunciation rules) go in the existing `<style>` block; the head metadata fills the head; the JSON-LD blocks go at the end of head; the body changes are anchor IDs on existing sections, dfn/cite wraps in body prose, the new principle card in §IV, and a one-clause edit to the §IV opener if it currently states a count.
- `docs/grove-canonical-vocabulary.md` — the Gate-2-approved entries from D11 are appended to the appropriate sections (Coinages, Architectural canon, Adopted vocabulary). The Composability entry — already partially scaffolded under "the Autonomaton invariants" with the Sprint-1 forward reference — gets its standalone canonical entry per Gate 2.

### Files that MUST NOT be modified
See [CONTRACT.md §1](./CONTRACT.md#1--files-cc-must-not-modify).

## Authoritative source content

This SPEC does not re-derive content. CC reads from these sources during execution:

- The [Gate-1-ratified Composability card text](#the-ratified-composability-text-gate-1-locked) above. Locked verbatim.
- [The audit's GRV-001 delta table](../../docs/content-audits/grove-content-audit-2026-04-20.md#grv-001--the-autonomaton-pattern-standards001) — per-element required actions.
- [The audit's canonical-term inventory, GRV-001 corpus](../../docs/content-audits/grove-content-audit-2026-04-20.md#canonical-term-inventory-for-vocabulary-ratification) — vocabulary ratification candidates.
- [The AI-First Publication Standard §Conformance](../../docs/ai-first-publication-standard.md#conformance) — items 1–10 for ship-gate.
- [Alert #04 head block](../../alerts/sovereignty-is-all-you-need/index.html) lines 1–230 — operative template for meta stack and JSON-LD shape (NOT for content; CC does not transcribe Alert #04 strings).
- [GRV-001 current state](../../standards/001/index.html) — the body prose CC marks up. Body prose is preserved verbatim except where D8 and D9 require edits.

## Ship-gate checklist (operator runs at sprint close)

- [ ] D1 — Meta stack complete; spot-check by viewing source.
- [ ] D2 — JSON-LD validates at https://validator.schema.org/ (paste the JSON-LD block; report errors and warnings).
- [ ] D3 — Every required anchor ID exists; navigate to each via URL fragment in browser to confirm.
- [ ] D4 — `<dfn>` style rule present; spot-check first occurrences of three canonical terms.
- [ ] D5 — `<cite>` style rule present.
- [ ] D6 — `creativecommons.org` footer link carries `rel="external"`.
- [ ] D7 — Pronunciation span renders on first "Autonomaton" in hero.
- [ ] D8 — `#composability` anchor resolves; principle card V renders identically to I–IV.
- [ ] D9 — `/standards/GRV-001.json` returns valid JSON; `<link rel="alternate">` in head resolves.
- [ ] D10 — FAQPage JSON-LD validates; five questions present.
- [ ] D11 — Vocabulary entries committed in same commit as the markup work; Gate 2 review block in commit message.
- [ ] Hero meta updates from "v1.0 · March 2026" to "v1.1 · April 2026" (or operator-confirmed date).
- [ ] Footer download bar reflects v1.1.
- [ ] Existing `<script>` for IntersectionObserver and keyboard nav still works (verify by scrolling and arrow-key navigation).
- [ ] No visual regression on the existing principle cards (I–IV render unchanged).
- [ ] Stale `cio-alert-01` NEW bug script at end of body is left alone (it self-expires 2026-04-27; not Sprint 1's concern).

The sprint ships when all boxes are checked and operator commits the worktree to `hg01-foundation` branch. Operator deploys manually via `npx vercel --prod --yes` from `C:\GitHub\grove-launch-site` (Git auto-deploy is broken).

---

*Design is philosophy expressed through constraint.*
