# Deploy SOP — the-grove.ai

**How production deploys work:** push to `master` on `understory-ip/grove-launch-site` → Vercel (project `grove-launch-site`, team **twocash's projects**, **Pro** plan) auto-builds and deploys to `the-grove.ai`. Static site; `outputDirectory: "."`; no build step.

**Verify after every deploy — do NOT assume `push == live`:**
```bash
curl -sL "https://the-grove.ai/standards/GRV-001.json?cb=$(date +%s)" | grep -E '"(version|date_modified)"'
curl -sL -o /dev/null -w "%{http_code}\n" "https://the-grove.ai/<a-file-you-just-changed>"
```
Confirm the latest commit actually reached Vercel state `READY` (not `BLOCKED`/`ERROR`). Vercel IDs for diagnosis: project `prj_FpKHXIO5VoGGN5ieWMvMeXJ9yh7N`, team `team_odJBQTq9WJT64ceCXCYei9gl`.

---

## Known failure modes (both hit us, froze prod for ~5 weeks from 2026-05-14)

### 1. Project Git connection silently severs → pushes register ZERO builds
**Symptom:** you push, but no deployment appears in Vercel at all (last deploy is stale).
**Fix:** Vercel → `grove-launch-site` → **Settings → Git** → reconnect the repository (project-level, not just an account re-auth). Note: an **empty repo Settings → Webhooks** list is *normal* — the GitHub App carries the webhook, not the repo.

### 2. Commit-author authorization on PRIVATE repos → deployment `BLOCKED`, empty build logs
**Symptom:** a deployment registers but comes back `state: BLOCKED` with no build logs; inspector says *"blocked because <user> does not have a Vercel account linked to their GitHub account."*
**Cause:** Vercel only builds a **private**-repo commit whose GitHub **author** is a linked Vercel team member. Our commits author as `twocash`; when `twocash` wasn't linked, private-repo builds blocked.
**Fix (what worked):** keep `understory-ip/grove-launch-site` **public** — the gate is not enforced on public repos. Alternatively, link the commit author's GitHub login (`twocash`) to a Vercel account on the team (Account Settings → Login Connections → Connect GitHub).
**Plan is NOT the cause** — the account is Pro/active. Don't chase billing.

---

## Break-glass (if auto-deploy is down and you need to ship)
- Vercel dashboard → Deployments → **Redeploy** a known-good commit, or
- Vercel MCP `deploy_to_vercel`. Caveat: deploys under the same account/gates; may land as a preview needing promotion. **Not** a standing SOP — auto-deploy from `master` is the contract.

## Optional future simplification
The repo (`understory-ip`) and the commit author (`twocash`) are different GitHub identities. Consolidating the repo under `twocash` would remove the dual-identity friction permanently. Not required; the public-repo setting already keeps deploys flowing.

---
*deploy-pipeline-restore-v1 · 2026-06-22 · The Grove Foundation*
