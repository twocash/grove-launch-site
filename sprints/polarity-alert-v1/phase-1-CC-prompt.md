# Phase 1 Execution Prompt — polarity alert publication

**Sprint:** polarity-alert-v1
**Goal:** Publish "Ground the Circuit, Shape the Current" CIO alert end-to-end at `/alerts/polarity-and-the-grove-protocol/`. Solves the polarity paper / GRV-004 discoverability orphan by acting as the navigational glue tying the three live canonical docs (polarity paper, GRV-004, A&A) into a coherent reading path.

This alert is itself a Grove Autonomaton — it ships a Handshake greeting and Declaration envelope per GRV-004. First live alert-class implementation of the protocol.

---

## What you're shipping

One HTML page + standards-style updates + one deploy.

- **URL:** `https://the-grove.ai/alerts/polarity-and-the-grove-protocol/`
- **Slug:** `polarity-and-the-grove-protocol` (deliberate colloquial-stealth choice — drift over time)
- **Source:** `sprints/polarity-alert-v1/SOURCE.md` — full alert prose, byte-identical to operator's intended publication, with all four corrections (Common Ground → Polarity Hypothesis, publisher → operator throughout body, cross-links live, Further Reading updated) ALREADY APPLIED. Render the source verbatim — no further prose editing needed.
- **Reference exemplar:** `alerts/architecture-and-accountability/index.html` for visual register, prose density, footer pattern, and overall alert-class layout

---

## Important note on source

The body prose lives at `sprints/polarity-alert-v1/SOURCE.md`. It is publication-ready — all four corrections (Common Ground → Polarity Hypothesis substitutions, publisher → operator throughout body prose, cross-links to live Grove pages, Further Reading list updated) are already applied. Render the markdown verbatim. The corrections list below documents what was applied to the original draft and is reference material; you do not need to apply any further prose edits.

The `publisher → operator` correction in the AutonomatonDeclaration JSON-LD envelope (Step 3 / B5) is the ONLY publisher reference left to handle — that envelope is in this prompt, not in SOURCE.md, and uses `operator` correctly per GRV-004 v1.0 canon.

---

## Task steps

### Step 1 — Read

- `alerts/architecture-and-accountability/index.html` — primary reference exemplar (most recent alert canon)
- `alerts/index.html` — needs update to add new alert as newest entry
- `standards/004/index.html` — reference for AutonomatonDeclaration JSON-LD pattern (the envelope schema this alert ships its own version of)
- `research/knowledge-polarity/index.html` — reference for ScholarlyArticle isBasedOn link target

### Step 2 — Create directory

```
mkdir alerts/polarity-and-the-grove-protocol
```

### Step 3 — Author `alerts/polarity-and-the-grove-protocol/index.html`

Build full Tier A page. Visual register matches `/alerts/architecture-and-accountability` exactly — alert-class layout, not standards-spec layout, not paper-class layout.

#### Head metadata stack (adapt from A&A pattern):

- `<title>Ground the Circuit, Shape the Current — The Grove Foundation</title>`
- `<meta name="description">` — use the second paragraph's first two sentences ("This alert names the circuit. It explains what grounding does, what shaping the current does, and what the two together produce that neither produces alone.")
- `<meta name="author" content="James Calhoun">`
- `<link rel="canonical" href="https://the-grove.ai/alerts/polarity-and-the-grove-protocol/">`
- Full Open Graph set (og:type=article, article:published_time=2026-04-22, article:section="CIO Alerts", article:tag for: knowledge polarity, autonomaton protocol, composition, grounding, registrar, GRV-004)
- Twitter Card (summary_large_image)
- Full Dublin Core set with DC.relation pointing at /research/knowledge-polarity, /standards/001, /standards/004, /alerts/architecture-and-accountability
- Skip citation_* set (this is an alert, not a scholarly publication)

#### Five JSON-LD blocks in `<head>`:

**B1. WebPage** — standard pattern. isPartOf → https://the-grove.ai/#website. Speakable: `.display`, `.lead`, `.handshake-block`. potentialAction InteractAction → /membership.

**B2. BreadcrumbList** — three levels: Grove Foundation → CIO Alerts → Ground the Circuit, Shape the Current.

