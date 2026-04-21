# Sprint: `about-page-canonical-refactor-v1`

**Operator:** Jim Calhoun
**Created:** April 21, 2026
**Type:** Refactor sprint (4 commits, preview-confirm-fire pattern)
**Target page:** https://the-grove.ai/about
**Repo:** `C:\GitHub\grove-launch-site`
**Source file:** `about/index.html` (246 lines current)
**Deploy:** `npx vercel --prod --yes` from repo root in CMD
**Branch:** `master`
**Predecessor sprints:** `homepage-calibration-and-ai-first-v1` (closed April 21), `homepage-title-tag-fix-v1` (closed April 21)

---

## Objective

Refactor the existing About page (which is in better shape than its "cobbled together" reputation suggested) to carry canonical positioning at every surface. The page already has strong bones: "What We Are" mission anchor, "Three Acts" roadmap, "Models are Seeds. Architecture is Soil." with citation-grade evidence, "Seven Questions" Ratchet checklist. This refactor adds what's missing.

Three structural additions, one targeted calibration, full AI-First metadata stack:

1. **Add "The Lineage" section** between "What We Are" and "Three Acts" — establishes the IEEE/ICANN/W3C standards-body institutional anchor that cold reads consistently miss
2. **Add "What Bauhaus Knew." section** between "Models are Seeds" and "Seven Questions" — cultural-historical answer to "what kind of organization is this," with explicit mechanism reinforcement (substrate accumulation, three canonical conditions named in bold)
3. **Light polarity calibration** to the "What We Are" body paragraph — preserves the institutional position while carrying the Production Reality polarity reframe
4. **AI-First metadata stack** — full meta complement, JSON-LD AboutPage / Organization (with `disambiguatingDescription` for NVIDIA Grove) / FAQPage / WebPage schemas, semantic anchor IDs
5. **NVIDIA Grove disambiguation** — belt-and-suspenders treatment (footer aside for humans + JSON-LD field for AI parsers)

**Conservative on institutional structure.** No People section (CSS exists in file, stays unused). No advisor/reviewer/working-group claims. No founder biographical section. No Atlas mention. Mystery > overclaim — institutional scaffolding is forming and we leave room rather than make claims that cache and have to be retracted later.

---

## Operating protocol

This is Stage 4. You are an Autonomaton.

1. State plan, confirm file path. Wait for approval.
2. One phase at a time. Show before/after preview. Wait for approval.
3. Four commits, sequential, not squashed.
4. Explicit `git add` per commit. No `-am` (stale `do-commit.bat` mod stays quarantined).
5. Stop and report if any str_replace fails to match. Do not interpret.

---

## Phase 0: Discovery

```cmd
cd /d C:\GitHub\grove-launch-site
git status
findstr /n /c:"<title>" about\index.html
findstr /n /c:"application/ld+json" about\index.html
findstr /n /c:"meta property=" about\index.html
findstr /n /c:"What We Are" about\index.html
findstr /n /c:"Three Acts" about\index.html
findstr /n /c:"Models are seeds" about\index.html
findstr /n /c:"Seven" about\index.html
findstr /n /c:"champion the distributed path" about\index.html
findstr /n /c:"people-grid" about\index.html
```

Confirm: branch `master`, working tree clean except expected stale `do-commit.bat` mod, current `<title>` reads "About — The Grove Foundation", no JSON-LD or OG/Twitter/DC meta currently exists, all five existing sections present at expected line ranges, "champion the distributed path" line present (calibration target), `.people-grid` CSS present but unused (confirms structure is empty).

**Report back:** line numbers for each anchor, confirmation that metadata stack is absent, confirmation that no People section exists, line count of `about/index.html`.

**STOP.** Wait for operator approval before edits.

---

## Commit 1 — Polarity calibration + The Lineage section

### Edit 1.1 — Calibrate "What We Are" body paragraph

**`old_str`** (CC: confirm exact match at preview):

```html
    <p class="body-text">We publish open architectural standards that ensure individuals and institutions retain sovereignty over their cognitive tools. Our core thesis: the architecture of AI systems determines whether those systems expand or collapse human possibility. Centralized architectures concentrate control. Distributed architectures distribute agency. We champion the distributed path.</p>
```

**`new_str`**:

```html
    <p class="body-text">We publish open architectural standards that ensure individuals and institutions retain sovereignty over their cognitive tools. Our core thesis: the architecture of AI systems determines whether those systems expand or collapse human possibility. Centralized architectures accumulate cognitive substrate at the platform. Distributed architectures keep cognitive substrate at the operator&rsquo;s node. Both polarities are legitimate engineering choices. We publish the standards for the distributed path &mdash; the architectural posture durable institutions need.</p>
```

