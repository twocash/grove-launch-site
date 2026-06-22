# grv001-red-learning-reconcile-v1 — PATCH SPEC (CORRECTED)
## Safe prose drift fix · publishable v1.3 · verified against live /standards/001 (HTML) + /standards/GRV-001.json (v1.2)

**Operation:** surgical patch of three `description` fields on each surface. Preserve every other field, entry, and schema. No null arrays. No re-shaping. No new rulings, supersessions, scope/category re-keying, or §VII changes.

**Why safe today:** the positive half (operator promotes → system observes sanctioned outcome → Skill Flywheel turns) is already canonical in the §VI Flywheel. This patch only cross-references it into the three passages that read as dead-end lockout. It asserts nothing the standard does not already guarantee.

---

## JSON twin — patch exactly three fields, preserve all siblings

Do **not** replace the arrays. Locate each entry by index and overwrite only its `description` string. All other keys (`id`, `name`, `stage`, `gate`, `semantics`, `number`, `title`, `test`) remain untouched. A complete drop-in `GRV-001.v1.3.json` is included in this directory.

### `pipeline[3].description` (Stage 04 — Approval)
```
Zone-governed human checkpoint. Green = autonomous. Yellow = supervised. Red = human-only. The system never acts beyond its granted authority. When the operator approves a workflow or pattern at this checkpoint, the sanctioned outcome is recorded with a complete audit trail. The agent observes these normalized, repeatedly-approved intents — the primary input to the Skill Flywheel and the mechanism by which the system improves with use.
```

### `zones[2].description` (Red Zone)
```
The system does not act. It may provide context, but the decision and execution belong entirely to the human. High-stakes, irreversible, or ethically sensitive operations. The system cannot promote itself out of the Red Zone. The operator, however, can promote workflows and patterns into the system's autonomous repertoire through the governed approval path. When such a promotion is approved and recorded, the agent observes the sanctioned outcome — this operator-initiated promotion of normalized patterns is how the Autonomaton learns and how the Skill Flywheel turns.
```

### `invariants[3].description` (Principle IV — Human-AI Symbiosis)
```
AI generates possibilities. Humans apply judgment. The system requires human-in-the-loop for all transitions that cross zone boundaries. Sovereignty is structural: the system earns autonomy through demonstrated reliability and can never unilaterally grant itself new authority. That reliability is demonstrated when the operator repeatedly approves and promotes patterns through the governed checkpoints. The agent observes these sanctioned, provenance-recorded outcomes — the essential input to the Skill Flywheel and the means by which the system ratchets capability toward cheaper, more local tiers.
```

### Top-level metadata
- `version`: `"1.2"` → `"1.3"`
- `date_modified`: `"2026-04-21"` → `"2026-06-18"`
- `date_published`: unchanged

### `version_history` — prepend (newest-first; live schema is `{version, date, changes}` with `changes` as a string)
```json
{
  "version": "1.3",
  "date": "2026-06-18",
  "changes": "Prose clarification: surfaces the operator-promotion learning loop in Stage 04 (Approval), the Red Zone, and Principle IV (Human-AI Symbiosis) — the operator promotes patterns through the governed checkpoints, the system observes the sanctioned outcome, the Skill Flywheel turns. No change to zone classification, invariants, reference schemas, or any guard."
}
```

---

## HTML surface — same three passages, append-only

Each passage keeps its existing text verbatim and appends the new material. Description text matches the JSON values above sentence-for-sentence.

**1. Stage 04 — Approval.** Keep "Zone-governed human checkpoint. Green = autonomous. Yellow = supervised. Red = human-only. The system never acts beyond its granted authority." Append: "When the operator approves a workflow or pattern at this checkpoint, the sanctioned outcome is recorded with a complete audit trail. The agent observes these normalized, repeatedly-approved intents — the primary input to the Skill Flywheel and the mechanism by which the system improves with use."

**2. §V Red Zone.** Keep "The system does not act… out of the Red Zone." Append: "The operator, however, can promote workflows and patterns into the system's autonomous repertoire through the governed approval path. When such a promotion is approved and recorded, the agent observes the sanctioned outcome — this operator-initiated promotion of normalized patterns is how the Autonomaton learns and how the Skill Flywheel turns."

**3. Principle IV.** Keep "AI generates possibilities. Humans apply judgment… grant itself new authority." Append: "That reliability is demonstrated when the operator repeatedly approves and promotes patterns through the governed checkpoints. The agent observes these sanctioned, provenance-recorded outcomes — the essential input to the Skill Flywheel and the means by which the system ratchets capability toward cheaper, more local tiers."

### HTML version stamps
- Byline (top): `… · v1.2 · April 21, 2026` → `… · v1.3 · June 18, 2026`
- Footer: `GRV-001 · v1.2 · April 21, 2026 · CC BY 4.0` → `GRV-001 · v1.3 · June 18, 2026 · CC BY 4.0`
- `og:description`: leave substance as-is (it markets the v1.2 Terms of Art; this prose patch adds none). Operator's call whether to bump the version token in it.

---

## Defects corrected from the prior draft (for the record)
1. JSON twin used `[null, null, null, {…}]` padding — would have nulled live entries. Now a surgical field patch.
2. Bespoke `{stage, section, field, value}` objects discarded real entry schemas (`id`/`name`/`test`/`gate`/`semantics`). Restored.
3. `invariants[3].description` dropped the canonical opening ("AI generates possibilities. Humans apply judgment…"). Restored; fix is append-only.
4. Injected "Approval — " / "Human-Only — " prefixes into description fields (those tokens live in `name`/`semantics`). Removed.
5. `version_history` entry was invalid JSON (`type`/`review_required` nested inside the `changes` array) and wrong schema. Rewritten to live schema.
6. HTML Stage 04 prose said "recorded through the immutable loop" — banked-ruling vocabulary, not published-standard vocabulary. Changed to "audit trail" (Invariant III).

---

## Deliberately excluded (banked, gated)

Permission-scope re-keying ("zones key on scope, not action category"), supersession of "operator config cannot be written by the agent," and any claim that the loop/audit now enforces in-scope config writes. Those gate on (a) `governance-write-protection-v1` shipped + verified and (b) Gemini pre-execution review, and additionally require a §VII rewrite (reference schemas are category-keyed via `zone_overrides`) plus a resolution of the config-defines-scope circularity. None of that is in this sprint.

---

## Commit discipline
- One commit per surface; both land in a single publish so the surfaces are never divergent on the changed descriptions or version metadata (per `schema_context` "same standard").
- Gemini wording review on the three passages before publish (touches published zone semantics).
- No fields touched other than the three descriptions + version metadata + the new `version_history` entry.
