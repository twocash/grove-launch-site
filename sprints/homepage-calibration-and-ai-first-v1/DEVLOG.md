# DEVLOG — homepage-calibration-and-ai-first-v1

**Sprint ID:** homepage-calibration-and-ai-first-v1
**Operator:** Jim Calhoun
**Executor:** Claude Code
**Date:** 2026-04-21
**Target page:** https://the-grove.ai/
**Target files:** `index.html` (repo root), `og.png` (new, repo root)
**Branch:** master (direct, no worktree — two-file scope, four sequential commits)

## Sprint arc

Three synchronized passes on the front door: (1) calibration of visible body prose from pre-canonical-positioning vintage (adversarial vendor framing) to canonical positioning (capital-asymmetry investment thesis, standards-body institutional framing); (2) insertion of a Production Reality section that reframes Grove from "what's wrong with AI" to "which polarity does the consumption layer ratchet toward"; (3) full AI-First metadata stack — meta complement, 5 JSON-LD schemas, semantic anchor IDs, homepage OG image. The three are inseparable: metadata over uncalibrated copy encodes the wrong story; calibrated copy without Production Reality keeps Grove arguing in negative space; Production Reality without metadata fails to reach the agent audience.

## Phase-by-phase adaptations

### Phase 1 — Commit 1: Six visible calibration edits

