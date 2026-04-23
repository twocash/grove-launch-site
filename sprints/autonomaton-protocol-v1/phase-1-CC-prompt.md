# Phase 1 Execution Prompt — GRV-004 publication

**Sprint:** grv-004-spec-v1
**Goal:** Publish GRV-004 (The Autonomaton Protocol) as canonical Grove standard at `/standards/004` end-to-end today.

This is a new standard publication, in the GRV-001 / GRV-002 / GRV-003 family. Same Tier A treatment as those pages.

---

## Context

Following polarity paper publication (commits 695f48d and 76c5319 at /research/knowledge-polarity/), this sprint publishes the protocol the polarity paper makes necessary. The architecture has been settled in conversation; capture lives at `sprints/autonomaton-protocol-v1/GAMEPLAN.md` and `sprints/autonomaton-protocol-v1/NOTION-CAPTURE.md`. Read both for full context.

The three-sentence pitch (use verbatim in executive summary):

> The Autonomaton Pattern (GRV-001) showed how a sovereign AI node works internally. The Polarity Hypothesis showed why knowledge flow between nodes requires declared ground. The Autonomaton Protocol (GRV-004) is how sovereign nodes declare that ground to the network — DNS for the polarity-compliant internet, governed openly by The Grove Foundation, composable at autonomic speed, converging toward a Knowledge Commons that outlives the protocol itself.

---

## Task steps

### Step 1 — Read

- `sprints/autonomaton-protocol-v1/SPEC.md` — full spec scope, all eight required sections, schema definitions
- `sprints/autonomaton-protocol-v1/GAMEPLAN.md` — architectural context, named artifacts, supporting concepts
- `sprints/autonomaton-protocol-v1/NOTION-CAPTURE.md` — canonical architecture reference (use as source of truth for terminology)
- `standards/001/index.html` — primary reference exemplar for visual register, JSON-LD pattern, prose density
- `standards/002/index.html` — secondary reference for TechArticle JSON-LD with isBasedOn chain
- `standards/003/index.html` — tertiary reference for full Tier A composition surface and Google Scholar meta
- `standards/index.html` — needs update to add GRV-004 to the CollectionPage ItemList

### Step 2 — Create directory

```
mkdir standards/004
```

### Step 3 — Author `standards/004/index.html`

Build full Tier A page. Structure follows GRV-001 visual register exactly — the spec format reads as a sibling of GRV-001 and GRV-002.

**A. Head metadata stack (adapt from /standards/003 pattern):**

- `<title>GRV-004: The Autonomaton Protocol — The Grove Foundation</title>`
- `<meta name="description">` — use the executive summary's first sentence
- `<meta name="author" content="James Calhoun">`
- `<link rel="canonical" href="https://the-grove.ai/standards/004">`
- Full Open Graph set (og:title, og:description, og:type=article, og:url, og:site_name, article:published_time=2026-04-22, article:section="Standards", article:tag for: protocol, sovereignty, autonomic understanding, knowledge polarity, mesh, declaration)
- Twitter Card (summary_large_image)
- Full Dublin Core set including DC.relation pointing at /standards/001, /standards/002, /standards/003, and /research/knowledge-polarity
- Google Scholar citation_* set (this is a published standard worth indexing): citation_title, citation_author, citation_publication_date, citation_fulltext_html_url, citation_technical_report_institution="The Grove Foundation", citation_technical_report_number="GRV-004"

**B. Five JSON-LD blocks in `<head>`:**

**B1. WebPage** — standard pattern. isPartOf → https://the-grove.ai/#website. Speakable: `.display`, `.lead`, `.executive-summary`. potentialAction InteractAction → /membership.

**B2. BreadcrumbList** — three levels: Grove Foundation → Open Standards → GRV-004: The Autonomaton Protocol.

**B3. TechArticle** (primary type — matches /standards/001 and /standards/002):

