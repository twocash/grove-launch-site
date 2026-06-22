# grv001-red-learning-reconcile-v1

**State:** STAGED — not committed, not published. Two gates remain before publish.

## What this sprint ships

A prose-only drift fix to GRV-001 (v1.2 → v1.3). It surfaces the operator-promotion learning loop — operator promotes a pattern through the governed checkpoint, the system observes the sanctioned outcome, the Skill Flywheel turns — in the three passages that currently read as a dead-end lockout: Stage 04 (Approval), the §V Red Zone block, and Principle IV (Human-AI Symbiosis).

It is safe to publish today because it asserts nothing the standard does not already guarantee in §VI. It does **not** re-key zones to permission-scope, does **not** supersede the config-write guard, and makes **no** claim about an immutable-loop substrate that isn't shipped yet. That work is banked (see below).

## Files here

- `PATCH-SPEC.md` — the apply instructions for both surfaces (HTML + JSON twin). Surgical: three `description` fields, version metadata, one `version_history` entry. Nothing else.
- `GRV-001.v1.3.json` — complete drop-in manifest at v1.3. Faithful copy of the live v1.2 manifest with only the three descriptions patched, `version`/`date_modified` bumped, and the v1.3 `version_history` entry prepended. Use as a straight file-replace for the JSON surface.

## Apply targets — CONFIRM BEFORE COMMIT

The published surfaces (`/standards/001` HTML and `/standards/GRV-001.json`) appear to be generated server-side — no static `GRV-001.json` was found under `public/` or by that name in the tree. Point the apply at the actual source-of-truth module for the standard. The three `description` values and version metadata in `GRV-001.v1.3.json` are the canonical target text; replicate them into whatever module renders both surfaces, and keep the two surfaces identical per the `schema_context` "same standard" declaration.

## Gates before publish

1. **Gemini wording review** on the three passages — it touches published zone semantics (standing rule).
2. **Confirm the generated-source apply target** (above) so HTML + JSON move in lockstep.

## Banked, NOT in this sprint (gated)

Permission-scope re-keying ("zones key on operator scope, not action category") + supersession of "operator config cannot be written by the agent." Gates on: (a) `governance-write-protection-v1` shipped + verified, (b) Gemini pre-execution review. Also requires a §VII rewrite (reference schemas are category-keyed via `zone_overrides`) and a resolution of the config-defines-scope circularity. The standard does not lead the architecture.

### Design note — the config-write guard is a split, not a deletion (gated)

Surfaced while stress-testing the v1.3 prose. The kaizen tension is real: if the operator holds the permissions and directs the evolution, an Autonomaton that can *never* write any config cannot actually ratchet — every skill promotion needs a human to physically perform the write, and "the system improves with use" becomes partly aspirational. The flywheel's own step 5 ("confirmed skill handles future matches autonomously") presumes the skill was *written* somewhere the agent can act on.

But the guard "the agent can't write the operator's config" is **not deletable drift** — in its constitutional sense it is the only structural enforcement of Invariant IV. The circularity: config defines the zones → zones define what the agent may do → if the agent can write config it can rewrite the zones → it can expand its own Green Zone → it can unilaterally grant itself authority. "Agent can't write config" and "agent can't promote itself out of the Red Zone" are the **same guarantee viewed from two angles.**

Resolution is a split across **two axes**:
- **Axis 1 — does the write change scope?** *In-scope derived writes* (skill entries, refined patterns, promotion history, telemetry-derived rules, knowledge artifacts *within* already-granted scope) = exercising granted authority, not expanding it. Green, no per-write prompt. This is what kaizen needs; the current category-keyed guard wrongly bars it.
- **Axis 2 — for a scope-defining write (zones, routing, permission boundaries), was it operator-authorized?** *Without* a contemporaneous operator grant = unilateral self-grant, forbidden (Invariant IV core). *With* an explicit, authenticated, contemporaneous operator grant = the operator exercising sovereignty through the agent as tool — **permitted, executed inline, provenance-stamped.**

