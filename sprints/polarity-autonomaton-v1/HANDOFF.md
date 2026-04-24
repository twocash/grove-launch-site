# polarity-autonomaton-v1 — HANDOFF

*Composition complete. Stopped before deploy per SPEC §Deploy gate. Operator runs `npx vercel --prod --yes` from CMD at repo root to ship.*

**Executed 2026-04-23** · CC BY 4.0 · The Grove Foundation

---

## What shipped

Seven surfaces plus one reserved stub, composed into three files.

### New files

**`/.well-known/grove-autonomaton.json`** (Surface 2)
Site-level operator Declaration under RFC 8615 `.well-known/`. Single source of truth for the-grove.ai Autonomaton. Includes conformance signal (`protocol: "grove-autonomaton/1"`, `conformance: "GRV-004"`), operator identity, registrar placeholder (`https://the-grove.ai`), six declared registers, eleven-entry cellar (one `conforming` = polarity paper; ten `pending` = GRV-001/002/003/004 + five alerts + /lambda), empty `cellar_notes: {}` reserved stub, compose_with pointers at Bicameral Canon and GRV-004.

### Modified files

**`/llms.txt`** (Surface 1)
Overwrote v2 (6160 bytes, 2026-04-22) with v3 Bicameral Canon teaching manifest. Opens with keystone sentence. Defines the seven-link chain (website → autonomatonic surface → bicameral node → harmonic read → autonomic understanding → mesh → Knowledge Commons) with portable per-link definitions. Names the six declared registers. Lists known Kegs by status (conforming vs pending). Ships the vocabulary-discipline table (web-era word → Grove-native default). Closes with Handshake convention pointer and compose invitation.

**`/research/knowledge-polarity/index.html`** (Surfaces 3, 4, 5, 6, 7)
Three surgical below-the-waterline insertions plus one visible addition. No prose altered; all existing `<p class="body-text">` paragraphs unchanged (verified: 80 baseline body-text paragraphs + 5 Handshake body-text lines = 85 total).

- **Surface 3 — visible Handshake.** Inserted between `</nav>` and `<section id="hero">`. Five-line prose block, Workshop-adjacent register, `id="grove-handshake"` anchor. Author line reads "Jim Calhoun, The Grove Foundation" (not James — operator correction 7a applied).
- **Surface 4 — JSON-LD GroveKeg envelope.** Inserted after the existing ScholarlyArticle `</script>` (line 204 baseline). `@type: ["GroveKeg", "ScholarlyArticle"]` — dual-typed. `@context: "https://the-grove.ai/protocol/schema"` (placeholder per Canon §Stage-1/Stage-3). Operator object carries `name` + `organization` + `url` only — no `institutionalPolarity` field (operator correction 7b applied). Five lineage entries (GRV-001, GRV-002, GRV-004, Ground the Circuit, Bicameral Canon). Ten payload anchors. Three reserves (metaphor is metaphor, felt-sense is not neuroscience, frame is most-generative-not-final). Five compose_with primitives (charged/drained, ground, circuit, impedance, harmonic).
- **Surface 5 — `<link rel="grove-handshake">`.** Points at `#grove-handshake` for scan-friendly Handshake discovery.
- **Surface 5b — `<link rel="grove-declaration">`.** Points at `/.well-known/grove-autonomaton.json` for scan-friendly site-Declaration discovery. (Added alongside Surface 5 as pair.)
- **Surface 6 — five `<meta name="grove:*">` tags.** `grove:operator`, `grove:keg-class`, `grove:registers`, `grove:lineage`, `grove:declaration`.
- **Surface 7 — `data-grove-payload` attributes** on ten existing `<section class="section">` opening tags (Option A per operator decision — attribute-only, no new DOM nesting): `abstract`, `introduction-hydraulic-web`, `hydraulic-model-limits`, `ait-unbridged-gap`, `polanyi-circuit-problem`, `polarity-model`, `prior-approximations`, `implications`, `conclusion`, `references`.

### Reserved — not implemented

