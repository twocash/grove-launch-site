# Phase 1.1 Refinement Prompt — operator/publisher canonical fix

**Sprint:** grv-004-spec-v1
**Phase:** 1.1 (post-Phase-1 refinement)
**Predecessor:** Phase 1 commit ac7c35a (GRV-004 live at /standards/004)
**Goal:** Replace "publisher" with "operator" throughout GRV-004 to align with Grove canonical vocabulary. Add a small framing note clarifying that publishing is a runtime act of the operator, not a defining identity.

---

## Context

Phase 1 of grv-004-spec-v1 shipped clean, but used "publisher" as the canonical actor language. This drifted in from web-publishing vocabulary. The correct Grove canonical actor is **operator** — the persistent sovereign identity who owns the Autonomaton, owns the cellar, declares intent, and scopes the kegs. Every other Grove document (A&A, polarity paper composition surface, /lambda, GRV-001/002/003, GAMEPLAN.md) uses operator. GRV-004 must align.

The operator/publishing distinction also clarifies a subtle architectural point worth surfacing in the spec: publishing is the runtime act of exposing specific kegs at specific scopes for a specific compose moment. The Declaration is the operator's standing intent at the protocol layer (who I am, what's in my cellar, at what default scopes). The act of publishing is one expression of operator intent at compose time.

This refinement is purely terminological + one small architectural framing addition. No structural changes to the spec.

---

## Operator decisions (apply exactly)

### 1. Global terminology swap

**Replace throughout `/standards/004/index.html`:**

- `publisher` → `operator`
- `publisher's` → `operator's`
- `publishers` → `operators`
- `Publisher` → `Operator`
- `Publisher's` → `Operator's`
- `Publishers` → `Operators`

**Apply to:**
- All visible page body text
- All JSON-LD schema descriptions and field names where they appear (note: the JSON envelope field name `publisher` becomes `operator`)
- The reference schema worked example (publisher block becomes operator block)
- The composition surface LM-facing paragraph (where it says "the operator's specific context" — already correct, leave; check all other instances)
- The Handshake template
- Invariant IV ("Identity is sovereign-attributable") — adjust language to refer to "operator" not "publisher"

**Do NOT replace:**
- The word "published" used as a verb describing the act of putting content on the page (e.g., "GRV-004 is published under CC BY 4.0", "the polarity paper, published by The Grove Foundation"). Publishing remains a valid verb describing the act; only the persistent actor noun changes from publisher to operator.
- References to publication dates, "datePublished", or other Schema.org/Dublin Core field names where "publisher" is the literal Schema.org property name.
- Quoted material from external sources (none present in current draft, but flag if encountered).

### 2. JSON-LD envelope field rename

In the Reference Schema §IV worked example AND in the human-legible form:

- The `publisher` envelope field → rename to `operator`
- The field's structure stays the same (name, url, institutionalPolarity)
- All references to "publisher object" in surrounding prose → "operator object"

This is a v1.0 spec change, applied while the spec is fresh. Better to fix now than carry the wrong noun forward.

### 3. New framing paragraph — add to §II "The Pattern"

After the existing paragraph that explains the brand-vs-mechanism separation (the paragraph beginning "The names matter because they preserve the brand-vs-mechanism separation..."), insert a new short paragraph:

> **Operator vs. publishing.** The Autonomaton's actor is the *operator* — the persistent sovereign identity who owns the cellar, declares intent, and scopes the kegs. Publishing is a runtime act, not an identity: the operator's standing Declaration plus per-compose scope flags determine which kegs are tappable at any given moment. An operator may ship many publications; the cellar persists across them. The Declaration is the operator's standing intent. The act of publishing is one expression of that intent at compose time.

This is the small architectural clarification that surfaces the distinction Jim has been holding implicitly. Surfaced now in the spec, it grounds Sprint 2 and beyond.

### 4. Schema.org `@type` consideration

The Schema.org `publisher` property in the existing TechArticle JSON-LD block (B3) is the Schema.org canonical property name and should NOT be renamed — Schema.org consumers expect `publisher`, and renaming it would break JSON-LD validity for crawlers expecting Schema.org compliance.

However, the Autonomaton Declaration's own envelope (the GRV-004-specific JSON-LD code block in §IV's machine-readable form) uses GRV-004's own context (`@context: "https://the-grove.ai/ns/autonomaton/v1"`) and CAN use `operator` as the field name. The two namespaces are independent:

