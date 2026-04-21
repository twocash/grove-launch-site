# Grove Content Audit

**Date:** 2026-04-20
**Auditor:** Jim Calhoun working session + AI thought partner
**Evaluated against:** [AI-First Publication Standard v0.1](../ai-first-publication-standard.md)
**Scope:** All published pages at `the-grove.ai` as of 2026-04-20, excluding the newly shipped Alert #04 (`/alerts/sovereignty-is-all-you-need`) which is assumed compliant
**Output:** Evidence, cross-linkage map, canonical-term inventory, prioritized refactor plan

---

## Executive summary

The Grove publication graph has a clear seam. Two pages — GRV-003 (`/standards/003`) and Alert #04 (`/alerts/sovereignty-is-all-you-need`) — carry substantial AI-first markup. Every other primary page on the site — GRV-001, GRV-002, the Telemetry Trap, the Architectural Gap, the AI Deployment Pattern Benchmark, and every secondary page (landing, Λ Standings, Observations, Ratchet, About, Membership, category indices) — has essentially no AI-first markup. Bare `<title>` plus `<meta description>` is the full inventory. No Dublin Core, no citation meta, no Open Graph beyond a few incidental tags, no Twitter Card, no JSON-LD, no canonical links, no author meta, no `<dfn>`, no `<cite>`, no stable anchor IDs on internal sections, no `rel="external"`, no pronunciation metadata.

The refactor target is not GRV-003. It is **Alert #04**. The Alert #04 head block, shipped during sprint `cio-alert-01` on 2026-04-20, is the most complete implementation of the standard Grove has produced, and it exceeds GRV-003 on four measurable counts: `isBasedOn` chain (GRV-003 uses `citation[]` only); `mentions[]` array of named entities (GRV-003 uses `about[]` only); `article:*` taxonomy (GRV-003 has none); Open Graph and Twitter image references (GRV-003 appears to lack both). GRV-003 should therefore be brought up to the Alert #04 baseline rather than used as the yardstick for other pages.

**Biggest structural finding:** the Composability interlock is absent. GRV-003 argues at length for composition (§5 composition thesis, §6 node taxonomy, §10 five composition interfaces) and presumes a canonical home for the concept in GRV-001. GRV-001 enumerates only four Autonomaton invariants (Declarative Sovereignty, Capability Agnosticism, Provenance as Infrastructure, Human-AI Symbiosis) and has no Composability section. The word "composability" appears exactly once in the GRV-001 body prose, as part of a list of downstream properties, with no anchor and no definition. This is the most consequential single gap in the corpus: an architectural property the Grove thesis cannot do without, named nowhere canonically.

**Recommended first sprint:** GRV-001 refactor. GRV-001 is the anchor of the publication graph, the most-trafficked Grove page, and the single document that, when brought into full conformance with the standard, becomes the reference implementation that every subsequent sprint measures itself against. Adding Composability as the fifth invariant closes the interlock, gives GRV-003 a backward link target, and gives GRV-002's composition primitives an architectural home to descend from. One page. One sprint. High leverage.

The rest of this audit documents the per-page gaps, the cross-linkage map (current and target), the canonical-term inventory for vocabulary ratification, and a three-sprint epic plan.

---

## Reference baseline

This audit measures pages against the [AI-First Publication Standard](../ai-first-publication-standard.md) rather than against any single existing page. Where the standard's conformance list is ambiguous, this audit treats Alert #04 as the operative example — it is the page closest to full conformance, and its head block is the richest implementation of the standard in the Grove corpus.

**Alert #04 head block provides:** canonical link · author meta · 6 Open Graph tags including `og:image` · 4 Twitter Card tags including `twitter:image` · full `article:*` taxonomy (published_time, author, section, four tags) · 11 Dublin Core tags (the full conformance set plus `DC.relation` pointing to GRV-003 and `DC.source` pointing to the WSJ op-ed being responded to) · 5 citation meta tags · JSON-LD Article with populated author and publisher (with PostalAddress), license, `isBasedOn` chain of four parent works (GRV-003, GRV-001, Telemetry Trap, AI Deployment Pattern Benchmark), `isPartOf` PublicationSeries, `about[]` array, `keywords` string, `mentions[]` array of eight structured entities (six organizations, two creative works), `citation[]` array of four primary sources, `speakable` specification.

**Alert #04 body provides:** styled `<dfn>` and `<cite>` rules in the `<style>` block · four `<dfn>` tags on first mentions · multiple `rel="external"` attributes on off-site outbound links · a `#hero` anchor ID.

**GRV-003, for comparison,** provides 9 Dublin Core tags (missing `DC.relation`, `DC.source`), 5 citation meta tags, 5 OG tags (missing `og:image`), 3 Twitter Card tags (missing `twitter:image`), JSON-LD with `about[]` and `citation[]` (but not `isBasedOn`), `speakable` specification, 8 body `<dfn>` tags, 3 `<cite>` tags, pronunciation metadata, glossary DL, scored/movement anchor IDs (`#movement-i` through `#movement-v`, plus internal section IDs like `#thesis` and `#cognitive-platforming-hazard`). GRV-003 is the richest pre-Alert-#04 implementation but is one step behind the operative standard.

**A note on the "Alert #04" label.** The standard's conformance criteria are the authority; Alert #04 is the template. Where the template and the standard diverge, the standard governs. One known divergence: Alert #04's `isBasedOn` entry for the Telemetry Trap uses the stale `/papers/telemetry-trap` URL. The canonical URL since the papers→alerts rename is `/alerts/telemetry-trap`. This is a bug in Alert #04 to be fixed when the file is next touched, not a feature to be emulated.

---

## Per-page delta tables

Each table measures a primary page against the AI-First Publication Standard's ten conformance criteria, with current state, gap, priority tier, and suggested action. Tier 1 = high impact, low effort (meta stack additions, simple JSON-LD). Tier 2 = high impact, moderate effort (anchor IDs, body markup, structured invariants). Tier 3 = strategic (editorial alignment, register updates, content restructuring). Tiers 1–2 are in scope for the Hospitable Graph epic; Tier 3 items are flagged but deferred to operator review.

### GRV-001 — The Autonomaton Pattern (`/standards/001`)