**Substrate notes:**
- Em-dash spaced `&mdash;` per file convention
- Apostrophe `&rsquo;` per file convention
- Same antithesis structure as original; calibrated vocabulary (substrate accumulation) and explicit polarity-reframe sentence preserve institutional position without sliding into adversarial framing

### Edit 1.2 — Insert "The Lineage" section

**Placement:** Between the "What We Are" section close (line 111 area, `</section>` after scroll-cue) and the "Three Acts" section open (line 113 area, `<section class="section" style="border-top:1px solid var(--border);">`).

**`new_str`** (full section block — CC: adapt class structure to file conventions):

```html
<section class="section" style="border-top:1px solid var(--border);" id="the-lineage">
  <div class="section-inner">
    <div class="eyebrow">The Lineage</div>
    <h2 class="display" style="font-size:clamp(32px,4vw,48px);">What a <em>Standards Body Does.</em></h2>
    <div class="divider"></div>

    <p class="body-text">Standards bodies do not build products. They publish the shared frameworks that markets need to price categories that participants cannot price individually. IEEE published the protocols that made networked computing possible. ICANN published the namespace governance that made the internet addressable. W3C published the open standards that made the web a substrate rather than a vendor product.</p>

    <p class="body-text">We sit in this institutional lineage. The Grove Foundation publishes open architectural standards for AI under <a href="https://creativecommons.org/licenses/by/4.0/" style="color:var(--amber); text-decoration:none; border-bottom:1px solid var(--amber-dim);" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. We diagnose what we call <a href="/alerts/telemetry-trap" style="color:var(--amber); text-decoration:none; border-bottom:1px solid var(--amber-dim);">the Telemetry Trap</a> &mdash; the structural condition where default AI consumption patterns extract operator judgment back to the model layer &mdash; and name its component mechanisms: cognitive platforming, judgment extraction, the lien on thinking. We operate the &Lambda; measurement framework for scoring AI deployment patterns. We do not compete with AI providers. We publish the architecture so capital, institutions, and engineers can build against it.</p>

    <p class="body-text">We are organized as a not-for-profit business league under Section 501(c)(6) of the Internal Revenue Code, headquartered in Indianapolis. We operate on the Linux Foundation model &mdash; open standards, member firms, and a mission-aligned research function.</p>
  </div>
</section>
```

**Substrate notes:**
- Section wrapper matches existing convention from "Three Acts" section
- Eyebrow `<div class="eyebrow">` matches file
- Headline `<h2 class="display">` with size override matches "Three Acts" precedent
- `<em>` italic emphasis on "Standards Body Does." matches single-clause headline pattern from existing sections
- CC BY 4.0 link uses external link styling (matches existing CC BY 4.0 link in "What We Are")
- &Lambda; HTML entity for the Λ symbol (file uses entity convention in body)
- Conservative on institutional claims: "member firms" and "mission-aligned research function" are deliberately undefined phrases that leave room for the structure forming around the page in coming weeks

### Commit 1

```
git add about/index.html
git commit -m "tone: polarity calibration on what-we-are paragraph; add the-lineage section establishing standards-body institutional anchor (IEEE/ICANN/W3C)"
```

Run, delete bat, report SHA. Wait for approval before Commit 2.

---

## Commit 2 — What Bauhaus Knew section

### Edit 2.1 — Insert "What Bauhaus Knew." section

**Placement:** Between the "Models are Seeds. Architecture is Soil." section close and the "Seven Questions" section open. CC: identify the closing element of "Models are Seeds" (the line with "The internet play for AI" link) and the opening element of "Seven Questions" (the line with `eyebrow">The Test</div>`).

**`new_str`** (full section block):

