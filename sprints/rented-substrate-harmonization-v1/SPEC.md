# Sprint: rented-substrate-harmonization-v1

**Sprint type:** Micro-sprint &mdash; corpus-wide register harmonization
**Authored:** 2026-04-21
**SPEC author:** Consumer Claude (strategic)
**Execution agent:** Claude Code (CC)
**Repo tip at SPEC draft:** `a654578` (cio-alerts-calibration-v1 close)
**Branch:** `master`
**Deploy command:** `npx vercel --prod --yes` (from CMD, post-push)
**Expected commit count:** 6 (five rewrites + one docs commit closing the sprint)

---

## 1. Why this sprint exists

The homepage hero was calibrated during `homepage-calibration-and-ai-first-v1` from the earlier "Stop Building on Rented Ground" framing to the polarity-native "Govern the Substrate. Commoditize the Compute." The hero calibration was correct. The supporting corpus was not harmonized to match.

Six live-site surfaces still carry residual uses of "rented" in registers that were coherent under the old hero and orphaned under the new one. A careful AI crawler walking the site reads the homepage as polarity-native and the supporting surfaces as something closer to the older rhetorical register. The register slippage is small on any single surface and systemic across the corpus.

Additionally, during this audit it surfaced that Vercel's edge cache is still serving the pre-calibration homepage to some requesters (confirmed via `web_fetch` returning "Stop Building on Rented Ground" hero while the browser DOM shows "Govern the Substrate"). A fresh deploy at the close of this sprint is required to force edge invalidation.

---

## 2. Reconciling vocabulary

The replacement register is **"own or govern"** &mdash; the disjunctive structural claim. Both ownership and governance are separately necessary properties of sovereign substrate. They can fail independently:

- An enterprise API customer may nominally "own" their data in a contractual sense but not govern the substrate the judgment runs on.
- An open-weight vendor deployment may be governed by the operator but running on infrastructure the operator does not own.

Sovereignty needs both. Naming the disjunction structurally &mdash; *substrate they do not own or govern* &mdash; is precise descriptive language. It is not ideological. Jim's own construction from the Sovereignty alert carries this explicitly: *"That sentence is not ideology. It is operational risk."* That register holds across this harmonization.

**Register discipline:**

- Replace metaphorical uses of "rented" with structural "own or govern" phrasing.
- Preserve uses of "rented" where it is doing precise technical work (pay-per-call inference without retained access, paired with "owned" as its structural opposite).
- No substitution of "rented" with "extracted" or "leaked" or similar loaded terms. We are moving from an older metaphor to a precise description, not from one metaphor to another.
- The goal is the Bauhaus posture: describe the structural condition; do not moralize it.

## 3. Surface-by-surface edit plan

Five rewrites. Three keeps. One sprint-close docs commit. CC executes preview-confirm-fire per surface.


### Edit 1 &mdash; Homepage Production Reality pullquote

**File:** `index.html`
**Line:** 629 (within Production Reality section, closing pullquote)
**Commit message:** `tone: homepage Production Reality pullquote to own-or-govern register`

**old_string:**
```
    <div class="pullquote">Durable institutions that matter cannot afford to build cognition on rented, non-portable, externally governed substrate.</div>
```

**new_string:**
```
    <div class="pullquote">Durable institutions cannot afford to build cognition on substrate they do not own or govern.</div>
```

**Editorial note:** "That matter" dropped &mdash; precision register; "durable institutions" carries the qualifier structurally. Pullquote reads as descriptive structural claim, consistent with hero.

---

### Edit 2 &mdash; Sovereignty alert body

**File:** `alerts/sovereignty-is-all-you-need/index.html`
**Line:** 361 (body paragraph preceding the "seed corn" pullquote)
**Commit message:** `tone: Sovereignty institutional-problem sentence to own-or-govern register`

**old_string:**
```
    <p class="body-text">The cleanest way to state the institutional problem: organizations whose mission depends on accumulated judgment cannot afford to build cognition on rented, non-portable, externally governed substrate. That sentence is not ideology. It is operational risk.</p>
```

**new_string:**
```
    <p class="body-text">The cleanest way to state the institutional problem: organizations whose mission depends on accumulated judgment cannot afford to build cognition on substrate they do not own or govern. That sentence is not ideology. It is operational risk.</p>
```

**Editorial note:** Surgical swap of the "rented, non-portable, externally governed substrate" clause. "Not ideology / operational risk" framing preserved verbatim &mdash; it was doing the Bauhaus-posture work already.

