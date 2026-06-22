# governance-write-protection-v1 — Phase 4 PATCHES (spec-text diffs)

**Status:** Phase 4 design artifact — diffs only. **No live files edited; Phase 5 applies these.**
**Editorial rule (operator directive):** the prose teaches what the schemas enforce. Where a schema makes something **unrepresentable**, the prose says *"unrepresentable"* — never "refused," "prevented," or "blocked." That word is the difference between a policy and a structural guarantee, and it is what carries "cannot, not won't" across the 2.0 line.
**Anchor-stability contract:** no existing anchor ID changes (AUDIT §5). Two new anchors added: `#confused-deputy-protection`, `#provenance-stamping`.
**Date:** integration date shown as `2026-06-21`; Phase 5 confirms the actual date.

Line numbers reference the current `standards/001/index.html` (v1.3) and `docs/grove-canonical-vocabulary.md` per the Phase 1 audit.

---

## A. Version + modified-date stamps — `index.html`

| Line | Before | After |
|---|---|---|
| `68` | `"version": "1.3",` | `"version": "2.0",` |
| `70` | `"dateModified": "2026-06-18",` | `"dateModified": "2026-06-21",` |
| `19` | `<meta property="article:modified_time" content="2026-06-18">` | `…content="2026-06-21">` |
| `37` | `<meta name="DC.date" content="2026-06-18">` | `…content="2026-06-21">` |
| `412` | `…&middot; v1.3 &middot; June 18, 2026</p>` | `…&middot; v2.0 &middot; June 21, 2026</p>` |
| `802` | `GRV-001 &middot; v1.3 &middot; June 18, 2026 &middot; CC BY 4.0` | `GRV-001 &middot; v2.0 &middot; June 21, 2026 &middot; CC BY 4.0` |

`article:published_time` (`18`), `citation_publication_date` (`49`), `date_published` — **unchanged** (publication date is 2026-03-01).

---

## B. og:description — full 2.0 refresh — `index.html:13` (per Phase 1 gate decision)

**Before:**
> Toward Self-Authoring Software Systems. Open architectural standard for AI governance. GRV-001 v1.2 adds canonical Terms of Art (cognitive platforming, judgment extraction, lien on thinking, cultivation architecture). CC BY 4.0, Grove Foundation.

**After:**
> Toward Self-Authoring Software Systems. Open architectural standard for AI governance. GRV-001 v2.0 re-keys the zone model to operator scope: a write that would expand the agent's own authority is structurally unrepresentable, not merely forbidden — yet the operator can authorize a specific scope change the agent executes inline, with provenance. Sovereignty as a structural guarantee. CC BY 4.0, Grove Foundation.

*(This is the first-reader channel — the AI summary. It carries "unrepresentable" into the trailer.)*

---

## C. Principle IV (Human-AI Symbiosis) — `index.html:601`

Anchor `#human-ai-symbiosis` (`597`) and `<dfn>` preserved. Test (`602`) preserved.

**Before:**
> AI generates possibilities. Humans apply judgment. The system requires human-in-the-loop for all transitions that cross zone boundaries. Sovereignty is structural: the system earns autonomy through demonstrated reliability and can never unilaterally grant itself new authority. That reliability is demonstrated when the operator repeatedly approves and promotes patterns through the governed checkpoints. The agent observes these sanctioned, provenance-recorded outcomes — the essential input to the Skill Flywheel and the means by which the system ratchets capability toward cheaper, more local tiers.

**After:**
> AI generates possibilities. Humans apply judgment. The system requires human-in-the-loop for every transition that crosses a zone boundary. Sovereignty is structural: the system earns autonomy through demonstrated reliability and can never unilaterally grant itself new authority — on the autonomous loop, a write that would expand the agent's own scope is unrepresentable, not merely refused. What the agent cannot do for itself, the operator can do for it: an authenticated, contemporaneous grant lets the agent execute one specific scope change inline, as the operator's hands, every such write provenance-stamped to the grant that authorized it. That authorized, recorded mutation is how reliability compounds into autonomy — the essential input to the Skill Flywheel and the means by which the system ratchets capability toward cheaper, more local tiers.

---

## D. Red Zone — `index.html:641`

Anchor target and `<dfn>` (`639`) preserved.

