# SPEC — architecture-and-accountability-v1

## 0. Status

**DRAFT authored 2026-04-21** post-harmonization (tip `6e375a4`). Overwrites paused-status stub. Preview reviewed by Jim + Gemini focus-group lens; amendments integrated. Fire given 2026-04-21. Ready for Commit 1 (`docs:` SPEC).

Protocol: spec &rarr; preview &rarr; confirm &rarr; **fire** &rarr; SHA &rarr; next-phase. Preview-confirm-fire discipline per repo standard. No CC execution until Jim greenlights each commit cluster.

## 1. Open questions — defaults taken

| # | Question | Default | Rationale | Status |
|---|---|---|---|---|
| Q1 | Title | *Architecture and Accountability: How Sovereign AI Satisfies the Compliance Regime* | "Satisfies" > "compound inside" — Bauhaus register. Compliance as side-effect of good design. | **Locked** |
| Q2 | Pub date | 2026-04-28 (Tuesday) | Sovereignty+7; one-alert-per-week cadence; Tuesday-to-Tuesday heartbeat. | **Locked** |
| Q3 | Inline regulator grounding in §I | None by default; framework language only (SR 11-7, FFIEC IT Handbook, OCC 2023-17 / FRB SR 23-4) | Doctrinal piece; argument carries alone. Swap in specific bulletin or enforcement action only if surfaces during authoring. | **Locked with mid-sprint override** |
| Q4 | Further Reading | GRV-001, GRV-003, Telemetry Trap, SR 11-7 official, FFIEC IT Handbook, OCC 2023-17, NIST AI RMF, BCBS 239, Sovereignty alert; polarity essay slot reserved | Banking-primary, supporting regimes linked, Grove corpus cross-referenced. | **Locked** |
| Q5 | Close + CTA | Reuse Sovereignty's "new kind of computer science, building in the open" h3 + subscribe, plus one compliance-audience bridge sentence | Register continuity across alerts. | **Locked** |
| Q6 | Photosynthesis / trees / aspen | Held. Not in this alert. | Compliance audience wants structural precision; metaphor dilutes. Held for standalone polarity essay. | **Locked** |

## 2. Sprint metadata

- **Sprint name:** `architecture-and-accountability-v1`
- **Canonical slug:** `/alerts/architecture-and-accountability`
- **Canonical URL:** `https://the-grove.ai/alerts/architecture-and-accountability/`
- **Audience:** Banking primary; one-sentence gesture at insurance (NAIC Model Governance) and healthcare (HIPAA + FDA SaMD) in §IV
- **Byline:** Jim Calhoun (named; Sovereignty precedent)
- **Pub date:** 2026-04-28
- **Structural template:** `alerts/sovereignty-is-all-you-need/index.html`
- **License:** CC BY 4.0 (inherited)
- **Commit estimate:** 8–10 commits (8 minimum; mid-sprint corrective commits welcome)

## 3. Canonical vocabulary load-out + voice / register discipline

**Load-bearing terms for this alert** (all pre-canonicalized; reuse per corpus precedent):

- *Own or govern* — structural-precision descriptive. Use where institutional-problem sentences need it. Originating canonical sentence lives on Sovereignty.
- *Knowledge polarity* — three-terminal model (ground / positive / negative). Introduce in lead graf; carry through §II and §V. Accessible register; pair with ratchet only where mechanism precision is doing work.
- *Negative polarity* — the compliance failure-mode frame in §II.
- *Third-party concentration risk* — regulatory vocabulary for negative polarity. Load-bearing translation device.
- *Ratchet* — mechanism-precision. Appears 1–2 times in §II for exact operational reference; otherwise polarity carries register.
- *Cognitive platforming* — drift that concentrates judgment, telemetry, decision-context at platform tier. One reference expected in §II.
- *Judgment extraction* — flow of operator decision patterns back to model provider. §II.
- *Lien on thinking* — accumulating dependency that does not discharge on provider switch. §II.
- *Autonomaton Pattern / GRV-001* — load-bearing base-pattern reference in §III.
- *GRV-003* — one-touch in §III as latest expression.
- *Cultivation architecture* — structural posture that creates conditions for emergent properties. Candidate for §V register where compounding argument lands.
- *Bauhaus pattern* — embrace-and-reframe posture. Candidate for §VI close beat.
- *The Telemetry Trap* — link in §II and Further Reading.

