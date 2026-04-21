# DEVLOG — sovereignty-alert-tonal-revision-v1

**Sprint ID:** sovereignty-alert-tonal-revision-v1
**Operator:** Jim Calhoun
**Executor:** Claude Code
**Date:** 2026-04-21
**Target page:** https://the-grove.ai/alerts/sovereignty-is-all-you-need
**Target file:** `alerts/sovereignty-is-all-you-need/index.html`
**Branch:** master (direct, no worktree — single-file scope, three sequential commits)

## Sprint arc

Seven surgical tonal edits to the published CIO Alert. The sprint spec (pasted into chat at open) was authored in markdown convention; the actual target file is static HTML with Grove's design-system classes. CC's adaptation work was the substrate translation — markdown → HTML — gated by phase-by-phase preview before each edit. Operator confirmed every wrapper, attribute, and entity-escaping choice. Prose was word-for-word immutable from the spec.

## Phase-by-phase adaptations

### Phase 1 — Edit 1 (insert apex-as-utility paragraph)

Insert new `<p class="body-text">` between the thesis `<p class="lead">` and the "Which is why..." transition. Em-dashes rendered as `&mdash;` per file convention. No new wrappers introduced.

### Phase 2 — Edit 2 (half-cures → complementarity frame)

Replace the `<p class="body-text">` at the "They are half-right about the cure" location. Spec's `new_str` dropped the `<em>should</em>` italics; replacement carries no `<em>`. Two `&mdash;` in the complementarity clause. Prose word-for-word.

### Phase 3 — Edit 3 (institutional-risk sentence)

Insert new `<p class="body-text">` between the "Platforming cognition" paragraph and the opener pullquote. Flag raised at preview: spec's `old_str` treated the opener pullquote as prose, but actual source has it as `<div class="pullquote">`. Insertion slot is between the prior `<p>` and the pullquote — wrapper difference didn't affect the edit.

### Phase 4 — Edit 4 (hyperscale recast + DPA citation)

Replace the "Meanwhile, the centralized hyperscale bet is visibly straining" paragraph with the externality-binding version. Single `<p class="body-text">` wrapper per operator call ("reader pacing comes from the sentence structure, not from white space"). Long whitehouse.gov URL (208 chars) preserved unbroken in `href`. Existing utilitydive link's `rel="external" target="_blank"` preserved. New whitehouse.gov link uses same external-link attributes. EO quotation `&ldquo;aging and constrained electric grid infrastructure poses an increasing threat to national defense.&rdquo;` matches the file's entity convention (precedent: Further Reading list, lines 443–444). `America's` uses U+2019 curly apostrophe per file precedent. Four `&mdash;` in the paragraph.

### Phase 5 — Edit 5 (two-tier strategy frame)

Replace the "A serious national AI strategy treats" paragraph. Link relocated from opening clause ("GRV-003-style sovereignty architecture") to later in paragraph ("The GRV-003 Autonomaton") with same `href` (`/standards/003`) and same internal-link attributes — no `rel="external"`, no `target="_blank"` — per file convention for Grove-internal links. Four `&mdash;` (two for the apex-tier definition, two for the American workers / institutions clause); operator confirmed load-bearing.

### Phase 6 — Edit 6 (DPA bullet atop Cluster 2)

Insert new `<li>` at top of `<ul class="evidence-list">` inside Cluster 2 of the Evidence Ledger. DPA whitehouse.gov URL identical to Edit 4 (single unbroken `href`). Quoted phrase `&ldquo;purchases, commitments, and financial instruments&rdquo;` matches file entity convention; period outside since the quote is parenthetical inside a longer sentence. Section citation `Section 303(a)(1)-(a)(6)` uses plain hyphen per legal-citation convention (clause ranges take plain hyphen; numeric ranges like `8&ndash;15%` take en-dash). Existing 7GW bullet preserved complete in both `old_str` and `new_str` as defensive measure against truncation-mismatch content loss. Cluster 2's other four bullets untouched; cluster ordering retained.

### Phase 7 — Edit 7 (consolidate seed corn metaphor, Option B)

Trim preamble "Here is the Midwestern way to say it: where I come from, we are smart enough not to eat our own seed corn." from the body paragraph. New paragraph opens: "Human judgment is the seed corn."

Operator chose Option B: `<dfn>` anchor relocated from the removed preamble ("eat our own `<dfn>seed corn</dfn>`") to the new opening sentence ("Human judgment is the `<dfn>seed corn</dfn>`"). Operator rationale: the defining sentence is "Human judgment IS the seed corn" — the explicit metaphor-to-referent equation — which is where `<dfn>` belongs semantically. The original placement was deploying the metaphor, not defining it; the trim exposed and corrected a latent markup bug.

Flanking pullquotes verified untouched: opener `<div class="pullquote">In the Midwest, we know enough not to feast on our seed corn.</div>` (line 361 pre-edit) and closer `<div class="pullquote">We are not going to eat our own seed corn.</div>` (line 373 pre-edit). The `<p class="attribution">` with Jim's LinkedIn link following the closer pullquote also untouched.

## Commit log

- **Commit 1** — `9116e4a` — `tone: reframe opening as apex-utility defense, replace half-cures with complementarity` — covers Edits 1 and 2.
- **Commit 2** — `2b7795b` — `tone: insert institutional-risk sentence, reframe hyperscale strain as externality binding with DPA citation, sharpen two-tier strategy frame, add DPA bullet to evidence ledger` — covers Edits 3, 4, 5, 6.
- **Commit 3** — (this commit) — `tone: consolidate seed corn metaphor; relocate <dfn> anchor to definitional sentence; add sprint devlog` — covers Edit 7 and this DEVLOG.

For the Commit 3 SHA post-commit: `git log master -1 --oneline`.

## Staging discipline

All three commits used explicit `git add alerts/sovereignty-is-all-you-need/index.html` (plus `sprints/sovereignty-alert-tonal-revision-v1/DEVLOG.md` on Commit 3) rather than `-am`. Stale `do-commit.bat` modification from earlier sessions stayed out of all three commits by design. `.bat` commit-message wrappers executed via `cmd //c "<full-windows-path>"` from Git Bash (CMD doesn't resolve CWD-relative `.bat` names without `.\`) and deleted immediately after use.

## Out of scope (per sprint spec)

- Λ Evidence Ledger cluster structure (only Cluster 2's new leading bullet inserted; no reordering of clusters or other bullets)
- Page metadata, OG tags, subscribe block, byline, footer
- All other CIO Alerts and standards pages
- Any component imports or layout files
- The Λ Watch input Notion entry (lives in GTM page)

## Provenance

- Triggered by Craig Stanford review email, 2026-04-21.
- Strategic analysis session: Claude consumer interface, 2026-04-21.
- DPA EO research: Presidential Determination issued 2026-04-20 under Defense Production Act §303 on grid infrastructure, equipment, and supply chain capacity.
- Methodology insight captured to Notion: `https://www.notion.so/349780a78eef81e2a6f8d49f6d2e53c0`.
- Sprint handoff: pasted into the CC execution session at sprint open; chat log is the canonical source per operator direction ("two sources of truth invite drift" — operator reply when asked whether to duplicate the spec into this folder).

## Not captured here

The Phase 8 live-page verification (operator spot-checks the seven landing phrases on the deployed URL) is logged in the post-deploy report in the execution chat, not in this DEVLOG. The DEVLOG commits before deploy completes; live-page state is not knowable at commit time.
