# governance-write-protection-v1 — Phase 1 AUDIT (blast-radius manifest)

**Status:** Phase 1 complete — map only, **no edits made to any spec/HTML/JSON surface.**
**Method:** Full read of `standards/001/index.html` (840 lines), `standards/GRV-001.json` (v1.3), `docs/grove-canonical-vocabulary.md` (535 lines), `docs/ai-first-publication-standard.md`; cross-surface ripgrep sweep across `standards/002–004`, `alerts/`, `research/`, `registrar/`.
**Frame (operator directive):** This is **contradiction resolution, not new-model design.** The canonical vocabulary already contains both sides of the contradiction. This sprint reconciles them in favor of the already-canonical side.

---

## 0. The contradiction, located

The standard already asserts both of these, in canon, simultaneously:

| | Position | Where it lives (canon) |
|---|---|---|
| **Side A — the drift** | Red zone = the agent *cannot write*, full stop ("the code lacks the permissions at the operating-system level. Not *will not* but *cannot*") | `grove-canonical-vocabulary.md:249`; `:241` ("Red zone actions are refused by the architecture"); §VII category-keyed `zone_overrides` in `index.html:733` |
| **Side B — the fix** | Confirmed patterns move via **Stage-4-approved config mutations** — the agent *does* rewrite config, under approval | `grove-canonical-vocabulary.md:135` (The Ratchet); `:477` (Computational reflection); `index.html:601` Principle IV ("earns autonomy through demonstrated reliability"); `:577` Declarative Sovereignty ("change the config, the behavior changes") |

**Resolution thesis:** Side A's "cannot" is true only of the **agent's autonomous loop** (no operator in the loop). Side B's "Stage-4-approved config mutation" is the **operator-authenticated action surface**. The drift is that Side A's language was written as unconditional and then enforced (via category-keyed zones) against *all* writes. 2.0 scopes Side A to the autonomous loop and makes Side B explicit. **Phase 2's razor line (`SCOPE-BOUNDARY.md`) is exactly this A/B partition — and is the sprint's pass/fail gate.**

---

## 1. PRIMARY TARGET — `standards/001/index.html`

### 1a. §IV — Principle IV (Human-AI Symbiosis)
| Line(s) | Element | Change class |
|---|---|---|
| `597` | `id="human-ai-symbiosis"` anchor + `<dfn>` | **PRESERVE** anchor (cross-ref contract); keep dfn |
| `601` | Principle IV `principle-desc` — carries the v1.3 "agent *observes*" placeholder | **REWRITE** — replace "observes" with "writes, within scope, under authenticated grant, with provenance"; preserve "human-in-the-loop for all transitions that cross zone boundaries" and "can never unilaterally grant itself new authority" (the "unilaterally" is load-bearing — Side B) |
| `602` | `principle-test` — "does the system ever act beyond explicitly granted authority…" | **KEEP** (still true; arguably sharpened by 2.0) |
| `569` | §IV opener — DEX definition | **KEEP** |

### 1b. §V — Zone Model / Red Zone
| Line(s) | Element | Change class |
|---|---|---|
| `620` | `id="zone-model"` anchor | **PRESERVE** |
| `624` | §V intro — "respects human authority…through architectural constraint" | **KEEP / light sharpen** |
| `628–631` | Green Zone card | **LIGHT** — "operator defines the boundary" (`:631`) becomes the scope-keying anchor; consider naming scope |
| `633–636` | Yellow Zone card | **REVIEW** — likely unchanged |
| `638–642` | Red Zone card; `:641` description carries v1.3 append | **REWRITE** (`:641`) — preserve "system cannot promote itself out of the Red Zone" (Side A, scoped to autonomous loop); add the operator-authenticated inline-grant nuance (Side B). `<dfn>` `:639` preserved |
| `644` | "Zone boundaries are declarative—defined in configuration, not hardcoded" | **EXTEND** — canonical home to name scope-keyed (vs category-keyed) assignment |

### 1c. Stage 04 (Approval)
| Line(s) | Element | Change class |
|---|---|---|
| `523` | Pipeline Stage 04 `pipe-desc` — v1.3 "observes" placeholder | **REWRITE** — Stage 04 mechanics: confirmation gate, authenticated grant, provenance stamp |
| `518` | `id="pipeline"` anchor | **PRESERVE** |
| `527–529` | Cognitive Router subsection | **KEEP** |