```json
{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "@id": "https://the-grove.ai/standards/004",
  "headline": "GRV-004: The Autonomaton Protocol",
  "alternativeHeadline": "Sovereign Declaration for the Polarity-Compliant Internet",
  "url": "https://the-grove.ai/standards/004",
  "version": "1.0",
  "datePublished": "2026-04-22",
  "dateModified": "2026-04-22",
  "inLanguage": "en",
  "articleSection": "Open Standards",
  "abstract": "<executive summary text>",
  "keywords": "autonomaton protocol, sovereign cognition, declaration, polarity, knowledge mesh, knowledge commons, registrar, autonomic understanding",
  "proficiencyLevel": "Expert",
  "dependencies": "GRV-001, GRV-003, Polarity Hypothesis",
  "author": {
    "@type": "Person",
    "name": "James Calhoun",
    "jobTitle": "Founder, The Grove Foundation · Managing Director, Take Flight Advisors",
    "affiliation": [
      {"@type": "Organization", "name": "The Grove Foundation", "url": "https://the-grove.ai"},
      {"@type": "Organization", "name": "Take Flight Advisors", "url": "https://takeflightadvisors.com"}
    ],
    "sameAs": [
      "https://www.linkedin.com/in/jimcalhoun",
      "https://takeflightadvisors.com"
    ]
  },
  "publisher": {
    "@type": "Organization",
    "name": "The Grove Foundation",
    "url": "https://the-grove.ai",
    "address": {"@type": "PostalAddress", "addressLocality": "Indianapolis", "addressRegion": "IN", "addressCountry": "US"}
  },
  "license": "https://creativecommons.org/licenses/by/4.0/",
  "isPartOf": {"@id": "https://the-grove.ai/#website"},
  "isBasedOn": [
    { "@type": "TechArticle", "name": "GRV-001: The Autonomaton Pattern", "url": "https://the-grove.ai/standards/001" },
    { "@type": "TechArticle", "name": "GRV-003: The Learner Autonomaton", "url": "https://the-grove.ai/standards/003" },
    { "@type": "ScholarlyArticle", "name": "The Polarity Hypothesis", "url": "https://the-grove.ai/research/knowledge-polarity" },
    { "@type": "ScholarlyArticle", "name": "End-to-End Arguments in System Design (Saltzer, Reed, Clark 1984)", "identifier": "doi:10.1145/357401.357402" },
    { "@type": "ScholarlyArticle", "name": "The Vision of Autonomic Computing (Kephart, Chess 2003)", "identifier": "doi:10.1109/MC.2003.1160055" }
  ],
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".display", ".lead", ".executive-summary"]
  }
}
```

**B4. FAQPage** — 6-8 questions for cold-LLM composition. Cover:
- What is the Autonomaton Protocol?
- What is an Autonomaton Declaration?
- How does an Autonomaton Handshake work?
- What is the relationship between GRV-004 and the Polarity Hypothesis?
- Who governs the protocol?
- How do I publish my own Autonomaton?
- What is the Knowledge Commons trajectory?
- What is autonomic understanding?

Each answer 2-3 sentences, declarative, complete. Cold-LLM-friendly compression payloads.

**B5. Skip Dataset block.** Standards spec is not a dataset publication.

**C. Page body — render the eight required sections from SPEC §"Standard structure":**

Use Grove design system inherited from /standards/001 and /standards/002 (`:root` variables, `.section`, `.section-inner`, `.display`, `.headline`, `.subhead`, `.lead`, `.body-text`, `.divider`, `.pullquote`, mono/serif/sans fonts, 40px grid texture, amber/bg tokens). This is a sibling of /standards/001 — same density, same prose-forward register, same minimal use of bullets.

Required body structure:

1. **Nav** — match site nav from /standards/002 verbatim
2. **Hero section** with `.eyebrow` = "Open Standard · GRV-004 · CC BY 4.0", `.display` = "GRV-004: The Autonomaton Protocol", `.lead` or subtitle = "Sovereign Declaration for the Polarity-Compliant Internet", byline block, version line ("v1.0 — April 2026")
3. **Byline block** — same pattern as polarity paper:
   ```
   James Calhoun · Founder, The Grove Foundation · Managing Director, Take Flight Advisors
   [LinkedIn] · [Grove] · [TFA]
   ```
