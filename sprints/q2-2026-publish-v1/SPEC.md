# SPEC — Q2 2026 Publish (Λ Standings + Structural Custody silent launch)

**Repo:** `grove-launch-site` (deploys to `the-grove.ai`)
**Date authored:** 2026-07-20
**Source of truth:** `lambda-standings` `main` @ `40ac586` — path `June-2026/deliverables/`
**Governing upstream spec:** `June-2026/deliverables/grove-publish-package/PUBLISH-SPEC.md` (dated 2026-07-21, written for this task)

---

## Goal

Publish the Q2 2026 quarterly research in two coordinated moves:

- **☀️ Daytime (this session):** Λ Standings Q2 page goes **fully public**; the *Structural Custody in Agentic AI* CIO Alert goes **silently live** (reachable by URL, linked from nowhere, absent from sitemap); a site-wide banner announces the Λ research.
- **🌙 22:30 ET tonight (2026-07-20 22:30 ET = 2026-07-21 02:30 UTC):** a scheduled agent runs a single, pre-built, tested deploy that reveals the alert — adds its `/alerts/` card + nav link + `sitemap.xml`/RSS entry. Operator on standby.

## Non-goals

- No edits to alert copy — the Structural Custody package is fact-checked and final (`PUBLISH-SPEC.md`: "do not edit any copy").
- No back-reconciliation of the `lambda-standings` research repo this session (the site page is ahead on counts — see Risk R2).
- No cleanup/commit of the ~30 untracked sprint-scratch files (left untracked, excluded from commits).

---

## Decisions (locked with operator 2026-07-20)

| # | Decision |
|---|---|
| D1 | **Reveal choreography:** Λ page public today + banner; alert silent today; alert link revealed tonight. |
| D2 | **Splash = site-wide dismissible banner strip** on every page, `localStorage`-remembered, links to `/lambda/`. Announces Λ research (not the alert). |
| D3 | **Midnight mechanism = scheduled agent, consolidated single deploy at 22:30 ET.** No client-side timer. One commit adds card + nav + sitemap. |
| D4 | **Lambda counts:** keep the **staged working-tree page (12 patterns / 115 sources)** — it is ahead of the research snapshot (11/104). Flag for later back-reconcile. |
| D5 | **Sitemap:** alert fully dark today (absent from sitemap); sitemap entry ships in tonight's reveal deploy. |
| D6 | **Delete** the stale `alerts/reserved-use-ratchet/` dir (superseded by `structural-custody`). |
| D7 | **Scratch files:** leave untracked; selectively stage only the publish fileset. |

---

## Deploy contract (from `DEPLOY.md`)

- Publish = selective `git add` → commit → `git push origin master` → Vercel auto-builds (static, no build step) → `the-grove.ai`.
- **Never assume push == live.** Verify: Vercel deployment reaches `READY` (not `BLOCKED`/`ERROR`), then cache-busted `curl` on changed files.
- Ignore `do-pdf-commit-and-deploy.bat` (`npx vercel` is break-glass only; CLI not installed).

---

## Work breakdown

### Phase 0 — Clean working tree
- Delete `alerts/reserved-use-ratchet/` immediately.
- Snapshot current state before touching anything:
  ```bash
  git status --porcelain
  git ls-files --others --exclude-standard | wc -l   # audit ~30 untracked scratch files
  ```
- Confirm the publish fileset (below) and that scratch stays untracked.

### Phase 1 — Λ Standings Q2 page (PUBLIC)
- Finalize `lambda/index.html` (keep 12/115 per D4).
- Confirm `docs/benchmark-q2-2026.pdf` and `docs/md-letter-q2-2026.pdf` are the intended final artifacts and are correctly cited by the page's JSON-LD.
- Confirm `lambda/archive/2026-03/index.html` (prior-quarter snapshot) is retained.
- **Local test:** serve locally (if a local static server is available) and eyeball `/lambda/` — title, standings table, internal links.

### Phase 2 — Structural Custody alert (SILENT)
- Copy the package **wholesale** from `lambda-standings` `main`:
  `June-2026/deliverables/grove-publish-package/alerts/structural-custody/` →
  `grove-launch-site/alerts/structural-custody/`
  (includes `index.html`, `evidence.html`, `slides.html`, `manifest.json`, `screenshots/` [65], `assets/grove-mark.png`, `support.js`, `deck-stage.js`, `_ds/`).
