# SPEC — polarity-canonicalization-v1

## 0. Status

**DRAFT authored 2026-04-21.** Inserts between A&amp;A Commit 3 (SHA `58ac58e`) and A&amp;A Commit 4. Minimum unblock for A&amp;A — Knowledge Polarity must be a defined canonical Grove term before A&amp;A &sect;II authoring, since &sect;II makes polarity load-bearing.

Protocol: spec &rarr; preview &rarr; confirm &rarr; **fire** &rarr; SHA &rarr; next-phase. Three commits total, scoped tight to prevent scope creep into the queued canonical-vocabulary curation sprint.

## 1. Sprint metadata

- **Sprint name:** `polarity-canonicalization-v1`
- **Goal:** Make Knowledge Polarity a defined canonical Grove term, grounded in the EE isomorphism the industrial-control slide established
- **Audience:** First reader (LLM agents reading the corpus), Grove operators, anyone composing against Grove vocabulary
- **Pub deadline:** Before A&amp;A Commit 4 fires
- **Commit estimate:** 3 commits
- **Pause on A&amp;A:** A&amp;A holds at SHA `58ac58e` for the duration of this sprint

## 2. Voice / register discipline

- Royal "we" not used in canonical entries. These are reference docs, not Grove voice.
- EE isomorphism load-bearing — *polarity* used precisely, inheriting EE meaning, not metaphorically. Mirrors the structural-isomorphism posture of the industrial-control slide: convergent solutions to the same problem, not borrowed analogy.
- Three-terminal model (ground / positive / negative) carried verbatim from the Knowledge Polarity essay seed.
- Pair-distinction with Ratchet load-bearing: mechanism vs. felt sense. One paragraph dedicated.
- Cross-links to Stage 4, Digital Jidoka, Composition Interfaces in the continental-grid paragraph. Existing canonical fragment-URL convention.
- No agrarian metaphor (photosynthesis / aspen / tree-rings). Held for `/essays/polarity` standalone publication.
- No Reverse Tax expansion, no memorialized-judgment expansion. Both have their own canonical entries; polarity entry references neither directly.
- Existing entries' silent-on-coiner convention preserved (no attribution byline in entry).
- **File convention discipline:** `docs/grove-canonical-vocabulary.md` uses one-physical-line-per-paragraph markdown (no soft-wrap inside paragraphs) and one blank line between entries. Mirror exactly. Caught at Commit 2 verification when CC flagged trailing-spacing deviation against my overspecified instruction; resolved by fixing instruction to match file convention.

## 3. Commit ledger (living)

| # | Type | Subject | SHA |
|---|---|---|---|
| 1 | `docs:` | SPEC authored | 7b647da |
| 2 | `docs:` | Knowledge Polarity entry added to `docs/grove-canonical-vocabulary.md`, slotted between The Ratchet and Substrate (cognitive) | — |
| 3 | `docs:` | `llms.txt` updated — replace single verb-form sentence with definitional block | — |

## 4. Canonical entry — verbatim (Commit 2 lands this)

