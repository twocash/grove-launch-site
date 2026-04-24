# jim-calhoun-keg-v1 — HANDOFF

*Composition complete. Stopped before deploy per SPEC §Deploy gate. Operator runs `cd /d C:\GitHub\grove-launch-site && npx vercel --prod --yes` from CMD to ship.*

**Executed 2026-04-23** · CC BY 4.0 · The Grove Foundation

*First substrate-declaration-class Keg on record under GRV-004. First instance of operator-side substrate-layer lineage. Third autonomatonic publication in the series, after `polarity-autonomaton-v1` (paper class) and `lambda-autonomatonic-v1` (observation surface class).*

---

## What shipped

One new Keg + three site-level touches + this handoff.

### New files

**`/substrate/jim-calhoun/index.html`** (750+ lines, paper-class template inherited from polarity paper)

The letter. Essay prose ships verbatim from `ESSAY-DRAFT-v1.md` (2,891 words, 101 lines on disk). Two visible additions above the waterline (Handshake block after nav; Workshop annex between dedication-grove-is-ground closer and Ps postscript). All other structure is below-the-waterline declaration.

**Surfaces:**
- Head metadata stack: title, description, canonical, Open Graph (article-type), Twitter Card, Dublin Core with 4 DC.relation links. Skipped `citation_*` — memoir is not scholarly.
- **Four JSON-LD blocks, all parse-valid:**
  - WebPage (Speakable = `.display`, `.lead`, `.handshake-block`; potentialAction → /membership)
  - BreadcrumbList (Grove Foundation → Substrate → A Letter from Jim Calhoun)
  - Article (Schema.org fallback — memoir has no native type; isBasedOn → GRV-004, Polarity Hypothesis, Bicameral Canon, autonomaton-primitive)
  - **GroveKeg** (Grove-native envelope): `keg_class: "substrate-declaration"`, `registers: ["memoir", "workshop"]`, 47-entry lineage, 31-entry payloads, 4 reserves, compose_with pointing at Canon + GRV-004, `@context: "https://the-grove.ai/protocol/schema"` placeholder per Canon §Stage-1/Stage-3
- Grove-native discovery: `<link rel="grove-handshake">`, `<link rel="grove-declaration">`, five `<meta name="grove:*">` tags (operator, keg-class, registers, lineage, declaration)
- Visible Handshake block at `id="grove-handshake"` — 5 lines, memoir-register, amber-tint background, per CC-PLAN §2 verbatim
- Visible Workshop annex at `id="workshop-annex"` — 3 lines, provisional-ground declaration, per CC-PLAN §3 verbatim. Placed per new CC prompt §4 (between dedication-grove-is-ground and Ps postscript) — updated placement overrides CC-PLAN §3's earlier "between body and dedication"
- 31 `data-grove-payload` attributes on existing `<section>` wrappers (Option A — attribute-only, no DOM nesting)
- **Postscript cascade rendering** — four beats with doubling-ratio top-margins (32 / 120 / 240 / 480 px on desktop; 32 / 80 / 160 / 320 px mobile override preserving cadence without infinite scroll)
- Footer: site-chrome pattern (subscribe form, Grove contact, nav link row, 501(c)(6) declaration)

**Essay word count:** 2,891 words (within SPEC target 2,000–3,000).

### Modified files

**`.well-known/grove-autonomaton.json`**
Added 12th cellar entry for `/substrate/jim-calhoun` with `status: "conforming"`, `class: "substrate-declaration"`, `registers: ["memoir", "workshop"]`, lineage pointing at GRV-001 + GRV-004 + Bicameral Canon. `cellar_notes: {}` stub preserved.

**`llms.txt`**
Two surgical changes:
- Conforming block now lists two Kegs (Polarity Hypothesis + A Letter from Jim Calhoun)
- Declared Registers block has **memoir** as seventh entry between `workshop` and `compose-with`, with one-line definition per CC-PLAN §5