### 1d. §VII — Reference Schemas (the largest single edit)
| Line(s) | Element | Change class |
|---|---|---|
| `675` | `id="reference-schemas"` anchor | **PRESERVE** |
| `679` | §VII intro — "illustrative, not exhaustive" | **KEEP** (grants latitude on schema content) |
| `727–746` | **Routing Configuration** block | **RE-KEY** — `zone_overrides` (`:733`) with category keys `finance.*`/`calendar.*`/`hiring.*` (`:734–736`) → operator-scope keying. **This is the canonical locus of Side-A drift in the HTML.** |
| `695–707` | Intent Classification — `"zone":"green"` (`:701`) | **EXTEND** — show scope-derived (not category-derived) zone assignment |
| `709–725` | Skill Specification — `"zone":"green"` (`:716`); `"version":"1.3"` (`:714`) | `:714` is a **SAMPLE — DO NOT TOUCH**; consider adding scope/provenance fields |
| `682–693` | Telemetry Entry — `provenance` (`:691`) | **LIGHT** — optionally illustrate write-provenance |
| (insert) | New blocks: **scope-keyed zones**, **confirmation-gate**, **provenance-stamp** | **ADD** in Phase 4 from Phase 3 schemas |

### 1e. Embedded structured data (JSON-LD / FAQ / meta) — confirmed in-scope
| Line(s) | Element | Change class |
|---|---|---|
| `68` | JSON-LD TechArticle `"version":"1.3"` | **BUMP → 2.0** |
| `70` | JSON-LD `"dateModified":"2026-06-18"` | **BUMP** (new date) |
| `191` | JSON-LD `hasPart` — Zone Model description ("never acts beyond its granted authority. Zone boundaries are declarative, not hardcoded") | **REVIEW/EXTEND** to reflect scope-keying |
| `193` | JSON-LD `hasPart` — §VII description | **REVIEW** (lists the four schemas; will gain new ones) |
| `250` | FAQPage — "The Red Zone is enforced structurally — the system cannot promote itself out of it" | **KEEP** (true — self-promotion still barred); optional nuance |
| `218`, `234` | FAQPage — zone enforcement / "Red is human-only" | **KEEP** |
| `19` | `article:modified_time` `2026-06-18` | **BUMP** |
| `37` | `DC.date` `2026-06-18` | **BUMP** |
| `13` | `og:description` — still markets "GRV-001 v1.2 adds…Terms of Art" | **OPERATOR DECISION** — bump version token / refresh for 2.0? |
| `412` | Hero byline `v1.3 · June 18, 2026` | **BUMP → 2.0** |
| `802` | Footer download-meta `v1.3 · June 18, 2026` | **BUMP → 2.0** |
| `42`, `184`, `165–183` | DC.subject / keywords / about arrays | **KEEP** (descriptive; optionally add new terms) |

