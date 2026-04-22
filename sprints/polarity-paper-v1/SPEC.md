# polarity-paper-v1 — SPEC (compressed)

**Sprint:** polarity-paper-v1
**Opened:** 2026-04-22
**Target tag:** polarity-v1.0
**Goal:** Ship the polarity hypothesis paper to production at `/research/knowledge-polarity/` today. Cross-links and llms.txt update are explicit fast-follow, not sprint scope.

---

## Thesis

The polarity hypothesis paper is canon. It's the foundational theoretical document beneath Grove's architecture. Draft v2 is publication-ready. Ship it.

## Scope

**In scope:**
- `/research/knowledge-polarity/index.html` — polarity paper, full Tier A from day one
- `/research/knowledge-polarity/polarity-hypothesis.pdf` — PDF companion at stable URL
- Any SVG/image assets needed for the three figures
- `sprints/polarity-paper-v1/` — SPEC, CC prompts, DEVLOG
- Deploy to Vercel production

**Out of scope (explicit fast-follow, not this sprint):**
- llms.txt v3 refresh to reference polarity paper (separate 20-min prompt tomorrow)
- Upstream cross-links from /standards/001, /002, /003, A&A, /lambda (separate prompt)
- /research/ landing page (not needed — /research/knowledge-polarity/ is the destination directly)
- Common Ground synthesis document (completely separate future work)
- LinkedIn thinkpiece, Substack, email to reviewers (post-publication work, not sprint)
- Vocabulary-curation-v1 alignment (separate sprint)

## Tier A components (all seven)

Same checklist applied to every polarity page surface:

1. JSON-LD **ScholarlyArticle** primary type (not TechArticle — this is a peer-review-draft position paper)
2. JSON-LD WebPage with `@id` and `isPartOf`
3. JSON-LD BreadcrumbList
4. JSON-LD citation array — every reference in the paper rendered as structured citation
5. Full head metadata stack: canonical, OG, Twitter, Dublin Core, citation_* (Google Scholar indexing)
6. Composition surface at end of content flow
7. Speakable on headline + abstract

Note: FAQ optional for this page. The paper is self-answering; an FAQ would repeat the argument. If we include one, it's cold-LLM-facing meta-questions about what the paper claims, not recap. Decision in Phase 1 CC prompt.

## Byline

```
James Calhoun
Founder, The Grove Foundation · Managing Director, Take Flight Advisors
```

With links: the-grove.ai, takeflightadvisors.com, LinkedIn (slug TBD — operator provides before fire).

## Version

Published as "Draft v2 for Peer Review — April 2026" per paper's own header. Version field in JSON-LD: "2.0-draft". Operator can re-version later; ship as-drafted.

## Phases

- **Phase 0** — SPEC (this doc). Written.
- **Phase 1** — Author + commit + push + deploy. One session, one CC prompt.
- **Phase 2** — DEVLOG + tag `polarity-v1.0`.

## Ledger

| Phase | Artifact | SHA | Date |
|-------|----------|-----|------|
| 0 | SPEC | TBD | 2026-04-22 |
| 1 | Paper page + PDF + deploy | TBD | 2026-04-22 |
| 2 | DEVLOG + tag | TBD | 2026-04-22 |

## Working discipline

Inherited from composition-coherence-v1 §10. Surgical, verbatim paper content, no body prose modifications, design-token-compliant styling matching existing Grove pages.

---

**Fire.**