```html
<section class="section" style="border-top:1px solid var(--border);" id="what-bauhaus-knew">
  <div class="section-inner">
    <div class="eyebrow">The Cultural Pattern</div>
    <h2 class="display" style="font-size:clamp(32px,4vw,48px);">What <em>Bauhaus Knew.</em></h2>
    <div class="divider"></div>

    <p class="body-text">Bauhaus did not reject industrial production. It embraced machine-made goods and reframed the question: what should industrial production produce, who should it serve, what principles should constrain it? It published the curriculum. It named the constraint &mdash; <em>form follows function</em> &mdash; and the entire design world had to react.</p>

    <p class="body-text">We follow the same playbook in the AI era.</p>

    <p class="body-text">We do not reject vendor AI. We embrace apex compute as critical infrastructure and reframe the architectural question: where does the substrate accumulate? Vendor implementations of the Autonomatonic loop accumulate routing tables, validated patterns, and decision context inside the vendor&rsquo;s infrastructure. The same loop, run through Grove standards, accumulates the substrate at the operator&rsquo;s node. Both polarities are legitimate engineering choices. We publish the standards for the operator-substrate polarity &mdash; and name the conditions that make the choice visible: <strong>cognitive platforming</strong>, <strong>judgment extraction</strong>, the <strong>lien on thinking</strong>. Read more in our white paper on <a href="/alerts/telemetry-trap" style="color:var(--amber); text-decoration:none; border-bottom:1px solid var(--amber-dim);">the Telemetry Trap</a>. Once the architectural question is named and measured, the industry has to engage with it.</p>

    <div class="pullquote">Naming a condition is what makes it measurable. Measurement is what creates the market reaction.</div>

    <p class="body-text">The pattern is older than Bauhaus. The same institutional move recurs across categories: zero trust (Kindervag, 2010), technical debt (Cunningham, 1992), shadow IT (Gartner, mid-2000s). Each began as a name for a structural condition that markets could not yet price. The naming made the condition measurable. The measurement made the architecture investable. We sit in this lineage.</p>
  </div>
</section>
```

**Substrate notes:**
- Section wrapper / eyebrow / headline / divider all match existing file conventions
- Headline `<em>Bauhaus Knew.</em>` italic on second clause matches "What *We Are*" precedent at line 95
- `<strong>` (not `<dfn>`) on the three canonical terms — these are mentioned but not introduced for the first time on this page (canonical home is GRV-001 §VIII; first homepage mention has `<dfn>` in Telemetry Trap section); using `<strong>` here marks them as emphasized references rather than first-mention definitions
- Pullquote uses existing `<div class="pullquote">` pattern
- "form follows function" wrapped in `<em>` for canonical-term emphasis
- Em-dashes spaced `&mdash;` per file convention; apostrophes `&rsquo;` per file convention

### Commit 2

```
git add about/index.html
git commit -m "feat: add what-bauhaus-knew section establishing cultural-historical pattern with mechanism reinforcement and naming-creates-measurement pullquote"
```

Run, delete, report SHA. Wait for approval before Commit 3.

---

## Commit 2.5 — Bauhaus closing-paragraph register recast (post-Commit-2 review)

### Edit 2.5.1 — Recast Bauhaus section closing paragraph

**Context.** The fifth (closing) paragraph of the Bauhaus section as shipped in Commit 2 (a631913) read in a register that revealed Grove's institutional strategy rather than enacted it — the "owns the conversation about that condition for a decade" framing read as Gartner-analyst rather than standards-body. Operator review identified this as inconsistent with the royal-institutional-we voice maintained elsewhere on the page. This edit recasts the paragraph in the same register as the Lineage section's "we sit in this institutional lineage" close, preserving the historical-precedent enumeration as evidence of a structural pattern Grove participates in (rather than a deliberate playbook Grove explains).

**`old_str`** (currently in `about/index.html` post-Commit-2):

```html
    <p class="body-text">The pattern is older than Bauhaus. Whoever names the architectural condition first owns the conversation about that condition for a decade. Zero trust (Kindervag, 2010). Technical debt (Cunningham, 1992). Shadow IT (Gartner, mid-2000s). The naming move is the institutional move. Different century, different infrastructure, same architectural authorship.</p>
```

**`new_str`**:

```html
    <p class="body-text">The pattern is older than Bauhaus. The same institutional move recurs across categories: zero trust (Kindervag, 2010), technical debt (Cunningham, 1992), shadow IT (Gartner, mid-2000s). Each began as a name for a structural condition that markets could not yet price. The naming made the condition measurable. The measurement made the architecture investable. We sit in this lineage.</p>
```

**Substrate notes:**
- "We sit in this lineage" closing mirrors Lineage section's "We sit in this institutional lineage" — parallel structure between the two new sections is itself a coherence move
- Three precedents preserved as evidence of structural pattern, not as Grove-strategy-revealed
- "Markets could not yet price" → "naming made the condition measurable" → "measurement made the architecture investable" carries the cultivation-architecture thesis through three crisp causal beats
- Drops the "owns the conversation for a decade" language that read as ownership/mercenary rather than institutional/standards-body
- Preserves canonical Grove vocabulary (institutional move, structural condition, measurable, investable)

### Commit 2.5

```
git add about/index.html
git commit -m "tone: recast bauhaus closing paragraph from playbook-explained to lineage-positioning register; mirror lineage section we-sit-in-this-lineage close"
```