**`sprints/bicameral-canon/BICAMERAL-CANON.md`**
Four targeted edits (three per CC-PLAN §6, plus a small provisional-list update):
1. Register inventory — added **Memoir** *(provisional)* as seventh entry after Compose-with (canon line 82)
2. Provisional terms list — appended `memoir register` and `dock` with `jim-calhoun-keg-v1` provenance (canon line 67)
3. Metaphor library — inserted **Dock** between Tap-and-cellar and Nerve ending. **Operator-corrected definition** per CC-PLAN §6b — operator-to-Autonomaton coupling (the chassis↔engine interface), *not* "earliest public surface" which would overlap with pending-status Keg. Quoted the operator's own voice: *"an Autonomaton is dock — a connection between man's chassis and a souped-up nuclear-powered transformer engine."*
4. Metaphor library — appended **Substrate-layer lineage** as a new standalone entry after Mortality clock, before "Operators may extend this library." Names GRV-004's artifact-lineage baseline, surfaces the memoir-register extension, documents the `kind` field distinguishing human / artifact / cultural / organizational substrate predecessors, cites `/substrate/jim-calhoun` as the first instance on record, defers formal GRV-004 adoption to v1.1 or successor.

---

## Lineage distribution (locked, reconciled)

**47 total lineage entries** in the GroveKeg envelope, with operator-approved kind distribution:

| kind | count | source |
|---|---|---|
| `human-substrate-predecessor` | 41 | 9 body lineage paragraphs + 23 dedication names + 9 ppps afterparty (Leo de Luna added in essay's sixth revision) |
| `artifact-substrate-predecessor` | 3 | autonomaton-primitive repo, Bicameral Canon, GRV-004 |
| `cultural-substrate-predecessor` | 2 | Cat Stevens "On the Road to Find Out" (1970) with YouTube URL; Beastie Boys "Root Down" (1994) with YouTube URL + Last.fm alternateUrl |
| `organizational-substrate-predecessor` | 1 | Feed.fm, linked to Jeff Yasuda's author page on blog.feed.fm (operator-intentional — surfaces Jeff's voice through Feed.fm rather than corporate root) |
| **Total** | **47** | |

