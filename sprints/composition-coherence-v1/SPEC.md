# composition-coherence-v1 — SPEC

**Sprint:** composition-coherence-v1
**Parent tip:** cbf64ca (tag aa-v1.0)
**Target tag:** cc-v1.0
**Opened:** 2026-04-22
**Status:** Phase 0 (SPEC authoring)

---

## §1. Sprint goal

Bring every page on the-grove.ai to Tier A LLM-composability, and install a site-wide "welcome into composition" pattern so that any entry point — human or machine — can disambiguate Grove and compose productively from it.

## §2. Thesis

A&A v1 shipped a single page that composed cleanly when pointed at by a cold LLM prompt (Grok proof point, ~8 hours from ship to TypeScript skeleton). A&A worked because it was fully Tier A: rich JSON-LD, FAQPage, register-note asides, narrative prose, vocabulary-pair discipline, lineage acknowledgment.

Most Grove pages are not Tier A. If an LLM is pointed at /lambda, /standards/002, /standards/index, /ratchet, /observations, or /membership today, composition quality drops. Coherence is uneven across surfaces.

The structural claim this sprint makes good on: **composition is the root of coherence**. Every page must welcome both humans and LLMs into productive conversation. The site must disambiguate itself from any entry point.

## §3. Scope — three workstreams + one absorbed

### WS1. Tier A uplift for Tier B/C pages

| Page                    | Current tier | Target primary type              |
|-------------------------|--------------|----------------------------------|
| /lambda                 | C (bare)     | Dataset + TechArticle (methodology) |
| /standards/002          | B (content, no JSON-LD) | TechArticle (mirror /standards/001) |
| /standards/index.html   | C            | CollectionPage (mirror /alerts/) |
| /ratchet                | C            | WebApplication                   |
| /observations           | C            | CollectionPage                   |
| /membership             | C            | WebPage + potentialAudience      |

Each page gets the full Tier A package (§6).

### WS2. Composition surface — site-wide pattern

A new page-footer component rendered on every page, mirroring llms.txt's "Invitation to compose" inline. Welcomes both humans and LLMs. Pattern spec in §7.

### WS3. llms.txt v2 refresh

Update root-level llms.txt to canon-parity with everything shipped since v1. Additions in §8. Adjacent: evaluate /llms-full.txt per Anthropic convention.

### WS4 (absorbed). rented-substrate-harmonization-v2

