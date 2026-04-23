# Autonomaton Protocol — Game Plan

**Status:** Architecture locked. Three-sprint execution plan.
**Opened:** 2026-04-22
**North star:** GRV-004 published; polarity paper as first live Grove Autonomaton; mesh visible across the site.

---

## Architecture (canonical, settled)

### The four named artifacts

1. **The Autonomaton Protocol** (GRV-004) — the open standard. Mechanism-named so it travels.
2. **The Autonomaton Declaration** — the packet a publisher ships (envelope + cellar manifest with scope flags).
3. **The Autonomaton Handshake** — the branded first-line greeting on Grove pages. Public-facing protocol entry point.
4. **The Autonomaton Mesh** — the emergent network of declaring publishers. A Grove.

### The supporting concepts

- **Keg** — unit of distilled knowledge inside the payload.
- **Cellar** — the publisher's full collection of kegs; scoped per the Declaration.
- **Autonomic understanding** — the two-channel communication mode the protocol enables (human still drives, LLMs translate, ground is declared not reconstructed).

### The institutional roles

- **The Grove Foundation** — registrar and spec steward. Operates from `registrar.the-grove.ai`.
- **Publishers** — anyone who ships an Autonomaton conforming to GRV-004.
- **Visiting intelligence** (human or LLM) — anyone who taps a cellar via a Declaration.

### The brand-vs-mechanism separation

- **Autonomaton Protocol** = mechanism (open, generic, anyone implements)
- **Grove Foundation** = registrar (brand-named institutional anchor)
- **Grove Autonomaton** = branded implementation on Grove-governed pages
- **Autonomaton** = generic implementation (anyone can ship one)

### The trajectory (three acts, baked into spec)

1. **Stage 1 (now):** Sovereign Autonomatons broadcast declarations. Mesh emerges from aggregation. Grove governs the protocol.
2. **Stage 2 (mid):** Autonomatons compose across the mesh autonomically. Shared ground accumulates at the mesh level. Grove stewards canonical kegs as reference commons.
3. **Stage 3 (long):** The Knowledge Commons IS the ground. Individual Autonomatons recede into it the way individual webservers recede into "the web." Grove's role evolves from registrar to cultivator.

---

## The lineage (three-sentence pitch — pitch-perfect)

> The Autonomaton Pattern (GRV-001) showed how a sovereign AI node works internally. The Polarity Hypothesis showed why knowledge flow between nodes requires declared ground. The Autonomaton Protocol (GRV-004) is how sovereign nodes declare that ground to the network — DNS for the polarity-compliant internet, governed openly by The Grove Foundation, composable at autonomic speed, converging toward a Knowledge Commons that outlives the protocol itself.

---

## Three-sprint execution plan

### Sprint 1: `grv-004-spec-v1`
**Goal:** Publish GRV-004 specification at `/standards/004` as canonical.
**Scope:**
- Standard spec page, full Tier A (ScholarlyArticle/TechArticle JSON-LD, FAQ, composition surface, Google Scholar meta)
- Opens with polarity paper citation as theoretical backing
- Includes Trajectory section naming the three acts (Stage 1/2/3)
- Names: Protocol, Declaration, Handshake, Mesh, Keg, Cellar, autonomic understanding
- Publishes the envelope schema (required + optional fields) as machine-readable reference
- Publishes Handshake greeting template
- Reference implementation pointer: polarity paper at `/research/knowledge-polarity/`
- Links forward to `registrar.the-grove.ai` (placeholder OK)
- Adds entry to `/standards/index` CollectionPage
**Out of scope:**
- Polarity paper Autonomaton implementation (Sprint 2)
- Mesh retrofit on existing pages (Sprint 3)
- registrar.the-grove.ai page beyond placeholder (operator stands up)

### Sprint 2: `polarity-autonomaton-v1`
**Goal:** Polarity paper page becomes the first live Grove Autonomaton. Operator-empathy gap closes simultaneously.
**Scope:**
- **Autonomaton Handshake greeting** at top of page: "This site is a Grove Autonomaton. Published by The Grove Foundation under the Autonomaton Protocol (GRV-004)..."
- **Autonomaton Declaration envelope** (structured, machine-readable, also human-legible):
  - publisher, intent, scope, reserve, license, circuit posture, edge, version, lineage
