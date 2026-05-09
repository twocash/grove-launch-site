# CONTRACT — substrate-jim-calhoun-v2-alpha

**Sprint:** substrate-jim-calhoun-v2-alpha
**Operator:** Jim Calhoun
**Status:** Active

Invariants that must hold across all 6 files. Violations are bugs; bugs go into the plan, not directly into files. Verify each before declaring sprint complete.

---

## §1 — Visual register parity

**Invariant 1.** CSS, nav block, font preconnects/loads, body texture grid, and intersection-observer reveal scripts in `/substrate/jim-calhoun/index.html` (founder declaration) and `/substrate/jim-calhoun/letter/andon/index.html` (Andon page) are byte-for-byte copied from `/registrar/index.html`. Verify by visual comparison after deploy: founder declaration and Andon page should render with identical typography, spacing, grid texture, and nav as /registrar/.

**Invariant 2.** No new CSS variables introduced. The `:root` block in /registrar/ already defines `--yellow: #D4A017`. The Andon page reuses this; Section I yellow accents (eyebrow, divider, version-line) are the only additions to the CSS block.

**Invariant 3.** Andon page yellow accent applies ONLY to Section I (`#declaration`). Body-text elements, all subsequent sections, and footer use the standard text-mid / amber palette. Single yellow accent declares andon-light meaning without bleeding into general visual register.

---

## §2 — Strip completeness

**Invariant 4.** The following six tokens appear ZERO times across all 6 sprint files (surface or envelope, JSON or HTML):
- `Cottrell`
- `Ferbos`
- `takeflightadvisors`
- `Take Flight Advisors`
- `Managing Director`
- `Pierre-Jean`

Verify with: `findstr /i /s "Cottrell Ferbos takeflightadvisors" C:\GitHub\grove-launch-site\substrate\jim-calhoun\` — should return zero matches.

**Invariant 5.** E. Brown Robbins appears at founder declaration only (`/substrate/jim-calhoun/index.html` and its sibling `keg.json`). The letter file at `/substrate/jim-calhoun/letter/index.html` no longer carries Robbins anywhere. The letter envelope `personal_lineage` block is fully deleted.

**Invariant 6.** The string `grandfather` does not appear on the founder declaration surface or envelope. (It may still appear in the letter dedication block — that's memoir register and stays.)

---

## §3 — Advisor positioning discipline

**Invariant 7.** Wigginton, Kare, Mok appear in founder envelope `inspirations` array under `personal-friendship-and-co-conspiracy` register, with contribution language `lifelong advisor and inspiration; available for diligence on request`. They do NOT appear in founder declaration surface prose.

**Invariant 8.** /registrar/'s canonical lineage entries for Wigginton, Kare, Mok remain unchanged. This sprint does not edit /registrar/.

---

## §4 — Letter integrity

**Invariant 9.** The letter file at `/substrate/jim-calhoun/letter/index.html` is functionally identical to the pre-sprint `/substrate/jim-calhoun/index.html` except for the 19 named strips in SPEC §3. Verify:
- All 30 `data-grove-payload` sections preserved
- Intentional voice-marks preserved verbatim:
  - "plese" in postscript-ps
  - "No single atom could not have made this" in squirts-of-paint
  - "spongy little dirtbag" in lineage-jerry-michalski
- Four-postscript margin staircase preserved (32px / 120px / 240px / 480px CSS)
- Cat Stevens emphatic-line block preserved verbatim
- Dedication block preserved verbatim except as covered by Strip 3.7
- Workshop annex section preserved verbatim
- Intersection observer reveal script preserved

**Invariant 10.** The letter inline JSON-LD GroveKeg block and the sibling `letter/keg.json` are deep-equal. Both have:
- All same-name entries removed per strips 3.3, 3.4, 3.5
- `personal_lineage` block fully deleted per strip 3.6
- New `reserves` entry appended (per SPEC §4)
- `@id` updated to `https://the-grove.ai/substrate/jim-calhoun/letter/#grove-keg` per strip 3.19

---

## §5 — Andon address discipline

**Invariant 11.** The address `jim+diligence-andon@the-grove.ai` appears in:
- Founder declaration: Section V Reserves prose; envelope `operator.diligence_email`
- Andon page: byline (Section I); Section IV body text; envelope `diligence_email`

**Invariant 12.** The address `jim@the-grove.ai` (no plus-aliasing) appears only in:
- Founder declaration: byline (Section I); envelope `operator.email`

These are different addresses. The plus-aliased variant routes diligence inquiries; the bare variant is general contact.

---

## §6 — Sibling envelope discipline

**Invariant 13.** Each new HTML file carries a `link rel="alternate" type="application/ld+json"` declaration in head pointing to its sibling `keg.json`. Each sibling `keg.json` file is deep-equal to the inline JSON-LD GroveKeg block on its surface. This matches /registrar/'s pattern.