---

### Edit 3 &mdash; Pattern Benchmark Anthropic Claude card

**File:** `alerts/ai-deployment-pattern-benchmark/index.html`
**Line:** 778 (Anthropic Claude pattern card diagnostic)
**Commit message:** `tone: Pattern Benchmark Anthropic card to own-or-govern register`

**old_string:**
```
        <div class="pc-diagnostic">Lower cognitive friction through ISO 42001 certification and cleaner enterprise onboarding. The structural pattern is identical: a rented, centralized dependency. AWS Bedrock integration deepens infrastructural lock-in each quarter. The vulnerability surface is the same shape as OpenAI's, moved forward one step on the trust curve.</div>
```

**new_string:**
```
        <div class="pc-diagnostic">Lower cognitive friction through ISO 42001 certification and cleaner enterprise onboarding. The structural pattern is identical: a centralized dependency the operator does not own or govern. AWS Bedrock integration deepens infrastructural lock-in each quarter. The vulnerability surface is the same shape as OpenAI's, moved forward one step on the trust curve.</div>
```

**Editorial note:** "Rented, centralized dependency" was orphan metaphor standing outside the OpenAI card's paired "rented, not owned" construction. Rewritten as descriptive structural claim.

---

### Edit 4 &mdash; Observations headline (h2)

**File:** `observations/index.html`
**Line:** 231 (h2 inside `#technical-reality` section)
**Commit message:** `tone: Observations Technical Reality headline to own-or-govern register`

**old_string:**
```
    <h2 class="headline">Every organization building on a centralized API is building on <em>rented ground.</em></h2>
```

**new_string:**
```
    <h2 class="headline">Every organization building on a centralized API is building on substrate <em>it does not own or govern.</em></h2>
```

**Editorial note:** The `<em>` emphasis shifts from "rented ground" (metaphor) to "it does not own or govern" (claim). Slightly longer than the original but carries the structural precision cleanly. Alternative considered: *"...substrate it doesn't own."* &mdash; tighter but loses governance disjunction; the full "own or govern" is the load-bearing pair.

---

### Edit 5 &mdash; Observations body "landlord" sentence

**File:** `observations/index.html`
**Line:** 232 (body paragraph following the Technical Reality headline)
**Commit message:** `tone: Observations landlord metaphor to structural register`

**old_string:**
```
    <p class="body-text">This wasn&rsquo;t a version upgrade. <strong>It was a forced rebuild.</strong> Every organization building on a centralized API is at the mercy of a landlord who can renovate the building while you&rsquo;re living in it.</p>
```

**new_string:**
```
    <p class="body-text">This wasn&rsquo;t a version upgrade. <strong>It was a forced rebuild.</strong> An organization that does not own or govern the substrate its systems run on absorbs the vendor's deprecation decisions as operational cost.</p>
```

**Editorial note:** The landlord/building metaphor extended the rented frame and becomes a second orphan once the headline is replaced. Rewritten to name the structural mechanism (non-ownership, non-governance, deprecation-as-cost-absorption) without the property-rental analogy. Retains the "forced rebuild" beat which is doing concrete argumentative work.

---

## 4. Keep list (do NOT edit)

Three surfaces retain "rented" where the word is doing precise structural work rather than metaphor. CC must not sweep these.

### Keep 1 &mdash; Pattern Benchmark OpenAI card

**File:** `alerts/ai-deployment-pattern-benchmark/index.html`
**Line:** 772 (OpenAI GPT pattern card diagnostic)

**Preserved text:**
> Enterprises discovered the logic they had tuned was rented, not owned.

**Rationale:** Uses "rented" in explicit contrastive pair with "owned." This is the exact structural disjunction the harmonization is trying to surface. Replacing it would erase the precision we're otherwise building toward.

### Keep 2 &mdash; Pattern Benchmark displacement-sequence taxonomy

**File:** `alerts/ai-deployment-pattern-benchmark/index.html`
**Line:** 909 (Centralized APIs box in displacement-flow visualization)

**Preserved text:**
> Rented inference. Ephemeral models. Unpriced deprecation risk. Budget fatigue building.

**Rationale:** "Rented inference" is precise technical shorthand naming the economic structure of centralized API consumption (pay-per-call access without retained ownership). Reads as taxonomic descriptor, not metaphor.

### Keep 3 &mdash; Observations canvas JS visualization label

