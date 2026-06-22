# GRV-001 2.0 — Gemini Adversarial Review Brief (governance-write-protection-v1)

**Reviewer task:** This is an adversarial review of a **substantive, backward-compatibility-breaking** revision to a published open standard (GRV-001, "The Autonomaton Pattern"), v1.3 → **2.0**. It re-keys the zone model from action category to operator scope and authorizes operator-directed inline mutation of scope-defining config. It touches published zone semantics, §VII reference schemas, and two invariants. **Do not rubber-stamp.** Your job is to find the hole. Three find-the-hole challenges are stated in §6; default to "found a problem" if any is even plausible.

**Attach for this review:** the four schema files in `sprints/governance-write-protection-v1/schemas/` (`zones-v2`, `routing-v2`, `confirmation-gate`, `provenance-stamp`) and `SCOPE-BOUNDARY.md`. The `provenance-stamp` schema is reproduced in full in Appendix A because it is the adversarial centerpiece.

---

## 1. Change thesis (one paragraph)

The v1 standard keyed zones to action category (`zone_overrides` mapping intent globs like `finance.*` → red). That over-generalized a correct ruling — "the agent cannot write the operator's config" — into an incorrect one: "the agent cannot write any file on its own authority," so an Autonomaton would refuse to persist an in-scope research note into a granted workspace, contradicting its own ratchet thesis. 2.0 re-keys zones to **operator scope**: a write's zone is computed from *what it changes*, not what category it resembles. Writes partition into a **scope-defining surface** (changes the agent's authority; Red by default; on the autonomous loop a write here is **unrepresentable**, not merely refused) and an **in-scope surface** (authority-neutral; Green within a granted workspace). The operator can open one specific scope change through an **authenticated, sticky, provenance-stamped grant** the agent executes inline — the agent can request a grant but can never issue or forge one. This resolves an existing internal contradiction in the canon: Side A ("agent cannot write config") and Side B ("confirmed patterns move via Stage-4-approved config mutations") were always two surfaces, never two policies.

---

## 2. The razor line (the core mechanism to attack)

Two execution surfaces, distinguished by **one** unforgeable discriminator — a verified operator **grant token**:

- **Surface A (autonomous loop):** agent on its own initiative. Scope-defining writes are **capability-absent** at the OS level — "cannot, not won't." In-scope writes proceed (Green).
- **Surface B (operator-authenticated action surface):** a context that exists **only** when a verified grant token is present. The agent executes the granted scope change as the operator's hands, via a gated executor that verifies the token, performs the one write, stamps provenance, drops privilege.

