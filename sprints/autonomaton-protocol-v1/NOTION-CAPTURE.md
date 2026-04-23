# Autonomaton Protocol — Canonical Architecture

**Captured:** April 22, 2026
**Status:** Architecture locked. GRV-004 in spec phase.
**Origin conversation:** Polarity paper publication day; mid-session pivot to name the missing standards layer.

---

## The thing in one paragraph

The Autonomaton Protocol (GRV-004) is the open standard by which sovereign cognitive nodes — humans, organizations, AI agents — declare themselves to the network so other agents can discover, tap, and compose with them at autonomic speed. It is DNS for the polarity-compliant internet: a publisher-side packet specifying what the publisher knows, at what scope it shares, with what intent, and where its edges lie. The Grove Foundation governs the protocol; anyone may implement it. Every implementation is an Autonomaton. The emergent network of Autonomatons is the Mesh — a Grove. Convergence point: a Knowledge Commons in which the protocol itself recedes into shared substrate.

---

## The lineage (three sentences, pitch-perfect)

The Autonomaton Pattern (GRV-001) showed how a sovereign AI node works internally. The Polarity Hypothesis showed why knowledge flow between nodes requires declared ground. The Autonomaton Protocol (GRV-004) is how sovereign nodes declare that ground to the network — DNS for the polarity-compliant internet, governed openly by The Grove Foundation, composable at autonomic speed, converging toward a Knowledge Commons that outlives the protocol itself.

---

## The four named artifacts

**Autonomaton Protocol** — the open standard (GRV-004). Mechanism-named so it travels.

**Autonomaton Declaration** — the packet a publisher ships. Two layers:
- *Envelope* — structured, machine-readable: publisher, intent, scope, reserve, license, circuit posture, edge, version, lineage.
- *Cellar manifest* — list of kegs in the publisher's cellar with per-keg scope flags (public / member / reserved).

**Autonomaton Handshake** — branded first-line greeting on Grove pages. Public-facing protocol entry point. Reads roughly: *"This site is a Grove Autonomaton. Published under the Autonomaton Protocol (GRV-004). [Scope]. The cellar contains: [kegs]. Compose with me per the Declaration. You can publish your own — the protocol is open."*

**Autonomaton Mesh** — the emergent network of declaring publishers. A Grove.

---

## Supporting concepts

**Keg** — unit of distilled knowledge inside the payload. Provenance-labeled, scoped, tappable.

**Cellar** — the publisher's full collection of kegs. The Declaration specifies which cellar doors are open at which scope.

**Autonomic understanding** — the two-channel communication mode the protocol enables. The human still drives. The LLMs still translate. But the ground is declared, not reconstructed. That is the speed-up.

---

## Brand vs. mechanism — the separation that makes this work

**Autonomaton Protocol** = mechanism. Open. Generic. Anyone implements.
**The Grove Foundation** = registrar. Brand-named institutional anchor. Trust origin.
**Grove Autonomaton** = branded implementation on Grove-governed pages. Signals full conformance.
**Autonomaton** = generic implementation. Anyone ships one.

The protocol travels. The registrar role anchors trust. The brand prefix is optional. This is how TCP/IP commodified while IANA remained the steward — and how Grove can do the same without painting the protocol into a corner.

---

## The trajectory — three acts, baked into the spec

**Stage 1 (now).** Sovereign Autonomatons broadcast declarations. Mesh emerges from aggregation. Grove governs the protocol. Polarity paper is the first live implementation; A&A and standards pages retrofit; new publishers begin adopting.

**Stage 2 (mid).** Autonomatons compose across the mesh autonomically. Shared ground accumulates at the mesh level. Grove stewards canonical kegs as reference commons. Cross-Autonomaton composition primitives mature.

**Stage 3 (long).** The Knowledge Commons IS the ground. Individual Autonomatons recede into it the way individual webservers recede into "the web." Grove's role evolves from registrar to cultivator. The protocol commodifies; the stewardship role does not. Every tissue becomes a Kleenex; the first mover set the pattern.

This trajectory dates back to the first drafts of the white paper. Recede-once-adopted is the intended success mode, not failure mode. Showing the pattern to the world is the point.

---

## Institutional roles

**The Grove Foundation** — registrar, spec steward, reference-implementation publisher. Operates from `registrar.the-grove.ai` (placeholder coming, full implementation later).

**Publishers** — anyone shipping an Autonomaton conforming to GRV-004. Includes Grove pages, Take Flight Advisors engagements, member firms, third-party adopters.

**Visiting intelligence** — human or LLM, anyone who taps a cellar via a Declaration.

---

## Three-sprint execution plan

1. **`grv-004-spec-v1`** — publish GRV-004 standard at `/standards/004` with full Tier A. Cite polarity paper as theoretical backing. Include Trajectory section. Publish envelope schema and Handshake template.

2. **`polarity-autonomaton-v1`** — polarity paper page becomes first live Grove Autonomaton. Adds Handshake greeting + Declaration envelope + Cellar manifest + Keg payloads (primitives panel, compression metaphors, dual-addressed circuit invitation, reserve declaration, "what changes if you believe this" closer). Operator-empathy gap closes simultaneously.

3. **`mesh-retrofit-v1`** — A&A, /lambda, /standards/001/002/003/004 each get Autonomaton declarations. llms.txt v3 updated. Mesh visible across site.

Sequencing: 1 → 2 → 3. GRV-004 must exist as canon before polarity paper can declare itself the first implementation.

---

## Pre-flight items

- `registrar.the-grove.ai` placeholder page (operator stands up; "Coming Soon — Registrar for the Autonomaton Protocol")
- Park `autonomaton.network` or similar neutral domain (Stage 2 migration insurance)
- This Notion page (the capture you're reading) as canonical architecture reference

---

## Parking lot — explicit deferrals

- **Knowledge Commons** — named in GRV-004 trajectory; separate spec later (GRV-00X)
- **Reference implementation registry** at `registrar.the-grove.ai` — third-party publisher list, conformance signaling
- **Conformance levels** — full vs. partial Autonomaton conformance; spec'd in GRV-004 v1.1 if needed
- **Member-scope auth mechanics** — how does a Declaration signal member-scope keg access beyond "contact publisher"? Future
- **Cross-Autonomaton composition primitives** — runtime composition between Autonomatons; Stage 2 question

---

## What this changes

- **For Grove publication strategy:** Every future publication ships an Autonomaton Declaration. The site becomes self-describing at the protocol layer. Each publication is simultaneously destination, invitation, and instruction manual for adoption.

- **For Take Flight Advisors:** Commercial engagements ship their own scoped Autonomatons. Member-firm work declares its scope publicly without exposing client material. The protocol becomes the substrate for the consulting practice's discovery surface.

- **For institutional positioning:** Grove transitions from "publisher of standards" to "registrar of a new internet layer." The standards continue. The registrar role is the move that compounds.

- **For the polarity paper:** The paper's role expands from position paper to theoretical foundation that makes the Autonomaton Protocol necessary. Becomes citable in GRV-004's first paragraph.

- **For LinkedIn/announcement narrative:** The story stops being "we published a paper" and becomes "we proposed a new layer of the internet." Different scale of conversation.

---

*Sourced from polarity paper publication day session, April 22, 2026.*
*Ready for execution starting Sprint 1 (GRV-004 spec).*