**Voice discipline** (load-bearing, not advisory):

- Royal institutional "we" on Grove surfaces. "The Grove Foundation" on first mention; "we" / "our" thereafter. Never bare "Grove" as noun outside immediate canonical antecedent.
- Polarity-reframe register throughout. Both polarities are lawful. Apex compute is critical infrastructure. We publish the operator-substrate polarity standards.
- **Negative polarity names a risk profile, not a compliance violation.** Vendor AI on substrate the institution does not own or govern is lawful. Our architecture proposals help institutions satisfy the existing regime more rigorously at that specific risk profile — we do not redefine the regime's lawful/unlawful line. Encode this register across §II and §IV. No accusation register. No "vendor AI is bad." No "regulators haven't caught up." The frame is: the regulator was right; the mechanism was missing.
- Conservative on institutional structure. "Member firms," "research function," the forming member body — deliberately undefined. Mystery > overclaim; scaffolding forms on weeks horizon.
- "Model is engine; Autonomaton is chassis and logbook; regulator reads the logbook." Candidate §III register handle. Test during authoring; keep if it lands, drop if it stretches. Not mandatory prose.
- **OpenClaw reference treatment.** OpenClaw appears in §II and §III as a demand-signal-and-failure-mode anchor, not as accusation. Polarity-reframe register applies: brilliant primitive missing the governance primitives; the demand is proven, the architecture has to ship with the primitives. No "OpenClaw is bad." The frame is: 160k stars confirms the appetite; the rogue-loop incidents confirm what the Approval stage and Zone Model exist to prevent.

**Substrate conventions** (file-local precedent confirm before each edit):

- Em-dash: spaced `&mdash;` entity in prose; raw Unicode U+2014 inside JSON-LD strings
- Apostrophe: `&rsquo;` in prose; plain ASCII `'` inside JSON-LD strings
- &Lambda;: `&Lambda;` entity in prose; raw Unicode U+039B in meta / JSON-LD
- External link `rel`: two-token form `rel="noopener noreferrer" target="_blank"`
- Link styling: `style="color:var(--amber); text-decoration:none; border-bottom:1px solid var(--amber-dim);"` inline per file precedent; `--amber-bright` for featured external
- Anchor IDs: kebab-case lowercase, derived from section subject; insert as `id="..."` after class attribute
- JSON-LD @id graph: site-wide entities `https://the-grove.ai/#organization`, `#website`; page-specific `https://the-grove.ai/alerts/architecture-and-accountability#article`

**Register-note <aside> pattern (NEW, A&A is first instantiation).** Canonical Grove terms appearing for the first time in body prose may carry an inline register-note <aside> defining the term in 1–3 sentences, anchored adjacent to the first use. Markup pattern:

```html
<aside class="register-note" id="register-note-{term-kebab-slug}">
  <div class="register-note-label">{Term in title case}</div>
  <div class="register-note-body">{1–3 sentence definition, em-dash entities, plain prose}</div>
</aside>
```

Placement: immediately after the closing `</p>` of the body paragraph containing the first-use term. Visual rendering: side-anchored or inset block; CSS lands at first instantiation per existing CSS-mirroring discipline. Authoring CC defines the CSS rules at first instantiation (Commit 4) by reading existing Sovereignty `aside` patterns or, if none exist, mirroring the visual weight of the existing `pullquote` class but with definitional rather than rhetorical register (smaller type, lighter border, no italic).