GRV-001 is the anchor of the entire publication graph. It is the page every other Grove document descends from. Its current state is the worst-case in the corpus.

| Criterion | Current | Gap | Tier | Action |
|---|---|---|---|---|
| Meta stack | Bare: `<title>`, `<meta description>` only | No DC, no citation, no OG, no Twitter, no canonical, no author meta | **1** | Full meta stack per Alert #04 template. `DC.relation` chains to GRV-002, GRV-003. `DC.subject` lists canonical terms. `og:image` and `twitter:image` require image asset creation. |
| JSON-LD | None | No structured data at all | **1** | TechArticle with author, publisher (PostalAddress), license, `isBasedOn` to parent lineage (Clark, Alexander, etc. as CreativeWorks), `mentions[]` for Autonomic Computing / Jidoka / etc., `citation[]` for IBM white paper / Gamma et al. / etc., `hasPart` for the eight Roman-numeral sections, `speakable` for the thesis lines and the "three files and a loop" pull quote. |
| Anchor IDs | One (`#hero` only) | No section IDs; sections I–VIII are unreachable by URL fragment | **1** | Add semantically meaningful IDs to every section: `#governance`, `#lineage`, `#pattern`, `#pipeline`, `#cognitive-router`, `#tiers`, `#principles`, `#declarative-sovereignty`, `#capability-agnosticism`, `#provenance-as-infrastructure`, `#human-ai-symbiosis`, `#composability`, `#zone-model`, `#flywheel`, `#reference-schemas`, `#implications`, `#vision`. |
| `<dfn>` tags | None | Canonical terms (Autonomaton, the Ratchet, pipeline, zone model, Digital Jidoka, cognitive router, Skill Flywheel, Composability) appear in prose unmarked | **2** | Wrap first mentions in `<dfn>`. Style rule to be added to the stylesheet (same rule as Alert #04 / GRV-003). |
| `<cite>` tags | None | External works (*A Pattern Language*, IBM *Autonomic Computing* white paper, Cunningham & Beck, etc.) named in prose unmarked | **2** | Wrap external work titles in `<cite>`. |
| `rel="external"` | None | Outbound links (creativecommons.org, future Wigginton references) lack `rel="external"` | **1** | Add `rel="external"` to all off-site links. Keep `rel="noopener noreferrer"` where it exists. |
| Pronunciation meta | None | "Autonomaton" is Grove's flagship coinage; currently no pronunciation guide | **2** | Add `<span class="pronunciation">` on first mention of "Autonomaton" in the hero, per GRV-003 precedent. Include CSS rule in stylesheet. |
| JSON manifest | None | `/standards/GRV-001.json` does not exist | **2** | New file exposing pattern name, identifier, version, five invariants (including Composability), five pipeline stages as HowToStep equivalents, zone taxonomy, tier list with cost semantics, principles with tests. Linked from the HTML page. |
| FAQPage | None | No cruxes structured | **2** | Three-to-five cruxes: *Why is policy insufficient? What does "three files and a loop" actually mean? How is this different from existing agent frameworks? What does it mean to own memorialized judgment? Is this compatible with enterprise compliance?* |
| DefinedTermSet | None | No vocabulary exposure | **3** | Site-wide DefinedTermSet deployed in Sprint 3; GRV-001 references it rather than redefining. |
| **Composability as fifth invariant** | Absent from the principle set | GRV-003 §5, §10 has no backward link target on GRV-001; the composability interlock is broken at its anchor | **1** | Add §IV principle 5: Composability. Matching principle-card markup. Composability definition mirrors the vocabulary entry. Anchor ID `#composability`. This is the single most consequential edit in the audit. |

**Line-count estimate:** approximately 280–350 lines of additions to the current 561-line file. Net growth ~55%. Largely head-block additions and one principle-card addition; body prose edits are light.

**Dependency note:** Sprint 1 is scoped to GRV-001 only. All other pages will reference GRV-001's anchor IDs in Sprint 2, so GRV-001's IDs must be finalized and stable before Sprint 2 begins.

### GRV-002 — TCP/IP for the Cognitive Layer (`/standards/002`)

GRV-002 is the paper Jim has just shared in a fuller draft form (the Google Doc version). The deployed HTML page is the prior draft and is otherwise structurally similar to the draft. GRV-002 houses the composition primitives that anchor the entire Hospitable Graph concept (chain, branch, hierarchy, mesh, zone-nesting, federation, recursive case) and is therefore a critical link target for every paper that uses the word "compose" or "federate."

| Criterion | Current | Gap | Tier | Action |
|---|---|---|---|---|
| Meta stack | Bare | Same as GRV-001 | **1** | Full meta stack. `DC.relation` to GRV-001, GRV-003. `isBasedOn` in JSON-LD to Clark 1988, Saltzer/Reed/Clark 1984, RFC 1958, RFC 3439, Cerf/Kahn 1974. |
| JSON-LD | None | Nine sections, six correspondences, six composition primitives — all structurally significant, none exposed as structured data | **1** | TechArticle with `hasPart` covering the six principles of §II, the six cognitive-domain mappings of §III, and the seven composition primitives of §IV. `citation[]` array for Clark, Saltzer/Reed/Clark, RFC 1958, RFC 3439, Cerf/Kahn, Kephart/Chess, METR, Alexander, Gamma et al., Cunningham/Beck. |
| Anchor IDs | None on internal sections | Nine roman-numeral sections unreachable | **1** | Add: `#missing-protocol`, `#six-principles`, `#hourglass`, `#end-to-end`, `#fate-sharing`, `#layered-independence`, `#protocol-over-implementation`, `#simplicity-principle`, `#cognitive-domain`, `#composition-primitives`, `#chain`, `#branch`, `#hierarchy`, `#mesh`, `#zone-nesting`, `#federation`, `#recursive`, `#reverse-tax`, `#governance-innovation`, `#correspondence-table`, `#implications`, `#conclusion`, `#references`. `#composition-primitives` and its seven children are the most important: every paper in the corpus that discusses composition should eventually link here. |
| `<dfn>` tags | None | Every composition primitive is a canonical term | **2** | Wrap *hourglass*, *end-to-end argument*, *fate-sharing*, *Reverse Tax*, and each of the six primitives in `<dfn>` at first mention. |
| `<cite>` tags | None | The paper names nine external works | **2** | Wrap each in `<cite>`. |
| `rel="external"` | None | CC BY link and (eventually) RFC links | **1** | Add as needed. |
| JSON manifest | None | `/standards/GRV-002.json` does not exist | **2** | Pattern identifier, the six TCP/IP principles, the six cognitive-domain mappings, the composition primitives as an ItemList with structured descriptions, the Reverse Tax economic property, the correspondence table as structured data. |
| FAQPage | None | No cruxes structured | **2** | Four-to-five cruxes: *How is this different from claiming every distributed system is "like the internet"? What makes an Autonomaton composable where other AI agents aren't? What does it mean for cognition to have a protocol? Why isn't OSI the analogy instead? How does the Reverse Tax actually compound?* |
| Composition-primitives linkage | Primitives exist only as paragraphs | Downstream papers that mention composition have no anchor target | **1** | Once anchor IDs are added, update the three papers (Sprint 2) to link into `#chain`, `#federation`, etc. from their prose. This is the second half of the composability interlock — GRV-001 introduces the invariant, GRV-002 specifies the primitives. |

**Line-count estimate:** ~220–270 lines of additions to the current 421-line file.

**Editorial note (Tier 3):** Jim has an updated GRV-002 draft in a Google Doc that expands the paper substantially beyond the deployed HTML. The refactor sprint should check whether the deployed HTML needs to be updated to match the newer draft before (or as part of) applying markup. Flagged for operator review at sprint-planning time; not a markup concern but affects scope.

### The Telemetry Trap (`/alerts/telemetry-trap`)

Telemetry Trap is Grove's most widely read paper (per Jim's product notes) and the first published artifact where first-reader primacy matters most for commercial outreach. It was written before the AI-First Publication Standard existed, and its register is slightly different from the current standards-body register — more journalistic, Conway as named antagonist, sharper-edged.

