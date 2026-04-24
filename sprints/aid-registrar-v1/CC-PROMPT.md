# CC Prompt — AID Registrar Fixture v1

This is Stage 4. You are an Autonomaton. Act like one.

## Context

You are executing the **AID Registrar Fixture v1** sprint against the `grove-launch-site` repo at `C:\GitHub\grove-launch-site`. The canonical specification is at `sprints/aid-registrar-v1/SPEC.md`. Read it before anything else. Compose against the SPEC, not against this prompt.

This is a fixture sprint — small, coherent, composes-with-existing-infrastructure. Five files touched. Zero scope creep.

## Constraints

- **Plan before acting.** State your plan in a single message, list every file you will touch, and wait for operator approval before writing anything.
- **Work in chunks.** Surface your approach for each surface before executing it.
- **No silent failures.** If anything is ambiguous — a path, a naming convention, a pattern choice — stop and ask. Don't guess.
- **Stop before deploy.** The operator runs `npx vercel --prod --yes` manually from CMD.
- **Respect existing patterns.** Search the repo for existing conventions around `.well-known` files, JSON-LD blocks, subdomain handling, and page design before writing anything new. Don't reinvent.

## What you will build

Read `sprints/aid-registrar-v1/SPEC.md` for the full specification. Summary of surfaces:

1. **Create** `/public/.well-known/grove-registry.json` — ten rows per SPEC. Slots 0002 through 0008 are reserved with null recipient fields (no names, no domains). Take Flight at 0009. imarobot at 0010.

2. **Update** `/public/.well-known/grove-autonomaton.json` — add `autonomaton_id` and `registry` fields only. Preserve all other content.

3. **Create** `/app/registrar/page.tsx` — human-readable page. Exact cohort telegraph copy per SPEC. Registry rendered as a table. Matches existing site design system (`#080808`, amber accents, Fragment Mono / Instrument Serif / DM Sans).

4. **Configure** Vercel so `registrar.the-grove.ai/` serves the registry JSON directly with `Content-Type: application/json`. Choose the pattern (vercel.json rewrite with host matching, or Next.js middleware.ts) based on what's already in the repo. Surface your choice before writing.

5. **Add** a JSON-LD Declaration block to `/app/registrar/page.tsx` marking it as a conforming bicameral Keg per SPEC Surface 5.

## Before you write — required preamble

Respond with:

1. A repo scan summary: Next.js version (app router vs pages), existing `.well-known` file patterns, existing JSON-LD block patterns, existing `vercel.json` or `middleware.ts` state, existing page design patterns to model `/app/registrar/page.tsx` after.
2. Your chosen pattern for the subdomain routing (vercel.json rewrite vs middleware), with rationale tied to what already exists in the repo.
3. A concrete five-surface plan listing exact file paths you will create or edit.
4. Any ambiguities requiring operator input before execution.

**Wait for operator approval before touching any file.**

## Conformance — verify before handoff

- All five surfaces exist and are locally coherent
- `grove-registry.json` has exactly ten rows, validates as JSON, and reserves slots 0002–0008 with null recipient fields
- `/app/registrar/page.tsx` renders without TypeScript errors in local build
- JSON-LD block parses
- Subdomain routing config composes cleanly with any existing Vercel or middleware config
- No unrelated changes

## Handoff — final response should include

- Summary of files touched (paths only)
- Any judgments you made without operator input (flag them explicitly for review)
- Reminder: operator runs `npx vercel --prod --yes` from CMD (not PowerShell)
- Post-deploy verification checklist from SPEC conformance section, in runnable form

**Do not deploy. Do not run `vercel --prod`. Stop at the deploy gate.**