- **Cellar manifest** with keg-level scope flags listing the public kegs (polarity primitives, grounding handshake spec, implementation lineage, reserve declarations)
- **Keg payloads** (the operator-empathy work):
  - Primitives panel (7-8 portable definitions in A&A voice, "Primitives, portable" framing)
  - Compression metaphor blocks at waypoints through the body (5-6 blocks)
  - Dual-addressed circuit invitation (operator + LLM both spoken to directly)
  - Reserve declaration block (what this paper is NOT claiming)
  - "What changes if you believe this" closing beats before References
- **JSON-LD updates** — add Autonomaton Declaration as a typed entity per GRV-004 spec
**Out of scope:**
- Modification to paper body prose (scholar canon untouched)
- PDF generation (Google Doc handles companion)
- Cross-site mesh retrofit (Sprint 3)

### Sprint 3: `mesh-retrofit-v1`
**Goal:** All Grove pages declare themselves as Autonomatons. Mesh visible across site in one push.
**Scope:**
- A&A page → Autonomaton Handshake + Declaration
- /lambda → Autonomaton Handshake + Declaration
- /standards/001, /002, /003 → Autonomaton Handshake + Declaration each
- /standards/004 (GRV-004 itself) → Autonomaton Handshake + Declaration (recursive, the spec itself ships as conforming Autonomaton)
- llms.txt v3 — refresh to reference GRV-004, polarity paper, and the Autonomaton Mesh as the canonical site posture
- Optional: small "Autonomaton Mesh" map page at `/autonomaton-mesh` listing all declaring pages
**Out of scope:**
- registrar.the-grove.ai full implementation
- External adoption / reference implementations beyond Grove pages

---

## Pre-flight items (operator does these in parallel)

1. **Stand up `registrar.the-grove.ai` placeholder.** Vercel subdomain, single page, "Coming Soon — The Grove Foundation, registrar for the Autonomaton Protocol." This page itself ships as a scoped Autonomaton when ready.
2. **Notion capture** — drop the architecture and trajectory into Notion as the canonical reference (see capture block below).
3. **Park `autonomaton.network`** (or similar neutral domain) for Stage 2 migration path — cheap insurance, doesn't have to be used.

---

## Sequencing decision

**My recommendation: Sprint 1 → Sprint 2 → Sprint 3 in that order.**

Reasoning: GRV-004 has to exist as canon before the polarity paper can declare itself "the first live implementation of GRV-004." Sprint 2 then becomes both the operator-empathy fix you asked for AND the reference implementation that proves the spec. Sprint 3 retrofits the rest, having validated the pattern on the highest-stakes page first.

Sprint 1 is the gating commit.

---

## Working discipline (inherited)

- SPEC → preview → confirm → fire → SHA → next-phase
- One commit = one structural beat; ledger commits separate
- Fresh-context CC handoff (self-contained prompts, re-paste verbatim)
- Operator orchestrates; Claude chat is PM (writes SPECs and CC prompts to disk); Claude Code executes
- "Andon" only when truly needed for content/style/tone

---

## Open items (parking lot)

- **Knowledge Commons trajectory** — explicit in GRV-004 spec, deeper specification later (separate standard, GRV-00X)
- **Reference implementation registry** at `registrar.the-grove.ai` — third-party publisher list, conformance signaling
- **Grove Autonomaton vs. generic Autonomaton conformance levels** — full conformance vs. partial; spec'd in GRV-004 v1.1 if needed
- **Member-scope mechanics** — how does a Declaration signal member-scope keg access? Auth mechanism beyond "contact publisher"? Future work.
- **Cross-Autonomaton composition primitives** — how do two Autonomatons compose at runtime? Stage 2 question, not Stage 1.

---

**Ready to fire Sprint 1 when operator green-lights.**