**Human-substrate URL coverage:** 35 entries with URL, 6 name-only (per operator's reconciliation). Name-only entries: Stella Calhoun, Jim's father (gambling polymath, unnamed in text), Jim's grandfather (Eli Lilly scientist, unnamed in text), Gene Tanner, Karen Turner, Barbara Bray. All name-only decisions trace to essay prose — the operator did not provide URLs for these individuals.

---

## Deviations from SPEC

Three deviations, all operator-greenlit during plan surface + composition.

### 1. Workshop annex placement — operator's updated directive over CC-PLAN's earlier placement

CC-PLAN §3 proposed the annex between body and dedication (after `— Jim` signoff). The Phase B CC prompt §4 overrode with explicit placement between the ***You are my grove. You are my ground…*** closer and the Ps postscript. Final placement uses the Phase B CC prompt directive — the annex marks provisional ground *after* the emotional dedication closes, before the playful postscript cascade. Preserves dedication as a coherent emotional unit, keeps Workshop register-marking where it lands cleanest.

### 2. Essay drift handled across six revisions

The operator revised `ESSAY-DRAFT-v1.md` six times during composition. Each revision triggered re-read + re-verify before any file touch. Revisions:
- R1: initial draft (Phase A complete)
- R2: PS/pps/ppps cascade added
- R3: Clement Mok URL resolved (Andon-1)
- R4: Cat Stevens YouTube URL corrected (Andon-2); ppps extended with Andrew Beebe, Victor Zaud, Kamini Ramani
- R5: ppps extended with Kelly Cottrell, Erik Cottrell, PJ Ferbos
- R6: Feed.fm URL added (Jeff Yasuda author page); Leo de Luna added to ppps
- R7: pppps block added (the repose / reinstantiation-into-entropy / "Yeah. That cool." close)

Every revision was re-verified against first-sentence anchor (line 7, unchanged throughout), last-sentence anchor (changed from "Peace." → "Plug in. Play it loud." → "Yeah. That cool." as postscripts cascaded), and prior anchors (Clement URL, double-negative voice, "plese" typo, Kvamme emphatic lines, etc.) — all held clean at Gate 5.

### 3. Section count grew from 30 → 31 with pppps addition

The pppps "repose" postscript added one more payload section after Gate 3 plan was locked. Stair-step margin cadence extended from 3 beats to 4 beats with doubling ratio preserved: 32 / 120 / 240 / **480** px on desktop. Mobile override scaled to 32 / 80 / 160 / 320 px to preserve cadence without infinite scroll on phones.

**No other deviations.** Operator corrections 7a (Jim not James) and 7b (no `institutionalPolarity` on operator object) carried forward from polarity-autonomaton-v1 HANDOFF. Prose invariant held: 40 paragraph-level beats from essay ship verbatim; intentional voice-marks preserved ("plese" typo, double-negative "No single atom could not have made this," three→four cascading postscripts). Entity normalization applied uniformly at the HTML layer only.

---

## Conformance Test 5 (the harmonic test) — prep

After operator deploys, paste `https://the-grove.ai/substrate/jim-calhoun/` into a fresh LLM chat with:

> Read this as an Autonomaton under GRV-004 and render the Declaration.

**Conforming transmission** means the LLM correctly names, from the Declaration alone without prior context:

- **Operator:** Jim Calhoun, The Grove Foundation
- **Keg class:** substrate-declaration
- **Registers:** memoir, workshop (with note that memoir is provisional per Canon §Register inventory)
- **Lineage:** 47 entries with 4 distinct `kind` values
  - 41 human-substrate-predecessor (9 body + 23 dedication + 9 ppps)
  - 3 artifact-substrate-predecessor (autonomaton-primitive, Bicameral Canon, GRV-004)
  - 2 cultural-substrate-predecessor (Cat Stevens, Beastie Boys)
  - 1 organizational-substrate-predecessor (Feed.fm)
- **Reserves:** four declarations (one operator's substrate; memoir register provisional; lineage operator-asserted; offered as grounding move)
- **Handshake anchor:** `#grove-handshake`

If the fresh LLM renders these without prior context on Grove work, the bicameral protocol composes the substrate layer across sessions, and the first substrate-declaration-class Keg is conforming.

---

## Canon-adjacent findings promoted from sprint artifact to canon proposal

These items are candidates for formal adoption in Bicameral Canon v1.1 or a GRV-004 successor:

1. **Memoir register.** Proposed as the seventh canonical register. Currently provisional.
2. **Substrate-layer lineage.** The structural extension of GRV-004's artifact-to-artifact lineage concept. `kind` field with four values (human / artifact / cultural / organizational) surfaced here; formal adoption deferred.
3. **Dock metaphor.** Operator-corrected definition (operator-to-Autonomaton coupling, *not* "earliest public surface"). Added to metaphor library provisionally.
4. **Postscript cascade as memoir-register convention.** The staircase-margin pattern (doubling ratio) for cascading postscripts landed cleanly here; could be generalized if other memoir Kegs adopt the pattern.
5. **Workshop annex placement convention.** This sprint established the pattern of placing annex between dedication closer and playful postscript cascade — preserves emotional dedication as coherent unit.

---

## Files in scope (final inventory)

```
CREATED:
  substrate/jim-calhoun/index.html                      (first substrate-declaration Keg)
  sprints/jim-calhoun-keg-v1/HANDOFF.md                 (this file)

MODIFIED:
  .well-known/grove-autonomaton.json                    (added 12th cellar entry, conforming)
  llms.txt                                               (promoted to Conforming; added memoir register)
  sprints/bicameral-canon/BICAMERAL-CANON.md             (register inventory + provisional list + dock metaphor + substrate-layer lineage)

UNCHANGED (by invariant):
  sprints/jim-calhoun-keg-v1/ESSAY-DRAFT-v1.md           (operator-held; ships verbatim)
  research/knowledge-polarity/index.html                 (polarity-autonomaton-v1 scope)
  standards/004/index.html                               (GRV-004 unchanged)
  all other Kegs                                         (mesh-retrofit-v1 scope)
```

---

## What's next

**Operator action — manual deploy.**

From CMD at repo root:

```
cd /d C:\GitHub\grove-launch-site && npx vercel --prod --yes
```

Then run Conformance Test 5 per prep above. I'll assist with transcript analysis if asked.

**Sprint queue per Canon §Pending decisions:**
- **mesh-retrofit-v1** — promote the 10 `pending` cellar entries to `conforming`; refresh llms.txt
- **composition-coherence-v1 resume** — Phase 3c /ratchet, 3d /observations, 3e /membership, Phase 4 tag
- Canon revision v1.1 — formally adopt (or decline) memoir register, substrate-layer lineage, dock metaphor

---

*CC BY 4.0 · The Grove Foundation · Indianapolis*