- **Do not** touch `alerts/index.html`, nav, or `sitemap.xml`.
- **Verify the copy landed intact:**
  ```bash
  find alerts/structural-custody -type f | wc -l   # expect full asset count
  ```
  Spot-check a few screenshots (open PNGs) and the JS files (`support.js`, `deck-stage.js`) + `_ds/` are present and non-empty.

### Phase 3 — Splash banner (PUBLIC)
- Site-wide dismissible banner strip → `/lambda/`; `localStorage` dismiss key; consistent with existing self-expiring-module patterns in the codebase.
- **Reuse the existing banner/featured-module JS** rather than authoring new code, to minimize surface area.
- Links **only** to `/lambda/`; announces Λ research — **no alert tease**.
- First step: enumerate the **nav-bearing pages** (root `index.html`, `lambda/index.html`, `alerts/index.html`, etc.) that must carry the banner, so coverage is complete and consistent.

### Phase 4 — Deploy + verify (daytime)
- Selective commit of the publish fileset → push `master` → **watch Vercel dashboard for `READY`**.
- Verify (cache-busted), e.g.:
  ```bash
  curl -sL -o /dev/null -w "%{http_code}\n" "https://the-grove.ai/lambda/?cb=$(date +%s)"
  # repeat for /alerts/structural-custody/, /evidence.html, /slides.html, /docs/benchmark-q2-2026.pdf
  ```
  - `/lambda/` shows Q2 title/standings.
  - The 3 alert pages render 200; no 404s on `manifest.json` or `screenshots/*.png` (check devtools/network).
  - `/docs/benchmark-q2-2026.pdf` → 200 (confirm the large PDF serves; watch for range-request/size issues).
  - `/alerts/` shows **no** Structural Custody card yet; sitemap does **not** list it.
  - Confirm the **banner appears and dismisses** (and stays dismissed via `localStorage`) — beware stale Vercel edge cache serving an old page.

### Phase 5 — Pre-build tonight's reveal (daytime — do this today)
- Author the exact reveal diff now: `/alerts/` card (mirror existing Polarity/alert card style), nav link across nav-bearing pages, `sitemap.xml` entry. (No RSS feed exists in the repo.)
- Package as a ready-to-apply script (e.g., `sprints/q2-2026-publish-v1/reveal-apply.sh`) so tonight's run is push-button (apply → commit → push → verify).
- **Test it on a throwaway branch today** (apply, diff-review, then discard) so tonight applies clean.
- Document the patch in `sprints/q2-2026-publish-v1/REVEAL-PATCH.md` and capture daytime verification (screenshots/notes) for the handoff.

### Phase 6 — Scheduled reveal (22:30 ET tonight)
- Scheduled agent applies the Phase 5 script → commit → `git push origin master` → verify `READY` + card/sitemap live. Operator on standby.
- **Fallback:** if the agent fails, operator runs the same one-command deploy manually.

---

## Risks

- **R1 — Scheduled-agent push path (BLOCKING, prove before tonight).** The runtime firing at 22:30 ET must auth and push to `grove-launch-site` `master`. `DEPLOY.md` notes the `understory-ip` repo / `twocash` author split; the `lambda-standings` `HANDOFF.md` flags a parallel `gh`-account gotcha. Prove the push works today, or fall back to a local scheduled trigger / one-command operator-run deploy.
  - **Permanent fix (deliberately deferred):** consolidating `grove-launch-site` under a single account (`twocash` / `the-grove-ai` org, where `lambda-standings` already lives) removes the dual-identity friction for good. `understory-ip` was a temporary Q1 home. **Do NOT migrate today** — re-homing forces re-linking Vercel's Git connection, which is failure mode #1 (severed link → zero builds); never touch deploy plumbing hours before a timed reveal. Run it as its own sprint after this publish. Only pull it into today if the existing `twocash` push path proves broken.