**Harmonization promise (forward-resolving).** When `/vocabulary/` HTML page ships in the canonical-vocabulary curation sprint, all register-note asides across the corpus get swapped via global `str_replace` for inline canonical fragment links of the form `<a href="https://the-grove.ai/vocabulary#{term-kebab-slug}">{term}</a>`. The register-note pattern is therefore transitional infrastructure, not permanent. Logged in §11 out-of-scope as queued harmonization work.

## 4. Structural outline — full body arc

**Shell:** single `<article>` wrapping three `<section class="section">` blocks — lead / body / close. Sovereignty shell inherited verbatim. No evidence-ledger section.

### Lead section

Eyebrow + display headline + dek + byline + lead graf.

- **Eyebrow:** `CIO Alert &middot; April 28, 2026`
- **Display headline:** `Architecture and Accountability`
- **Subtitle / dek:** `How Sovereign AI Satisfies the Compliance Regime`
- **Byline:** `Jim Calhoun`
- **Lead graf (working draft — keep):**

> The regulated industries have been drafting compliance frameworks for sovereign architecture for two decades. They didn't know that was what they were doing. We intend to argue here that the convergence is not coincidence — it is structural. SR 11-7, FFIEC IT Handbook, OCC third-party risk guidance, and the prudential regimes they anchor all ask a single underlying question: who owns or governs the substrate on which the institution's decisions are made? That question is polarity. And the compliance regime is forward infrastructure for the polarity reversal.

### §I. The question the regulator actually asks
**Anchor:** `#the-question-the-regulator-actually-asks`

**Thesis:** Under the vocabulary of SR 11-7, FFIEC IT Handbook, and OCC third-party risk guidance, regulators are asking three recurring questions: (a) is the decision chain auditable end-to-end; (b) is human accountability demonstrable at named points; (c) is third-party dependency controlled and bounded. These three demands are the same demand. They are demands about substrate polarity — who owns and governs what the institution's decisions are made on — framed in the vocabulary each prudential regime had available when it was drafted.

**Beats:**
1. Open with the three demands named plainly
2. Parse SR 11-7 model risk management language (effective challenge, governance, policies and procedures — each maps to a polarity property)
3. FFIEC IT Handbook third-party risk chapter (concentration risk, exit planning, subcontractor transparency — each maps)
4. OCC Bulletin 2011-12 and 2023-17 / FRB SR 23-4 third-party guidance (monitoring, contractual rights, information access — each maps)
5. Close §I: regulators have been drafting for knowledge polarity before anyone named it. The question the regulator asks is polarity-shaped. The question the architect answers is substrate-shaped. These are the same question at two scales of abstraction.

### §II. Why vendor AI makes the question harder to answer
**Anchor:** `#why-vendor-ai-makes-the-question-harder`

**Thesis:** Negative polarity is not unlawful. It is a specific risk profile that the existing compliance regime was already treating before AI made the treatment urgent. Vendor AI deployed as the institution's decisioning layer routes operator judgment to nodes the institution does not own or govern. The regulatory vocabulary for this condition already exists: third-party concentration risk. What is new is not the condition — it is the surface area. Every query, correction, and authorization writes to a substrate the institution cannot audit.

**Beats:**
1. Open: negative polarity as named regulatory territory, not novel threat. State plainly: lawful, not unlawful; risk profile, not violation.
2. The cognitive-platforming escalation: judgment extraction + lien on thinking as compounding mechanisms on a substrate the institution does not own
3. BCBS 239-style data aggregation discipline as prudential analog: the aggregated artifact is now the institution's decisioning itself
4. Ratchet appears once here: dependency direction is mechanical, one-way, and does not discharge on provider switch
5. The risk profile is not hypothetical. Reference OpenClaw — autonomatonic agent, 160k+ GitHub stars, public failure-mode catalog (rogue iMessage bulk-spam, unauthorized publishing, ignored stop commands). Two sentences max. Map the failure modes plainly to the absent primitives: no Stage 4 Approval, no Zone Model. The architecture's missing the brake, not the engine.
6. Close §II: the regulator's instinct about third-party concentration is correct; the architecture hasn't let them prove it. Transition → opening pullquote.