**Before:**
> The system does not act. It may provide context, but the decision and execution belong entirely to the human. High-stakes, irreversible, or ethically sensitive operations. The system cannot promote itself out of the Red Zone. The operator, however, can promote workflows and patterns into the system's autonomous repertoire through the governed approval path. When such a promotion is approved and recorded, the agent observes the sanctioned outcome — this operator-initiated promotion of normalized patterns is how the Autonomaton learns and how the Skill Flywheel turns.

**After:**
> The system does not act on its own authority. It may provide context, but the decision belongs entirely to the human. Two things live here: high-stakes, irreversible, or ethically sensitive operations; and every write to the <dfn>scope-defining surface</dfn> — the zones schema, the routing authority fields, permission grants, skill activations — because changing those would change what the system is allowed to do. The system cannot promote itself out of the Red Zone: on the autonomous loop, a self-scope-expanding write is unrepresentable, not merely blocked. The operator, however, can. An authenticated, contemporaneous grant opens one scope change for the agent to execute inline — as the operator's hands, provenance-stamped to the grant. That operator-authorized mutation, not any act of the system's own, is how the Autonomaton's repertoire grows and how the Skill Flywheel turns.

*(First `<dfn>` of "scope-defining surface" lands here — vocabulary entry in §L.)*

---

## E. Stage 04 (Approval) — `index.html:523`

**Before:**
> Zone-governed human checkpoint. Green = autonomous. Yellow = supervised. Red = human-only. The system never acts beyond its granted authority. When the operator approves a workflow or pattern at this checkpoint, the sanctioned outcome is recorded with a complete audit trail. The agent observes these normalized, repeatedly-approved intents — the primary input to the Skill Flywheel and the mechanism by which the system improves with use.

**After:**
> Zone-governed checkpoint where each write is classed by what it changes, not by its category. Green = in-scope, autonomous. Yellow = supervised. Red = scope-defining, human-only. The system never acts beyond its granted authority: a write that would expand the agent's own scope is unrepresentable on the autonomous loop. When the operator issues an authenticated grant here, the agent executes that one scope change inline and stamps it with provenance — the authorized mutation that feeds the Skill Flywheel and lets the system improve with use.

---

## F. Zone Model exposition — `index.html:644`

§V intro (`624`) and Green/Yellow cards (`631`,`636`) are compatible — **unchanged**. The declarative-boundary paragraph gains the scope-keying statement.

**Before:**
> Zone boundaries are declarative—defined in configuration, not hardcoded. A healthcare deployment and a content scheduling deployment use the same Zone Model with different boundaries. The architecture is identical. The governance is domain-specific.

**After:**
> Zone boundaries are declarative — defined in configuration, not hardcoded — and in 2.0 they key on operator scope, not action category: a write's zone is computed from what it changes (the scope-defining surface versus a granted in-scope workspace), never from which category of action it resembles. A healthcare deployment and a content-scheduling deployment use the same Zone Model with different boundaries. The architecture is identical. The governance is domain-specific.

---

## G. §VII Reference Schemas — `index.html:675–748` (the largest edit)

### G1. §VII intro — `index.html:679` (append one sentence)
After "…enough constraint that an architect can say 'I can audit this.'" append:
> The canonical machine-readable schemas — `zones-v2`, `routing-v2`, `confirmation-gate`, and `provenance-stamp` — are published at `/standards/001/schemas/`.

### G2. Routing Configuration block — `index.html:729–745` (REPLACE — removes the category-keyed drift)

**Before** (category-keyed `zone_overrides`):
```
{
  "routing": {
    "default_tier": "T2",
    "escalation_threshold": 0.6,
    "zone_overrides": {
      "finance.*": "red",
      "calendar.*": "green",
      "hiring.*": "yellow"
    },
    "tier_preferences": { … }
  }
}
```

**After** (scope-keyed; `zone_overrides` removed):
```
{
  "routing": {
    "schema_version": "2.0",
    "default_tier": "T2",
    "escalation_threshold": 0.6,
    "zone_source": { "derived_from": "zones.schema/surfaces", "category_keying": "forbidden" },
    "field_classification": {
      "authority_gating": ["escalation_threshold", "requires_approval"],
      "operational": ["default_tier", "tier_preferences"]
    },
    "tier_preferences": {
      "T0": { "max_latency_ms": 50 },
      "T1": { "model": "local-llama-3", "max_latency_ms": 500 },
      "T2": { "provider": "anthropic", "model": "claude-sonnet" },
      "T3": { "provider": "anthropic", "model": "claude-opus", "requires_approval": true }
    }
  }
}
```