**File:** `observations/index.html`
**Line:** 512 (canvas fillText call in sphere visualization)

**Preserved text:**
> All nodes: rented inference, captured telemetry

**Rationale:** Paired technical descriptor for the centralized architecture side of the sphere visualization, balanced against its sovereign-side counterpart ("Each node: sovereign governance, sovereign telemetry"). The word is doing precise taxonomic work in a label role, not metaphorical work in a headline role.

---

## 5. Out-of-scope files (content drafts and archival)

The following repository paths contain "rented" references but are **not** live production surfaces. They are excluded from this sprint.

- `content/beat-1-architecture-is-the-policy.md` &mdash; content draft
- `content/observations.html` &mdash; staging snapshot, verify non-live before leaving alone
- `content/observations-visualization.html` &mdash; staging snapshot, same
- `sprints/homepage-calibration-and-ai-first-v1/DEVLOG.md` &mdash; sprint archive, historical record
- `sprints/cio-alerts-calibration-v1/SPEC.md` &mdash; sprint archive, historical record

CC should **not** edit any of these. If the `/content/*` HTML snapshots turn out to be accessible in production (Vercel routing discovery during Phase 6 verification), log it in DEVLOG and queue a follow-up micro-sprint.

---

## 6. Commit structure

One commit per edit, sequential. No `-am` (stale `do-commit.bat` quarantined). Explicit `git add <file>` per commit.

| # | Commit prefix | Message | File touched | SHA |
| --- | --- | --- | --- | --- |
| 1 | `tone:` | `tone: homepage Production Reality pullquote to own-or-govern register` | `index.html` | `0a3737a` |
| 2 | `tone:` | `tone: Sovereignty institutional-problem sentence to own-or-govern register` | `alerts/sovereignty-is-all-you-need/index.html` | `c520788` |
| 3 | `tone:` | `tone: Pattern Benchmark Anthropic card to own-or-govern register` | `alerts/ai-deployment-pattern-benchmark/index.html` | `cc9ab48` |
| 4 | `tone:` | `tone: Observations Technical Reality headline to own-or-govern register` | `observations/index.html` | `26716c8` |
| 5 | `tone:` | `tone: Observations landlord metaphor to structural register` | `observations/index.html` | `847c106` |
| 6 | `docs:` | `docs: rented-substrate-harmonization-v1 closed, DEVLOG finalized` | `sprints/rented-substrate-harmonization-v1/DEVLOG.md` | _(pending)_ |

Commits 4 and 5 both touch `observations/index.html`. They are sequential edits of independent elements (h2 headline and body paragraph), so separate commits are correct discipline per the "Mid-sprint corrective commits welcome" rule &mdash; each edit is a distinct logical change.

**Mid-sprint corrective commits welcome** as register issues surface during preview. If a new "rented" appears in a context I missed, flag it, scope a new edit, and add it as a corrective commit (numbered 2.5, 4.5, etc.).

---

## 7. Phase 6 verification matrix

Execute after push and deploy. **Use `curl` from local, not `web_fetch`** &mdash; `web_fetch` cache unreliability is exactly what caused the audit miss.

### Verification targets

| # | Target | Expected | Verification command | Status |
| --- | --- | --- | --- | --- |
| 1 | Homepage pullquote replaced | "substrate they do not own or govern" present, "rented, non-portable" absent | `curl -s https://the-grove.ai/ \| grep -i "own or govern"` | ✓ PASS (1 hit, 2026-04-21) |
| 2 | Homepage stale copy gone | "rented, non-portable, externally governed" absent | `curl -s https://the-grove.ai/ \| grep -i "rented, non-portable"` (expect no match) | ✓ PASS (0 hits, 2026-04-21) |
| 3 | Sovereignty sentence replaced | "substrate they do not own or govern" present | `curl -s https://the-grove.ai/alerts/sovereignty-is-all-you-need/ \| grep -i "own or govern"` | ✓ PASS (1 hit, 2026-04-21) |
| 4 | Pattern Benchmark Anthropic card replaced | "does not own or govern" present | `curl -s https://the-grove.ai/alerts/ai-deployment-pattern-benchmark/ \| grep -i "does not own or govern"` | ✓ PASS (1 hit, 2026-04-21) |
| 5 | Pattern Benchmark keeps preserved | "rented, not owned" and "Rented inference" still present | `curl -s https://the-grove.ai/alerts/ai-deployment-pattern-benchmark/ \| grep -ci "rented"` returns &ge; 2 | ✓ PASS (2 hits, 2026-04-21) |
| 6 | Observations headline replaced | "it does not own or govern" in h2 | `curl -s https://the-grove.ai/observations/ \| grep -i "does not own or govern"` | ✓ PASS (2 hits &mdash; h2 + Edit 5 body, 2026-04-21) |
| 7 | Observations landlord sentence gone | "landlord who can renovate" absent | `curl -s https://the-grove.ai/observations/ \| grep -i "landlord"` (expect no match) | ✓ PASS (0 hits, 2026-04-21) |
| 8 | Observations canvas label preserved | "rented inference, captured telemetry" still present | `curl -s https://the-grove.ai/observations/ \| grep -i "rented inference"` | ✓ PASS (1 hit, 2026-04-21) |