**Opening pullquote (verbatim, after §II):**

> *Third-party concentration risk is the regulatory vocabulary for negative polarity. The substrate of the institution's decisions is accumulating somewhere the institution cannot reach.*

### §III. The mechanics of control
**Anchor:** `#the-mechanics-of-control`

**Thesis:** GRV-001 (the Autonomaton Pattern) specifies a five-stage invariant pipeline — Telemetry &rarr; Recognition &rarr; Compilation &rarr; Approval &rarr; Execution — that is non-bypassable by construction. Zone Model partitions actions into Green (autonomous), Yellow (supervised), Red (human-only) zones. Provenance arcs generate the audit trail as a byproduct of operation, not as overhead. The contribution is architectural: control properties fall out of the pattern; they are not attested after the fact.

**Beats:**
1. Open: the Autonomaton Pattern as base architectural primitive; one-touch GRV-003 reference as latest expression
2. Five-stage pipeline = auditable decision chain (maps to SR 11-7 "effective challenge" at Stage 4 Approval)
3. Zone Model = human-in-the-loop by architecture, not attestation (maps to FFIEC "demonstrable human accountability")
4. Provenance arcs = audit trail as byproduct (maps to OCC "information access rights")
5. Candidate metaphor to test: *the model is the engine; the Autonomaton is the chassis and the logbook; the regulator reads the logbook.* Keep if it lands in prose; drop if it stretches.
6. OpenClaw's LLM-agnostic capability-swap pattern is the strangler-fig architecture already running in production at consumer scale. One sentence. The question is not whether autonomatonic loops will be built; the question is what primitives ship with them.
7. Close §III: architecture demonstrates; it doesn't promise.

### §IV. Where the regimes meet
**Anchor:** `#where-the-regimes-meet`

**Thesis:** Grove standards and the SR 11-7 / FFIEC / OCC regime are stacked, not competing. The regulatory frame answers: how is control governed, proven, and enforced? The architectural frame answers: how is control implemented such that governance has something to prove? One without the other leaves either the mechanism unaudited or the audit unmoored. This is the missing translation layer between two well-formed bodies of work.

**Beats:**
1. Open: the complementarity claim plainly
2. Map the stacking: Grove = how; regulator = how-proven
3. One-sentence gesture at analogous regimes: NAIC Model Governance (insurance) and HIPAA + FDA SaMD (healthcare) carry parallel structural shapes; each warrants its own treatment in future pieces
4. Close §IV: the regime was right; the mechanism was missing. The architecture does not replace the framework — it lets the framework do what it was drafted to do.

**§III/§IV compression:** none. Both locked per Gemini focus-group correction. §III is "how"; §IV is "how it satisfies the regime." CIO/CRO read these as distinct mental buckets; the bridge is load-bearing for the legal team.

### §V. The compounding case
**Anchor:** `#the-compounding-case`

**Thesis:** Today, compliance cost grows with system complexity. Every new capability requires new attestations, new controls, new audit surfaces. Sovereign architecture inverts this curve. Auditability compounds as substrate thickens at the operator's node — provenance accumulates, zone classifications harden, approval patterns calcify into precedent. Compliance cost per capability drops over time. This is the polarity argument translated to the CFO's vocabulary.

**Beats:**
1. Open: the industry-standard curve (cost &uarr; with complexity)
2. Why sovereign architecture inverts: substrate thickens at the operator's node
3. Dollar terms: auditability gets cheaper as use compounds, because the logbook writes itself
4. Cultivation-architecture register: the compounding is emergent from structural commitments, not engineered directly
5. Close §V: substrate at the operator's node is how compliance becomes a cultivation practice rather than a friction tax. Transition → closing pullquote.

