# CC Phase B Plan — jim-calhoun-keg-v1

*Captured 2026-04-23 from fresh CC window after reading Bicameral Canon, Sprint SPEC, polarity-autonomaton-v1 HANDOFF, and confirming repo state. Ground held. Plan surfaced before any file movement per working protocol.*

*This document is the canonical CC plan-of-record for Phase B execution. If CC is re-initialized in a fresh window, this plan carries forward as the approved approach (pending operator re-confirmation on any deltas).*

---

## Ground state

**Read in full by CC:**

- Bicameral Canon (held from session memory; confirmed on disk)
- `sprints/jim-calhoun-keg-v1/SPEC.md` (128 lines; two-phase structure confirmed)
- `sprints/polarity-autonomaton-v1/HANDOFF.md` (discipline pattern including operator corrections 7a + 7b)
- Polarity paper deployed structure (previously internalized)

**Confirmed on disk, read as part of plan work:**

- `sprints/lambda-autonomatonic-v1/SPEC.md`

**Route check:** `substrate/` does not exist in the repo. No collision. First tenant of a new Keg-class destination.

---

## Primary Andon — letter required before composition

The operator-authored memoir essay (Phase A artifact per SPEC line 49, `sprints/jim-calhoun-keg-v1/ESSAY-DRAFT-v1.md`) is absent from disk. CC prompt is explicit: *"Do not draft the letter. Do not edit the letter. Do not paraphrase the letter."*

CC is deliberately blind to `sprints/jim-calhoun-keg/FIRST-CAPTURE.md` — it is operator-held drafting source, not the final essay. Reading it would risk biasing proposed section boundaries or phrasing suggestions.

Waiting on one of:

