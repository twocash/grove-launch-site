# DEVLOG — rented-substrate-harmonization-v1

**Sprint ID:** rented-substrate-harmonization-v1
**Operator:** Jim Calhoun
**Executor:** Claude Code
**Date:** 2026-04-21
**Branch:** master (direct, no worktree — cross-file scope, six sequential commits)
**Pre-sprint tip:** `a654578` (cio-alerts-calibration-v1 close)
**Sprint tip:** _(to be filled post-commit-6 push)_

## Sprint arc

Corpus-wide register harmonization. During `homepage-calibration-and-ai-first-v1` the homepage hero migrated from "Stop Building on Rented Ground" to "Govern the Substrate. Commoditize the Compute." — a deliberate polarity-native register shift. The supporting corpus retained residual "rented" / "landlord" / "rented ground" vocabulary that was coherent under the old hero and orphaned under the new. This sprint harmonized five live surfaces to the **own-or-govern** disjunctive structural register, preserved three "rented"-bearing surfaces where the word was doing precise technical work (not metaphor), and surfaced one Q3 bonus finding about production-accessible `/content/*` paths that requires a follow-up micro-sprint.

Register discipline: moved from an older metaphor to a precise descriptive claim, not from one metaphor to another. No "extracted" / "leaked" / other loaded substitutions. Bauhaus posture — describe the structural condition; do not moralize it.

## Phase-by-phase adaptations

### Commit 1 — Homepage Production Reality pullquote (`0a3737a`)

**File:** `index.html` line 629

"Durable institutions that matter cannot afford to build cognition on rented, non-portable, externally governed substrate." → "Durable institutions cannot afford to build cognition on substrate they do not own or govern."

Two changes in one surgical swap: dropped "that matter" qualifier (per SPEC editorial note — "durable institutions" carries the qualifier structurally), and replaced "rented, non-portable, externally governed substrate" with the own-or-govern disjunction. Pullquote now reads as descriptive structural claim, register-consistent with the hero.

### Commit 2 — Sovereignty institutional-problem sentence (`c520788`)

**File:** `alerts/sovereignty-is-all-you-need/index.html` line 361

Surgical swap of the "rented, non-portable, externally governed substrate" clause inside the sentence "The cleanest way to state the institutional problem… That sentence is not ideology. It is operational risk." The "not ideology / operational risk" framing preserved verbatim — Jim's own construction already doing the Bauhaus-posture work the harmonization is trying to surface.

### Commit 3 — Pattern Benchmark Anthropic card (`cc9ab48`)

**File:** `alerts/ai-deployment-pattern-benchmark/index.html` line 778

"a rented, centralized dependency" → "a centralized dependency the operator does not own or govern". This was the orphan metaphor case — the Anthropic card carried "rented" without its structural opposite, while the adjacent OpenAI card (line 772) carried the properly-paired "rented, not owned" construction. Post-edit: the two cards now read as distinct structural claims. Keep 1 (OpenAI card "rented, not owned") preserved explicitly.

### Commit 4 — Observations Technical Reality headline (`26716c8`)

**File:** `observations/index.html` line 231

"building on <em>rented ground.</em>" → "building on substrate <em>it does not own or govern.</em>"

The register move on this one is specifically the `<em>` shift: from "rented ground" (metaphor emphasis) to "it does not own or govern" (claim emphasis). Slightly longer than the original but carries the structural precision cleanly. Operator confirmed the full "own or govern" disjunction over the tighter "doesn't own" alternative, because the governance half of the disjunction is load-bearing (an open-weight deployment may be governed but not owned, or vice versa — sovereignty needs both).

### Commit 5 — Observations landlord metaphor (`847c106`)

**File:** `observations/index.html` line 233 (SPEC documented 232, actual line 233 — 1-line drift preserved in SPEC per operator direction)

"Every organization building on a centralized API is at the mercy of a landlord who can renovate the building while you're living in it." → "An organization that does not own or govern the substrate its systems run on absorbs the vendor's deprecation decisions as operational cost."

The landlord/building metaphor was a second orphan — once Edit 4 replaced the "rented ground" headline, the landlord metaphor lost its semantic scaffolding. Rewritten to name the structural mechanism directly (non-ownership, non-governance, deprecation-as-cost-absorption) without the property-rental analogy. The "This wasn't a version upgrade. **It was a forced rebuild.**" beat preserved verbatim — doing concrete argumentative work that the structural rewrite depends on.

