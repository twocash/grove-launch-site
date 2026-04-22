# Phase 0.5a Execution Prompt — /content/* Audit

**Sprint:** composition-coherence-v1
**Phase:** 0.5a (audit + stage only — no destructive changes)
**Predecessor:** Phase 0 SPEC committed
**Successor:** Phase 0.5b (execute staged changes after Jim greenlight), then Phase 1

---

## Context

The-grove.ai has a `/content/` directory containing seven files of mixed provenance — some are production-accessible HTML pages, some are markdown drafts, one is a .docx. They accumulated across earlier sprints without a coherence policy.

The composition-coherence-v1 sprint's thesis: **composition is the root of coherence**. Every page reachable by a human or LLM must be Tier A LLM-composable, or not reachable at all. This phase audits `/content/*` against that standard and stages cleanup. No deletions or edits are executed — only enumeration, classification, and change-staging for operator approval.

## Files in scope

From repo listing at sprint open (cbf64ca):

- `content/beat-1-architecture-is-the-policy.md`
- `content/g7-reference-table.html`
- `content/lambda-page-strategy.md`
- `content/lambda-scoreboard.html`
- `content/observations-visualization.html`
- `content/observations.html`
- `content/the-telemetry-trap-grove-white-paper.docx`

If the `/content/` directory contains additional files at time of execution, include them. If any of the above are missing, note it.

## Your task

### Step 1 — Reachability audit

For each file in `/content/*`:

1. **Public reachability:**
   - Read `vercel.json` for any rewrites, redirects, or `cleanUrls` behavior touching `/content/`
   - Grep the entire repo for inbound links to each file. Patterns to check (account for verb/noun conjugation and both slash conventions):
     - `href="/content/<filename>"`, `href="content/<filename>"`
     - `src="/content/<filename>"`, `src="content/<filename>"`
     - Bare references: `/content/<filename>`, `content/<filename>`
   - For HTML files: note whether Vercel would serve them at `https://the-grove.ai/content/<filename>` given current `vercel.json` config. You do not need to hit the live site; static reasoning from `vercel.json` is sufficient.

2. **Current tier:**
   - JSON-LD present? (any `application/ld+json` script blocks)
   - FAQPage present?
   - Primary type declared? (WebPage, Article, TechArticle, etc.)
   - Canonical metadata present? (DC.subject, OG tags, `<link rel="canonical">`)
   - Composition surface present? (will be no — that pattern hasn't shipped yet. Record as N/A.)

3. **Content intent:**
   - User-facing published surface?
   - Planning artifact (strategy doc, scratch, draft)?
   - Source asset (e.g., `.docx` source for a downloadable PDF that lives elsewhere)?

### Step 2 — Classification

Assign exactly one classification to each file:

- **KEEP + UPLIFT** — User-facing surface. Add to SPEC §3 WS1 table as a new Phase 3 row with target primary type.
- **MOVE** — Misfiled. Belongs under `/docs/` (planning artifacts) or `/papers/` (source assets for published PDFs) or elsewhere. Stage the `git mv`.
- **NOINDEX** — Must remain at current path (external links exist) but should not be crawler-visible. Stage a `robots.txt` rule **or** a `<meta name="robots" content="noindex">` addition.
- **REMOVE** — Dead artifact, no inbound links, no public value. Stage `git rm`.
- **UNCLEAR** — Genuinely ambiguous. State the specific question for Jim.

### Step 3 — Write audit report

Write `sprints/composition-coherence-v1/content-audit.md` with this exact structure:

```
# /content/* Audit — composition-coherence-v1 Phase 0.5a

**Executed:** <ISO date>
**Parent tip:** cbf64ca (aa-v1.0)

## Summary
- Total files: N
- KEEP + UPLIFT: N
- MOVE: N
- NOINDEX: N
- REMOVE: N
- UNCLEAR: N

## Classification table
| File | Reachable via Vercel? | Inbound links | JSON-LD? | Intent | Classification | Rationale |
|------|----------------------|---------------|----------|--------|----------------|-----------|
| ... | ... | ... | ... | ... | ... | ... |

## Staged changes (NOT EXECUTED)

### Moves
<git mv commands, one per line, prefixed with `# `>

### Deletions
<git rm commands, one per line, prefixed with `# `>

### Noindex
<for robots.txt approach: show the diff>
<for meta-tag approach: show the proposed meta tag and the file(s) it lands in>

### New Phase 3 queue entries (proposed SPEC §3 WS1 additions)
| Page | Current tier | Target primary type | Notes |
|------|--------------|---------------------|-------|
| ... | ... | ... | ... |

## Recommended Phase 3 order adjustment
<if any KEEP+UPLIFT surfaces should shift position in Phase 3 order, state why; otherwise "no change">

## Open questions for Jim
<list any UNCLEAR items with specific questions; otherwise "none">
```

### Step 4 — Commit audit report

Commit the audit report only. Commit message:

```
compo-v1 phase-0.5a: /content/* audit report (staged, not executed)
```

**Do NOT execute any staged moves, deletions, or noindex changes.** Those require Jim's approval in the next session and fire in Phase 0.5b.

### Step 5 — Report back

Print to stdout exactly this format:

```
AUDIT COMPLETE

Files classified: N total
  KEEP + UPLIFT: <list of filenames>
  MOVE:          <list of filenames>
  NOINDEX:       <list of filenames>
  REMOVE:        <list of filenames>
  UNCLEAR:       <list of filenames with 1-line question each>

Audit report: sprints/composition-coherence-v1/content-audit.md
Commit SHA:   <abbrev SHA>

Next: Jim approves staged changes → Phase 0.5b executes them → Phase 1 begins
```

## Reference

- **SPEC:** `sprints/composition-coherence-v1/SPEC.md`
  - §3 WS4 defines this audit's scope
  - §5 Phase 0.5 describes this phase
  - §6 defines Tier A (the standard every user-facing surface must meet)
  - §10 defines working discipline
- **Tier A reference exemplar:** `alerts/architecture-and-accountability/index.html` — the page Grok composed from cold-prompt in 8 hours, the pattern this sprint generalizes site-wide
- **Live site:** https://the-grove.ai (cbf64ca tip)
- **Vercel config:** `vercel.json` at repo root (cleanUrls:true is known-set)

## Working discipline (inherited from SPEC §10)

- **One commit = one structural beat.** The audit report is one commit. No drive-by edits.
- **Audit + stage only.** Do not execute cleanup this phase. Zero file deletions, moves, or edits in `/content/` or elsewhere. The only file written is `sprints/composition-coherence-v1/content-audit.md`.
- **Concept-coverage over literal-word-frequency.** When grepping for inbound links, account for `/content/` vs `content/`, trailing slashes, and reference variants.
- **No stealth cleanups.** Every proposed change must be staged visibly in the audit report.
- **No guessing.** If classification is genuinely ambiguous, mark UNCLEAR with a specific question for Jim.
- **Re-paste-able context.** This prompt is self-contained; do not reference prior sessions or chat turns.

## Acceptance criteria

- Every file in `/content/*` appears exactly once in the classification table
- Every classification has a one-line rationale
- No repo files deleted, moved, or edited in this phase (audit + stage only)
- Audit report committed at `sprints/composition-coherence-v1/content-audit.md`
- Commit SHA reported to stdout for lazy-write into SPEC §11 ledger
- Report-back format (Step 5) followed exactly so Jim can scan classifications without opening the report

---

**Fire.**
