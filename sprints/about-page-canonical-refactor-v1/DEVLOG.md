# DEVLOG — about-page-canonical-refactor-v1

**Sprint ID:** about-page-canonical-refactor-v1
**Operator:** Jim Calhoun
**Executor:** Claude Code
**Date:** 2026-04-21
**Target page:** https://the-grove.ai/about
**Target file:** `about/index.html`
**Branch:** master (direct, no worktree — single-file scope, six sequential commits)

## Sprint arc

Refactor the About page to carry canonical positioning at every surface (visible prose, structured-data, meta stack). The page arrived with strong bones — "What We Are" mission anchor, "Three Acts" roadmap, "Models are Seeds. Architecture is Soil." with citation-grade evidence, "Seven Questions" Ratchet checklist — but was missing the institutional-lineage section (IEEE/ICANN/W3C), the cultural-historical pattern section (Bauhaus), the AI-First metadata stack, and the NVIDIA Grove disambiguation surfaces that cold-read diagnostics (ChatGPT and Gemini, 2026-04-21) had flagged as the largest pre-calibration gap. Two structural additions, one targeted calibration, full metadata stack, and NVIDIA Grove belt-and-suspenders disambiguation (footer aside for humans + JSON-LD `disambiguatingDescription` for AI parsers).

Conservative-on-institutional-structure discipline held throughout: no People section (CSS scaffolding stays unused), no advisor/reviewer/working-group claims, no founder biographical section, no Atlas mention. Mystery > overclaim — institutional scaffolding is forming on weeks-not-months horizon, and the About page deliberately leaves room rather than makes claims that cache and require retraction.

## Phase-by-phase adaptations

### Phase 1 — Commit 1: Polarity calibration + Lineage section (`a514f67`)

**Edit 1.1 — What We Are body paragraph (line 102).** Replaced "Centralized architectures concentrate control. Distributed architectures distribute agency. We champion the distributed path." (agency-language, adversarial-advocacy register) with substrate-language polarity frame: "Centralized architectures accumulate cognitive substrate at the platform. Distributed architectures keep cognitive substrate at the operator's node. Both polarities are legitimate engineering choices. We publish the standards for the distributed path — the architectural posture durable institutions need." Carries Production Reality polarity reframe into the About page institutional voice; preserves the antithesis structure of the original.

**Edit 1.2 — The Lineage section insertion (between What-We-Are and Three-Acts).** New section establishing IEEE/ICANN/W3C institutional lineage. Three body paragraphs: (1) standards-body concept ("Standards bodies do not build products. They publish the shared frameworks that markets need to price categories…"); (2) Grove's self-positioning within that lineage, with the Telemetry-Trap macro-frame reframe added at operator direction during preview — the three canonical conditions (cognitive platforming, judgment extraction, lien on thinking) are introduced as **component mechanisms of the Telemetry Trap** (linked to `/alerts/telemetry-trap`), not as a flat list; (3) organizational-form disclosure ("501(c)(6)… Linux Foundation model… open standards, member firms, and a mission-aligned research function"). Conservative framing: "member firms" and "mission-aligned research function" are deliberately undefined phrases that leave room for the institutional scaffolding forming in coming weeks.