**Substrate fix at preview time:** initial draft used plain ASCII apostrophe in "vendor's" — operator caught the inconsistency with file-local body-prose precedent (`wasn&rsquo;t`, `you&rsquo;re` appear in the same paragraph using `&rsquo;` entity). Fixed to `vendor&rsquo;s` before fire.

### Commit 6 — Sprint close docs (this commit)

This DEVLOG + SPEC.md (with living ledger populated inline during execution). Per working-artifact discipline established in the sprint brief: SPEC Section 6 commit table updated in-place as each edit landed (SHA column added, rows populated one-by-one); SPEC Section 7 verification matrix updated with PASS marks + timestamps as curl verification ran. DEVLOG reflects already-populated tables rather than reconstructing them.

## Keeps preserved (SPEC Section 4)

Three surfaces retain "rented" where the word is doing precise structural work rather than metaphor. All verified untouched during sprint:

| # | Surface | File:line | Preserved text |
|---|---|---|---|
| Keep 1 | Pattern Benchmark OpenAI card | `benchmark:772` | "Enterprises discovered the logic they had tuned was rented, not owned." |
| Keep 2 | Pattern Benchmark displacement taxonomy | `benchmark:909` | "Rented inference. Ephemeral models. Unpriced deprecation risk. Budget fatigue building." |
| Keep 3 | Observations canvas JS visualization label | `observations:512` | "All nodes: rented inference, captured telemetry" |

Phase 6 verification confirmed Keeps 1 + 2 present (grep count 2 on benchmark page) and Keep 3 present (grep count 1 on observations page).

## Commit log

See SPEC Section 6 living ledger for the populated commit table. Six commits in sequence:

- **Commit 1** — `0a3737a` — tone: homepage Production Reality pullquote to own-or-govern register
- **Commit 2** — `c520788` — tone: Sovereignty institutional-problem sentence to own-or-govern register
- **Commit 3** — `cc9ab48` — tone: Pattern Benchmark Anthropic card to own-or-govern register
- **Commit 4** — `26716c8` — tone: Observations Technical Reality headline to own-or-govern register
- **Commit 5** — `847c106` — tone: Observations landlord metaphor to structural register
- **Commit 6** — _(this commit)_ — docs: rented-substrate-harmonization-v1 closed, DEVLOG finalized

Production deploy after Commit 5 push: `https://grove-launch-site-miotx3mkq-twocashs-projects.vercel.app`, aliased to the-grove.ai. Vercel inspect URL: `https://vercel.com/twocashs-projects/grove-launch-site/BAhWtzft6vWCo1sKt85pLTF1VatM`.

## Phase 6 verification (8/8 PASS)

All eight verification targets passed on first curl fetch post-deploy. Full PASS matrix with hit counts and timestamps lives inline in SPEC Section 7. CDN edge served fresh content immediately — no stale-cache issues observed on any target, no `--force` redeploy required.

## Q3 bonus finding — `/content/*` production accessibility

SPEC Section 5 listed `/content/*` paths as "staging snapshots" excluded from sprint scope with a contingency clause: "If the /content/* HTML snapshots turn out to be accessible in production (Vercel routing discovery during Phase 6 verification), log it in DEVLOG and queue a follow-up micro-sprint."

Phase 6 Q3 probe confirmed the paths ARE production-accessible via Vercel routing:
- `https://the-grove.ai/content/observations.html` → 308 → `/content/observations` → 200
- `https://the-grove.ai/content/observations-visualization.html` → 308 → `/content/observations-visualization` → 200
- `https://the-grove.ai/content/beat-1-architecture-is-the-policy.md` → 200 (markdown served directly; carries ≥1 "rented" hit)

Vercel's default routing behavior serves anything in `/content/` at its URL path. The `.html` extensions trigger 308 redirects to the extension-stripped canonical URLs, but the pages serve cleanly at 200.

**Queued follow-up:** `rented-substrate-harmonization-v2` (content-path scope). Scope: audit all `/content/*` for "rented" / "landlord" / pre-calibration register, apply the same own-or-govern harmonization. Alternative framing per SPEC Section 5 implicit guidance: consider whether `/content/*` should be production-routable at all, or whether Vercel should exclude `/content/` from the routing surface via `vercel.json` (structural fix instead of content fix).

**Priority:** Medium. Not blocking any current work; visible only to readers who know the path to probe.

## Staging discipline