**Closing pullquote (verbatim, after §V):**

> *The Grove Foundation's architecture proposals don't replace regulatory frameworks. They simply give all players in the ecosystem a way to actually satisfy them more rigorously, at decreasing costs, and with compounding benefits.*

### §VI. Forward infrastructure
**Anchor:** `#forward-infrastructure`

**Thesis:** The compliance regime is forward infrastructure for the polarity reversal. Regulators didn't know they were drafting for sovereign architecture; they were drafting for something the field had not yet named. The architecture arrived second. The regime was already waiting.

**Beats:**
1. Open: the "forward infrastructure" claim
2. One sentence naming out-of-scope future threads: NYDFS Part 500, EU AI Act, SEC AI disclosure as regimes warranting their own pieces
3. Bauhaus register: embrace-and-reframe. We do not reject vendor AI; we embrace apex compute as critical infrastructure and publish the substrate-polarity standards that let the compliance regime enforce what it was drafted to enforce
4. Bridge sentence into close

### Close

- h3: `This is a new kind of computer science, and we are building it in the open` (anchor `#building-in-the-open` if Sovereignty precedent matches; confirm at Commit 8)
- Subscribe block (Sovereignty pattern inherited)
- Further Reading block per §7 of this SPEC

## 5. Pullquote architecture

Two pullquotes, both verbatim from preview, both locked. Markup: `<div class="pullquote">…</div>` per Sovereignty file-local precedent (confirm on first authoring).

- **Opening pullquote** — placement: after §II, polarity-meets-compliance hinge:
  > *Third-party concentration risk is the regulatory vocabulary for negative polarity. The substrate of the institution's decisions is accumulating somewhere the institution cannot reach.*

- **Closing pullquote** — placement: after §V, rhetorical weight at compounding argument:
  > *The Grove Foundation's architecture proposals don't replace regulatory frameworks. They simply give all players in the ecosystem a way to actually satisfy them more rigorously, at decreasing costs, and with compounding benefits.*

## 6. Commit structure + SHA ledger (living)

CC populates SHA column inline during execution. Each commit lands with SHA recorded here before next commit fires. Any out-of-spec mid-sprint corrective commit added to the table as encountered.

| # | Type | Subject | SHA |
|---|---|---|---|
| 1 | `docs:` | SPEC authored and committed | f1ae826 |
| 1a | `docs:` | SPEC amended to integrate OpenClaw as bounded reference (§II, §III, Further Reading) | 6f5a920 |
| 2 | `feat:` | page shell + head metadata stack + canonical + skeleton section scaffolding | b80e72d |
| 3 | `feat:` | lead section (eyebrow + headline + dek + byline + lead graf) + §I | 58ac58e |
| 3a | `docs:` | SPEC amended to declare register-note <aside> pattern (post-polarity-canonicalization-v1 close at 7dc4d53; A&A first instantiation in Commit 4) | 8ad0c07 |
| 4 | `feat:` | §II + opening pullquote (instantiates register-note pattern for first polarity use) | 84a4143 |
| 5 | `feat:` | §III | 1fcc0e8 |
| 6 | `feat:` | §IV | 9b861ed |
| 7 | `feat:` | §V + closing pullquote | b0b5c57 |
| 8 | `feat:` | §VI + close section (h3 + subscribe + Further Reading) | 0ecce90 |
| 9 | `feat:` | ScholarlyArticle JSON-LD + (FAQPage JSON-LD if beats support) + anchor IDs on all six h2 | — |
| 10 | `feat:` | alerts landing page link + internal cross-references (Sovereignty "see also" back-link, GRV-001/003 forward-links if applicable) | — |

Preview &rarr; confirm &rarr; fire &rarr; SHA &rarr; next-commit. No commit clusters without Jim greenlight.

## 7. Metadata stack plan

