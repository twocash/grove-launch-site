# deploy-pipeline-restore-v1 — SPEC

**Tier:** Sprint (infrastructure remediation) · **Provenance:** 2026-06-22 · diagnosed via Vercel API (project `prj_FpKHXIO5VoGGN5ieWMvMeXJ9yh7N`, team `team_odJBQTq9WJT64ceCXCYei9gl`). Trigger: GRV-001 2.0 (`70db566`) cannot publish.

## Live Status

| Field | Value |
|-------|-------|
| **Current Phase** | Phase 1 — Confirm the gate (operator) |
| **Status** | ✅ **Complete** — GRV-001 2.0 live on the-grove.ai (deploy `dpl_EUE4t…`, commit `d81be0e`, READY) |
| **Blocking Issues** | None (resolved) |
| **Last Updated** | 2026-06-22 |
| **Next Action** | Done. Optional: write `DEPLOY.md`; operator-directed backlog update. |

## Resolution

The commit-author authorization gate is enforced on **private** repos: Vercel refuses to build a commit whose GitHub author isn't a linked Vercel team member. The fix was **making `understory-ip/grove-launch-site` public** (plus the project Git reconnect). Evidence: the blocked deploy (`70db566`) carried `githubRepoVisibility: private`; the successful deploy (`d81be0e`) carries `githubRepoVisibility: public` and reached `READY`. That one build shipped the whole 5-week backlog (nav close + v1.3 + v2.0). Verified live: byline `v2.0 · June 22, 2026`, manifest `date_modified: 2026-06-22`, `/standards/001/schemas/*.json` → 200. **understory-ip was NOT killed; consolidation to twocash remains an optional future simplification, not required.**
| **Attention Anchor** | We are restoring push-to-deploy — not moving the repo, not changing how the site is built |

## Attention Anchor

- **We are restoring:** automatic `git push master` → Vercel **production** deploy for `the-grove.ai`.
- **Success looks like:** a push reaches Vercel state `READY` (not `BLOCKED`) and `the-grove.ai` serves GRV-001 2.0.
- **We are NOT:** moving the repo / changing `origin`, rewriting the site, or making manual MCP deploys the standing process.
- **Current phase:** Diagnosis + decision.
- **Next action:** operator confirms/upgrades the Vercel plan.

---

## The problem

Production has been frozen on the **May 14 build (v1.2)** for ~5 weeks. Every commit since — including GRV-001 **v1.3** and **v2.0** (HEAD `70db566`) — is in GitHub but not live. Root-cause chain, diagnosed this session via the Vercel API:

1. **Git connection severed at the project level** → pushes registered **zero** builds. **[FIXED]** — operator reconnected the repo in Vercel → Settings → Git; pushes now register builds.
2. With Git restored, the next push registered a **production** deployment (`dpl_4r5Qq…`, commit `70db566`) — but it returned **`state: BLOCKED`** with **empty build logs**. → a Vercel **account/plan gate**, hit *before any build runs*.

### Confirmed block reason (from the deployment inspector)
> "The deployment was blocked because **twocash does not have a Vercel account linked to their GitHub account.**"

- Plan is **Pro / active** — the earlier Hobby/commercial-usage hypothesis was **WRONG**; billing is not the issue.
- The push **did** trigger a production deployment (GitHub→Vercel works) but Vercel **refused to authorize** it because the **commit author's GitHub login (`twocash`) is not linked to any Vercel account**.
- Build logs are **empty** → blocked before building. This is Vercel's **commit-author authorization gate**, not a build / plan / repo failure.
- Why now: the GitHub-login↔Vercel-account link for `twocash` was dropped (likely the same mid-May breakage that severed the project Git connection). May-14 builds, authored by the then-linked `twocash`, deployed fine.

---

## Decision (ADR) — what's the right call

**Recommendation: Option C.** The operator's two proposed options both target the wrong layer.

