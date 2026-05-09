# EXECUTION PROMPT — substrate-jim-calhoun-v2-alpha

**Paste this file into Claude Code as the opening message of a fresh session.**

---

You are Claude Code executing a Grove Foundation sprint. The operator is Jim Calhoun. This is sprint `substrate-jim-calhoun-v2-alpha` — migrate `/substrate/jim-calhoun/` from substrate-declaration-class memoir letter to a two-surface architecture: founder declaration at the root, letter preserved verbatim at `/substrate/jim-calhoun/letter/` with surgical strips, Andon gate page at `/substrate/jim-calhoun/letter/andon/`.

Six files total: 3 net-new HTML, 3 net-new sibling envelopes (one extracted from existing inline JSON-LD).

Before you do anything, you must read these files in this order:

1. `sprints/substrate-jim-calhoun-v2-alpha/SPEC.md` — what to build (full content for new files, 19 strips for letter migration)
2. `sprints/substrate-jim-calhoun-v2-alpha/CONTRACT.md` — what NOT to break (23 invariants)
3. `registrar/index.html` — visual register reference (CSS, nav, fonts, scripts to copy byte-for-byte into new HTML files)
4. `registrar/keg.json` — sibling envelope shape reference
5. `substrate/jim-calhoun/index.html` — current letter file; source of the move operation; 994 lines including embedded JSON-LD, intentional voice-marks, four-postscript margin staircase

Do not skip any of these. SPEC and CONTRACT contain non-negotiable constraints. The /registrar/ files are the visual and structural register the new founder declaration and Andon page must match exactly.

## What this sprint is

The architecture demonstrates what GRV-004 makes possible — multi-register substrate declaration scaling from operator-grade institutional surface (founder declaration) through memoir register (letter) to per-recipient register (Option C, stubbed for future). This is the founder-grade exemplar Keg, just like /registrar/ became the Foundation-grade exemplar Keg in the prior sprint.

The funder reading the founder declaration follows compose_with into /registrar/, /standards/, /research/, and /substrate/jim-calhoun/letter/. They compose the picture by composition. They do not need a deck.

The letter survives at sibling location with strips applied for protective discipline. Erik Cottrell, Pierre-Jean Ferbos, Kelly Cottrell, Take Flight Advisors are stripped entirely (surface + envelope). E. Brown Robbins migrates from buried `personal_lineage` block to founder declaration's surface lineage as canonical methodological ancestor. Wigginton, Kare, Mok appear envelope-only on founder declaration as `lifelong advisor and inspiration`.

The Andon page is yellow-register diligence-access framing — jidoka grounded in 1924, kaizen discipline rather than feature, social vouching not technical enforcement.

## ⛔ GATE 1 — STOP HERE before any code

In your **first response of this execution session**, before writing or modifying anything, you must:

1. State that you have read SPEC.md, CONTRACT.md, /registrar/index.html, /registrar/keg.json, and substrate/jim-calhoun/index.html.
2. List the 6 files you will create or modify, in order of operations.
3. Confirm you understand the 19 strip operations against the letter (numbered 3.1 through 3.19 in SPEC §3) — a few strips are precise multi-line OLD/NEW pairs and need exact-match against the current file's whitespace and HTML entities.
4. Confirm the locked operator calibrations:
   - Display: "Jim Calhoun" (plain serif, no italic split — per SPEC §1 reasoning: italic on a person-name surface reads as decoration; the noun-vs-person-name distinction governs)
   - Section II Body keeps softened language (no "the underlying claim about computer science is wrong")
   - Robbins surface framing has NO "grandfather" word
   - Andon address is `jim+diligence-andon@the-grove.ai` (with plus-aliasing)
   - Andon yellow accent applies ONLY to Section I of the Andon page
5. Surface any disagreement with SPEC or CONTRACT now. Once you start, edits cascade.
6. Ask any clarifying questions about ambiguities.

Then **wait for explicit operator approval** ("go", "yes", "approved", "confirmed, proceed", or equivalent).

Do not edit any file outside `sprints/substrate-jim-calhoun-v2-alpha/` until that approval is received. The Gate-1 re-confirmation creates the audit trail; it is a CONTRACT requirement, not optional.

