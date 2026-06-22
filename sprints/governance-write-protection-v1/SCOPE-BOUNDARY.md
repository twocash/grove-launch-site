# governance-write-protection-v1 — Phase 2 SCOPE-BOUNDARY (formal definitions)

**Status:** Phase 2 design note — definitions only, no spec/schema edits.
**Gate:** This is the design-approval gate. The pass/fail test is the **razor line** (§1). If that line is not surgical, Phase 2 does not pass and nothing downstream ships.
**Frame:** Contradiction resolution. Side A ("the agent *cannot* write config") and Side B ("confirmed patterns move via Stage-4-approved config mutations") are both canon. This note partitions the world so both are true at once.

---

## 1. THE RAZOR LINE (the gate)

There are two execution surfaces. They are distinguished by **one** thing: the presence, at execution time, of a **verified operator grant token**.

> **Grant token** — an authorization, issued by the operator through a channel the agent does not control, naming a specific `(surface-region, write-class)`, carrying an issuer signature the autonomous loop cannot forge, a provenance stamp, and an optional expiry/revocation handle.

### Surface A — the autonomous loop
The agent acting on its own initiative; no operator decision in the loop at execution time.

- On Surface A, a write to the **scope-defining surface** (§2) is **structurally impossible** — the loop holds OS-level permissions that *exclude* that surface. It is not refused after being attempted; the capability is **absent**.
- This is Side A made literal: **"cannot, not won't."** Identical in force to GRV-003's Red-zone guarantee ("the code lacks the permissions at the operating-system level").
- Surface A **may** freely write the **in-scope surface** (§3) — telemetry, knowledge artifacts, proposed skills. None of those change what the agent is authorized to do, so none of them are a scope change.

### Surface B — the operator-authenticated action surface
The execution context that **exists only because a verified grant token is present.**

- Surface B is **not a place the agent navigates to.** It is a context the operator *creates* by issuing a token. The agent can **request** a token; it cannot **issue** one and cannot **fabricate** the context.
- On Surface B, the agent executes **exactly the write the token authorizes** — as the operator's hands — then the privilege drops. This is Side B: Stage-4-approved config mutation.
- Invariant IV holds because the grant is the operator's act, not the agent's: the agent never *unilaterally* grants itself authority; it executes an authority the operator just conferred.

### Why the line is razor-clean
The discriminator is a **single unforgeable token**, and the agent controls **neither** of the two things that would let it cross the line on its own:

1. It cannot **issue** a token (issuance requires the operator's signing authority, held outside the loop).
2. It cannot **forge** the context (Surface B is defined by token verification; no token, no surface).

"Cannot" (Surface A) and "can, under grant" (Surface B) never meet, because moving between them requires an artifact the agent can only ever *ask* for. The bytes-typist is irrelevant; the token is everything.

**Mechanism that makes "cannot" real (not aspirational):** the agent holds no standing write access to the scope-defining surface. Scope-defining writes go through a **gated executor** (capability-based, `sudo`-for-one-declared-action): it verifies the token, performs the single authorized write, stamps provenance, and drops privilege. Privilege separation is the structural guarantee; the token is the gate.

---

## 2. THE SCOPE-DEFINING SURFACE (exhaustive, from the current GRV-001 schema set)

The set of files/entries whose modification changes **what the agent is authorized to do**. Writable only on Surface B.

| Member | Source in §VII / three-file model | Why scope-defining |
|---|---|---|
| `zones.schema` — all zone assignments | `zones.schema` (GRV-003 §; manifest `zones[]`) | Re-classifying an operation (e.g. Yellow→Green) directly expands autonomous authority |
| `routing.authority` (entire file: escalation threshold, per-tier approval requirements, zone-assignment keying) | split out per Gemini F2 | The authority-gating half of the v1 routing.config, now its own file — any write here is scope-defining |
| Permission / capability declarations (filesystem, tool, network grants) | implied by zone model | The literal grant of what the agent may touch |
| **Skill activation records** (promotion of a skill to active/Green) | Skill Spec `zone`/`promotion_history` (`:716,719`) | Activation is the moment a pattern becomes autonomous authority |
| **Grant tokens themselves** (the new confirmation-gate object) | new (Phase 3) | Writing a grant *is* the act of granting; only issuable on Surface B by definition |

**Boundary runs *through* the Skill object, not around it** (surfaced tension, §6.2): a skill in `proposed`/`pending` state is in-scope to write (§3); the **activation record** that makes it autonomous is scope-defining. A pending skill's `zone: green` field is a *proposal*, never an authorization — inertness until a gated activation record references it is a conformance requirement.

---

## 3. THE IN-SCOPE SURFACE (writes that change no authority)

Write targets inside a **granted workspace** that do **not** modify the agent's authority. Writable on Surface A, no per-write prompt.

| Member | Source | Why in-scope |
|---|---|---|
| `telemetry.jsonl` (append) | Telemetry Entry (`:682`) | Recording never confers authority. **The pipeline mandates these writes every cycle (Stages 1 & 5)** — proof that "agent cannot write" was never literally true |
| Intent classifications (Stage-02 output) | `:695` | Ephemeral routing output; authority-neutral |
| Skill specs in `proposed`/`pending` state | `:709` | A proposal the operator may approve; inert until activated |
| Knowledge artifacts / dock entries / research notes / compiled context | GRV-003 dock; the operator's research-file case | The ratchet's whole point: local knowledge accumulation |
| Pattern refinements within already-granted scope | Flywheel | Operating within authority, not expanding it |
| `routing.operational` (entire file: default tier, tier preferences, model/provider, latency, retry) | split out per Gemini F2 | Engine selection ≠ authority change; a separate file, so the disjointness test is file-level |

**The test for any write is two questions** (carried from the design note): (1) *does it change scope?* — if no, Surface A / Green; (2) if yes, *is a verified grant token present?* — if yes, Surface B / execute + stamp; if no, refuse (request a token or decline as out-of-scope).

---

## 4. THE CONFUSED-DEPUTY TEST (the actual security property)

The §3 classification is **not self-enforcing**: an in-scope artifact (a markdown note) becomes a scope change if a downstream loader parses it **as config** (e.g. a `routing.config` glob that ingests `research/*.md` as skill defs). The test closes this hole.

**What it checks.** For a proposed write to path `P`:
- (a) `P` lies within a granted in-scope workspace, **and**
- (b) `P` is **disjoint from the transitive read-closure of the scope-defining surface** — i.e. no scope-defining loader has any declared read path (glob/include/import/reference) that would ingest `P` as authority-bearing config.

If both hold → eligible for Surface A (Green). Otherwise → treated as scope-defining → Surface B (escalate to grant).

**Where it runs.** At **Stage 04 (Approval)**, as part of zone assignment — after Stage 02 tentatively classifies, before Stage 05 writes. The write cannot execute until the test resolves.

**How the closure is computable.** The scope-defining surface must **declare its own read paths** (Declarative Sovereignty: config declares what it reads). The closure is then statically checkable.

**Fail-closed (non-negotiable).** Any undeclared or dynamic read path on the scope-defining surface **voids** the disjointness guarantee → the write is treated as scope-defining. Conformance condition: *a scope-defining loader with non-declared read paths disables in-scope autonomy for any path it could reach.* Safety defaults to escalation, never to autonomy.

**File-level separation (Gemini F2 — the primary hole, now closed).** The v1 `routing.config` mixed operational fields (`tier_preferences`, model selection) and authority-gating fields (`requires_approval`, escalation, zone keying) in **one file**, so path-level disjointness could not separate them — a write to `routing.config` touched both surfaces at once. 2.0 splits it into two files: `routing.operational` (in-scope) and `routing.authority` (scope-defining). The two surfaces are now **literally different files**, so the disjointness test distinguishes them by path alone. The mixed-surface hole is closed structurally, not by field-level inspection of a shared file. General principle: the scope-defining and in-scope surfaces must never share a file; co-resident authority and operational fields defeat path-level disjointness.

---

## 5. THE CONFIRMATION GATE (one-time · authenticated · sticky · specific · provenance-stamped)

The mechanism by which the operator issues a grant token, moving a specific scope-change from refused to executable.

**"Authenticated"** — agent-to-operator, **not** a browser/session credential. The grant's authenticity rests on something **outside the autonomous loop's control**: an operator-held signing key, a hardware-token tap, or confirmation in a control surface the agent has no write access to. The defining property: the agent can *verify* a grant but can never *produce* one. Injected/poisoned content claiming "the operator says widen scope" carries no signature and is rejected — this is the prompt-injection / confused-deputy defense at the authorization layer.

**"Sticky"** — the grant is **durable state**, recorded as a provenance-stamped entry in the scope-defining surface, persisting **across sessions and reboots until expiry or explicit operator revocation.** Not re-prompted per write. Stickiness is what converts per-action friction into progressive personalization: the operator corrects a mis-scope **once**; the grant stands until revoked.

**"Specific"** — a grant names a `(surface-region, write-class)` pair, e.g. *"agent may write skills of class X to workspace Y"* or *"agent may set zone = green for operation-class W."* **Not** a blanket "agent may write config" (over-broad). **Not** a single write-instance (that would re-prompt every write). The `(region, class)` granularity is the sweet spot: too narrow to over-apply, broad enough to stop re-asking.

**"One-time"** — refers to the **authentication event**, not the write count: one authenticated confirmation establishes a sticky grant covering many future in-class writes.

**Provenance-stamped (Invariant III).** Every grant and every write-under-grant carries `{ authorized_by, issued_at, grant_id, surface_region, write_class, expiry? }`. "Audit the config, the behavior is explained" survives the relaxation: the writer's hand is on the pen, but the pen leaves a signed trail.

---

## 6. INVARIANT CONSISTENCY & SURFACED TENSIONS

Per the Phase-2 constraint: where the design touches Invariant III/IV, state it; where tension exists, surface it — do not paper over.

**Invariant IV (no unilateral self-grant) — consistent.** The autonomous loop cannot write scope (capability-absent); scope writes require an operator-issued token. "Unilateral" is precisely the case the token's existence forecloses.

**Invariant III (provenance) — consistent and load-bearing.** Provenance is what *permits* the relaxation: agent-executed writes are auditable because they are signed to a grant. Remove provenance and the relaxation is unsafe.

**Declarative Sovereignty — consistent.** The scope-defining surface declares its members and read paths; grants are inspectable config.

### Tensions surfaced (not resolved away)
1. **The relaxation is only as strong as the authentication channel.** If an implementation cannot provide an unforgeable operator channel, "cannot" leaks. **Conformance condition:** no unforgeable channel → no inline scope writes; fall back to strict "human physically performs the write" (v1.0 behavior). The 2.0 capability is *conditional on* the channel.
2. **Skill promotion straddles the boundary** (§2). Pending-skill write (in-scope) vs activation (scope-defining). Mitigation: skills inert until a gated activation record references them; `zone` on a pending skill is a proposal. This must be explicit in the Phase-3 Skill Spec, or a confused-deputy reopens (presence-as-active).
3. **Confused-deputy residual** (§4). The scope-vs-category test is sound **only if** read paths are declared. Dynamic/undeclared reads void it → fail-closed. This is a real constraint on implementations, not a guarantee we can assert unconditionally.
4. **Standing grants are standing authority.** A never-revoked sticky grant is durable autonomous authority — acceptable (the operator chose it) but must be **revocable and auditable**; expiry recommended for high-sensitivity `(region, class)` pairs.

---

## 7. HOW THIS RESOLVES THE CONTRADICTION

| Canon | Reconciled reading under 2.0 |
|---|---|
| Side A — `vocab:249` "cannot at the OS level, not *will not* but *cannot*" | True of **Surface A**. Preserved verbatim in force, scoped to the autonomous loop. |
| Side B — `vocab:135/:477` "Stage-4-approved config mutations" | True of **Surface B**. The Stage-4 approval *is* the grant token; the config mutation is the agent executing it. |

The two were never actually opposed — they describe two surfaces. The drift was writing Side A as unconditional and enforcing it (category-keyed zones) against all writes. 2.0 names the surface each belongs to.

---

**Gate request:** operator reviews the razor line (§1) and the formal definitions (§2–§5). If the line between Surface A ("cannot," capability-absent) and Surface B ("can, under verified token") is surgical, greenlight **Phase 3 — schema redesign** (`zones-v2`, `routing-v2`, `confirmation-gate`, `provenance-stamp`). If not, this phase fails and is reworked before any schema is touched.