- Schema.org TechArticle in `<head>`: keeps `publisher` (it's their property name)
- GRV-004 AutonomatonDeclaration in §IV worked example: uses `operator` (it's our property name)

This is the correct semantic — Schema.org describes the page; GRV-004 describes the Autonomaton. Different schemas, different vocabularies. Surface this distinction in §IV with one sentence noting the field rename is GRV-004-specific.

---

## Task steps

### Step 1 — Read current state

Read `C:\GitHub\grove-launch-site\standards\004\index.html` in full. Count the occurrences of "publisher" / "publishers" / "publishing" / "Published" / etc. Identify which are envelope-level GRV-004 vocabulary (rename) vs. Schema.org property names (keep) vs. verb usages of "published" (keep).

### Step 2 — Apply edits surgically

Use edit_block for each distinct change. Estimated ~12-18 small edits across the file. Likely edit clusters:

1. §II Pattern section — multiple "publisher" references in prose
2. §II — insert new "Operator vs. publishing" framing paragraph
3. §III Invariant IV — "publisher" in the invariant text and amplification
4. §IV Reference Schema human-legible form — `publisher` field becomes `operator`, surrounding prose updates
5. §IV Reference Schema JSON-LD code block — `"publisher": {...}` becomes `"operator": {...}` in the worked example
6. §IV Schema namespace clarification — add one sentence noting Schema.org publisher vs. GRV-004 operator distinction
7. §V Handshake template — any "publisher" references swap to "operator"
8. §VII Conformance section — any "publisher" references in the Conformance & Lineage prose
9. Composition surface LM-facing paragraph — verify "operator" appears throughout, no "publisher" leakage

### Step 3 — Verify

- All visible "publisher" instances replaced with "operator" except verb forms ("published") and Schema.org canonical property name in TechArticle JSON-LD
- New framing paragraph in §II reads naturally between the brand-vs-mechanism paragraph and the artifact cards
- JSON-LD validity preserved (the GRV-004 code block uses `operator`; the Schema.org TechArticle keeps `publisher`)
- No "publisher" appears in the GRV-004 envelope schema (human-legible OR JSON-LD)
- The Handshake template still reads as a copyable template; no operator-pronoun awkwardness introduced

### Step 4 — Commit, push, deploy

```
git add standards/004/index.html sprints/autonomaton-protocol-v1/
git commit -m "grv-004 phase-1.1: rename publisher to operator throughout (Grove canonical actor); add operator-vs-publishing framing paragraph"
git push origin master
npx vercel --prod --yes
```

Capture SHA and deployment URL.

### Step 5 — Report back

```
GRV-004 PHASE 1.1 COMPLETE — OPERATOR ALIGNMENT

Commit:    <SHA>   "grv-004 phase-1.1: rename publisher to operator..."
Push:      <summary>
Deploy:    <Vercel URL>
Alias:     https://the-grove.ai

Changes applied:
  publisher → operator: <N occurrences> across <N> sections
  Schema.org TechArticle publisher property: PRESERVED (canonical Schema.org name)
  GRV-004 envelope publisher field: RENAMED to operator
  New §II framing paragraph: inserted between brand-vs-mechanism and artifact cards
  Verb usages of "published"/"publishing": PRESERVED where describing the act
  
JSON-LD state:
  Schema.org TechArticle: still uses "publisher": {...} (correct — their property name)
  GRV-004 AutonomatonDeclaration worked example: now uses "operator": {...} (correct — our property name)
  Namespace distinction: surfaced in §IV with one sentence
  All JSON-LD blocks still parse-valid

Eyes on glass:
  [ ] No "publisher" remains in GRV-004 vocabulary anywhere (envelope, prose, Handshake, Conformance)
  [ ] Schema.org TechArticle <head> still has "publisher": {The Grove Foundation, ...}
  [ ] §II new framing paragraph reads naturally — operator-vs-publishing distinction clear
  [ ] Handshake template still copyable, no awkward pronouns introduced
  [ ] Worked example in §IV uses operator throughout the GRV-004 envelope
```

---

## Working discipline

- Surgical edits only. ~12-18 edit_block calls. Do NOT rewrite the file.
- Schema.org vs. GRV-004 namespace distinction is load-bearing — preserve Schema.org's `publisher` property name in TechArticle JSON-LD, rename GRV-004's envelope field to `operator`.
- Verb forms of "publish" stay; noun "publisher" leaves.
- New framing paragraph is small but meaningful — gets the operator-vs-publishing distinction into the spec where it grounds future work.
- Push and deploy in this phase. Live alignment, not staged.

## Acceptance criteria

- All GRV-004 vocabulary uses "operator" as the canonical actor noun
- Schema.org TechArticle `publisher` property preserved
- New §II framing paragraph present, surfaces operator-vs-publishing distinction
- All JSON-LD blocks remain valid
- Commit, push, deploy succeed
- Report-back format verbatim

---

**Fire.**