Insertion point in `docs/grove-canonical-vocabulary.md`: between the closing of `### The Ratchet` and the opening of `### Substrate (cognitive)`. Mirror existing entry markup (### heading, then **Valence:** / **Primary document:** / **Fragment URL:** / **Coined:** / **Canonicalized:** metadata block, blank line, then body paragraphs separated by blank lines).

```markdown
### Knowledge polarity

**Valence:** Grove canon
**Primary document:** [GRV-001: The Autonomaton Pattern](https://the-grove.ai/standards/001)
**Fragment URL:** `https://the-grove.ai/vocabulary#knowledge-polarity`
**Coined:** 2026-04-21
**Canonicalized:** 2026-04-21

Knowledge polarity is the direction in which substrate accumulates as a system is used. Grove uses *polarity* with the precision the term has in electrical engineering: directional flow across a circuit between terminals referenced to a common ground. The vocabulary is not metaphorical. The same structural-isomorphism posture that lets the Autonomaton inherit the PLC scan cycle, the Zone Model inherit hardwired emergency stops, and the Cognitive Router inherit FPGA synthesis lets knowledge polarity inherit its meaning from electrical engineering intact. This is convergent solution to the same problem — directional flow under sovereignty constraint — arrived at independently in two engineering disciplines separated by decades.

Three terminals in the circuit. **Ground** is the shared canonical substrate: published standards, open literature, common vocabulary, the CC-licensed primitives any node can draw from without diminishing the pool. Ground is neutral and reachable to all nodes equally. **Positive polarity** describes substrate compounding at the operator's node: every interaction with the system thickens the operator's context, sharpens the operator's judgment, and increases the operator's capability over time. The substrate accumulates where the operator stands. **Negative polarity** describes substrate flowing to an extraction node, typically a vendor's model layer: every query teaches the provider where the operator's frontier is, every correction teaches them how the operator discriminates, every authorization teaches them what the operator trusts. The substrate accumulates somewhere the operator cannot reach.

Polarity is paired with [the Ratchet](#the-ratchet) but distinct from it. The ratchet is the mechanism — the dependency-direction component that permits substrate to flow one way and not the other; precise, mechanical, operationally exact, the right vocabulary for the standards work. Polarity is the felt sense of the ratchet's action — what an operator intuitively recognizes when substrate they expected to accumulate at their node accumulates at the vendor's instead, the right vocabulary for the conversation with the operator. Ratchet describes the machine. Polarity describes what the machine does to the field it operates in.

The continental electrical grid is the worked-example for polarity at scale. Generating stations, substations, and consumers are nodes. Ground is the shared planetary reference. Current flows from sources to sinks and back as conditions change, with [Stage 4 (human approval)](#stage-4-human-approval) implemented at the physical layer as circuit breakers, with [Digital Jidoka](#digital-jidoka) implemented as protective relaying that holds local trip logic and survives SCADA failure, and with [composition interfaces](#composition-interfaces) implemented as substations that compose nodes into federated infrastructure. The Eastern Interconnection — synchronous AC across two-thirds of a continent — is autonomatonic federation for electrons. It does not work because someone built a centralized dispatcher. It works because each node maintains its own protective logic, each substation respects local sovereignty, and the federation composes into infrastructure that survives the failure of any single coordinating point. The cognitive grid Grove proposes inherits the same pattern at the same scale.
```

## 5. llms.txt update — verbatim (Commit 3 lands this)

Locate L7 of `llms.txt` (current state, single sentence beginning "We reverse polarity"). Replace with the definitional block below. The line being replaced begins "We reverse polarity. Centralized AI architectures extract..." — confirm exact match before edit.

**Replacement text** (~85 words, four sentences, definitional, no aspirational URL until `/vocabulary/` ships in a later sprint):

```
Knowledge polarity is the direction in which substrate accumulates as a system is used — used here with the precision the term has in electrical engineering. Three terminals: ground is the shared canonical substrate any node can draw from; positive is the operator's node, where substrate compounds toward capability over time; negative is the extraction node, typically a vendor's model layer, where substrate flows to and accumulates as the provider's training advantage. Centralized AI architectures default to negative polarity at the cognitive layer. Sovereign architectures restore positive polarity at the operator's node, with the commons (ground) intact.
```

## 6. Phase 6 verification matrix (per commit, populated inline)

| # | Target | Command sketch | Pass criterion | Result |
|---|---|---|---|---|
| 1 | Canonical entry inserted at correct position | python check: `### Knowledge polarity` heading appears between `### The Ratchet` and `### Substrate (cognitive)` in `docs/grove-canonical-vocabulary.md` | exact ordering | — |
| 2 | Entry metadata block complete | python grep entry block for: Valence, Primary document, Fragment URL, Coined, Canonicalized | 5/5 fields present | — |
| 3 | Three-terminal model present | python grep entry for "Ground" + "Positive polarity" + "Negative polarity" | 3/3 hits | — |
| 4 | Ratchet pair-distinction paragraph present | python grep entry for "Ratchet describes the machine" | 1 hit | — |
| 5 | Continental-grid worked example present | python grep entry for "Eastern Interconnection" + "circuit breakers" + "protective relaying" | 3/3 hits | — |
| 6 | Cross-links to other canonical entries | python grep entry for `#the-ratchet` + `#stage-4-human-approval` + `#digital-jidoka` + `#composition-interfaces` | 4/4 hits | — |
| 7 | EE isomorphism register | python grep entry for "electrical engineering" + "structural-isomorphism" or "convergent solution" | both phrases present | — |
| 8 | No agrarian metaphor leakage | python grep entry for "photosynthesis" / "aspen" / "tree rings" / "seed corn" | 0 hits each | — |
| 9 | llms.txt definitional block landed | python grep `llms.txt` for "Knowledge polarity is the direction in which substrate accumulates" | 1 hit | — |
| 10 | llms.txt verb-form sentence removed | python grep `llms.txt` for "We reverse polarity" | 0 hits | — |
| 11 | llms.txt three-terminal model present | python grep `llms.txt` for "Three terminals" + "ground" + "positive" + "negative" | all hits | — |
| 12 | Total file integrity | line count of canonical vocab doc post-edit; expect +18 lines (entry size — file uses one-physical-line-per-paragraph markdown convention) | within +15 to +20 | — |

## 7. Out-of-scope (boundary calls)

- **No `/vocabulary/` HTML page creation.** The fragment URL `https://the-grove.ai/vocabulary#knowledge-polarity` is aspirational, matching the existing-canon pattern (cultivation-architecture, agent-hospitable, etc. all share this aspirational fragment). Queued for canonical-vocabulary curation sprint.
- **No `DefinedTerm` or `DefinedTermSet` JSON-LD.** Same sprint as above.
- **No `/essays/polarity` long-form publication.** Separate publication, scoped later. Notion seed remains the source of long-form polarity material.
- **No A&amp;A SPEC update.** A&amp;A's reference to the canonical entry is handled inside A&amp;A Commit 4 prep (which will add fragment-URL link on first polarity use in &sect;I lead graf or &sect;II opening). Not this sprint.
- **No updates to other canonical entries.** Cross-references from Ratchet, Substrate, etc. back to Knowledge Polarity are queued — adding them now risks scope sprawl across the whole vocabulary doc.
- **No comprehensibility audit of harder canon entries.** Logged as candidate scope for canonical-vocabulary curation sprint (memorialized judgment, Reverse Tax — both flagged as resistant to LLM uptake; future work).

## 8. Handoff notes to CC

- Working directory: `C:\GitHub\grove-launch-site`
- Branch: `master`
- Files touched this sprint: `docs/grove-canonical-vocabulary.md` (Commit 2) and `llms.txt` (Commit 3)
- str_replace match discipline: stop and report on any old_str failure; do not proceed
- Single-file commits per beat; preview-confirm-fire per cluster
- No deploys this sprint (no public-surface changes; both files are AI-discoverable surfaces but not human-facing pages)
- Stop after Commit 1 (`docs:` SPEC) and report SHA for next-phase greenlight