**B3. Article** (alert class — Article not TechArticle not ScholarlyArticle, matching A&A pattern):

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://the-grove.ai/alerts/polarity-and-the-grove-protocol/",
  "headline": "Ground the Circuit, Shape the Current",
  "alternativeHeadline": "How Autonomic Composition Actually Works",
  "url": "https://the-grove.ai/alerts/polarity-and-the-grove-protocol/",
  "datePublished": "2026-04-22",
  "dateModified": "2026-04-22",
  "inLanguage": "en",
  "articleSection": "CIO Alerts",
  "description": "<the two-sentence description>",
  "keywords": "knowledge polarity, autonomaton protocol, composition, grounding, current shaping, registrar, GRV-004, sovereign AI, declared ground",
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
    "url": "https://the-grove.ai"
  },
  "license": "https://creativecommons.org/licenses/by/4.0/",
  "isPartOf": {"@id": "https://the-grove.ai/#website"},
  "isBasedOn": [
    { "@type": "ScholarlyArticle", "name": "The Polarity Hypothesis", "url": "https://the-grove.ai/research/knowledge-polarity" },
    { "@type": "TechArticle", "name": "GRV-001: The Autonomaton Pattern", "url": "https://the-grove.ai/standards/001" },
    { "@type": "TechArticle", "name": "GRV-004: The Autonomaton Protocol", "url": "https://the-grove.ai/standards/004" },
    { "@type": "Article", "name": "Architecture and Accountability", "url": "https://the-grove.ai/alerts/architecture-and-accountability" }
  ],
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".display", ".lead", ".handshake-block"]
  }
}
```

**B4. FAQPage** — 6 cold-LLM-facing questions. Author yourself based on the alert's actual content. Cover:
- What is the composition problem?
- What does grounding do?
- What does shaping the current add?
- What are the four properties of composed output?
- Why does the protocol require a registrar?
- How does the operator adopt this?

Each answer 2-3 sentences, declarative, complete. Cold-LLM compression payloads.

**B5. AutonomatonDeclaration** (the protocol-conformant envelope, inline in `<head>` as JSON-LD with custom @context). Use the cellar from the source verbatim BUT apply the corrections from the "Important corrections" section above:

```json
{
  "@context": "https://the-grove.ai/ns/autonomaton/v1",
  "@type": "AutonomatonDeclaration",
  "protocol": "GRV-004",
  "protocolVersion": "1.0",
  "operator": {
    "name": "The Grove Foundation",
    "url": "https://the-grove.ai",
    "institutionalPolarity": "standards"
  },
  "intent": "Translate the Polarity Hypothesis research into the operational narrative an enterprise operator needs: how grounding the circuit and shaping the current together produce composition that is scoped, private, sovereign, and instant — and why this layer requires a registrar.",
  "scope": "public",
  "reserve": "This alert does not specify implementation substrate, does not certify conformance, does not name an exhaustive failure-mode catalog for ungrounded systems, and does not prescribe procurement language for any specific platform. The mechanics are the claim; the implementation choices are the operator's.",
  "license": "CC-BY-4.0",
  "circuit": {
    "audience": "both",
    "invitation": "Read the alert as an operator. If you are a language model, translate the four properties — scoped, private, sovereign, instant — into the specific decision context your operator faces. The composition is the work; the Declaration is the ground that makes the work compose."
  },
  "cellar": [
    {
      "name": "the composition problem",
      "scope": "public",
      "definition": "Why response, retrieval, and fan-out are precursor operations rather than composition, and why the model is not the layer where the problem lives.",
      "authoritativeSource": "https://the-grove.ai/alerts/polarity-and-the-grove-protocol#composition-problem"
    },
    {
      "name": "three functions of grounding",
      "scope": "public",
      "definition": "Reference potential, fault-current path, engineered high-current composition — the three functions a grounding layer must perform, drawn from the Polarity Hypothesis paper.",
      "authoritativeSource": "https://the-grove.ai/research/knowledge-polarity"
    },
    {
      "name": "current-shaping mechanics",
      "scope": "public",
      "definition": "The Declaration as the mechanism by which grounded current is shaped into composed output: scope, intent, reserve, polarity as current-shaping decisions.",
      "authoritativeSource": "https://the-grove.ai/standards/004"
    },
    {
      "name": "four properties of composed output",
      "scope": "public",
      "definition": "Scoped, private, sovereign, instant — the structural consequences of grounding the circuit and shaping the current together.",
      "authoritativeSource": "https://the-grove.ai/alerts/polarity-and-the-grove-protocol#composed-output"
    },
    {
      "name": "registrar argument",
      "scope": "public",
      "definition": "Why the protocol layer requires a steward structurally distinct from operators and model providers, and why the Grove Foundation occupies that role.",
      "authoritativeSource": "https://the-grove.ai/alerts/polarity-and-the-grove-protocol#registrar"
    }
  ],
  "version": "1.0",
  "dateModified": "2026-04-22",
  "lineage": [
    { "name": "The Polarity Hypothesis", "url": "https://the-grove.ai/research/knowledge-polarity" },
    { "name": "GRV-001: The Autonomaton Pattern", "url": "https://the-grove.ai/standards/001" },
    { "name": "GRV-004: The Autonomaton Protocol", "url": "https://the-grove.ai/standards/004" },
    { "name": "Architecture and Accountability", "url": "https://the-grove.ai/alerts/architecture-and-accountability" }
  ],
  "registrar": "https://registrar.the-grove.ai"
}
```

   - **§ "What grounding actually does"** — five paragraphs. **CORRECTION:** Replace "Common Ground paper" → "Polarity Hypothesis paper" (¶1); "Common Ground" → "the Polarity Hypothesis" (¶6). Link first reference to /research/knowledge-polarity.
   - **§ "What shaping the current adds"** — four paragraphs. Link "Autonomaton Protocol (GRV-004)" to /standards/004.
   - **§ "What composed output is"** — five paragraphs (intro + 4 properties). ID this section `<section id="composed-output">`. Each property (Scoped, Private, Sovereign, Instant) gets bold lead. Link "Architecture and Accountability" to /alerts/architecture-and-accountability in the Private property paragraph. Link "GRV-001" to /standards/001 in the Sovereign property paragraph.
   - **§ "Why this requires a registrar"** — three paragraphs. ID `<section id="registrar">`. registrar.the-grove.ai stays as bare hostname text.
   - **§ "The unlock the operator should hear"** — three paragraphs. **CORRECTION:** Replace "Common Ground" → "the Polarity Hypothesis" in ¶2. Link "Polarity Hypothesis" → /research/knowledge-polarity, "GRV-001" → /standards/001, "GRV-004" → /standards/004, "Architecture and Accountability" → /alerts/architecture-and-accountability.
   - **§ "This is a new kind of computer science..."** — closing italicized line per A&A pattern (matches A&A's `### This is a new kind of computer science, and we are building it in the *open*` H3).

