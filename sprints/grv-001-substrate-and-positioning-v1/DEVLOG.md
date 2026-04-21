# DEVLOG — grv-001-substrate-and-positioning-v1

**Sprint ID:** grv-001-substrate-and-positioning-v1
**Operator:** Jim Calhoun
**Executor:** Claude Code
**Date:** 2026-04-21
**Target page:** https://the-grove.ai/standards/001
**Target files:** `standards/001/index.html`, `standards/GRV-001.json`
**Branch:** master (direct, no worktree — two-file scope, three sequential commits)
**Version transition:** v1.1 (April 20, 2026) → v1.2 (April 21, 2026)

## Sprint arc

Three substantive body-prose edits, one optional Lineage refresh (taken), and a full version-bump pass across HTML meta stack and JSON manifest. The sprint brought GRV-001 into alignment with (1) the canonical capital-asymmetry investment thesis, (2) the substrate-not-routing thesis already established in GRV-003 v1.2, and (3) canonical Grove Terms of Art that downstream standards now cite by reference. Stage-4 discipline enforced: preview before every edit, explicit operator approval, explicit `git add` per commit, `.bat` wrapper pattern for commit messages to quarantine the stale `do-commit.bat` working-tree modification.

## Phase-by-phase adaptations

### Phase 1 — Edit 1 (closing line capital-asymmetry reframe)

Current source had the Vision close in `<div class="pullquote">` (line 776 pre-edit), not `<p>` as the spec hypothesized. Operator decided at preview time on a **two-wrapper split**: swap the pullquote wrapper to `<p class="body-text">` containing the four-sentence capital-allocation argument, then add a new `<div class="pullquote">` immediately below carrying the one-line rhetorical payoff ("Three files and a loop. The rest is distillation."). Rationale: the capital-asymmetry argument is body prose; pullquote treatment is reserved for one-line rhetorical punch. The split preserves the visual close of the section while landing the argument in the structurally correct wrapper. Parent `.section-inner` freely mixes `<p>`, `<h3>`, `<div class="divider">`, and `<div class="pullquote">` siblings — no single-child constraint on the wrapper swap. `<div class="divider">` at line 774 preserved above the new block.

### Phase 2 — Edit 2 (CIO Stake firewall → substrate)

Narrow-scope str_replace anchored on `</strong>` to minimize collateral risk on a long inline-styled string (line 467). Replaced `</strong> that stays inside your firewall,` with `</strong> the operator owns and compounds across providers,`. Preserved `<strong style="color:var(--text);">Non-Depreciating IP</strong>` wrapper and the "regardless of which model provider wins the scale war" clause (spec flagged as already substrate-correct).

### Phase 3 — Edit 3 (Terms of Art subsection backport)

Inserted a new `<h3 class="subhead" id="terms-of-art">Terms of <em>Art</em></h3>` as the first subsection of Section VIII (Implications), above the existing `Governance by Architecture` subsection. Four canonical Grove terms defined with `<dfn>` semantic anchoring, each in its own `<p class="body-text">` with bold-lead-term cadence matching the file's existing Act One/Two/Three convention at lines 769–771.

Substrate substitutions from spec to file convention:
- Apostrophes: all converted to `&rsquo;` entity per file precedent (five existing instances: lines 427, 428, 449, 479, 480)
- Em-dashes: spec's spaced " — " converted to flush `&mdash;` per file uniform convention (lines 428, 480, 757 all flush)
- Bold-lead-term cadence: `<strong><dfn>Term</dfn>.</strong>` — `<dfn>` wraps the canonical noun phrase only; period sits inside `<strong>` but outside `<dfn>` since the period is sentence punctuation, not part of the term. Matches Act One/Two/Three convention elsewhere in Section VIII.
- Composability cross-reference: narrow link scope on "Composability principle" only (href `#composability`, confirmed anchor at line 605); "(Section IV.V)" kept plain since the hash anchor resolves to the principle card specifically, not a section-level anchor.

Four canonical terms introduced, each anchored with `<dfn>` on first canonical mention:
- **Cognitive platforming** — architectural drift concentrates judgment/telemetry/decision-context at platform tier rather than operator node; consumption-layer analog of platform-side data lock-in; Autonomaton Pattern is explicit countermeasure
- **Judgment extraction** — operator decision patterns flow back to model provider as inputs to next training cycle; distinct from telemetry extraction; architecture's substrate-ownership constraint discharges it
- **Lien on thinking** — accumulating dependency when reasoning patterns routed through a platform that retains them; switching providers does not discharge; substrate-ownership constraint keeps lien at zero
- **Cultivation architecture** — structural commitments (pipeline shape, telemetry format, zone semantics, substrate ownership) create conditions for emergent properties (composability, federation, cross-substrate cooperation); treats variance as relied-on property, not problem to solve; Composability principle (§IV.V) is cultivation architecture at work

### Phase 4 — Edit 4 (Lineage Apple-generation refresh, operator took with Atkinson addition)

