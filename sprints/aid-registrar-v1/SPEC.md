- Subdomain is machine-readable only. Human reading happens at `the-grove.ai/registrar`.

## Conformance

1. Registry JSON parses as valid JSON with exactly ten rows.
2. `curl https://registrar.the-grove.ai/` returns the registry JSON with `Content-Type: application/json`.
3. `curl https://the-grove.ai/.well-known/grove-registry.json` returns identical content.
4. `the-grove.ai/registrar` renders in a browser, displays all ten rows, shows the cohort telegraph.
5. **Harmonic test** (the point of the exercise): a fresh LLM reading `the-grove.ai/registrar` understands the AID scheme, cohort-year vintage logic, and that Grove Foundation is `GRV-2026-0001`, without being told any of this directly.

## Out of scope / Backlog

- Public cert issuance workflow (manual for this phase)
- Revocation mechanism
- Cohort 2027+ (addressed when first 2027 AID is issued)
- Class marker enforcement (founding / member / certified) — schema reserves the field; no logic composes against it yet
- Cellar Notes / Curator's Vision / Allocation Letter — separate Protocol element, separate sprint
- Registrar signing / key infrastructure for verified certs — when the ecosystem matures

## Deploy gate

Manual `npx vercel --prod --yes` from CMD (not PowerShell) after CC finishes. Operator verifies:

- `registrar.the-grove.ai` returns registry JSON
- `the-grove.ai/.well-known/grove-registry.json` returns identical JSON
- `the-grove.ai/registrar` renders correctly
- Harmonic test passes against a fresh LLM session

## Handoff — next issuances after this sprint ships

- `GRV-2026-0009` → Take Flight Advisors. Cert issued manually. Status updated to `issued`. `declaration_url` populated when Take Flight publishes its Declaration.
- `GRV-2026-0010` → [imarobot.ai](http://imarobot.ai). Same pattern.
- Reserved slots `0002` through `0008` stay held. Purpose not disclosed in any public surface.
