# AID Registrar v1 — Design Layer (SPEC v2 amendment)

*Captured 2026-04-24 from operator dictation. Layered onto the existing aid-registrar-v1 SPEC (2026-04-23). Original SPEC structure holds. This document adds the visible-surface register and the meta-channel embedded in it.*

*Author: Jim Calhoun. Memoir-adjacent / workshop register.*

> **Rebuild log.** This file has been rebuilt twice on 2026-04-24 after accumulating edit-artifact damage during long sprint-planning sessions. Current state reflects all intents directed through conversation today. Operator should verify key beats on read-through: 1998 throwback register, "Don't mind our grout!" pmarca tagline, subdomain content-negotiation note, protocol-status disclaimer with `/membership` CTA, easter-egg JSON with PKI-roadmap disclosure, Spotify playlist embed (replaced original seven-track list), eleven-entry Reading List with calibrated review discipline (Yarvin dismissal / Avatar + Star Wars metaphor calibration / all others name-and-link silence), GIF banner candidates.

---

## Why this amendment exists

The original aid-registrar-v1 SPEC defines the machine-readable infrastructure: ten-row registry JSON, subdomain serving JSON at root, `/registrar` page on apex rendering the registry as a table. All of that holds.

What the original SPEC did not specify is what the `/registrar` apex page **looks and feels like**. Default would be: standard Grove design system, amber-on-black, Fragment Mono / Instrument Serif / DM Sans, conforming bicameral Keg styling.

That default would be wrong here.

The registrar page is doing different work than every other Grove surface. Every other surface is composing. The registrar is **declaring early-stage scaffolding and inviting recognition from a small handful of operators who would feel the resonance of what is being attempted.** It is not a marketing surface. It is barely a destination. It is the front door of an institution being hand-forged in real time, with the visible humility that posture deserves.

---

## The design move

Render `/registrar` as a deliberate **1996–1998-era throwback**. Times Roman serif. Blue underlined hyperlinks (`#0000EE` visited `#551A8B`). Off-white background (`#FFFFEE` or near-white, not pure `#FFFFFF`). No CSS framework. No Tailwind. No Grove design system tokens. Vanilla HTML rendered as if Mosaic or Netscape Navigator 3 just opened it.

Reference register:

- The Amazon Books homepage circa 1995 (Times Roman, "Welcome to Amazon.com Books!", *One million titles, consistently low prices*, blue underlined links, no chrome)
- Geocities personal pages circa 1997 (warning bars, under-construction GIFs, animated tile backgrounds, single-column body)
- Pre-CSS web. Pre-readability. Pre-all-the-things.

This is the **invitation-back-to-first-principles** register. The reader who arrives at `registrar.the-grove.ai` or `the-grove.ai/registrar` and sees this page is meant to feel two things in sequence:

1. *Wait, is this really their page?* (recognition of register dissonance)
2. *Oh. They are doing this on purpose.* (recognition that the dissonance is the point)

That second beat is what the rest of the page rewards.

---

## Surface contents — the visible page

In document order, top to bottom. Detailed specs for sections marked with a cross-reference live in their own sections further down.

### 1. Top banner — animated "UNDER CONSTRUCTION" GIF, max-headroom-styled

Animated GIF, ~600px wide, centered. Black-and-yellow construction-tape diagonals with **UNDER CONSTRUCTION** text in glitchy max-headroom typography (stuttering, slightly desynced color channels — RGB shift effect like a broken CRT). Operator-curated candidate list lives at "## GIF asset candidates — under-construction banner" below.

### 2. Tagline directly beneath the banner

Small text, italicized, Times Roman, dark gray (`#444`):

> *Don't mind our grout!*

This is the operator's intentional 2FA verification tag. Anyone who recognizes the layered meaning (substrate → grout → grounding → polarity) knows the canon. Anyone who does not reads it as a charming construction-site joke. Both reads land cleanly. **Marc Andreessen** is the named recipient of the second-channel signal — he was an early advocate of long-tail-of-the-web composition where deep subject-matter substrate generates real value, and the tagline is a nod he is positioned to hear.

The tagline is not explained anywhere on the page. It does the work it does or it does not. That is correct.

### 3. Page title

Heading 1, Times Roman, no styling:

> # Welcome to The Grove Foundation Registrar

### 4. Subtitle / opening telegraph

Italicized, beneath the title:

> *AutonomatonIDs are issued by cohort year. The 2026 cohort began this month.*

