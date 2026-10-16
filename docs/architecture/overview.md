# Architecture Overview

## Recommendation

Start with a static-first web application: Next.js, React, and TypeScript, with content held in version-controlled MDX/data modules. Tailwind CSS is a pragmatic styling candidate, subject to implementation-time confirmation. This is documented in [ADR 0001](decisions/0001-static-first-portfolio.md).

## Why this shape

The MVP is content-led and does not justify a backend, database, cache, monorepo, or cloud platform. Static rendering supports performance, low operational cost, and straightforward accessibility/SEO work. Repository-based content keeps the work portable across AI agents and reviewable in Git.

## Boundaries

- UI: accessible components, responsive layouts, bilingual presentation.
- Content: English and Spanish source content plus explicit verification metadata where required.
- Future Architecture Lab: isolated interactive client components; consider React Flow only when diagram requirements validate it.
- Future services: evaluate a backend, database, CMS, analytics, or AI capability only against an approved use case, privacy/security needs, and ongoing operating cost.

## Deferred technology

NestJS, PostgreSQL, Redis, Nx, AWS-specific services, Kubernetes, and a separate API are not part of the MVP architecture. React Flow, MDX, and Tailwind are candidates, not installed dependencies.

## Quality attributes

Accessibility, performance, maintainability, content integrity, bilingual consistency, and minimal operational complexity are first-order concerns. See engineering conventions and testing strategy for working rules.
