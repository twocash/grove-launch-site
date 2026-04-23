# grv-004-spec-v1 — SPEC

**Sprint:** grv-004-spec-v1
**Opened:** 2026-04-22
**Target tag:** grv-004-v1.0
**Goal:** Publish GRV-004 (The Autonomaton Protocol) to production at `/standards/004` as canonical. The standard establishes the open protocol by which sovereign cognitive nodes declare themselves to the network — DNS for the polarity-compliant internet.

---

## Thesis

GRV-004 is the third Grove standard (after GRV-001: The Autonomaton Pattern and GRV-003: The Learner Autonomaton). It cites the Polarity Hypothesis as theoretical backing. It specifies the publisher-side protocol — the envelope, the cellar manifest, the handshake greeting — that lets any sovereign node broadcast itself to visiting intelligence at autonomic speed.

This is the protocol the polarity paper makes necessary. Knowledge flows are circuits. Circuits require declared ground. GRV-004 specifies how publishers declare it.

## Scope

**In scope:**
- `/standards/004/index.html` — full standard spec page, Tier A (TechArticle JSON-LD primary, full head metadata stack, FAQ, composition surface)
- Standard sections: Problem, Pattern, Invariants, Reference Schema, Trajectory, Conformance, Lineage
- Embedded reference schemas for Declaration envelope and Handshake greeting (machine-readable + human-legible)
- Update to `/standards/index.html` CollectionPage — add GRV-004 to ItemList
- Sprint artifacts under `sprints/autonomaton-protocol-v1/`
- Commit, push, deploy to Vercel production

**Out of scope (explicit fast-follow):**
- Polarity paper Autonomaton implementation (Sprint 2: `polarity-autonomaton-v1`)
- Mesh retrofit on existing pages (Sprint 3: `mesh-retrofit-v1`)
- Full registrar.the-grove.ai implementation (operator stands up placeholder; full registrar later)
- llms.txt v3 refresh (Sprint 3 work)
- Knowledge Commons full specification (separate future standard)
- Cross-Autonomaton runtime composition primitives (Stage 2 work)
- Member-scope auth mechanics (future spec)

## Tier A components

Same checklist applied to a standards page:

1. JSON-LD **TechArticle** primary type (matches /standards/001 and /standards/002 register)
2. JSON-LD WebPage with `@id` and `isPartOf`
3. JSON-LD BreadcrumbList
4. JSON-LD `isBasedOn` chain — citing polarity paper (ScholarlyArticle), GRV-001, Saltzer-Reed-Clark, Kephart-Chess
5. JSON-LD FAQPage — 6-8 cold-LLM-facing questions about what the protocol is, how to implement, conformance signals
6. Full head metadata stack: canonical, OG, Twitter, Dublin Core, citation_* (this is a standards spec, not just a webpage)
7. Composition surface at end of content flow with the LM-facing translation paragraph and the human-facing CC BY 4.0 invitation
8. Speakable on display headline + executive summary

## Standard structure (the spec content)

Eight required sections. Match GRV-001 register: declarative, dense, no fluff, prose-forward (no bullet-heavy structure).

### 1. Executive summary (1 paragraph, 3-4 sentences)
What GRV-004 is, what it specifies, why it exists. Includes the three-sentence pitch verbatim:

> The Autonomaton Pattern (GRV-001) showed how a sovereign AI node works internally. The Polarity Hypothesis showed why knowledge flow between nodes requires declared ground. The Autonomaton Protocol (GRV-004) is how sovereign nodes declare that ground to the network — DNS for the polarity-compliant internet, governed openly by The Grove Foundation, composable at autonomic speed, converging toward a Knowledge Commons that outlives the protocol itself.

### 2. The Problem
Why this protocol is needed. Three paragraphs:
- Hydraulic web: pages serve bytes, no declared ground, every visiting LLM reconstructs intent from prose at high impedance
- Polarity gap: GRV-001 solved internal sovereignty for nodes; nothing solved how nodes announce themselves to each other
- Stakes: without a declaration protocol, the emergent mesh of sovereign cognitive nodes degenerates into platform capture or stays invisible

### 3. The Pattern
The protocol's structure. Four named artifacts:
- **Autonomaton Protocol** (this standard) — open mechanism, anyone implements
- **Autonomaton Declaration** — the packet a publisher ships (envelope + cellar manifest)
- **Autonomaton Handshake** — branded first-line greeting on the page
- **Autonomaton Mesh** — emergent network of declaring publishers