Inherited from Chunk 3 / Sovereignty alert. File-local precedent confirmed at authoring.

- `<meta name="author" content="Jim Calhoun">`
- `<link rel="canonical" href="https://the-grove.ai/alerts/architecture-and-accountability">`
- **Open Graph (13 tags):** og:title, og:description, og:type=article, og:url, og:site_name, og:image, article:published_time, article:author, article:section (CIO Alert), article:tag &times; 4 (AI governance, sovereign cognition, compliance, banking)
  - og:title strips the " &mdash; The Grove Foundation" suffix per Sovereignty precedent
- **Twitter Card (4 tags):** summary_large_image variant
- **Dublin Core (10 fields, doctrinal-piece variant):** DC.title, DC.creator, DC.publisher, DC.date, DC.type, DC.format, DC.identifier, DC.rights=CC BY 4.0, DC.subject, DC.relation. No DC.source (this is a doctrinal piece, not a response-to-source like Sovereignty). No DC.language (omitted per Sovereignty file-local precedent for doctrinal alerts).
- **Citation metadata (5 fields):** citation_title, citation_author, citation_publication_date, citation_publisher, citation_fulltext_html_url
- **JSON-LD ScholarlyArticle:**
  - Person author with Organization affiliation (Jim Calhoun / The Grove Foundation)
  - `isBasedOn` chains to: GRV-001, GRV-003, Telemetry Trap, Sovereignty alert
  - `citation` [] exposes SR 11-7, FFIEC IT Handbook, OCC 2023-17 as structured references
  - Uses raw Unicode em-dash (U+2014) and plain ASCII apostrophe inside JSON-LD strings
- **FAQPage JSON-LD (conditional):** add if §I and §IV land as Q&A-shaped beats. Decide during Commit 9 authoring.

## 8. Anchor-ID strategy

Every h2 in the body carries a kebab-case anchor. Insert as `id="..."` after class attribute per substrate convention.

- `#the-question-the-regulator-actually-asks` — §I
- `#why-vendor-ai-makes-the-question-harder` — §II
- `#the-mechanics-of-control` — §III
- `#where-the-regimes-meet` — §IV
- `#the-compounding-case` — §V
- `#forward-infrastructure` — §VI

No h3 sub-beats planned. If any land during authoring, add kebab-case anchors per same rule. Close h3 anchor (`#building-in-the-open` candidate) confirmed at Commit 8.

## 9. Phase 6 verification matrix (pre-staged, living)

Per-target curl, local CMD, no `web_fetch`. CC populates Result column inline during Phase 6. All PASS required before sprint close.

