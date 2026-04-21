# CONTRACT — Hospitable Graph 01 · Foundation

This document specifies what Claude Code (CC) must not do, what CC must preserve, and the non-negotiable rules governing this sprint. Violations are ship-gate failures.

The CONTRACT is binding. The SPEC is descriptive. Where the two diverge, the CONTRACT governs.

## §1 — Files CC must NOT modify

The following directories and files are outside the scope of this sprint. CC must not touch them under any circumstance. If a problem is discovered in any of these, CC flags it in `NEXT-SESSION-PROMPT.md` at sprint close and moves on — the fix belongs to a separate sprint or to a Sprint-2/3 batch.

### Other canonical published standards (Sprint 2 scope)
- `standards/002/**` — GRV-002 TCP/IP for the Cognitive Layer
- `standards/003/**` — GRV-003 The Learner Autonomaton
- `standards/index.html` — standards category landing

### Canonical published alerts and papers (Sprint 2 scope)
- `alerts/sovereignty-is-all-you-need/**` — Alert #04 (the operative template; read-only this sprint)
- `alerts/telemetry-trap/**` — Sprint 2 scope
- `alerts/architectural-gap/**` — Sprint 2 scope
- `alerts/ai-deployment-pattern-benchmark/**` — Sprint 2 scope
- `alerts/index.html` — Sprint 3 scope
- `papers/**` — legacy directory; do not touch (the `/papers/` → `/alerts/` rename is Sprint 2's link-repair work, not Sprint 1's)

### Secondary pages (Sprint 3 scope)
- `index.html` (root landing)
- `lambda/**`
- `observations/**`
- `ratchet/**`
- `about/**`
- `membership/**`

### Documentation (mostly read-only this sprint)
- `docs/ai-first-publication-standard.md` — read-only; this is the authoritative standard.
- `docs/content-audits/**` — read-only; the audit is archival reference.
- `docs/epics/**` — read-only; the charter is locked.
- `docs/grove-canonical-vocabulary.md` — **READ-WRITE this sprint, but ONLY for Gate-2-approved entries.** No other vocabulary edits permitted in this sprint.

### Infrastructure (do not touch)
- `.vercel/**`
- `.git/**`
- `vercel.json`
- `.gitignore`
- Any existing `.bat` files (reference for commit-with-spaces pattern; do not modify)
- All other `sprints/**` directories (cio-alert-01 and any future sprint folders)

### The Cio-Alert-01 NEW bug script
At the bottom of `standards/001/index.html` body there is a leftover `nav-new-bug` script with self-expiry timestamp 2026-04-27. CC does not remove this. It will self-deactivate. Removing it is out of scope.

## §2 — Body prose preservation

### The body prose of `standards/001/index.html` is canonical.

The eight Roman-numeral sections (§I through §VIII) of GRV-001 ship as currently written. CC adds markup; CC does not edit prose. Specifically, CC does NOT:
- Rewrite sentences for clarity, brevity, or "flow"
- Substitute synonyms
- Re-order paragraphs
- Add or remove paragraphs
- Add or remove pull quotes
- Modify the existing four principle-card titles, descriptions, or tests
- Modify lineage card content (§II)
- Modify pipeline stage descriptions (§III)
- Modify zone card descriptions (§V)
- Modify tier card descriptions (§III)
- Modify flywheel step descriptions (§VI)
- Modify reference schema JSON exemplars (§VII) — these are the standard's machine-readable proof; do not "improve" them
- Modify the §VIII vision passage or the closing pull quote

### The five permitted body-prose changes
This sprint authorizes five — and only five — body-prose changes:

1. **The new principle card V** — the Gate-1-ratified Composability text, inserted into the `.principle-grid` in §IV. The text is locked verbatim. CC does not paraphrase it during execution.
2. **The §IV opener count edit** — IF the existing prose literally states "four principles" or implies a count of four, change to "five". If the existing prose does not reference a count, no edit. CC checks during execution and reports either way in the post-execution summary.
3. **The hero meta version string** — `.hero-meta` updates from "v1.0 · March 2026" to "v1.1 · April 2026" (or operator-supplied date in the plan-review reply).
4. **The footer download bar version** — analogous version-string update.
5. **The §IV first-mention dfn anchor** — IF a canonical term's first body-prose mention occurs inside a paragraph rather than a card title, CC may wrap it in `<dfn>`. This is markup, not prose change. Listed here for clarity that wrapping a word in `<dfn>` is permitted; rephrasing a sentence to make a dfn target is not.

Any other body-prose change requires Gate-1-equivalent operator approval before execution.

### Markup-only changes are unrestricted within scope
Adding `id="..."` attributes, wrapping terms in `<dfn>`, wrapping titles in `<cite>`, adding `rel="external"` to anchors, wrapping the first "Autonomaton" in a pronunciation span, adding `<link>` and `<meta>` and `<script type="application/ld+json">` blocks to `<head>` — these are markup additions and are unrestricted within the SPEC's scope.