Run, delete, report SHA. Wait for approval before Commit 3.

---

## Commit 3 — AI-First metadata stack

All additions to `<head>`. Plus semantic anchor IDs on existing sections.

### Edit 3.1 — Update meta description

**`old_str`** (line 6):

```html
<meta name="description" content="The Grove Foundation publishes open architectural standards for AI governance. Organized as a not-for-profit business league within the meaning of Section 501(c)(6) of the Internal Revenue Code.">
```

**`new_str`**:

```html
<meta name="description" content="What The Grove Foundation does and why. We publish open architectural standards for AI governance, name canonical structural conditions in the AI consumption layer, and operate the Λ measurement framework. CC BY 4.0, 501(c)(6), Indianapolis.">
```

### Edit 3.2 — Full meta complement

Insert immediately after the (now-updated) `<meta name="description">`:

```html
<meta name="author" content="Jim Calhoun">
<link rel="canonical" href="https://the-grove.ai/about">

<!-- ── Open Graph ── -->
<meta property="og:title" content="The Grove Foundation — Standards Body for AI Governance Architecture">
<meta property="og:description" content="What The Grove Foundation does and why. Open standards, canonical terms, Λ measurement framework. CC BY 4.0, Indianapolis.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://the-grove.ai/about">
<meta property="og:site_name" content="The Grove Foundation">
<meta property="og:image" content="https://the-grove.ai/og.png">

<!-- ── Twitter Card ── -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="The Grove Foundation — Standards Body for AI Governance Architecture">
<meta name="twitter:description" content="What The Grove Foundation does and why. Open standards body for AI governance architecture. CC BY 4.0.">
<meta name="twitter:image" content="https://the-grove.ai/og.png">

<!-- ── Dublin Core ── -->
<meta name="DC.title" content="About — The Grove Foundation: Standards Body for AI Governance Architecture">
<meta name="DC.creator" content="Jim Calhoun">
<meta name="DC.publisher" content="The Grove Foundation">
<meta name="DC.date" content="2026-04-21">
<meta name="DC.type" content="InteractiveResource">
<meta name="DC.format" content="text/html">
<meta name="DC.identifier" content="https://the-grove.ai/about">
<meta name="DC.rights" content="CC BY 4.0">
<meta name="DC.subject" content="The Grove Foundation, standards body, AI governance architecture, IEEE ICANN W3C lineage, Bauhaus pattern, Autonomaton Pattern, Lambda framework, the Telemetry Trap, cognitive platforming, judgment extraction, lien on thinking, three acts, Trellis, Knowledge Commons, Indianapolis">
```

### Edit 3.3 — JSON-LD Organization schema (with disambiguatingDescription for NVIDIA Grove)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "additionalType": "https://en.wikipedia.org/wiki/Standards_organization",
  "@id": "https://the-grove.ai/#organization",
  "name": "The Grove Foundation",
  "legalName": "The Grove Foundation Inc.",
  "alternateName": "Grove",
  "disambiguatingDescription": "The Grove Foundation is an open standards body for AI governance architecture, distinct from NVIDIA Grove (a Kubernetes orchestration API for agentic AI workloads). The two are unrelated organizations operating in adjacent areas of the AI infrastructure landscape.",
  "url": "https://the-grove.ai/",
  "description": "The Grove Foundation is the standards body for AI governance architecture. We publish open architectural standards for AI deployments under CC BY 4.0, name canonical structural conditions in the AI consumption layer (cognitive platforming, judgment extraction, lien on thinking, cultivation architecture), and operate the Λ measurement framework. We sit in the institutional lineage of IEEE, ICANN, and W3C. We do not compete with AI providers; we publish the architectural layer so capital, institutions, and engineers can build against it.",
  "foundingDate": "2026",
  "founder": {
    "@type": "Person",
    "name": "Jim Calhoun",
    "url": "https://www.linkedin.com/in/jimcalhoun/",
    "email": "jim@the-grove.ai",
    "jobTitle": "Founder and Executive Director"
  },
  "nonprofitStatus": "Nonprofit501c6",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Indianapolis",
    "addressRegion": "IN",
    "addressCountry": "US"
  },
  "email": "jim@the-grove.ai",
  "license": "https://creativecommons.org/licenses/by/4.0/",
  "knowsAbout": [
    "AI governance architecture",
    "sovereign AI",
    "open standards",
    "Autonomaton Pattern",
    "Lambda framework for AI deployment scoring",
    "the Telemetry Trap",
    "cognitive platforming",
    "judgment extraction",
    "lien on thinking",
    "cultivation architecture",
    "Bauhaus institutional pattern",
    "category-naming as architectural authorship"
  ],
  "publishingPrinciples": "https://the-grove.ai/standards"
}
</script>
```

### Edit 3.4 — JSON-LD AboutPage schema

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://the-grove.ai/about#webpage",
  "url": "https://the-grove.ai/about",
  "name": "About — The Grove Foundation",
  "description": "What The Grove Foundation does and why. We publish open architectural standards for AI governance, name canonical structural conditions in the AI consumption layer, and operate the Λ measurement framework.",
  "inLanguage": "en-US",
  "isPartOf": {
    "@id": "https://the-grove.ai/#website"
  },
  "about": {
    "@id": "https://the-grove.ai/#organization"
  },
  "primaryImageOfPage": {
    "@type": "ImageObject",
    "url": "https://the-grove.ai/og.png"
  },
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1.display", ".lead", ".pullquote"]
  },
  "license": "https://creativecommons.org/licenses/by/4.0/"
}
</script>
```