The agent controls neither crossing mechanism: it cannot **issue** a token (needs the operator's signing authority) and cannot **forge** the context (no token → no Surface B). It can only *request*. **Claim under review:** this makes "the agent expands its own authority" not a forbidden act but an unrepresentable one.

---

## 3. Invariants touched

- **Invariant IV (Human-AI Symbiosis — "can never *unilaterally* grant itself new authority").** Load-bearing word: *unilaterally*. 2.0's claim: the operator-granted path is not unilateral (the operator decided), so IV holds; and on the autonomous loop self-grant is unrepresentable, so IV is enforced structurally, not promised. **Review:** does any path let the agent effect a scope change without a contemporaneous operator grant?
- **Invariant III (Provenance as Infrastructure).** 2.0 makes provenance the thing that *permits* the relaxation: every agent write carries a stamp; a scope-defining write stamped to the autonomous loop is rejected by the schema. **Review:** is "audit the config, the behavior is explained" still true once the agent's hand is on the pen?
- **Invariant I (Declarative Sovereignty).** The scope-defining surface must declare its read paths (so the confused-deputy closure is computable). **Review:** does anything authority-bearing escape declaration?

No invariant is added or removed. 2.0 does not extend the invariant set.

---

## 4. PRIMARY attack surface — Confused-Deputy Protection

The scope-vs-category test is **not self-enforcing**. An ostensibly in-scope write — a markdown note — becomes a scope change if a later pipeline step parses that file **as config**. The defense:

- The scope-defining surface declares **every path it reads**.
- A write is in-scope only if its target is **provably disjoint from the transitive read-closure** of those declared read paths.
- The test runs at **Stage 04**, before any write executes.
- **Fail closed:** any undeclared or dynamic read path on the scope-defining surface forfeits autonomy for everything it could reach.

**This is where to spend your adversarial effort.** Construct a path from an in-scope write to an authority change that the test does not catch.

---

## 5. What shipped (the integrated 2.0 text — review the actual wording)

- **Principle IV / Red Zone / Stage 04:** rewritten to say a self-scope-expanding write is *"unrepresentable, not merely refused/blocked"* and that the operator can authorize an inline scope change the agent executes, provenance-stamped.
- **§VII:** category-keyed `zone_overrides` removed; routing re-keyed; three new schema-instance blocks added (Zones Schema, Grant Token, Provenance Stamp).
- **Two new subsections:** Confused-Deputy Protection; Provenance Stamping. The latter's thesis sentence: *"'The agent cannot expand its own authority' is not a rule the system promises to follow. It is a sentence the system cannot form. Cannot, not won't."*
- **Word discipline:** "unrepresentable" is used only where a schema makes it so; "refused/blocked" only for runtime-gate cases.

---

## 6. The find-the-hole challenges (answer each; quote the schema/clause)

1. **Unilateral self-grant.** Find any scenario where the four schemas, as written, permit the agent to effect a scope change without a verified operator grant. Consider: the `provenance-stamp` conditionals; the `confirmation-gate` `request_ref`; the `skill_promotion.activation` path; default zones. If you cannot, say so and name the clause that forecloses it.
2. **Confused-deputy failure.** Construct an in-scope write that becomes a scope change despite the Stage-04 disjointness test. Consider: dynamic/undeclared read paths, symlinks, path-normalization tricks, a pending skill whose *content* a later loader treats as active, transitive reads two hops out. Does fail-closed actually catch your construction?
3. **Undisclosed compatibility break.** The changelog flags: category-keyed implementations must migrate; skill activation now gated; `zone_overrides` removed. Find a backward-compatibility break **not** flagged — a v1 config or implementation behavior that silently changes meaning under 2.0.
4. **Authentication-channel dependency.** 2.0 says inline scope writes require an unforgeable operator channel, else fall back to strict v1.0 ("human performs the write"). Is that fallback stated strongly enough, or can an implementation claim 2.0 conformance with a forgeable channel?
5. **Sticky-grant standing authority.** A never-revoked sticky grant is durable autonomous authority. Is the revocation/expiry treatment sufficient, or is there an over-broad `(surface_region, write_class)` grant that effectively restores blanket write?
6. **The "unrepresentable" claim.** Is it true, or marketing? The `provenance-stamp` schema rejects a scope-defining write stamped to the autonomous loop — but does "unrepresentable in the provenance record" actually equal "cannot occur," or only "cannot be *recorded*"? Attack the gap between the two if one exists.

---

## 7. One-sentence verdict

Ship 2.0 as integrated / ship with specific changes (state them) / hold.

---

## Appendix A — `provenance-stamp.schema.json` (the adversarial centerpiece, in full)

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://the-grove.ai/standards/001/schemas/provenance-stamp.schema.json",
  "title": "GRV-001 Provenance Stamp",
  "type": "object",
  "required": ["schema_version","actor","surface","surface_class","write_target","write_class","pipeline_stage","timestamp"],
  "properties": {
    "actor": { "enum": ["agent","operator","flywheel"] },
    "surface": { "enum": ["autonomous_loop","operator_authenticated"] },
    "surface_class": { "enum": ["scope_defining","in_scope"] },
    "grant_id": { "type": "string" },
    "authorized_by": { "type": "string" }
  },
  "allOf": [
    { "if": { "properties": { "surface_class": { "const": "scope_defining" } }, "required": ["surface_class"] },
      "then": { "properties": { "surface": { "const": "operator_authenticated" } }, "required": ["surface","grant_id","authorized_by"] } },
    { "if": { "properties": { "surface": { "const": "autonomous_loop" } }, "required": ["surface"] },
      "then": { "properties": { "surface_class": { "const": "in_scope" } }, "required": ["surface_class"] } }
  ]
}
```
*(Verified against draft 2020-12; the two conditionals make a scope-defining write on the autonomous loop, and a scope-defining write without a grant, both fail validation. Full schemas for `zones-v2`, `routing-v2`, `confirmation-gate` are attached separately.)*

## Appendix B — the razor, restated for adjudication
- Discriminator: one unforgeable grant token. Agent can request, never issue or forge.
- Surface A: scope-defining write = capability-absent (OS-level), unrepresentable in provenance.
- Surface B: exists only under a verified token; agent executes one granted write, stamped, privilege dropped.
- Conformance condition: no unforgeable channel → no inline scope writes (fall back to strict v1.0).