All six commits used explicit `git add <file>` rather than `-am`. Stale `do-commit.bat` modification stayed quarantined throughout, matching the protocol established across the five predecessor sprints. `.bat` commit-message wrappers executed via `cmd //c "<full-windows-path>"` from Git Bash and deleted immediately after use.

SPEC.md working-artifact updates stayed unstaged through Commits 1–5 (living ledger maintained in the working tree), then co-committed with DEVLOG in Commit 6 per the precedent from cio-alerts-calibration-v1 and about-page-canonical-refactor-v1. This preserves per-commit diff hygiene (each tone: commit shows only the file edited) while delivering on the "spec tracked alongside the sprint commits" rule at sprint close.

## Operator decisions at preview time

- **Q1 — Edit 4 rewrite choice:** operator confirmed "substrate it does not own or govern." (full own-or-govern disjunction) over the tighter alternatives. Governance half of the disjunction is load-bearing — sovereignty needs both ownership and governance, and they can fail independently.
- **Q2 — Edit 5 rewrite choice:** operator confirmed landlord metaphor out, structural replacement in. Alternative (keep landlord as parenthetical) rejected because the metaphor was already orphaned by Edit 4.
- **Q3 — `/content/*` content drafts:** operator directed probe via curl during Phase 6. Probe confirmed production accessibility; queued as v2 micro-sprint.
- **Q4 — Timing:** harmonization only this session; Chunk 3.5 deferred.
- **Q5 — Polarity essay publication:** deferred.
- **Line drift on Edit 5:** operator directed leave SPEC.md line number as-is (SPEC said 232, actual line 233). Unique-string match carried cleanly. Cosmetic drift only.
- **Substrate correction mid-preview (Edit 5):** operator caught plain-ASCII "vendor's" in initial draft, directed harmonize to `vendor&rsquo;s` entity to match file-local body-prose precedent. Applied before fire.

## Out of scope (per SPEC Section 5 + operator direction)

- `/content/*` body-prose harmonization — queued as `rented-substrate-harmonization-v2`
- `sprints/homepage-calibration-and-ai-first-v1/DEVLOG.md` — sprint archive, historical record
- `sprints/cio-alerts-calibration-v1/SPEC.md` — sprint archive, historical record
- Chunk 3.5 authoring — deferred per Q4 operator direction
- Polarity essay publication — deferred per Q5 operator direction
- The stale `do-commit.bat` working-tree modification — quarantined per established protocol

## CDN and crawler reindex

**Immediate (completed this sprint):**
- Vercel edge-cache invalidated automatically on deploy of tip `847c106`. Post-deploy curl verification confirmed fresh content on all eight targets with no stale-cache signal. No `--force` redeploy required.

**Follow-up (post-sprint, per SPEC Section 8):**
- Sitemap submission to Google Search Console — queued but not yet run (operator action)
- Bing Webmaster Tools submission — queued but not yet run (operator action)
- Manual URL Inspection requests on the seven affected URLs — operator discretion
- 7-day cold-read diagnostic on logged-out ChatGPT, Claude, Perplexity sessions — queued for 2026-04-28 window

Per SPEC Section 8: "Log in DEVLOG: 'AI crawler reindex submitted <date> — observe for register convergence over following 7 days.'" → **to be logged when crawler submission runs**.

## Provenance

- Triggered 2026-04-21 by register-slippage audit after `homepage-calibration-and-ai-first-v1` sprint close
- CDN cache audit-miss trigger: `web_fetch` returning pre-calibration "Stop Building on Rented Ground" hero while browser DOM showed "Govern the Substrate" — informed SPEC Section 8 directive "Use curl from local, not web_fetch" for Phase 6 verification
- SPEC authored by Consumer Claude (strategic) 2026-04-21
- SPEC location: `sprints/rented-substrate-harmonization-v1/SPEC.md`
- Executed by Claude Code (CC) 2026-04-21

Predecessor sprints:
- `cio-alerts-calibration-v1` (closed 2026-04-21, tip `a654578`)
- `about-page-canonical-refactor-v1` (closed 2026-04-21)
- `homepage-title-tag-fix-v1` (closed 2026-04-21)
- `homepage-calibration-and-ai-first-v1` (closed 2026-04-21) — originating sprint that produced the register-slippage this sprint harmonized

## Not captured here

- Post-sprint crawler reindex timestamps (will be logged as operator runs the submissions)
- 7-day cold-read diagnostic results (window: 2026-04-28 or so)
- `rented-substrate-harmonization-v2` scoping — separate post-trinity micro-sprint for `/content/*` paths
