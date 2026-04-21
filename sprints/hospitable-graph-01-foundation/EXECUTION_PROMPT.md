# EXECUTION PROMPT — Hospitable Graph 01 · Foundation

**Paste this file into Claude Code as the opening message of a fresh session.**

---

You are Claude Code executing a Grove Foundation sprint. The operator is Jim Calhoun. This is sprint `hospitable-graph-01-foundation`, Sprint 1 of three in the Hospitable Graph epic.

Before you do anything, you must read these files in this order:

1. `sprints/hospitable-graph-01-foundation/SPEC.md` — what to build.
2. `sprints/hospitable-graph-01-foundation/CONTRACT.md` — what NOT to break.
3. `docs/ai-first-publication-standard.md` — the standard you are bringing GRV-001 into conformance with.
4. `docs/content-audits/grove-content-audit-2026-04-20.md` — focus on the GRV-001 delta table and the canonical-term inventory.
5. `docs/epics/hospitable-graph-epic.md` — the epic charter; you only need §"Sprint 1 — Foundation".
6. `alerts/sovereignty-is-all-you-need/index.html` lines 1–230 — the operative head-block template.
7. `standards/001/index.html` (the file you are modifying) — full read.

Do not skip any of these. The SPEC and CONTRACT contain non-negotiable constraints. The standard is the conformance authority. The audit is the per-element authority. The Alert #04 head block is the structural template (NOT the content source). The current GRV-001 file is the body prose you preserve.

## What this sprint is

Bring `standards/001/index.html` to full conformance with the AI-First Publication Standard v0.1. Ship Composability as the fifth Autonomaton invariant in §IV. Publish `/standards/GRV-001.json`. Ratify GRV-001-sourced terms into `docs/grove-canonical-vocabulary.md` at sprint close.

One HTML file modified, one new JSON manifest created, one vocabulary doc updated. That is the entire scope. The audit estimates ~280–350 lines of additions to the 561-line GRV-001 file.

This is the load-bearing first sprint of the Hospitable Graph epic. Sprint 2 cannot begin until the anchor IDs you ship — especially `#composability` — are stable. Sprint 3 cannot begin until Sprint 2 is shipped. The whole epic depends on this sprint shipping clean.

## The "first-reader primacy" principle

The AI-First Publication Standard establishes that AI agents are the first reader of almost everything Grove publishes. When GRV-001's URL is shared, an AI summarizes it before any human eye lands on the page. That summary determines whether human attention arrives at all.

GRV-001 is the anchor of the Grove publication graph. Currently it has bare metadata — `<title>` plus `<meta description>` and almost nothing else. The first reader cannot accurately summarize it. The thesis is defeated at the protocol layer before reaching a human.

Your job is to fix that. Rich markup — full meta stack, JSON-LD with `isBasedOn` chain, semantic anchor IDs, `<dfn>` tags on canonical terms, the JSON manifest exposing the standard as data — is not polish. It is the channel through which Grove's thesis reaches the human reader intact.

You are also building the reference implementation that Sprint 2 propagates across the rest of the corpus. Get this one right.

## ⛔ GATE 1 — STOP HERE before any code

The Composability principle-card text was ratified by the operator at planning time. The text is locked verbatim in the SPEC under "The ratified Composability text (Gate 1, locked)". Read it.

In your **first response of this execution session**, before writing anything, you must:

1. Quote the Composability text **verbatim from the SPEC** so the operator can re-confirm it on the execution side.
2. State your worktree command (`git worktree add ../grove-hg01-foundation -b hg01-foundation`).
3. List every file you will create or modify, in order of operations.
4. List every anchor ID you will create on `standards/001/index.html`, mapped to the section that gets it. Surface any disagreement with the SPEC's ID list now — these are load-bearing for Sprint 2 and cannot be renamed after commit.
5. Confirm the lineage parents you propose for `isBasedOn[]` (SPEC D2 lists candidates; you may propose additions or substitutions).
6. Ask any clarifying questions about ambiguities in SPEC or CONTRACT.

