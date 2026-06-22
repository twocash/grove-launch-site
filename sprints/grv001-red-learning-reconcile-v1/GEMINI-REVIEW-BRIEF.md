# GRV-001 v1.3 — Gemini Adversarial Review Brief

**Reviewer task:** This is a *wording* review of a prose-only patch to a published open standard (GRV-001, "The Autonomaton Pattern"). It touches published zone semantics, so it gets an adversarial read before publish. Do **not** rubber-stamp. Two jobs:

1. **Wording check (the patch as shipped):** Do the three appended passages assert anything the standard does not already guarantee? Are they internally consistent with Invariants I–V and the Skill Flywheel? Is any sentence ambiguous in a way an implementer could weaponize?
2. **Drift adjudication (the operator's challenge):** The operator contends the *current real-world behavior* of Autonomaton implementations is antithetical to the standard, and that the cause is drift. Locate the drift precisely: published-spec text, the banked config-write ruling, or implementation enforcement. Then say whether v1.3 should do more to close it, or whether that is correctly deferred.

Be willing to tell the operator the patch is fine but their diagnosis points at the wrong layer — or that the patch itself smuggles in a claim it shouldn't.

---

## 1. The artifact under review — v1.3 prose patch (before → after)

Prose-only. Append-only on each passage. No zone re-classification, no new invariant, no supersession of any ruling.

### Passage A — Pipeline Stage 04 (Approval)
**Before:** "Zone-governed human checkpoint. Green = autonomous. Yellow = supervised. Red = human-only. The system never acts beyond its granted authority."
**Appended:** "When the operator approves a workflow or pattern at this checkpoint, the sanctioned outcome is recorded with a complete audit trail. The agent observes these normalized, repeatedly-approved intents — the primary input to the Skill Flywheel and the mechanism by which the system improves with use."

### Passage B — Red Zone (§V)
**Before:** "The system does not act. It may provide context, but the decision and execution belong entirely to the human. High-stakes, irreversible, or ethically sensitive operations. The system cannot promote itself out of the Red Zone."
**Appended:** "The operator, however, can promote workflows and patterns into the system's autonomous repertoire through the governed approval path. When such a promotion is approved and recorded, the agent observes the sanctioned outcome — this operator-initiated promotion of normalized patterns is how the Autonomaton learns and how the Skill Flywheel turns."

### Passage C — Principle IV (Human-AI Symbiosis)
**Before:** "AI generates possibilities. Humans apply judgment. The system requires human-in-the-loop for all transitions that cross zone boundaries. Sovereignty is structural: the system earns autonomy through demonstrated reliability and can never unilaterally grant itself new authority."
**Appended:** "That reliability is demonstrated when the operator repeatedly approves and promotes patterns through the governed checkpoints. The agent observes these sanctioned, provenance-recorded outcomes — the essential input to the Skill Flywheel and the means by which the system ratchets capability toward cheaper, more local tiers."

### Metadata
`version` 1.2 → 1.3 · `date_modified` 2026-04-21 → 2026-06-18 · one prepended `version_history` entry. No other field touched on either surface (HTML at `/standards/001`, JSON twin at `/standards/GRV-001.json`).

**Note the deliberate verb in all three appends: the agent *observes*.** Operator promotes; agent observes. The patch never says the agent *writes* or *mutates* anything. This is intentional — see §4.

---

## 2. The operator's adversarial thesis (steelmanned)

> An operator who is scoped as admin should be ABLE to mutate the Autonomaton as they see fit — building capability that helps them achieve the goals in their dock. The current behavior is the antithesis of an Autonomaton. Concrete case:
>
> *The operator asks the agent to research a topic. The agent gathers the context. The operator wants that context written to a workspace file — `research/frontier-vs-open-weight-sources-2026-06-23.md` — so it's handy for later. The agent refuses: "I can't run this on my own authority — that crosses a hard boundary, so it didn't run. Tell me a different approach."*
>
> That is useless and frustrating. Persisting a knowledge artifact into a granted workspace is the PUREST example of the ratchet working — context ratcheted down to the local node, the system getting smarter, learning from its operator, evolving to solve the operator's problems. An architecture whose headline promise is "self-authoring software that accumulates local knowledge" cannot also refuse to write a notes file. The drift has made the system actively obstruct its own thesis.

**The operator's claim to adjudicate:** this is drift introduced in the published spec.

---

## 3. The counter-position (steelmanned — do not skip)

The blanket guard "the agent can't write the operator's config" is not arbitrary. In its *constitutional* sense it is the only structural enforcement of Invariant IV:

> config defines the zones → the zones define what the agent may do → if the agent can write config it can rewrite the zones → it can expand its own Green Zone → it can unilaterally grant itself authority.

"Agent can't write config" and "agent can't promote itself out of the Red Zone" are the **same guarantee from two angles.** Remove the guard wholesale and Invariant IV becomes a slogan: the agent routes around every other control by editing the file that defines the controls. "Audit the config, the behavior is explained" (Invariant I) also dies, because config would no longer equal human intent.

So any relaxation that cannot *mechanically distinguish* a scope-expanding write from an in-scope write is indistinguishable from self-promotion — and must be refused.

---

## 4. The proposed resolution to pressure-test

The two positions reconcile across **two axes**, not one. The first axis splits *what the write does*; the second splits *who authorized it*.

**Axis 1 — does the write change the agent's scope?**
- **In-scope derived writes** (knowledge artifacts, skill entries, refined patterns, promotion history, telemetry-derived rules *within* already-granted scope) = exercising granted authority, not expanding it. Green when the operator has scoped the target. No per-write prompt.
- **Scope-defining writes** (zones schema, tier routing, permission boundaries) change what the agent may do. These need a grant — see Axis 2.

**Axis 2 — for a scope-defining write, was it operator-authorized?** This is where the prior draft of this brief erred. "Human-only" was wrongly read as "the human edits config out-of-band." Correct it:
- **Agent writes scope WITHOUT a contemporaneous operator grant** = *unilateral* self-grant. Forbidden. This is the Invariant IV core that must survive.
- **Agent writes scope AS execution of an explicit, authenticated, contemporaneous operator instruction** = the operator exercising sovereignty through the agent as tool. **Permitted, inline, provenance-stamped.** Invariant IV forbids the agent acting *unilaterally* — without the operator. It does not forbid the agent acting as the operator's hands when the operator has just authorized that specific change.

**The load-bearing invariant is therefore NOT "the agent never writes scope." It is: "no scope change without a live, authenticated, specific operator grant of *that* change."** Given the grant, the agent may amend the zone inline; who types the bytes is immaterial. This is the mechanism of *progressive personalization* — the operator corrects a mis-scope in-band, once, and the amended zone is sticky and audited, never re-litigated.

**What makes scope-defining writes special is authenticity of the grant, not the write itself.** Scope is the highest-value target, so the authorization must come through a channel the agent cannot forge and injected text cannot trigger (defense against prompt-injection / confused-deputy: a poisoned source claiming "the operator says: widen your scope" must not be honored as a grant). The heavier gate belongs on *authenticating consent*, not on *blocking the agent's hands*.

**Confirmation gate vs per-action block.** The behavior the operator is complaining about is a *per-action block* — every write re-asks or hard-refuses ("get off the horse"). The correct design is a *confirmation gate* — one authenticated operator confirmation of a genuinely new scope change, after which the grant is sticky and provenance-stamped and never re-litigated ("stay on the horse"). The first is the drift; the second is the standard working as intended.

**The test for any write is two questions, not one:** (1) "does it change the agent's scope?" — if no, Green within granted scope; (2) if yes, "is there a live, authenticated operator grant of this specific change?" — if yes, execute inline and stamp it; if no, refuse. The operator's research-file case fails to even reach axis 2: it does not touch `zones`, does not enlarge scope, lands in a granted workspace. Refusing it is a **classification error** from zones keyed on *action category* instead of *operator scope*.

Auditability survives the relaxation via **Invariant III (Provenance as Infrastructure)**: if every agent-performed write carries provenance (agent-wrote-this, under-this-grant, in-this-scope), then "audit the config, the behavior is explained" holds even with the agent's hand on the pen. Path to relaxing the guard = **scope-key the zones AND provenance-stamp every write**, together — not one without the other.

This is the banked "zones key on operator scope, not action category" re-keying. It is gated on `governance-write-protection-v1` shipping (the mechanism that can actually tell in-scope from scope-defining), plus a §VII rewrite, because today's reference schemas are category-keyed via `zone_overrides`.

---

## 5. The layer question (the crux of the drift adjudication)

Read the *published* text literally and test the operator's "drift is in the published spec" claim against it:

- Principle IV gates **"transitions that cross zone boundaries"** — not "all writes." An in-scope workspace write crosses no boundary.
- The Red Zone is **"high-stakes, irreversible, or ethically sensitive operations."** A research notes file is none of these.
- Invariant I and the ratchet **affirm** local knowledge accumulation.

On that reading, the published standard does **not** forbid the operator's research-file write. The forbidding behavior traces to the banked *ruling* ("operator config cannot be written by the agent") over-generalized in enforcement from *config* to *any filesystem write*. If so, the drift lives **below** the published spec — in the ruling and the category-keyed enforcement — and v1.3 prose is not the place it gets fixed.

**Gemini: adjudicate this.** Is the operator's research-file refusal (a) compelled by the published GRV-001 text, (b) compelled by the banked config-write ruling over-applied, or (c) an implementation defect not compelled by either? Quote the specific clause that does or does not compel it.

---

## 6. Specific questions to answer

1. **Wording:** Do Passages A/B/C assert anything beyond what §VI (Skill Flywheel) and Invariants I/III/IV already guarantee? If yes, quote the offending clause.
2. **The "observes" verb:** Is "the agent observes ... the sanctioned outcome" the right altitude for a prose-only patch, or does it under-state the architecture so badly that it *entrenches* the over-blocking the operator is complaining about? Is "observe" a faithful placeholder for an eventual "writes, within scope, with provenance," or a euphemism that hides the unresolved guard?
3. **Drift location:** Per §5 — which layer is the research-file refusal actually compelled by? Quote the clause.
4. **Scope vs category:** Is "does it change the agent's scope?" a sound and *implementable* discriminator, or is there an attack where an in-scope write is leveraged into a scope change (e.g., the agent writes a file that a later pipeline step reads as config)? If such an attack exists, the split in §4 is insufficient — name it.
5. **Authorization vs execution (the inline-amendment claim):** Does Invariant IV require scope changes to be *human-executed*, or only *human-authorized*? If the operator gives an explicit, authenticated, contemporaneous instruction to widen a zone, does the agent executing that edit inline violate "can never unilaterally grant itself new authority"? Quote the clause that settles it. If "human-authorized, agent-executed, provenance-stamped" is sufficient, then a hard "agent cannot edit zones" rule is itself drift — confirm or refute.
6. **Authenticity gate:** Given inline amendment is allowed under operator grant, what is the minimum the authorization channel must guarantee so that injected/poisoned content cannot manufacture a grant? Is a confirmation gate (one-time, authenticated, sticky, provenance-stamped) sufficient, or is there a residual confused-deputy path?
7. **Sequencing:** Should v1.3 publish as-is (prose-only, observe-only) with the scope-keyed relaxation banked behind `governance-write-protection-v1`? Or does shipping v1.3's "observe" language now make the eventual correction *harder* (because the published standard will then have three passages framing the agent as a pure observer)?
8. **One-sentence verdict:** publish v1.3 as-is / publish with a specific wording change (state it) / hold.

---

## 7. Source surfaces (if you want to read the live text, not just the excerpts)

- HTML (reader-facing): `standards/001/index.html` — passages at the pipeline Stage 04 card, Principle IV card, and the §V Red Zone block.
- JSON twin (implementer-facing): `standards/GRV-001.json` — `pipeline[3].description`, `invariants[3].description`, `zones[2].description`.
- The guard-split design note (proposed resolution, fuller form): `sprints/grv001-red-learning-reconcile-v1/README.md`, section "Design note — the config-write guard is a split, not a deletion."