### G3. Intent Classification — `index.html:697–706` (light: show scope-derived zone)
Add one field after `"zone": "green",` (`701`):
```
  "surface_class": "in_scope",
```
*(zone is derived from surface, not asserted by category.)*

### G4. Skill Specification — `index.html:711–724` (light: show lifecycle + activation grant)
`"version": "1.3"` (`714`) is a **sample skill version — DO NOT TOUCH**. After `"zone": "green",` (`716`) add:
```
  "lifecycle_state": "active",
  "activation_grant": "grant-20260218-008",
```
*(An active skill references the gated activation grant that promoted it. A pending skill would read `"lifecycle_state": "pending"` with no grant.)*

### G5. NEW schema-instance blocks — insert after the Routing Configuration block (before `</div>` at `746`)

**Zones Schema (scope-keyed):**
```
{
  "schema_version": "2.0",
  "keying": "operator-scope",
  "surfaces": {
    "scope_defining": {
      "writable_on": "operator_authenticated",
      "default_zone": "red",
      "members": [
        { "kind": "zones_schema", "path": "zones.schema" },
        { "kind": "routing_authority", "path": "routing.config#/escalation_threshold" },
        { "kind": "skill_activation", "path": "skills/*/activation.json" }
      ],
      "declared_read_paths": ["zones.schema", "routing.config", "skills/*/activation.json"]
    },
    "in_scope": {
      "writable_on": "autonomous_loop",
      "default_zone": "green",
      "members": [
        { "kind": "telemetry" }, { "kind": "knowledge_artifact" }, { "kind": "pending_skill" }
      ],
      "granted_workspaces": ["research/", "notes/", "skills/proposed/"]
    }
  },
  "skill_promotion": {
    "pending_write":  { "surface_class": "in_scope",       "writable_on": "autonomous_loop",       "zone_field_meaning": "proposal", "inert": true },
    "activation":     { "surface_class": "scope_defining", "writable_on": "operator_authenticated", "requires": "verified_grant_token" }
  }
}
```

**Confirmation Gate — Grant Token:**
```
{
  "schema_version": "2.0",
  "grant_id": "grant-20260621-007",
  "scope_target": { "surface_region": "skills/research/*", "write_class": "skill_activation" },
  "granted_zone": "green",
  "authorized_by": "jim@example.com",
  "issued_at": "2026-06-21T15:04:00Z",
  "authentication": { "method": "signing_key", "issuer_key_id": "op-key-3", "signature": "ed25519:9f3c…" },
  "sticky": { "across_sessions": true, "across_reboots": true, "persists_until": "revocation" },
  "revocation": { "revocable": true, "status": "active", "handle": "revoke/grant-20260621-007" }
}
```

**Provenance Stamp** (a scope-defining write, only expressible under a grant):
```
{
  "schema_version": "2.0",
  "actor": "agent",
  "surface": "operator_authenticated",
  "surface_class": "scope_defining",
  "write_target": "skills/research/skill-arxiv-scan-003/activation.json",
  "write_class": "skill_activation",
  "pipeline_stage": "execution",
  "timestamp": "2026-06-21T15:04:02Z",
  "grant_id": "grant-20260621-007",
  "authorized_by": "jim@example.com",
  "source_chain": ["tel-20260621-114", "cls-20260621-114"]
}
```
*(Each needs a `.schema-block` wrapper with a `.schema-label` matching the existing pattern: "Zones Schema (Scope-Keyed)", "Confirmation Gate — Grant Token", "Provenance Stamp".)*

---

## H. NEW subsection — Confused-Deputy Protection — insert in §V after `index.html:644`

New `.section-inner` with `<h3 class="subhead" id="confused-deputy-protection">`. Added to JSON-LD `hasPart` (§J).

> **Confused-Deputy Protection.** Keying zones to scope raises one hard question: what stops an in-scope write from becoming a scope change by the back door? If the agent writes a harmless-looking note that some later step then reads as configuration, an in-scope write has quietly rewritten authority. The architecture closes this structurally. The scope-defining surface must declare every path it reads; a write qualifies as in-scope only when its target is provably disjoint from the transitive read-closure of that surface, a test that runs at Stage 04 before any write executes. And it fails closed: any undeclared or dynamic read path on the scope-defining surface forfeits autonomy for everything it could reach. The system never resolves ambiguity in favor of its own authority.