| Criterion | Current | Gap | Tier | Action |
|---|---|---|---|---|
| Meta stack | Bare | Same as GRV-001/002 | **1** | Full meta stack. `DC.source` could reference the original Anthropic packaging incident from March 2026 if appropriate; `DC.relation` chains to GRV-001 (the Autonomaton alternative section invokes it) and GRV-003. |
| JSON-LD | None | Seven sections, the Conway lock-in taxonomy, comparison table, and three architectural properties all unstructured | **1** | Article with `isBasedOn` to GRV-001, `mentions[]` for Conway (named as the subject of the lock-in argument), Anthropic, MCP, AWS, Google Play Services (architectural analogy), `citation[]` for the March 2026 packaging incident source and related industry reporting. |
| Anchor IDs | `#hero` only | Seven sections unreachable | **1** | `#conway`, `#mcp-paradox`, `#lock-in-taxonomy`, `#autonomaton-alternative`, `#contract-language`, `#timeline-pressure`, `#policy-gap`, `#standards-bodies`, `#regulatory-question`, `#closing`. |
| `<dfn>` tags | None | "Behavioral lock-in", "telemetry trap", "MCP paradox" are all canonical-term candidates | **2** | Wrap first mentions. "The telemetry trap" itself is the title term and should be defined canonically in the vocabulary as part of the Sprint-2 extraction pass. |
| `<cite>` tags | None | Article references industry sources, the Anthropic incident, standards bodies | **2** | Wrap as needed. |
| `rel="external"` | None | Numerous outbound links to vendor sites and news sources | **1** | Add to all off-site links. |
| Composability interlock | Word "compos" appears once in prose (around line 282, in the context of Autonomaton properties) | No link to GRV-002's composition primitives or GRV-001's composability invariant | **2** | Once GRV-001 has `#composability` and GRV-002 has `#composition-primitives`, wrap the prose mention in an anchor link. Similar treatment for "interface" mentions at lines 193 and 377 — link to GRV-003's `#composition-interfaces`. |
| Broken `/papers/` link | `href="/papers"` appears at line 515 | Post-rename stale link | **1** | Correct to `/alerts`. |
| FAQPage | None | No cruxes structured | **2** | Cruxes: *What exactly is the telemetry trap? How is it different from ordinary API lock-in? Why can't this be solved by better contracts? What makes Conway a representative case and not an edge case?* |
| Register alignment | Pre-standard register | "Conway" as named antagonist is sharper than GRV-003's register; the paper may benefit from framing notes rather than rewriting | **3** | Editorial review, not markup. Flag for operator decision: does the paper benefit from a short "This paper was written before the AI-First Publication Standard; the register predates the Dutch Goose framing" editorial note, or should the register stand as-is and the standard simply absorb the diversity of Grove's voices? Not a markup question. |

**Line-count estimate:** ~180–230 lines of additions to the current 552-line file.

### The Architectural Gap (`/alerts/architectural-gap`)

A shorter four-part structural argument. Light refactor relative to the other papers but important because it is frequently linked from other Grove writing.

| Criterion | Current | Gap | Tier | Action |
|---|---|---|---|---|
| Meta stack | Bare | Same as others | **1** | Full meta stack. `DC.relation` to GRV-001. |
| JSON-LD | None | Four Parts unstructured | **1** | Article with `hasPart` for the four Parts (with descriptive summaries of what each Part argues), `isBasedOn` to GRV-001. |
| Anchor IDs | `#hero` only | Four Parts unreachable | **1** | Rename `part-i` / `part-ii` etc. visual markers to semantic IDs. Requires reading Parts I–IV to pick names; inventory pass yields: `#the-gap` (Part I), `#why-policy-fails` or similar (Part II), `#architectural-alternative` (Part III), `#implications` (Part IV). Operator to confirm names at sprint time. |
| `<dfn>` tags | None | Canonical terms from GRV-001 reappear | **2** | Wrap first mentions; link to canonical definitions in GRV-001 and vocabulary. |
| `<cite>` tags | None | External reference count low | **2** | Apply where needed. |
| `rel="external"` | None | Few outbound links | **1** | Add as needed. |
| Broken `/papers/` link | Line 186, 205 reference `/papers` | Post-rename stale | **1** | Correct to `/alerts`. |
| Composability linkage | Zero mentions of compose/federate/interface | Nothing to link | **—** | No action needed. Paper predates composition thesis; editorial call whether to add retroactively (Tier 3). |
| FAQPage | None | Optional | **2** | Cruxes if the paper warrants them — review at sprint time whether the argument is question-driven enough to benefit from FAQPage structure. |

