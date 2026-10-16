# ADR 0002: Confirm MVP frontend stack

- **Status:** Accepted
- **Date:** 2026-10-16

## Context

ADR 0001 proposed a static-first Next.js, React, and TypeScript approach, subject to implementation-time confirmation. The first local application foundation now needs a concrete, minimal toolchain that supports static public routes, typed content, accessible UI, and a future bilingual structure.

## Decision

Use Next.js 16 with the App Router, React 19, TypeScript in strict mode, and Tailwind CSS 4. Keep the application client-light and static-first. Use local, version-controlled content; do not add a CMS, API, database, authentication, analytics, or component-library dependency in the MVP foundation.

## Alternatives

- A plain React SPA: viable, but less aligned with a static, content-first portfolio and route-level metadata.
- A separate frontend plus API: adds operational boundaries without an approved dynamic requirement.
- A visual component library: can improve speed, but would impose a design vocabulary before the visual direction is approved.

## Consequences

- The app has static English (`/`) and Spanish (`/es`) foundation routes.
- Tailwind utility styles are available, while the initial design uses a small project-owned stylesheet.
- The content model must continue to enforce the verification rules in `docs/product/content-inventory.md` before professional details are rendered.
- New runtime services need a new ADR and an approved use case.
