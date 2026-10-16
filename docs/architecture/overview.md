# Architecture Overview

## Recommendation

The implemented foundation is a static-first web application using Next.js, React, TypeScript, and Tailwind CSS. Content remains in version-controlled data/modules as the project evolves. This direction is documented in [ADR 0001](decisions/0001-static-first-portfolio.md) and confirmed by [ADR 0002](decisions/0002-confirm-mvp-frontend-stack.md).

## Why this shape

The MVP is content-led and does not justify a backend, database, cache, monorepo, or cloud platform. Static rendering supports performance, low operational cost, and straightforward accessibility/SEO work. Repository-based content keeps the work portable across AI agents and reviewable in Git.

## Boundaries

- UI: accessible components, responsive layouts, bilingual presentation.
- Content: English and Spanish source content plus explicit verification metadata where required.
- Interactive architecture: isolated client components render the Architecture Trade-off Simulator and an accessible Portfolio Map. The map is code-native, keyboard-operable, bilingual, and does not require a diagram dependency. Consider React Flow only if a future application needs free-form graph manipulation.
- Future services: evaluate a backend, database, CMS, analytics, or AI capability only against an approved use case, privacy/security needs, and ongoing operating cost.

## Static hosting

The portfolio exports static assets to `out/` and includes a GitHub Actions workflow for GitHub Pages. See [ADR 0003](decisions/0003-github-pages-static-deployment.md). This configuration is local-only until the owner commits, pushes, and enables GitHub Actions as the repository's Pages source.

## Deferred technology

NestJS, PostgreSQL, Redis, Nx, AWS-specific services, Kubernetes, and a separate API are not part of the MVP architecture. React Flow and MDX are candidates, not installed dependencies. Tailwind CSS is installed as part of the application foundation.

## Quality attributes

Accessibility, performance, maintainability, content integrity, bilingual consistency, and minimal operational complexity are first-order concerns. See engineering conventions and testing strategy for working rules.