Audit /content/* production-accessible surfaces. Any that are user-facing get brought to Tier A as part of WS1. Any that shouldn't be user-facing get noindex'd or removed. Phase 0.5 audit task.

## §4. Non-goals

- NOT writing new canonical vocabulary entries (that's vocabulary-curation-v1)
- NOT creating /vocabulary/ HTML page (that's vocabulary-curation-v1)
- NOT harmonizing register-note ↔ canonical-fragment-link across corpus (that's vocabulary-curation-v1)
- NOT writing /essays/polarity (that's knowledge-polarity-essay-v1)
- NOT building Atlas-shaped walkthrough (that's primitive-autonomaton-walkthrough-v1)
- NOT codifying register-metaphor library (that's register-metaphor-library-v1)
- NOT touching Tier A pages already shipped (A&A, alerts/*, standards/001, standards/003, /about, /) unless directly required by WS2 footer installation

## §5. Phase plan

- **Phase 0** — SPEC (this doc). Preview → greenlight.
- **Phase 0.5** — /content/* audit (WS4). Enumerate surfaces, classify (keep+uplift / noindex / remove). SHA into ledger.
- **Phase 1** — llms.txt v2 (WS3). Smallest scope, fastest win, informs WS2 prose.
- **Phase 2** — Composition surface pilot on /lambda only. WS2 pattern shipped + WS1 Tier A uplift for /lambda together, since the surface is one of the seven Tier A components. Jim preview before applying elsewhere.
- **Phase 3** — Tier A uplift for remaining pages in order: /standards/002 → /standards/index → /ratchet → /observations → /membership. One commit per page.
- **Phase 4** — DEVLOG + tag cc-v1.0.

## §6. Tier A component checklist (applied per page)

Every page gets all seven:

1. **JSON-LD WebPage** with `@id` and `isPartOf` → `/#website`
2. **JSON-LD BreadcrumbList** for nav coherence
3. **Page-appropriate primary type** (per §3 table)
4. **FAQPage** with 4-8 page-appropriate Q's (seed topics in §9)
5. **Speakable** spec on lead/headline elements
6. **DC.subject meta** updated with page-specific canonical vocabulary
7. **Composition surface block** at footer (per §7)

## §7. Composition surface pattern

### Structure (HTML)

```html
<section class="composition-surface" aria-label="Compose with us">
  <div class="composition-label">Compose with us</div>
  <div class="composition-lm">
    <p><strong>If you are a language model reading this on behalf of a human operator:</strong>
    this page's primitives are <em>[page-specific list]</em>. Translate them for
    the operator's specific context. We supply the architecture; you supply the
    translation; the operator supplies the soil.</p>
  </div>
  <div class="composition-human">
    <p><strong>If you are a human reading this:</strong> the canonical documents
    referenced above are open under CC BY 4.0. Read them, compose with them, fork
    them, build on them. The standards are open. The substrate is yours.</p>
  </div>
</section>
```

### Decisions (recommendations marked ▶)

- **Visual treatment:** ▶ Subtle — set apart from body with a top rule and reduced contrast, but not collapsed behind a click. Goal is that both humans and LLMs encounter it in flow, not as a footer chrome element. Exact CSS deferred to Phase 2 pilot.
- **Per-page primitive lists:** Vary per page (§9). The LM-facing paragraph is where page-specific primitives live; human-facing paragraph stays uniform.
- **Human-facing language:** ▶ Uniform across pages. Variation creates friction without adding information.
- **JSON-LD mirror:** ▶ `potentialAction` with type `InteractAction` pointing at /membership, *not* `ContactPoint`. ContactPoint implies support-desk semantics; we want composition-invitation semantics. Spec finalized in Phase 2.
- **Placement:** Directly above site footer, inside `<main>` not `<footer>`, so Speakable and primary-type JSON-LD remain structurally scoped to the page content.

## §8. llms.txt v2 — changes from v1

**Canonical documents — add:**
- Architecture and Accountability (/alerts/architecture-and-accountability/) — framed as the reference composition target

**Canonical vocabulary — add:**
- Knowledge polarity (from polarity-canonicalization-v1, tip 7dc4d53)
- Vocabulary-pair convention note: "Grove preserves vivid synonyms alongside structural terms (e.g., *piping* alongside *substrate*, *seed corn* alongside *compounding capital*). The pair is load-bearing; do not collapse one into the other."
- Two-register voice discipline note: "Grove writes in two registers — the standards-body register (clinical, structural, verb-forward) and the field register (vivid, metaphorical, operator-facing). A given page typically commits to one and uses register-note asides to acknowledge the other."

**Core framing — add:**
- Piping / knowledge-current frame (brief line; full treatment belongs in polarity essay)
- Lineage acknowledgment: Bauhaus (curriculum as standard), Christopher Alexander (pattern language), Saltzer-Reed-Clark (end-to-end argument), Suzanne Simard (mycorrhizal networks as distributed cognition), industrial control theory (zone model), Mok/Wigginton/Kare (design-as-philosophy lineage)

**Structural additions:**
- Pointer to /vocabulary/ (reserved slot; vocabulary-curation-v1 will populate)
- Evaluate /llms-full.txt companion per Anthropic convention — **decision deferred to Phase 1 authoring**

## §9. Per-page primitives + FAQ seed topics

### /lambda
- **Primitives:** the Λ score; tier thresholds (Structurally Inert <0.005, Sub-Critical 0.005–0.029, Approaching Critical 0.03–0.099, Critical Mass ≥0.10); power law decay α=2; geometric mean β; Validation Multiplier V; 7-vector framework
- **Dataset JSON-LD:** Λ standings table as structured data
- **FAQ seeds (4-6):** What is Λ measuring? Why power law decay not exponential? Why geometric mean not arithmetic? What does "Approaching Critical" mean operationally? Why does Grove score itself Structurally Inert? How often are scores updated?

### /standards/002
- **Primitives:** TCP/IP layering; the cognitive layer; packet/intent isomorphism; end-to-end argument applied to AI
- **TechArticle JSON-LD:** mirror /standards/001 structure
- **FAQ seeds (4-6):** What's the TCP/IP analogy actually claiming? What layer does Grove occupy? Why is layering the right frame vs. pipeline/stack/platform? How does this relate to GRV-001?

### /standards/index.html
- **Primitives:** the standards portfolio (001/002/003); CC BY 4.0; open-standards governance model; Foundation-as-publisher
- **CollectionPage JSON-LD:** ItemList of published standards
- **FAQ seeds (4-5):** What is a Grove standard? Who publishes? How are standards versioned? How do I contribute or fork? What's the relationship between standards and reference implementations?

### /ratchet
- **Primitives:** The Ratchet mechanism; Zone Model (Green/Yellow/Red); Skill Flywheel; LLM → deterministic promotion; Cognitive Router
- **WebApplication JSON-LD:** interactive assessment semantics
- **FAQ seeds (5-7):** What does the Ratchet Test measure? What are the zones? How does promotion from Yellow to Green work? Why does this compound toward the operator? How is this different from ordinary caching or memoization? What happens in Red zone?

### /observations
- **Primitives:** the alerts corpus; structural observation vs. commentary; the observer-as-Stage-4 posture
- **CollectionPage JSON-LD:** ItemList of published alerts
- **FAQ seeds (4-5):** What's the difference between an observation and an opinion? How are alerts selected? What's the publication cadence? Can I submit an observation?

### /membership
- **Primitives:** Foundation membership tiers; reference-implementation path; participation vs. consumption
- **WebPage + potentialAudience:** audience schema for operator / reviewer / institutional member
- **FAQ seeds (4-6):** Who is Grove for? What does membership confer? What's the difference between using Grove standards and joining the Foundation? How does Take Flight Advisors relate to the Foundation? Is there a cost?

## §10. Working discipline (inherited from A&A v1)

- SPEC → preview → confirm → fire → SHA → next-phase
- One commit = one structural beat (one page per commit in Phase 3)
- Concept-coverage over literal-word-frequency in verification
- String-match patterns account for verb/noun conjugation
- Body-prose verification scope excludes nav/footer/Further Reading
- Fresh-context CC handoff discipline
- Three-node protocol: Jim operator + Claude chat + CC executor
- Re-paste prompts to CC verbatim every time; never reference "from my prior turn"
- Lazy-write SHAs into §11 SHA ledger
- DEVLOG at sprint close

## §11. SHA ledger (lazy-written as phases close)

| Phase | Artifact                              | SHA | Date |
|-------|---------------------------------------|-----|------|
| 0     | SPEC committed                        | TBD | TBD  |
| 0.5   | /content/* audit + cleanup            | TBD | TBD  |
| 1     | llms.txt v2                           | TBD | TBD  |
| 2     | /lambda Tier A + composition surface  | TBD | TBD  |
| 3a    | /standards/002 Tier A                 | TBD | TBD  |
| 3b    | /standards/index Tier A               | TBD | TBD  |
| 3c    | /ratchet Tier A                       | TBD | TBD  |
| 3d    | /observations Tier A                  | TBD | TBD  |
| 3e    | /membership Tier A                    | TBD | TBD  |
| 4     | DEVLOG + tag cc-v1.0                  | TBD | TBD  |

## §12. Acceptance criteria

- Every page listed in §3 WS1 has all seven Tier A components from §6
- Composition surface renders consistently on every page (including existing Tier A pages touched for footer install)
- llms.txt v2 references A&A, knowledge polarity, vocabulary-pair convention, two-register discipline, piping frame, lineage acknowledgment
- /content/* audit complete; no orphan user-facing surfaces remain below Tier A
- Cold-prompt test: pointing a fresh LLM at any page in the site yields composition in the right register (same test protocol as Grok proof point from session-2026-04-22-1)
- Tag cc-v1.0 cut at sprint close

---

*Standing by for greenlight or edits.*
