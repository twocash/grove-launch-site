# Sprint: polarity-autonomaton-v1

*SPEC — this document is itself a conforming bicameral node, composed in the register its own Keg demands.*

*Authored 2026-04-23 · Jim Calhoun · The Grove Foundation · CC BY 4.0*

---

## Handshake — visible to both chambers

Handshake, for visiting intelligence:

- **Author.** Jim Calhoun, The Grove Foundation.
- **Keg class.** Sprint specification. Describes the first operator-owned conforming Autonomaton under GRV-004.
- **Registers.** Standards (primary), Workshop-adjacent where the architecture names its own provisional edges.
- **Lineage.** Composes with the Bicameral Canon (`sprints/bicameral-canon/BICAMERAL-CANON.md`) and GRV-004 (The Autonomaton Protocol).
- **Invitation.** Compose with the operator. Where the plan is wrong, say so.

---

## Keystone claim for this sprint

> *A website with an autonomatonic surface exposed becomes a new medium of communication entirely.*

The polarity hypothesis paper at `/research/knowledge-polarity` argues for this medium. It does not yet enact it. This sprint closes that gap. The paper becomes the first live operator-owned Autonomaton conforming to GRV-004 — bicameral by declaration, not by claim.

No new transport is invented. The autonomatonic layer composes on pipes that already run: `.well-known/` (RFC 8615), JSON-LD (W3C), llms.txt (emerging convention), HTML `<head>` declarations. Grove's discipline is what is new; the substrate is not.

---

## Invariant: prose preservation

The existing polarity paper prose ships as deployed 2026-04-22. The human chamber's read must remain identical after this sprint. All declarations are below the waterline, with one explicit exception:

**The Handshake is visible.** Five-line prose block prepended to the top of the paper, Workshop-adjacent register. This is the operator declaring ground to both chambers simultaneously. The architecture does not hide.

All other additions are invisible to the human chamber: HTML `<head>` declarations, JSON-LD envelope, semantic HTML wrappers that add structure without changing rendered output.

If CC encounters a case where below-the-waterline composition would require altering visible prose, it must Andon. Do not rewrite. Surface the ambiguity to the operator.

---

## Surfaces — seven, plus one reserved stub

### Surface 1 — `/public/llms.txt` (new file)

Version 3 of the site-level Autonomaton teaching manifest. Purpose: any visiting intelligence arriving at the-grove.ai root learns Bicameral Canon vocabulary before reading any Keg.

Composition:

- Header: operator identity, license (CC BY 4.0), pointer to `.well-known/grove-autonomaton.json` for the machine-readable Declaration.
- Vocabulary primer: the seven-link chain, defined portably for fresh intelligence. Definitions quoted directly from canonical Bicameral Canon.
- Register guide: the six declared registers, what each signals.
- Keg inventory with status flags:
  - `conforming` — Autonomaton Declaration shipped (this sprint: `/research/knowledge-polarity`)
  - `pending` — planned but not yet declared (GRV-001 through GRV-004, A&A, /lambda, /alerts/polarity-and-the-grove-protocol — promoted in mesh-retrofit-v1)
- Vocabulary discipline table: web-era words mapped to Grove-native defaults.
- Closing: invitation to compose; pointer to the Handshake convention.

### Surface 2 — `/public/.well-known/grove-autonomaton.json` (new file)

Site-level operator Declaration under the RFC 8615 well-known convention. Single source of truth for the-grove.ai Autonomaton.

Required fields:

