# Project rules

Portfolio site: React 18 + Vite + Tailwind CSS v4, client-side routes via react-router-dom.

## Styling
- Always use Tailwind utility classes instead of inline `style={{}}` props, wherever Tailwind can express it.
- Do not create new `.css` files for new components. Style new work with Tailwind classes only.
- Existing plain CSS files (`App.css`, `components/CursorTrail.css`, `components/FooterPhysics.css`, `work/runbooks/CaseStudyRunbooks.css`) are legacy — leave them as-is. Don't migrate them to Tailwind unless explicitly asked.
- Shared design tokens (colors, fonts, spacing) live in CSS custom properties at the top of `src/index.css`. Reuse those tokens (via Tailwind's arbitrary value syntax, e.g. `text-[var(--color-x)]`) rather than hardcoding new colors/fonts.
- Only use inline styles for values that must be computed at runtime (e.g. dynamic transforms from JS physics/animation state, like in `CursorTrail.jsx` / `FooterPhysics.jsx`).

## Component structure
- Functional components with hooks only — no class components.
- One component per file; file name matches the component name (e.g. `CaseStudyRunbooks.jsx`).
- Co-locate a component's assets (images/video) in an `assets/` folder next to it, as done in `work/runbooks/`.
- New case-study/work pages follow the pattern in `work/runbooks/`: a folder under `src/work/` containing the component and its own `assets/`.

## Code style
- Default to no comments. Only comment non-obvious logic (a workaround, a hidden constraint) — not what the code visibly does.
- Keep `// EDIT:`-style comments only where they mark genuine "swap this content" spots for future edits (matches existing convention in `App.jsx`).
- Prefer named, descriptive props/variables over abbreviations.

## Workflow
- After a UI/styling change, run the dev server (`npm run dev`) and check the result before saying the task is done.
- Don't run `npm run build` / touch the `dist/` folder unless asked — it's a build artifact.
- Don't add new dependencies without checking first.