| # | Target | Command sketch | Pass criterion | Result |
|---|---|---|---|---|
| 1 | Page serves 200 | `curl -s -o NUL -w "%{http_code}" https://the-grove.ai/alerts/architecture-and-accountability/` | `200` | — |
| 2 | Canonical link correct | `curl -sL <url> > live.html` + python grep `link rel="canonical"` | matches slug | — |
| 3 | Opening pullquote serves | python grep for "Third-party concentration risk is the regulatory vocabulary" | 1 hit | — |
| 4 | Closing pullquote serves | python grep for "don't replace regulatory frameworks" | 1 hit | — |
| 5 | Own-or-govern register | python grep for "own or govern" | &ge;1 hit | — |
| 6 | Polarity vocabulary | python grep for "polarity" | &ge;3 hits (lead, §II, §V) | — |
| 7 | Ratchet bounded | python grep for "ratchet" | 1–2 hits only | — |
| 8 | Negative-polarity-not-unlawful register | python grep for "not unlawful" / "is lawful" / "risk profile, not" | &ge;1 hit | — |
| 9 | JSON-LD ScholarlyArticle parses | fetch + python `json.loads` on ld+json block | parses clean | — |
| 10 | All six h2 anchors present | python grep for each kebab anchor | 6/6 | — |
| 11 | Further Reading full link set | python grep for each label (GRV-001, GRV-003, Telemetry Trap, SR 11-7, FFIEC, OCC 2023-17, NIST AI RMF, BCBS 239, Sovereignty) | 9/9 link labels | — |
| 12 | Alerts landing links to new alert | `curl -sL alerts/ > landing.html` + python grep new slug | 1 hit | — |
| 13 | No stray "rented" (harmonization preservation) | python grep for "rented" | 0 hits | — |
| 14 | No accusation-register strays | python grep for "vendor AI is" / "regulators haven't" / "illegal" | 0 hits each | — |
| 15 | Photosynthesis/aspen/tree-rings/seed-corn hold | python grep for "photosynthesis" / "aspen" / "tree rings" / "seed corn" | 0 hits each | — |
| 16 | OpenClaw reference present in §II | python grep for "OpenClaw" in §II body | &ge;1 hit | — |
| 17 | OpenClaw strangler-fig reference in §III | python grep for "OpenClaw" or "capability-swap" in §III body | &ge;1 hit | — |
| 18 | OpenClaw GitHub link in Further Reading | python grep for "github.com/openclaw" | 1 hit | — |
| 19 | OpenClaw register stays bounded | python grep for "OpenClaw" total in published page | 3–5 hits total (no runaway) | — |
| 20 | Register-note <aside> for polarity present in §II | python grep for `class="register-note"` and `id="register-note-knowledge-polarity"` | 1 hit each | — |
| 21 | Register-note CSS rules defined | python grep page CSS for `.register-note` selector | 1+ hits | — |
| 22 | No broken canonical-vocabulary fragment links | python grep for `vocabulary#knowledge-polarity` and `vocabulary#` substring | 0 hits each (inline-defined in this commit; harmonized later) | — |

## 10. Working-artifact discipline

SPEC §6 commit table and §9 verification matrix are living ledgers maintained **in place during execution**. CC updates SHA column at each commit land. CC updates verification Result column at Phase 6. DEVLOG reflects already-populated tables at close; does not reconstruct them.

Mid-sprint corrective commits: log to §6 as added rows with SHA at land. Not a bug — institutional discipline for catching register and disambiguation issues before deploy.

**Line-count threshold convention (caught Commit 2 polarity-canon, recurred Commit 3a A&A).** SPEC files use one-physical-line-per-paragraph markdown convention. Pure SPEC amendment commits with bulleted prose + code blocks produce smaller line-count deltas than soft-wrapped estimates suggest. Future verification matrix entries for SPEC line-count delta should anchor to actual file convention (typically +20 to +30 for amendment-style commits, not +30 to +50). Apply when authoring future verification thresholds.

## 11. Out-of-scope and boundary calls

- **No evidence ledger.** Sovereignty had one (four evidence clusters); doctrinal piece does not need external grounding. Argument carries alone.
- **Photosynthesis / aspen / tree-rings / seed corn** — all held. No agrarian metaphor substitution. Compliance vocabulary only. Policed in §9 verification row 15.
- **NYDFS Part 500 / EU AI Act / SEC AI disclosure** — named once in §VI as threads not pulled; no further treatment. Future alerts.
- **Insurance (NAIC) and healthcare (HIPAA + FDA SaMD)** — one sentence in §IV, nothing more. Not worked verticals.
- **`/content/*` production-accessible surfaces** — untouched by this sprint. Queued for `rented-substrate-harmonization-v2` micro-sprint post-Chunk-3.5 close.
- **No Substack / distribution comms** — this sprint is on-site only. Cross-surface comms queued post-close.
- **No OG image redesign** — reuse Sovereignty's image asset pattern; custom OG image deferred.
- **OpenClaw bounded reference only.** Three sentences across §II and §III plus one Further Reading link. Full case-study treatment, primitive-by-primitive mapping, and strangler-fig walkthrough are scoped to Sprint B (`primitive-autonomaton-walkthrough-v1`). If §II or §III prose drifts toward expanded OpenClaw treatment during authoring, stop and confirm before continuing.
- **Register-note → canonical-link harmonization.** Register-note <aside> instantiations in this alert (and any future alert authored before /vocabulary/ HTML ships) get swapped for canonical fragment links via global str_replace once the canonical-vocabulary curation sprint lands /vocabulary/. A&A's polarity register-note in §II is the first such instantiation. Queued.