The four sibling envelopes:
- `/substrate/jim-calhoun/keg.json` (founder)
- `/substrate/jim-calhoun/letter/keg.json` (letter; extracted from inline + reserves entry appended)
- `/substrate/jim-calhoun/letter/andon/keg.json` (Andon)
- (existing `/registrar/keg.json` is not modified)

---

## §7 — Lineage minimalism

**Invariant 14.** Founder declaration Section III contains exactly ONE `lineage-block` div (Robbins). The /registrar/ pointer paragraph follows the lineage-blocks div, naming the twelve Foundation-grade ancestors as a list inside body-text. The asymmetry is in-register and intentional.

**Invariant 15.** Founder envelope `lineage` array contains exactly ONE entry (Robbins). All other historical / methodological ancestors live at /registrar/'s envelope and are not duplicated.

---

## §8 — Composition surface discipline

**Invariant 16.** Composition surface (LM + human paragraphs) appears on:
- Founder declaration (file 1) — yes, /registrar/ pattern
- Andon page (file 5) — yes, /registrar/ pattern
- Letter (file 3) — NO. The letter has its existing handshake-block which serves the same bicameral function; do not add a composition surface.

---

## §9 — Option C stub discipline

**Invariant 17.** Option C (per-recipient substrate) is stubbed in three places:
- HTML comment in letter file (per strip 3.11) — after handshake-block close
- HTML comment in founder declaration — after footer block
- Envelope `reserves` entries on letter envelope and founder envelope

All three describe per-recipient substrate at `/substrate/jim-calhoun/letter/recipients/{name}/` as forthcoming structural work.

---

## §10 — No-judgment register

**Invariant 18.** All envelope `operator_notes` use no-judgment register. No adversarial framing, no opponents named, no policy claims dressed as observations. Foundation builds-on rather than tears-down posture, even below-the-waterline.

The Section II body text on founder declaration uses softened language ("the field has optimized around"). The polemic ("the underlying claim about computer science is wrong") is intentionally NOT included.

---

## §11 — License + provenance

**Invariant 19.** CC BY 4.0 declared on every file:
- Footer text on each `index.html`
- `license` field on each `keg.json`
- DC.rights meta tag in head of each `index.html`

**Invariant 20.** No `<form>` tags introduced. Founder declaration and Andon page have no forms. Letter retains its existing footer Formspree subscribe form verbatim — no change.

---

## §12 — Verification commands

After all writes complete, CC runs the following from `C:\GitHub\grove-launch-site\` and reports results:

```cmd
:: Verify file existence
dir /s /b substrate\jim-calhoun\

:: Verify strip completeness — each should return zero matches
findstr /i /s "Cottrell" substrate\jim-calhoun\
findstr /i /s "Ferbos" substrate\jim-calhoun\
findstr /i /s "takeflightadvisors" substrate\jim-calhoun\
findstr /i /s "Take Flight Advisors" substrate\jim-calhoun\
findstr /i /s "Managing Director" substrate\jim-calhoun\

:: Verify Robbins migration
findstr /i /c:"E. Brown Robbins" substrate\jim-calhoun\index.html
findstr /i /c:"E. Brown Robbins" substrate\jim-calhoun\keg.json
findstr /i /c:"E. Brown Robbins" substrate\jim-calhoun\letter\index.html
findstr /i /c:"grandfather" substrate\jim-calhoun\index.html
findstr /i /c:"grandfather" substrate\jim-calhoun\letter\index.html
```

CC reports findstr results in the post-execution summary. Operator validates against contract before deploy.

---

## §13 — Deploy discipline

**Invariant 21.** This sprint does NOT deploy. CC does not run `npx vercel --prod --yes`. Operator deploys manually after reviewing CC's output and validating contract invariants.

**Invariant 22.** Verification post-deploy is via curl, not web_fetch. Operator runs:
```cmd
curl -s https://the-grove.ai/substrate/jim-calhoun/ | findstr /i "Pattern Re:Cognition"
curl -s https://the-grove.ai/substrate/jim-calhoun/letter/ | findstr /i "below the waterline"
curl -s https://the-grove.ai/substrate/jim-calhoun/letter/andon/ | findstr /i "Andon"
curl -s https://the-grove.ai/substrate/jim-calhoun/keg.json | findstr /i "founder-declaration"
```

60-second propagation window after deploy.

---

## §14 — Lodestar gate

**Invariant 23.** Design is philosophy expressed through constraint. Each section in each new file earns its place by expressing a structural position. If a section reads as decoration after a final review, it is cut. The lodestar applies to:
- Section II opening: Pattern Re:Cognition with the colon doing structural work
- Section III: Robbins lineage entry with body-of-work-does-the-standing framing
- Section V: Reserves naming Andon as social-not-technical gate
- Andon Section II: jidoka grounded in 1924 historical anchor
- Andon Section V: kaizen as discipline-rather-than-feature framing

If any of these read as decoration, surface to operator before deploying.
