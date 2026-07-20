# HANDOFF — Q2 2026 Publish (state @ 2026-07-20)

Clean-break state doc. Pairs with `SPEC.md` (original plan; superseded in places — this file is the current truth). Next session brings an operator spec for **home-page + a new round of edits**.

## ⭐ THE GOAL (do not lose): go live tonight, ~10:30 pm ET, 2026-07-20
One-shot production launch — **lambda Q2 + Structural Custody alert (fully linked) + site banner all go live together** by promoting the preview branch to `master`.

**The promote (the only push to production):**
```bash
git checkout master
git merge q2-2026-publish        # fast-forwards master by 14 commits
git push origin master           # -> Vercel auto-builds -> the-grove.ai
```
Then **verify** (never assume push==live):
```bash
curl -sL -o /dev/null -w "%{http_code}\n" "https://the-grove.ai/alerts/structural-custody/?cb=$(date +%s)"
curl -sL "https://the-grove.ai/lambda/?cb=$(date +%s)" | grep -i "<title>"   # expect "Q2 2026 Standings"
```
Confirm Vercel deployment reaches `READY`; check `/alerts/` shows the card and sitemap lists the alert.

## Repo & deploy (CHANGED TODAY — important)
- **Repo re-homed to `twocash/grove-launch-site`** (public). The old `understory-ip/grove-launch-site` was **flagged by GitHub 2026-07-20** mid-session → its webhook died and could not be reconnected. Local `origin` = twocash; old remote kept as `understory-old`.
- Vercel project unchanged (`grove-launch-site`, twocash team, owns `the-grove.ai`); operator reconnected its Git to the new repo. **Push→build VERIFIED** on the new repo.
- `master` = production/default branch. Static site, no build step (`outputDirectory: "."`).
- Config gotcha: `vercel.json` has **`cleanUrls:true` + `trailingSlash:false`** → directory-index pages serve at no-slash URLs, so **relative links/assets on those pages must be root-absolute** (fixed for the alert index).

## Preview (currently PUBLIC — protection disabled)
`https://grove-launch-site-git-q2-2026-publish-twocashs-projects.vercel.app/`
- Deployment Protection (Vercel Authentication) was **turned off** so external reviewers/journalists can view without login. Re-enable after launch if desired.
- Fast edit loop: push to `q2-2026-publish` → ~25s build → refresh (no tokens).

## Done (on `q2-2026-publish`)
- **Λ Standings Q2** (`/lambda/`): 12 patterns / 115 sources (matches final benchmark report/PDF @ `lambda-standings` `40ac586`); internal audit HTML comment; sitemap lastmod.
- **Structural Custody alert** (`/alerts/structural-custody/`): copied from `lambda-standings` `main`; integrated with site nav/footer + webfonts + head `<title>`/meta/OG/JSON-LD; front section is **operator copy** ("…Technically True" headline, "diminishing returns" lead, reasoning-trace framing, closing precision caveat → "Negotiate from an informed position"); **GRV-001 "defense already exists" callout** (inline + CTA links to `/standards/001`); **Λ Standings cross-ref callout** → `/lambda/`; broken logo removed; internal links made root-absolute; **evidence `#Axx` anchors** scroll after async render (script added to `evidence.html`).
- **Reveal wiring**: `/alerts/` card #007, `sitemap.xml`, `llms.txt`.
- **Site-wide banner** (`announce.js` on 23 nav pages): dismissible, → the alert (retargeted from `/lambda/`).
- **PDFs**: `docs/benchmark-q2-2026.pdf` (final, hash-verified), `docs/md-letter-q2-2026.pdf` (swapped to final r2).

## Deferred / parked (next-session candidates)
- **Home-page landing experience** — operator will provide a spec.
- Alert **#4**: trim/demote secondary market-thread sections (Charts / Core Finding).
- A **shorter public cut** of the alert (ratchet + two-bucket + close; rest as dossier).
- **Visual-coherence pass**: harmonize content column widths (currently mixes 760 / 820 / 900 / 1140px), whitespace, heading hierarchy. Screenshot to do it right.
- **`understory-ip` flag**: appeal to GitHub later (may be false positive). Optional future move to `the-grove-ai` org.
- `reserved-use-ratchet/` earlier alert draft parked in the session scratchpad (`scratchpad/phase0-parked/`), not in the repo.

## Notes
- Tone review (operator's strategic analysis): main scroller is already measured; "theft" only appears as the praised C6 evidence hero line + verbatim Karp quotes (keep both). #2/#3 need no change.
- Reference: `DEPLOY.md` (SOP) + memory `vercel-deploy-pipeline` (updated with the repo move).
