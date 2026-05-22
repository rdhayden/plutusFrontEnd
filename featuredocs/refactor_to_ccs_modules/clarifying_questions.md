# Clarifying Questions — Refactor CSS to CSS Modules

## Scope of inline styles
1. Components in this codebase use a mixture of CSS (in `globals.css`) and extensive inline `style={{...}}` props directly on JSX elements. Should this refactor also migrate inline styles to CSS modules, or is it limited to moving existing CSS class-based styles out of `globals.css` into per-component modules?

## globals.css — what stays?
2. `globals.css` currently contains reset rules (`* { box-sizing: border-box }`, `body {...}`) and typography utility classes (`.heading-1`, `.heading-2`, `.body-1`, `.body-2`). These are used across multiple components. Should they stay in `globals.css` (as genuinely global styles), or should they be re-expressed as shared module exports / Tailwind utilities?

## Design tokens
3. `design-tokens.css` defines all CSS custom properties (`--color-*`, `--inset-*`, `--space-*`, etc.). This file is imported by `globals.css`. Should it remain untouched as a global token sheet, or should tokens also be restructured as part of this work?

## Tailwind usage
4. The codebase imports Tailwind (`@import "tailwindcss"` in `globals.css`) but components appear to use very few Tailwind utility classes directly (mainly the typography classes like `.heading-3`, `.body-2` on elements). Should Tailwind utilities be left as-is, replaced by CSS module classes, or is Tailwind usage out of scope for this refactor?

## One module per component file, or per feature?
5. Should there be a strict 1:1 mapping of CSS module to component file (e.g. `SearchResults.module.css` for `SearchResults.tsx`), or is grouping related components into a shared module acceptable (e.g. a shared `Layout.module.css` for header/sidebar)?

## Naming convention for CSS module classes
6. CSS modules use local scoping, so class names don't need to be globally unique. Should we follow camelCase (`tabBar`, `closeBtn`) as already established in `ChartTabBar.module.css`, or is a different convention preferred?

## Priority / ordering of components
7. There are approximately 10 components in `src/components/`. Should they all be migrated in a single pass, or should there be a priority order (e.g. largest/most complex components first, or smallest/simplest first to establish the pattern)?

## Acceptance criteria for "done"
8. What does completion look like — is the goal that `globals.css` contains only the reset and token import (no component-level class definitions), with all component styles living in their own modules? Or is some residual shared CSS in `globals.css` acceptable?
