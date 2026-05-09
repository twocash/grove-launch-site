# Fresh CC session opening prompt — substrate-jim-calhoun-v2-alpha

**Copy everything below the line into a fresh Claude Code session opened at `C:\GitHub\grove-launch-site\`.**

---

You are Claude Code working in `C:\GitHub\grove-launch-site` on the substrate-jim-calhoun-v2-alpha sprint.

## Step 1 — Read the canonical artifacts in full

Before any other action, read these files in full:

1. `sprints\substrate-jim-calhoun-v2-alpha\EXECUTION_PROMPT.md` — orchestration sequence
2. `sprints\substrate-jim-calhoun-v2-alpha\SPEC.md` — file content and strip operations
3. `sprints\substrate-jim-calhoun-v2-alpha\CONTRACT.md` — 23 invariants for verification
4. `registrar\index.html` — visual register reference (CSS, nav, composition surface, fonts)
5. `registrar\keg.json` — sibling envelope shape reference
6. `substrate\jim-calhoun\index.html` — current letter file (source of move)

## Step 2 — Surface Gate 1 confirmation

After reading, surface Gate 1 confirmation per EXECUTION_PROMPT. The five required confirmations:

1. All 6 reference files read in full
2. Files-to-touch list (6) in operational order
3. Strip operations enumerated by number — but see SPEC/CONTRACT gap below
4. Operator-locked calibrations confirmed: italic on Calhoun (or absence per SPEC §1 note), no "grandfather" word on founder surface, plus-aliased Andon address `jim+diligence-andon@the-grove.ai`, yellow accent only on Andon Section I (#declaration eyebrow + divider + version-line)
5. Any disagreements with SPEC or CONTRACT named explicitly

## Known SPEC/CONTRACT gap — surface at Gate 1, do NOT edit unilaterally

CONTRACT.md Invariant 9 references "the 19 named strips in SPEC §3."
SPEC.md §3 currently contains 12 strips (3.1 through 3.12).

The 7 missing strips are URL canonicalization for the move from `/substrate/jim-calhoun/` to `/substrate/jim-calhoun/letter/`. Without them, the moved letter will advertise old URLs in:

- `<link rel="canonical">`
- `<meta property="og:url">`
- `<meta name="DC.identifier">`
- WebPage JSON-LD `@id` and `url`
- BreadcrumbList (needs new position-3 Substrate breadcrumb, letter to position-4)
- Article JSON-LD `@id` and `url` (preserves `#article` fragment)
- GroveKeg JSON-LD `@id` (preserves `#grove-keg` fragment)

**At Gate 1**, propose these as strips 3.13 through 3.19 with exact OLD/NEW pairs derived from your read of `substrate\jim-calhoun\index.html`. Surface the proposed strips for operator approval as part of the Gate 1 readout. Do not edit SPEC.md or run any file modifications until the operator approves the proposed strips.

If your read of the source file reveals additional URL fields needing canonicalization that I haven't named, surface those too.

## Step 3 — After Gate 1 approval

Operator will approve Gate 1 (including the 3.13–3.19 strip proposals) in chat. Once approved:

1. Apply approved strip additions to SPEC.md (using a uniquely-anchored str_replace with 5+ lines of context, never a section header alone)
2. Commit the SPEC patch: `git add sprints/substrate-jim-calhoun-v2-alpha/SPEC.md && git commit -m "SPEC: add strips 3.13-3.19 per Gate 1 review"`
3. Proceed through the 13 ops in EXECUTION_PROMPT
4. Stop before deploy. Operator runs `npx vercel --prod --yes` manually per Invariant 21.

## Discipline reminders

- Foundation Loop discipline: verbatim relay, no improvisation, no skipped gates
- Worktree per EXECUTION_PROMPT: `git worktree add ../grove-substrate-jim-calhoun -b substrate-jim-calhoun-v2-alpha` then `cd /d` to it
- Never use a section header alone as a str_replace anchor — always 5+ lines of unique context
- Verify post-write file integrity by line count and git diff before committing
- Post-deploy verification is curl-only, never web_fetch (Vercel CDN cache is stale)

Begin Step 1 now. Do not start Step 2 until all 6 files are read.