**Line-count estimate:** ~100–140 lines of additions to the current file.

### The AI Deployment Pattern Benchmark (`/alerts/ai-deployment-pattern-benchmark`)

The Λ (Lambda) landscape audit. Data-heavy, section-rich, already has two IDs (`#p...` and `#a...` — `#preface` and `#about-this-research` respectively, based on structure). The paper is Grove's most-cited by external readers and the one that most rewards careful structured-data treatment because the underlying data is structured.

| Criterion | Current | Gap | Tier | Action |
|---|---|---|---|---|
| Meta stack | Bare | Same as others | **1** | Full meta stack. `DC.subject` should include the Λ framework as a named method. |
| JSON-LD | None | A landscape of model scores and framework description is unstructured | **1** | TechArticle with `mentions[]` for every scored organization (Anthropic, OpenAI, Google, Meta, Mistral, DeepSeek, etc.) — this paper's `mentions[]` array is large by necessity. `citation[]` for source reports. `hasPart` for major sections. Most importantly: the Λ scores themselves should be a structured dataset, exposed as a separate `/alerts/ai-deployment-pattern-benchmark/scores.json` or as an inline Dataset JSON-LD fragment. |
| Anchor IDs | Two existing (`#preface`, `#about-this-research`) | Many internal sections unreachable | **1** | Add IDs for: the Λ framework definition section (`#lambda-framework`), the scoring methodology (`#methodology`), each tier's section if present, the landscape table (`#landscape-table`), recommendations section. Benchmark table itself: every row should be a linkable entity. |
| `<dfn>` tags | None | "Lambda framework", "Critical Mass", "Structurally Inert", "Approaching Critical", "Sub-Critical", "Validation Multiplier" all canonical | **2** | Wrap at first mention. Link to vocabulary. |
| `<cite>` tags | None | The paper cites external reports and vendor documentation | **2** | Apply to titles. |
| `rel="external"` | None | Many outbound links to vendor sites and sources | **1** | Add systematically. |
| Broken `/papers/` link | Lines 985, 1024 reference `/papers` | Post-rename stale | **1** | Correct to `/alerts`. |
| Data-as-data | Scores live in HTML table cells | The benchmark *is* a dataset; it should publish itself as one | **2** | Publish the Λ score landscape as a separate JSON file. Each scored entity gets a structured record with its components (S, R, V, β, Fc values and the computed Λ). This is arguably the highest-value structured-data addition on the entire site — every downstream piece of Grove Λ writing can reference a canonical, current, machine-readable landscape. |
| FAQPage | None | High-value on this paper | **2** | Cruxes: *What does Λ measure? Why is Grove's own score at the bottom? How often is the landscape updated? How can a vendor improve their score?* |

**Line-count estimate:** ~350–450 lines of additions to the current 1029-line file, plus a new JSON file for the score dataset.

### GRV-003 — The Learner Autonomaton (`/standards/003`)

GRV-003 is richer than any other existing Grove page but falls short of the Alert #04 baseline on four measurable counts. It is audited last, per operator direction, and requires the lightest-touch refactor.

| Criterion | Current | Gap | Tier | Action |
|---|---|---|---|---|
| Dublin Core | 9 tags | Missing `DC.relation`, `DC.source` | **1** | Add. `DC.relation` chains to GRV-001 (the parent pattern) and (eventually) to the vocabulary. `DC.source` could reference Lumina Credentials of Value framework or Merisotis 2020 as appropriate. |
| Open Graph | 5 tags | Missing `og:image` | **1** | Create image asset and add. Same for `twitter:image`. |
| `article:*` taxonomy | None | GRV-003 is a published article and benefits from the taxonomy | **1** | Add `article:published_time`, `article:author`, `article:section` ("Open Standard"), `article:tag` entries for the major subjects. |
| JSON-LD `isBasedOn` | Uses `citation[]` only | `isBasedOn` is the canonical-parent-work declaration; `citation[]` is for external primary sources being discussed | **1** | Add `isBasedOn[]` chain to GRV-001 and (eventually) GRV-002. Keep `citation[]` for Clark & Chalmers, Merisotis, Alexander. The two fields are not redundant; `isBasedOn` is architectural lineage, `citation[]` is scholarly reference. |
| JSON-LD `mentions[]` | Uses `about[]` only | `about[]` is for subjects; `mentions[]` is for named entities | **1** | Add `mentions[]` for Lumina Foundation, Purdue University, Mung Chiang, Jim Bullard, Eli Lilly, specific programs. Keep `about[]` for subjects. Same non-redundancy logic as above. |
| `rel="external"` | None | Outbound links (Lumina, Purdue, etc. as named entities if linked) | **1** | Add where outbound links exist. |
| JSON manifest | None | `/standards/GRV-003.json` does not exist | **2** | Pattern identifier, the five movements as HowToStep-equivalents, the composition thesis and its eight node types, the composition interfaces as structured data, the attestation tiers, the co-sign protocol mechanics, the eight institutional preconditions. |
| Anchor IDs | Good coverage (`#movement-i` through `#movement-v`, plus internal section IDs) | A few subsection-level IDs could be added but coverage is already strong | **—** | No Tier 1 action. Tier 2 review for subsection-level additions if found necessary during cross-linkage work. |
| `<dfn>` coverage | 8 `<dfn>` tags present | Some canonical terms still unwrapped — "Cognitive platforming" at §2, "Ratchet" at §8 | **2** | Light pass to cover remaining first mentions. |
| Glossary DL → DefinedTermSet JSON-LD | Glossary DL exists but is not structurally linked to JSON-LD `@type: DefinedTermSet` | Structured data for the glossary doesn't exist | **2** | Add DefinedTermSet fragment to JSON-LD, with each DL entry as a DefinedTerm. Same fragment can be promoted to the site-wide DefinedTermSet in Sprint 3. |

**Line-count estimate:** ~80–120 lines of additions to the current 1343-line file. Much smaller than the other primary pages because GRV-003 starts much richer.

### Secondary pages (light pass)