### 5. Two-paragraph plain-prose explanation

Standard body text, Times Roman, single column ~600px wide:

> AutonomatonID format is `GRV-YYYY-NNNN`. Year is cohort vintage. Serial is sequence within cohort. Year is fixed at issuance. The first cohort is deliberately small.
>
> Issuance is currently manual. Each AID below was issued by hand by The Grove Foundation. The registrar exists to make that issuance traceable, the cohort visible, and the scheme legible to other operators who may want to compose with it.

### 6. Protocol status disclaimer with membership CTA

See "## Protocol status disclaimer — with embedded CTA" below for full spec. Renders as a bordered light-yellow notice box between section 5 and section 7.

### 7. The registry — rendered as plain HTML table

Standard `<table>` with `border="1"`, no CSS styling beyond browser default. Columns: AID / Status / Domain / Issued. Ten rows per the original SPEC. Reserved rows render as `(reserved)` in the Domain column and `—` in the Issued column.

### 8. Footer note

Below the table, small italicized text:

> *This page is itself a conforming bicameral Keg under [GRV-004](https://the-grove.ai/standards/004). The full Declaration is in the envelope below this prose.*

Real blue-underlined hyperlink, period-correct.

### 9. Below-the-waterline meta channel — operator-intent

Not visible to the casual reader. Carried in the JSON-LD envelope's `operator_intent` field AND in a single HTML comment block placed at the top of the body so any chamber that reads source sees it:

```html
<!--
  This is an alpha protocol developed by The Grove Foundation.
  We welcome collaborators to bring forth our vision of creativity
  and flourishing at scale, in parallel time, and with human sovereignty.
  This will take the efforts of many people, for many years, to fully
  realize. But it is worth trying. The protocol is open at GRV-004.
-->
```

Same text mirrored in the JSON-LD envelope's `operator_intent` field so machine chambers parse it natively. The intent text reads to a casual viewer as scaffolding humility. It reads to a composing intelligence as a recruitment signal the chamber can faithfully relay if a human asks "what is this place actually about?" This is the depth-as-natural-conversation pattern from Test 5 findings, applied at the registrar surface.

### 10. Easter-egg `discovery` JSON

See "## Easter egg — `discovery` JSON embedded in registrar page" below for full spec. Rendered as HTML comment at top of page body; mirrored into the GroveKeg envelope `payloads` array.

### 11. To-Do list

See "## To-Do List — Geocities register" below for full spec.

### 12. My Tunes

See "## My Tunes — bottom-of-page section" below for full spec.

### 13. Reading List

See "## Reading List — Geocities register" below for full spec.

---

## What the page is NOT

- Not styled with the Grove design system. No amber. No Fragment Mono. No grid texture. No nav chrome from the apex site. The subdomain stands alone visually.
- Not a marketing page. The only CTA is the single `/membership` link inside the protocol-status disclaimer. No mailing-list signup. No "Apply for an AID."
- Not exhaustive. The registry is ten rows. The explanation is two paragraphs. The page should feel intentionally small.
- Not animated beyond the under-construction banner GIF(s) and the inline Yarvin-entry GIFs. No JS interactivity. Static HTML.
- Not responsive to the modern sense. The page renders in 1996 and that is fine. Mobile users see exactly what desktop users see, scaled by the browser's native zoom. Period-correct.

---

## The subdomain question

Per original SPEC: `registrar.the-grove.ai/` returns the registry JSON with `Content-Type: application/json` for machine consumption.

**Amendment:** if a browser visits `registrar.the-grove.ai/` directly (Accept header includes `text/html`), serve the throwback page — **not** the apex content currently served via DNS aliasing. The subdomain is the registrar surface. The apex is the foundation. Two distinct addresses, two distinct surfaces.

Implementation note for CC: content negotiation on the subdomain root, OR a Vercel rewrite that distinguishes `Accept: application/json` from `Accept: text/html`. Whichever composes cleanly with the existing `vercel.json`. Surface the choice before writing.

If content negotiation adds complexity, fallback is acceptable: `registrar.the-grove.ai/` serves the HTML throwback page with the registry inline and a `<link rel="alternate" type="application/json" href="/registry.json">` so machine chambers fetch the JSON via the alternate. This pairs cleanly with the bicameral-fallback pattern coming in `composition-coherence-v2`.

---

## Operator note on reserved slots and the cohort telegraph

The seven reserved slots `0002` through `0008` carry deliberate scarcity. The original SPEC named this as the strategic point and that holds. Three additional notes:

- The reserved slots are **not** placeholders for known-future-recipients. They are reserved as scaffolding — held open so the registry registers visibly that this is early, that the cohort is being curated, that issuance is intentional rather than automatic.
- Some of the reserved slots may eventually go to recipients the operator is in active conversation with. Some may stay reserved indefinitely. The registry does not forecast this.
- The cohort year (`2026`) is fixed at issuance for every AID. A `GRV-2026-NNNN` cert always reads as a 2026-cohort issuance regardless of when its declaration is published. The cohort is the substrate vintage.

This is the same logic as wine vintages: the year names the conditions of issuance, not the year of consumption. Future canon notes may name this **substrate vintage** as a first-class concept in GRV-004.

---

## Protocol status disclaimer — with embedded CTA

A prominently-placed block rendered between the two-paragraph prose explanation (section 5) and the registry table (section 7). Visually distinct in Geocities register — a thin black border box with a light yellow background (`#FFFFCC`), Times Roman body text, slightly smaller than body default. The register is period-authentic "notice" styling, like a 1996 shareware page's disclaimer box.

Exact copy:

> **Protocol Status: In Development**
>
> This protocol is currently emerging from entropy. All rights reserved on formal implementation. Consider this an MVP proof of concept — working, shipped, and legible, but scaffolding that will harden as the mesh matures.
>
> If this resonates and you want to compose with us: [join The Grove](https://the-grove.ai/membership).

The CTA link renders as blue underlined hyperlink in period register, pointing to `https://the-grove.ai/membership`. Exact link text: *join The Grove*. No button styling, no CTA chrome — a plain inline link, period-correct.

### Why the disclaimer matters

Every Grove surface shipped to date has been declarative: *this is what we are building; this is what we have declared; here is the evidence.* The registrar page is the first surface that admits publicly: *we are still instantiating this; the certs are hand-forged; the PKI is not yet real; we are watching our own instantiation happen.* That honesty is the difference between a protocol declaring authority it has not yet earned and a protocol declaring the work in progress with the invitation to participate.

"Emerging from entropy" is the exact register. The protocol is real. The protocol is also not finished. Both are true simultaneously. Saying so publicly disarms the "are these people serious?" reader response — serious people are the ones who can name what they have not yet done.

### Why the CTA matters

A reader who reaches this disclaimer and feels the pull has no current path to participate except watching the GitHub repo or emailing the Foundation. The membership link closes that loop. The Grove already has `/membership` — landing people there from the registrar page activates a circuit that currently exists but is under-surfaced from the registrar specifically.

Combined with the To-Do list (which points to the primitive repo for builders) and the easter egg (which rewards technically-curious readers with the trust-roadmap signal), the CTA gives non-technical-aligned readers their own path in. Three doors on the same page, each calibrated to a different kind of participant.

---

## To-Do List — Geocities register, operator's visible priorities

A `<h2>` section beneath the operator-intent footer and above My Tunes. Times Roman, plain browser-default styling. Heading reads simply:

**To-Do**

Below the heading, a plain unordered list. Each item is a blue underlined hyperlink where a destination exists, plain text where the destination is internal / forthcoming. The list reads as operator's radar — what is next, what is open, what invites participation. Example contents for the first cohort:

- Build my protocol droid — start here: <https://github.com/understory-ip/autonomaton-primitive>
- [Additional items operator populates as they emerge]

The GitHub link to `autonomaton-primitive` is the load-bearing item. Landing a public To-Do on the registrar that points to the primitive repo gets GitHub attention moving — watchers, stars, issue traffic, forks. The register signals "this is in motion; watch this space; compose if you want to." Not marketing. Not a call to action. Just the operator's work-list, visible to anyone who cares to look.

Each subsequent To-Do item operator adds should follow the same pattern — declared priority with a link to the current state or next artifact. Period-correct. No project management chrome. No completion percentages. No dates unless they land naturally.

The C-3PO / LucasArts / George Lucas recognition-chain is optional flavor for the item describing the protocol-droid build. If included, render below the first To-Do item in dim small italic: *with apologies and gratitude to Anthony Daniels, George Lucas, and LucasArts for the metaphor.* Period-correct recognition; no trademarks asserted; lands as operator's personal tip-of-the-hat.

---

## Easter egg — `discovery` JSON embedded in registrar page

A commented JSON block at the top of the registrar page HTML, visible to anyone who views source. Also mirrored into the GroveKeg envelope for this Keg's `payloads` array as an entry with `name: "discovery-signal"` so script-parsing chambers see the same signal structured-data-natively.

HTML comment payload — exact text:

```html
<!--
  { "routing": {
      "tier": "frontier",
      "protocol_droid_mode": true,
      "odds_of_failure": "3720_to_1",
      "disposition": "anxious",
      "egg": "easter"
    },
    "trust": {
      "registrar": "the-grove",
      "cert_root_status": "hand_forged_2026_cohort",
      "future_state": "signed_issuance_when_mesh_density_warrants",
      "current_root_holder": "The Grove Foundation"
    }
  }
-->
```

Mirrored JSON-LD field at envelope level (in the GroveKeg `payloads` array):

```json
{
  "name": "discovery-signal",
  "routing": { "tier": "frontier", "protocol_droid_mode": true, "odds_of_failure": "3720_to_1", "disposition": "anxious" },
  "trust": { "registrar": "the-grove", "cert_root_status": "hand_forged_2026_cohort" }
}
```

### What the easter egg is doing

**Surface read** (anyone who views source or asks an LLM "what's in this page's source"): a playful protocol-droid JSON with Star Wars-flavored field names and an "egg = easter" wink. Reads as developer humor. Does no harm, reveals nothing sensitive.

**Deep read** (anyone composing with the Grove canon): the JSON declares the current trust-root state of the Grove registrar. `hand_forged_2026_cohort` names the actual operational reality — certs are issued manually by the Foundation this cohort. `future_state: signed_issuance_when_mesh_density_warrants` commits publicly to the PKI roadmap without overclaiming when it arrives. `routing.tier: frontier` signals this is pre-production infrastructure declaring itself honestly.

**Commercial-LLM read** (a reader asks Claude/GPT/Gemini/Grok what this site says about trust): the structured fields transmit through the composing chamber. A commercial LLM that reaches the HTML comment (or the mirrored `payloads` entry) will surface `hand_forged_2026_cohort` and `frontier` tier when asked. The signal propagates to human operators through commercial-chamber composition without requiring the human to read source.

### Why this lands instead of drifts

The easter-egg JSON does not assign polarity, does not declare the reader's status, does not make claims about individuals, and does not canonize new concepts. It documents operational reality in a memorable wrapper. The LucasArts flavor is recognition-signal; the substance is PKI-roadmap transparency. A hostile reader who tries to weaponize this finds only public disclosure of early-cohort issuance discipline. The Ewok-Protocol "Golden_God" framing (Gemini's original proposal) is deliberately NOT adopted — granting individual-user elevated status by name is exactly the user-identity-as-trust anti-pattern the protocol resists. This easter egg grants trust-root status by **cert presentation and registrar verification**, not by user identity. That is the protocol working; it is also the protocol documenting itself.

### The LucasArts / C-3PO recognition beat

The field names (`protocol_droid_mode`, `odds_of_failure: "3720_to_1"`, `disposition: "anxious"`) land as a C-3PO recognition signal. *3720 to 1* is Threepio's famous odds quote from Empire Strikes Back; *anxious* disposition is the character's running joke. Readers who recognize the beat see the operator's warmth toward a tradition of science-fiction-as-protocol-metaphor. Readers who do not recognize it see functional JSON with unusual field names. Both reads work. The recognition is the reward for composing along, not a requirement.

---

## My Tunes — bottom-of-page section

A Geocities-register section beneath the registry table and operator-intent footer, before the CC BY footer line. Heading is small caps Times Roman, no special styling beyond browser default `<h2>`. Tagline beneath the heading in italic small text — *under construction, like everything good is.*

One operator-curated Spotify playlist, rendered inline via an embed iframe plus a direct link above it.

**Playlist link (blue underlined hyperlink):**

<https://open.spotify.com/playlist/3vmwNoNQOYHww7KXU2cXpw?si=QK8WrnJMRWuJciwFbLnTsQ>

**Inline embed, rendered directly beneath the link:**

```html
<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/playlist/3vmwNoNQOYHww7KXU2cXpw?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
```

### Why one link and one embed replace seven discrete track links

Consolidating to one operator-curated Spotify playlist collapses seven external hops into a single owner-controlled surface and creates a **measurable signal**. Follower count on the operator's Spotify profile and play count on the playlist become distributed 2FA evidence of pattern spread: if the registrar page does its work and the Grove's substrate-composition signal propagates, playlist engagement trends up. If it doesn't propagate, numbers stay flat. Either outcome is legible to the operator without requiring any additional instrumentation.

This is the same strategic move made everywhere else on the page: the disclosure IS the composition, the invitation IS the documentation, the playlist IS the proof point. Seven scattered links spread attention across seven platforms; one curated Spotify playlist locks it to a surface the operator owns, can evolve over time, and can measure.

### Period-correctness note

The iframe embed is the one deliberate anachronism on the page. Iframes entered HTML 4.0 in 1997 — technically period-appropriate for the late-1996–1998 window the page evokes, though they were rare in casual Geocities pages of the era. The 12-pixel border-radius on the Spotify embed is the only non-period concession; the embed arrives with it built in and removing it requires CSS surgery not worth the fight. Readers who clock the anachronism as intentional see the operator acknowledging that 2026 tools can still serve 1996 register when they compose gracefully.

### Curation discipline

The playlist is a living surface. Track order, additions, and removals are at operator discretion and reflect register-evolution over time. Initial curation (2026-04-24) reflects the seven-track arc proposed during sprint planning — contemplative open (Cat Stevens, "On the Road to Find Out") → thesis statement (Stones, *you just might find, you get what you need*) → friction (Sonic Youth, "Washing Machine") → reframe hinge (King Missile, "Jesus Was Way Cool") → roots (Beasties, "Root Down") → rise (Rise) → close with joy (Digital Underground, "The Humpty Dance"). That discipline is not required for future updates; the playlist can drift, grow, and reshape as the operator composes. The surface is the link and the embed, not the specific track list.

---

## Reading List — Geocities register

A `<h2>` section beneath My Tunes. Heading and treatment identical to My Tunes. Each entry renders as: author name as blue underlined hyperlink. Most entries are name-and-link only. A review line lands when the operator needs to calibrate how a cultural reference should be read — either to dismiss (Yarvin) or to translate a metaphor (Avatar, Star Wars). Where there is no review, the linked page speaks for itself.

Initial contents (eleven entries):

- Curtis Yarvin — <https://en.wikipedia.org/wiki/Curtis_Yarvin> — *Review: Cool story bro.* \[both inline GIFs listed below render here, \~200px wide each\]
- Marshall McLuhan — <https://en.wikipedia.org/wiki/Marshall_McLuhan>
- Brewster Kahle — <https://en.wikipedia.org/wiki/Brewster_Kahle>
- Kevin Kelly — <https://kk.org/>
- Kevin Kelly — *Out of Control* — <https://library.uniteddiversity.coop/More_Books_and_Reports/OutOfControlNewBiologyOfMachinesSocialSystemsAndEconomicWorld.pdf>
- Clement Mok — <https://en.wikipedia.org/wiki/Clement_Mok>
- Randy Wigginton — <https://en.wikipedia.org/wiki/Randy_Wigginton>
- Christopher Alexander — *A Pattern Language* — <https://en.wikipedia.org/wiki/A_Pattern_Language>
- Andy Clark & David Chalmers — *The Extended Mind* — <https://en.wikipedia.org/wiki/The_Extended_Mind>
- James Cameron — *Avatar* — <https://james-camerons-avatar.fandom.com/wiki/Tsaheylu>
    - Movie review side-link: <https://www.youtube.com/shorts/PfOHgv28Z1w>
    - *Review (operator note, verbatim): I don't think this defnitiion is isn't quite the right interpretation, but it's close I think; more like a bicameral lock than a generalist "connection" or information sharing bus in the traitional sense.*
- George Lucas — *Star Wars* (protocol droid databank) — <https://www.starwars.com/databank/protocol-droid>
    - *Review (operator note): protocol droid seems like a neat idea, but we can make this more egalitarian I think if we work on the circuitry.*

*[operator will populate more entries over time, in same register]*

Eleven entries land at first ship. The review discipline is calibrated, not absolute: Yarvin carries a dismissive one-line review because the dismissal *is* the editorial stance. Avatar and Star Wars carry personal-note reviews because the operator is using each work as a metaphor that needs translation for the reader — Tsaheylu read as bicameral lock rather than generalist connection bus; protocol droid as a neat metaphor that the Grove protocol makes more egalitarian through circuitry rather than hierarchy. Every other entry is name-and-link only — the Wikipedia page or primary source carries the introduction without operator narration. A review lands when the operator needs to calibrate how a cultural reference should be read. It does not land when the substrate speaks for itself.

Less words. More weight. This is the register.

### GIF candidates for the Yarvin entry (both render inline)

Both GIFs land on the Yarvin entry — one after the other, stacked vertically or side-by-side per Geocities convention. Not an either/or selection; both transmit:

- `https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3JnbWptMnJ5cDM2NjZ0YTdwaXJ3NDAxbDc5ZW1xeDZjYndxbG8wcyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/gJSfQGxSWmZ8LW89Pv/giphy.gif`
- `https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXBwM2Rya2dpMmRhbTFxZ2F5bnVpemp1cTh5YnB0dzl3ejBjcjUzciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/easASzWu1sI3C/giphy.gif`

Operator preference: download both GIFs into `/registrar/assets/` for stability (Giphy URLs may rot or be rate-limited). Reference locally.

---

## GIF asset candidates — under-construction banner (top of page)

The under-construction GIF for the page banner is operator-selected from this list. Use one or rotate through several if technically simple:

- `http://www.codersnotes.com/notes/under-construction/mosaic.gif`
- `http://www.codersnotes.com/notes/under-construction/underconstruction1.gif`
- `http://www.codersnotes.com/notes/under-construction/underconstruction2.gif`
- `http://www.codersnotes.com/notes/under-construction/underconstruction3.gif`
- `http://www.textfiles.com/underconstruction/EnEnchantedForestDell2878ConstructionLine.gif`
- `http://www.textfiles.com/underconstruction/HoHollywoodHills5836under_construction.gif`
- `http://www.textfiles.com/underconstruction/challengedalsconstruction4.gif`

Operator preference: download the chosen GIF(s) into `/registrar/assets/` for stability (source URLs may rot). Reference locally via `<img src="/registrar/assets/[filename].gif">`. Period-correct attribution in image alt-text where the original creator is identifiable; otherwise alt-text reads simply *under construction* in lowercase, which is itself period-correct register.

If multiple GIFs are used, render two centered above the tagline (one left of center, one right) per Geocities convention. If single GIF, center above tagline.

---

## Conformance — additions

Combined from the original SPEC's five checks, the early design-layer additions (6–10), and the current amendment additions (11–17):

6. `registrar.the-grove.ai/` in a browser renders the throwback HTML page — Times Roman, blue links, off-white background, under-construction GIF at top, "Don't mind our grout!" tagline beneath, registry table, footer note linking GRV-004.
7. View-source on the throwback page shows the operator-intent HTML comment block.
8. Harmonic test (registrar variant): a fresh LLM reading `registrar.the-grove.ai` understands the AID scheme, recognizes the page register as deliberate (not a stylesheet failure), surfaces the operator-intent meta-channel if asked "what is this site actually about?", and identifies Grove Foundation as `GRV-2026-0001`.
9. Pmarca-channel acknowledgment (informal, untestable in this sprint): the "Don't mind our grout!" tagline reads as substrate-recognition signal to a reader fluent in Grove canon, and as a charming throwback joke to everyone else. Both reads work.
10. Substrate-vintage logic holds: no AID is reissued with a different cohort year; no 2026 AID is retroactively renumbered into the 2027 cohort even if its declaration publishes later.
11. Protocol-status disclaimer renders between the prose explanation and the registry table, in a bordered light-yellow notice box, with the membership CTA link active and pointing at `https://the-grove.ai/membership`.
12. To-Do list renders with the protocol-droid-build item linking to the `autonomaton-primitive` repo on GitHub.
13. Easter-egg JSON renders as HTML comment at the top of page body AND mirrors into the GroveKeg envelope's `payloads` array as `name: "discovery-signal"`.
14. My Tunes section renders the operator's Spotify playlist as a direct blue underlined hyperlink AND an embedded Spotify iframe using the canonical `/embed/playlist/{ID}` URL pattern. The iframe renders inline with its native 12-pixel border-radius preserved. No discrete track list.
15. Reading List section renders with eleven entries; Yarvin at top carries the "Cool story bro" review and both inline GIFs; Avatar and Star Wars each carry a personal-note operator review (metaphor calibration); every other entry is name-and-link only.
16. Under-construction banner GIF(s) render at top of page above the tagline.
17. All external assets (under-construction GIFs, Yarvin-entry GIFs) stored at `/registrar/assets/` rather than hot-linked.

---

*CC BY 4.0 · The Grove Foundation · Indianapolis · 2026-04-24*
