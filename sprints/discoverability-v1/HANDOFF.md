# discoverability-v1 — HANDOFF

*Sprint: `discoverability-v1`*
*Close: 2026-05-14*
*Author: Claude Code (CC)*
*Operator: Jim Calhoun, The Grove Foundation*

---

## 1. What shipped

Six commits on `master`. Predecessor `nav-rationalization-v1` provided the rationalized IA; this sprint makes it legible to two crawlers — Google's, and the AI-discovery layer composing through `llms.txt`.

| # | Touch | Commit | Scope | Δ |
|---|---|---|---|---|
| 1 | Touch 1 | `b011d39` — chore: add robots.txt with sitemap reference and orphan exclusions (discoverability-v1 Touch 1) | `robots.txt` (new) | +16 |
| 2 | Touch 1b | `7db69e0` — chore: amend robots.txt with AI crawler welcome blocks, canonical substrate gating, and legacy /papers/ disallow (discoverability-v1 Touch 1b) | `robots.txt` | +27 / −2 |
| 3 | Touch 2 | `7df6ca3` — chore: add sitemap.xml with 21 production URLs (discoverability-v1 Touch 2) | `sitemap.xml` (new) | +129 |
| 4 | Touch 3 | `309ca1e` — chore: add /.well-known/grove-standards.json corpus manifest (discoverability-v1 Touch 3) | `.well-known/grove-standards.json` (new) | +43 |
| 5 | Touch 4 | `cd22ea3` — docs: refresh llms.txt for nav-rationalization-v1 vocabulary + add Ratchet/Membership Cellar entries + corpus manifest link + Discoverability section + protocol-retrofit-v1 sprint name fix (discoverability-v1 Touch 4) | `llms.txt` | +21 / −2 |
| 6 | Touch 5 | *(this commit)* — docs: write discoverability-v1 HANDOFF + deploy (discoverability-v1 Touch 5) | `sprints/discoverability-v1/HANDOFF.md` (new) | TBD |

---

## 2. Deviations from SPEC

Two deviations, both ratified by operator decision in real-time.

1. **Touch 1b — robots.txt amendment with AI crawler welcome blocks and canonical substrate gating.** SPEC Touch 1 specified exact `robots.txt` content; CC wrote and committed it at `b011d39`. Operator then authored a substantive amendment before Touch 2 began, adding six AI crawler welcome blocks (anthropic-ai, ClaudeBot, GPTBot, Google-Extended, PerplexityBot, CCBot) with explicit `Allow: /` to signal welcome stance; collapsing the two letter `Disallow` paths into one prefix that covers both via prefix matching; replacing the named "andon" path with canonical operator phrasing from the founder declaration's Reserves section (*"the artifact is public, the gate is social"*); and adding `/papers/` legacy-redirect disallow to prevent wasted crawl budget. Shipped at `7db69e0`. Mid-sprint scope expansion by operator direction.

2. **Touch 4 Edit 4 — alphabetical-rule override.** SPEC pre-locked decision was *"vocabulary mapping placement is alphabetical at write time."* CC pre-flight discovery: the existing Vocabulary discipline list is concentric (artifact taxonomy → engagement → style → relationship → surface), not alphabetical. The locked rule was the easy answer for an alphabetical list; the actual list has structure that the rule didn't anticipate. Operator approved append-at-end placement as better-fitting the existing structure; the SPEC-locked rule was overridden with rationale recorded. `standings → Lambda (Λ) Watch` mapping appended after `feature`.

Otherwise: none. Five touches landed as scoped (Touch 1 + 1b counted as one logical touch shipped in two commits).

---

## 3. Sitemap content verification

Twenty-one production URLs with priority + changefreq + lastmod. All `<lastmod>2026-05-14</lastmod>` per locked git-log-per-file strategy. Uniformity is expected — `nav-rationalization-v1` Touch 2 touched every nav-bearing file with the rename + reorder within the prior 24 hours; subsequent touches in that sprint updated `/lambda`, root `index.html`, and `SITE-IA.md`.