| Page | Current state | Recommended Sprint 3 treatment |
|---|---|---|
| `/` (root landing) | Bare head | Meta stack appropriate for a site-level landing (site-wide `og:*`, Organization JSON-LD, links to `/for-agents`). Hero section anchor. |
| `/lambda` (Λ Standings) | Bare head | Meta stack. Dataset JSON-LD (the standings themselves as structured data — high-value). Link to Benchmark paper as `isBasedOn`. |
| `/observations` | Bare head | Meta stack. Blog index JSON-LD. Individual posts become linkable artifacts. |
| `/ratchet` (Ratchet Test) | Bare head | Meta stack. HowTo JSON-LD structure for the three-question test. Definitional anchor for "the Ratchet Test" as a canonical instrument. |
| `/about` | Bare head | Meta stack. Organization and Person JSON-LD. |
| `/membership` | Bare head | Meta stack. Service JSON-LD describing the Grove membership program. |
| `/standards/` (category index) | Bare head | Meta stack. CollectionPage JSON-LD with the three standards as member entities. |
| `/alerts/` (category index) | Bare head | Meta stack. Blog or CollectionPage JSON-LD with the four alerts as member entities. |

Secondary-page work is mechanical and can proceed in parallel with agent-facing infrastructure (`/for-agents`, `.well-known/grove.json`) in Sprint 3.

---

## Cross-linkage map

### Current state (what links where)

The current graph is thin. Documented links, inbound/outbound, among primary publications:

- **GRV-001** → GRV-002 (footer download-bar link) → creativecommons.org (CC license)
- **GRV-002** → no direct links to GRV-001 or GRV-003
- **GRV-003** → GRV-001 (inline link in §1 method aside: "the Autonomaton pattern (GRV-001)")
- **Telemetry Trap** → `/standards` (nav), `/papers` (stale, broken post-rename)
- **Architectural Gap** → `/standards` (multiple references at lines 160, 181), `/papers` (stale)
- **AI Deployment Pattern Benchmark** → `/papers` (stale, two references)
- **Alert #04** → GRV-003, GRV-001, Telemetry Trap, Benchmark paper (via JSON-LD `isBasedOn`; body has many outbound `the-grove.ai` links)

No primary page currently deep-links into another primary page's internal sections. No paper links to a specific GRV-001 principle, to a GRV-002 composition primitive, or to a GRV-003 movement. Everything is document-level linkage at best.

### Target state (what should link where)

After the epic, the graph should be dense and specific. Representative deep links that should exist:

- **GRV-001 §III (pipeline)** outbound: to GRV-002 `#hourglass` (the TCP/IP correspondence), to GRV-003 `#movement-ii` (the pipeline invariant reference in the learner context).
- **GRV-001 §IV (principles)** outbound: to GRV-002 `#six-principles` (the protocol correspondence), to the vocabulary for each principle.
- **GRV-001 §IV-5 (Composability, new)** outbound: to GRV-002 `#composition-primitives`, to GRV-003 `#composition-thesis` and `#composition-interfaces`.
- **GRV-002 §III (cognitive-domain mappings)** outbound: to GRV-001's corresponding principle anchors for each of the six mappings.
- **GRV-002 §IV (composition primitives)** outbound: to GRV-001 `#composability`, to GRV-003 `#composition-thesis` (the primitives realized in the university-composition context).
- **GRV-003 §5, §10** outbound: to GRV-001 `#composability` and GRV-002 `#composition-primitives`. Close the interlock.
- **Telemetry Trap §III** outbound: to GRV-001 `#pipeline`, `#cognitive-router`, `#flywheel`; to GRV-002 `#reverse-tax`.
- **Telemetry Trap prose** every mention of "compose" / "interface" outbound: to GRV-002 `#composition-primitives` or GRV-003 `#composition-interfaces`.
- **Architectural Gap Part III** outbound: to GRV-001 `#principles`.
- **AI Deployment Pattern Benchmark** outbound: to GRV-001 for every canonical pattern term invoked; `isBasedOn` in JSON-LD to GRV-001.
- **Every primary page** outbound: to the vocabulary for every `<dfn>` wrap.

### Orphaned canonical terms

Terms that appear in body prose across the Grove corpus with no anchor or definition link to their canonical home. These are the specific deep-link additions Sprint 2 should execute.

| Term | Appears in | Canonical home | Link target after Sprint 1 |
|---|---|---|---|
| Autonomaton | Every paper | GRV-001 hero | `/standards/001#hero` or (better) `/vocabulary#autonomaton` |
| five-stage pipeline | Telemetry Trap, Benchmark, GRV-003 | GRV-001 §III | `/standards/001#pipeline` |
| cognitive router | Telemetry Trap | GRV-001 §III sub | `/standards/001#cognitive-router` |
| Stage 4 / Stage-4 approval | Telemetry Trap, GRV-003 | GRV-001 §V | `/standards/001#stage-4` |
| zone model | Every paper | GRV-001 §V | `/standards/001#zone-model` |
| Red zone / Yellow zone / Green zone | Every paper | GRV-001 §V | `/standards/001#zone-model` |
| Skill Flywheel | Telemetry Trap | GRV-001 §VI | `/standards/001#flywheel` |
| the Ratchet | Every paper | GRV-001 §VI | `/standards/001#flywheel` and `/vocabulary#the-ratchet` |
| composability / composable | Telemetry Trap, Benchmark, Architectural Gap (potentially) | GRV-001 §IV-5 (after Sprint 1) | `/standards/001#composability` |
| composition primitives | nowhere yet explicitly | GRV-002 §IV | `/standards/002#composition-primitives` |
| Reverse Tax | Benchmark, Alert #04 | GRV-002 §V | `/standards/002#reverse-tax` |
| cognitive platforming | GRV-003, Alert #04, implicitly elsewhere | GRV-003 §2 | `/standards/003#cognitive-platforming-hazard` |
| memorialized judgment | GRV-003, Alert #04 | GRV-003 §9 | `/standards/003#memorialization` |
| provenance arc | GRV-003 | GRV-003 §15 | `/standards/003#provenance-arc` |
| attestation tier | GRV-003 | GRV-003 §9.9 | `/standards/003#attestation-tier` |
| substrate | GRV-003, Alert #04 | GRV-003 §1 method aside | `/standards/003#substrate` |
| Digital Jidoka | GRV-001, GRV-003 | GRV-001 §II (lineage) | `/standards/001#lineage` and `/vocabulary#digital-jidoka` |
| terroir | GRV-003, Alert #04 | GRV-003 §17 | `/standards/003#terroir` |
| Λ / Lambda framework | Alert #04, Benchmark, `/lambda` | Benchmark paper (framework definition section) | `/alerts/ai-deployment-pattern-benchmark#lambda-framework` |

