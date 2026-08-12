# AGENTS.md — Mohan Raaj Portfolio

Guidance for AI agents working on this repository.

## Project goal

Build a personal developer portfolio for **Mohan Raaj**.

The site should be simple to understand, easy for the owner to modify, and professional without visual noise.

## Technology constraints

Use **only HTML, CSS, and vanilla JavaScript**.

Do **not** introduce unless explicitly requested later:

- React, Next.js, or other SPA/meta-frameworks
- Tailwind CSS, Bootstrap, or other UI/CSS frameworks
- Animation libraries or other third-party dependencies
- Build tools or package managers (npm, Vite, Webpack, etc.)

Prefer browser-native APIs and semantic HTML. If a problem can be solved cleanly with HTML/CSS/vanilla JS, do that.

## Project structure

Keep a flat, obvious layout:

```
portfolio_mohan/
├── index.html          # Single page; semantic section markup
├── css/
│   └── style.css       # Presentation only
├── js/
│   └── main.js         # Behavior only (navigation, rendering, interaction)
└── data/
    └── projects.js     # Project content as plain JS data
```

### Separation of concerns

| Layer | Location | Responsibility |
|-------|----------|----------------|
| Content | `data/*.js`, HTML copy in `index.html` | Text, links, project entries |
| Presentation | `css/style.css` | Layout, typography, color, responsive rules |
| Behavior | `js/main.js` | DOM updates, event handlers, small utilities |

- Static copy that rarely changes can live directly in `index.html`.
- Repeatable or structured content (e.g. projects) belongs in `data/`.
- Do not embed large data blobs inside `main.js`.
- Load data scripts before `main.js` in `index.html`.

## Architecture principles

- Keep the implementation simple and readable for a non-framework developer.
- Separate content, presentation, and behavior where practical.
- Avoid premature abstraction, design patterns, and frameworks.
- Prefer small, understandable modules over complex abstractions.
- Keep the architecture **extensible** so the site can later migrate to React, consume CMS/API data, or gain new sections without a full rewrite.
- Do **not** create abstractions merely for hypothetical future needs.

When adding features, extend existing files or add one new file with a clear single purpose. Explain trade-offs before significant structural changes.

## Page sections

Implement exactly these main sections (in a sensible order):

1. **Hero** — taglines below
2. **About**
3. **Skills**
4. **Projects**
5. **Education**
6. **Contact**

Do **not** add a blog, achievements section, experience section, or other sections unless explicitly requested.

### Hero copy

- **Primary:** "Code for the Joy."
- **Secondary:** "Curious by nature."

## Design direction

- Simple, spacious, clean, and calm.
- **Light sky blue** is part of the visual identity; combine cool blue tones with subtle warm neutrals.
- Avoid bright or aggressive colors, visual clutter, heavy gradients, shadows, decorations, animations, and UI effects.
- Let typography, spacing, hierarchy, and whitespace do most of the visual work.
- Design **mobile-first** and responsive from the beginning.
- Use CSS custom properties for colors and spacing when it keeps the stylesheet maintainable.

## Accessibility requirements

All new and changed UI must meet these standards:

- Use semantic HTML (`header`, `nav`, `main`, `section`, headings in order, `footer`, etc.).
- Include a **skip-to-content** link as the first focusable element.
- All functionality must be **keyboard accessible**; test navigation and interaction without a mouse.
- Preserve **visible focus indicators**; do not remove outlines without an accessible replacement.
- Provide accessible names for interactive elements (`aria-label`, visible text, or `aria-labelledby` as appropriate).
- Do not rely on color alone to communicate meaning.
- Maintain appropriate color contrast (WCAG AA as a practical target).
- Use comfortable touch targets (roughly 44×44px minimum where feasible).
- Respect `prefers-reduced-motion` for any motion added in the future.

## Browser support

Target current versions of major modern browsers: Chrome, Edge, Firefox, and Safari.

Do not add legacy-browser support, polyfills, or compatibility hacks unless explicitly requested.

## AI coding rules

1. **Minimal diffs** — Make the smallest change necessary to solve the problem. Do not rewrite unrelated code.
2. **No speculative features** — Do not generate placeholder sections, lorem ipsum blocks, or features not currently required.
3. **Dependencies** — Do not add libraries or tooling without first establishing why they are necessary and getting explicit approval.
4. **Understandability** — Code should remain easy for the owner to read and edit.
5. **Architectural changes** — Before significant structural changes, explain the reason and trade-offs.
6. **Vanilla first** — Prefer HTML/CSS/vanilla JS over introducing a library.
7. **Consistency** — Match existing naming, formatting, and patterns in the repo.

## Common tasks

### Adding a project

1. Add an entry to `data/projects.js` (title, description, links, tech tags, etc.).
2. Ensure `main.js` renders it if rendering is dynamic; otherwise update markup consistently with existing patterns.
3. Verify keyboard access to any project links or expandable details.

### Adding a skill or education item

Prefer updating structured content in HTML or a dedicated data file rather than hard-coding in JavaScript logic.

### Styling changes

Edit `css/style.css` only. Use existing CSS variables and spacing scale when present. Avoid inline styles except where truly necessary.

## Out of scope (unless requested)

- Blog, RSS, or CMS integration
- Work experience / achievements timeline
- Analytics, SEO beyond basic meta tags, or deployment configuration
- Tests, linting, or CI setup
- Image optimization pipelines or asset build steps