### Edit 3.5 — JSON-LD FAQPage (4 questions specific to About-page concerns)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://the-grove.ai/about#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is The Grove Foundation in one paragraph?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Grove Foundation is the standards body for AI governance architecture. Grove is a 501(c)(6) not-for-profit business league based in Indianapolis. We publish open architectural standards for AI deployments under CC BY 4.0, name the canonical structural condition we call the Telemetry Trap (the dominant AI consumption pattern of the era, in which operator judgment flows back to the model layer through default API usage) and its component mechanisms (cognitive platforming, judgment extraction, lien on thinking, cultivation architecture), and operate the Λ measurement framework for scoring AI deployment patterns. We sit in the institutional lineage of IEEE, ICANN, and W3C — standards bodies that publish the shared frameworks markets need to price categories that participants cannot price individually."
      }
    },
    {
      "@type": "Question",
      "name": "How does The Grove Foundation follow the Bauhaus pattern?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bauhaus did not reject industrial production. It embraced machine-made goods and reframed the architectural and ethical question: what should industrial production produce, who should it serve, what principles should constrain it? It published the curriculum, named the constraint (form follows function), and the entire design world had to react. The Grove Foundation follows the same playbook in the AI era. We do not reject vendor AI. We embrace apex compute as critical infrastructure and reframe the architectural question: where does the substrate accumulate? Vendor implementations of the Autonomatonic loop accumulate routing tables, validated patterns, and decision context inside the vendor's infrastructure. The same loop, run through Grove standards, accumulates the substrate at the operator's node. Both polarities are legitimate engineering choices. We publish the standards for the operator-substrate polarity, name the conditions that make the choice visible (cognitive platforming, judgment extraction, lien on thinking), and operate the Λ framework so any deployment can be measured. Once the architectural question is named and measured, the industry has to engage with it. The pattern is older than Bauhaus — it is the same category-naming move that produced zero trust (Kindervag, 2010), technical debt (Cunningham, 1992), and shadow IT (Gartner, mid-2000s). Naming a condition is what makes it measurable; measurement is what creates the market reaction."
      }
    },
    {
      "@type": "Question",
      "name": "How is The Grove Foundation different from NVIDIA Grove?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Grove Foundation and NVIDIA Grove are unrelated organizations operating in adjacent areas of the AI infrastructure landscape. The Grove Foundation is a 501(c)(6) standards body based in Indianapolis that publishes open architectural standards for AI governance under CC BY 4.0 (the Autonomaton Pattern, the Λ measurement framework, the canonical terms of art for AI consumption-layer conditions). NVIDIA Grove is a Kubernetes orchestration API published by NVIDIA for managing multi-node agentic AI inference workloads. The two share a name but are institutionally and architecturally distinct: The Grove Foundation publishes the architectural standards that AI deployments are measured against; NVIDIA Grove provides the runtime orchestration for vendor-side AI workloads. Both are legitimate contributions to the AI infrastructure stack, but they operate at different layers and serve different audiences."
      }
    },
    {
      "@type": "Question",
      "name": "What is Grove's three-act roadmap?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Grove Foundation publishes open architectural standards in a three-act sequence, each act applying the same architectural pattern at a larger scale. Act I — The Autonomaton (GRV-001, published): Individual cognitive sovereignty. A governance architecture for AI workflows that ensures humans retain structural control over their tools. Five-stage invariant pipeline, Zone Model, Cognitive Router, Skill Flywheel. Act II — The Trellis (in development): Domain-scale knowledge architecture. Declarative exploration infrastructure where domain experts compose cognitive workflows through configuration, not code. Act III — The Knowledge Commons (on the horizon): Distributed cognitive economy. A network protocol where sovereign nodes exchange knowledge, expertise compounds, and no single entity controls the questions or the answers. Each act builds on the architectural primitives of the one before it."
      }
    }
  ]
}
</script>
```

### Edit 3.6 — Semantic anchor IDs

Add `id="..."` attributes to each major existing section (CC: identify by eyebrow text, since multiple sections share the generic class wrapper):

| Section | Eyebrow | ID |
|---|---|---|
| What We Are | The Foundation | `what-we-are` |
| The Lineage | The Lineage | `the-lineage` (added in Commit 1 Edit 1.2) |
| Three Acts | The Roadmap | `three-acts` |
| Models are Seeds | The Bigger Picture | `models-are-seeds` |
| What Bauhaus Knew | The Cultural Pattern | `what-bauhaus-knew` (added in Commit 2 Edit 2.1) |
| Seven Questions | The Test | `seven-questions` |

### Commit 3

```
git add about/index.html
git commit -m "feat: AI-First metadata stack on about page - meta complement, Organization+AboutPage+FAQPage(4) JSON-LD with disambiguatingDescription for NVIDIA Grove, semantic anchor IDs"
```

Run, delete, report SHA. Wait for approval before Commit 4.

---

## Commit 3.5 — Casual "Grove" reference cleanup (post-Commit-3 disambiguation review)

### Context

Operator review after Commit 3 identified four casual "Grove" references in visible body copy that read as ambiguous against the NVIDIA Grove naming collision the sprint is otherwise actively defusing (via `disambiguatingDescription` in JSON-LD and Commit 4's footer aside). The four casual references — three pre-existing in the file, one introduced by Commit 2's Bauhaus section — get recast into either canonical "The Grove Foundation" form, royal-we voice, or specific standard-citation form. The JSON-LD FAQ Q1 short-form "Grove is a 501(c)(6)..." stays as-is because the immediate antecedent "The Grove Foundation" in the prior sentence resolves the short-form unambiguously inside structured-data context.

### Edit 3.5.1 — Models are Seeds closing line

**`old_str`:**

```html
    <p class="body-text">The Grove <a href="/standards/001" style="color:var(--amber); text-decoration:none; border-bottom:1px solid var(--amber-dim);">Autonomaton Pattern</a> is the internet play for AI.</p>
