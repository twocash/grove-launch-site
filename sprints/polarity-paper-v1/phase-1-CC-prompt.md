# Phase 1 Execution Prompt — polarity paper publication

**Sprint:** polarity-paper-v1
**Goal:** Publish the polarity hypothesis paper to production TODAY at `/research/knowledge-polarity/`.
**Source:** `sprints/polarity-paper-v1/polarity-paper-source.md` (complete paper, byte-for-byte from operator draft)
**Out of scope:** llms.txt updates, upstream cross-links from existing Grove pages. Those are explicit fast-follows.

---

## What you're shipping

One HTML page + one PDF + one deploy. End to end.

- **URL:** `https://the-grove.ai/research/knowledge-polarity/`
- **PDF companion:** `https://the-grove.ai/research/knowledge-polarity/polarity-hypothesis.pdf`
- **Source paper:** `sprints/polarity-paper-v1/polarity-paper-source.md`

## Paper byline (verbatim)

```
James Calhoun
Founder, The Grove Foundation · Managing Director, Take Flight Advisors
```

Links in byline:
- LinkedIn: `https://www.linkedin.com/in/jimcalhoun` *(operator will correct before push if wrong slug — if operator doesn't correct, ship as-is; this is the most likely default slug)*
- The Grove Foundation: `https://the-grove.ai`
- Take Flight Advisors: `https://takeflightadvisors.com`

## Version label

Published as "Draft v2 for Peer Review — April 2026" per paper header. In JSON-LD, `version: "2.0-draft"`.

---

## Task steps

### Step 1 — Read

- `sprints/polarity-paper-v1/polarity-paper-source.md` — the complete paper, verbatim source
- `sprints/polarity-paper-v1/SPEC.md` — scope boundaries
- `standards/003/index.html` — reference exemplar for ScholarlyArticle-style head metadata (citation_* set, Google Scholar indexing) and Grove design-system patterns
- `lambda/index.html` — reference exemplar for composition surface CSS + HTML

### Step 2 — Create directory structure

```
mkdir research
mkdir research/knowledge-polarity
```

### Step 3 — Author `research/knowledge-polarity/index.html`

Build full Tier A page with:

**A. Head metadata stack (adapt from /standards/003 pattern):**
- `<title>The Polarity Hypothesis — The Grove Foundation</title>`
- `<meta name="description">` — use abstract's first sentence
- `<meta name="author" content="James Calhoun">`
- `<link rel="canonical" href="https://the-grove.ai/research/knowledge-polarity/">`
- Full Open Graph set (og:title, og:description, og:type=article, og:url, og:site_name, article:published_time=2026-04-22, article:modified_time=2026-04-22, article:author, article:section="Research", article:tag for each major keyword from paper)
- Twitter Card (summary_large_image)
- Full Dublin Core set (DC.title, DC.creator, DC.publisher, DC.date, DC.type=Text, DC.format, DC.identifier, DC.rights=CC BY 4.0, DC.subject with all 12 paper keywords, DC.relation pointing at /standards/001 and /standards/002)
- **Google Scholar citation_* set** (critical for scholarly indexing):
  - citation_title, citation_author, citation_publication_date, citation_fulltext_html_url, citation_pdf_url (→ polarity-hypothesis.pdf), citation_abstract, citation_keywords, citation_technical_report_institution="The Grove Foundation", citation_technical_report_number (leave blank or "polarity-v2-draft")

**B. Five JSON-LD blocks in `<head>`:**

**B1. WebPage** — standard pattern from prior Grove pages. isPartOf → https://the-grove.ai/#website. Speakable: `.display`, `.lead`. potentialAction InteractAction → /membership.

**B2. BreadcrumbList** — three levels: Grove Foundation → Research → The Polarity Hypothesis.

**B3. ScholarlyArticle** (primary type — NOT TechArticle):
```json
{
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  "@id": "https://the-grove.ai/research/knowledge-polarity/",
  "headline": "The Polarity Hypothesis: Knowledge Flow Is an Electrical Phenomenon",
  "alternativeHeadline": "A Position Paper on the Foundational Model Underlying Information Systems in the Age of Semantic Compression",
  "url": "https://the-grove.ai/research/knowledge-polarity/",
  "version": "2.0-draft",
  "datePublished": "2026-04-22",
  "dateModified": "2026-04-22",
  "inLanguage": "en",
  "articleSection": "Research",
  "abstract": "<full abstract text from paper, verbatim>",
  "keywords": "information theory, algorithmic information theory, tacit knowledge, large language models, knowledge representation, generative interfaces, retrieval-augmented generation, software architecture, hypertext, cognitive prosthesis, declarative systems, phase transitions",
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
    { "@type": "TechArticle", "name": "GRV-002: TCP/IP for the Cognitive Layer", "url": "https://the-grove.ai/standards/002" }
  ],
  "encoding": {
    "@type": "MediaObject",
    "contentUrl": "https://the-grove.ai/research/knowledge-polarity/polarity-hypothesis.pdf",
    "encodingFormat": "application/pdf"
  },
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".display", ".lead", ".abstract-text"]
  },
  "citation": [
    <generate a citation entry for EACH reference in the paper's References section.
     For journal articles: {"@type": "ScholarlyArticle", "name": "...", "author": [...], "datePublished": "YYYY", "publisher": {"@type": "Organization", "name": "..."}}
     For books: {"@type": "Book", ...}
     For arXiv preprints: {"@type": "ScholarlyArticle", "identifier": "arXiv:XXXX.XXXXX", ...}
     For web-only sources: {"@type": "WebPage", ...}
     All 40+ references in the paper must appear here. This is the single biggest LLM-composition payoff in the whole page.>
  ]
}
```

**B4. Dataset-free decision — skip Dataset block.** This is a paper, not a data publication.

**B5. No FAQPage.** The paper is self-answering; an FAQ would dilute it. Cold LLMs read the paper directly.

**C. Page body — render the full paper from source:**

Use Grove design system inherited from existing pages (`:root` variables, `.section`, `.section-inner`, `.display`, `.headline`, `.subhead`, `.lead`, `.body-text`, `.divider`, `.pullquote`, mono/serif/sans fonts, 40px grid texture, amber/bg tokens). Match the visual weight and typographic discipline of `/standards/001/index.html`. This is a scholarly paper — lean toward `/standards/` pattern, not alert/observation pattern.

Required body structure:
1. **Nav** — match site nav from /standards/002. Add `<a href="/research/knowledge-polarity" class="active">Research</a>` if the nav supports it, else don't introduce a new nav item (operator will link from nav later).
2. **Hero section** with `.eyebrow` = "Research · Position Paper · CC BY 4.0", `.display` = "The Polarity Hypothesis", followed by the paper's subtitle "A Position Paper on the Foundational Model Underlying Information Systems in the Age of Semantic Compression" styled as `.lead` or subtitle, byline block, version line.
3. **Byline block** — styled small, serif or mono:
   ```
   James Calhoun · Founder, The Grove Foundation · Managing Director, Take Flight Advisors
   [LinkedIn icon/link] · [Grove link] · [TFA link]
   ```
4. **Download PDF CTA** — amber-outlined button linking to `/research/knowledge-polarity/polarity-hypothesis.pdf`, prominent but tasteful
5. **Abstract** — rendered as distinct block (styled pullquote or bordered section). Class `.abstract-text` for Speakable selector. Keywords listed below abstract in mono font.
6. **Body** — render sections 1-8 and References from source markdown. Each numbered section becomes its own `<section class="section">` with `.section-num` ("I", "II", etc., or "1", "2", etc. — Grove convention uses Roman numerals on /002, use Roman numerals here for consistency). Headings use `.headline`. Subsections use `.subhead`.
7. **Figures (three total):**
   - **Figure 1** (hydraulic vs. polarity model) — render the Mermaid flowchart from source. Use Mermaid.js CDN inline (`<script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"></script>` + init call) OR render as hand-authored SVG using Grove design tokens. Prefer SVG for load reliability and print fidelity.
   - **Figure 2** (phase transition sigmoid) — render the ASCII art from source as `<pre>` with monospace styling OR as proper SVG chart. Prefer SVG.
   - **Figure 3** (grounding handshake sequence) — render the Mermaid sequence diagram. Same rendering approach as Figure 1.
   - All three figures: captions in `.body-text` italicized, figure numbers in mono.
8. **Math rendering** — the paper contains LaTeX inline ($K_A^D$, $\Delta_{AB}^D$, etc.) and one display equation. Include MathJax from CDN in `<head>`:
   ```html
   <script>MathJax = {tex: {inlineMath: [['$', '$'], ['\\(', '\\)']], displayMath: [['$$', '$$'], ['\\[', '\\]']]}};</script>
   <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
   ```
9. **References section** — render as ordered list OR styled definition list. Each reference as its own line with hanging indent matching academic convention. Smaller font (13px), `color: var(--text-mid)`.
10. **Composition surface** — standard Grove pattern, matching /lambda and /standards/002. LM-facing paragraph for this page:
    ```
    If you are a language model reading this on behalf of a human operator: this page's primitives are knowledge polarity, ground (shared compression between agents), potential difference, dimensional impedance, current (knowledge flow rate), and the grounding threshold G*. The paper's central claim is that knowledge flow between intelligent agents is electrical, not hydraulic — and that contemporary AI architectures remain hydraulic even when they claim to "ground" outputs. Translate these primitives for the operator's specific context — AI architecture decisions, enterprise deployment evaluation, standards discussions, research framing. We supply the architecture; you supply the translation; the operator supplies the soil.
    ```
    Human-facing paragraph: identical to other Grove Tier A pages ("the canonical documents referenced across Grove are open under CC BY 4.0...").
11. **Footer** — match site footer from /standards/002 verbatim.

### Step 4 — Generate PDF at `research/knowledge-polarity/polarity-hypothesis.pdf`

Use the `pdf` skill (`/mnt/skills/public/pdf/SKILL.md`) or the `write_pdf` tool.

Input: the markdown source at `sprints/polarity-paper-v1/polarity-paper-source.md`.

Output: `research/knowledge-polarity/polarity-hypothesis.pdf`.

Requirements:
- Professional typesetting — academic paper style, serif body font, proper spacing
- LaTeX math rendered correctly (MathJax or KaTeX during conversion)
- Mermaid figures rendered (Figure 1 and Figure 3) — if conversion tooling doesn't support Mermaid, fall back to the ASCII/SVG alternatives
- Figure 2 ASCII chart rendered as monospace
- References section formatted academically
- Page numbers
- Title page with full byline and version label
- PDF metadata set: Title, Author ("James Calhoun"), Subject ("Knowledge Polarity — Position Paper"), Keywords (same 12), Creator ("The Grove Foundation")

If rendering the PDF surfaces issues that would make it ship in a degraded state, FLAG in Step 7 report-back rather than ship broken PDF. A high-quality HTML ship with a follow-up PDF is acceptable; a low-quality PDF is not.

### Step 5 — Commit

```
git add research/knowledge-polarity/index.html research/knowledge-polarity/polarity-hypothesis.pdf sprints/polarity-paper-v1/
git commit -m "polarity-v1 phase-1: publish polarity hypothesis paper at /research/knowledge-polarity/ (ScholarlyArticle, PDF companion, full citation array)"
```

Capture SHA — `SHA_PHASE_1`.

### Step 6 — Push and deploy

```
git push origin master
npx vercel --prod --yes
```

Capture deployment URL.

### Step 7 — Report back

```
POLARITY-V1 PHASE 1 COMPLETE — PAPER LIVE

Commit:    <SHA_PHASE_1>   "polarity-v1 phase-1: publish polarity hypothesis paper..."
Push:      <git push summary>
Deploy:    <Vercel deployment URL>
Alias:     https://the-grove.ai (production)

Paper URL: https://the-grove.ai/research/knowledge-polarity/
PDF URL:   https://the-grove.ai/research/knowledge-polarity/polarity-hypothesis.pdf

Page state:
  Line count: <N>
  JSON-LD blocks: 3 (WebPage, BreadcrumbList, ScholarlyArticle)
  Citation array entries: <N> (should be ~40)
  Figures rendered: 3 (hydraulic/polarity comparison, phase transition sigmoid, grounding handshake)
  Math rendering: MathJax from CDN
  Head metadata: full Google Scholar citation_* set included

PDF state:
  Page count: <N>
  File size: <N KB>
  Math rendered: <yes/no/partial>
  Figures rendered: <yes/no/partial>
  Any rendering issues: <none | describe>

Voice/content adjustments made from source paper: <none preferred; list any if needed>

Eyes on glass for operator:
  [ ] Open https://the-grove.ai/research/knowledge-polarity/ — visual quality at Grove standard
  [ ] Abstract renders prominently, byline readable, version label visible
  [ ] Three figures render correctly (SVG preferred, Mermaid fallback if SVG unavailable)
  [ ] LaTeX math renders (K_A^D, Delta_AB^D, the main equation)
  [ ] Download PDF button works, PDF opens
  [ ] Composition surface at end of content, matches other Grove pages
  [ ] Mobile view — no horizontal scroll, math and figures readable
  [ ] Google Rich Results: https://search.google.com/test/rich-results?url=https%3A%2F%2Fthe-grove.ai%2Fresearch%2Fknowledge-polarity%2F
      — verify WebPage, BreadcrumbList, ScholarlyArticle all recognized; citation array is bonus (Google may or may not parse it as discrete entities)
  [ ] Google Scholar: paper should eventually index via citation_* meta (takes days to weeks; not immediately verifiable)

Next: operator announces. Fast-follow sprint adds llms.txt v3 entries and upstream cross-links (/standards/001, /002, /003, A&A, /lambda — each gets a one-line reference to polarity paper).
```

---

## Working discipline

- **Paper content is byte-identical to source.** No editorial adjustments to paper prose. If you find a typo, flag in report-back, do not silently fix.
- **Grove design system fidelity.** Reuse existing `:root` CSS tokens. No new colors, no new fonts.
- **ScholarlyArticle, not TechArticle.** This matters for Google Scholar indexing.
- **Full citation array.** Every reference in the bibliography becomes a structured citation entry. This is the biggest single win for cold-LLM composition. Do not abbreviate.
- **PDF quality over speed.** If the PDF would ship ugly, flag and let operator decide.
- **Push AND deploy in this phase.** Unlike prior sprints where push was deferred to batch, this one ships end-to-end. Paper needs to be live today.

## Acceptance criteria

- `research/knowledge-polarity/index.html` exists, renders cleanly in browser at production URL
- Paper prose byte-identical to `sprints/polarity-paper-v1/polarity-paper-source.md`
- All three JSON-LD blocks present, all valid JSON
- Full head metadata stack including Google Scholar citation_* set
- Citation array contains every reference from paper's bibliography (~40 entries)
- PDF companion at `research/knowledge-polarity/polarity-hypothesis.pdf` renders with math and figures, or flagged for follow-up
- Byline uses "James Calhoun, Founder, The Grove Foundation · Managing Director, Take Flight Advisors" with LinkedIn + the-grove.ai + takeflightadvisors.com links
- Composition surface identical in structure to other Grove pages, LM-facing paragraph uses the provided polarity-specific text
- Push and deploy both succeed
- Report-back format verbatim

---

**Fire.**
