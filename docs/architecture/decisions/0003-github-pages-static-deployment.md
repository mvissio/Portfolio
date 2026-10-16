# ADR 0003: Deploy the static portfolio through GitHub Pages

- **Status:** Accepted
- **Date:** 2026-10-16

## Context

The portfolio has no approved server-side requirements. A static host keeps operational complexity and recurring costs low while matching the static-first architecture.

## Decision

Build the Next.js application with `output: "export"` and publish the generated `out/` directory through a GitHub Actions workflow to GitHub Pages. The workflow runs tests, linting, and the production build before uploading the Pages artifact.

The Next.js configuration derives a `basePath` only during GitHub Actions builds of project sites, so it supports both `owner.github.io` and `owner.github.io/repository` URLs without changing local development paths.

## Consequences

- The application must remain compatible with static export.
- Server-only features, request-dependent behavior, and default Next.js image optimization are not available without changing the hosting strategy.
- GitHub Pages must be set to use **GitHub Actions** as its publishing source before the workflow can deploy.
- No deployment is triggered until this configuration is committed and pushed to the configured branch.
