# repo-hygiene-v1 — SPEC

**Tier:** Sprint (infrastructure · security) · **Provenance:** 2026-06-22 · trigger: repo made **public** to restore Vercel deploys (`deploy-pipeline-restore-v1`); public exposure makes hygiene + secret assurance a priority.

## Live Status

| Field | Value |
|-------|-------|
| **Current Phase** | Phases 1–3 ✅ done; Phase 4 covered by `DEPLOY.md` |
| **Status** | 🟢 Secret scan clean; `.vercelignore` + `.gitignore` live and verified (working docs → 404, published → 200) |
| **Blocking Issues** | None. Only open item: operator confirms Supabase RLS (anon INSERT-only, no SELECT) in dashboard |
| **Last Updated** | 2026-06-22 |
| **Next Action** | Operator: confirm RLS. Sprint otherwise complete. |

## Phase 2–3 — Results (2026-06-22)
`.vercelignore` (commit `1dbcd74`) excludes `sprints/`, `*.bat`, `SESSION-STATE.md`, `NEXT-SESSION-PROMPT.md`, `SPRINT-BACKLOG.md`, `SITE-IA.md`, `DEPLOY.md`, GRV-003 notes from serving — kept in git for provenance. `.gitignore` extended for scratch (`*.zip`, `*-backup.*`, `sprints/**/_*.py`, `sovereignty-live.html`). Untracked working files left on disk (not deleted). **Verified live:** `/SPRINT-BACKLOG.md`, `/SITE-IA.md`, `/DEPLOY.md` → 404; `/standards/001`, `/standards/GRV-001.json`, `/standards/001/schemas/zones-v2.schema.json`, `/docs/the-autonomaton-pattern-grv-001.pdf` → 200. Phase 4 (public-repo posture) is documented in `DEPLOY.md` (must stay public unless consolidated under twocash).

## Phase 1 — Results (2026-06-22)

Full **git-history** scan (no gitleaks/trufflehog installed → git-native methods over all 238 commits / 5 branches):
- Sensitive filenames ever committed (`.env`/`.pem`/`.key`/credentials): **none**.
- High-signal tokens in any history diff (GitHub/OpenAI/AWS/Google/Slack/private-key/`service_role`/Vercel/GitHub tokens): **none**.
- Secret-value assignments (`secret|token|api_key|… = "…"`) in history: **none**.
- Distinct JWTs in all history: **1**, decoded `role: anon` (ref `cntzzxqgqsjzsvscunsp`). No `service_role` key ever committed.
- **RLS probe** (read-only, id/count-only, anon key — already public on the live site): anon `SELECT` on `membership_inquiries` → `Content-Range: */0`. Public key reads **0** rows. No PII exposure.

**Verdict:** repo is safe to be public from a secrets standpoint. **One residual:** `*/0` can't distinguish "RLS blocks reads" from "table currently empty" — operator must confirm in Supabase (Auth → Policies) that `membership_inquiries` has **RLS enabled** with an INSERT policy for anon and **no** SELECT policy, so future inquiries stay private rather than relying on the table being empty now.
| **Attention Anchor** | The repo must stay **public** (private re-breaks deploys); so the public root must contain no secrets and serve only publishable content |

## Attention Anchor
- **We are doing:** making a now-public repo safe and tidy — no secrets anywhere (incl. history), no internal working docs served at the brand domain, no scratch clutter.
- **Success looks like:** clean git-history secret scan; `the-grove.ai` serves only publishable content; published PDFs still resolve; repo root is tidy.
- **We are NOT:** making the repo private (that re-breaks Vercel deploys via the commit-author gate), and NOT removing published content (standards, the linked white-paper PDFs).
- **Current phase:** Phase 1 (secret audit).

---

## Context + first-pass findings (working tree only — 2026-06-22)

The repo went public because Vercel's **private-repo commit-author authorization** gate was blocking deploys (see `DEPLOY.md`). A first-pass **working-tree** scan was run during planning:

- **No** `.env` / `.pem` / `.key` / `credentials` files.
- **No** high-signal tokens (GitHub PAT, OpenAI/Anthropic, AWS `AKIA`, Google `AIza`, Slack `xox`, private keys, Vercel tokens).
- **No** `secret/token/password = "…"` assignments.
- `.bat` scripts (`do-commit.bat`, `do-pdf-commit-and-deploy.bat`, `commit-membership.bat`) contain only git/CLI commands — no tokens.
- The **Supabase key** in `/membership` and `/ratchet` decodes to `role: anon` (project ref `cntzzxqgqsjzsvscunsp`) — the **public client key**, safe by design **iff Row-Level Security is enabled**. Formspree endpoints are public form IDs.
- Committed binaries are **content** (white-paper PDFs/DOCX, GRV-003 PDFs) — intended public; the GRV-001 PDF is linked from the standard footer.

**Caveat:** this only covered the working tree. A secret could still exist in **git history** (recoverable on a public repo). Phase 1 closes that.

---

## Phases

### Phase 1 — Secret audit (URGENT · security-gated) ← WE ARE HERE
1. **Full git-history scan:** run `gitleaks detect --source . --redact` (or `trufflehog git file://. --only-verified`) over **all history**, not just HEAD. Document results.
2. **RLS verification:** confirm Row-Level Security is enabled on the Supabase project (`cntzzxqgqsjzsvscunsp`) for any table the anon key can reach (membership capture). Anon key is only safe with RLS.
3. **Remediation (if anything found):** rotate the secret at the provider **first**; then remove from history (`git filter-repo` / BFG) and coordinate a force-push (destructive — operator-gated); update any dependents.
4. **Gate:** operator confirms history scan is clean (or remediation complete + secrets rotated).

### Phase 2 — Deploy-root hygiene (stop serving working docs at the brand domain)
- Add **`.vercelignore`** excluding internal/working files from the deployment (they stay in git, just aren't served): `sprints/`, `*.bat`, `SESSION-STATE.md`, `NEXT-SESSION-PROMPT.md`, `SPRINT-BACKLOG.md`, `GRV-003-CONTINUATION-PROMPT.md`, `grv-003-session-diffs.md`, `MEMORY*`/scratch.
- **Do NOT** exclude `docs/` wholesale — the published white-paper PDFs there are linked (`/docs/the-autonomaton-pattern-grv-001.pdf`). Exclude only the internal `docs/*.md` working files if any are non-public.
- **Verify:** after deploy, `curl the-grove.ai/SPRINT-BACKLOG.md` → 404, while `the-grove.ai/docs/the-autonomaton-pattern-grv-001.pdf` → 200.
- **Note:** `.vercelignore` removes *serving* on the-grove.ai, not *visibility* on the public GitHub repo. Since Grove publishes in the open and these docs carry no secrets, GitHub visibility is acceptable; this phase is about keeping the brand domain clean.

### Phase 3 — Repo structure cleanup
- Add **`.gitignore`** for transient artifacts: `*-backup.html`, `*-backup.json`, `sprints/**/_*.py` (scratch audit scripts), `*.zip`, ad-hoc scratch HTML.
- Remove orphaned artifacts already committed/untracked: the delivered `.zip`, sprint `*-backup.*` files, `sprints/architecture-and-accountability-v1/_*.py`, `sovereignty-live.html`, etc.
- Decide the home for working sprint docs (keep in-repo for provenance + `.vercelignore`, vs. move to a separate docs repo). Recommend: keep + ignore-from-serving.

### Phase 4 — Public-repo posture (document the constraint)
- Record in `DEPLOY.md` / a `REPO.md`: the repo **must stay public** to deploy (the commit-author gate blocks private-repo builds) **unless** ownership is consolidated under `twocash` and the author is linked — at which point private becomes viable again. State the tradeoff so no one silently flips it private and re-freezes prod.

---

## Non-goals
- Making the repo private (re-breaks deploys; only viable after the twocash consolidation).
- Removing or relocating published content (standards pages, linked white-paper PDFs, `/.well-known`, `robots.txt`, `sitemap.xml`).
- Rotating the Supabase **anon** key (public by design; only act if RLS is found disabled or a *non-anon* key is found).

## Acceptance criteria
- [ ] Full **git-history** secret scan is clean (or all findings rotated + scrubbed).
- [ ] Supabase **RLS verified enabled** for anon-reachable tables.
- [ ] `.vercelignore` live: working docs return 404 at `the-grove.ai`; published PDFs still 200.
- [ ] `.gitignore` added; scratch/backup/zip artifacts removed from the tree.
- [ ] Public-repo posture documented (the private-equals-broken-deploys constraint).