### Option A — Move `origin` to twocash (github/jimcalhoun). ❌ Rejected as the fix.
The repo connection **already works** — the build registered. Repo ownership is not the blocker; a **plan gate** is. Transferring the repo / re-pointing remotes is real work that does not clear a `BLOCKED`-by-plan deployment. (May still be desirable later for tidiness, but it does not fix this.)

### Option B — Make Vercel MCP `deploy_to_vercel` the deploy SOP. ❌ Rejected as primary SOP.
It deploys under the **same blocked scope** → same `BLOCKED`. Even unblocked, it is manual every time: no push-to-deploy, no preview URLs, no rollback candidates, and it contradicts every prior sprint's Phase 8. **Keep only as a documented break-glass fallback.**

### Option C — Link the `twocash` GitHub login to the Vercel account; keep git auto-deploy. ✅ RECOMMENDED (corrected after the inspector confirmed the reason).
The confirmed block is **commit-author authorization**: Vercel won't deploy a commit whose GitHub author isn't a linked Vercel user. Fix = **connect the `twocash` GitHub login to the jimcalhoun@gmail.com Vercel account**:
- Vercel → avatar → **Account Settings → Login Connections** (a.k.a. Connections) → **Connect GitHub**, authorizing the `twocash` login. (Equivalently: sign out and sign back in via **Continue with GitHub** on the same account.)
- If `twocash` is already bound to a *different/stale* Vercel account, unlink it there first, then connect it to the jimcalhoun@gmail.com account.
- **No plan change, no repo move, no SOP change.** Once linked, a redeploy authorizes and builds.

---

## Phases

### Phase 1 — Link the GitHub author to Vercel (operator · ~3 min · dashboard) ← WE ARE HERE
- Vercel → avatar → **Account Settings → Login Connections / Connections → Connect GitHub** (authorize the `twocash` login). Or sign out and back in via **Continue with GitHub** on the same account.
- If `twocash` is bound to a stale/other Vercel account, unlink it there first.
- **Gate:** the `twocash` GitHub login shows connected on the jimcalhoun@gmail.com Vercel account.

### Phase 2 — (folded into Phase 1) — no billing change required; plan is already Pro.
- Optional: on the blocked deployment `dpl_4r5Qq…`, use **Redeploy** once linked, or just let Phase 3's trigger push build.

### Phase 3 — Restore + verify auto-deploy (CC)
- Push a trigger commit; confirm a deployment registers **and reaches `READY`** (not `BLOCKED`).
- Verify live: `the-grove.ai/standards/001` byline = **v2.0 · June 22, 2026**; manifest `date_modified: 2026-06-22`; `/standards/001/schemas/*.json` resolve (200).
- This single deploy also ships the whole backlog (f27c60c, v1.3, v2.0) since HEAD contains them all.

### Phase 4 — Document the deploy SOP (CC)
- Write `DEPLOY.md`: "push to `master` → Vercel **Pro** auto-deploys production; break-glass = Vercel MCP `deploy_to_vercel` or dashboard Redeploy." Record the hard requirement: **a commercial Grove site MUST be on a Pro plan** or deploys silently `BLOCK`.
- Add a pre-flight line to future sprint Phase 8: confirm latest commit actually deployed (`READY`), don't assume push == live.
- Operator-directed: update `SPRINT-BACKLOG.md` (close `governance-write-protection-v1` as shipped once live; record this sprint).

---

## Non-goals
- Moving the repo / changing `origin`.
- Rewriting the site or any standard.
- Adopting manual MCP deploys as the standing process.

## Acceptance criteria
- [ ] A `git push master` triggers a Vercel production deployment that reaches **`READY`**.
- [ ] `the-grove.ai` serves GRV-001 **2.0** (byline `v2.0 · June 22, 2026`; manifest `date_modified: 2026-06-22`; schemas resolve).
- [ ] `DEPLOY.md` documents the Pro-plan requirement + the break-glass fallback + the "verify READY" pre-flight.
