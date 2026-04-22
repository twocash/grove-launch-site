# /content/* Audit — composition-coherence-v1 Phase 0.5a

**Executed:** 2026-04-22
**Parent tip:** cbf64ca (aa-v1.0)

## Summary
- Total files: 7
- KEEP + UPLIFT: 0
- MOVE: 2
- NOINDEX: 0
- REMOVE: 4
- UNCLEAR: 1

## Reachability baseline

`vercel.json` config: `cleanUrls: true`, `trailingSlash: false`, `outputDirectory: "."`. No redirects or rewrites touch `/content/`. Consequence: every file in `/content/` is publicly reachable at `https://the-grove.ai/content/<name>` — HTML via clean-URL (`.html` stripped), `.md` as raw markdown, `.docx` as downloadable blob. Production status of `/content/observations`, `/content/observations-visualization`, and `/content/beat-1-architecture-is-the-policy.md` returning HTTP 200 was already verified in `rented-substrate-harmonization-v1` DEVLOG (lines 95–97). Inbound-link scope: `href=` and `src=` attribute forms with both `/content/` and `content/` leading-slash variants, across all `.html` and `.md` files in the repo. Zero production-page inbound links found to any of the seven files. All surviving references are inside prior-sprint SPEC/DEVLOG files and this sprint's own prompts.

No `robots.txt` at repo root. No noindex meta on any `/content/` file.

## Classification table

| File | Reachable via Vercel? | Inbound links | JSON-LD? | Intent | Classification | Rationale |
|------|----------------------|---------------|----------|--------|----------------|-----------|
| beat-1-architecture-is-the-policy.md | Yes — `/content/beat-1-architecture-is-the-policy.md` serves raw markdown | 0 production links (SPEC/DEVLOG refs only) | N/A (markdown) | Planning artifact — April 7 home-page copy draft; home page has since shipped at `/` | **MOVE** | Historical planning material with no production role; preserve under `/docs/planning/` |
| g7-reference-table.html | Yes — `/content/g7-reference-table` via cleanUrls | 0 production links | No | Polished G7 AI-architecture data visualization, co-dated April 7 with beat-1 draft; ambiguous between source-artifact-for-beat-1 vs. never-shipped draft observation | **UNCLEAR** | See Open question #1 |
| lambda-page-strategy.md | Yes — `/content/lambda-page-strategy.md` serves raw markdown | 0 production links (none) | N/A (markdown) | Planning artifact — April 7 strategic brief for the Λ page; `/lambda/` has since shipped | **MOVE** | Historical planning material with no production role; preserve under `/docs/planning/` |
| lambda-scoreboard.html | Yes — `/content/lambda-scoreboard` via cleanUrls | 0 production links | No | Earlier draft of Λ scoreboard (23KB); superseded by production `/lambda/index.html` (40KB), which is in SPEC §3 WS1 Phase 2 Tier A uplift queue | **REMOVE** | Orphan earlier draft; no Tier A uplift planned for this path; uplift target is `/lambda/` |
| observations-visualization.html | Yes — `/content/observations-visualization` via cleanUrls | 0 production links | No | Earlier draft observation-visualization variant (46KB); superseded by `/observations/index.html` (57KB), in SPEC §3 WS1 Phase 3d queue | **REMOVE** | Orphan earlier draft; preservation-of-viz-code flagged in Open question #2 |
| observations.html | Yes — `/content/observations` via cleanUrls | 0 production links | No | Earlier draft of observations page (46KB); superseded by `/observations/index.html` | **REMOVE** | Orphan earlier draft; production uplift target is `/observations/` |
| the-telemetry-trap-grove-white-paper.docx | Yes — direct download at `/content/…` | 0 production links; production `/alerts/telemetry-trap/` links to the canonical `/docs/the-telemetry-trap-grove-white-paper.docx` (lines 227, 560) | N/A (docx) | Duplicate of canonical `/docs/` version | **REMOVE** | Production alert links the `/docs/` canonical version; `/content/` copy is a stale duplicate |

## Staged changes (NOT EXECUTED)

### Moves

```
# mkdir -p docs/planning    # prerequisite; docs/planning/ does not yet exist
# git mv content/beat-1-architecture-is-the-policy.md docs/planning/beat-1-architecture-is-the-policy.md
# git mv content/lambda-page-strategy.md docs/planning/lambda-page-strategy.md
```

### Deletions

```
# git rm content/lambda-scoreboard.html
# git rm content/observations-visualization.html
# git rm content/observations.html
# git rm content/the-telemetry-trap-grove-white-paper.docx
```

### Noindex

None — no files classified NOINDEX. All MOVE/REMOVE targets eliminate public reachability directly.

### New Phase 3 queue entries (proposed SPEC §3 WS1 additions)

None — no files classified KEEP + UPLIFT at audit time. Contingent on Open question #1 resolution: if `g7-reference-table.html` resolves to PROMOTE, a new row would be added to SPEC §3 WS1 — proposed:

| Page | Current tier | Target primary type | Notes |
|------|--------------|---------------------|-------|
| /observations/g7-ai-architecture-divergence (promoted from content/g7-reference-table.html) | C | Observation + Article with JSON-LD Dataset | New Phase 3f slot; requires editorial framing as an observation |

Staged pending Jim's Open-question-#1 resolution.

## Recommended Phase 3 order adjustment

No change. Phase 3 order remains `/standards/002 → /standards/index → /ratchet → /observations → /membership`. If Open question #1 resolves to PROMOTE, a new Phase 3f slot for `/observations/g7-ai-architecture-divergence` lands after `/membership`.

## Open questions for Jim

1. **`g7-reference-table.html` disposition.** Polished G7 country AI-architecture visualization (sovereign vs. centralized tags), co-dated April 7 with `beat-1-architecture-is-the-policy.md`. No JSON-LD, no inbound links, no production role. Three defensible paths:
   - **(a) REMOVE** — treat as source data assembled while drafting beat-1; git history preserves.
   - **(b) MOVE** to `/docs/planning/` — same rationale as beat-1 and lambda-page-strategy: preserved as structured source artifact.
   - **(c) PROMOTE** — publish as `/observations/g7-ai-architecture-divergence/` with full Tier A uplift (JSON-LD Article + Dataset, DC.subject, FAQPage, composition surface). New row in SPEC §3 WS1; new Phase 3f commit.

   Audit lean: **(b)** — design is polished but not editorially framed as an observation; (c) would be scope creep relative to this sprint's stated Phase 3 queue. Operator decides.

2. **`observations-visualization.html` preservation.** This file contains interactive-visualization / canvas code. Before `git rm`, is any component of the visualization not already reproduced in production `/observations/index.html`? If yes, that component is an input to the Phase 3d `/observations/` Tier A uplift (port before delete). If no, safe to delete outright in 0.5b.

3. **MOVE target directory.** Proposed target is `/docs/planning/` — a new subdirectory under existing `/docs/` (which currently holds production-linked white-paper PDFs/DOCX). Note: `/docs/planning/` would still be publicly reachable via Vercel default serving. Alternatives:
   - `/sprints/pre-launch-planning/` — cleaner separation from production assets; matches existing sprint-documentation pattern.
   - Delete outright (rely on `git log` for historical recovery).

   Operator guidance determines the exact commands staged for 0.5b.
