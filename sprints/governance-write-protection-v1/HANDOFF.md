# governance-write-protection-v1 — HANDOFF

**Closed:** 2026-06-22
**Commit:** `b2580ce` — `feat: GRV-001 2.0 — re-key zones from category to operator scope` (pushed to `origin/master`)
**Type:** Substantive standard revision · GRV-001 v1.3 → **2.0** · backward-compatibility break
**Origin:** operator found the drift QA-ing GRV-001 against a Hermes Agent (Nous Research) refactor — the spec refused to let an Autonomaton persist an in-scope research note into a granted workspace.

---

## What shipped

GRV-001 2.0 re-keys the zone model from **action category** to **operator scope**. A write's zone is now computed from *what it changes*, not what category it resembles.

**The two surfaces (the structural backbone):**
- **Autonomous loop (Surface A):** scope-defining writes are **impossible** — capability-absent at the OS level. "Cannot, not won't."
- **Operator-authenticated action surface (Surface B):** exists only when a verified **grant token** is present; the agent executes one granted scope change inline, as the operator's hands, provenance-stamped. The agent can request a grant but can never issue or forge one.

**Delivered:**
- **Prose:** Principle IV, Red Zone, Stage 04 rewritten; two new subsections — **Confused-Deputy Protection** (`#confused-deputy-protection`) and **Provenance Stamping** (`#provenance-stamping`) — plus **The Confirmation Gate** (`#confirmation-gate`). §VII re-keyed; category-keyed `zone_overrides` removed.
- **Five published JSON Schemas** at `/standards/001/schemas/`: `zones-v2`, `routing-operational-v2`, `routing-authority-v2`, `confirmation-gate`, `provenance-stamp`. All draft-2020-12 meta-valid. The `provenance-stamp` conditionals make a scope-defining write on the autonomous loop **structurally unrepresentable in the record** (the razor encoded at the schema layer).
- **Manifest** `GRV-001.json`: version/date, three descriptions, `version_history` 2.0 entry, and a compact `governance` object linking the schemas.
- **Vocabulary** `grove-canonical-vocabulary.md`: drift loci (`:249`/`:241`) revised; 5 new canonical entries (scope-defining surface, in-scope surface, the two surfaces, confirmation gate, provenance stamp).

**Word discipline (Gemini F6):** "unrepresentable" is used **only** for the schema/record layer; the OS-capability layer reads "impossible / capability-absent." Thesis sentence preserved verbatim: *"It is a sentence the system cannot form. Cannot, not won't."*

---

## The new principle (from Gemini F2)

> **The scope-defining and in-scope surfaces must never share a file.**

Co-resident authority and operational fields defeat path-level disjointness (a write to a shared file touches both surfaces at once). The v1 single `routing.config` mixed them; 2.0 splits it into `routing.operational` (in-scope) and `routing.authority` (scope-defining), so the Stage-04 confused-deputy disjointness test works at the file level. This is now a standing design rule for the architecture.

---

## Process record

8 phases, each gated. Gemini adversarial review returned a **conditional pass** — six findings (F1–F6), targeted rework, **no architectural redesign** (Phase 2's two-surface model stood). F2 was the only schema-level change (the routing split); F1/F3–F6 were prose/conformance. Full reasoning in `SCOPE-BOUNDARY.md` (razor line), `AUDIT.md`, `PATCHES.md` (+ F1–F6 addenda), `CROSS-REF-AUDIT.md`, `GEMINI-REVIEW-BRIEF.md`. Backups: `index-v1.3-backup.html`, `GRV-001-v1.3-backup.json`.

**Conformance validation (re-run post-rework):** manifest + 2 JSON-LD + 8 `<pre>` blocks parse; 26 anchors intact (zero existing anchors changed); real drift = 0; "unrepresentable" only schema-layer (2 occurrences); thesis verbatim; 5 schemas meta-valid + razor conditionals pass.

---

## Deferred (out of scope — for future work)

- **GRV-003 terminological alignment.** GRV-003 v1.0 is *consistent* with 2.0 (it already describes Stage-4-approved config mutations and the sticky-grant model) and needs no correctness fix. A future revision should adopt the explicit 2.0 vocabulary (scope-defining surface, confirmation gate, the two surfaces) and the OS-vs-schema "impossible/unrepresentable" distinction. **Fold into the untracked `grv-003-v1.2` draft.**
- **`alerts/telemetry-trap` (line ~349) optional sync.** Carries a verbatim copy of the *old* Stage-04 card. Dated pre-2.0 publication (pre-standard, not non-compliant); sync at the operator's discretion.

---

## Open items

- **Deploy verification:** commit pushed to `origin/master`; live-URL confirmation of the v2.0 byline / `date_modified: 2026-06-22` was pending CDN propagation at handoff time (the edge was still serving v1.2). If it does not refresh, confirm the repo's Vercel git-deploy integration is active.
- **Backlog:** `SPRINT-BACKLOG.md` still lists `governance-write-protection-v1` under *Queued*. Move it to *Tracking — completed* at the operator's direction (CC does not edit the backlog unsolicited).
- **`git add -A` deviation:** the 2.0 commit was staged with explicit paths (3 surfaces + 5 schemas + this sprint folder), **not** `git add -A`, to keep the out-of-scope `standards/003` drafts and unrelated working-tree WIP out of the commit.
