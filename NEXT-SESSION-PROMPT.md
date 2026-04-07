# Grove Launch Site — Deployment Session

## Objective
Publish the new Grove Foundation website to `the-grove.ai` (root domain). Archive the current site without deleting anything. Preserve the `/autonomaton/` playground as-is.

## Current Architecture

### Repositories & Vercel Projects

| Repo | Path | Vercel Project | Domain | Status |
|------|------|---------------|--------|--------|
| `grove-preview-hub` | `C:\GitHub\grove-preview-hub\` | `prj_2j0whel1WXsz74FDOTHXt9cyOZ6k` / `grove-preview-hub` | Currently serves `the-grove.ai` root | TO BE ARCHIVED |
| `grove-autonomaton-pattern` | `C:\GitHub\grove-autonomaton-pattern\` | `prj_mvg3pJ4oiKqoL62Xc0rjZ1dxOeXN` / `grove-autonomaton-pattern` | `the-grove.ai/autonomaton` | DO NOT TOUCH |
| `grove-launch-site` | `C:\GitHub\grove-launch-site\` | None — no git, no Vercel | Needs to become `the-grove.ai` root | NEW SITE |

### Vercel Org
- Org ID: `team_odJBQTq9WJT64ceCXCYei9gl`

### What grove-preview-hub currently serves
- `the-grove.ai/` → `index.html` (interactive sphere + confidential preview entry)
- `the-grove.ai/preview` → `hub.html` via password (grove2026) — links to all decks
- `the-grove.ai/lambda` → lambda scoreboard deck
- `the-grove.ai/autonomaton` → served by SEPARATE Vercel project (grove-autonomaton-pattern), NOT by preview hub
- Various deck routes: `/decks/architecture.html`, `/decks/thesis.html`, etc.
- Has `X-Robots-Tag: noindex, nofollow` headers
- Has password protection on preview

### What grove-launch-site contains
- Single file: `index.html` (~1048 lines) — complete, production-ready
- Supporting content files in `/content/` and `/research/` (reference only, not served)
- No build step required — static HTML, loads Google Fonts via CDN
- All interactive JS (sphere, capture canvas, scoreboard) is inline
- Links to `the-grove.ai/autonomaton` for the playground (external link, separate project)

## Deployment Plan

### Step 1: Audit current Vercel domain configuration
Use Vercel MCP tools to understand:
- How is `the-grove.ai` currently routed? Which project owns the root domain?
- How is `the-grove.ai/autonomaton` routed? Is it a path rewrite in preview-hub's vercel.json, or a separate domain assignment?
- Are there any other subdomains or path configurations?

### Step 2: Archive grove-preview-hub
- Do NOT delete the repository or Vercel project
- The decks are valuable reference material and may still be linked from Notion
- Options:
  a) Move the preview hub to a subdomain like `preview.the-grove.ai` or `archive.the-grove.ai`
  b) Keep it deployed but remove the root domain assignment (it'll still be accessible via its `.vercel.app` URL)
  c) Add a path prefix so old deck URLs still work (e.g., `/preview/decks/...`)
- The preview hub has `noindex` headers already, so search engines won't care
- Decide: do the deck URLs need to keep working? Jim may have shared links to specific decks with reviewers

### Step 3: Initialize grove-launch-site as a deployable project
- `cd C:\GitHub\grove-launch-site`
- `git init` + initial commit
- Create a new GitHub repository (or use Vercel CLI direct deploy)
- Add a `vercel.json` with appropriate config:
  - NO noindex headers (this is the public site)
  - Clean URLs if needed
  - Consider: should `/content/` and `/research/` be served or blocked?

### Step 4: Deploy grove-launch-site to Vercel
- Create new Vercel project from the repo
- Assign `the-grove.ai` root domain to this project
- This will remove the domain from grove-preview-hub (Vercel handles this)

### Step 5: Verify /autonomaton/ still works
- The autonomaton playground is a SEPARATE Vercel project with its own deployment
- It should be unaffected by the root domain change IF it's assigned as a path (`the-grove.ai/autonomaton`) on its own project
- However, if `/autonomaton` was a rewrite rule in grove-preview-hub's vercel.json, we need to replicate that routing in the new project
- **This is the critical check** — if the autonomaton routing breaks, the playground link on the new site goes dead

### Step 6: Test everything
- `the-grove.ai` → new launch site with hero, G7 table, sphere, scoreboard, autonomaton section, foundation
- `the-grove.ai/autonomaton` → playground (React app, separate project)
- Persistent scorecard widget appears on scroll
- All 14 canonical links open correctly
- Nav links scroll to correct sections
- "Playground ↗" link in nav opens playground in new tab
- Sphere slider and capture canvas render correctly
- Lambda scoreboard rows expand on click

## Critical Constraints
- DO NOT modify `C:\GitHub\grove-autonomaton-pattern\` — that repo and its Vercel project stay untouched
- DO NOT delete `C:\GitHub\grove-preview-hub\` — archive it, don't destroy it
- The new site must work as a static HTML file (no build step, no SSR, no framework)
- Git operations on Windows: use `.bat` files or `cd /d` flag for CMD directory changes
- The site loads Google Fonts via CDN — needs internet access but no build tooling

## Files to Reference
- New site: `C:\GitHub\grove-launch-site\index.html` (the deliverable)
- Current site: `C:\GitHub\grove-preview-hub\index.html` (what's being replaced)
- Preview hub Vercel config: `C:\GitHub\grove-preview-hub\vercel.json`
- Autonomaton Vercel config: `C:\GitHub\grove-autonomaton-pattern\.vercel\project.json`

## Machine Context
- Windows machine, git available via .bat files
- Desktop Commander MCP tool available for filesystem operations
- Vercel MCP tools available for deployment management
- Python at `C:\Python313\python.exe` if needed
- GitHub repos typically pushed via HTTPS

## Success Criteria
When this session is complete:
1. `the-grove.ai` serves the new launch site
2. `the-grove.ai/autonomaton` serves the playground (unchanged)
3. The old preview hub is archived and accessible (via .vercel.app URL or subdomain)
4. No content has been deleted
5. The new site is in a git repo with clean history