- **R2 — Count discrepancy (accepted).** Site page (12/115) is ahead of research snapshot (11/104). Shipping site page per D4; research repo to be back-reconciled later (out of scope). The discrepancy is internal (site vs. research repo), not visitor-facing — **no visible on-page disclaimer** (would undercut the authoritative standings). **Action (confirmed 2026-07-20):** add a brief **HTML comment** in `lambda/index.html` recording the status — site `12 patterns / 115 sources` vs. research repo `11 / 104` @ `40ac586`, to be back-reconciled — as an internal audit trail only.
- **R3 — Silent-launch leakage (medium).** Ensure nothing in Phase 1–4 links the alert or lists it in sitemap. Card style + copy must match `PUBLISH-SPEC.md` follow-up guidance.
  - **Optional hardening:** temporarily `Disallow` the alert path in `robots.txt` to prevent premature crawl/indexing (direct access + sharing still work — that's the point of silent launch). **If used, the disallow MUST be reverted in tonight's reveal deploy**, else the announced alert stays de-indexed. Adds a moving part — only if operator wants crawl suppression today.
  - Post-deploy, spot-check server/access logs for unexpected hits.
- **R4 — Deploy verification (high).** Both historical Vercel failure modes (severed Git link → zero builds; private-repo author `BLOCKED`) are fixed by keeping the repo public; watch for a push that registers no build. Always check the **Vercel UI + cache-busted curls** together.

### Operational risks (surfaced in review)

- **Vercel edge cache.** Aggressive static caching can serve a stale page — the new banner could stick (or fail to appear) for returning users. Cache-bust when verifying; confirm banner `localStorage` behavior on a fresh session.
- **Large-PDF hosting.** `benchmark-q2-2026.pdf` is ~1.7 MB — confirm it serves correctly (200, no truncation; range requests behave).
- **Silent-alert JS/asset integrity.** `_ds/`, `deck-stage.js`, `support.js`, `manifest.json` must all load — test the alert's interactivity (scroller, 30-card evidence grid, 21-slide deck arrow-key nav) even though it's unlinked.
- **No RSS.** Confirmed — no feed file in repo; tonight's reveal is card + nav + sitemap only.

---

## Phase 0 — executed (2026-07-20)

- **`reserved-use-ratchet/` PARKED, not deleted** → `scratchpad/phase0-parked/` (operator confirmed: earlier draft, may revisit). It was a distinct single-page alert ("Alex Karp… Here Is the Paper Trail"), same Q2 story/counts as the lambda page, superseded for publish by `structural-custody`.
- **Stale `.git/index.lock` removed** (0-byte, dated 2026-07-06, no live git process) — left by the interrupted July-6 drafting session.
- **Silent-launch contamination found + reverted.** Three tracked index files were pre-wired to publish the *old* alert; all reverted to origin:
  - `alerts/index.html` — reverted (added a visible card → old alert). Card moves to tonight, pointing at `structural-custody`.
  - `llms.txt` — reverted (added a machine-readable entry → old alert). Entry moves to tonight.
  - `sitemap.xml` — reset, then re-applied **only** the `/lambda` lastmod bump (2026-05-14 → 2026-07-06). The old-alert `<url>` and `/alerts` lastmod bump move to tonight.
- Pre-existing `/ratchet` entry already in committed sitemap — noted, untouched (origin state, out of scope).

## Publish fileset (selective stage — daytime deploy)

- `lambda/index.html` (modified)
- `sitemap.xml` (modified — `/lambda` lastmod only)
- `lambda/archive/2026-03/index.html` (new)
- `docs/benchmark-q2-2026.pdf`, `docs/md-letter-q2-2026.pdf` (new)
- `alerts/structural-custody/**` (new, copied wholesale)
- Splash banner changes across nav-bearing pages (new)
- **Excluded (leave unstaged):** `SESSION-STATE.md`, `do-commit.bat`, `sprints/hospitable-graph-01-foundation/EXECUTION_PROMPT.md`, all sprint scratch.

## Tonight's reveal fileset (scheduled deploy)

- `alerts/index.html` — add Structural Custody card (id **007**, mirroring Polarity #006 card style)
- Nav link on nav-bearing pages
- `llms.txt` — add Structural Custody entry (class: alert)
- `sitemap.xml` — add `/alerts/structural-custody/` `<url>` + bump `/alerts` lastmod
- (If R3 robots hardening was used) revert the `robots.txt` `Disallow`

---

## Daytime checklist (ordered)

1. Pull latest `grove-launch-site` `master`; confirm clean base.
2. **Phase 0** — delete stale alert; snapshot `git status` + scratch audit.
3. **R1 FIRST** — prove `twocash` can push to `master` (dummy commit if needed); document the auth path (PAT? SSH? credential manager?). Blocks tonight.
4. **Phases 1–3** — Λ page finalize, wholesale alert copy, banner (reuse existing JS).
5. Local tests — HTML validity, links, banner dismiss, alert interactivity.
6. **Phase 4** — selective commit/push → Vercel `READY` → cache-busted curls → confirm no card, no sitemap entry.
7. **Phase 5** — build + test the reveal patch on a throwaway branch; write `REVEAL-PATCH.md`.
8. Prep operator handoff for the 22:30 ET scheduled run (capture verification screenshots/notes in the sprint dir).
