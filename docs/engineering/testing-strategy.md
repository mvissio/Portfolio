# Testing Strategy

## Principle

Match verification depth to risk. Tests complement manual accessibility, responsive, content-integrity, and visual review; they do not replace them.

## MVP baseline (when implementation begins)

- Linting, type checking, and production build for every meaningful change.
- Unit tests for non-trivial utilities, transformations, and content-validation logic.
- Component/integration tests for critical interaction and language-selection behavior.
- Playwright E2E coverage for key visitor journeys once routes are stable.
- Manual keyboard, screen-reader-informed, responsive, and cross-browser smoke checks before release.

## Current baseline

- Vitest and Testing Library exercise the English and Spanish home-route propositions, language links, and the three core pillars.
- `npm run test` executes the suite once; `npm run test:watch` is available during local development.
- Browser-level and end-to-end coverage remain a later step once approved professional content and visitor flows are stable.

## Expectations

Name tests by behavior, keep fixtures minimal, and test public behavior rather than implementation details. New defects should receive a regression test when practical. Record exact commands and outcomes in `active-task.md` and `handoff.md`; never state that a check passed if it was not run.
