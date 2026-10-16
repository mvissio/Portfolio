# Engineering Conventions

## General

- Use TypeScript with strictness enabled; avoid `any` unless a documented boundary requires it.
- Favor small, cohesive modules and explicit interfaces over premature abstractions.
- Keep content, presentation, and domain logic separate enough to evolve independently.
- Use English for code, identifiers, commit messages, and technical documentation unless a document is intentionally localized.

## UI and accessibility

- Build semantic HTML first; preserve keyboard operation, visible focus, readable contrast, and meaningful labels.
- Respect responsive layouts and reduced-motion preferences.
- Do not encode user-facing copy directly in components when it belongs in the bilingual content layer.

## Security and privacy

- Do not commit credentials, private contact data, or unapproved résumé assets.
- Validate untrusted input at the boundary when interactive features are introduced.
- Treat AI and third-party integrations as explicit future design decisions with privacy review.

## Git and changes

- Keep changes scoped to the approved milestone.
- Inspect existing work before modifying it; do not overwrite another agent's changes.
- Use descriptive, atomic commits when the owner asks to commit. Do not commit automatically.
- Update context documents at meaningful checkpoints.
