# Sprint: cio-alerts-calibration-v1

**Scope:** Calibrate all CIO Alert surfaces to canonical positioning. Add the AI-First metadata stack across the alert directory. Land the regulator-translated polarity-reframe sentence on the Sovereignty alert.

**Prototype baseline:** `/alerts/sovereignty-is-all-you-need/` (sovereignty-alert-tonal-revision-v1, closed 2026-04-21). Structure, JSON-LD pattern, and metadata conventions replicate from this file.

**Status at sprint open:**
- 2 alerts need metadata stack only — body prose clean (`alerts/index.html`, `architectural-gap`)
- 1 alert needs body calibration + metadata + legacy URL fix (`ai-deployment-pattern-benchmark`)
- 1 alert needs alignment verification + ScholarlyArticle metadata upgrade (`telemetry-trap`)
- 1 alert (Sovereignty) receives load-bearing regulator-translation insertion

## Cluster structure

Five commit clusters, sequential, one push + one deploy + one Phase 6 matrix at sprint close.

---

### Cluster A — `alerts/index.html` metadata stack

**File:** `/alerts/index.html`
**Change type:** metadata addition only; no body prose edits
**Commit prefix:** `feat:`
**Est. commits:** 1

**Adds:**
- Open Graph: `og:title`, `og:description`, `og:type="website"`, `og:url`, `og:image="/og.png"`, `og:site_name="The Grove Foundation"`
- Twitter Card: `summary_large_image` variant
- Dublin Core: `dc.title`, `dc.creator="The Grove Foundation"`, `dc.publisher="The Grove Foundation"`, `dc.rights` CC BY 4.0
- JSON-LD: `CollectionPage` with `mainEntity` as `ItemList` of published alerts; references `Organization` via `@id="https://the-grove.ai/#organization"` and `WebSite` via `@id="https://the-grove.ai/#website"`

**Substrate:**
- Em-dash: raw Unicode in meta-content fields and JSON-LD per file-local precedent
- No link edits in this cluster

---

### Cluster B — `architectural-gap` metadata stack

**File:** `/alerts/architectural-gap/index.html`
**Change type:** metadata addition only; body prose clean per discovery, no calibration edits
**Commit prefix:** `feat:`
**Est. commits:** 1–2

**Adds:**
- Full meta complement (OG, Twitter, Dublin Core) mirroring Sovereignty structure
- JSON-LD `Article` schema with `Organization` + `WebSite` @id references
- Semantic anchor IDs on existing `<h2>`/`<h3>` if missing (kebab-case)

**Substrate:**
- Em-dash: match file-local precedent (mixed Unicode + spaced `&mdash;` entity; no normalization)
- External rel: file precedent is `rel="noopener noreferrer"`; maintain

---

### Cluster C — `telemetry-trap` alignment verification + metadata upgrade

**File:** `/alerts/telemetry-trap/index.html`
**Change type:** ScholarlyArticle-grade metadata + any alignment-driven prose tweaks
**Commit prefix:** `feat:` for metadata, `tone:` for any prose alignment
**Est. commits:** 2

**Pre-cluster substrate check (required during preview, block fire if mismatch):**
1. Re-read `/about/index.html` Lineage section + Bauhaus "Read more" link. Report exact citation phrasing for the Telemetry Trap white paper.
2. Re-read `/index.html` (homepage) for any Telemetry Trap citation. Report phrasing.
3. Compare to current `telemetry-trap/index.html` `<title>`, `<meta description>`, and lead paragraph. Flag any divergence.
4. Jim reviews alignment delta before preview locks.

**Adds:**
- Full meta complement
- JSON-LD `ScholarlyArticle` schema (not generic `Article`) — includes `author` as `Organization`, `publisher` as `Organization`, `datePublished`, `license="https://creativecommons.org/licenses/by/4.0/"`, `keywords` (cognitive platforming, judgment extraction, lien on thinking, the Telemetry Trap, Grove Foundation)
- `FAQPage` JSON-LD if document structure supports it (CC confirms during preview)
- Semantic anchor IDs on existing section headings

**Substrate:**
- Em-dash: file uses FLUSH `&mdash;` entity in body prose — preserve. Meta-content fields use raw Unicode.
- `Λ` symbol: raw Unicode in meta + JSON-LD; `&Lambda;` entity in prose if present

---

### Cluster D — `ai-deployment-pattern-benchmark` body calibration + metadata + legacy URL fix

