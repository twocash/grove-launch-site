# governance-write-protection-v1 — SPEC (stub)

**Status:** QUEUED — not started. Scaffolded 2026-06-21 from the `grv001-red-learning-reconcile-v1` Gate #1 review.
**Type:** substantive — standard semantics + reference-schema (§VII) change. Not prose-only.
**Origin:** operator surfaced the drift while QA-ing GRV-001 against a refactor of the **Hermes Agent (Nous Research)**. Treated as a **critical coherence fix** — the spec as written is not truly coherent without it.

---

## Problem

The published GRV-001 is coherent in its prose (Principle IV gates only boundary-crossing transitions; the Red Zone covers only high-stakes/irreversible/ethically-sensitive ops). But the **enforcement layer** drifted: the banked ruling "operator config cannot be written by the agent" was over-generalized — via category-keyed `zone_overrides` — into "the agent cannot write *any* file on its own authority." Result: an Autonomaton refuses to persist an in-scope knowledge artifact (e.g. a research notes file) into a granted workspace, directly contradicting its own ratchet / local-knowledge thesis. The `grv001-red-learning-reconcile-v1` v1.3 patch is the safe *interim* (observe-only); it does not fix this.

## Goal

Re-key zones from **action category** to **operator scope**, and authorize **operator-directed inline mutation** of scope-defining config, so that progressive personalization works without the agent ever unilaterally granting itself authority.

## The model to encode (from the Gate #1 design note)

**Two axes:**
1. *Does the write change the agent's scope?* — if no → Green within granted scope, no per-write prompt (knowledge artifacts, skill entries, refined patterns, telemetry-derived rules).
2. *For a scope-defining write (zones, routing, permission boundaries):* permitted **iff** there is a live, authenticated, contemporaneous operator grant of that specific change → agent executes inline, provenance-stamped. Without such a grant → unilateral self-grant → refused.

**Load-bearing invariant:** "no scope change without a live, authenticated, specific operator grant of *that* change." Invariant IV forbids *unilateral* self-grant, not *human-executed* scope change.

**Confirmation gate, not per-action block:** one-time, authenticated, sticky, provenance-stamped. Heavy gate is on *authenticating consent*, not on blocking the agent's hands.

**Confused-deputy protection (the hard requirement):** the scope-vs-category test is not self-enforcing. An in-scope artifact that a later pipeline step parses as config becomes a scope change. The mechanism must prove the write target — and every downstream read path — sits outside the scope-defining surface. This is what `governance-write-protection-v1` actually has to deliver before any relaxation ships.

**Provenance lever:** Invariant III makes the relaxation auditable — every agent write carries (agent-wrote-this, under-this-grant, in-this-scope), so "audit the config, the behavior is explained" survives.

## Scope of work (to be detailed in planning)

- Define the scope-defining surface vs derived/in-scope surface formally.
- Re-key `zone_overrides` from category to operator scope.
- Specify the authenticated confirmation-gate channel (forgery/injection resistant).
- Specify provenance stamping for agent-performed writes.
- **§VII rewrite** of the reference schemas (currently category-keyed).
- Spec-text updates to GRV-001 (Principle IV / Red Zone / Stage 04) replacing the v1.3 "observes" placeholder with "writes, within scope, under authenticated grant, with provenance."

## Gates / dependencies

- Resolve the config-defines-scope circularity (formal scope-defining vs in-scope boundary).
- Gemini pre-execution review (touches published zone semantics + §VII).
- Version bump: GRV-001 → 2.0 (architectural change; breaks compatibility with category-keyed implementations) — confirm at planning.

## Out of scope

The v1.3 prose patch (shipped separately as `grv001-red-learning-reconcile-v1`).

## References

- `sprints/grv001-red-learning-reconcile-v1/README.md` — design note "the config-write guard is a split, not a deletion" (full reasoning).
- `sprints/grv001-red-learning-reconcile-v1/GEMINI-REVIEW-BRIEF.md` — adversarial review + adjudication.
