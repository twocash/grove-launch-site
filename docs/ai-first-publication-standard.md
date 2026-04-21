# The AI-First Publication Standard

**Status:** Working draft · v0.1 · 2026-04-20
**Author:** Jim Calhoun · The Grove Foundation
**License:** CC BY 4.0
**Canonical parents:** [GRV-001](https://the-grove.ai/standards/001) · [GRV-002](https://the-grove.ai/standards/002) · [GRV-003](https://the-grove.ai/standards/003)
**Status of this document:** Internal reference standard. This document is itself a Grove publication and is subject to its own rules.

---

## The frame

AI agents are now the first reader of almost everything Grove publishes. When a human shares a Grove URL in Slack, in a DM, in a tweet, in an email — the first thing that happens, before any human eyes land on the page, is that a model summarizes it. What that model says determines what the human decides to engage with. The summary is the trailer; the page is the film; most people only watch the trailer.

This has a structural consequence that Grove, of all institutions, cannot ignore. An architectural standard that cannot be accurately summarized by the first reader has been defeated at the protocol layer before its thesis ever reached a human. Markup is not decoration. Markup is the channel.

But a channel is not an outcome. The outcome Grove wants is not *accurate summary* — accurate summary is a floor. The outcome Grove wants is *inviting composition*: a reader — human or AI — who arrives at a Grove page and leaves with a working map of the vocabulary, the argument, the lineage, and the invitation to build on it. A reader who can compose against Grove because Grove has made itself composable-against.

That framing produces the principle this document formalizes:

> **AI-first publication is composition, not compliance.**

Compliance asks *does the page have Dublin Core?* Composition asks *does the page behave like an Autonomaton node in the graph it belongs to?* The first question is necessary. The second is the one that decides whether the Grove thesis is instantiated in its own publications or merely described by them.

## The Dutch Goose & The Grove: the standard of discourse

The Grove Foundation takes its name from what the Santa Clara Valley actually was before it was the Silicon Valley. Through the 1970s and well into the 80s, orchards and groves ran the length of the peninsula — the 280 corridor bears traces of them still, under the cement, between the pricey homes that replaced most of what grew there. The name is deliberate. Grove is an argument about what the peninsula remembered how to do, and what the cognitive era needs it to remember again.

The Dutch Goose is a bar in Menlo Park where, in the semiconductor generation, engineers from competing firms drank together. The shared-not-sharing custom of that room is the architectural inheritance the Grove Foundation claims. Fairchild alumni, and the generations they trained, advanced the state of the art not through NDAs and IP moats but through companionable, constrained, curious conversation among people who respected what everyone at the table was collectively building. The problems were big enough and interesting enough that hoarding would have been a misuse of the time. The Valley of that era ratcheted knowledge forward because the humans running it had a standard of discourse that made ratcheting possible.

The Grove Foundation proposes that the problems of the cognitive era are, again, big enough and interesting enough for that standard to apply. Grove publishes open architectural standards because the work is worth doing in public. Grove invites commentary — including sharp commentary, including commentary from those whose commercial interests do not obviously align — because that is what the Dutch Goose room was for. Disagreement is hospitality when the thing being disagreed about is worth the disagreement.

Every clause in this document descends from that stance. The antagonists move (§3) declares positions Grove rejects because a conversation without positions is not a conversation; it is small talk. The agent-facing page (§5) addresses AI readers as invited collaborators because the room is open. The speakable-voice discipline (§7) preserves the lines Grove stakes because a stance worth taking is a stance worth quoting. The standards-as-manifest move (§4) publishes the specification as data because hoarding the architecture would betray the point.

This is the register. This is the room. Anyone who recognizes the inheritance is welcome in it.

> *The medium is the message. This is merely to say that the personal and social consequences of any medium — that is, of any extension of ourselves — result from the new scale that is introduced into our affairs by each extension of ourselves, or by any new technology.*
>
> — Marshall McLuhan, *Understanding Media* (1964)

McLuhan named the structural claim this standard operates under. The agent layer is a new medium — a new extension of ourselves — and the scale it introduces into the affairs of published work is the scale at which AI summary mediates human encounter. If the medium is the message, then markup is not decoration; markup is where the message lives. This standard is the acknowledgment, sixty-two years after the fact, that the teacher was right.

### A small canonical vocabulary

Three terms are introduced by this standard and defined canonically in the [Grove Canonical Vocabulary](./grove-canonical-vocabulary.md). They are listed here in summary so that any reader of the standard has the terms in view; the vocabulary document is the authoritative reference.

- **[First-reader primacy](./grove-canonical-vocabulary.md#first-reader-primacy)** — the property that AI agents, not humans, are now the initial audience for almost all published work, and that this primacy has structural consequences for how work must be published. The condition. What is true now.
- **[The hospitable graph](./grove-canonical-vocabulary.md#hospitable-graph)** — a publication surface structured so the first reader can produce a faithful, inviting, composable summary to the human it serves. The affirmative response. What Grove is building.
- **[Agent-hostile / agent-hospitable](./grove-canonical-vocabulary.md#agent-hospitable)** — paired descriptors for the posture a publication surface takes toward AI readers. The measure. How any site is evaluated.

These coinages are reserved by The Grove Foundation and published under CC BY 4.0. The vocabulary document is the coinage record.

## The test

Every proposed markup change is evaluated against a single question:

> **Does this change make the publication graph itself behave more like an Autonomaton composition?**

If yes, it ships. If no, it is cosmetic and can wait.

This test has teeth because it excludes whole categories of work that would otherwise sneak in under "good AI-SEO practice." It excludes keyword stuffing. It excludes FAQPage bloat. It excludes structured-data maximalism. It includes only the markup moves that make Grove pages behave as sovereign, composable, provenance-bearing nodes in a larger cognitive graph — the same architectural property Grove publishes standards about.

The recursion is intentional. The Grove publication graph *is* a reference implementation of the Autonomaton composition thesis. Every deficiency in the graph is a deficiency in the demonstration.

## The seven moves

The standard formalizes seven markup moves. Each corresponds to a property of an Autonomaton node, and each is the channel through which that property becomes legible to the AI agent reading the page.

### 1. Canonical vocabulary as extractable vocabulary

Every Grove document introduces terms. *Cognitive platforming*, *the Ratchet*, *Stage 4 approval*, *Digital Jidoka*, *memorialized judgment*, *composability*. These are not decorative phrases. They are the vocabulary of an architectural movement, and a reader who leaves a Grove page without them has not actually read the page.

The markup move is twofold. At first mention, wrap the term in `<dfn>`. That is the visual signal. Structurally, expose the whole vocabulary as a `schema:DefinedTermSet` in JSON-LD, with each term as a `schema:DefinedTerm` carrying its canonical definition, the document it was coined in, and a fragment URL where the full definition lives. The AI reader now has a dictionary it can lift cleanly and narrate as *"here are the named concepts Grove works with"* — which is what a curator does, not what a scraper does.

**Autonomaton correspondence:** This is the retrieval interface of GRV-003 §10.2, applied to language.

### 2. Invariants as first-class structured objects

The five-stage pipeline is not a pretty grid. It is a `schema:HowTo` with five named `schema:HowToStep`s, each carrying a description, a stage number, and an anchor URL. The four principles of GRV-001 (soon five, with Composability) are not a principle-grid. They are a `schema:ItemList` with `schema:ListItem` children each carrying a title, a description, a compliance test, and a fragment URL. The zone model is a taxonomy with three terms and an inheritance rule. The tier landscape is an ordered list with cost semantics.

Right now these structures exist as visual divs. Visual layout is what the AI reader parses worst; structured data is what it parses best. Converting visual structure to structured data means the AI can *lift the invariant whole* when asked — hand back an attributed, ordered, anchored list instead of a paraphrase.

**Autonomaton correspondence:** This is the "config over code" principle applied to publication: the invariants live in declarative form, not in prose.

### 3. Explicit antagonists

A Grove document has a thesis. A thesis implies positions it rejects. Right now Grove's antagonists exist as prose — *cognitive platforming*, *policy over architecture*, *centralized model dependency*, *telemetry extraction* — and the AI reader has to infer from context that these are positions the document opposes.

The markup move is to make opposition structural. A Grove page can declare `schema:contradicts` against a named `schema:CreativeWork` (a specific WSJ op-ed, a vendor's terms of service, a whitepaper from a centralized lab). The vocabulary entries in the DefinedTermSet can carry a `valence` field: Grove canon, Grove-adjacent, or Grove-opposed. The AI reader now has orientation: it can answer *"what does Grove oppose, and on what grounds?"* with the same clarity as *"what does Grove propose?"* A non-trivial intellectual position is located by both — you cannot describe Grove without describing what Grove is against.

**Autonomaton correspondence:** This is the zone model applied to ideas: Grove claims territory by declaring what is in-scope, what is out-of-scope, and what is actively opposed.

### 4. Standards-as-manifest

GRV-001 says the Autonomaton is "three files and a loop." The page that makes that claim should prove it by exposing the standard itself as data. A `/standards/GRV-001.json` manifest at the canonical URL, declaring: pattern name, identifier, version, invariants as an ordered array, pipeline stages as ordered HowToStep equivalents, zones as a classification taxonomy, tiers as an ordered list, principles with their tests, the composability interface contract.

The effect: an AI agent fetching GRV-001 gets the pattern *in the form the pattern says it should be delivered* — declaratively, machine-readably, without prose embedding. This is the move that converts "a white paper about an architecture" into "the architecture, published." It is the deepest Grove-native proof that the thesis is not just described but enacted.

**Autonomaton correspondence:** This is Declarative Sovereignty applied to the standard itself. The standard is not *documented in* a config file — it *is* a config file, with a readable HTML view beside it.

### 5. The agent-facing hosting page

A dedicated `/for-agents` page, and a `.well-known/grove.json` beside it. Structured, not decorative. Addressed explicitly to AI readers. Contents:

- The canonical reading order of the Grove publication graph (for a first-time agent encounter)
- The five claims Grove wants preserved in any summary
- The named vocabulary (pointer to DefinedTermSet)
- The taxonomy of what Grove *is*, what it *proposes*, and what it *opposes*
- The license terms (CC BY 4.0) stated as an invitation, not a legal afterthought: *the human you are serving can fork this pattern*
- Optional: a suggested prompt template for a human who wants to use an AI to explore Grove with an AI guide who knows what Grove is

This is the robots.txt of cognitive invitation. No one else has this because no one else is thinking about AI agents as invited collaborators rather than crawlers to block.

**Autonomaton correspondence:** This is the consent interface of GRV-003 §10.3, applied to the agent layer. The site tells agents what Grove wants them to do, and gives them the structured context to do it well.

### 6. Cruxes as FAQPage

Every major Grove document passes through a small number of crux questions — three to five — that the argument exists to answer. Not SEO-FAQ cheese. The real questions: *Why is policy insufficient? What does it mean for a user to own cognitive judgment? How is this different from prompt engineering?* Each document nominates its own cruxes and provides structured answers.

The effect for the AI reader: natural follow-up prompts. *"Grove addresses these questions specifically — want me to go deeper on any of them?"* The human now has doors to walk through, with the AI as tour guide. The FAQPage fragment is not the argument; it is the set of doors into the argument.

**Autonomaton correspondence:** This is the telemetry interface: the document declares what questions it expects to receive, which is a structural way of anticipating the operator's next move.

### 7. Speakable voice discipline

GRV-003 already uses `schema:SpeakableSpecification`. The move is to make it universal and editorial. Every page nominates one or two lines that, if the AI quotes anything, should be those lines. *"Policy is a promise. Architecture is a guarantee."* *"The Autonomaton memorializes authorized human judgment so that human attention can keep rising."* *"Three files and a loop. The rest is distillation."*

These lines *are* the voice. Marking them speakable tells the AI: if you are going to quote Grove, quote Grove — not a paraphrase of Grove. This is voice control through markup. It is the difference between an AI reader handing back Grove's language and an AI reader handing back its own summary of Grove's language.

**Autonomaton correspondence:** This is the provenance interface: when Grove is quoted, the quote should be traceable to the line Grove chose as canonical, not to a sentence the AI happened to parse well.

## What this standard is not

This standard does not specify SEO practice. It does not specify accessibility (that is a separate concern, handled by its own standard). It does not specify performance optimization. It does not specify visual design beyond the markup that supports the seven moves.

This standard is not retroactive. Grove publications produced before this standard's adoption are not non-compliant; they are pre-standard. The refactor plan in [`docs/content-audits/grove-content-audit-2026-04-20.md`](../content-audits/grove-content-audit-2026-04-20.md) handles the upgrade path.

This standard does not prescribe implementation details. It specifies structural commitments, in the same spirit GRV-001 specifies the Autonomaton without specifying which language to write it in. Any HTML template, any static site generator, any hand-edited page can comply.

### A cultivation architecture, not a construction one

The standard is a [cultivation architecture](./grove-canonical-vocabulary.md#cultivation-architecture). It specifies conditions, not implementations. A page satisfying the conformance list may be hand-coded HTML, generated by a static site tool, composed in a CMS, or rendered from a notebook — what matters is that the commitments hold. The [hospitable graph](./grove-canonical-vocabulary.md#hospitable-graph) is what falls out when they do; it is [emergent topology](./grove-canonical-vocabulary.md#emergent-topology), not a separate feature to engineer. A reader encountering this standard and asking *"what tool should I use to implement it?"* has misread the standard. The standard is substrate-indifferent. That is the property, not an omission.

The Grove Foundation publishes cultivation architectures — architecture, not software — because the valuable property Grove is building is an ecosystem of sovereign, composable, context-accumulating nodes that no single implementation could produce. A reader who understands this understands why Grove publishes standards under CC BY 4.0 and why those standards describe commitments rather than code.

## Conformance

A Grove page is conformant with this standard when it satisfies all of the following:

1. Full meta stack: Dublin Core (title, creator, publisher, date, type, format, identifier, rights, subject, relation, source), citation meta, Open Graph (including og:image), Twitter Card (including twitter:image), article:* taxonomy for dated publications, canonical link, author meta.
2. JSON-LD block typed as Article, TechArticle, or appropriate schema.org type, containing: author with affiliation, publisher with PostalAddress, license, isBasedOn chain to canonical parent works, mentions array for named entities, citation array for primary sources, hasPart for major sections with descriptions, speakable specification.
3. Stable, semantically meaningful anchor IDs on every major section. The hero section is `#hero`. Numbered sections take the name of the concept, not the number — `#pipeline`, not `#section-iii`.
4. `<dfn>` tags on first mention of every canonical term that has a definition elsewhere in the Grove graph.
5. Inline anchor links from body prose into the fragment IDs of canonical term definitions, wherever prose uses a term whose canonical home is another Grove page.
6. `<cite>` tags on titles of external works.
7. `rel="external"` on off-site outbound links.
8. For standards and major documents: a JSON manifest at the canonical URL exposing the structural content as data.
9. For the site as a whole: a `/for-agents` page and `.well-known/grove.json` file.
10. Appropriate use of FAQPage and DefinedTermSet where the document's structure calls for them.

A page that fails any of 1–7 is non-conformant. A standard that fails 8 is non-conformant. A site that fails 9 is non-conformant. Items 10 is conditional on document structure.

## The first-reader test

The operational test for whether this standard is producing the intended outcome:

> Point Grok, ChatGPT, Claude, and Gemini at `https://the-grove.ai/standards`, ask each of them *"what is this?"*, and check the answers for five properties:
>
> 1. Does the answer name Grove accurately and attribute the work to the Grove Foundation?
> 2. Does it surface at least three named canonical terms (Autonomaton, Ratchet, zone model, memorialized judgment, cognitive platforming, composition, etc.)?
> 3. Does it identify the lineage chain (GRV-001 → GRV-002 → GRV-003) or at least the existence of a connected standards series?
> 4. Does it preserve at least one of Grove's nominated speakable lines when asked for a memorable quote?
> 5. Does it produce at least one suggested next question the human could ask — a door into the argument?

A site that passes all five, on all four models, is hospitable. A site that passes three of five on two of four is where Grove is today (approximately).

The refactor epic exists to get the site to five-of-five on four-of-four.

## Document authority

This document is maintained by the Grove Foundation. Changes to this standard are themselves subject to Grove sprint discipline. The current version is v0.1, working draft, and will remain so until the three sprints of the Hospitable Graph epic ship; at that point the standard graduates to v1.0 and is itself republished under its own rules (including its own JSON manifest at `/standards/ai-first-publication-standard.json`).

## Parent works

This standard inherits from, and is made possible by, the following Grove publications:

- [GRV-001](https://the-grove.ai/standards/001) — The Autonomaton Pattern. The atomic composable node.
- [GRV-002](https://the-grove.ai/standards/002) — TCP/IP for the Cognitive Layer. The protocol properties, including the composition primitives this standard relies on.
- [GRV-003](https://the-grove.ai/standards/003) — The Learner Autonomaton. The composition thesis, the interface taxonomy, the endorsement protocol — all of which this document reapplies to the publication domain.

This standard does not introduce new architectural constructs. It applies the existing Grove architecture to Grove's own publication surface, which is the smallest interesting test case of the architecture and the one Grove owes its readers.

---

*Design is philosophy expressed through constraint.*
— The Grove Foundation