**Substrate adaptations:** About page uses `<h2 class="display" style="font-size:clamp(32px,4vw,48px);">` for section headlines (not `<h2 class="headline">` like the homepage). Eyebrow `<div class="eyebrow">Label</div>` matches homepage and pre-existing About convention. CC BY 4.0 link precedent at line 108 uses attribute order `href, style, target, rel` with `rel="noopener noreferrer"` double-token — new CC BY 4.0 link in Lineage section matches this ordering verbatim. Internal-body-link precedent at line 159 (`/standards/001` Autonomaton Pattern link) uses `href, style` with no `target`/`rel` — new `/alerts/telemetry-trap` Telemetry Trap link matches this. Em-dashes spaced `&mdash;` per file convention (differs from GRV-001's flush convention — each file has its own internally consistent house style). Apostrophes `&rsquo;` entity per file convention.

### Phase 2 — Commit 2: What Bauhaus Knew section (`a631913`)

**Edit 2.1 — Bauhaus section insertion (between Models-are-Seeds and Seven-Questions).** Cultural-historical answer to "what kind of organization is this." Five body paragraphs: (1) Bauhaus precedent ("Bauhaus did not reject industrial production. It embraced machine-made goods and reframed the question…"); (2) single-sentence turn ("We follow the same playbook in the AI era."); (3) mechanism reinforcement — substrate-accumulation polarity concrete, three canonical conditions surfaced in `<strong>` emphasis (not `<dfn>` because this isn't first-mention — canonical `<dfn>` home is GRV-001 §VIII and homepage Telemetry Trap section), with Telemetry-Trap "Read more in our white paper" linked sentence added at operator direction during preview; (4) pullquote ("Naming a condition is what makes it measurable. Measurement is what creates the market reaction."); (5) closing paragraph with zero-trust/technical-debt/shadow-IT precedent enumeration as structural-pattern evidence.

**Substrate adaptations:** Section wrapper uses default `border-top:1px solid var(--border);` (no `bg2` variant) — preserves Seven-Questions section as the uniquely-styled test block. Headline `What <em>Bauhaus Knew.</em>` single-clause italic-on-last-phrase matches Lineage's `What a <em>Standards Body Does.</em>` rhythm. `<em>form follows function</em>` wraps canonical phrase. Pullquote matches existing `<div class="pullquote">` pattern at line 171.

### Phase 2.5 — Commit 2.5: Bauhaus closing paragraph register recast (`e4786a6`)

**Edit 2.5.1 — Bauhaus fifth paragraph recast.** Operator review after Commit 2 identified that the closing paragraph as shipped read in Gartner-analyst register ("whoever names the architectural condition first owns the conversation about that condition for a decade") — strategy-revealed rather than strategy-enacted, inconsistent with the royal-institutional-we voice established elsewhere on the page. Recast paragraph in lineage-positioning register, closing with "We sit in this lineage" that mirrors the Lineage section's "We sit in this institutional lineage" — parallel closing structure between the two new sections is itself a coherence move. Three precedents preserved (zero trust, technical debt, shadow IT) as structural-pattern evidence; three causal beats preserved ("markets could not yet price" → "naming made the condition measurable" → "measurement made the architecture investable"). One insertion, one deletion — clean one-paragraph swap.

### Phase 3 — Commit 3: AI-First metadata stack (`57a014c`)

Broken into three sub-phases for operator review, rolled into one atomic commit at the end:

**Sub-phase 3A — meta description + full meta complement (Edits 3.1 + 3.2).** Replaced pre-existing meta description with standards-body positioning; added author + canonical + 6 OG tags + 4 Twitter Card tags + 9 Dublin Core tags. Λ symbol (U+039B) rendered as raw Unicode in meta-content fields (og:description, twitter:description, meta description) because meta-content parsing across search engines and social-card scrapers is inconsistent with HTML entities; raw Unicode renders reliably. DC.subject keeps English "Lambda framework" because Dublin-Core-aware crawlers (academic and library systems) prefer Latin-character searchability. og:image and twitter:image both reference shared homepage `og.png` — visual continuity across Grove pages reinforces institutional-brand signal in social-share previews. og:type is "website" (not "article") because About pages are durable institutional content, not dated content.

**Sub-phase 3B — three JSON-LD schemas (Edits 3.3 + 3.4 + 3.5).** Organization schema with `@type: "Organization"` + `additionalType: Standards_organization` URL + `disambiguatingDescription` field for NVIDIA Grove + `knowsAbout` array including "the Telemetry Trap" alongside the four canonical conditions + "Bauhaus institutional pattern" + "category-naming as architectural authorship". AboutPage schema with page-specific `@id`, `isPartOf` → homepage WebSite, `about` → homepage Organization (cross-page `@id` graph coherence). FAQPage with four questions specific to About-page concerns: (Q1) one-paragraph Grove summary with Telemetry-Trap-as-macro-frame + component mechanisms; (Q2) Bauhaus-pattern full answer mirroring visible Bauhaus section; (Q3) NVIDIA Grove disambiguation answer; (Q4) three-act roadmap. Speakable CSS selectors `["h1.display", ".lead", ".pullquote"]` differ from homepage's `["h1", ".hero-meta"]` because About has different structural landmarks. Raw Unicode Λ and em-dashes in JSON-LD string values (entities not decoded inside `<script type="application/ld+json">`). Apostrophes plain ASCII inside JSON-LD text. `sameAs` array deliberately absent (LinkedIn company URL remains unverified; matches homepage precedent).

**Sub-phase 3C — semantic anchor IDs on four sections (Edit 3.6, four surgical edits).** `what-we-are`, `three-acts`, `models-are-seeds`, `seven-questions` IDs added via three-line str_replace anchors (section opener + section-inner + eyebrow). Each eyebrow label ("The Foundation", "The Roadmap", "The Bigger Picture", "The Test") is unique, providing disambiguation from the generic `<section class="section" style="border-top:...">` pattern. The-lineage and what-bauhaus-knew IDs were already added in Commits 1 and 2 respectively. ID naming convention (kebab-case, lowercase) matches homepage semantic-anchor convention from `homepage-calibration-and-ai-first-v1` Commit 3 (`hero`, `featured-alert`, etc.). `id` attribute placed after `style` attribute — matches the two already-added IDs in `the-lineage` and `what-bauhaus-knew` for attribute-ordering consistency.

### Phase 3.5 — Commit 3.5: Casual "Grove" reference cleanup (`7807af2`)

Operator review after Commit 3 identified four casual "Grove" references in visible body copy that read as ambiguous against the NVIDIA Grove naming collision the sprint was otherwise actively defusing. Five str_replaces total:

**Edit 3.5.1 — Models are Seeds closing line.** "The Grove Autonomaton Pattern" → "The Grove Foundation's Autonomaton Pattern" (canonical form + possessive `&rsquo;s`).

**Edit 3.5.2 — Bauhaus paragraph "Grove standards" recast (split treatment).** Discovery at fire time: the phrase `run through Grove standards,` appeared in two locations — the visible Bauhaus third paragraph AND the JSON-LD FAQ Q2 answer mirror. The two were co-authored from the same spec source text in Commit 3B and must be updated together to preserve visible-prose-and-structured-data coherence. Split into two str_replaces with disambiguation via natural apostrophe style (`&rsquo;` HTML entity in visible prose vs ASCII `'` in JSON-LD text content): Edit 3.5.2a (visible) → "run through our standards," (royal-we voice shorthand, institutional voice already established in surrounding paragraph); Edit 3.5.2b (JSON-LD) → "run through Grove Foundation standards," (explicit canonical form for atomic parser extraction, since JSON-LD is read without surrounding-paragraph voice context). SPEC.md updated mid-sprint to document the split-treatment decision.

**Edit 3.5.3 — Seven Questions test result.** "You built a Grove Autonomaton." → "Your deployment conforms to GRV-001." — matches IEEE/ISO institutional convention where compliance is asserted against the standard ID, not the publisher name. Sharper disambiguation surface.

**Edit 3.5.4 — Reference Implementation link text.** "Grove Autonomaton Pattern" → "Autonomaton Primitive" — matches the actual repo name (`understory-ip/autonomaton-primitive`); parent section's "Reference Implementation" eyebrow already provides categorization context, so dropping "Grove" from link text removes redundancy.

### Phase 4 — Commit 4: Footer disambiguation aside + DEVLOG (this commit)

**Edit 4.1 — Footer disambiguation aside.** Added `<p class="legal" style="margin-top:12px; color:var(--text-dim);">` paragraph in the site footer immediately after the primary 501(c)(6) legal line. Belt-and-suspenders pairing with Commit 3's JSON-LD `disambiguatingDescription` field — human readers see the footer aside, AI parsers read the structured-data field, both tell the same story. Soft visual weight (`color:var(--text-dim)`) keeps the aside from competing with the primary legal line while rendering legibly.

**Edit 4.2 — DEVLOG + SPEC staging.** This DEVLOG captures the full sprint arc across six commits. SPEC.md also staged in Commit 4 (the spec was updated mid-sprint at Commit 3.5 to document the split treatment for Edit 3.5.2); per operator's sprint-folder rule — "spec tracked alongside the sprint commits" — Commit 4 atomically lands visible footer change + execution log (DEVLOG) + spec-of-record (SPEC.md) as a self-contained commit cluster that documents itself.

## Commit log

- **Commit 1** — `a514f67` — `tone: polarity calibration on what-we-are paragraph; add the-lineage section establishing standards-body institutional anchor (IEEE/ICANN/W3C)` — 15 insertions, 1 deletion.
- **Commit 2** — `a631913` — `feat: add what-bauhaus-knew section establishing cultural-historical pattern with mechanism reinforcement and naming-creates-measurement pullquote` — 18 insertions.
- **Commit 2.5** — `e4786a6` — `tone: recast bauhaus closing paragraph from playbook-explained to lineage-positioning register; mirror lineage section we-sit-in-this-lineage close` — 1 insertion, 1 deletion.
- **Commit 3** — `57a014c` — `feat: AI-First metadata stack on about page - meta complement, Organization+AboutPage+FAQPage(4) JSON-LD with disambiguatingDescription for NVIDIA Grove, semantic anchor IDs` — 152 insertions, 5 deletions.
- **Commit 3.5** — `7807af2` — `tone: recast four casual Grove references in visible body copy to canonical Grove Foundation form, royal-we voice, or specific standard-citation form (NVIDIA Grove disambiguation hygiene)` — 5 insertions, 5 deletions.
- **Commit 4** — (this commit) — `feat: NVIDIA Grove disambiguation footer aside; sprint devlog` — footer aside + DEVLOG + SPEC.md.

## Institutional-posture note on mid-sprint corrective commits

Commits 2.5 and 3.5 are mid-sprint corrective commits — post-review adjustments that emerged once prior commits were in place and readable as shipped prose. They are not exceptions to the sprint discipline; they *are* the sprint discipline. Standards bodies that maintain canonical reference continuously look exactly like this: they don't ship-and-forget, they ship-and-revise as new naming collisions and register inconsistencies emerge under operator review. Commit 2.5 caught a Gartner-analyst-register slip in the Bauhaus closing paragraph. Commit 3.5 caught four casual "Grove" references whose ambiguity against NVIDIA Grove had been hiding in plain sight. Future sprint authors should read this pattern as institutional behavior, not as log noise. The mid-sprint corrections are a feature of the standards-body posture — every sprint produces a self-contained commit cluster that documents both what shipped and how it was refined in flight.

## Staging discipline

All six commits used explicit `git add <file-list>` rather than `-am`. Stale `do-commit.bat` modification from earlier sessions stayed quarantined out of all six commits by design, same protocol as the four predecessor sprints. `.bat` commit-message wrappers executed via `cmd //c "<full-windows-path>"` from Git Bash (CMD does not resolve CWD-relative `.bat` names without `.\`) and deleted immediately after use. SPEC.md held in working tree as untracked through Commits 1–3.5 (spec amendments accumulated inline during sprint), staged with DEVLOG at Commit 4 per operator's sprint-folder rule.

## Operator decisions at preview time

- **Telemetry-Trap-as-macro-frame reframe (Commit 1 preview).** Operator updated SPEC.md mid-Commit-1 to recast the three canonical conditions as component mechanisms of the Telemetry Trap (with `/alerts/telemetry-trap` hyperlink). Cascaded through Edits 1.2, 2.1, 3.2, 3.3, 3.5 — the four canonical conditions are now positioned downstream of the Telemetry-Trap macro-frame across visible prose AND JSON-LD.
- **Bauhaus headline emphasis preserved on line 2.** Unlike the Production Reality headline on the homepage (which required a deliberate em-on-line-1 deviation to preserve rhetorical emphasis on "Everywhere"), the Bauhaus headline "What *Bauhaus Knew.*" carries the default em-on-last-phrase pattern because the phrase is single-clause; no deviation needed.
- **Commit 2.5 interstitial.** Added after Commit 2 landed; recast Bauhaus closing paragraph out of Gartner-analyst register into lineage-positioning register. Mid-sprint correction preserved as dedicated commit rather than squashed.
- **Commit 3 sub-phase decomposition.** Operator broke Commit 3 into three sub-phases (3A meta + 3B JSON-LD + 3C anchor IDs) for review granularity, with all three rolling into a single atomic commit.
- **Organization `@type: "Organization"` + `additionalType: Standards_organization`.** Matches homepage precedent from `homepage-calibration-and-ai-first-v1` Commit 3 (spec's initial `NGO` was adjusted at homepage sprint preview for the same 501(c)(6) business-league classification reasoning — NGO overclaims humanitarian/advocacy semantics).
- **`sameAs` deliberately absent.** Matches homepage precedent — broken structured-data URL > absent field.
- **Commit 3.5 split treatment on Edit 3.5.2.** At fire time, discovered `run through Grove standards,` appeared in two locations (visible prose + JSON-LD FAQ Q2 mirror). Operator chose Option B split: visible prose → royal-we "our standards"; JSON-LD → explicit canonical "Grove Foundation standards" for atomic parser extraction. Split documented in SPEC.md mid-sprint.
- **Option A staging at Commit 4.** Operator approved staging SPEC.md alongside DEVLOG and footer aside in a single atomic Commit 4 — honors the sprint-folder rule ("spec tracked alongside sprint commits"), produces standards-body-grade git history where every sprint is a self-contained commit cluster.
- **Conservative-on-institutional-structure discipline.** Held throughout: no People section (CSS scaffolding at lines 56 and 78 stays unused), no founder biographical section, no Atlas mention, no advisor/reviewer/working-group claims. Mystery > overclaim — the institutional scaffolding forming on weeks-not-months horizon gets room rather than premature claims.

## Out of scope (per sprint spec)

- People section (CSS exists but stays unused)
- Founder biographical section
- Atlas mention
- Specific advisor/reviewer/working-group claims
- Homepage section reorder (Chunk 4 — separate sprint after Chunk 3)
- CIO Alerts calibration (Chunk 3 — separate sprint after this one)
- Layout / CSS / JS / design-system changes
- Modifications to existing "Three Acts," "Models are Seeds," or "Seven Questions" sections (preserved as-is)
- The stale `do-commit.bat` working-tree modification — stays quarantined per established protocol

## Provenance

- Triggered 2026-04-21 — Chunk 2 of launch-mode trinity (Chunks 1–3; About page sprint after homepage title-tag fix)
- Cold-read diagnostic source: ChatGPT and Gemini transcripts (2026-04-21) showing pre-calibration misclassification of Grove as "manifesto" / "position paper" / "ideological project" — About page is the canonical-positioning reference page that converts cold reads from confusion to recognition
- Cultural-pattern source: Operator framing (2026-04-21) — Bauhaus as embrace-and-reframe institutional precedent; established as homepage FAQ Q10 in `homepage-calibration-and-ai-first-v1` sprint, given full prose treatment here
- Mechanism reinforcement: Operator request (2026-04-21) — Bauhaus prose made substrate-accumulation polarity concrete and surfaced the three canonical conditions in `<strong>` emphasis
- Telemetry-Trap macro-frame: Operator articulation (2026-04-21) mid-Commit-1 preview — the three canonical conditions are **component mechanisms** of the Telemetry Trap, not a flat list; positions `/alerts/telemetry-trap` as the white-paper reference for the canonical structural condition
- Pullquote framing: Operator articulation (2026-04-21) — "Naming a condition is what makes it measurable. Measurement is what creates the market reaction" carries the cultivation-architecture thesis without going too far on physics analogy
- Conservative-on-institutional-structure: Operator guidance (2026-04-21) — institutional scaffolding forming on weeks-not-months horizon
- Sprint handoff: SPEC.md committed in this Commit 4 alongside the DEVLOG — spec-of-record and execution-log now atomically co-located per operator's sprint-folder rule

Predecessor sprints:
- `homepage-title-tag-fix-v1` (closed 2026-04-21, single-commit micro-sprint)
- `homepage-calibration-and-ai-first-v1` (closed 2026-04-21, four commits)
- `grv-001-substrate-and-positioning-v1` (closed 2026-04-21, three commits)
- `sovereignty-alert-tonal-revision-v1` (closed 2026-04-21, three commits)
- `hospitable-graph-01-foundation` (closed 2026-04-20, GRV-001 v1.1 publication standard conformance)

## Not captured here

The Phase 6 live-page verification (operator spot-checks the landing phrases on the deployed URL) is logged in the post-deploy report in the execution chat, not in this DEVLOG. The DEVLOG commits before deploy completes; live-page state is not knowable at commit time.