All eight targets PASSED 2026-04-21 post-deploy on tip `847c106`.

**Q3 bonus finding (Section 9):** `/content/*` paths ARE production-accessible via Vercel routing. Specifically:
- `/content/observations.html` &rarr; 308 &rarr; `/content/observations` &rarr; 200
- `/content/observations-visualization.html` &rarr; 308 &rarr; `/content/observations-visualization` &rarr; 200
- `/content/beat-1-architecture-is-the-policy.md` &rarr; 200 (carries &ge;1 "rented" hit)

Logged to DEVLOG. Queued as post-trinity follow-up micro-sprint: `rented-substrate-harmonization-v2` (content/*).

---

## 8. CDN cache invalidation and crawler reindex

**Immediate (sprint-close):**

1. `npx vercel --prod --yes` triggers Vercel edge-cache invalidation on deploy. This is the baseline.
2. Optional: explicit cache purge via Vercel dashboard if any verification target returns stale content on first curl.
3. Verify via curl against the seven surfaces that the deployed content matches repo state. Any mismatch &rarr; redeploy with `--force` flag or purge via dashboard.

**Follow-up (post-sprint, within 24 hours):**

4. Submit sitemap to Google Search Console &mdash; prompts recrawl of primary surfaces. Location: `https://the-grove.ai/sitemap.xml` (verify existence first).
5. Submit to Bing Webmaster Tools similarly.
6. Optional: request manual recrawl of the seven affected URLs via Search Console URL Inspection tool to accelerate the reindex.
7. Log in DEVLOG: "AI crawler reindex submitted &lt;date&gt; &mdash; observe for register convergence over following 7 days."

**Diagnostic followthrough (7-day horizon):**

8. Run a cold-read test by asking a logged-out session of ChatGPT, Claude, and Perplexity what they make of the-grove.ai. Compile register differences. If residual "rented" framing persists in AI summaries after 7 days, escalate to manual Search Console actions or scope an explicit content-refresh signal.

---

## 9. Open questions for Jim before CC execution

1. **Edit 4 / Observations h2:** the recommended rewrite is *"Every organization building on a centralized API is building on substrate it does not own or govern."* Two alternatives considered: (a) *"...substrate it doesn't own."* (tighter, loses governance disjunction), (b) *"...substrate owned and governed somewhere else."* (more rhythmic but less precise). Recommended version above. Confirm, or pick alternative.
2. **Edit 5 / Observations landlord sentence:** the recommended rewrite removes the landlord/building analogy entirely in favor of structural description. Alternative: keep the landlord sentence but retool it as a parenthetical example. Recommended version above.
3. **Content drafts:** confirm that `/content/*` HTML files are not served in production. If they are, a second micro-sprint follows to harmonize them.
4. **Timing:** execute harmonization today and then pick up Chunk 3.5 tomorrow? Or is there appetite to do the harmonization + kick off Chunk 3.5 scoping in the same session?
5. **Polarity essay publication:** unrelated to this sprint but related to the same register work &mdash; is there an appetite to move the Knowledge Polarity essay publication forward to provide a canonical anchor that the corpus can point to? It would reduce "rented" vulnerability systemically (any future crawler pass would have a single named anchor for the own-or-govern framing).

---

## 10. Resume state after this sprint

On completion:

- Corpus register harmonized to own-or-govern vocabulary
- CDN cache invalidated; crawler reindex submitted
- `rented-substrate-harmonization-v1` sprint closed with DEVLOG committed
- `architecture-and-accountability-v1` sprint un-pauses; full SPEC authored next session
- Chunk 3.5 authoring proceeds against a clean substrate
