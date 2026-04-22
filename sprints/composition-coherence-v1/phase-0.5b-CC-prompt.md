# Phase 0.5b Execution Prompt — /content/* cleanup + Phase 0 commit hygiene

**Sprint:** composition-coherence-v1
**Phase:** 0.5b (execute staged changes from Phase 0.5a audit)
**Predecessor:** Phase 0.5a audit (commit f265d9e)
**Successor:** Phase 1 (llms.txt v2 refresh)

---

## Context

Phase 0.5a audited `/content/*` and staged cleanup in `sprints/composition-coherence-v1/content-audit.md` (commit f265d9e). Jim reviewed the classifications and approved. This phase:

1. Commits Phase 0 artifacts (SPEC + Phase 0.5a prompt) that were untracked when Phase 0.5a fired
2. Executes the staged changes from the audit report
3. Lazy-writes all SHAs into SPEC §11 ledger

The audit report is authoritative for staged changes, with **one operator override below** on the UNCLEAR item.

## Operator decisions (apply exactly as stated)

- **g7-reference-table.html (UNCLEAR in audit):** MOVE to `research/g7-reference-table.html`. Co-locate with `research/g7-ai-divergence.md`. Rationale: research-in-progress asset, not ready for /observations/ publication; /docs/ is for canonical reference, not research. This overrides whatever the audit report staged for this file.

- **All other staged changes:** Execute exactly as staged in `sprints/composition-coherence-v1/content-audit.md`. No further overrides.

## Your task

### Step 1 — Commit Phase 0 artifacts

Two files are currently untracked and must be committed before this phase executes destructive changes:

- `sprints/composition-coherence-v1/SPEC.md`
- `sprints/composition-coherence-v1/phase-0.5a-CC-prompt.md`
- `sprints/composition-coherence-v1/phase-0.5b-CC-prompt.md` (this file — also untracked)

Commit all three together:

```
git add sprints/composition-coherence-v1/SPEC.md \
        sprints/composition-coherence-v1/phase-0.5a-CC-prompt.md \
        sprints/composition-coherence-v1/phase-0.5b-CC-prompt.md
git commit -m "compo-v1 phase-0: SPEC + Phase 0.5 prompts"
```

Capture this SHA — call it `SHA_PHASE_0`.

### Step 2 — Execute staged changes from audit

Read `sprints/composition-coherence-v1/content-audit.md` to recover the staged commands. Execute them, with the g7 override applied.

Expected operations (verify against audit report; flag any discrepancy before executing):

- `git mv content/beat-1-architecture-is-the-policy.md <audit-staged-destination>`
- `git mv content/lambda-page-strategy.md <audit-staged-destination>`
- `git mv content/g7-reference-table.html research/g7-reference-table.html` **(operator override)**
- `git rm content/lambda-scoreboard.html`
- `git rm content/observations-visualization.html`
- `git rm content/observations.html`
- `git rm content/the-telemetry-trap-grove-white-paper.docx`

If the `/content/` directory is empty after these operations, remove the directory as well (`git rmdir` implicit via empty-dir handling, or leave a `.gitkeep` if useful — use judgment).

Commit all operations together:

```
git commit -m "compo-v1 phase-0.5b: /content/* cleanup executed (2 moved, 4 removed, 1 relocated to research/)"
```

Capture this SHA — call it `SHA_PHASE_0_5B`.

If any destination directory (`docs/planning/`, etc.) does not exist, `git mv` will create it as needed.

### Step 3 — Update SPEC §11 ledger

Edit `sprints/composition-coherence-v1/SPEC.md` §11 (SHA ledger) to reflect all completed phases.

**Current §11 table (what to find):**

```
| Phase | Artifact                              | SHA | Date |
|-------|---------------------------------------|-----|------|
| 0     | SPEC committed                        | TBD | TBD  |
| 0.5   | /content/* audit + cleanup            | TBD | TBD  |
| 1     | llms.txt v2                           | TBD | TBD  |
```

**Replace with (split 0.5 into 0.5a and 0.5b to reflect audit-then-execute discipline):**

```
| Phase | Artifact                              | SHA | Date |
|-------|---------------------------------------|-----|------|
| 0     | SPEC + Phase 0.5 prompts committed    | <SHA_PHASE_0 abbrev> | 2026-04-22 |
| 0.5a  | /content/* audit report               | f265d9e | 2026-04-22 |
| 0.5b  | /content/* cleanup executed           | <SHA_PHASE_0_5B abbrev> | 2026-04-22 |
| 1     | llms.txt v2                           | TBD | TBD  |
```

Use `edit_block` for the SPEC ledger edit — surgical replacement of just the table rows, no other SPEC changes.

Commit this edit:

```
git commit -m "compo-v1 phase-0.5b: SHA ledger update"
```

(Small edit, dedicated commit — keeps ledger-update traceable and keeps the structural-beat discipline intact.)

### Step 4 — Report back

Print to stdout exactly this format:

```
PHASE 0.5b COMPLETE

Commits landed:
  Phase 0:     <SHA_PHASE_0 abbrev>  "compo-v1 phase-0: SPEC + Phase 0.5 prompts"
  Phase 0.5a:  f265d9e               "compo-v1 phase-0.5a: /content/* audit report (staged, not executed)"
  Phase 0.5b:  <SHA_PHASE_0_5B abbrev>  "compo-v1 phase-0.5b: /content/* cleanup executed..."
  Ledger:      <SHA_LEDGER abbrev>   "compo-v1 phase-0.5b: SHA ledger update"

/content/ state: <empty | removed | contains: <list>>

Next: Phase 1 begins — llms.txt v2 refresh
```

## Working discipline (inherited from SPEC §10)

- **One commit = one structural beat.** Phase 0 artifacts commit in one commit. Phase 0.5b file operations commit in one commit. Ledger update commits separately. Three commits total in this phase.
- **No drive-by changes.** Do not edit any file outside the staged-changes scope and the SPEC §11 ledger update.
- **Verify before executing.** If the staged commands in `content-audit.md` differ from the expected operations in Step 2, pause and report the discrepancy before executing anything destructive.
- **Surgical SPEC edit.** Use `edit_block` for §11, not full-file rewrite.
- **Lazy-write SHAs.** §11 is the authoritative ledger; every landed commit from this sprint must be recorded there.

## Acceptance criteria

- Three commits landed: Phase 0 artifacts, Phase 0.5b file ops, ledger update
- `/content/` directory either empty, removed, or contains only items not in the audit scope (flag any remainder)
- SPEC §11 ledger shows four rows populated: Phase 0, 0.5a, 0.5b, and Phase 1 still TBD
- Report-back format (Step 4) printed to stdout verbatim so Jim can paste back to chat without re-formatting
- No SPEC content edits outside §11 ledger table

---

**Fire.**
