## Quick summary

This is a small, static single-page portfolio/resume site (no build step). Primary files:

- `index.html` — single-page UI, uses Tailwind via CDN, Font Awesome and Google Fonts. Contains the inline Tailwind config and the DOM structure (nav, timeline, skills, projects, footer).
- `main.css` — small handcrafted overrides and theme-aware styles (timeline, skill states, dark selectors).
- `scroll.js` — client-side behaviour: theme toggle, mobile menu, and skill highlighting logic.

Read these three files first to understand the app flow.

## Big picture / architecture

- Single-page static site. No backend, no bundler, no package.json. Delivery is simply the static files served over HTTP.
- Presentation: Tailwind utility classes in `index.html` provide layout and spacing. `main.css` adds component-level styles (timeline line, item bullets, highlight/dim states).
- Interaction: `scroll.js` wires UI -> state through DOM and data attributes:
  - Skill buttons: `.skill-tag` with `data-skill="..."`
  - Highlightable content: `.highlightable` with `data-skills="space separated list"`
  - `scroll.js` toggles `active`, `highlighted`, and `dimmed` classes on those elements and persists theme using `localStorage` key `theme`.

## Conventions and patterns (important to follow)

- Data-driven highlighting uses `data-skill` (single token) and `data-skills` (space-separated tokens). Example: a project card has `data-skills="aspnet rest docker"`; a skill tag is `<button class="skill-tag" data-skill="docker">Docker</button>`.
- Dark mode is controlled by adding/removing the `dark` class on the root `<html>` element. `main.css` uses `.dark` selectors (e.g. `.dark .timeline-line`). The JS stores preference in `localStorage` under `theme`.
- Tailwind is included from CDN and configured inline (see the small script in the `<head>`). If you need to change theme colors, update the inline `tailwind.config` in `index.html` — do not move the config above the CDN script or it will not be picked up.
- Keep visual tweaks in `main.css` where global/component styles live. Preserve utility-first markup in `index.html` instead of inlining many new CSS rules.

## Developer workflows (how to run, debug, and iterate)

- Preview locally (recommended) from project root:

  - Open default browser to the file (quick):
    Start-Process .\index.html

  - Run a simple HTTP server (recommended to avoid any file:// quirks):
    - If Python is available:
      python -m http.server 8000
      # or (Windows launcher):
      py -m http.server 8000
    - If Node.js is available and you prefer npm tooling:
      npx http-server -p 8000

- Debugging tips:
  - Use browser DevTools Console to catch JS errors (missing IDs or broken selectors will throw on load).
  - Look for these keys/selectors when tracing behaviour: id="skills-container", class="skill-tag", class="highlightable", id="theme-toggle", localStorage['theme'].
  - When adding a new skill or project, ensure `data-skills` is space-separated and matches the `data-skill` tokens exactly.

## What to change and where (concrete examples)

- Add a new skill tag: edit `index.html` -> inside the element with id="skills-container" add
  `<button class="skill-tag" data-skill="graphql">GraphQL</button>`

- Add a new project that highlights against skills: add a `.highlightable` element and include `data-skills="aspnet graphql rest"`.

- Tweak colors (Tailwind theme): edit the inline `tailwind.config` script in `index.html`. Example keys: `colors['primary-light']` / `colors['primary-dark']` are already present.

## External dependencies & integration points

- CDN resources (live network required):
  - Tailwind CDN (configured inline)
  - Font Awesome CSS
  - Google Fonts (Inter)

If editing for an offline environment or converting to a build pipeline, you'll need to replace CDN usage with local assets and add a build (PostCSS/Tailwind CLI).

## Pitfalls found in the repo (things an AI agent should NOT do)

- Don't assume a Tailwind build pipeline exists — there is none. Editing utility classes in `index.html` is safe. Introducing a build step is a larger change and should be proposed separately.
- `scroll.js` expects certain IDs/classes on DOM elements (example: `skills-container`). Renaming those without updating the JS will break interaction.
- `data-skills` is split by space in JS (`dataset.skills.split(" ")`). Avoid commas or other separators.

## Files to open first (short checklist)

1. `index.html` — structure, inline Tailwind config, DOM ids and data-attributes
2. `scroll.js` — event wiring, localStorage key `theme`, and highlighting algorithm
3. `main.css` — theme-aware CSS and visual tokens (`.timeline-line`, `.timeline-item::before`)

If anything above is unclear or you want a different level of detail (more examples, tests, or a migration plan to a Tailwind build pipeline), tell me which parts to expand.