Roughly twenty high-value deep-link additions across the three papers and GRV-003. Execution is Sprint 2.

---

## Composability interlock findings

The Composability interlock is the most consequential structural gap in the corpus. This section documents it in detail because it is the single finding the audit most needs Jim to look at and agree to.

### What the interlock is

Grove's thesis is that Autonomatons compose. GRV-001 introduces Autonomatons. GRV-002 specifies the composition primitives (chain, branch, hierarchy, mesh, zone-nesting, federation, recursive). GRV-003 specifies the composition interfaces (telemetry, retrieval, consent, provenance, endorsement) and the composition thesis at institutional scale. Alert #04 argues for composability at the regional-terroir scale. The AI-First Publication Standard we just adopted argues composability applies to publications themselves.

Composability is therefore the single most-invoked architectural property across the corpus. It is the Grove thesis's operative claim. It is the property that distinguishes the Grove architecture from every centralized alternative.

And it is not a named invariant in GRV-001. GRV-001 §IV lists four principles: Declarative Sovereignty, Capability Agnosticism, Provenance as Infrastructure, Human-AI Symbiosis. The word "composability" appears once in GRV-001, in §III, in a list of properties ("auditability, composability, portability, and the structural guarantee that every action can be traced to a governance decision a human can read"). It is not anchored. It is not defined. It is not argued for.

### Why the interlock matters

A reader — human or AI — arriving at GRV-003 encounters extensive arguments for composition and is told (correctly) that these arguments descend from GRV-001's pattern. Following the reference backward, the reader arrives at GRV-001 and finds no canonical home for the concept. The argument has no anchor. GRV-003's `isBasedOn` claim cannot resolve. The AI summary of GRV-003's composition thesis cannot link back to a foundational definition. The composability claim floats.

Worse: a reader arriving at GRV-002 — which is explicitly a paper about composition as a protocol property — cannot find the invariant in the Autonomaton pattern it descends from. GRV-002 argues *"the five-stage pipeline is the hourglass invariant that makes composition possible,"* which is correct but rhetorically awkward when the source pattern doesn't name composability as an invariant. The argument is rigorous; the publication graph makes it look provisional.

### The fix

Sprint 1 adds Composability as the fifth Autonomaton invariant in GRV-001 §IV. A new principle card, mirroring the existing four, with title, description, compliance test, and anchor ID `#composability`. The principle card's text is drafted against the invariant as it is already used across the corpus — not as a new idea, but as the explicit naming of what GRV-002 and GRV-003 already presume, carried in the [cultivation architecture](../grove-canonical-vocabulary.md#cultivation-architecture) frame that the founding white paper established and the AI-First Publication Standard formalized. Draft text for the card, for operator review:

> **V. Composability**
>
> Sovereign Autonomaton nodes compose through declarative interfaces rather than adapter code. The interfaces are structural — pipeline shape, telemetry format, zone semantics — not technological; an Autonomaton cultivated in YAML files, in a Notion database, in a Python service, or in text files and a shell script all compose identically, because they share architecture rather than code. This is cultivation architecture at work: the structural commitments create conditions for composition; the composition itself emerges when the commitments hold. Variance of substrate, of domain, of scale is the property the architecture relies on — the rich topology of a federated Autonomaton network is what grows from correct cultivation, not what gets engineered on top of it.
>
> *The test: can two independently developed Autonomatons — cultivated in different substrates, at different scales, by operators who have never met — compose into a working system by sharing only the pipeline shape, the telemetry format, and the zone semantics?*

Once this card exists, GRV-003 §5, GRV-002 §IV, and every downstream paper has a backward link target. The interlock closes. Every subsequent Sprint-2 deep-link into `#composability` becomes possible. The Grove thesis has its operative-claim anchor.

This is the single most important edit in the epic. Sprint 1 is scoped around making it first.

---

## Canonical-term inventory for vocabulary ratification

This section is the audit's structural extraction: every term in Grove publications that appears in a definitional position — glossary entries, bolded first mentions, `<dfn>` candidates, italicized term-of-art usage — grouped by source document. At the end of the audit, this list is ratified into `docs/grove-canonical-vocabulary.md` in a single pass, producing the canonical vocabulary's complete first version.

Terms already in the vocabulary are marked (✓). Terms identified here but not yet in the vocabulary are marked (+) and are candidates for the ratification pass.

### GRV-001 corpus

- Autonomaton ✓
- The five-stage pipeline ✓
- Telemetry / Recognition / Compilation / Approval / Execution (the five stage names individually; currently bundled under "the pipeline" in the vocabulary) +
- Cognitive router ✓
- Tiers (T0, T1, T2, T3) — currently referenced in the cognitive router entry but worth its own vocabulary entry as "the tier landscape" +
- Zone model (Green / Yellow / Red) ✓
- Declarative Sovereignty +
- Capability Agnosticism +
- Provenance as Infrastructure +
- Human-AI Symbiosis +
- Composability (Sprint 1 canonical introduction) +
- Skill Flywheel — currently folded into "the Ratchet" entry, worth separating +
- The three-act architecture (Autonomaton → Trellis → Knowledge Commons) +
- Digital Jidoka ✓
- Autonomic Computing ✓
- Computational Reflection ✓
- Telemetry-Driven Development +
- DEX (Declarative Exploration standard) +

### GRV-002 corpus

- The hourglass invariant ✓ (fate-sharing listed adjacent; hourglass is the specific term)
- The end-to-end argument ✓
- Fate-sharing ✓
- Layered independence +
- Protocol-over-implementation +
- The Simplicity Principle +
- Composition primitives ✓
- Chain / Branch / Supervisor-worker hierarchy / Peer mesh / Hierarchical zone nesting / Federation / Recursive case (the seven named primitives individually — currently bundled under "composition primitives") +
- The Reverse Tax ✓
- The governance innovation (what TCP/IP lacked) — mentioned in §VI as an architectural property, possibly worth a vocabulary entry +

