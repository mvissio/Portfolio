# ADR 0001: Start with a static-first TypeScript web portfolio

- **Status:** Accepted for MVP direction; revalidate before implementation
- **Date:** 2026-10-16

## Context

The initial portfolio is content-led and must be bilingual, accessible, performant, maintainable, and easy for multiple agents to continue. No approved requirement yet needs accounts, mutable shared data, a database, or server-side business workflows.

## Decision

Use Next.js with React and TypeScript as the proposed MVP frontend. Prefer static rendering and version-controlled content (MDX and/or typed data modules). Consider Tailwind CSS for styling. Keep the Architecture Lab as a later, isolated interactive capability. Do not add a backend, database, cache, monorepo, or cloud infrastructure in the MVP without a concrete requirement.

## Alternatives

- SPA-only React: viable, but gives less direct support for static SEO-oriented content delivery.
- Separate frontend and NestJS API: unnecessary operational and implementation complexity at MVP.
- CMS-first architecture: allows non-code editing but adds vendor, modeling, and workflow overhead before content volume justifies it.
- Full cloud/microservices platform: disproportionate to the initial product.

## Trade-offs

Repository-managed content requires a development workflow for edits. Static-first capabilities may need later evolution for forms, analytics, AI, or editorial publishing. Next.js is a framework commitment, though the UI and content remain portable TypeScript/MDX assets.

## Consequences

The first implementation should initialize only the frontend and quality tooling needed for the approved MVP. Future dynamic capabilities require an ADR or an explicit amendment to this decision.