| # | URL | Priority | Changefreq |
|---|---|---|---|
| 1 | `https://the-grove.ai/` | 1.0 | monthly |
| 2 | `https://the-grove.ai/lambda` | 0.9 | weekly |
| 3 | `https://the-grove.ai/ratchet` | 0.9 | monthly |
| 4 | `https://the-grove.ai/alerts` | 0.8 | monthly |
| 5 | `https://the-grove.ai/observations` | 0.8 | monthly |
| 6 | `https://the-grove.ai/standards` | 0.8 | monthly |
| 7 | `https://the-grove.ai/research/knowledge-polarity` | 0.7 | monthly |
| 8 | `https://the-grove.ai/alerts/ai-deployment-pattern-benchmark` | 0.7 | monthly |
| 9 | `https://the-grove.ai/alerts/architectural-gap` | 0.7 | monthly |
| 10 | `https://the-grove.ai/alerts/architecture-and-accountability` | 0.7 | monthly |
| 11 | `https://the-grove.ai/alerts/polarity-and-the-grove-protocol` | 0.7 | monthly |
| 12 | `https://the-grove.ai/alerts/sovereignty-is-all-you-need` | 0.7 | monthly |
| 13 | `https://the-grove.ai/alerts/telemetry-trap` | 0.7 | monthly |
| 14 | `https://the-grove.ai/standards/001` | 0.7 | monthly |
| 15 | `https://the-grove.ai/standards/002` | 0.7 | monthly |
| 16 | `https://the-grove.ai/standards/003` | 0.7 | monthly |
| 17 | `https://the-grove.ai/standards/004` | 0.7 | monthly |
| 18 | `https://the-grove.ai/registrar` | 0.6 | monthly |
| 19 | `https://the-grove.ai/substrate/jim-calhoun` | 0.6 | monthly |
| 20 | `https://the-grove.ai/about` | 0.5 | monthly |
| 21 | `https://the-grove.ai/membership` | 0.5 | monthly |

**Excluded** (do not appear in sitemap):

- `/substrate/jim-calhoun/letter` and `/substrate/jim-calhoun/letter/andon` — orphans, also disallowed in robots.txt
- `/autonomaton` — external Vercel app rewrite per `vercel.json`
- All `/sprints/**`, `/docs/**` — non-production, also disallowed in robots.txt

---

## 4. Vercel routing verification

**Pre-deploy (PF-3):** `vercel.json` carries redirects (`/papers/*` → `/alerts/*`, `/alerts/open-weights-wont-be-enough` → `/alerts/sovereignty-is-all-you-need`) and rewrites (`registrar.the-grove.ai` host-based routing to `/registrar/*`; `/autonomaton/*` to external Vercel app). **No redirect or rewrite blocks** `/sitemap.xml`, `/robots.txt`, `/.well-known/grove-standards.json`, or `/llms.txt` on the main domain. All four serve via default static serving from repo root.

**Post-deploy:** four `curl -I` HTTP status checks + JSON parse + grep checks recorded in §7.

---

## 5. Andons surfaced

One Andon during the sprint.

**PF-4 — Sprint-name drift on `llms.txt` line 55.** The Pending Cellar header named `mesh-retrofit-v1` as the successor sprint where individual Autonomaton Declaration promotion is scheduled. The SPEC and CC-PROMPT for `discoverability-v1` both name the correct successor as `protocol-retrofit-v1`. CC surfaced the drift in PF-4 reporting. Operator approved adding Edit 6 to Touch 4 to fix the drift; SPEC and CC-PROMPT were both updated in real-time to reflect the added edit before Touch 4 executed. Resolved by `cd22ea3`.

A separate line-number drift was also noted (SPEC said line 91 for the dead-vocab item; actual location was line 93). Worth flagging as a finding but not Andon-worthy — content correct, edits worked via exact-string matching.

---

## 6. Operator next-step instructions for Google Search Console

After deploy, operator performs the following eight steps via Google Search Console + GoDaddy DNS to complete the discoverability layer. The sprint preps the assets; the actual Search Console signup is operator work and lives outside the sprint.

(a) Go to https://search.google.com/search-console

(b) Add `the-grove.ai` as a property. Choose **Domain property** type (not URL prefix; Domain covers all subdomains + http/https).

(c) Choose **DNS verification** method (operator manages GoDaddy DNS for `the-grove.ai`).

(d) Copy the TXT record value Google provides — looks like `google-site-verification=xxxxxxxxxxxxxxxxxxxxxxxxx`.