### GRV-003 corpus

- The Learner Autonomaton +
- Cognitive platforming ✓
- Platforming cognition ✓ (verbal form)
- Memorialized judgment ✓
- The cognitive elevator — mentioned in the memorialized judgment entry, worth its own entry +
- Substrate (cognitive) ✓
- Routing layer +
- Provenance arc ✓
- Attestation tier ✓
- Verification Property +
- Co-Sign Protocol ✓
- Endorsement (composition interface) +
- Stage 4 (human approval) ✓
- Red zone +
- Composition (thesis) +
- Composition interfaces ✓
- Terroir ✓
- The compute landscape (commercial apex / commercial mid / institutional / peer federation / local / sovereign deterministic) +
- The Ratchet (learner trajectory sense) ✓
- The dock (institutional memory made personal) +
- Goals (Red-zone aspiration) +
- Credential (as provenance-arc view) +
- Federated expertise economy +
- The sixty-year lifecycle +

### Telemetry Trap corpus

- The telemetry trap (the title concept itself, as a structural condition) +
- Conway (as named architectural case) — reference entity, not a Grove coinage, but worth a Grove-adjacent or mentions-ready entry +
- Behavioral lock-in +
- The .cnw.zip paradox — specific to this paper, probably doesn't warrant vocabulary entry but worth flagging for operator review +
- The Google Play Services pattern (as architectural analogy) — Grove-adjacent +
- The MCP paradox +

### Architectural Gap corpus

(Light inventory required after the paper body is read in full during Sprint 2 planning. Preliminary list based on current read:)

- The architectural gap (title concept) +
- Governance-by-architecture vs. governance-by-policy distinction +

### AI Deployment Pattern Benchmark corpus

- The Λ (Lambda) framework ✓
- Critical Mass +
- Approaching Critical +
- Sub-Critical +
- Structurally Inert +
- Validation Multiplier (V) +
- β (beta) aggregation +
- Fc (friction coefficient) +
- The reverse ratchet +

### Alert #04 corpus

(Most terms reuse canon from above. New coinages in this Alert:)

- Sovereignty thesis +
- Seed corn (in the open-weights argument) — adopted phrase from Ramaswamy/Perault being responded to; Grove uses it with canonical sense +
- Dependency Ratchet ✓ (cross-referenced in the Ratchet entry)

### AI-First Publication Standard corpus

- First-reader primacy ✓ (coinage, already in vocabulary)
- The hospitable graph ✓ (coinage)
- Agent-hostile / agent-hospitable ✓ (coinage)
- The medium is the message ✓ (McLuhan adoption)
- Pattern language ✓ (Alexander adoption)

### Ratification count

- Already in vocabulary: ~24 terms
- Identified in this audit, to be added at ratification: ~60 additional entries (some are sub-concepts to be folded into existing entries rather than stand-alone)
- Operator review needed: ~8 terms that are provisional or paper-specific and may not warrant canonical vocabulary entries

Ratification is a single commit at audit close: the audit document is frozen, the vocabulary document is updated with the new entries, and a diff is produced for operator review. If operator rejects specific additions, the vocabulary document is revised before the commit closes.

---

## Prioritized refactor plan

### The epic: The Hospitable Graph

**Outcome:** The Grove publication graph becomes a live demonstration of the Autonomaton composition thesis. Any AI reader pointed at `the-grove.ai` produces a faithful, inviting, composable summary that preserves Grove's canonical vocabulary, lineage, stance, and voice. The first-reader test (§First-reader test of the AI-First Publication Standard) passes five-of-five on four-of-four models.

**Three sprints, sequenced.**

### Sprint 1 — Foundation: GRV-001 as reference implementation

**Scope:** GRV-001 only. One page.

**Exit criteria:**
- Full meta stack per AI-First Publication Standard conformance list.
- Complete JSON-LD TechArticle block with `isBasedOn`, `mentions[]`, `citation[]`, `hasPart`, `speakable`.
- Stable semantic anchor IDs on every section, including `#composability` on the new fifth invariant.
- `<dfn>` tags on first mentions of every canonical term.
- `<cite>` tags on external work titles.
- `rel="external"` on outbound links.
- Pronunciation metadata on "Autonomaton" in hero.
- `/standards/GRV-001.json` manifest published, exposing the pattern as structured data.
- FAQPage fragment with four-to-five cruxes.
- Composability added as the fifth Autonomaton invariant. Draft text in this audit, ratified at sprint close.
- Vocabulary-document ratification: all GRV-001-sourced terms added to `docs/grove-canonical-vocabulary.md` as part of this sprint's commit.

**Dependencies:** None. This sprint unblocks Sprint 2.

**Risk:** The Composability addition is a substantive content edit, not a markup edit. Operator review required at sprint-planning time to ratify the draft principle-card text and anchor the concept before downstream sprints depend on it.

**Estimated complexity:** Moderate-to-high. The markup work is mechanical; the Composability content edit is the high-leverage decision. Single focused session with operator review of the principle-card text.

### Sprint 2 — Graph: the rest of the primary publication corpus

