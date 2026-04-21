# The Grove Canonical Vocabulary

**Status:** Working draft · v0.1 · 2026-04-20
**Maintained by:** The Grove Foundation
**License:** CC BY 4.0
**Canonical URL:** `https://the-grove.ai/vocabulary` (planned)
**Machine-readable form:** `/vocabulary.json` (planned — schema:DefinedTermSet)
**Parent standard:** [AI-First Publication Standard](./ai-first-publication-standard.md) §1

---

## Purpose

This document is the canonical home of every term The Grove Foundation coins, adopts, or uses in a specific architectural sense. It is the reference a reader — human or AI — is directed to when a term of art appears in any Grove publication.

Every Grove page that uses a canonical term should link its first mention to the fragment URL on this page. Every Grove JSON-LD block that exposes vocabulary should reference the `schema:DefinedTermSet` derived from this document. This is move #1 of the AI-First Publication Standard in its operational form: Grove's vocabulary as a structured, retrievable, composable resource.

The document is organized into three strata: **coinages** (terms Grove originated), **architectural canon** (terms Grove uses in a specific technical sense, usually defined more completely in GRV-001, GRV-002, or GRV-003), and **adopted vocabulary** (terms Grove uses as established elsewhere but with canonical sense preserved here for agent-readability).

Each entry carries: the term, its canonical definition, its valence (Grove canon, Grove-adjacent, or Grove-opposed), the document in which it is primarily developed, and — where applicable — the fragment URL that deep-links to its full treatment.

Valence is a structural declaration, not an emotional one. *Grove canon* means Grove advances the position. *Grove-adjacent* means Grove recognizes the term as useful scaffolding without owning its full argument. *Grove-opposed* means Grove's architectural position is incompatible with the structural condition the term names.

---

## I. Coinages

These are terms The Grove Foundation has originated, and which the Foundation reserves as canonical. They are published openly under CC BY 4.0; they are not claimed as proprietary. They are claimed as *authored*. First use, first definition, first published structure — the coinage record is this document.

### First-reader primacy

**Valence:** Grove canon
**Primary document:** [AI-First Publication Standard](./ai-first-publication-standard.md)
**Fragment URL:** `https://the-grove.ai/vocabulary#first-reader-primacy`
**Coined:** 2026-04-20

The property that AI agents, not humans, are now the initial audience for almost all published work, and that this primacy has structural consequences for how work must be published.

When a Grove URL is shared — in Slack, in a DM, in a tweet, in an email, in a search result — the first thing that happens, before any human eye lands on the page, is that an AI model produces a summary. That summary determines whether human attention ever arrives. The first reader is therefore the deciding reader: not because it decides what the work means, but because it decides whether the work gets read at all.

First-reader primacy is a structural condition, not a preference. Publications that fail to account for it are defeated at the protocol layer before their thesis reaches a human. The AI-First Publication Standard is Grove's structural response to this condition.

### The hospitable graph

**Valence:** Grove canon
**Primary document:** [Hospitable Graph Epic Charter](./epics/hospitable-graph-epic.md) (forthcoming)
**Fragment URL:** `https://the-grove.ai/vocabulary#hospitable-graph`
**Coined:** 2026-04-20

A publication surface structured so that the first reader can produce a faithful, inviting, composable summary — carrying the author's canonical vocabulary, lineage, stance, and voice across to the human reader intact.

A hospitable graph is the affirmative response to first-reader primacy. It is the property a work has when its structural markup respects both the first reader and the human the first reader is serving. The hospitable graph is not the same as SEO, which optimizes for crawler ranking, nor AI-washing, which adds AI-adjacent vocabulary without changing architecture. It is a structural commitment that the publication surface demonstrates the composability thesis its content argues for.

Grove's own publication surface is the reference implementation of the hospitable graph. The Hospitable Graph epic is the sprint sequence that brings the Grove site to conformance.

### Agent-hostile / agent-hospitable

**Valence:** Grove canon
**Primary document:** [AI-First Publication Standard](./ai-first-publication-standard.md)
**Fragment URL:** `https://the-grove.ai/vocabulary#agent-hospitable`
**Coined:** 2026-04-20
**Canonicalized:** 2026-04-20

Paired descriptors for the posture a publication surface takes toward AI readers. A page, site, or publication surface is **agent-hostile** when it treats the first reader as a crawler to block, a scraper to confuse, or a consumer to be defended against. It is **agent-hospitable** when it treats the first reader as an invited collaborator ferrying the work to a human the page would like to reach.

The current web has a rich vocabulary for agent-hostile conditions (crawler, scraper, bot abuse, rate limiting, paywall, CAPTCHA). It has almost no vocabulary for the affirmative case. Naming *agent-hospitable* converts an absent category into a present one and establishes the criterion by which any site's posture can be evaluated.