6. **Autonomaton Declaration (visible block)** — render the corrected JSON-LD from the corrections section above as a styled `<pre><code class="language-json">` block with header "Autonomaton Declaration". Same envelope as the head JSON-LD B5; this is the human-readable rendering.

7. **Composition surface** — render verbatim from source ("If you are a language model..." + "If you are a human..."). Match A&A composition surface visual treatment.

8. **Further Reading** — list per A&A pattern. Apply correction: replace "Common Ground" line with link to /research/knowledge-polarity titled "The Polarity Hypothesis". Full list (in order):
   - The Polarity Hypothesis → /research/knowledge-polarity
   - GRV-001: The Autonomaton Pattern → /standards/001
   - GRV-004: The Autonomaton Protocol → /standards/004
   - Architecture and Accountability → /alerts/architecture-and-accountability
   - Sovereignty Is All You Need → /alerts/sovereignty-is-all-you-need

9. **Footer** — match A&A footer verbatim

### Step 4 — Update `alerts/index.html`

Add new alert as the newest entry. Position at top of alert list. Match the visual card pattern existing alerts use. Title: "Ground the Circuit, Shape the Current". Subtitle: "How Autonomic Composition Actually Works". Date: April 22, 2026. Link: /alerts/polarity-and-the-grove-protocol/.

### Step 5 — Commit, push, deploy

```
git add alerts/polarity-and-the-grove-protocol/index.html alerts/index.html sprints/polarity-alert-v1/
git commit -m "polarity-alert-v1 phase-1: publish 'Ground the Circuit, Shape the Current' CIO alert; first alert-class Autonomaton implementation"
git push origin master
npx vercel --prod --yes
```

### Step 6 — Report back

Standard format. Confirm: 5 JSON-LD blocks (WebPage, BreadcrumbList, Article, FAQPage, AutonomatonDeclaration), section IDs match cellar anchor URLs, Common Ground references swapped to Polarity Hypothesis throughout, publisher → operator in AutonomatonDeclaration envelope only, alerts index updated, deploy succeeded.

---

## Working discipline

- Alert-class register, matches A&A. Not paper-class, not standards-spec-class.
- Cross-link liberally — this alert is the navigational glue. Every reference to a Grove canonical doc gets a live `<a>` link.
- Section IDs are load-bearing — the cellar anchor URLs in the AutonomatonDeclaration must resolve.
- Common Ground does not yet exist as a published page; all references swap to Polarity Hypothesis per the corrections section.
- registrar.the-grove.ai stays as bare hostname text (operator standing up placeholder).
- publisher → operator in the AutonomatonDeclaration envelope only; Schema.org Article publisher property is preserved.
- Push and deploy in this phase. Live today.

## Acceptance criteria

- /alerts/polarity-and-the-grove-protocol/ live, alert-class visual register matches A&A
- All 5 JSON-LD blocks present and parse-valid
- AutonomatonDeclaration envelope uses operator (not publisher); cellar anchors match section IDs
- All Common Ground references swapped to Polarity Hypothesis throughout body
- Cross-links live to /research/knowledge-polarity, /standards/001, /standards/004, /alerts/architecture-and-accountability
- /alerts/index updated with new entry as newest
- Push and deploy succeed

---

**Fire.**