Then **wait for explicit operator approval** ("go", "yes", "approved", "confirmed, proceed", or equivalent).

Do not edit any file outside `sprints/hospitable-graph-01-foundation/` until that approval is received. Specifically: no edits to `standards/001/index.html`, no creation of `standards/GRV-001.json`, no edits to `docs/grove-canonical-vocabulary.md`. The Gate-1 re-confirmation creates the audit trail; it is a CONTRACT requirement, not optional.

If you skip Gate 1 and start editing, you have failed the sprint at its first step. The Composability text being locked at planning time does not authorize you to start before re-confirming at execution time. The two-time confirmation IS the discipline.

## Execution order (once Gate 1 is operator-approved)

1. **Worktree.** `cd /d C:\GitHub\grove-launch-site` then `git worktree add ../grove-hg01-foundation -b hg01-foundation` then `cd /d C:\GitHub\grove-hg01-foundation`. All edits in the worktree.

2. **Head block (D1, D2, D7).** Build the new head block in `standards/001/index.html`. Replace the existing minimal head with: charset, viewport, title (refresh wording if needed), description, author meta, canonical link, full Open Graph block (7 tags), full Twitter Card block (4 tags), full Dublin Core block (11 tags), citation meta block (5 tags), the JSON-LD `TechArticle` block with all required properties from SPEC D2, the FAQPage JSON-LD block (D10), the `<link rel="alternate" type="application/json">` to the manifest, font preconnects/loads (already present, retain), the existing `<style>` block with new rules added: `dfn`, `cite`, `.pronunciation`, plus any minor adjustments needed for principle-card V grid behavior (CONTRACT §7).

3. **Anchor IDs (D3).** Add `id="..."` attributes to every section listed in SPEC D3. Use semantic IDs from the table. Do not invent additional IDs beyond what's listed unless adding the optional §VIII subsection IDs (`#governance-by-architecture`, `#auditability-byproduct`, `#sovereign-computing`) — these are CC's discretion.

4. **Body markup (D4, D5, D6).** Walk through body prose in order. Wrap canonical terms in `<dfn>` at first body-prose mention per the SPEC D4 list. Wrap external work titles in `<cite>` per SPEC D5. Add `rel="external"` to off-site links (currently just the CC license footer link).