(e) In GoDaddy DNS for `the-grove.ai`: add a new TXT record. Type: **TXT**. Host: **@** (or blank, depending on GoDaddy's UI). Value: paste the Google-provided string. TTL: default (or 600 / 1 hour).

(f) Wait 5–15 minutes for DNS propagation, then return to Search Console and click **Verify**.

(g) Once verified, navigate to **Sitemaps** in Search Console and submit `sitemap.xml` (Search Console prepends the property URL automatically).

(h) Optionally request priority indexing for high-value pages via **URL Inspection**: `https://the-grove.ai/`, `https://the-grove.ai/lambda`, `https://the-grove.ai/standards/001`.

---

## 7. Deploy execution log

```
Command:                npx vercel --prod --yes
Vercel CLI:             48.10.4
Project:                twocashs-projects/grove-launch-site
Deployment URL:         https://grove-launch-site-5i6x6p281-twocashs-projects.vercel.app
Production canonical:   https://the-grove.ai
Inspect URL:            https://vercel.com/twocashs-projects/grove-launch-site/8EN2vx16wRtEcS7mgxAEbbwd8XGZ
Build time:             7s
Verification timestamp: 2026-05-14T22:56:36Z (UTC)
Notes:                  clean — no warnings or errors during upload, build, or completion phase
```

### Post-deploy verification (60s after deploy completed)

**HTTP HEAD checks (expect 200 on all four):**

| URL | Status |
|---|---|
| `https://the-grove.ai/sitemap.xml` | **200** ✓ |
| `https://the-grove.ai/robots.txt` | **200** ✓ |
| `https://the-grove.ai/.well-known/grove-standards.json` | **200** ✓ |
| `https://the-grove.ai/llms.txt` | **200** ✓ |

**Content checks:**

| Check | Expected | Actual | Verdict |
|---|---|---|---|
| `curl -s https://the-grove.ai/sitemap.xml \| grep -c "<url>"` | 21 | **21** | ✓ |
| `curl -s https://the-grove.ai/llms.txt \| grep -c "Lambda (Λ) Watch"` | ≥ 1 | **2** | ✓ (Cellar entry + Vocabulary discipline mapping) |
| `curl -s https://the-grove.ai/.well-known/grove-standards.json \| python -c "import json, sys; print(len(json.load(sys.stdin)['corpus']))"` | 4 | **4** | ✓ |

### Verification verdict: PASS — all four discovery surfaces are live and serving the expected content.

### Substrate-awareness note: `jq` Python fallback

The CC-PROMPT canonical verification step for the manifest was:

```bash
curl -s https://the-grove.ai/.well-known/grove-standards.json | jq '.corpus | length'
```

`jq` is **not installed** in this MSYS bash environment (`/usr/bin/bash: line 1: jq: command not found`). CC substituted Python's stdlib:

```bash
curl -s https://the-grove.ai/.well-known/grove-standards.json | python -c "import json, sys; print(len(json.load(sys.stdin)['corpus']))"
```

Same semantics, no external dependency. **Cross-sprint inheritance note for future deploy-verification command templates:** assume `jq` may be unavailable; document the Python fallback alongside the canonical `jq` form so the next sprint's verification step doesn't surprise the next CC.

### No false-negative regex events this sprint

The `&Lambda;` HTML-entity false-negative seen in `nav-rationalization-v1` §7 applied to HTML pages where the source uses entity encoding. `llms.txt` is plain text and Touch 4 wrote literal Λ characters; `grep -c "Lambda (Λ) Watch"` matched cleanly without any entity-translation issue.

---

## 8. Inheritance package for follow-up sprints

| Item | Source | Status after this sprint |
|---|---|---|
| Letter-page orphans (`/substrate/jim-calhoun/letter/*`) | nav-rationalization-v1 §6.4 | **RESOLVED** — `robots.txt` `Disallow: /substrate/jim-calhoun/letter/` (prefix covers both letter/ and letter/andon/) + sitemap exclusion. Pages remain publicly accessible (HTTP 200) per operator direction — *"the artifact is public, the gate is social."* |
| Footer-nav state on `/about` and `/ratchet` | nav-rationalization-v1 §6.1 | Deferred to **`coherence-v1`** |
| Homepage `Go deeper` card-grid vocabulary staleness (Λ Standings, Open Standards labels; no Ratchet Test or Membership card) | nav-rationalization-v1 §6.2 | Deferred to **`coherence-v1`** |
| CSS breakpoint variance (640px / 768px / 900px) across 21 production files | nav-rationalization-v1 §6.3 | Deferred to **`coherence-v1`** |
| Custom Grove JSON-LD context (`https://the-grove.ai/contexts/grove-corpus-v1.jsonld`) creation — would define `PublishedStandardsCorpus`, `corpus`, `registers`, `manifestVersion`, `class` as proper Linked Data terms | discoverability-v1 Touch 3 (Path b chosen — schema.org context for now) | Deferred to **`protocol-retrofit-v1`** |
| Substrate-gate phrasing in `robots.txt`: when the actual auth gate ships in a future sprint, the comment block above `Disallow: /substrate/jim-calhoun/letter/` can update from "gated for diligence access — the artifact is public, the gate is social" to "authentication-gated." The `Disallow` itself stays as defense in depth. | discoverability-v1 Touch 1b note | Deferred to whatever sprint ships the auth gate |
| `jq` Python-fallback for deploy-verification commands across sprints — `jq` is not installed in this MSYS bash environment; Python's stdlib `json` module + `pathlib` substitutes cleanly. Worth documenting alongside the canonical `jq` form in future HANDOFF templates so the verification step doesn't surprise the next sprint. | discoverability-v1 §7 substrate-awareness finding | Recorded for future deploy-verification command templates |

---

*Sprint close. Six commits landed across `robots.txt`, `sitemap.xml`, `/.well-known/grove-standards.json`, `llms.txt`, and this HANDOFF. Search Console setup per §6 moves to operator territory.*

*CC BY 4.0 · The Grove Foundation · Indianapolis · 2026-05-14*