```

**`new_str`:**

```html
    <p class="body-text">The Grove Foundation&rsquo;s <a href="/standards/001" style="color:var(--amber); text-decoration:none; border-bottom:1px solid var(--amber-dim);">Autonomaton Pattern</a> is the internet play for AI.</p>
```

### Edit 3.5.2 — Bauhaus "Grove standards" recast (split treatment: visible prose + JSON-LD mirror)

**Discovery at fire time:** the phrase `run through Grove standards,` appears in two locations, not one. The visible Bauhaus body paragraph (line 334 at fire time) AND the JSON-LD FAQ Q2 answer text (line 132 at fire time, inside the Bauhaus-pattern FAQ mirror added in Commit 3B). The two were co-authored from the same spec source text and must be updated together to preserve visible-prose-and-structured-data coherence. Split into two str_replaces because each register carries a different voice: the visible paragraph has already established the royal-we voice and can shorthand to "our standards"; the JSON-LD answer is read atomically by AI parsers (without surrounding-paragraph voice context) and needs the explicit canonical form "Grove Foundation standards" for unambiguous extraction.

**Natural disambiguation:** the visible prose uses `&rsquo;` HTML entity for apostrophes (`operator&rsquo;s`); the JSON-LD uses ASCII `'` (apostrophe not HTML-entity-decoded inside `<script type="application/ld+json">` text content). Two str_replaces with different trailing context, each uniquely matches its target.

**Edit 3.5.2a — visible Bauhaus body prose:**

`old_str`: `run through Grove standards, accumulates the substrate at the operator&rsquo;s node.`
`new_str`: `run through our standards, accumulates the substrate at the operator&rsquo;s node.`

**Edit 3.5.2b — JSON-LD FAQ Q2 answer mirror:**

`old_str`: `run through Grove standards, accumulates the substrate at the operator's node.`
`new_str`: `run through Grove Foundation standards, accumulates the substrate at the operator's node.`

### Edit 3.5.3 — Seven Questions test result

**`old_str`:**