Operator took Edit 4 and added Bill Atkinson to the design-authorship credit list alongside Wigginton, Kare, Mok — on HyperCard / self-authoring-software grounds (the architectural lineage most directly upstream of the Autonomaton Pattern itself). Rhetorical temperature cooled from polemic ("understood something the AI industry has forgotten" / "went underground" / "rendered in silicon and software" / "return in the AI era") to tense-neutral observational prose ("treated product architecture as the embodiment of a worldview" / "became uncommon" / "returns to it deliberately"). The "coherent set of structural commitments" substitution aligns the Lineage section vocabulary with the cultivation-architecture definition just introduced in Phase 3.

### Phase 5 — Version bump and metadata refresh

Full inventory surfaced via grep before applying. Nine HTML edits + three JSON edits.

**HTML (`standards/001/index.html`):**
1. Line 7 `<meta name="description">` — rewritten to evergreen Terms-of-Art-naming form. Per operator direction, SEO meta description does not name the version (cached/indexed descriptions would go stale or force re-indexing on every minor revision); version reference lives in visible content only.
2. Line 13 `<meta property="og:description">` — rewritten to name GRV-001 v1.2 and list the four canonical Terms of Art. OG descriptions re-fetch on each share, so version reference is fine there (social-share context, not durable SEO).
3. Line 19 `article:modified_time`: 2026-04-20 → 2026-04-21
4. Line 37 `DC.date`: 2026-04-20 → 2026-04-21
5. Line 68 JSON-LD `version`: 1.1 → 1.2
6. Line 70 JSON-LD `dateModified`: 2026-04-20 → 2026-04-21
7. Line 190 WebPageElement (Section IV) description — dropped the "v1.1 adds Composability as the fifth invariant" tail clause. Content-descriptor fields should describe what is, not what changed; changelog-style clauses belong in `version_history`, not WebPageElement. The five-invariant list itself stays (stable content descriptor).
8. Line 412 hero meta byline: v1.1 · April 20 → v1.2 · April 21
9. Line 802 footer download bar: v1.1 · April 20 → v1.2 · April 21

Twitter description (line 30) is evergreen — no version string — no update needed.

**JSON (`standards/GRV-001.json`):**
1. Line 4 `version`: 1.1 → 1.2
2. Line 9 `date_modified`: 2026-04-20 → 2026-04-21
3. Line 164 — v1.2 entry prepended to `version_history`. Atkinson note refined at operator direction to include the architectural rationale ("design-authorship credit on HyperCard / self-authoring-software grounds") rather than the bare factual addition, so anyone parsing version_history programmatically or reading it for provenance gets the why, not just the what.

`introduced_in_version: "1.1"` at json line 48 (Composability invariant) preserved — immutable historical fact, not a current-version reference. Historical records should not roll forward with version bumps.

## Commit log

- **Commit 1** — `a127ac3` — `tone: capital-asymmetry closing reframe; CIO Stake firewall to substrate` — covers Edits 1 and 2.
- **Commit 2** — `e251fde` — `feat: backport canonical terms of art (cognitive platforming, judgment extraction, lien on thinking, cultivation architecture) to GRV-001 as the base-pattern citation home` — covers Edit 3.
- **Commit 3** — (this commit) — `release: GRV-001 v1.2 — capital-asymmetry positioning, canonical terms of art backport, version bump and metadata refresh` — covers Edit 4, Phase 5 version/metadata refresh, and this DEVLOG.

For the Commit 3 SHA post-commit: `git log master -1 --oneline`.

## Staging discipline

All three commits used explicit `git add <file-list>` rather than `-am`. Stale `do-commit.bat` modification from earlier sessions stayed quarantined out of all three commits by design, same protocol as the sovereignty alert tonal revision sprint. `.bat` commit-message wrappers executed via `cmd //c "<full-windows-path>"` from Git Bash (CMD does not resolve CWD-relative `.bat` names without `.\`) and deleted immediately after use.

## Out of scope (per sprint spec)

- All other standards pages (GRV-002, GRV-003) — coherence updates to GRV-003 v1.2 to cite GRV-001 as canonical source for Terms of Art are a separate small sprint
- About page (queued for next sprint after this one closes)
- All CIO Alerts, observations, lambda, papers
- Component imports, layouts, CSS
- The stale `do-commit.bat` working-tree modification — stays quarantined per established protocol

## Provenance

- Triggered by GRV-001 substrate-frame audit findings, 2026-04-21
- Calibration source: canonical investment thesis positioning statement captured at https://www.notion.so/349780a78eef812ebf41d2fab61c013a
- Predecessor sprint: `sovereignty-alert-tonal-revision-v1` (closed 2026-04-21, three commits, all deployed)
- Predecessor sprint: `hospitable-graph-01-foundation` (closed 2026-04-20, GRV-001 v1.1 publication standard conformance, deployed)
- Sprint handoff: pasted into the CC execution session at sprint open; chat log is the canonical source per operator direction ("two sources of truth invite drift" — operator rule carried from sovereignty alert sprint)

## Not captured here

The Phase 8 live-page verification (operator spot-checks the landing phrases on the deployed URL) is logged in the post-deploy report in the execution chat, not in this DEVLOG. The DEVLOG commits before deploy completes; live-page state is not knowable at commit time.
