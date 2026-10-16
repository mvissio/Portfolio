# Project State

**Last updated:** 2026-10-16

## Current state

Phase 0 through Milestone 2 are complete. Milestone 3, a work-led redesign with a public-safe functional lab, is implemented locally and awaits owner review, commit, and push. The repository is on `main` at `e4c97be` (`feat: add bilingual portfolio foundation`); the remote is deployed through GitHub Actions at `https://mvissio.github.io/Portfolio/`. It remains a static site with no backend, database, or managed cloud infrastructure.

## Established

- Product vision, audience, MVP boundary, roadmap, and professional-information verification rules.
- Agent-compatible workflow and handoff protocol.
- Proposed static-first architecture documented in ADR 0001.
- Repository ignores local IDE and common future build artifacts.
- MVP information architecture, content-verification register, and Milestone 1 backlog are defined as planning documents.
- Next.js 16, React 19, strict TypeScript, and Tailwind CSS 4 are installed. Static routes `/` and `/es` render a bilingual positioning draft without employer names, metrics, contact details, or case-study claims.
- Vitest and Testing Library provide eight tests for English and Spanish proposition copy, language links, practice areas, and the interactive lab's scenario state.
- `npm run test`, `npm run lint`, and `npm run build` pass. The current redesign statically generates `/` and `/es`.
- Static export and the GitHub Pages workflow are committed and active. The initial deployment succeeded from GitHub Actions; the live site reflects the previously committed foundation until the redesign is reviewed, committed, and pushed.
- A bilingual, work-led portfolio direction is rendered from `src/content/portfolio.ts`: a senior full-stack / architecture / hands-on leadership proposition, a selected-work area, and an interactive Architecture Trade-off Simulator.
- The Architecture Trade-off Simulator is a public-safe demonstrator with three selectable scenarios. It uses no client, employer, or confidential professional data.
- The hero now includes an interactive Portfolio Map linking the portfolio's planned evidence paths: portfolio overview, approved case studies, live apps, architecture labs, and AWS patterns. It currently explains these paths in place; dedicated routes are deliberately deferred until there is public-safe material to populate them.
- Career-positioning research and evidence boundaries are recorded in `resume-runs/2026-10-16-portfolio-positioning/`.

## Not established

No owner verification has been received for publication-sensitive professional details, contact destinations, or professional case studies. The final content model deliberately keeps those claims out until they are confirmed. The redesign's visual direction and functional lab await owner review.

## Source-of-truth warning

This record is a checkpoint. Receiving agents must check Git status and repository files before relying on it.