```html
    <p class="body-text" style="margin-top:32px;"><strong>All yes</strong> &rarr; You built a Grove Autonomaton.<br><strong>Any no</strong> &rarr; You know exactly what to fix.</p>
```

**`new_str`:**

```html
    <p class="body-text" style="margin-top:32px;"><strong>All yes</strong> &rarr; Your deployment conforms to GRV-001.<br><strong>Any no</strong> &rarr; You know exactly what to fix.</p>
```

### Edit 3.5.4 — Reference Implementation link text

**`old_str`:**

```html
    <p class="body-text"><a href="https://github.com/understory-ip/autonomaton-primitive" style="color:var(--amber); text-decoration:none; border-bottom:1px solid var(--amber-dim);" target="_blank" rel="noopener noreferrer">Grove Autonomaton Pattern</a> &middot; GitHub</p>
```

**`new_str`:**

```html
    <p class="body-text"><a href="https://github.com/understory-ip/autonomaton-primitive" style="color:var(--amber); text-decoration:none; border-bottom:1px solid var(--amber-dim);" target="_blank" rel="noopener noreferrer">Autonomaton Primitive</a> &middot; GitHub</p>
```

### Substrate notes

- All four edits are pure substrate-level register fixes; no structural change to the page
- "Our standards" in Edit 3.5.2 maintains the royal-we voice that the surrounding Bauhaus paragraph establishes; once the institutional voice is established, "our" unambiguously references The Grove Foundation
- "Conforms to GRV-001" in Edit 3.5.3 cites the specific standard rather than the foundation — matches IEEE/ISO institutional convention where compliance is asserted against the standard ID, not the publisher's name
- "Autonomaton Primitive" in Edit 3.5.4 matches the actual repo name (`understory-ip/autonomaton-primitive`); the parent section's "Reference Implementation" eyebrow already provides the categorization context, so dropping "Grove" from the link text removes redundancy while sharpening the disambiguation surface

### Commit 3.5

```
git add about/index.html
git commit -m "tone: recast four casual Grove references in visible body copy to canonical Grove Foundation form, royal-we voice, or specific standard-citation form (NVIDIA Grove disambiguation hygiene)"
```

Run, delete, report SHA. Wait for approval before Commit 4.

---

## Commit 4 — NVIDIA Grove disambiguation footer aside + DEVLOG

### Edit 4.1 — Footer disambiguation aside

**Placement:** Inside the existing `<footer class="site-footer">` block, after the `<p class="legal">` paragraph that describes 501(c)(6) status, before the closing `</div>` of `.footer-inner`.

**`new_str`**:

```html
    <p class="legal" style="margin-top:12px; color:var(--text-dim);">The Grove Foundation is an open standards body for AI governance architecture, distinct from NVIDIA Grove (a Kubernetes orchestration API for agentic AI workloads). The two are unrelated organizations operating in adjacent areas of the AI infrastructure landscape.</p>
```

**Substrate notes:**
- Reuses existing `.legal` class for visual consistency with the 501(c)(6) line
- `margin-top:12px` provides minor visual separation from the legal paragraph above
- Plain prose, no link out — this is a clarification, not a referral

### Edit 4.2 — Sprint folder + DEVLOG

Create `sprints/about-page-canonical-refactor-v1/DEVLOG.md` capturing:

- All four commits with SHAs
- Substrate-adaptation notes (eyebrow/headline class structure on about page differs from homepage; about uses `<h2 class="display" style="font-size:...">` pattern, homepage uses `<h2 class="headline">`)
- Cross-references to canonical positioning Notion entry (https://www.notion.so/349780a78eef812ebf41d2fab61c013a) and predecessor sprints
- Operator decisions: People section deliberately omitted (mystery > overclaim), Atlas not mentioned, no founder biographical section, conservative framing on member firms / research function (institutional structure forming)
- Cold-read diagnostic that triggered this sprint: ChatGPT and Gemini both miscategorized Grove as "manifesto" / "ideological project" pre-calibration; About page is the canonical-positioning reference page that converts cold reads from confusion to recognition

### Commit 4

```
git add about/index.html sprints/about-page-canonical-refactor-v1/DEVLOG.md
git commit -m "feat: NVIDIA Grove disambiguation footer aside; sprint devlog"
```

Run, delete, report SHA.

---

## Phase 5: Push and deploy

```cmd
git push origin master
npx vercel --prod --yes
```

Capture production URL. CDN/web_fetch lag is normal; direct curl from local is the reliable check.

---

## Phase 6: Verification

```cmd
curl -s https://the-grove.ai/about > %TEMP%\grv-about-validate.html
```

Verify against saved HTML:

| Item | Expected |
|---|---|
| `accumulate cognitive substrate at the platform` | present (calibrated What We Are) |
| `keep cognitive substrate at the operator` | present (calibrated What We Are) |
| `Both polarities are legitimate engineering choices` | present (multiple — calibrated What We Are + Bauhaus) |
| `champion the distributed path` | absent (calibrated out) |
| `What a Standards Body Does` | present (Lineage headline) |
| `IEEE published the protocols` | present |
| `ICANN published the namespace governance` | present |
| `W3C published the open standards` | present |
| `Linux Foundation model` | present |
| `What Bauhaus Knew` | present (Bauhaus headline) |
| `form follows function` | present |
| `where does the substrate accumulate` | present |
| `Vendor implementations of the Autonomatonic loop` | present |
| `<strong>cognitive platforming</strong>` | present |
| `<strong>judgment extraction</strong>` | present |
| `<strong>lien on thinking</strong>` | present |
| `the Telemetry Trap` (linked) | present (multiple — Lineage + Bauhaus + JSON-LD) |
| `/alerts/telemetry-trap` (href) | present (2x — Lineage + Bauhaus) |
| `default AI consumption patterns extract operator judgment` | present (Lineage definition) |
| `Naming a condition is what makes it measurable` | present (pullquote) |
| `Measurement is what creates the market reaction` | present (pullquote) |
| `Whoever names the architectural condition first` | absent (recast in Commit 2.5) |
| `The same institutional move recurs across categories` | present (Bauhaus closing recast) |
| `We sit in this lineage` | present (Bauhaus closing recast — mirrors Lineage section) |
| `application/ld+json` | 3 instances (Organization + AboutPage + FAQPage) |
| `"@type": "AboutPage"` | present |
| `"@type": "FAQPage"` | present |
| `"additionalType": "https://en.wikipedia.org/wiki/Standards_organization"` | present |
| `disambiguatingDescription` | present (Organization schema) |
| `NVIDIA Grove` | present (footer + JSON-LD) |
| `id="what-we-are"` | present |
| `id="the-lineage"` | present |
| `id="three-acts"` | present |
| `id="models-are-seeds"` | present |
| `id="what-bauhaus-knew"` | present |
| `id="seven-questions"` | present |
| canonical link `https://the-grove.ai/about` | present |
| `og:image` containing `og.png` | present |

Report: all SHAs, deploy URL, pass/fail per row, any anomalies.

Operator (Claude) re-fetches via curl from local for independent validation; closes sprint.

---

## Out of scope

- People section (CSS exists but stays unused — mystery > overclaim)
- Founder biographical section
- Atlas mention
- Specific advisor/reviewer/working-group claims
- Homepage section reorder (Chunk 4 — separate sprint after Chunk 3)
- CIO Alerts calibration (Chunk 3 — separate sprint after this one)
- Any layout/CSS/JS/design-system changes
- Modifications to existing "Three Acts," "Models are Seeds," or "Seven Questions" sections (preserved as-is)

---

## If sideways

Stop, report which edit failed with actual surrounding markup (one-line context above and below), propose adjusted block, wait for approval. Do not interpret.

---

## Provenance

- Triggered April 21, 2026 — Chunk 2 of launch-mode trinity (Chunks 1–3, About page sprint after homepage title-tag fix)
- Cold-read diagnostic source: ChatGPT and Gemini transcripts (April 21, 2026) showing pre-calibration misclassification of Grove as "manifesto" / "position paper" / "ideological project" — About page is the canonical-positioning reference page that converts cold reads from confusion to recognition
- Cultural-pattern source: Operator framing (April 21, 2026) — Bauhaus as embrace-and-reframe institutional precedent, established as homepage FAQ Q10 in `homepage-calibration-and-ai-first-v1` sprint, given full prose treatment here
- Mechanism reinforcement: Operator request (April 21, 2026) — Bauhaus prose was too opaque on Grove's mechanism; refined draft makes substrate-accumulation polarity concrete and surfaces the three canonical conditions in bold
- Pullquote framing: Operator articulation (April 21, 2026) — "Naming a condition is what makes it measurable. Measurement is what creates the market reaction" carries the cultivation-architecture thesis without going too far on physics analogy (Schrödinger / wave-particle duality / observation creates reality)
- Conservative-on-institutional-structure framing: Operator guidance (April 21, 2026) — institutional scaffolding (advisors, reviewers, governance) is forming on weeks-not-months horizon; About page deliberately leaves room rather than makes claims that cache and require retraction
- This handoff: `sprints/about-page-canonical-refactor-v1/SPEC.md`