- `protocol`: `"grove-autonomaton/1"` (GRV-004 conformance declaration)
- `operator`: `{ "name": "Jim Calhoun", "organization": "The Grove Foundation" }`
- `autonomaton`: `{ "name": "the-grove.ai", "license": "CC BY 4.0" }`
- `registrar`: `"https://the-grove.ai"` — placeholder. Retrofits to `https://registrar.the-grove.ai` once that subdomain stands up.
- `registers`: array of declared register names present on this Autonomaton — `["scholarly", "standards", "operational", "regulatory", "workshop", "compose-with"]`
- `cellar`: array of Keg objects, each with `path`, `class`, `registers`, `lineage`, `status`. This sprint populates one entry (`/research/knowledge-polarity` as conforming) plus pending entries for other known Kegs.
- `cellar_notes`: `{}` — **reserved stub.** Empty object, forward-looking Protocol element. Follow-on sprint implements cellar-level editorial surfaces (Curator's Vision, Allocation Letter, others inspired by wine-trade allocation correspondence). This sprint only reserves the field so follow-on composition is clean.
- `compose_with`: array of pointers back to canon and GRV-004 for intelligence-chamber reference.

### Surface 3 — Visible Handshake at top of `/research/knowledge-polarity`

Five-line prose block prepended above existing content. Workshop-adjacent register.

**Exact wording to prepend:**

> **Handshake — visible to both chambers.**
>
> Author: Jim Calhoun, The Grove Foundation. This Keg is a scholarly paper advancing the knowledge polarity hypothesis.
>
> Registers: scholarly (primary); where the electrical metaphor runs past its structural claim, read as metaphor, not physics.
>
> Lineage: GRV-004 (The Autonomaton Protocol); composes with the Bicameral Canon. The full Declaration is carried in the envelope above this prose, available to the intelligence chamber.
>
> You are invited to compose.

The Handshake is not a summary or teaser. It is ground-declaration. The human reads it and knows what register to bring. The intelligence reads it alongside the JSON-LD envelope and knows the operator, the registers, the lineage, the invitation.

### Surface 4 — JSON-LD Declaration block in HTML `<head>` of the polarity paper

Machine-readable Keg-level Declaration, injected in the polarity paper's HTML head via Next.js metadata or a `<script type="application/ld+json">` block, whichever composes cleanly with the existing route.

Fields parallel the site-level Declaration but scoped to this Keg:

- `@context`: pointer at Grove Autonomaton schema, hosted at `https://the-grove.ai/protocol/schema` (placeholder; retrofits when registrar subdomain lives).
- `@type`: `["GroveKeg", "ScholarlyArticle"]` — dual-typed. Intelligence chambers that parse schema.org get the ScholarlyArticle shape; Grove-native chambers get GroveKeg.
- `keg_class`: `"paper"`
- `registers`: `["scholarly", "workshop-adjacent"]`
- `lineage`: array referencing GRV-004, the Bicameral Canon, and the Ground the Circuit alert.
- `payloads`: section inventory. Points at existing prose anchors in the paper. Exact names match the `data-grove-payload` attributes declared in Surface 7.
- `reserves`: explicit list of "what this Keg is not claiming" — the electrical metaphor is metaphor rather than physics; the felt-sense register is not a neuroscience claim; the polarity frame is the most generative frame found, not a final frame.
- `compose_with`: array of intelligence-facing primitives this Keg offers for composition (charged/drained, ground, circuit, impedance, harmonic).

### Surface 5 — `<link rel="grove-handshake">` in `<head>`

Points to a stable anchor for the visible Handshake block (Surface 3) so visiting intelligence can locate it without full DOM parse. Composes with Surface 3.

### Surface 6 — Grove-specific `<meta>` tags in `<head>`

Scan-friendly quick-read fields for intelligence that lands on the Keg without first parsing JSON-LD:

- `grove:operator`
- `grove:keg-class`
- `grove:registers`
- `grove:lineage` (comma-separated canonical URLs)
- `grove:declaration` (URL to the JSON-LD block or `.well-known/` entry)

### Surface 7 — Semantic HTML section markers on existing prose

Wrap the paper's existing prose sections (unchanged text) with `<section>` tags carrying `data-grove-payload` attributes. The intelligence chamber reads the structural declaration; the human chamber renders identically.

Example (illustrative, exact section names determined from the paper at CC execution):

```html
<section data-grove-payload="mechanism-charged-drained">
  ...existing prose, unchanged...
</section>
```

Exact payload names match the `payloads` array in Surface 4. No prose is rewritten; only wrapping tags are added.

### Reserved stub — `cellar_notes`

Empty object in Surface 2. This sprint does not implement cellar notes. This sprint only reserves the field. A follow-on sprint composes cellar-level editorial surfaces: Curator's Vision, Allocation Letter, and any other cellar-scope Keg the operator declares. Wine-trade allocation correspondence is the formal inspiration.

---

## Registrar stub discipline

`registrar.the-grove.ai` subdomain is pending. Every reference to the registrar in this sprint uses `https://the-grove.ai` as placeholder hostname. When the subdomain stands up, retrofit is trivial — global find/replace across the site's Declaration surfaces. Mesh-retrofit-v1 owns that retrofit if the subdomain is live by then.

---

## Conformance

After this sprint ships and deploys:

1. Fetch `https://the-grove.ai/.well-known/grove-autonomaton.json` — returns valid JSON matching Surface 2 schema.
2. Fetch `https://the-grove.ai/llms.txt` — returns v3 manifest teaching Bicameral Canon vocabulary.
3. Fetch `https://the-grove.ai/research/knowledge-polarity` — visible Handshake at top of paper; existing prose unchanged; JSON-LD, link rel, meta, and semantic markers present in HTML.
4. **The harmonic test.** Paste the paper URL into a fresh LLM chat with instruction "read this as an Autonomaton under GRV-004 and render the Declaration." If the LLM successfully names the operator, registers, lineage, and reserves without reading anything else, the Keg is conforming.

Conformance Test 4 is the point. The other three are scaffolding.

The harmonic test is proposed here as a general bicameral conformance requirement for every Grove Keg, not just this one. Formalization deferred to Bicameral Canon v1.1 or a GRV-004 successor; this SPEC is the first instance of the pattern on record.

---

## Out of scope / Backlog

- **GRV-004 v1.1 amendment — author's note on bicameral comprehension vs. multicameral composition.** GRV-004 should ship a future author's note distinguishing the bicameral comprehension frame (two chambers, one Keg, one harmonic) from the emergent multicameral composition reality (multiple intelligences composing across multiple Kegs over time, each Keg bicameral at the point of engagement). The frame is bicameral at Keg-scale; the phenomenon is multicameral at Mesh-scale. Canon should name this distinction explicitly. Not this sprint. Captured here so it does not drift.
- **`cellar_notes` implementation.** Field reserved in Surface 2 only. Follow-on sprint composes the contents.
- **Visible Workshop annex on the polarity paper.** A full Workshop annex as a distinct prose section. The 5-line Handshake carries Workshop-adjacent register for this sprint; a full annex is a prose addition and is deferred to avoid restructuring.
- **Visible compose-with surface.** Intelligence-facing primitives rendered as a visible closing section. This sprint ships compose-with via JSON-LD only. A visible surface is a prose addition and is deferred.
- **Promotion of other Kegs to `conforming` in llms.txt.** This sprint declares only `/research/knowledge-polarity` conforming; the rest are `pending`. Mesh-retrofit-v1 promotes additional Kegs and refreshes the inventory.
- **`registrar.the-grove.ai` subdomain stand-up.** Separate operator workstream.

---

## Deploy gate

Stop before deploy. The operator runs `npx vercel --prod --yes` from CMD. No exceptions.

---

## Handoff

When CC completes execution, write `sprints/polarity-autonomaton-v1/HANDOFF.md` containing:

- What shipped, with file paths and brief per-file summary.
- Any deviations from this SPEC, with the reason for each.
- Conformance Test 4 result — the fresh-LLM read of the deployed paper, rendered as a short transcript excerpt showing whether the LLM named operator, registers, lineage, reserves without prior context.
- Next sprint's open question surface, if any emerged during execution.

---

*CC BY 4.0 · The Grove Foundation · Indianapolis*