### 1f. New subsections to insert (Phase 4)
- **Confused-Deputy Protection** — why the scope-vs-category test exists; the downstream-read attack. New anchor (e.g. `#confused-deputy-protection`), add to `hasPart`.
- **Provenance Stamping** — agent-write provenance and its tie to Invariant III. New anchor (e.g. `#provenance-stamping`), add to `hasPart`.
- Both need `<dfn>` on first mention of new terms + vocabulary entries (conformance item 4 + move #1).

---

## 2. PRIMARY TARGET — `standards/GRV-001.json` (manifest twin)

Lockstep with HTML per conformance item 8 / `schema_context`. **No routing/`zone_overrides` block exists in the manifest** — the §VII re-key is HTML-only; the manifest encodes zones by semantics.

| Field | Change class |
|---|---|
| `version` `"1.3"` | **BUMP → "2.0"** |
| `date_modified` | **BUMP** |
| `invariants[3].description` (human-ai-symbiosis) | **REWRITE** to match HTML Principle IV 2.0 |
| `zones[2].description` (red) | **REWRITE** to match HTML Red Zone 2.0 |
| `pipeline[3].description` (approval) | **REWRITE** to match HTML Stage 04 2.0 |
| `version_history` | **PREPEND** 2.0 entry (compatibility-break note) |
| (new top-level) | **DECISION (Phase 3/4):** add structural objects mirroring new §VII schemas (scope surface / confirmation gate / provenance stamp)? |
| `schema_context` | **REVIEW** (no zone-keying claim currently; likely KEEP) |

---

## 3. PRIMARY TARGET — `docs/grove-canonical-vocabulary.md` (patch + additions)

Confirmed a **patch** target, not just a Phase-5 ratification append.

| Line(s) | Entry | Change class |
|---|---|---|
| `249` | Zone model — "Red zone…lacks permissions at the OS level. Not *will not* but *cannot*" | **REVISE** — the canonical locus of Side-A drift in vocabulary. Scope "cannot" to the autonomous loop; preserve the structural-guarantee force |
| `241` | Stage 4 — "Red zone actions are refused by the architecture" | **REVISE** — add operator-authenticated-grant nuance |
| `135` | The Ratchet — "Stage-4-approved config mutations" | **KEEP / cite as Side-B anchor** (possibly strengthen) |
| `477` | Computational reflection — "rewrites its routing table through Stage-4-approved config mutations" | **KEEP / cite as Side-B anchor** |
| `395` | Human-AI Symbiosis — "can never unilaterally grant itself new authority" | **KEEP "unilaterally"**; optionally extend to mirror 2.0 card |
| `230` | Pipeline → Approval sub-entry — "Red = human-only" | **REVIEW** |
| (add) | New entries: **scope-defining surface**, **in-scope surface**, **confirmation gate**, **provenance stamp**, (poss.) **operator-authenticated action surface** | **ADD** — valence Grove canon; coinage record; dfn homes |

---

## 4. CROSS-REFERENCE BLAST RADIUS (Phase 6 flag — deferred, mapped here)

No file outside `standards/001/index.html` contains `zone_overrides` or the "cannot at the OS level" framing. Dispositions are recommendations for the Phase 6 gate.

| File | Line(s) | Nature of reference | Impact | Recommended disposition |
|---|---|---|---|---|
| `standards/003/grv-003-v1.0-learner-autonomaton.md` | `103,133,135–140,197,255` | Own **Zone model** section + **"ZONE ENFORCEMENT" architectural-guarantee** block; `zones.schema` = "where human approval is required" (`:133`); Red-zone **goals file** (`:197`); **advisor-composition** rule "goals file is never modified by an advisor node, only observed" (`:255`) | **HIGH** | Review in Phase 6. Note: `:255` is a *cross-node* constraint (one node not writing another's Red files) — **distinct** from the in-node drift; likely stays. Also **version ambiguity** — see §6 |
| `standards/002/index.html` | `41,158,166,170,171,233` | Descriptive only (DC.subject, keywords, `hasPart`: "zone model as sovereignty guarantee", "hierarchical zone nesting") | LOW | Likely no change |
| `standards/004/index.html` | `740` | Lineage description — "the zone model" in GRV-001 summary | LOW | No change |
| `alerts/telemetry-trap/index.html` | `349` | **Verbatim copy** of old Stage 04 card ("Zone-governed human checkpoint. Green = autonomous…Red = human-only.") | MED | Phase 6 decision: sync to 2.0 or leave as dated artifact |
| `alerts/telemetry-trap/index.html` | `366,379,546` | "Operator-defined zones"; "It cannot unilaterally grant itself new authority" (`:379` — already correct Side-B framing) | LOW | No change |
| `alerts/architecture-and-accountability/index.html` | `145,339+` | Zone Model mapped to SR 11-7 / FFIEC / OCC | LOW | No change |
| `alerts/architectural-gap/index.html` | `226` | Pointer to Standard 001 zone model | LOW | No change |
| `alerts/polarity-and-the-grove-protocol`, `alerts/sovereignty-is-all-you-need` | various | Passing zone mentions | LOW | No change |
| `registrar/index.html`, `registrar/keg.json` | `314`; `38,485` | Jidoka lineage — "Green/Yellow/Red…jidoka rendered for cognitive work" | LOW | No change (stays true) |
| `research/knowledge-polarity/index.html` | `762,764` | Zone mentions (descriptive) | LOW | No change |

---

## 5. ANCHOR-STABILITY CONTRACT (must NOT change — cross-ref contract per AI-First Pub Std §152)

`#hero` · `#problem` · `#governance` · `#lineage` · `#pattern` · `#pipeline` · `#cognitive-router` · `#tiers` · `#principles` · `#declarative-sovereignty` · `#capability-agnosticism` · `#provenance-as-infrastructure` · `#human-ai-symbiosis` · `#composability` · `#zone-model` · `#flywheel` · `#reference-schemas` · `#implications` · `#terms-of-art` · `#governance-by-architecture` · `#auditability-byproduct` · `#sovereign-computing` · `#vision`

New subsections (§1f) take **new, non-colliding** anchors and are **added** to JSON-LD `hasPart`.

---

## 6. OPEN QUESTIONS FOR THE PHASE-1 GATE

1. **GRV-003 version of record.** `standards/003/` holds `grv-003-v1.0…md` (tracked), `grv-003-v1.2…md` (untracked, in working tree), `grv-003-v0.9…docx` (untracked). Which is published at `/standards/003`, and is there an `index.html`? Phase 6 cross-ref edits depend on the answer. (Flag only — Phase 6.)
2. **`og:description` (`:13`).** Refresh the v1.2-era Terms-of-Art marketing copy for 2.0, or leave substance and bump only the version token? (Operator's call, as in v1.3.)
3. **Manifest structural objects.** Should `GRV-001.json` gain top-level objects mirroring the new §VII schemas (scope surface / confirmation gate / provenance stamp), or stay prose-parallel? (Resolve in Phase 3.)
4. **`dateModified` value** for 2.0 — today's date at integration, confirmed at Phase 5.

---

**Gate request:** operator reviews this manifest, confirms the blast radius is complete (esp. §4 dispositions and the §6 flags), and greenlights **Phase 2 — `SCOPE-BOUNDARY.md`** (the razor line; pass/fail gate).