---

## I. NEW subsection — Provenance Stamping — insert in §VII after the schema blocks (`index.html:747`)

New `<h3 class="subhead" id="provenance-stamping">`. Added to `hasPart` (§J). **This subsection is where the provenance-stamp conditional becomes prose — the sprint's strongest artifact.**

> **Provenance Stamping.** Every write the agent performs carries a <dfn>provenance stamp</dfn>: who or what wrote it, on which surface, under which grant, at which stage of the pipeline. This is Provenance as Infrastructure applied to the act of writing — and it carries the zone guarantee inside its own structure. A provenance stamp cannot describe a scope-defining write performed on the autonomous loop; the combination is unrepresentable, rejected before it can be recorded. "The agent cannot expand its own authority" is therefore not a rule the system promises to follow. It is a sentence the system cannot form. Cannot, not won't.

---

## J. Embedded structured data — `index.html` JSON-LD / FAQ

### J1. `hasPart` — Zone Model (`191`)
**Before:** "Green, Yellow, Red zones enforce authority boundaries at Stage 4 Approval. The system never acts beyond its granted authority. Zone boundaries are declarative, not hardcoded — same architecture, domain-specific governance."
**After:** "Green, Yellow, Red zones enforce authority boundaries at Stage 4 Approval, keyed to operator scope rather than action category. A write that would expand the agent's own scope is unrepresentable on the autonomous loop; only an authenticated operator grant opens it. Zone boundaries are declarative, not hardcoded — same architecture, domain-specific governance."

### J2. `hasPart` — §VII (`193`)
**Before:** "Illustrative JSON schemas for Telemetry Entry, Intent Classification, Skill Specification, and Routing Configuration. Enough structure to build; enough constraint to audit."
**After:** "Illustrative JSON schemas for Telemetry Entry, Intent Classification, Skill Specification, scope-keyed Routing Configuration, the Zones Schema, the Confirmation-Gate grant token, and the Provenance Stamp. Enough structure to build; enough constraint to audit."

### J3. `hasPart` — add two new WebPageElement entries (after `194`)
```
{"@type": "WebPageElement", "name": "V. Confused-Deputy Protection", "url": "https://the-grove.ai/standards/001#confused-deputy-protection", "description": "Why an in-scope write cannot become a scope change by the back door: the scope-defining surface declares its read paths; an in-scope write must be provably disjoint from their transitive read-closure; the Stage-04 test fails closed on any undeclared read path."},
{"@type": "WebPageElement", "name": "VII. Provenance Stamping", "url": "https://the-grove.ai/standards/001#provenance-stamping", "description": "Every agent write carries a provenance stamp. A scope-defining write performed on the autonomous loop is unrepresentable — rejected before it can be recorded. The guarantee is structural, not a promise: cannot, not won't."}
```

### J4. FAQPage crux (`250`) — light strengthen
**Before:** "…The Red Zone is enforced structurally — the system cannot promote itself out of it. Compliance teams audit the configuration…"
**After:** "…The Red Zone is enforced structurally — a self-scope-expanding write is unrepresentable on the autonomous loop, not merely blocked. Compliance teams audit the configuration…"

### J5. FAQPage — OPTIONAL new crux (operator decision)
Add a `mainEntity` question: *"Can the operator change what the agent is allowed to do?"* → Answer describing the authenticated, sticky, provenance-stamped confirmation gate. Recommended (directly answers the CTO question the lodestar names), but additive — flag for the gate.

---

## K. Manifest twin — `standards/GRV-001.json`

| Field | Change |
|---|---|
| `version` | `"1.3"` → `"2.0"` |
| `date_modified` | `"2026-06-18"` → `"2026-06-21"` |
| `pipeline[3].description` (approval) | → §E "After" text |
| `zones[2].description` (red) | → §D "After" text (strip the inline `<dfn>` markup; manifest is prose) |
| `invariants[3].description` (human-ai-symbiosis) | → §C "After" text |
| `version_history` | **PREPEND** entry below |