All six substrate-adapted to homepage file conventions (which differ from GRV-001):
- **Eyebrow pattern:** `<div class="eyebrow">Label</div>` (not `<p class="section-eyebrow">`)
- **Headline pattern:** `<h2 class="headline">Phrase.<br><em>Emphasis.</em></h2>` with em on line 2 last phrase
- **Link styles:** external featured `--amber-bright` + `target="_blank" rel="noopener"` (not `rel="external"`); internal navigation `--amber`
- **Em-dashes:** spaced `&mdash;` (different from GRV-001's flush convention — each file has its own internally consistent house style)
- **Apostrophes:** `&rsquo;` entity (matches homepage precedent)

**Edit 1.1 (hero):** Replaced `Stop Building on *Rented Ground.*` + adversarial landlord metaphor + deprecation/black-box critique + "standards that put *you* in control" close with `Govern the Substrate. *Commoditize the Compute.*` + standards-body framing + capital-asymmetry investment-thesis paragraph + deprecation-as-architectural-risk reframe. Hero goes from negative-space critique to positive-space standards-body positioning.

**Edit 1.2 (Six Nations):** Four sub-replacements — headline from "Six Nations Get It. One Doesn't." to "Six Nations Hedge. One Concentrates." Body paragraphs shifted from "adversarial / architectural failure disguised as innovation / bad computer science / beyond time for marketplace of ideas" polemic to "hedged strategic posture / apex investment is appropriate but absence of parallel architectural-layer investment is structural anomaly / well-understood tradeoffs any serious deployment has to address" neutral-analytical register.

**Edit 1.3 (Telemetry Trap):** Eyebrow "The Telemetry Trap" preserved (thematic anchor + cross-linked from CIO Alert by same name). Headline reframed from "You Are Paying to Train Your Replacement." to "Default Consumption Patterns Extract Judgment." Four body paragraphs consolidated to three, introducing `<dfn>judgment extraction</dfn>` on definitional first-mention ("Grove names this structural condition…"). The `<dfn>` placement at this definitional sentence is semantically correct per HTML5 spec; a second `<dfn>` appears in the Canonical Vocabulary section (Commit 4) at the compact-definition catalog, which technically duplicates the defining-instance marker — deliberate duality, accepted at preview time. Existing CIO Alert link at end of section preserved.

**Edit 1.4 (TCP/IP closing):** "Centralized AI captured the cognitive frontier… take it back" → "The cognitive frontier compounds at sovereign substrate… publishes the architecture, open and inspectable." Rhetorical register shifted from extractive-recovery to compounding-at-substrate.

**Edit 1.5 (meta description):** Replaced v1.1 vintage "Stop feeding your telemetry and IP to API-first AI vendors" with standards-body positioning naming canonical terms + Λ framework + CC BY 4.0 + Indianapolis. Used raw Unicode `Λ` (U+039B) in meta description rather than `&Lambda;` entity — SEO-safer for meta-content parsing where entity decoding varies.

**Edit 1.6 (Λ methodology caveat):** Inserted new paragraph between `</table>` and the "Click any row" line in the Λ Standings section: "Scores move with deployment evidence" + explicit "including against the Autonomaton pattern itself" honesty disclosure + public-quarterly/members-realtime cadence clarification. Preserves the existing "Click any row" line (defensive; avoids reflow of surrounding structure).

Commit 1 covers lines 7, 239–245 (hero), 272 (Six Nations headline), 274, 276, 278 (Six Nations body), 289–297 (Telemetry Trap headline+body), 326–328 (Λ caveat), 367 (TCP/IP close).

### Phase 2 — Commit 2: Production Reality section

Inserted a new section between Ratchet Test (Phase 1's adjacent section) and TCP/IP. Strategic core of the sprint: reframes Grove from negative-space critique ("here's what's wrong with vendor AI") to positive-space polarity-reframe ("the same Autonomatonic loop already runs in vendor AI; the architectural question is which node accumulates the substrate"). Named vendors: Claude Code, Claude Cowork, Cursor — as examples of production Autonomatonic implementations where the loop accumulates at the vendor's node. The `<strong>This is not a critique.</strong>` sentence is load-bearing in preventing a veiled-vendor-bashing read; the follow-up clause ("Software companies instinctively build dependency ratchets because that is how their business compounds") grounds the observation structurally rather than morally.

Substrate adaptations from spec → file:
- Section wrapper: `<section class="section" style="border-top:1px solid var(--border);" id="production-reality">`
- Eyebrow: `<div class="eyebrow">Production Reality</div>`
- Headline: `<h2 class="headline">Autonomatonic Loops Run <em>Everywhere.</em><br>The Polarity Doesn&rsquo;t.</h2>` — deliberate deviation from the file's em-on-line-2 convention. This headline is contrastive (two-sentence beat) while other homepage headlines are single-clause completions; the load-bearing emphasis is on the "Everywhere" claim (pattern is universal) before the "Polarity Doesn't" turn. Stylistic deviation, semantically right.
- Vendor external links: `target="_blank" rel="noopener"` with `--amber-bright` style (spec had `rel="external" target="_blank"` — adapted to file convention)
- Internal GRV-001 link: `--amber-bright` (featured-link tier)
- IPA pronunciation: preserved spec's hex entity approach
- `<dfn>Autonomaton</dfn>` placed at first canonical mention on homepage (the term is introduced with pronunciation glyph in this section, so definitional anchor is correct here)
- Pullquote: `<div class="pullquote">Durable institutions that matter cannot afford to build cognition on rented, non-portable, externally governed substrate.</div>`
- Comment-block treatment: renamed existing `<!-- THE SOLUTION -->` landmark at insertion point to `<!-- PRODUCTION REALITY — the polarity reframe -->`, preserving the original `<!-- THE SOLUTION -->` comment immediately above the TCP/IP section that follows. Keeps the file's self-documenting comment-block landmarks structurally coherent.

21-line insertion.

### Phase 3 — Commit 3: AI-First metadata stack + og.png

Single large insertion after line 7 meta description, before line 8 preconnect — spanning the meta-complement, five JSON-LD schemas, plus seven semantic anchor-ID additions as separate surgical edits.

**Meta complement (spec's Edit 3.1):** author + canonical + 6 OG tags + 4 Twitter Card tags + 9 Dublin Core tags. No version references in meta content (evergreen descriptor — version references live in visible copy per operator rule for SEO-indexed content).

**JSON-LD schemas (spec's Edits 3.2–3.6, five scripts):**
1. **Organization schema** — with three substrate adjustments from operator at preview time: (a) `@type: "Organization"` with `"additionalType": "https://en.wikipedia.org/wiki/Standards_organization"` instead of spec's `NGO` — NGO carries humanitarian/advocacy semantics that overclaim for a 501(c)(6) business league; the `additionalType` URL points to the Wikipedia standards-organization concept, preserving standards-body precision without the NGO overclaim. (b) `nonprofitStatus: "Nonprofit501c6"` (schema.org enum) kept per earlier recommendation — accurate IRS-classification answer, machine-readable. (c) `sameAs` array dropped entirely — LinkedIn company URL from spec was unverified; a broken URL in structured data is worse than an absent field because it tells parsers the org links to nothing real. Jim's personal LinkedIn URL remains on the founder block as provenance.
2. **WebSite schema** — publisher reference via @id to Organization.
3. **ItemList schema** — three TechArticle list items for GRV-001, GRV-002, GRV-003 with full identifiers, descriptions, and CC BY 4.0 licenses. GRV-002 title verified against live page ("TCP/IP for the Cognitive Layer") before firing.
4. **FAQPage schema** — 10 questions after operator expanded Q9 (Production Reality) with Q10 (Bauhaus pattern) at preview time. Q10 is the cultural-lineage meta-answer that generalizes Grove's standards-body move to the broader pattern of architectural-category-naming (zero trust/Kindervag, technical debt/Cunningham, shadow IT/Gartner) — positions Grove as intellectual movement, not just engineering institution. Deliberate placement last in array: an AI agent that reads through the whole FAQ ends on this framing.
5. **WebPage schema** — with `SpeakableSpecification` targeting `["h1", ".hero-meta"]`. Spec proposed `["h1", ".lead", ".hero-meta"]`; file has no `.lead` class, dropped to avoid selector mismatch.

**Semantic anchor IDs (spec's Edit 3.7, seven surgical edits):** Added to sections that lacked them. Each str_replace disambiguated by anchoring on the section opener + unique eyebrow label (since the bare `<section class="section" style="border-top:1px solid var(--border);">` opener appears six times in the file). IDs added:
- `featured-alert` (the cio-alert-featured section, Sovereignty callout)
- `g7-divergence` (Six Nations Hedge)
- `telemetry-trap` (Telemetry Trap)
- `lambda-standings` (State of the Architecture / Λ Standings)
- `ratchet-test` (Your Ratchet Direction)
- `standards-body-case` (TCP/IP Wasn't Built by AT&T)
- `further-reading` (Go deeper grid)

Hero already carried `id="hero"` (pre-existing); Production Reality carried `id="production-reality"` from Commit 2; Canonical Vocabulary will carry `id="canonical-vocabulary"` via Commit 4.

og.png (55,044 bytes, generated via `C:\Users\jim\gen_og_home.py` April 21 2026) staged and committed to repo root. OG image referenced from both `og:image` and `twitter:image` meta tags.

272 insertions, 7 deletions across index.html + og.png create.

### Phase 4 — Commit 4: Canonical Vocabulary section + DEVLOG

Canonical Vocabulary section inserted between TCP/IP section and Go Deeper grid, using the unique `<!-- EXPLORE -->` comment block as the str_replace anchor (same pattern as Commit 2). Four canonical terms get `<strong><dfn>Term</dfn>.</strong>` bold-lead-period cadence matching GRV-001 Terms of Art convention. Section headline "Naming the <em>Conditions.</em>" uses single-clause em-on-last-word pattern, matching "The <em>Subsidy Illusion.</em>" precedent at line 308 — vocabulary catalog is not contrastive like Production Reality headline was, so the file's default headline pattern applies. Internal GRV-001 §VIII cross-reference uses `--amber-bright` featured-link tier. The `§VIII` entity as `&sect;VIII` is the cleanest typographic cross-reference anchor.

Duplicate-`<dfn>` status: the four canonical terms now appear with `<dfn>` in both GRV-001 §VIII Terms of Art (canonical home) AND the homepage Canonical Vocabulary section (surface catalog). Additionally, `judgment extraction` has a third `<dfn>` in the Telemetry Trap section from Commit 1. HTML5 spec suggests one `<dfn>` per term per document; browsers and AI parsers don't enforce uniqueness in practice, and each placement does useful semantic work (catalog entry vs definitional first-mention in prose). Deliberate duality, accepted at preview time.

## Commit log

- **Commit 1** — `8090ca0` — `tone: homepage calibration to canonical investment-thesis positioning - hero, six nations, telemetry trap, tcp/ip, meta description, lambda methodology caveat` — six calibration edits, 15 insertions / 16 deletions.
- **Commit 2** — `b94c682` — `feat: add Production Reality section reframing Grove from negative to positive space - autonomatonic loops already run in vendor AI; polarity is the architectural choice` — 21 insertions (new section).
- **Commit 3** — `5b3eede` — `feat: AI-First metadata stack and homepage og.png - full meta complement, JSON-LD Organization+WebSite+ItemList+FAQPage(10)+WebPage schemas, semantic anchor IDs, OG image` — 272 insertions, 7 deletions, og.png create.
- **Commit 4** — (this commit) — `feat: canonical vocabulary surface on homepage with dfn semantic markup; cross-link to GRV-001 terms of art; sprint devlog` — Canonical Vocabulary section + this DEVLOG.

## Staging discipline

All four commits used explicit `git add <file-list>`. The stale `do-commit.bat` working-tree modification stayed quarantined throughout, same protocol as the three predecessor sprints. `.bat` commit-message wrappers run via `cmd //c "<full-windows-path>"` from Git Bash (CMD doesn't resolve CWD-relative `.bat` names without `.\`), deleted immediately after use.

## Operator decisions at preview time

- **Telemetry Trap eyebrow:** preserved "The Telemetry Trap" label (thematic anchor, cross-linked from CIO Alert by same name) even though new headline reframes section to "Default Consumption Patterns Extract Judgment." Both layers do distinct work — plain-English recognition + engineering precision.
- **Production Reality headline pattern deviation:** approved em-on-line-1 treatment for "Autonomatonic Loops Run Everywhere. The Polarity Doesn't." — contrastive two-sentence structure justified the break from the em-on-line-2 file pattern used elsewhere.
- **Organization schema `@type`:** spec's `NGO` → `Organization` + `additionalType: Standards_organization` URL. Cleaner classification for a 501(c)(6) business league operating as a standards body.
- **`sameAs` array:** dropped entirely. Unverified LinkedIn URL risk > absent-field cost.
- **FAQ Q10 Bauhaus:** added at preview time. Cultural-lineage meta-answer positioning Grove as intellectual movement that publishes technical standards; generalizes the standards-body move to the broader category-naming playbook (zero trust, technical debt, shadow IT); closes the FAQ with a framing the AI reader carries forward.

## Out of scope (per sprint spec)

- About page (queued for next sprint after this closes)
- Standards pages (GRV-001 already calibrated via `grv-001-substrate-and-positioning-v1`; GRV-002 and GRV-003 separately maintained)
- Other CIO Alerts (queued)
- Λ standings page itself
- Layout / CSS / JS / design-system changes
- The stale `do-commit.bat` working-tree modification — stays quarantined per established protocol

## Provenance

- Triggered 2026-04-21 by the need to calibrate the front door to canonical positioning established across predecessor sprints
- Calibration source: canonical investment thesis positioning statement captured at https://www.notion.so/349780a78eef812ebf41d2fab61c013a
- Production Reality framing: operator articulation 2026-04-21
- AI-First publishing standard methodology: `hospitable-graph-01-foundation` (closed 2026-04-20)
- Canonical Grove Terms of Art: GRV-001 v1.2 §VIII (`grv-001-substrate-and-positioning-v1`, closed 2026-04-21)
- Substrate-not-routing thesis: GRV-003 v1.2 §1 (published 2026-04-21)
- og.png: generated 2026-04-21 via `C:\Users\jim\gen_og_home.py`, located `C:\GitHub\grove-launch-site\og.png`

Predecessor sprints:
- `sovereignty-alert-tonal-revision-v1` (closed 2026-04-21, three commits, all deployed)
- `grv-001-substrate-and-positioning-v1` (closed 2026-04-21, three commits, all deployed, v1.2 landed)
- `hospitable-graph-01-foundation` (closed 2026-04-20, GRV-001 v1.1 publication standard conformance, deployed)

Sprint handoff pasted into the CC execution session at sprint open; chat log is the canonical source per operator direction ("two sources of truth invite drift" — operator rule carried forward from sovereignty alert sprint).

## Not captured here

The Phase 8 live-page verification (operator spot-checks the landing phrases on the deployed URL) is logged in the post-deploy report in the execution chat, not in this DEVLOG. The DEVLOG commits before deploy completes; live-page state is not knowable at commit time.