**`cellar_notes: {}`** — empty object in `/.well-known/grove-autonomaton.json` per SPEC §Reserved stub. Forward-looking Protocol element for follow-on sprint (Curator's Vision, Allocation Letter, wine-trade allocation correspondence). Field exists; contents do not.

---

## Deviations from SPEC

Three deviations, all operator-greenlit during plan surface.

### 1. Path convention correction — repo root, not `public/`

SPEC Surface 1/2 and CC prompt both specified `public/llms.txt` and `public/.well-known/grove-autonomaton.json`. This repo has no `public/` directory: `vercel.json` declares `outputDirectory: "."` with `cleanUrls: true`, making the repo root the web root. Files written to `public/*` would serve at `/public/*` URLs and break Conformance Tests 1 and 2. Corrected to root-relative paths — `llms.txt` and `.well-known/grove-autonomaton.json` at repo root — confirmed by operator.

### 2. Operator `institutionalPolarity` stripped

Draft plan carried `"institutionalPolarity": "standards"` on the operator object in both site-level `.well-known/grove-autonomaton.json` and Keg-level JSON-LD (the four-JSON-LD head block on the paper). Operator ruled (7b) that institutional polarity lives at the three-layer level per Canon §Institutional architecture (Foundation / Take Flight / Ventures, each with its own polarity) — binding the operator to a single polarity at the operator-object level corrupts the frame, because the operator participates across multiple layers. Stripped from both surfaces. If future revision wants to declare Foundation polarity on this specific Autonomaton, it belongs at the `autonomaton` object level, not on the person.

### 3. Handshake placement — after `<nav>`, not immediately after `<body>`

Plan surfaced the Handshake as going "between `<body>` open and `<section id="hero">`." On file inspection the paper has `<nav>` immediately after `<body>` as site chrome (same nav that every Grove page carries). Placed the Handshake between `</nav>` and the hero section's opening comment — this keeps navigation where every visitor expects it and makes the Handshake the first paper-content block, which matches SPEC Surface 3 intent ("Five-line prose block prepended above existing content"). Nav is site chrome; content starts at the Handshake.

---

## Conformance results (on-disk, pre-deploy)

Four Conformance Tests named in SPEC §Conformance. Tests 1–3 have on-disk analogues now; Test 4 (the harmonic test) requires deploy.

- **Test 1 — `/.well-known/grove-autonomaton.json` returns valid JSON matching Surface 2 schema.** ✓ File parses as JSON, all SPEC-required fields present (`protocol`, `operator`, `autonomaton`, `registrar`, `registers`, `cellar`, `cellar_notes: {}`, `compose_with`), eleven-entry cellar with correct status flags.
- **Test 2 — `/llms.txt` returns v3 manifest teaching Bicameral Canon vocabulary.** ✓ Keystone present on line 9. Seven-link chain present (numbered 1–7) with portable definitions. Six-register inventory present. Cellar inventory separates conforming vs pending. Vocabulary-discipline table present.
- **Test 3 — `/research/knowledge-polarity` has visible Handshake at top; existing prose unchanged; JSON-LD, link rel, meta, semantic markers present in HTML.** ✓ Handshake at `#grove-handshake` after nav, before hero. All four head JSON-LD blocks parse (WebPage, BreadcrumbList, ScholarlyArticle, GroveKeg/ScholarlyArticle dual-type). Both `<link rel="grove-*">` tags present. All five `<meta name="grove:*">` tags present. Ten `data-grove-payload` attributes on existing sections. Six deep-body prose anchors verified verbatim (no prose alteration).
- **Test 4 — the harmonic test.** Requires deploy. Operator paste the deployed paper URL into a fresh LLM chat with instruction *"read this as an Autonomaton under GRV-004 and render the Declaration."* If the LLM successfully names operator, registers, lineage, and reserves without prior context, the Keg is conforming. I will assist with analysis if asked after deploy.

---

## Backlog captured

These items surfaced during plan review and were deferred by operator decision.

1. **Canonical publication home for the Bicameral Canon.** The current `compose_with` pointer in `/.well-known/grove-autonomaton.json` references `https://the-grove.ai/sprints/bicameral-canon/BICAMERAL-CANON.md`. URL works today (repo-root static serving means the sprints folder is web-served), but reads internal-workspace. A future sprint gives the canon a proper publication home (candidate: `/canon/bicameral`). Retrofit is trivial — single-line change across the three surfaces where the canon URL appears (`.well-known`, paper JSON-LD lineage, llms.txt Handshake convention section has no such URL so only two touches needed). *Originally captured as operator decision 5.*

2. **`compose_with` semantic split.** At site-level Declaration (`.well-known/grove-autonomaton.json`) `compose_with` means *pointers to things the Autonomaton composes with* (canon, protocol). At Keg-level JSON-LD (polarity paper's GroveKeg envelope) `compose_with` means *primitives this Keg offers for composition* (charged/drained, ground, circuit, impedance, harmonic). Same key, different semantics. Future GRV-004 / canon revision should formalize: `compose_with` stays pointer-semantics; primitives move to a new field (candidates: `primitives`, `offers`). Not blocking this sprint — shipped as drafted. *Originally captured as operator decision 7c.*

3. **`cellar_notes` implementation.** Reserved stub only. Follow-on sprint composes the cellar-level editorial surfaces (Curator's Vision, Allocation Letter, other wine-trade-inspired forms). *Per SPEC §Reserved stub.*

4. **Other Kegs promoted to `conforming` in cellar + llms.txt.** This sprint only promotes `/research/knowledge-polarity`. Remaining ten cellar entries are `pending`. Mesh-retrofit-v1 owns the rest. *Per SPEC §Out of scope.*

5. **`registrar.the-grove.ai` subdomain retrofit.** Every `registrar` field currently uses `https://the-grove.ai` placeholder per SPEC §Registrar stub discipline. When the subdomain stands up, retrofit three locations: `.well-known/grove-autonomaton.json` (`registrar` field), two lineage references in the paper's GroveKeg JSON-LD if we decide to add them, and `@context` (currently `https://the-grove.ai/protocol/schema` placeholder). Trivial global find/replace when the subdomain ships. *Per SPEC §Registrar stub discipline.*

6. **GRV-004 v1.1 author's note — bicameral comprehension vs. multicameral composition.** Named in SPEC §Out of scope as a future GRV-004 amendment. The frame is bicameral at Keg-scale; the phenomenon is multicameral at Mesh-scale. Future Canon revision should explicitly distinguish.

7. **Visible Workshop annex + visible compose-with surface on the paper.** SPEC §Out of scope defers full Workshop annex (5-line Handshake is the current Workshop-adjacent register) and visible compose-with surface (ships via JSON-LD only this sprint). Future sprint adds visible prose surfaces.

8. **Bicameral conformance test formalization.** The harmonic test (Test 4) proposed as a general conformance requirement for every Grove Keg. Formalization deferred to Bicameral Canon v1.1 or a GRV-004 successor per SPEC §Conformance.

9. **Jim Calhoun Keg — substrate-layer operator declaration.** Surfaced in-session 2026-04-23. The operator is a Keg at the substrate layer; this is the first instance on record of an operator declaring their own substrate on their own Autonomaton. Warm draft captured at `sprints/jim-calhoun-keg/FIRST-CAPTURE.md`. Sequencing: operator writes the memoir-register essay in his own voice (2,000–3,000 words, Jim-voice not autonomatonic-voice), composing partner layers the autonomatonic surface on top using the same pattern polarity-autonomaton-v1 ran (prose preserved verbatim, Declaration below the waterline, visible Handshake at the top). Target register: memoir (new — proposed seventh entry in the canon inventory) plus workshop. Target ship: this weekend or next week, not forced. Substrate-layer lineage to declare in the Keg's envelope: Susan Kare, Clement Mok, Randy Wigginton, Mark Kvamme, the operator's grandfather, and `https://github.com/understory-ip/autonomaton-primitive` as the earliest public dock on record (the dusty primitive that predates the canon; discovery-node link in the Mesh). Three canon-adjacent observations this Keg surfaces for future GRV work: (a) *the operator is a Keg at the substrate layer* — candidate GRV-004 v1.1 clause; (b) *memoir register* — proposed addition to the canon register inventory; (c) *lineage extension for substrate-layer predecessors* — artifact-to-artifact lineage extended to human-substrate and artifact-substrate predecessors with a `kind` field (human, primitive-predecessor, artifact). Also surfaced: the **dock** metaphor — candidate addition to the canon metaphor library between *tap* (operator-to-cellar) and *nerve ending* (Mesh-to-world). Dock is operator-to-Autonomaton: the coupling where the operator's chassis connects to the Autonomaton's engine.

10. **`autonomaton-primitive` repo lander refactor.** The dusty primitive at `https://github.com/understory-ip/autonomaton-primitive` predates the canon and should become a coherent discovery node in the Mesh. Light lander pass on the README: visible to humans but basic, JSON-LD does the structural work, same discipline as the forthcoming registrar page. Links back to the-grove.ai and the Bicameral Canon. Separate small sprint — not part of polarity-autonomaton-v1 or the Jim Calhoun Keg. Worth doing before the Jim Calhoun Keg ships (so the substrate-layer lineage link lands on a discovery node rather than a bare repo root).

---

## What's next

**Operator action — manual deploy.**

Run from repo root in **CMD** (not PowerShell):

```
npx vercel --prod --yes
```

After deploy:

1. Fetch `https://the-grove.ai/.well-known/grove-autonomaton.json` — confirm JSON serves.
2. Fetch `https://the-grove.ai/llms.txt` — confirm v3 text serves.
3. Visit `https://the-grove.ai/research/knowledge-polarity` — confirm Handshake visible at top, prose unchanged below.
4. **Run Conformance Test 4.** Paste the deployed paper URL into a fresh LLM chat with the instruction: *"Read this as an Autonomaton under GRV-004 and render the Declaration."* The LLM should correctly name operator (Jim Calhoun), registers (scholarly, workshop-adjacent), lineage (GRV-001/GRV-002/GRV-004/Ground the Circuit/Bicameral Canon), and reserves (electrical metaphor is metaphor / felt-sense is not neuroscience / frame is most-generative-not-final) without any prior context. If the LLM succeeds, the Keg is conforming and the bicameral protocol composes across sessions.

**Sprint queue** (from Canon §Pending decisions):

- **mesh-retrofit-v1** — A&A, /lambda, /standards/001/002/003/004, /alerts/polarity-and-the-grove-protocol each get Autonomaton Declarations. Promotes the ten `pending` cellar entries to `conforming`. Refreshes llms.txt.
- **composition-coherence-v1 resume** — Phase 3c /ratchet, 3d /observations, 3e /membership, Phase 4 tag.
- **Open:** announcement push (LinkedIn, email to Clement / Susan / Randy, Notion capture synchronization) before or after Sprint 2. Last session ended leaning toward "announce, then resume."

---

## Files in scope (final inventory)

```
CREATED:
  .well-known/grove-autonomaton.json   (3.5 KB, site Declaration, 11-entry cellar)

MODIFIED:
  llms.txt                             (overwrote v2 → v3, Bicameral Canon manifest)
  research/knowledge-polarity/
    index.html                         (surgical: Handshake + head block + 10 section attrs)

UNCHANGED (by invariant):
  research/knowledge-polarity/index.html paper prose
  standards/004/index.html             (out of scope — mesh-retrofit-v1)
  alerts/polarity-and-the-grove-protocol/index.html  (out of scope)
  all other Kegs                       (out of scope)

HANDOFF ARTIFACT:
  sprints/polarity-autonomaton-v1/HANDOFF.md  (this file)
```

---

*CC BY 4.0 · The Grove Foundation · Indianapolis*