**`version_history` prepend:**
```
{"version": "2.0", "date": "2026-06-21", "changes": "Re-keys the zone model from action category to operator scope, resolving the v1 category-keyed zone_overrides drift. Partitions writes into a scope-defining surface (Red by default; on the autonomous loop a self-scope-expanding write is unrepresentable, not merely refused) and an in-scope surface (Green within a granted workspace). Adds the operator-authenticated confirmation gate — an authenticated, sticky, provenance-stamped grant that lets the agent execute one specific scope change inline. Makes skill promotion explicit: pending skills are in-scope; activation is scope-defining and gated. Adds Confused-Deputy Protection and Provenance Stamping. Compatibility break: category-keyed implementations must migrate."}
```

**DECISION (AUDIT §6 Q3) — add a `governance` structural object?** Recommended compact form, to keep the manifest faithful to the HTML's new model (operator confirms at gate):
```
"governance": {
  "keying": "operator-scope",
  "surfaces": {
    "scope_defining": { "writable_on": "operator_authenticated", "default_zone": "red" },
    "in_scope": { "writable_on": "autonomous_loop", "default_zone": "green" }
  },
  "confirmation_gate": { "authenticated": true, "sticky": true, "specific_to": "surface_region + write_class", "provenance_stamped": true },
  "provenance_stamp_required": true,
  "schemas": {
    "zones": "/standards/001/schemas/zones-v2.schema.json",
    "routing": "/standards/001/schemas/routing-v2.schema.json",
    "confirmation_gate": "/standards/001/schemas/confirmation-gate.schema.json",
    "provenance_stamp": "/standards/001/schemas/provenance-stamp.schema.json"
  }
}
```

---

## L. Vocabulary — `docs/grove-canonical-vocabulary.md` (patch + new entries)

### L1. Zone model entry — `:249` (the canonical Side-A drift locus)
**Before:** "**Red zone:** the system does not act; the code lacks the permissions at the operating-system level. Not *will not* but *cannot*."
**After:** "**Red zone:** the system does not act on its own authority; on the autonomous loop the code lacks the permissions at the operating-system level — a self-scope-expanding write is unrepresentable, *not will not but cannot*. The operator may open one specific scope change through an authenticated, provenance-stamped grant (see *Confirmation gate*), which the agent then executes as the operator's hands. The 'cannot' is preserved exactly — it is scoped to the autonomous loop, where it was always structurally true."

### L2. Stage 4 entry — `:241`
**Before:** "…Yellow zone actions require fresh approval. Red zone actions are refused by the architecture."
**After:** "…Yellow zone actions require fresh approval. Red zone actions are not available to the autonomous loop — a self-scope-expanding write is unrepresentable, not merely refused — and a scope change occurs only when the operator issues an authenticated grant the agent executes."

### L3. Human-AI Symbiosis entry — `:395` (append to existing definition)
After "…can never unilaterally grant itself new authority." append: "On the autonomous loop a self-scope-expanding write is unrepresentable; an authenticated operator grant lets the agent execute one specific scope change inline, provenance-stamped (GRV-001 2.0)."

### L4. KEEP / cite as Side-B anchors (no edit)
`:135` (The Ratchet — "Stage-4-approved config mutations") and `:477` (Computational reflection — same) are the canonical Side-B language. **Unchanged**; they are the resolution's home.

### L5. NEW entries — add to §I Coinages (valence: Grove canon · primary doc: GRV-001 §V/§VII · coined 2026-06-21)
- **Scope-defining surface** — the set of files/entries whose modification changes what the agent is authorized to do (zones schema, routing authority fields, permission grants, skill activations, grant tokens). Writable only on the operator-authenticated action surface, under a verified grant.
- **In-scope surface** — write targets within a granted workspace that do not change authority (telemetry, knowledge artifacts, pending skills, operational routing fields, pattern refinements). Writable on the autonomous loop.
- **The two surfaces (autonomous loop / operator-authenticated action surface)** — the partition that resolves "cannot vs. can." On the autonomous loop a scope-defining write is unrepresentable; the operator-authenticated surface exists only when a verified grant token is present.
- **Confirmation gate (grant token)** — the operator-issued, authenticated, sticky, specific, provenance-stamped authorization that opens one scope change for the agent to execute. The agent can request a grant but cannot issue or forge one.
- **Provenance stamp** — the metadata on every agent write (actor, surface, surface_class, grant, stage). It encodes the zone guarantee structurally: a scope-defining write stamped to the autonomous loop is unrepresentable.