The agent-hostile / agent-hospitable distinction is orthogonal to content licensing. A CC BY 4.0 page can be agent-hostile (if its markup is unreadable). A paywalled page can be agent-hospitable (if its metadata and summary structure are legible to the first reader even where full content is gated). The distinction is structural, not commercial.

### Cultivation architecture

**Valence:** Grove canon
**Primary document:** [AI-First Publication Standard](./ai-first-publication-standard.md)
**Also developed in:** [The Grove: A World-Changing Play for Distributed Intelligence](https://www.notion.so/The-Grove-A-World-Changing-Play-for-Distributed-Intelligence-2c3780a78eef8073a0bdccb0346816c5) (founding white paper, December 2025)
**Fragment URL:** `https://the-grove.ai/vocabulary#cultivation-architecture`
**Coined:** 2026-04-20 (formal ratification of metaphor present in Grove writing since December 2025)
**Canonicalized:** 2026-04-20

A class of architectural specification that specifies structural conditions rather than implementations. A cultivation architecture establishes the commitments a system must honor — the pipeline shape, the interface taxonomy, the invariants — without specifying the substrate the system is implemented on. An Autonomaton cultivated in YAML files, in a Notion database, in a Python service, or in text files and a shell script all cultivate the same architecture because cultivation is about the conditions, not the material.

The term descends from the metaphor the Grove Foundation has used since its founding white paper: the gardener who tends conditions but does not control outcomes, the plants that grow themselves, the architecture that *permits emergence but does not require specific emergent content*. The founding paper's phrasing applies directly — *"gardening, not racing"* — and names the posture cultivation architecture encodes.

A cultivation architecture opposes a **construction architecture**, which specifies not only the structural commitments but also the tools, runtime, libraries, and implementation medium the system must use. Construction architectures require pattern-matching from their readers (*"which framework? which library?"*). Cultivation architectures do not; the implementation is the operator's responsibility, and the architecture is indifferent to the substrate as long as the commitments hold.

Grove publishes cultivation architectures — GRV-001, GRV-002, GRV-003, and the AI-First Publication Standard are all instances. This is not a stylistic choice. It is the structural commitment that makes the Grove thesis possible: capability-agnostic architecture, model-agnostic composition, and substrate-agnostic publication are all expressions of cultivation at different scales.

### Emergent topology

**Valence:** Grove canon
**Primary document:** [AI-First Publication Standard](./ai-first-publication-standard.md)
**Also developed in:** [The Grove: A World-Changing Play for Distributed Intelligence](https://www.notion.so/The-Grove-A-World-Changing-Play-for-Distributed-Intelligence-2c3780a78eef8073a0bdccb0346816c5) (founding white paper, December 2025)
**Fragment URL:** `https://the-grove.ai/vocabulary#emergent-topology`
**Coined:** 2026-04-20
**Canonicalized:** 2026-04-20

The rich network effects of a cultivation architecture — composition, federation, knowledge flow, provenance arcs, the hospitable graph itself — emerge as a consequence of honoring the structural commitments. They are not separately engineered. The topology is what cultivation produces when cultivation is done correctly.

An emergent topology cannot be designed directly. It is not a deliverable. It is the observable property of a system whose nodes have honored the cultivation architecture they descend from. A federation of Autonomatons produces its topology by composing; the topology is not a separate system that sits alongside the composition.

The concept is paired with cultivation architecture: one cannot be claimed without the other. A cultivation architecture that fails to produce emergent topology has failed its cultivation. An architecture that claims rich topology but has to engineer it separately is not a cultivation architecture — it is a construction architecture pretending otherwise.

The Grove Foundation's publication graph, when conformant to the AI-First Publication Standard, produces an emergent topology of cross-linked canonical vocabulary, lineage chains, and composition interlocks. The [Hospitable Graph epic](./epics/hospitable-graph-epic.md) is the work of bringing the publication surface into alignment with its own cultivation architecture so that this topology emerges rather than being simulated.

### Platforming cognition

**Valence:** Grove-opposed
**Primary document:** [GRV-003](https://the-grove.ai/standards/003) §2
**Fragment URL:** `https://the-grove.ai/vocabulary#platforming-cognition`
**Coined:** 2026 (developed in GRV-003)

The arrangement in which centralized AI providers convert human cognition into a platform business by extracting user judgment as training data and routing all queries through their infrastructure.

GRV-003 §2 specifies eight architectural properties that define a cognitive platform. The term *platforming cognition* (verbal form) and *cognitive platforming* (nominal form) are used interchangeably in Grove publications; *cognitive platforming* is the more frequent construction.

Grove's entire architectural program is a structural response to platforming cognition. Refusing the arrangement by policy is insufficient; refusing it architecturally is the Grove thesis. The Autonomaton Pattern, the Learner Autonomaton, and the Hospitable Graph all proceed from the premise that platforming cognition is the hazard architecture must prevent.

### Memorialized judgment

**Valence:** Grove canon
**Primary document:** [GRV-003](https://the-grove.ai/standards/003) §9
**Fragment URL:** `https://the-grove.ai/vocabulary#memorialized-judgment`

The act of capturing authorized human judgment at Stage 4 approval, which pulls the judgment inward (refining the operator) rather than outward (refining a vendor).

The structural property that distinguishes an autonomaton from a cognitive platform. Both architectures capture the same artifact — patterns of user judgment. The autonomaton memorializes them locally, where they compound to the operator's benefit; the platform extracts them, where they compound to the vendor's benefit. The artifact is identical. The architecture is what decides who benefits.

Memorialized judgment is the cognitive elevator (GRV-003 §9.4) — the mechanism by which human attention is freed to keep rising into unsettled territory instead of re-litigating what has already been decided.

### The Ratchet

**Valence:** Grove canon
**Primary document:** [GRV-001](https://the-grove.ai/standards/001) §VI
**Fragment URL:** `https://the-grove.ai/vocabulary#the-ratchet`

The mechanism by which confirmed cognitive patterns move across the compute landscape via Stage-4-approved config mutations, migrating from expensive frontier tiers (T3) toward local deterministic execution (T0). The Ratchet turns in one direction: toward cheaper, faster, more private execution.

In GRV-003, the Ratchet carries a second sense: *the Ratchet as learning trajectory* — the mechanism that measures a learner's mastery by tracking the tiers at which their cognitive patterns resolve.

Grove also uses *the dependency Ratchet* in its commercial writing to name the inverse phenomenon in cognitive-platforming arrangements: the architecture by which vendor dependency compounds over time. When unmodified, *the Ratchet* refers to the autonomaton mechanism; *dependency Ratchet* or *the Ratchet (in platform architectures)* distinguishes the opposed case.

### Substrate (cognitive)

**Valence:** Grove canon
**Primary document:** [GRV-003](https://the-grove.ai/standards/003) §1, §7, §12
**Fragment URL:** `https://the-grove.ai/vocabulary#cognitive-substrate`

The operator's owned context — the dock, routing config, zone schema, and provenance arc — that accumulates with the operator regardless of which compute tier serves which pattern at which moment.

The durable artifact of the operator's accumulated judgment. Distinct from the compute landscape, which is the environment against which the substrate is built and consulted. The design principle *substrate, not routing* — promoted from §22 deferral to §1 thesis-level in GRV-003 v1.1 — names the architectural commitment that variance between sovereign nodes is the point of the architecture, not a defect of it.

### Three-act architecture

**Valence:** Grove canon
**Primary document:** [GRV-001](https://the-grove.ai/standards/001) §VIII (Vision)
**Fragment URL:** `https://the-grove.ai/vocabulary#three-act-architecture`

The three-scale Grove vision. **Act One: the Autonomaton** — the transistor. A single sovereign node (one person, one cognitive engine, one knowledge store) that authors its own improvement through the invariant pipeline. Specified in GRV-001. **Act Two: the Trellis** — the integrated circuit. A domain-scale knowledge architecture that organizes what individual Autonomaton nodes produce, making expertise navigable, refinable, and composable across an organization or discipline. **Act Three: the Knowledge Commons** — the network. A distributed economy where Autonomaton nodes share refined knowledge with provenance, attribution, and market pricing intact. Not a database; a protocol for sovereign expertise exchange.

Same architectural DNA at every scale. The pattern GRV-001 specifies is the entry point; the three-act architecture names the full-scope program the Grove Foundation is building toward.

### DEX (Declarative Exploration)

**Valence:** Grove canon
**Primary document:** [GRV-001](https://the-grove.ai/standards/001) §IV opener
**Fragment URL:** `https://the-grove.ai/vocabulary#dex`

The architectural standard the Autonomaton Pattern implements — a set of architectural principles that separate exploration logic from execution capability. The five Autonomaton invariants (Declarative Sovereignty, Capability Agnosticism, Provenance as Infrastructure, Human-AI Symbiosis, Composability) are the structural constraints DEX specifies. A system that violates them may work, but it is not an Autonomaton.

DEX is the standard; the Autonomaton is its canonical implementation pattern. This entry promotes DEX from a referenced-but-undefined term (previously only present in the vocabulary's Maintenance section) to a first-class canonical entry.

### Self-authoring engine

**Valence:** Grove canon
**Primary document:** [GRV-001](https://the-grove.ai/standards/001) hero + §I Architectural Governance
**Fragment URL:** `https://the-grove.ai/vocabulary#self-authoring-engine`

The hero-level framing of what an Autonomaton is: *a system that converts metered cloud dependencies into permanent, zero-marginal-cost institutional assets that get smarter, cheaper, and more private with every human interaction.* The Autonomaton authors its own deterministic code through the Skill Flywheel — patterns the operator confirms become declarative rules the system can execute without further inference cost.

*Self-authoring engine* names the property that distinguishes an Autonomaton from an agent framework. An agent framework orchestrates model calls against a static configuration; a self-authoring engine compiles itself outward from observed human judgment, rewriting its own routing and skill tables as memorialized patterns accumulate. The operator's approvals are the authoring signal; the config is the written code.

---

## II. Architectural canon

Terms used in a specific technical sense across Grove publications. Each term's primary definition lives in the standard named in its entry; this vocabulary is a directory, not a replacement.

### Autonomaton

**Valence:** Grove canon
**Primary document:** [GRV-001](https://the-grove.ai/standards/001)
**Fragment URL:** `https://the-grove.ai/vocabulary#autonomaton`

Pronunciation: *auto-NAHM-uh-tawn* (/ɔːˈtɒnəmətɒn/)

A sovereign cognitive system governed by the five-stage pipeline, three files, and zone model specified in GRV-001. Composes with other Autonomatons through the interfaces specified in GRV-003 §10.

GRV-001 specifies the minimum viable Autonomaton: three files (routing.config, zones.schema, telemetry.log) and a loop (the five-stage pipeline). Any implementation satisfying these commitments is an Autonomaton regardless of language, stack, or cognitive model.

### The five-stage pipeline

**Valence:** Grove canon
**Primary document:** [GRV-001](https://the-grove.ai/standards/001) §III
**Fragment URL:** `https://the-grove.ai/vocabulary#pipeline`

The invariant sequence every Autonomaton interaction traverses: **Telemetry → Recognition → Compilation → Approval → Execution**. Each stage produces a structured trace. The pipeline admits no sub-pipelines, no bypasses, no exceptions.

The pipeline is the hourglass waist of the cognitive architecture (see GRV-002 §III). Below it: any data source. Above it: any cognitive model. The invariance of the pipeline is the source of every property that matters in an Autonomaton: auditability, composability, portability, and the structural guarantee that every action can be traced to a governance decision a human can read.

**Stage sub-entries** (canonical names used across Grove publications; each stage is a property of the pipeline, not a separately deployable pattern):

- **Telemetry** — capture interaction data. Structured, inspectable, owned by the operator. Every interaction produces a trace — the pipeline's primary output.
- **Recognition** — classify intent, assess confidence, determine risk. The Cognitive Router dispatches to the cheapest tier capable of handling the request.
- **Compilation** — assemble context from local knowledge, historical patterns, domain expertise, and operator configuration. Build the response.
- **Approval** — zone-governed human checkpoint (Stage 4). Green = autonomous; Yellow = supervised; Red = human-only. The single capture mechanism through which all memorialized judgment flows.
- **Execution** — action fires. Output becomes telemetry for the next cycle. Audit trail generated as byproduct, not afterthought.

### Stage 4 (human approval)

**Valence:** Grove canon
**Primary document:** [GRV-001](https://the-grove.ai/standards/001) §III
**Fragment URL:** `https://the-grove.ai/vocabulary#stage-4`

The human approval gate in the five-stage pipeline. The single capture mechanism through which all memorialized judgment flows. Non-negotiable.

Every cognitive action the Autonomaton executes passes through Stage 4; the zone model (§V of GRV-001) determines what happens there. Green zone actions proceed without human intervention (because prior Stage-4 approvals have already memorialized the pattern). Yellow zone actions require fresh approval. Red zone actions are refused by the architecture.

### Zone model (Green / Yellow / Red)

**Valence:** Grove canon
**Primary document:** [GRV-001](https://the-grove.ai/standards/001) §V
**Fragment URL:** `https://the-grove.ai/vocabulary#zone-model`

The governance taxonomy classifying every operation traversing the pipeline. **Green zone:** the system acts autonomously on confirmed skills. **Yellow zone:** the system proposes, the human approves. **Red zone:** the system does not act; the code lacks the permissions at the operating-system level. Not *will not* but *cannot*.

Zone boundaries are declarative, defined in configuration, not hardcoded. Identical pipeline architecture serves healthcare deployments and content-scheduling deployments by zone-config variance alone. The zone model is the end-to-end argument (GRV-002 §III) applied to cognitive governance: sovereignty lives at the operator endpoint, not inside the cognitive layer.

### Cognitive router

**Valence:** Grove canon
**Primary document:** [GRV-001](https://the-grove.ai/standards/001) §III
**Fragment URL:** `https://the-grove.ai/vocabulary#cognitive-router`

The Stage-02 component that classifies each request and dispatches it to the cheapest tier capable of handling it (T0 / T1 / T2 / T3). The mechanism through which the Ratchet operates.

### Digital Jidoka

**Valence:** Grove canon (adopted with canonical sense)
**Primary document:** [GRV-001](https://the-grove.ai/standards/001) §II (lineage)
**Fragment URL:** `https://the-grove.ai/vocabulary#digital-jidoka`

Toyota's jidoka principle — machines detect abnormalities and stop the line; humans diagnose and approve the fix — applied to AI systems. The zone model is Digital Jidoka's structural expression: the system detects risk, escalates appropriately, and never acts beyond its authority.

### The Autonomaton invariants

**Valence:** Grove canon
**Primary document:** [GRV-001](https://the-grove.ai/standards/001) §IV
**Fragment URL:** `https://the-grove.ai/vocabulary#invariants`

The structural constraints every Autonomaton must satisfy. A system that violates an invariant may function, but it is not an Autonomaton. The invariants are:

1. **Declarative Sovereignty** — domain expertise belongs in configuration, not code.
2. **Capability Agnosticism** — architecture should make modest capability sufficient.
3. **Provenance as Infrastructure** — attribution chains are mandatory; a fact without a root is a weed.
4. **Human-AI Symbiosis** — AI generates possibilities; humans apply judgment.
5. **Composability** — sovereign nodes compose through declarative interfaces without adapter code; variance of substrate, domain, and scale is the point, not a defect.

Invariant 5 (Composability) was added to GRV-001 in v1.1 (Sprint 1 of the Hospitable Graph epic, shipped 2026-04-20), resolving the interlock between GRV-001 and GRV-003 §5, §10 identified in the 2026-04-20 content audit. Each invariant has a standalone vocabulary entry below with definition and conformance test verbatim from the principle cards.

### Composition interfaces

**Valence:** Grove canon
**Primary document:** [GRV-003](https://the-grove.ai/standards/003) §10
**Fragment URL:** `https://the-grove.ai/vocabulary#composition-interfaces`

The five declarative interfaces through which Autonomaton nodes compose without adapter code: **telemetry**, **retrieval**, **consent**, **provenance**, and **endorsement** (the co-sign protocol).

Each interface is declarative, inspectable, and node-sovereign. A node declares what it is willing to expose through each interface in its own config; composition emerges from interface compatibility rather than from integration engineering.

### The composition primitives

**Valence:** Grove canon
**Primary document:** [GRV-002](https://the-grove.ai/standards/002) §IV
**Fragment URL:** `https://the-grove.ai/vocabulary#composition-primitives`

The six patterns through which independent Autonomatons compose without central coordination: **chain**, **branch / fan-out**, **supervisor / worker hierarchy**, **peer mesh / swarm**, **hierarchical zone nesting**, and **federation**. A seventh, **the recursive case** (Autonomatons that build Autonomatons), emerges from the pattern's self-authoring property.

The composition primitives are to the Autonomaton what client-server, peer-to-peer, and publish-subscribe were to TCP/IP: patterns the protocol makes possible, discovered by the ecosystem rather than prescribed by the spec.

### The Reverse Tax

**Valence:** Grove canon
**Primary document:** [GRV-002](https://the-grove.ai/standards/002) §V
**Fragment URL:** `https://the-grove.ai/vocabulary#reverse-tax`

The economic property of the tiered Cognitive Router: confirmed cognitive patterns migrate from T3 toward T0 over time, making the system cheaper as it becomes smarter. The inverse of the depreciation curve that afflicts architectures tied to specific frontier model capabilities.

Centralized AI providers need users to keep calling the API. The Autonomaton Pattern is architecturally incentivized to reduce API calls to zero. The centralized model's revenue is the distributed model's waste.

### Provenance arc

**Valence:** Grove canon
**Primary document:** [GRV-003](https://the-grove.ai/standards/003) §15
**Fragment URL:** `https://the-grove.ai/vocabulary#provenance-arc`

The full inspectable telemetry record of how a learner (or operator) came to hold every competency they hold, including dead ends explored and rejected. In GRV-003, the provenance arc is the tradable asset of the federated expertise economy.

### Attestation tier

**Valence:** Grove canon
**Primary document:** [GRV-003](https://the-grove.ai/standards/003) §9.9
**Fragment URL:** `https://the-grove.ai/vocabulary#attestation-tier`

A telemetry field declaring the standing under which a verification event was administered: *self* (learner administered), *autonomaton* (pipeline administered), or *institution* (institutional node administered and co-signed). Lets receivers set their own thresholds against transparently declared backing.

### Co-Sign Protocol

**Valence:** Grove canon
**Primary document:** [GRV-003](https://the-grove.ai/standards/003) §10.6
**Fragment URL:** `https://the-grove.ai/vocabulary#co-sign-protocol`

The mechanism implementing the endorsement composition interface. An institutional node's zones.schema classifies incoming co-sign requests as Green (auto-co-sign per pre-declared criteria), Yellow (governance review required), or Red (refused, out-of-scope). Delegation chains operate like TLS certificate authority chains; co-sign authority versions hash into provenance.

### Terroir

**Valence:** Grove canon (adopted with canonical sense)
**Primary document:** [GRV-003](https://the-grove.ai/standards/003) §17
**Fragment URL:** `https://the-grove.ai/vocabulary#terroir`

The compliance-heavy regional industries — pharma, banking, insurance, agtech — whose structural constraints shaped the Grove architecture before it was generalized to education or to the publication surface. In Grove writing, *terroir* names the design-input role of central Indiana's Eli Lilly, Anthem, Corteva, Cummins, OneAmerica, Old National, and Beck's among others.

### The Lambda (Λ) framework

**Valence:** Grove canon
**Primary document:** [AI Deployment Pattern Benchmark](https://the-grove.ai/alerts/ai-deployment-pattern-benchmark)
**Fragment URL:** `https://the-grove.ai/vocabulary#lambda-framework`

Grove's institutional-honesty instrument for measuring the architectural readiness of any AI system or deployment pattern against the Autonomaton standard. Applies the power-law decay formula Λ = (S × R × V) / (1 + (β · Fc)²) with geometric-mean β aggregation and a Validation Multiplier (V). Four-tier thresholds: Structurally Inert (<0.005), Sub-Critical (0.005–0.029), Approaching Critical (0.03–0.099), Critical Mass (≥0.10).

Grove's own Autonomaton self-scores 0.0001 (Structurally Inert, V=0.2). The institutional honesty of scoring Grove's own work at the bottom of the landscape is a feature of the framework, not a bug — credibility depends on it.

### Declarative Sovereignty

**Valence:** Grove canon
**Primary document:** [GRV-001](https://the-grove.ai/standards/001) §IV principle I
**Fragment URL:** `https://the-grove.ai/vocabulary#declarative-sovereignty`

The first Autonomaton invariant. Domain expertise belongs in configuration, not code. Every behavior rule is externalized in files a non-technical domain expert can read, edit, and version. Change the config, the behavior changes; audit the config, the behavior is explained. No separate "explainability layer" required.

*Test: can a domain expert alter system behavior by editing a YAML file, without a deploy?*

### Capability Agnosticism

**Valence:** Grove canon
**Primary document:** [GRV-001](https://the-grove.ai/standards/001) §IV principle II
**Fragment URL:** `https://the-grove.ai/vocabulary#capability-agnosticism`

The second Autonomaton invariant. The architecture never assumes specific model capabilities. Today's frontier model is tomorrow's local script. The Cognitive Router dispatches to tiers, not to specific models. Swap providers without rewriting governance. Architecture should make modest capability sufficient.

*Test: if the model hallucinates, does the architecture contain it without breaking?*

### Provenance as Infrastructure

**Valence:** Grove canon
**Primary document:** [GRV-001](https://the-grove.ai/standards/001) §IV principle III
**Fragment URL:** `https://the-grove.ai/vocabulary#provenance-as-infrastructure`

The third Autonomaton invariant. *A fact without a root is a weed.* Attribution chains are mandatory — the system tracks who collapsed the superposition and when. Every decision, every classification, every skill promotion carries a complete audit trail. Governance and auditability fall out of the architecture for free.

*Test: can you trace any system action to the config rule and telemetry entry that produced it?*

The Grove epigram *"a fact without a root is a weed"* is the canonical short-form expression of this invariant.

### Human-AI Symbiosis

**Valence:** Grove canon
**Primary document:** [GRV-001](https://the-grove.ai/standards/001) §IV principle IV
**Fragment URL:** `https://the-grove.ai/vocabulary#human-ai-symbiosis`

The fourth Autonomaton invariant. AI generates possibilities; humans apply judgment. The system requires human-in-the-loop for all transitions that cross zone boundaries. Sovereignty is structural: the system earns autonomy through demonstrated reliability and can never unilaterally grant itself new authority.

*Test: does the system ever act beyond explicitly granted authority, regardless of model capability?*

### Composability

**Valence:** Grove canon
**Primary document:** [GRV-001](https://the-grove.ai/standards/001) §IV principle V
**Fragment URL:** `https://the-grove.ai/vocabulary#composability`
**Introduced in version:** GRV-001 v1.1 (2026-04-20)

The fifth Autonomaton invariant, introduced in GRV-001 v1.1 and ratified at Gate 1 of the Hospitable Graph epic's Sprint 1.

Sovereign Autonomaton nodes compose through declarative interfaces rather than adapter code. The interfaces are structural — pipeline shape, telemetry format, zone semantics — not technological; an Autonomaton cultivated in YAML files, in a Notion database, in a Python service, or in text files and a shell script all compose identically, because they share architecture rather than code. This is [cultivation architecture](#cultivation-architecture) at work: the structural commitments create conditions for composition; the composition itself emerges when the commitments hold. Variance of substrate, of domain, of scale is the property the architecture relies on — the rich topology of a federated Autonomaton network is what grows from correct cultivation, not what gets engineered on top of it.

*Test: can two independently developed Autonomatons — cultivated in different substrates, at different scales, by operators who have never met — compose into a working system by sharing only the pipeline shape, the telemetry format, and the zone semantics?*

The canonical backward-link target for every Grove publication that invokes composability. Paired with the principle card in GRV-001 §IV; the vocabulary entry and the card are paired canonical homes and read consistently by design.

### Skill Flywheel

**Valence:** Grove canon
**Primary document:** [GRV-001](https://the-grove.ai/standards/001) §VI
**Fragment URL:** `https://the-grove.ai/vocabulary#skill-flywheel`

The five-step loop by which interaction telemetry becomes reusable skills: **Observe → Detect → Propose → Approve → Execute**. Observation captures interaction patterns; Detection identifies recurring patterns crossing a confidence threshold; Proposal generates a declarative skill specification the operator can read and approve; Approval is the Stage-4 human gate; Execution means the confirmed skill handles future matches autonomously and usage data refines or deprecates the pattern.

The **Flywheel** is the loop (the mechanism). The **Ratchet** is the directional property of the Flywheel (confirmed skills migrate only toward cheaper, faster, more private execution; the loop never runs backward unless the operator explicitly resets it). The two terms are complementary and named separately in this vocabulary because Sprint 2 deep-links will reference them at different scales — the Flywheel as mechanism, the Ratchet as outcome.

### Tier landscape (T0 / T1 / T2 / T3)

**Valence:** Grove canon
**Primary document:** [GRV-001](https://the-grove.ai/standards/001) §III
**Fragment URL:** `https://the-grove.ai/vocabulary#tier-landscape`

The ordered compute landscape against which the Cognitive Router dispatches each request to the cheapest tier capable of handling it.

- **T0 — Deterministic.** Hardcoded rules, regex matches, keyword lookups. Zero inference cost.
- **T1 — Local Model.** On-device inference. Private, fast, no network dependency. ~$0 cost.
- **T2 — Cloud (Fast).** Lightweight cloud models. Quick classification and routine generation. Low cost.
- **T3 — Cloud (Frontier).** Frontier models for novel, complex, or high-stakes requests. High cost.

The Ratchet turns toward lower tier numbers — from T3 toward T0 — through confirmed use. The four-tier formulation is GRV-001's; GRV-003 generalizes to a six-tier landscape (commercial apex, commercial mid-tier, institutional, peer federation, local, sovereign deterministic) for learner-scale compositions. The tier landscape is the legible mechanism by which the cognitive substrate is built and consulted.

---

## III. Grove-adjacent and Grove-opposed

### Cognitive platforming

See Coinages → *Platforming cognition*. (The term is listed among coinages because Grove originates and reserves the architectural sense of it; it appears here as a cross-reference so that any reader scanning for the term finds it in both places.)

### Extraction (in the cognitive-platforming sense)

**Valence:** Grove-opposed
**Primary document:** [The Telemetry Trap](https://the-grove.ai/alerts/telemetry-trap)
**Fragment URL:** `https://the-grove.ai/vocabulary#extraction`

The structural property of cognitive-platforming architectures by which user judgment, routed through centralized infrastructure, becomes training signal for the vendor rather than accumulated context for the user. Grove's structural opposite: memorialized judgment.

### Policy-over-architecture

**Valence:** Grove-opposed
**Primary document:** [AI-First Publication Standard](./ai-first-publication-standard.md) (and throughout Grove writing)
**Fragment URL:** `https://the-grove.ai/vocabulary#policy-over-architecture`

The posture that software behavior can be governed by stated policy (ethics pledges, terms of service, voluntary commitments) in the absence of structural architectural constraint. Grove's canonical rejoinder: *Policy is a promise. Architecture is a guarantee.*

### Autonomic computing

**Valence:** Grove-adjacent (lineage)
**Primary document:** [GRV-001](https://the-grove.ai/standards/001) §II
**Fragment URL:** `https://the-grove.ai/vocabulary#autonomic-computing`

IBM's 2001 framework for self-managing systems (self-configuring, self-healing, self-optimizing, self-protecting) based on the MAPE-K loop (Monitor, Analyze, Plan, Execute with Knowledge). The Autonomaton Pattern extends Autonomic Computing by adding the zone model that IBM's framework omitted: the structural declaration of which self-management functions are autonomous, which require human approval, and which are reserved for human-only decision.

### Computational reflection

**Valence:** Grove-adjacent (lineage)
**Primary document:** [GRV-001](https://the-grove.ai/standards/001) §II
**Fragment URL:** `https://the-grove.ai/vocabulary#computational-reflection`

The CS concept (Smith, 1982) of systems that inspect and alter their own execution. The Skill Flywheel is a reflective mechanism: the Autonomaton observes its own behavior, proposes optimizations, and rewrites its routing table through Stage-4-approved config mutations.

### Pattern language (Alexander)

**Valence:** Grove-adjacent (lineage)
**Primary document:** [GRV-002](https://the-grove.ai/standards/002) §IX; [GRV-003](https://the-grove.ai/standards/003) (epigraphic reference)
**Fragment URL:** `https://the-grove.ai/vocabulary#pattern-language`

Christopher Alexander's 1977 framework for describing recurring design problems and their philosophical-structural solutions. Each pattern states a problem, a context, and the core of its solution, framed as a philosophical position with structural implications rather than as an instruction. The Grove publications are pattern-language works in the Alexander tradition.

### The medium is the message (McLuhan)

**Valence:** Grove-adjacent (lineage)
**Primary document:** [AI-First Publication Standard](./ai-first-publication-standard.md) (Dutch Goose section)
**Fragment URL:** `https://the-grove.ai/vocabulary#medium-is-the-message`

Marshall McLuhan's 1964 thesis (*Understanding Media*) that the personal and social consequences of any medium — any extension of ourselves — result from the new scale that medium introduces into our affairs, independent of the content it carries. The structural axiom of the AI-First Publication Standard: markup is the medium through which the message of Grove publications reaches first readers, and therefore the medium must be designed as deliberately as the message.

### End-to-end argument (Saltzer, Reed, Clark)

**Valence:** Grove-adjacent (lineage)
**Primary document:** [GRV-002](https://the-grove.ai/standards/002) §II
**Fragment URL:** `https://the-grove.ai/vocabulary#end-to-end-argument`

The 1984 design principle that functions required by applications should be implemented at the endpoints, not inside the network. Grove's zone model is the end-to-end argument transposed to the cognitive domain: governance functions belong at the operator endpoint, not inside the cognitive layer.

### Fate-sharing (Clark)

**Valence:** Grove-adjacent (lineage)
**Primary document:** [GRV-002](https://the-grove.ai/standards/002) §II
**Fragment URL:** `https://the-grove.ai/vocabulary#fate-sharing`

Clark's 1988 principle that the state required for a communication session should be stored at the endpoints, not in the network. Grove's sovereign-state-at-the-node commitment is fate-sharing applied to cognitive infrastructure: the Autonomaton's routing config, zone schema, skill cache, and telemetry live at the node; no external dependency for core operation.

### Telemetry-Driven Development

**Valence:** Grove-adjacent (industry-practice lineage)
**Primary document:** [GRV-001](https://the-grove.ai/standards/001) §II lineage
**Fragment URL:** `https://the-grove.ai/vocabulary#telemetry-driven-development`

Industry-practice lineage from the 2010s: *user behavior IS the feature request.* The Autonomaton's feed-first telemetry makes interaction data the primary input to the improvement cycle, not an afterthought. One of the four architectural lineages Grove synthesizes in GRV-001 — alongside Autonomic Computing (IBM/Kephart-Chess), Computational Reflection (Smith), and Digital Jidoka (Toyota/Ohno) — to produce the Autonomaton pattern.

The telemetry-driven posture is the structural inverse of the cognitive-platforming arrangement: telemetry is captured locally as the operator's sovereign asset rather than extracted outward as the vendor's training signal. The same practice, inverted by which endpoint owns the data.

---

## Maintenance

This document is canonical. Additions require the same Grove sprint discipline that governs standards revisions: proposed entries go through SPEC/CONTRACT/EXECUTION_PROMPT or are ratified inline during an epic. Revisions to existing entries are versioned; the full diff history is the provenance record of Grove's evolving vocabulary.

This document will be republished as a machine-readable `schema:DefinedTermSet` at `/vocabulary.json` in Sprint 3 of the Hospitable Graph epic, at which point it becomes the operational reference for every Grove page's first-mention `<dfn>` tags and for the site-wide JSON-LD linkage.

Three coinages reserved in this document — *first-reader primacy*, *the hospitable graph*, and *agent-hostile / agent-hospitable* — are candidate terms for trademark or descriptive protection review. The document constitutes the coinage record.

---

*Design is philosophy expressed through constraint.*
— The Grove Foundation