## §3 — Stage-4 ratification discipline

This sprint contains two of the epic's three Stage-4 gates. Both are non-skippable and non-implicit.

### Gate 1 — Composability principle-card text (pre-execution)
Ratified 2026-04-20 by operator in Claude Desktop session preceding sprint planning. The text is locked in [SPEC §The ratified Composability text](./SPEC.md#the-ratified-composability-text-gate-1-locked).

CC's behavior at Gate 1: read the SPEC, read this CONTRACT, read the audit and the standard. In CC's first response of the execution session, CC restates the Composability text **verbatim from the SPEC** and asks the operator to re-confirm before code is written. Operator may say "confirmed, proceed" or may revise. CC does not begin file edits before that confirmation. This re-confirmation is a CONTRACT requirement, not a SPEC suggestion — even though the text was ratified at planning time, the execution-session re-confirmation creates the audit trail that CC acted on operator's specific approval, not on operator's interpretation of an artifact.

### Gate 2 — Vocabulary ratifications (pre-commit)
Before CC commits the sprint, CC presents the GRV-001-sourced vocabulary additions to the operator in a single review block. Format: candidate term, proposed valence, proposed primary-document reference, one-paragraph definition draft. Operator approves, revises, or rejects each candidate. CC writes only approved entries to `docs/grove-canonical-vocabulary.md`, in a single edit, and includes the Gate-2 operator approval log in the commit message body.

If operator is asynchronous at the moment Gate 2 is reached, CC does NOT proceed to commit. CC writes the GRV-001 markup and manifest changes to disk in the worktree, leaves the vocabulary doc unchanged, and waits. This is a sprint-incomplete state, not a sprint failure. The sprint completes only when Gate 2 is operator-confirmed.

## §4 — Anchor-ID stability commitment

The IDs shipped in [SPEC D3](./SPEC.md#d3--stable-semantic-anchor-ids) become Sprint 2's deep-link targets the moment Sprint 1 commits. Sprint 2 cannot proceed if those IDs are unstable.

Therefore: once Sprint 1 commits, Sprint 1's anchor IDs cannot be renamed or removed without an explicit Sprint-2 amendment to the epic charter. CC's responsibility during Sprint 1 execution: confirm in the plan response that the SPEC's ID list is the final list, surface any disagreements **before** writing code, and accept that post-commit changes are off the table.

The single most load-bearing ID is `#composability`. Sprint 2's interlock-closure work hangs on it. CC does not under any circumstance ship a different ID for principle V.

## §5 — Alert #04 as template, with one known divergence

The [Alert #04 head block](../../alerts/sovereignty-is-all-you-need/index.html) is the operative template for meta-stack and JSON-LD shape. CC reads its first ~230 lines as the canonical example of how the standard's conformance items 1 and 2 manifest in HTML.

**The known divergence:** Alert #04's `isBasedOn` entry for the Telemetry Trap uses the stale `/papers/telemetry-trap` URL. The canonical URL since the papers→alerts rename is `/alerts/telemetry-trap`. This is documented in the audit as a bug to be fixed in Sprint 2 when Alert #04 is touched again.

**Sprint 1's responsibility:** GRV-001's `isBasedOn` chain does NOT include the Telemetry Trap (the lineage is to Kephart/Chess, Smith, Alexander, Cunningham/Beck, Gamma et al. — see SPEC D2). So this specific bug does not propagate from Alert #04 into GRV-001 by direct copy. But: if CC during execution encounters any URL pattern in the broader Grove corpus referencing `/papers/`, CC does NOT correct those URLs in Sprint 1. The `/papers/` → `/alerts/` link repair is Sprint 2 scope.

**The general rule:** CC uses Alert #04 as a structural template, not a content source. Strings, tag values, and entity names are GRV-001-specific and do not transcribe.

## §6 — JSON manifest must be a true manifest

The `/standards/GRV-001.json` file required by SPEC D9 is the standard published as data — not a JSON-LD expression of the HTML page, not a schema.org-only artifact, not a documentation export. It is the form in which the standard would be ingested by an Autonomaton implementation that needed to verify conformance.

Required properties:
- The five invariants must be machine-listed with stable `id` values matching the HTML anchor IDs.
- The five pipeline stages must be ordered and named.
- The three zones must be enumerated with their semantic labels.
- The four tiers must be ordered with cost semantics.
- A `version` field must increment from any prior version (Sprint 1 ships v1.1).

CC does NOT add fields beyond the SPEC D9 structure without surfacing the addition in the plan-review reply. JSON manifest scope creep is not authorized.

## §7 — Visual fidelity to existing principle cards

The new principle card V (Composability) renders identically to principle cards I–IV. Same `.principle-card` class, same `.principle-num` / `.principle-body` / `.principle-title` / `.principle-desc` / `.principle-test` structure. Same typography. Same amber number treatment. No bespoke styling.

This is a structural commitment, not an aesthetic one: the visual sameness is what tells the reader (human and AI) that V is a peer of I–IV, not an addendum. If CC is tempted to give V special treatment — accent color, badge, "NEW" label — that temptation is the violation; resist it.

The `.principle-grid` container's `grid-template-rows` may need a manual check. The existing grid auto-rows for four cards. Adding a fifth row is automatic if the grid template uses `auto` rows; if it specifies a fixed four-row template, CC adjusts to five. This is a CSS check, not a redesign.

## §8 — OG image asset (placeholder discipline)

The Open Graph and Twitter `image` fields require a 1200×630 PNG at `standards/001/og.png`. If no operator-supplied asset exists at execution time, CC may generate a placeholder under the following constraints:

- Grove design system: `#080808` background, amber `#D4621A` / `#F07030` text, Fragment Mono / Instrument Serif typography.
- Content: GRV-001 mark, "The Autonomaton Pattern" headline, "Open Standard · CC BY 4.0" eyebrow, "the-grove.ai" wordmark.
- No stock photography, no decorative graphics, no AI-generated imagery.
- The placeholder is committed to the repo so the `og:image` and `twitter:image` URLs resolve. Operator may replace with a final asset post-sprint without code changes.
- Generation method at CC's discretion (Python with PIL/Pillow, Playwright HTML-to-PNG, or even a flat ImageMagick command). CC reports the generation method in the post-execution summary.

If CC cannot generate a placeholder for technical reasons, CC ships the head block with the `og:image` and `twitter:image` URLs as-specified, flags the missing asset in `NEXT-SESSION-PROMPT.md`, and the operator generates the asset in a follow-up commit. Missing image is a flagged-followup, not a sprint failure.

## §9 — Grove sprint discipline

The Foundation Loop discipline applies in full.

### Worktree pattern (mandatory)
```
cd /d C:\GitHub\grove-launch-site
git worktree add ../grove-hg01-foundation -b hg01-foundation
cd /d C:\GitHub\grove-hg01-foundation
```
All edits happen in the worktree. CC does not edit `C:\GitHub\grove-launch-site` directly.

### One fix per session
This sprint is one focused execution session. CC does not interleave other Grove work, does not "while I'm in here, also fix..." — sprint scope is sprint scope. Out-of-scope problems get flagged in `NEXT-SESSION-PROMPT.md`.

### Invariant tests at sprint close
The ship-gate checklist in [SPEC §Ship-gate checklist](./SPEC.md#ship-gate-checklist-operator-runs-at-sprint-close) is the invariant test set. CC runs through it before declaring the sprint complete and reports the result of each box (✓ / ✗ / N/A with reason).

### NEXT-SESSION-PROMPT.md update (mandatory)
At sprint close, CC updates `NEXT-SESSION-PROMPT.md` at the repo root with:
- What shipped in this sprint (one paragraph)
- What's queued for Sprint 2 (one paragraph; references the audit's Sprint 2 scope)
- Any flagged-followup items (broken thing discovered, missing asset, schema validator warning, etc.)
- The exact commit hash of the sprint commit
- The state of the worktree (merged-back to main yet? still open? operator deploys yet?)

### Commit message discipline
The Sprint 1 commit message must include:
- Sprint ID in the subject line: `hg01-foundation: GRV-001 to AI-First Publication Standard conformance`
- The Gate-1 ratification record in the body (one line: "Gate 1 — Composability text ratified by operator 2026-04-20 in Claude Desktop session.")
- The Gate-2 ratification record in the body (a list of which vocabulary entries were approved, revised, rejected).
- Use the `.bat` wrapper pattern if CMD mangles the multi-line commit (precedent in `do-commit.bat` from cio-alert-01).

## §10 — Out of scope (do not attempt)

The following are explicitly out of scope. If operator requests any during execution, CC declines and reframes the request as a separate sprint or a charter amendment.

- Editing GRV-002, GRV-003, or any other Grove page (Sprint 2 work).
- Adding or modifying nav links, footer content unrelated to the version-string updates, or any cross-page UI element.
- Creating `/for-agents`, `/.well-known/grove.json`, or `/vocabulary.json` (Sprint 3 work).
- Updating the Λ landscape data (Sprint 2 / Sprint 3 work).
- Editing Notion pages (Sprint 1 produces a NEXT-SESSION-PROMPT update; Notion ratchet is a separate operator workflow).
- Running `npx vercel --prod --yes`. Deploys are operator-only.
- Modifying SKILL.md files, machine state docs, or any user skill.
- Adding tests beyond the ship-gate checklist (no Playwright, no JSON Schema validators, no automated invariant tests in this sprint — the manual checklist is the test).

---

*The pipeline has no force without its Stage-4. The standard has no credibility without its conformance. The cultivation has no truth without its approvals.*