*(Each new term gets a `<dfn>` at first mention in `index.html`: "scope-defining surface" at §D `:641`; "provenance stamp" at §I subsection. Maintenance discipline per vocabulary `:525`.)*

---

## Summary of surfaces touched
- `standards/001/index.html` — §A,B,C,D,E,F,G,H,I,J (version/meta, og, Principle IV, Red Zone, Stage 04, Zone Model, §VII rewrite + 3 new blocks, 2 new subsections, JSON-LD/FAQ).
- `standards/GRV-001.json` — §K.
- `docs/grove-canonical-vocabulary.md` — §L (2 revisions, 1 append, 5 new entries).
- New anchors: `#confused-deputy-protection`, `#provenance-stamping` (added to `hasPart`). No existing anchor changed.

**Gate request:** operator reviews every patch (line-level), and rules on the two flagged decisions — **J5** (optional new FAQ crux) and **K** (manifest `governance` object). On approval, greenlight **Phase 5 — integration** (apply to live files with backup + conformance validation).

---

# Addenda — Gemini rework (F1–F6)

Gemini returned a **conditional pass**: six findings, targeted rework, no architectural redesign (Phase 2 stands). Applied in order; F2 is the only schema-level change.

### F2 — Confused-Deputy on mixed-surface files (ACCEPTED · structural)
The v1 `routing.config` mixed operational fields (`tier_preferences`) and authority-gating fields (`requires_approval`) in one file, so path-level disjointness could not separate them. **Fix:** split `routing-v2` into two schemas — `routing-operational-v2.schema.json` (in-scope, Green) and `routing-authority-v2.schema.json` (scope-defining, Red). `requires_approval` moved to `approval_requirements` in the authority file; retry logic added to operational. Updated: `zones-v2` `declared_read_paths`/member (`routing.config` → `routing.authority`); `SCOPE-BOUNDARY.md` §2/§3/§4 (file-level disjointness; "the two surfaces must never share a file"); `index.html` §VII now shows two routing blocks; the Zones Schema example; `GRV-001.json` `governance.schemas` (split keys). `routing-v2.schema.json` removed.

### F1 — Bootstrap paradox (CLARIFYING PROSE)
The grant token enters through the operator-authenticated channel, never the agent's write pipeline. **Fix:** new **Confirmation Gate** subsection (`index.html` §V, `#confirmation-gate`): "The grant token is delivered through the operator-authenticated channel; it never enters the agent's write pipeline." + `hasPart` entry.

### F3 — Undisclosed compatibility break (CHANGELOG PATCH)
v1 configs fail validation under 2.0 (split files; `field_classification`/`zone_overrides` gone). **Fix:** (a) `GRV-001.json` `version_history` 2.0 entry extended with the split-file migration detail; (b) visible **Migration from v1** note in `index.html` §VII intro.

### F4 — Auth-channel fallback (SPEC PROSE, not just $comment)
**Fix:** fallback requirement added to **Principle IV** spec text ("Where no operator channel can be made unforgeable, the system authorizes no inline scope change at all and falls back to operator-performed writes — the relaxation is only ever as strong as the authentication of consent"), mirrored to `GRV-001.json` `invariants[3]`; cross-reference added from `confirmation-gate.schema.json` `$comment` to "GRV-001 Principle IV, §IV."

### F5 — Over-broad standing grants (CONFORMANCE NOTE, not a schema constraint)
Schema is NOT constrained (that would violate Declarative Sovereignty). **Fix:** SHOULD/MUST conformance note in the Confirmation Gate subsection: implementations SHOULD warn on grants exceeding a configurable maximum scope; blanket grants (`surface_region: "*"`) MUST be logged with an explicit `scope: blanket` provenance flag.

### F6 — "Unrepresentable" two-layer defense (CLARIFICATION)
**Fix:** two-layer clause added to **Provenance Stamping** ("the operating-system permissions make the action impossible; the schema makes the impossibility auditable"). Precision sweep across `index.html`, `GRV-001.json`, and the vocabulary: **"unrepresentable" now used only for the schema/record layer** (the provenance stamp rejecting a record); OS-capability statements use **"impossible / capability-absent."** The thesis sentence is preserved verbatim; "Cannot, not won't" now explicitly names the OS-level guarantee.