The load-bearing invariant is **not** "the agent never writes scope." It is **"no scope change without a live, authenticated, specific operator grant of *that* change."** Invariant IV forbids the agent acting *unilaterally* (without the operator), not the agent acting as the operator's hands once the operator has authorized the specific change. "Human-only" was an over-read; the correct reading is "human-*authorized*, agent-executable inline." This is the mechanism of progressive personalization: the operator corrects a mis-scope in-band, once, and the amended zone is sticky and audited — never re-litigated.

What makes scope-defining writes special is **authenticity of the grant, not the write itself**: the authorization must arrive through a channel the agent cannot forge and injected content cannot trigger (prompt-injection / confused-deputy defense). The correct shape is a **confirmation gate** (one-time, authenticated, sticky, provenance-stamped), not a **per-action block** (re-asks or hard-refuses every time — the drift the operator is hitting).

The test for any write is two questions: (1) "does it change scope?" — if no, Green within granted scope; (2) if yes, "is there a live authenticated operator grant of this specific change?" — if yes, execute inline and stamp it; if no, refuse. This is the banked "zones key on operator scope, not action category" re-keying, gated on `governance-write-protection-v1` — until something can mechanically distinguish in-scope from scope-defining writes *and* authenticate the grant, any relaxation is indistinguishable from self-promotion.

Constructive lever for that work: **Invariant III (Provenance as Infrastructure)** is the auditability lifeline. If every agent-performed write carries provenance (agent-wrote-this, under-this-approval, in-this-scope), then "audit the config, the behavior is explained" survives even with the agent's hand on the pen. Path to relaxing the guard = **scope-key the zones AND provenance-stamp every write**, together.

Why this stays out of v1.3: the patch's deliberate verb is "the agent *observes*." That observe-only framing is the seam where the unresolved guard is papered over — correct and conservative for a prose-only patch, because it asserts nothing the substrate can't yet enforce. Pulling the guard-split in here would be the Red Zone error in reverse: claiming a capability the architecture does not yet guarantee. "The agent observes" is a placeholder for an eventual "the agent writes, within scope, with provenance."

**Refinement from Gate #1 review (confused-deputy / downstream-read attack):** the scope-vs-category test ("does it change the agent's scope?") is conceptually sound but *not self-enforcing*. An ostensibly in-scope write — a markdown artifact — becomes a scope change if a later pipeline step parses that file as config. So the axis-1 classification cannot be trusted on write-intent alone; it must be mechanically protected (the write target and every downstream read path must be provably outside the scope-defining surface) before any relaxation ships. This is the load-bearing reason the re-keying is gated on `governance-write-protection-v1` rather than being a prose change.

### Gate #1 — Gemini wording review: PASSED (verdict: publish v1.3 as-is)

Adversarial review run via `GEMINI-REVIEW-BRIEF.md`. Findings:
- **Wording (Passages A/B/C):** assert nothing beyond §VI / Invariants I/III/IV; the "observes" verb is internally consistent and introduces no weaponizable ambiguity.
- **Drift location:** confirmed *not* in published GRV-001 text. Principle IV gates only boundary-crossing transitions; the Red Zone covers only high-stakes/irreversible/sensitive ops. An in-scope workspace write crosses neither. The refusal is compelled by the **banked config-write ruling over-generalized to any filesystem write via category-keyed `zone_overrides`** — a layer below the published standard.
- **Authorization vs execution:** Invariant IV forbids *unilateral* self-grant, not *human-executed* scope change. "Human-authorized, agent-executed inline, provenance-stamped" is the correct standard; a hard "agent cannot edit zones" rule is itself drift (over-read).
- **Authenticity gate:** a one-time, authenticated, sticky, provenance-stamped confirmation gate is the necessary mechanism; it shifts the heavy gate from blocking actions to authenticating consent.
- **Sequencing:** publish v1.3 as-is; the observe-only framing does not make the eventual correction harder; the scope-keyed relaxation must wait for `governance-write-protection-v1` + the §VII rewrite.

Origin of the finding (for the proper-fix sprint): operator surfaced this drift while QA-ing GRV-001 by attempting to use it to refactor the **Hermes Agent (Nous Research)**. The category-keyed guard made the spec incoherent in practice — an Autonomaton that cannot persist a research artifact into a granted workspace contradicts its own ratchet/local-knowledge thesis. These are treated as **critical coherence enhancements**, not nice-to-haves.
