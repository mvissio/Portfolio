# Active Task

**Task:** Milestone 3 — Portfolio redesign and functional labs

## Objective

Replace the introductory, skills-led landing page with a work-led portfolio and launch the first interactive, public-safe engineering lab.

## Status

Implemented locally; awaiting owner review and publication approval.

## Scope and acceptance criteria

- Present a clear senior full-stack / architecture / technical-leadership proposition within the first viewport.
- Prioritize selected work and a functional architecture demonstrator over generic technology lists.
- Keep the English and Spanish routes accessible, responsive, and free of unverified employer, client, metric, or outcome claims.
- Implement a keyboard-operable scenario selector whose visible system design and decision rationale change together.
- Retain a deliberate place for owner-approved case studies and future functional labs.

## Completed

- Initialized Next.js 16, React 19, strict TypeScript, and Tailwind CSS 4.
- Implemented responsive, accessible static home routes in English (`/`) and Spanish (`/es`).
- Added a project-owned visual foundation and route metadata without publishing unverified professional claims.
- Recorded ADR 0002 confirming the concrete MVP stack.
- Added a Vitest and Testing Library baseline for the English and Spanish routes.
- Configured static export and a GitHub Pages workflow that runs tests, linting, and production build before deployment.
- Verified the public GitHub remote `mvissio/Portfolio`; its `main` branch is still at the initial documentation commit and does not yet contain the workflow.
- Added a bilingual, data-backed positioning draft and target role families for Senior Full Stack, Software/Application Architecture, and hands-on Technical Leadership.
- Recorded market-calibrated role recommendations and evidence gaps without adding employers, metrics, or confidential case details.
- Added a bilingual technical-focus map based on the owner-provided technical-strength summary.
- Replaced the generic, skills-led landing page with a work-led bilingual design focused on proposition, selected work, and visible technical judgment.
- Added the interactive Architecture Trade-off Simulator with three keyboard-operable product scenarios. Each scenario changes the displayed challenge, design decision, system flow, and optimization properties.
- Kept the first demonstrator clearly labelled as a public functional lab, rather than representing it as client or employer work.
- Updated route tests to cover the new proposition, practice areas, language links, and scenario interaction.
- Replaced the static hero diagram with an accessible, bilingual Portfolio Map. Visitors can inspect planned Portfolio, Case Study, Live App, Architecture Lab, and AWS Pattern paths without leaving the page.
- Added interaction coverage for the Portfolio Map in English and Spanish.
- Re-ran `npm run test`, `npm run lint`, and `npm run build` successfully.

## Remaining

- Review and approve or edit the new visual direction and proposition.
- Commit and push the redesign; the existing GitHub Actions workflow will publish it to GitHub Pages.
- Provide public-safe details for the first professional case study or select the next functional lab to build (the Delivery Signal Board is currently only a planned slot).
- Build the next approved route: either a public Cloud Apps index with a real demo, or a first AWS Pattern page with public-safe technical material.
- Add approved experience, case-study, and contact content only after its exact wording and publication scope are confirmed.

## Verification

- `npm run test` passed: 10 tests across 2 route suites.
- `npm run lint` passed.
- `npm run build` passed and statically generated `/` and `/es`.
- Production static build generated `/` and `/es` successfully.
- The sandbox could not bind a separate production-preview port. An existing local preview was still serving the old committed foundation, so visual review of this uncommitted revision should happen after refreshing/restarting the local server or via the post-push GitHub Pages deployment.