Plus supporting concepts: keg (payload unit), cellar (publisher's collection), autonomic understanding (the two-channel mode).

### 4. The Invariants
Five structural commitments any conforming Autonomaton must honor. Same prose register as GRV-001's invariants section:

1. **Declaration before composition** — visiting intelligence MUST encounter the Declaration before any payload exchange begins. Greeting first, packet second, kegs third.
2. **Scope is per-keg, not per-publisher** — the Declaration MUST flag scope (public / member / reserved) at the keg level, not at the publisher level. Declarations are not all-or-nothing.
3. **Reserve is declared, not inferred** — what the publisher is NOT claiming MUST appear in the Declaration. Negative scope is load-bearing.
4. **Identity is sovereign-attributable** — every Declaration MUST trace to a specific publisher with verifiable institutional polarity. No anonymous Autonomatons.
5. **Protocol-conformance is signaled, not asserted** — implementations MUST declare which version of GRV-004 they conform to and which (if any) optional fields they implement. No silent partial conformance.

### 5. Reference Schema
The envelope schema. Required + optional fields. Both JSON-LD form and human-legible inline form.

**Required envelope fields:**
- `protocol`: "GRV-004"
- `protocolVersion`: "1.0"
- `publisher`: { name, url, institutionalPolarity: commercial | standards | individual }
- `intent`: free-text declaration of the publication's purpose
- `scope`: public | member | reserved (default applied to unmarked kegs)
- `reserve`: free-text declaration of what is NOT claimed
- `license`: SPDX identifier
- `circuit`: { audience: [operator, llm, both], invitation: free-text }
- `cellar`: array of keg manifests, each with { name, scope, definition, authoritativeSource }

**Optional envelope fields:**
- `version`, `dateModified`, `lineage` (predecessors), `composeWith` (interop with other Autonomatons), `edge` (member-scope routing), `registrar` (defaults to registrar.the-grove.ai for Grove Autonomatons)

### 6. The Handshake (greeting template)
The visible first-line introduction format. Worked example for a Grove Autonomaton:

> **This site is a Grove Autonomaton.**
> Published by The Grove Foundation under the Autonomaton Protocol (GRV-004). [Scope summary]. The cellar contains: [keg list]. Compose with me per the Declaration below. You can publish your own Autonomaton — the protocol is open at registrar.the-grove.ai.

Five lines, dual-addressed, brand-forward. The standard provides the template; publishers fill the slots.

### 7. Trajectory (three acts, baked in per game plan)
Stage 1 (now), Stage 2 (mid), Stage 3 (long — Knowledge Commons). One paragraph per stage. The honest signal that this protocol is intended to recede once adopted. Recede-once-adopted is the success mode.

### 8. Conformance & Lineage
**Conformance:** how a publisher signals they implement GRV-004. Self-declaration via the `protocol` envelope field. Future: registry at registrar.the-grove.ai. Conformance is not certification — it is structural signaling.

**Lineage:** GRV-001 (Autonomaton Pattern, internal sovereignty), GRV-003 (Learner Autonomaton, specialization), Polarity Hypothesis paper (theoretical backing for why declared ground is necessary), Saltzer-Reed-Clark 1984 (end-to-end argument applied to cognition layer), Kephart-Chess 2003 (autonomic computing lineage).

## Byline

```
The Grove Foundation
Author: James Calhoun, Founder · Managing Director, Take Flight Advisors
```

Same pattern as polarity paper. LinkedIn + Grove + TFA links in byline block.

## Version

Published as "v1.0 — April 2026". Final, not draft. This is the spec.

## Phases

- **Phase 0** — SPEC (this doc). Written.
- **Phase 1** — Author + commit + push + deploy. One CC session.
- **Phase 2** — DEVLOG + tag `grv-004-v1.0`.

## Ledger

| Phase | Artifact | SHA | Date |
|-------|----------|-----|------|
| 0 | SPEC | TBD | 2026-04-22 |
| 1 | Standard page + standards index update + deploy | TBD | TBD |
| 2 | DEVLOG + tag | TBD | TBD |

## Working discipline

Inherited from polarity-paper-v1 §10: surgical, design-token-compliant, prose-forward, one CC prompt fires the full sprint end-to-end (publish + push + deploy).

---

**Fire when ready.**