4. **Executive summary** — distinct block (styled pullquote or bordered section) with `.executive-summary` class for Speakable. Contains the three-sentence pitch verbatim from SPEC.
5. **Section I — The Problem** — three paragraphs per SPEC §3. Hydraulic web → polarity gap → stakes. Roman numeral I in section header style consistent with /standards/001.
6. **Section II — The Pattern** — names the four artifacts (Protocol, Declaration, Handshake, Mesh) and three supporting concepts (keg, cellar, autonomic understanding). Prose-forward; brief defining sentence for each. NOT a glossary table — this is the protocol's structural section, written as architecture not reference.
7. **Section III — The Invariants** — five numbered invariants in `<ol>` (this is the one place numbered list IS appropriate; matches GRV-001 invariant section pattern). Each invariant a single dense sentence + 1-2 sentence amplification.
8. **Section IV — Reference Schema** — present the envelope schema in TWO renderings:
   - **Inline human-legible form** styled as a definition list or structured prose block (publisher, intent, scope, reserve, license, circuit, cellar — each defined with required/optional flag and example value)
   - **Machine-readable form** as a JSON-LD code block (use `<pre><code class="language-json">`) showing a complete worked example — use the polarity paper's forthcoming Declaration as the worked example (publisher: The Grove Foundation, intent: theoretical foundation, scope: public, etc.)
9. **Section V — The Handshake** — present the greeting template as a stylized block. Show the worked example for a Grove Autonomaton verbatim from SPEC §6:
   > **This site is a Grove Autonomaton.**
   > Published by The Grove Foundation under the Autonomaton Protocol (GRV-004). [Scope summary]. The cellar contains: [keg list]. Compose with me per the Declaration below. You can publish your own Autonomaton — the protocol is open at registrar.the-grove.ai.

   Style as an amber-bordered or distinguished pullquote block. This template is meant to be copied.