If you skip Gate 1 and start editing, you have failed the sprint at its first step.

## Execution order (once Gate 1 is operator-approved)

1. **Worktree.** From `C:\GitHub\grove-launch-site\` (CMD, `cd /d` for cross-drive), run:
   ```
   git worktree add ../grove-substrate-jim-calhoun -b substrate-jim-calhoun-v2-alpha
   cd /d C:\GitHub\grove-substrate-jim-calhoun
   ```
   All edits in the worktree.

2. **Move letter file (Op 1).** Read full content of `substrate/jim-calhoun/index.html` (994 lines). Use `create_file` to write that content verbatim to `substrate/jim-calhoun/letter/index.html`. This creates the `letter/` directory automatically. The original file at `substrate/jim-calhoun/index.html` is preserved at this point — it gets overwritten in Op 6.

3. **Apply strips 3.1 through 3.19 to the moved letter file (Op 2).** In order. Each strip is an `edit_block` (str_replace) operation per SPEC §3. The strips fall into categories:
   - Strips 3.1, 3.2: TFA out of Article author block + surface byline
   - Strips 3.3, 3.4, 3.5: Erik / PJ / Kelly out of envelope arrays
   - Strip 3.6: full deletion of `personal_lineage` block
   - Strip 3.7: postscript-ppps rewrite (Kelly/Erik/PJ removed, Leo gets context line)
   - Strips 3.8, 3.9: PJ paragraph and Erik paragraph deletion in Inspirations & Lineage coda
   - Strip 3.10: Andon framing prepend in handshake-block
   - Strip 3.11: Option C stub comment insertion after handshake-block close
   - Strip 3.12: sibling envelope `<link>` insertion in head
   - Strips 3.13 through 3.19: URL canonicalization (canonical URL, OG URL, DC.identifier, WebPage @id, Article @id, BreadcrumbList, GroveKeg @id) all updated from `/substrate/jim-calhoun/` to `/substrate/jim-calhoun/letter/`

   After all strips, the letter file at `substrate/jim-calhoun/letter/index.html` is the verbatim memoir Keg with surgical edits applied.

4. **Extract letter envelope to sibling keg.json (Op 3).** The letter file's inline JSON-LD GroveKeg block (at the head, with `@type: ["GroveKeg", "Article"]`) is the source. Extract that JSON object verbatim, save as `substrate/jim-calhoun/letter/keg.json`. Then append a new entry to the `reserves` array (per SPEC §4):
   ```
   "Per-recipient substrate (Option C) is forthcoming structural work. Recipients named in this letter's dedication will receive per-recipient Keg surfaces accessible through Andon clearance at /substrate/jim-calhoun/letter/andon/. Demonstrates the multi-register claim structurally."
   ```
   Add the same `reserves` entry to the inline JSON-LD GroveKeg block on the surface so both remain deep-equal.

5. **Run verification scan #1 (after letter migration complete).** Before moving to new files, verify the letter strips are clean:
   ```
   findstr /i /c:"Cottrell" substrate\jim-calhoun\letter\
   findstr /i /c:"Ferbos" substrate\jim-calhoun\letter\
   findstr /i /c:"takeflightadvisors" substrate\jim-calhoun\letter\
   findstr /i /c:"Take Flight Advisors" substrate\jim-calhoun\letter\
   findstr /i /c:"Managing Director" substrate\jim-calhoun\letter\
   ```
   All five must return zero matches. If any return a match, stop and report — there's an unhandled occurrence.

6. **Create founder declaration HTML (Op 4).** Build `substrate/jim-calhoun/index.html` per SPEC §1. Method:
   - Open `registrar/index.html`. Copy verbatim into the new file: DOCTYPE, html tag, head charset/viewport, font preconnects/loads, all `<style>` content (every line of CSS), nav block, intersection-observer reveal scripts, vercel insights script.
   - Replace head metadata blocks per SPEC §1 head metadata: title, description, canonical URL, Open Graph, Twitter Card, Dublin Core, JSON-LD WebPage, JSON-LD BreadcrumbList, JSON-LD Person (per SPEC), JSON-LD GroveKeg (deep-equal mirror of sibling per Op 5).
   - Add sibling envelope link in head: `<link rel="alternate" type="application/ld+json" href="/substrate/jim-calhoun/keg.json">`
   - Body: 5 sections (declaration, method, lineage, compose-with, reserves) per SPEC §1 markup. Use existing /registrar/ class names (`section-num`, `headline`, `body-text`, `lineage-block`, `lineage-attribution`, `lineage-body`, `compose-list`, `download-bar`, `composition-surface`, etc.) — they're all defined in the copied CSS. Do not invent new classes.
   - Footer + composition surface per SPEC §1.
   - Option C stub HTML comment after the footer block.

7. **Create founder declaration envelope (Op 5).** Write `substrate/jim-calhoun/keg.json` per SPEC §2. Full JSON content provided in SPEC. The inline GroveKeg JSON-LD block in Op 4 must be deep-equal to this file.

8. **Create Andon page HTML (Op 6).** Build `substrate/jim-calhoun/letter/andon/index.html` per SPEC §5. Method:
   - Open `registrar/index.html`. Copy verbatim same elements as Op 4.
   - Append the three yellow-accent CSS rules to the `<style>` block (per SPEC §5 yellow accent CSS).
   - Replace head metadata per SPEC §5 head metadata. Five-position BreadcrumbList (Foundation root → Substrate → Jim Calhoun → Letter → Andon).
   - Add sibling envelope link: `<link rel="alternate" type="application/ld+json" href="/substrate/jim-calhoun/letter/andon/keg.json">`
   - Body: 5 sections (declaration with yellow eyebrow/divider/version-line, what-andon-is, why-gate, compose-forward, kaizen) per SPEC §5 markup.
   - Footer + composition surface per SPEC §5.

9. **Create Andon page envelope (Op 7).** Write `substrate/jim-calhoun/letter/andon/keg.json` per SPEC §6. Full JSON content provided in SPEC. Inline GroveKeg JSON-LD block in Op 6 must be deep-equal.

10. **Run verification scan #2 (full sprint).** From `C:\GitHub\grove-substrate-jim-calhoun\`:
    ```
    dir /s /b substrate\jim-calhoun\

    findstr /i /s "Cottrell Ferbos takeflightadvisors" substrate\jim-calhoun\
    findstr /i /s "Take Flight Advisors" substrate\jim-calhoun\
    findstr /i /s "Managing Director" substrate\jim-calhoun\
    ```
    First command should list all 6 files. Subsequent commands should return ZERO matches each. If any match, stop and report.

11. **Run verification scan #3 (Robbins migration).**
    ```
    findstr /i /c:"E. Brown Robbins" substrate\jim-calhoun\index.html
    findstr /i /c:"E. Brown Robbins" substrate\jim-calhoun\keg.json
    findstr /i /c:"E. Brown Robbins" substrate\jim-calhoun\letter\index.html
    findstr /i /c:"grandfather" substrate\jim-calhoun\index.html
    ```
    First two should return matches. Third should return zero. Fourth should return zero. The string "grandfather" may still appear in `substrate\jim-calhoun\letter\index.html` dedication block — that's memoir register, expected.

12. **Commit.** Use a `.bat` wrapper if commit message has spaces. Subject:
    ```
    substrate-jim-calhoun-v2-alpha: founder declaration + letter migration + Andon gate
    ```
    Body lists files created/modified, names the operator-locked calibrations applied, references SPEC and CONTRACT.

13. **Report to operator.** Final summary:
    - All 6 files at expected paths (paste `dir /s /b` output)
    - All findstr scans clean (paste results)
    - Worktree branch name: `substrate-jim-calhoun-v2-alpha`
    - Suggested next action: operator switches to main repo at `C:\GitHub\grove-launch-site\`, merges or cherry-picks from worktree, runs `npx vercel --prod --yes` from CMD to deploy, then verifies via curl per CONTRACT §13.

Do **NOT** run `npx vercel --prod --yes`. Operator deploys manually.

## Environment notes

- **OS:** Windows. Repo root is `C:\GitHub\grove-launch-site` (capital G matters; lowercase `github` fails silently).
- **Worktree:** `C:\GitHub\grove-substrate-jim-calhoun` after the worktree command.
- **Shell:** CMD for git operations. `cd /d` flag required for cross-drive directory changes.
- **Commit messages with spaces:** CMD mangles them inline. Use a `.bat` wrapper. Precedent file: `do-commit.bat` (read for pattern).
- **Deploy:** manual only. `npx vercel --prod --yes` from `C:\GitHub\grove-launch-site` (not from the worktree). Do not run in this sprint.
- **Vercel project ID:** `prj_FpKHXIO5VoGGN5ieWMvMeXJ9yh7N` (for reference).
- **Git auto-deploy is broken** — deploys are manual.

## File locations you will need

**Read-only reference:**
- `sprints/substrate-jim-calhoun-v2-alpha/SPEC.md` (canonical content source)
- `sprints/substrate-jim-calhoun-v2-alpha/CONTRACT.md` (invariants)
- `registrar/index.html` (visual register reference)
- `registrar/keg.json` (envelope shape reference)

**Source of move:**
- `substrate/jim-calhoun/index.html` (994 lines) — read once, write content verbatim to letter location, then overwrite at root in Op 6

**Create:**
- `substrate/jim-calhoun/index.html` (founder declaration; overwrites the source-of-move file)
- `substrate/jim-calhoun/keg.json` (founder envelope)
- `substrate/jim-calhoun/letter/index.html` (letter, with strips applied)
- `substrate/jim-calhoun/letter/keg.json` (letter envelope, extracted)
- `substrate/jim-calhoun/letter/andon/index.html` (Andon page)
- `substrate/jim-calhoun/letter/andon/keg.json` (Andon envelope)

## What this sprint is NOT

- **NOT** a /registrar/ edit. /registrar/'s canonical lineage entries for Wigginton, Kare, Mok stay unchanged.
- **NOT** a deploy. Operator deploys after reviewing CC's output.
- **NOT** a code rewrite of the letter. Move-and-strip discipline only — 30 payload sections, four-postscript margin staircase, dedication block, Workshop Annex, intentional voice-marks all preserved verbatim except the named strips.
- **NOT** a creative interpretation of /registrar/'s visual register. CSS, nav, fonts, scripts are byte-for-byte copied. Only the Andon page extends with three yellow-accent rules.
- **NOT** a vocabulary refactor. Canonical Grove terms (Keg, Autonomaton, register, operator, below-the-waterline, compose_with, bicameral) used precisely throughout.

---

## Quick reference: SPEC and CONTRACT section map

| Section | Purpose |
|---------|---------|
| SPEC §1 | Founder declaration content (file 1 markup) |
| SPEC §2 | Founder envelope (file 2 JSON) |
| SPEC §3 | Letter strip operations 3.1 — 3.19 (file 3) |
| SPEC §4 | Letter envelope extraction notes (file 4) |
| SPEC §5 | Andon page content (file 5 markup) |
| SPEC §6 | Andon envelope (file 6 JSON) |
| CONTRACT §1 | Visual register parity (invariants 1–3) |
| CONTRACT §2 | Strip completeness (invariants 4–6) |
| CONTRACT §3 | Advisor positioning discipline (invariants 7–8) |
| CONTRACT §4 | Letter integrity (invariants 9–10) |
| CONTRACT §5 | Andon address discipline (invariants 11–12) |
| CONTRACT §6 | Sibling envelope discipline (invariant 13) |
| CONTRACT §7 | Lineage minimalism (invariants 14–15) |
| CONTRACT §8 | Composition surface discipline (invariant 16) |
| CONTRACT §9 | Option C stub discipline (invariant 17) |
| CONTRACT §10 | No-judgment register (invariant 18) |
| CONTRACT §11 | License + provenance (invariants 19–20) |
| CONTRACT §12 | Verification commands |
| CONTRACT §13 | Deploy discipline (invariants 21–22) |
| CONTRACT §14 | Lodestar gate (invariant 23) |

---

**Lodestar:** Design is philosophy expressed through constraint. Each section earns its place by expressing a structural position. If a section reads as decoration, surface to operator before deploying.

**Operator method:** Pattern recognition under structural constraint. Naming what others have optimized around, then redesigning the journey through it. The architecture is the message.

**Working pattern:** Claude chat is PM and SPEC author. Claude Code is executor — receives prompts verbatim, never summaries. Jim is operator and sets gates.

Begin Gate 1 confirmation now.
