# Engineering Portfolio — Agent Guide

## Purpose
Build Marcos Vissio's bilingual, professional engineering portfolio. The repository—not agent memory or a provider-specific tool—is the source of truth.

## Principles
Prefer simplicity, maintainability, type safety, accessibility, security, testability, and clear developer experience. Add scale, infrastructure, and dependencies only when justified. Do not invent professional facts; mark unverified information explicitly.

## Session start
Before changing work, read `AGENTS.md`, `docs/context/project-state.md`, `docs/context/active-task.md`, and `docs/context/handoff.md`; inspect Git status; then review applicable requirements and ADRs. Verify documentation against the repository.

## Workflow
Work one approved milestone at a time. Define objective, scope, and acceptance criteria before implementation. Keep changes focused; do not overwrite unrelated or existing progress. Run relevant checks and report only checks actually executed.

## Documentation
Requirements and product direction belong in `docs/product/`; architecture in `docs/architecture/`; engineering practice in `docs/engineering/`; continuity in `docs/context/`. Avoid duplicate content; link to the canonical document.

## Decisions
Create an ADR for consequential, durable choices. Use `docs/architecture/decisions/NNNN-title.md` with context, decision, alternatives, trade-offs, consequences, and status. Do not rewrite accepted ADRs; supersede them with a new ADR.

## Checkpoints and handoff
After each meaningful checkpoint, update `active-task.md` with completed and remaining work plus verification; update `project-state.md` when state changes; and refresh `handoff.md`. A handoff must state objective, branch, checkpoint, work complete/pending, relevant files, decisions, verification, blockers, and next action. The receiving agent must independently verify it.

## Detailed references
See `docs/engineering/conventions.md`, `docs/engineering/testing-strategy.md`, and the product/architecture documents for project-specific guidance.