**File:** `/alerts/ai-deployment-pattern-benchmark/index.html`
**Change type:** body prose calibration + href fix + metadata stack
**Commit prefix:** `tone:` for prose, `fix:` for href, `feat:` for metadata
**Est. commits:** 2–3 (separate body tonal commit from metadata commit)

**Body calibration — line 981 region:**

The passage currently carries pre-canonical extraction-vendor-capturing register ("vendor that captured it under terminology that was never nailed down"; "expressions of human judgment captured at scale. From those patterns come the models sold back"). Rewrite to canonical Telemetry Trap + judgment extraction vocabulary per GRV-003 §canonical terms.

Preview requirement: CC surfaces the full paragraph context (~15 lines around line 981) before proposing rewrite. Jim reviews the surrounding argument structure before new prose gets authored. Do not rewrite without the surrounding passage visible.

**Legacy URL fix — line 985:**

`/papers/telemetry-trap` → `/alerts/telemetry-trap`

Verify the link text and surrounding styling (file uses `color:var(--text)` for this specific cross-reference, per discovery). Preserve that styling; only fix the href.

**Adds:**
- Full meta complement
- JSON-LD `ScholarlyArticle` schema (benchmark paper — treat as scholarly)
- Semantic anchor IDs
- `FAQPage` JSON-LD if structure supports

**Substrate:**
- Em-dash: file uses raw Unicode spaced — preserve
- Link tier: file uses mixed treatment per context; only new authored links use `--amber` internal / `--amber-bright` external per file-local precedent check at each insertion

---

### Cluster E — Sovereignty alert regulator-translation insertion

**File:** `/alerts/sovereignty-is-all-you-need/index.html`
**Change type:** single paragraph insertion (additive, no deletion)
**Commit prefix:** `feat:`
**Est. commits:** 1 (possibly 1.5 corrective)

**Insertion — load-bearing sentence:**

> The Grove Foundation's architecture proposals don't replace regulatory frameworks. They simply give all players in the ecosystem a way to actually satisfy them more rigorously, at decreasing costs, and with compounding benefits.

**Placement:** New penultimate paragraph, immediately preceding the seed-corn closing paragraph. The existing closing architecture stays intact; this sentence lands as its own beat, setting up the seed-corn close as consequence rather than leading the close.

**Preview requirement:** CC surfaces the current last three paragraphs verbatim with line numbers. Jim confirms exact insertion point before fire.

**Substrate for this insertion:**
- Wrap sentence in `<p>` matching the file's existing body-prose `<p>` convention (class attribute, indentation)
- Use `&rsquo;` for the apostrophe in "don't" and the possessive
- Use spaced `&mdash;` if a dash is needed; the sentence as written uses no dashes
- No internal links in this insertion

## Harmonization decisions (locked)

1. **Em-dash convention:** Match file-local precedent for existing prose. Spaced `&mdash;` entity for any new prose I author (metadata, Cluster E insertion). No global rewrite.
2. **`rel=` convention:** Match file-local precedent. Do not touch Sovereignty's `rel="external"` — that's a post-trinity style-guide cleanup.
3. **OG image pattern:** Shared homepage `/og.png` across Clusters A–D. Per-alert OG generation is deferred.

## Deferred to post-trinity (do not touch in this sprint)

- Bare-noun "Grove" audit across all alerts
- `rel=` harmonization across alerts
- Per-alert OG image generation
- Em-dash global normalization

## Phase 6 verification matrix (at sprint close, after push + deploy)

Independent `curl` re-fetch from local terminal (not web_fetch — CDN cache unreliable post-deploy). For each alert:

1. `<title>` and `<meta description>` present and canonical
2. JSON-LD parses cleanly — validate via `curl <url> | grep -A 200 "application/ld+json"` and pipe to a JSON validator if available
3. OG image resolves (HTTP 200 on og:image URL)
4. No pre-canonical leak phrases present: `grep -i "rented ground\|take it back\|your replacement\|sold back"` returns empty
5. Cluster D: line 985 href resolves to `/alerts/telemetry-trap` not `/papers/telemetry-trap`
6. Cluster E: regulator-translation sentence renders in final position before seed-corn close

## Open question for Jim at SPEC review

Sequencing of Cluster E: as written (last) or pulled forward (first)? Default per this SPEC is last — pattern-rehearse on A–D before touching prototype. Flag this as the one changeable ordering call.