- Operator saves `sprints/jim-calhoun-keg-v1/ESSAY-DRAFT-v1.md` to disk and confirms "ready for Phase B"
- Operator pastes the final essay directly into the CC session
- Operator explicitly instructs CC to read [FIRST-CAPTURE.md](http://FIRST-CAPTURE.md) (if that is in fact the final letter — operator call)

---

## Secondary Andon — lambda HANDOFF absent

`lambda-autonomatonic-v1` has no HANDOFF yet (pre-Phase-B like this sprint). Not a blocker — polarity HANDOFF is the canonical discipline reference. Lambda SPEC read for register-inventory and class-distinction precedent.

---

## Letter-independent pieces — ready for operator review

These draft components do not depend on essay content and can be locked pre-letter.

### 1. Route & template

- Path: `substrate/jim-calhoun/index.html` (new directory + new file; no collision)
- Template base: `research/knowledge-polarity/index.html` — paper-class single-column, scholarly typography via Grove design tokens (amber/bg/serif/mono). Memoir register reads well in that layout; lambda's observation-surface layout would read wrong for long-form essay.

### 2. Handshake block (5 lines, memoir-register)

> Handshake — visible to both chambers.
>
> Author: Jim Calhoun, The Grove Foundation. This Keg is a substrate declaration — one operator naming the humans, artifacts, and ground that compose his own substrate.
>
> Registers: memoir (primary; proposed as the seventh entry in the Bicameral Canon register inventory, provisional); workshop where provisional ground is marked.
>
> Lineage: GRV-004 (The Autonomaton Protocol); composes with the Bicameral Canon. The full Declaration — human-substrate predecessors, artifact-substrate predecessors, reserves — is in the envelope above this prose.
>
> You are invited to compose. Compose with this substrate if it composes; the canon holds without it if it does not.

### 3. Workshop annex (2-3 lines, minimal per CC prompt item 5)

> Workshop annex. This Keg is one operator's substrate declaration. It is not a template, not a requirement, and not a claim about how every grove gets composed. Memoir is a provisional seventh register in canon — proposed here, to be formally adopted (or declined) in Bicameral Canon v1.1. The lineage links that follow are operator-asserted, not Grove-verified; predecessors are named from the operator's memory of their actual contribution to his substrate, not from archival research.

Placement: between the essay body and the dedication paragraph.

### 4. Cellar entry — `.well-known/grove-autonomaton.json`

```json
{
  "path": "/substrate/jim-calhoun",
  "class": "substrate-declaration",
  "registers": ["memoir", "workshop"],
  "lineage": [
    "https://the-grove.ai/standards/001",
    "https://the-grove.ai/standards/004",
    "https://the-grove.ai/sprints/bicameral-canon/BICAMERAL-CANON.md"
  ],
  "status": "conforming"
}
```

Added to the cellar array; `cellar_notes: {}` stays reserved.

### 5. llms.txt updates

Two surgical changes:

- Promote `/substrate/jim-calhoun` into the Conforming block as the second conforming Keg (polarity paper is the first).
- Add `memoir` as a seventh entry in the Declared Registers block, placed after `workshop` and before `compose-with`:

> - memoir — exploratory, personal, attestation-shaped; declares: this is one operator's substrate, offered in first person, not a claim about how the pattern universalizes

### 6. Canon sync — three targeted edits to [BICAMERAL-CANON.md](http://BICAMERAL-CANON.md)

**(a) Register inventory (canon line 76–82):** add as seventh bullet after `compose-with`:

> - Memoir (provisional) — exploratory, personal, attestation-shaped; the operator declares their own substrate in first person. One operator's ground, not a template. Proposed in jim-calhoun-keg-v1; formal adoption deferred to Bicameral Canon v1.1.

Update the "Provisional terms still settling" line (canon line 67) to add memoir register to the provisional list.

**(b) Metaphor library — dock between** `Tap and cellar` **and** `Nerve ending` **(canon line 99–101):**

> Dock. The coupling between the operator's chassis and the Autonomaton's engine. The interface through which the operator drives the system; distinct from tap (operator-to-cellar) and nerve ending (Mesh-to-world). Surfaced in jim-calhoun-keg-v1 in the operator's own voice: *an Autonomaton is dock — a connection between man's chassis and a souped-up nuclear-powered transformer engine.* The earliest operator-side dock on record for Grove is the autonomaton-primitive repo.

*Operator-note: CC's original draft framed dock as "earliest public surface" — that overlaps with pending-status Keg. The operator's dictation specified dock as the operator-to-Autonomaton coupling; that is the structurally distinct meaning preserved above.*

**(c) Substrate-layer lineage — new paragraph, appended to pending-decisions section or placed after Mortality clock metaphor:**

> Substrate-layer lineage. GRV-004 as currently published treats lineage as artifact-to-artifact predecessor attribution — GRV-001 is the lineage of GRV-004, the polarity paper is the lineage of Ground the Circuit. A structural extension surfaced in jim-calhoun-keg-v1: an operator can declare their own substrate — the humans, artifacts, and moments that compose the ground they compose from — as a Keg in their Autonomaton's cellar. The declaration is first-person, memoir-register, with a kind field distinguishing human-substrate from artifact-substrate predecessors. Scope is deliberately limited: one operator's substrate, offered in first person, not a template. The first instance on record is /substrate/jim-calhoun. Formal adoption into GRV-004 deferred to v1.1 or successor.

---

## Letter-dependent pieces — deferred until essay lands

Cannot draft these without essay prose:

- **CC-prompt item 2** — echo-back of first and last sentence of the letter (proves verbatim content received).
- **CC-prompt item 3** — section structure + `data-grove-payload` mapping. SPEC notes natural boundaries around bolded named subjects in lineage paragraphs, registrar paragraph, dedication paragraph — but actual names, ordering, and count come from the essay.
- **CC-prompt item 6** — full GroveKeg JSON-LD envelope with `lineage[].kind` field distribution. Who the essay actually names determines the array. SPEC line 88 lists candidates (Susan Kare, Clement Mok, Randy Wigginton, Mark Kvamme, operator's grandfather) — but the essay is the authority.
- **CC-prompt item 8** — `data-grove-payload` attribute names on each section. Must match actual section headers in the letter.
- **Reserves refinement** — current SPEC draft reserve is good-enough as-is; may refine from essay's own language if it surfaces sharper framing.

---

## Outstanding asks to operator

1. **Provide the letter.** Save `sprints/jim-calhoun-keg-v1/ESSAY-DRAFT-v1.md` to disk, or paste into the CC session. CC will echo back first/last sentence when received.
2. **Review letter-independent pieces (1–6).** Flag any that need correction before the essay lands.
3. **FIRST-CAPTURE directive.** Stay blind to `sprints/jim-calhoun-keg/FIRST-CAPTURE.md` (default), or read it now as context for improving proposed section structure (with the invariant that CC will not paraphrase it into the Keg)?

---

## Operator decisions applied in this document

- **Dock metaphor definition corrected** back to operator's original dictation (operator-to-Autonomaton coupling), not CC's "earliest public surface" reframing. Operator's original voice is structurally distinct and preserved.
- **FIRST-CAPTURE directive: stay blind.** Final letter is authoritative; FIRST-CAPTURE would muddy CC's section-boundary read.

---

*Standing by for operator response. No files will move until letter lands and plan is approved.*

*CC BY 4.0 · The Grove Foundation · Indianapolis*