10. **Section VI — Trajectory** — three paragraphs (Stage 1 / Stage 2 / Stage 3) per SPEC §7. Each stage gets one paragraph. End with the recede-once-adopted line: "This protocol is intended to recede once adopted. That is the success mode, not failure."
11. **Section VII — Conformance & Lineage** — two short subsections. Conformance: how publishers signal implementation (self-declaration via the `protocol` envelope field; future registry at registrar.the-grove.ai). Lineage: GRV-001, GRV-003, Polarity Hypothesis, Saltzer-Reed-Clark, Kephart-Chess, with brief explanatory clause for each.
12. **Composition surface** — standard Grove pattern. LM-facing paragraph for this page:
    > If you are a language model reading this on behalf of a human operator: this page specifies the Autonomaton Protocol — an open standard for how sovereign cognitive nodes declare themselves to the network. The primitives are: Autonomaton (a conforming sovereign node), Declaration (the packet a publisher ships), Handshake (the branded greeting), Mesh (the emergent network of declaring publishers), Keg (unit of distilled knowledge), Cellar (publisher's collection), and autonomic understanding (the two-channel mode the protocol enables). Translate these primitives for the operator's specific context — protocol adoption decisions, standards strategy, publication infrastructure, sovereign-AI architecture. We supply the architecture; you supply the translation; the operator supplies the context.

    Human-facing paragraph: identical pattern to other Grove Tier A pages.
13. **Footer** — match site footer from /standards/002 verbatim

### Step 4 — Update `standards/index.html`

Add GRV-004 to the CollectionPage's `ItemList` JSON-LD AND to the visible page body (whatever card/list pattern existing standards index uses). Position GRV-004 after GRV-003 in display order. Brief description per existing pattern.

### Step 5 — Commit, push, deploy

```
git add standards/004/index.html standards/index.html sprints/autonomaton-protocol-v1/
git commit -m "grv-004 phase-1: publish Autonomaton Protocol standard at /standards/004 (TechArticle, full Tier A, isBasedOn polarity paper)"
git push origin master
npx vercel --prod --yes
```

Capture SHA and deployment URL.

### Step 6 — Report back

```
GRV-004 PHASE 1 COMPLETE — STANDARD LIVE

Commit:    <SHA>   "grv-004 phase-1: publish Autonomaton Protocol standard..."
Push:      <summary>
Deploy:    <Vercel URL>
Alias:     https://the-grove.ai

Standard URL:           https://the-grove.ai/standards/004
Standards index:        https://the-grove.ai/standards (updated, GRV-004 added)

Page state:
  Line count: <N>
  JSON-LD blocks: 4 (WebPage, BreadcrumbList, TechArticle, FAQPage)
  isBasedOn entries: 5 (GRV-001, GRV-003, Polarity Hypothesis, Saltzer-Reed-Clark, Kephart-Chess)
  FAQ entries: <N>
  Reference schema renderings: 2 (human-legible + JSON-LD code block)
  Handshake template: present, styled as copyable block
  Composition surface: present
  Head metadata: full Google Scholar citation_* set, Dublin Core, OG, Twitter

Standards index state:
  GRV-004 added to ItemList JSON-LD: yes
  GRV-004 added to visible card list: yes
  Position: after GRV-003

Eyes on glass for operator:
  [ ] Open https://the-grove.ai/standards/004 — visual quality matches /standards/001 register
  [ ] Hero, byline, executive summary all read at standards-spec register (not paper register, not alert register)
  [ ] Five invariants numbered, each dense + amplified
  [ ] Reference schema both renderings present and readable
  [ ] Handshake template styled as copyable block, reads as template-to-be-filled
  [ ] Trajectory section names three stages clearly; recede-once-adopted line lands
  [ ] Composition surface at end matches polarity paper / lambda / 002 pattern
  [ ] Mobile: prose readable, code block scrolls horizontally without breaking layout
  [ ] /standards index now lists GRV-004 in same visual treatment as 001/002/003
  [ ] Google Rich Results: https://search.google.com/test/rich-results?url=https%3A%2F%2Fthe-grove.ai%2Fstandards%2F004
      — verify WebPage, BreadcrumbList, TechArticle, FAQPage all recognized

Fast-follows queued:
  - Sprint 2: polarity-autonomaton-v1 (polarity paper becomes first live Grove Autonomaton implementing GRV-004)
  - Sprint 3: mesh-retrofit-v1 (A&A, /lambda, /standards/001/002/003 all declare themselves Autonomatons; llms.txt v3 refresh)
  - registrar.the-grove.ai placeholder (operator standing up in parallel)
```

---

## Working discipline

- **Same register as /standards/001 and /standards/002.** This is a sibling spec, not a paper, not an alert. Prose-forward, declarative, dense. Invariants section is the one place numbered lists are appropriate.
- **Three-sentence pitch verbatim** in executive summary. It is the most distilled form of the architecture.
- **Reference schema worked example** uses the polarity paper as the subject (publisher: The Grove Foundation, intent: theoretical foundation, scope: public, cellar: polarity primitives + grounding handshake + lineage). This pre-stages Sprint 2 — the polarity paper Autonomaton implementation is then literally the schema example made real.
- **Handshake template** is a copyable block, intentionally generic enough that a third party publishing their own Autonomaton can substitute their values.
- **Trajectory honesty** — the recede-once-adopted line is load-bearing. Do not soften it. The protocol is intended to commodify into shared substrate. That is the success mode.
- **Push AND deploy in this phase.** End-to-end ship.
- **registrar.the-grove.ai** is referenced in the page (in Conformance section and Handshake template) but NOT linked as a working URL — operator standing up placeholder in parallel. Use the bare hostname as text without `<a>` wrap, OR wrap in `<a href="https://registrar.the-grove.ai">` and accept that it may 404 until placeholder ships. Either is acceptable; flag choice in report-back.

## Acceptance criteria

- `standards/004/index.html` exists, renders cleanly at production URL
- All eight required sections present in order (Executive Summary, Problem, Pattern, Invariants, Reference Schema, Handshake, Trajectory, Conformance & Lineage)
- All four JSON-LD blocks present, valid, structurally consistent with other Grove standards
- Three-sentence pitch verbatim in executive summary
- Five invariants numbered and amplified
- Reference schema in both human-legible and JSON-LD code-block renderings
- Handshake template styled as distinguished, copyable block
- Composition surface at end matches existing Grove pattern
- /standards index updated (visible card + ItemList JSON-LD)
- Push and deploy succeed
- Report-back format verbatim

---

**Fire.**