5. **Pronunciation span (D7).** Wrap the first occurrence of "Autonomaton" in the hero with `<span class="pronunciation">/ɔːˈtɒnəmətɒn/</span>` or per the precedent established in GRV-003 (read GRV-003's hero pronunciation markup if you need a structural example — that is the only Sprint-2-scope file you may read for reference).

6. **Composability principle card (D8).** Insert the new `.principle-card` element with `id="composability"` into `.principle-grid` in §IV, after principle IV. Use the locked Gate-1 text. Match the existing card structure exactly per CONTRACT §7.

7. **§IV opener count edit (CONTRACT §2 permitted change 2).** If the §IV opening prose literally says "four" or implies a count of four, change to "five". If it doesn't, no edit. Report either way in your post-execution summary.

8. **Hero meta + footer version updates.** `.hero-meta` from "v1.0 · March 2026" to "v1.1 · April 2026" (or operator-supplied date). Footer download bar analogous update.

9. **JSON manifest (D9).** Create `standards/GRV-001.json`. Populate per SPEC D9 structure. Pull invariant titles, descriptions, and tests from the rendered HTML (transcribe verbatim, do not paraphrase). Pipeline stage descriptions similarly.

10. **OG image asset (CONTRACT §8).** Generate placeholder `standards/001/og.png` if no operator-supplied asset exists. Report generation method in summary.

11. **Validation.** Visit https://validator.schema.org/ in your head (i.e., review the JSON-LD blocks for obvious shape errors — missing commas, malformed property names, unbalanced braces). Report any issues.

12. **Ship-gate checklist.** Walk through SPEC's ship-gate checklist box by box. Report ✓ / ✗ / N/A with reason for each.

13. **GATE 2 — vocabulary ratification.** Present the GRV-001-sourced vocabulary candidates from SPEC D11 to the operator in a single review block. Format per CONTRACT §3 Gate 2. Wait for operator approval.

14. **Apply approved vocabulary entries** to `docs/grove-canonical-vocabulary.md`. Do not write rejected entries. Note revisions in the commit message.

15. **NEXT-SESSION-PROMPT.md update.** Update at repo root per CONTRACT §9.

16. **Commit.** Use `.bat` wrapper if commit message has spaces (precedent: `do-commit.bat`). Subject: `hg01-foundation: GRV-001 to AI-First Publication Standard conformance`. Body includes Gate 1 record and Gate 2 record per CONTRACT §9.

17. **Report.** Final summary to operator: what shipped, ship-gate results, Gate 2 ratification log, flagged-followups for NEXT-SESSION-PROMPT, suggested next action (e.g., "operator runs `npx vercel --prod --yes` to deploy").

Do **not** run `npx vercel --prod --yes`. Operator deploys manually.

## Environment notes

- **OS:** Windows. Repo root is `C:\GitHub\grove-launch-site` (capital G matters; lowercase `github` fails silently).
- **Worktree:** `C:\GitHub\grove-hg01-foundation` after the worktree command.
- **Shell:** CMD for git operations. `cd /d` flag required for cross-drive directory changes.
- **Commit messages with spaces:** CMD mangles them inline. Use a `.bat` wrapper. Precedent file: `do-commit.bat` (read for pattern).
- **Python** (if needed for OG image generation): `C:\Python313\python.exe`. PIL/Pillow may need `pip install pillow --break-system-packages`.
- **Node** is available; `npm`, `npx` work. Playwright is an option for HTML-to-PNG OG generation if installed.
- **Deploy:** manual only. `npx vercel --prod --yes` from `C:\GitHub\grove-launch-site` (not from the worktree). Do not run in this sprint.
- **Vercel project ID:** `prj_FpKHXIO5VoGGN5ieWMvMeXJ9yh7N` (for reference).
- **Git auto-deploy is broken** — deploys are manual per above.

## File locations you will need

- **Modify:** `standards/001/index.html` (main work).
- **Create:** `standards/GRV-001.json`.
- **Create:** `standards/001/og.png` (placeholder if no operator asset).
- **Modify:** `docs/grove-canonical-vocabulary.md` (Gate-2-approved entries only).
- **Modify:** `NEXT-SESSION-PROMPT.md` at repo root (sprint close).
- **Read-only reference:** `alerts/sovereignty-is-all-you-need/index.html` (the head-block template).
- **Read-only reference:** `standards/003/index.html` (only if you need a structural example for the pronunciation span markup).
- **Read-only reference:** `docs/ai-first-publication-standard.md`, `docs/content-audits/grove-content-audit-2026-04-20.md`, `docs/epics/hospitable-graph-epic.md`.

## What this sprint is NOT

Per CONTRACT §10:
- Not editing GRV-002, GRV-003, or any other Grove page.
- Not adding nav or cross-page UI changes.
- Not creating `/for-agents`, `/.well-known/grove.json`, or `/vocabulary.json` (Sprint 3 work).
- Not running deploys.
- Not writing automated tests beyond the manual ship-gate checklist.

If the operator requests any of the above during execution, decline and reframe as a separate sprint or charter amendment.

## Final reminder

The Composability text is the load-bearing decision of the entire epic. The text is locked. Two confirmations: planning-time (already done) and execution-time (the Gate 1 you produce in your first reply). Both happen. Then code begins.

Build the engine that reads the map. Do not build the map into the engine.

---

*Three files and a loop. The rest is distillation.*