**Scope:** GRV-002, GRV-003 (bring to Alert #04 baseline), Telemetry Trap, Architectural Gap, AI Deployment Pattern Benchmark. Five pages.

**Exit criteria, per page:**
- Full meta stack per standard.
- Complete JSON-LD with appropriate type, `isBasedOn` chains pointing up to GRV-001/002/003, `mentions[]` for named entities, `citation[]` for primary sources.
- Semantic anchor IDs on every major section.
- `<dfn>` tags on canonical-term first mentions.
- `<cite>` tags on external work titles.
- `rel="external"` on outbound links.
- Every composability / composition / interface / federation prose mention wrapped in an outbound anchor link to the canonical home (GRV-001 `#composability`, GRV-002 `#composition-primitives`, GRV-003 `#composition-interfaces`). Close the interlock.
- Broken `/papers/` links in three papers repaired to `/alerts/`.
- Alert #04's stale `isBasedOn` URL for Telemetry Trap repaired.
- GRV-003 gets its `isBasedOn` added to JSON-LD (Alert-#04 baseline).
- JSON manifests for GRV-002 and GRV-003 published.
- FAQPage fragments on the major papers where cruxes are clear.
- Vocabulary-document ratification: every sprint-2-sourced term added in the sprint commit.

**Dependencies:** Sprint 1 (GRV-001's anchor IDs must be stable; `#composability` must exist as a backward link target).

**Risk:** Volume. Five pages is significantly more than Sprint 1's one. This sprint may benefit from internal subdivision — GRV-002 + GRV-003 as one sprint (the standards pages), the three papers as a second. Operator to decide at sprint-planning time. The audit recommends single-sprint execution because the pattern is now stable from Sprint 1 and replication across pages is mechanical; but if complexity exceeds what fits a single session, subdivision is safe.

**Editorial flags (Tier 3, not in scope):** The Telemetry Trap's pre-standard register; the Architectural Gap's Parts naming; GRV-002's draft-vs-deployed state. These are operator-review items flagged for separate handling.

### Sprint 3 — Hospitality: the agent-facing infrastructure

**Scope:** Site-wide agent-facing infrastructure plus secondary pages.

**Exit criteria:**
- `/for-agents` page published. Contents: canonical reading order, the five preserved-claim list, pointer to the vocabulary DefinedTermSet, the valence taxonomy (Grove canon / adjacent / opposed), CC BY 4.0 as structural invitation, optional AI-assisted exploration prompt template.
- `.well-known/grove.json` file published: the machine-readable companion to `/for-agents`, addressed to AI clients.
- `/vocabulary.json` published: the site-wide `schema:DefinedTermSet` derived from `docs/grove-canonical-vocabulary.md`.
- Secondary pages (root landing, `/lambda`, `/observations`, `/ratchet`, `/about`, `/membership`, and the two category indices) brought into structural compliance with a lighter but consistent markup pattern.
- The Λ landscape published as structured data: either a standalone `/lambda/scores.json` or an inline Dataset JSON-LD fragment on the `/lambda` and Benchmark pages.
- First-reader test executed against all four models (Grok, ChatGPT, Claude, Gemini) with the site at post-Sprint-3 state. Results documented. Pass/fail on the five properties recorded.

**Dependencies:** Sprint 1 and Sprint 2 complete. The Sprint-3 infrastructure points at the graph the earlier sprints built; it cannot be built in isolation.

**Risk:** The first-reader test is a ship gate. If it fails on meaningful properties, Sprint 3 may need to iterate before the epic closes. Iteration plan documented at sprint-planning time.

**Completion:** At Sprint 3's close, the Hospitable Graph epic ships, and the AI-First Publication Standard graduates from v0.1 working draft to v1.0. The Grove site is now the reference implementation of its own publication standard.

---

## Non-recommendations

Items considered during this audit and intentionally excluded from the epic. Each is flagged with the reasoning, so that future operator review has the record.

**Translation of pages into other languages.** A hospitable graph in English serves the immediate audience. Multilingual support is a valid future concern and adds structural complexity (hreflang, per-language DefinedTermSet variants, per-language speakable lines); it is not in scope for this epic. Flag for future consideration.

**Retrofitting "Parts I–IV" in the Architectural Gap to semantic names.** The Architectural Gap uses "Part I" etc. as section markers. The audit recommends adding semantic anchor IDs (`#the-gap`, `#why-policy-fails`, `#architectural-alternative`, `#implications`) but leaving the visible "Part I" labels intact. Operator review at sprint time if rename desired.

**Editorial alignment of the Telemetry Trap to the Dutch Goose register.** The Telemetry Trap was written before the standard existed and carries a slightly sharper-edged register (Conway as named antagonist). The audit flags this as a Tier 3 editorial consideration but recommends *against* rewriting. The diversity of Grove's voices is a feature. A short editorial note on the paper acknowledging its pre-standard origin is a valid operator option; full register-alignment rewrites are not.

**A site-wide breadcrumb component.** Many hospitable-graph moves can be achieved through meta stack and JSON-LD alone; a visual breadcrumb component in the UI layer is a UX enhancement that does not meaningfully improve first-reader behavior. Out of scope.

**Comment threads or Twitter embeds.** The Dutch Goose frame invites commentary; the channel for commentary is CC BY 4.0 openness, member program participation, and external platform engagement. On-site commentary infrastructure is a large scope with its own standards; out of the Hospitable Graph epic.

**Retroactive addition of McLuhan's *Understanding Media* citation to every existing Grove page.** McLuhan is now canonically cited in the AI-First Publication Standard. Propagating him to the existing standards and papers is neither necessary nor desirable — those works have their own lineage traditions (Alexander, Clark, IBM, Saltzer/Reed/Clark, Chalmers, Merisotis). McLuhan is specifically the lineage for the publication standard itself. He stays where he is.

**Deep refactoring of the Ratchet (`/ratchet`) page beyond Sprint-3 baseline.** The Ratchet Test is a canonical Grove instrument and deserves its own dedicated structural treatment (HowTo JSON-LD, the three questions as schema:Question objects). Sprint 3 brings it to baseline; a separate future sprint may elevate it to canonical-instrument status. Flag for future planning.

**A full Benchmark Dataset publication standard.** The Benchmark paper's score landscape as structured data is a high-value Sprint-2 addition. A *formal* Grove Dataset standard (GRV-005 or equivalent) specifying how Grove publishes datasets generally is a much larger scope. The Benchmark gets its data published in Sprint 2; a Dataset standard is a separate future initiative.

---

## Closing

The Grove publication graph at 2026-04-20 is mostly composed of Autonomaton-adjacent content wrapped in pre-standard HTML. The thesis is strong. The markup, other than on two pages, is invisible to the first reader. The epic this audit recommends fixes that — not by adding SEO features, but by demonstrating the Autonomaton composition thesis on the publication surface the Foundation is responsible for.

The audit's single most load-bearing finding is the Composability interlock. The fix is one paragraph of new content in GRV-001, one anchor ID, one principle card, and one vocabulary entry. That edit unlocks the rest of the epic.

The audit's single most strategic finding is that Alert #04, not GRV-003, is the compliance target. The standard has already shipped its own best reference implementation; the work ahead is propagation.

*This document is archival at the epic's completion. Post-Sprint-3, the vocabulary and the standard are the living references; this audit is the snapshot that justified the work.*

— The Grove Foundation · 2026-04-20