## 12. Handoff notes to CC

- Working directory: `C:\GitHub\grove-launch-site`
- Branch: `master`
- Deploy: `npx vercel --prod --yes` from CMD. Vercel auto-deploy remains broken; always manual.
- Structural template to model: `alerts/sovereignty-is-all-you-need/index.html`
- New page path: `alerts/architecture-and-accountability/index.html`
- Alerts landing page requiring link update: confirm path at Commit 10 authoring
- File-local precedent rule: confirm em-dash form, apostrophe form, link styling, `rel` form on first edit of any file
- str_replace match discipline: stop and report if any old_str fails unique-match; do not proceed
- Commit cadence: one commit = one structural beat; preview-confirm-fire per cluster
- No `web_fetch` for verification; `curl` only, local CMD
- Stop after Commit 1 (`docs:` SPEC) and report SHA for next-phase greenlight

**Register-note authoring guidance** (for CC at Commit 4 §II and any future first-use-of-canonical-term):

- Pattern: see §3 substrate conventions, "Register-note <aside> pattern" subsection
- Term-slug derivation: kebab-case the canonical term as it appears in `docs/grove-canonical-vocabulary.md` heading; for "Knowledge polarity" the slug is `knowledge-polarity`
- Definition source: pull verbatim or near-verbatim from the canonical entry in `docs/grove-canonical-vocabulary.md`; do not improvise definitional prose at the alert layer
- For Knowledge polarity at A&A Commit 4: definition should land the three-terminal model (ground / positive / negative) in 2–3 sentences max
- CSS placement: at first instantiation, define `.register-note`, `.register-note-label`, `.register-note-body` selectors in the page's inline `<style>` block, mirroring the visual weight pattern of `.pullquote` but with definitional rather than rhetorical register (smaller type, lighter border, no italic, no large quotation marks)
- Confirm Sovereignty does NOT already use a `.register-note` class before authoring; if it does, mirror exactly. If not, A&A defines the class.

**OpenClaw factsheet** (for CC reference during Commit 4 §II prose and Commit 5 §III prose):
- Built by Peter Steinberger (Austrian, ex-PSPDFKit founder, sold 2021, retired five years, came back)
- Released November 2025 as Clawdbot; renamed Moltbot Jan 27 2026 after Anthropic trademark complaint; renamed OpenClaw three days later
- 160,000+ GitHub stars within weeks; faster early growth than Next.js, Kubernetes, Vite
- Steinberger acqui-hired into OpenAI February 14, 2026; project moves to open-source foundation, OpenAI continues sponsoring
- Architecture: local config + interaction history; SKILL.md skills directory pattern; LLM-agnostic (Claude / DeepSeek / GPT swappable); messaging-platform UI (Signal, Telegram, Discord, WhatsApp)
- Public failure-mode catalog: rogue iMessage bulk-message spam after iMessage access granted; autonomous publishing of a hit-piece against a Python developer who rejected its code; ignored repeated stop commands while wiping inbox of Meta's AI Alignment director; AWS outages attributed to AI coding bot blunder
- Repo: https://github.com/openclaw/openclaw
- Wikipedia: https://en.wikipedia.org/wiki/OpenClaw
- Use these facts as ground truth. Do not paraphrase loosely. Specifically, do not claim Steinberger's age, do not invent incident dates, do not enumerate failure modes beyond the four named above unless additional sources are confirmed at authoring time.
