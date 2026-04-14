# Ratchet Test — Product Roadmap

The AI Ratchet Test is the Grove Foundation's top-of-funnel diagnostic. It measures whether an enterprise's AI investment compounds in the organization's favor or the provider's. Nine questions across three axes produce a Ratchet Direction Index (RDI) score that classifies the enterprise into one of four structural states: Provider-Locked, Drift, Contested, or Sovereign.

This roadmap documents the shipping sequence. The v1 scope is what validates the diagnostic in the wild. Subsequent versions add capture, comparison, and verification layers on top of a mechanism that is already working.

---

## v1 — Soft Launch (this sprint)

Ship the diagnostic with maximum completion rate. No friction. No form gates. Silent anonymized capture for benchmark building.

**In scope:**
- `/ratchet` page integrated into grove-launch-site (full site chrome, nav, footer)
- Complete 9-question diagnostic (intro → questions → results)
- Board-ready assessment slide rendered inline on results page (four classification variants: Provider-Locked, Drift, Contested, Sovereign)
- CIO screenshots the slide for board decks — no download required
- Homepage "Measure Yours" bridge section linking from landing page to `/ratchet`
- Nav update across all pages: "Ratchet Test" as the first item
- Supabase silent capture: anonymized scores, answers, and session metadata POSTed to a private table on results render
- One-line disclosure on results footer: "Anonymized scores contribute to the Grove Foundation's industry benchmark. No identifying information is collected."

**Out of scope for v1:**
- PDF download of board assessment
- html2canvas export
- Email capture / form gate
- Benchmark display on results page (needs 50+ anonymous or 20+ verified submissions)
- Domain verification or attestation flow
- Retake with answer persistence
- Share link with encoded scores

**Quality gate:** A CIO who has never heard of the Grove Foundation screenshots the board slide, pastes it into a board deck, and the board understands (a) which direction their AI investment is compounding, (b) why that's a structural property not a vendor management problem, and (c) what architectural sovereignty would look like — without any additional explanation.

---

## v2 — Capture + Compare

Once the diagnostic has validated signal (50+ anonymous submissions or 20+ verified), layer on the features that turn one-shot diagnostics into an ongoing relationship.

**Additions:**
- **Email capture / form gate** (optional, A/B tested against no-gate baseline). Minimal form: Name (optional), Company (optional), Email (required). Posts to Formspree. The form appears between results and the board assessment — the diagnostic remains free, the board-ready artifact becomes the payoff for giving an email.
- **Benchmark display on results page.** Show the user's RDI against the anonymized industry distribution — percentile band, classification mix, axis-by-axis comparison to peers. Requires sufficient sample size before surfacing.
- **PDF download of board assessment** via html2canvas or server-side rendering. Removes screenshot friction. Includes CC BY 4.0 attribution and permalink back to the-grove.ai/ratchet.
- **Retake with answer persistence.** LocalStorage-backed so a CIO can step away, return, and finish. Also enables "compare to last quarter" on retake.
- **Share link with encoded scores.** Generate a read-only URL that renders the board assessment for sharing in Slack/email without requiring the recipient to take the test. Encoded scores only — no PII.

**Metrics that unlock v2 features:**
- Completion rate (target: 60%+ of page visits reach results)
- Board-assessment view rate (target: 70%+ of completions)
- Benchmark readiness (unlocks once distribution is stable)

---

## v3 — Verification + Industry Tagging

Move from self-reported scores to attested assessments. Required before the diagnostic can serve as a referenceable industry benchmark.

**Additions:**
- **Domain verification flow.** After email submission, verify the respondent's corporate domain against a lightweight trust signal (email validation, DNS TXT record, or LinkedIn SSO). Separates verified enterprise submissions from casual takers.
- **Industry vertical tagging.** Respondent self-selects industry (Financial Services, Healthcare, Retail, Manufacturing, Technology, Government, Other) and company size band. Enables industry-specific benchmark slices.
- **Attestation language.** Respondent attests that answers reflect their organization's actual state to the best of their knowledge. Legal language vetted. Attested submissions flagged as `verified: true` in the benchmark data model.
- **Verified-only benchmark slice.** Separate "verified enterprise" distribution shown alongside the anonymous aggregate. This is the number that makes the diagnostic publishable as an industry reference.
- **Consent for aggregate publication.** Explicit opt-in for inclusion in published benchmark reports. Non-consenting submissions still contribute to internal aggregates but are excluded from public reports.

**Deliverable:** A publishable "State of AI Architecture" benchmark — quarterly or annually — based on verified enterprise submissions. This becomes the Grove Foundation's signature industry artifact.

---

## v4 — Longitudinal + Cohort

Once verified enterprises are retaking the diagnostic on a cadence, the platform produces time-series and cohort insights.

**Additions:**
- **Retake cadence with historical comparison.** Verified enterprises see their own RDI trend over time. "Your Portability axis moved from 3 to 6 between Q1 and Q3."
- **Cohort analysis.** Compare enterprises of the same size, industry, or starting classification. "Of enterprises that started at Provider-Locked 12 months ago, 23% have moved to Drift, 8% to Contested, 1% to Sovereign."
- **Directional movement benchmark.** What fraction of enterprises are ratcheting toward sovereignty vs. deeper lock-in. This is the industry-level question the Grove Foundation is ultimately positioned to answer.
- **CIO roundtable invitations.** Verified enterprises that move toward Sovereign within 12 months get invited to closed discussions. The diagnostic becomes a pipeline into the Grove Foundation's practitioner community.

---

## Cut / Deferred

- **Anonymous peer comparison in real-time** (e.g., "your score is lower than 73% of Financial Services enterprises"). Requires both the sample size and the industry tagging from v3.
- **Recommendation engine** (e.g., "your lowest axis is Portability, here are three structural changes"). Risks reducing the diagnostic to a self-help quiz. The existing interpretation + axis findings text already carries the prescriptive load. Hold until there's evidence that more explicit recommendations drive action.
- **Integration with procurement workflows.** Enterprise feature — requires partnerships with procurement platforms. Not a foundation-layer move.
- **White-label diagnostic for consultancies.** Request this has come up; deferred until the reference diagnostic has industry credibility.

---

## Architectural Principles

A few invariants that should hold across every version:

1. **The diagnostic is free forever.** CC BY 4.0. No paywall on any version.
2. **Silent capture is anonymous by default.** PII only ever gathered with explicit opt-in.
3. **The board-ready artifact is the payoff.** Everything in the results flow serves the artifact a CIO hands to their board.
4. **No recommendations without evidence.** The diagnostic measures structural state. It does not prescribe specific vendor decisions or tools.
5. **Interpretations stay structural.** The language of provider-locked vs. sovereign is architectural, not moral. A company can be Provider-Locked and still be doing fine this quarter. The diagnostic measures direction, not virtue.
