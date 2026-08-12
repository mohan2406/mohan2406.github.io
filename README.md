# Mohan Raaj — Portfolio

A personal developer portfolio built as a simple static website using HTML, CSS, and vanilla JavaScript.

## Live Site

https://mohan2406.github.io/

## Technology

- HTML5
- CSS3
- Vanilla JavaScript

This project intentionally uses:

- No frontend framework
- No CSS framework
- No UI library
- No build tool required
- No external runtime dependencies

## Project Structure

```
portfolio_mohan/
├── index.html              # Single-page site: content, sections, and head metadata
├── css/
│   └── style.css           # Presentation, layout, responsive rules, design tokens
├── js/
│   └── main.js             # Behavior: mobile navigation and interaction
├── data/
│   └── projects.js         # Placeholder for future structured project data (currently empty)
├── assets/
│   ├── favicon.svg         # Primary favicon (SVG)
│   ├── favicon.ico         # Fallback favicon (16×16, 32×32, 48×48)
│   ├── apple-touch-icon.png
│   ├── og-image.svg        # Social preview source artwork
│   └── og-image.png        # Social preview image used by Open Graph / Twitter
├── robots.txt              # Crawler rules and sitemap reference
├── sitemap.xml             # Single-URL sitemap for the live site
├── AGENTS.md               # Guidance for AI-assisted development in this repo
└── README.md               # This file
```

### File and folder purposes

| Path | Purpose |
|------|---------|
| `index.html` | Semantic page structure, visible content, SEO metadata, favicon links, and JSON-LD |
| `css/style.css` | Visual design, OKLCH color tokens, typography, spacing, and responsive layout |
| `js/main.js` | Mobile menu toggle, keyboard support, and viewport resize handling |
| `assets/` | Favicons, app icons, and social preview images |
| `data/projects.js` | Reserved for structured project content; not wired into the page yet |
| `robots.txt` | Allows crawling and points to the sitemap |
| `sitemap.xml` | Lists the canonical production URL |
| `AGENTS.md` | Project constraints and conventions for AI-assisted edits |

## Architecture

The site follows a simple separation of concerns:

- **Semantic HTML** provides structure and content in `index.html`.
- **CSS** provides presentation and responsive layout in `css/style.css`.
- **Vanilla JavaScript** provides behavior such as mobile navigation in `js/main.js`.
- Content, presentation, and behavior are kept reasonably separated.
- The project avoids premature abstraction and unnecessary dependencies.

The architecture was intentionally kept simple while allowing future migration to:

- React
- a CMS/API
- additional sections
- a more dynamic content system

None of those migrations are implemented today. The current site is a static single page with content stored directly in HTML.

## Design Principles

- Clean and spacious
- Warm + cool visual balance
- Light sky-blue identity
- OKLCH color system
- Content-first layout
- No unnecessary animation
- Responsive design
- Accessibility-first interaction
- Modern browser support only

## Accessibility

Implemented in the current codebase:

- Semantic HTML (`header`, `nav`, `main`, `section`, `article`, `footer`, heading hierarchy)
- Skip-to-content link as the first focusable element
- Keyboard-accessible navigation and mobile menu button
- Focus-visible styles for interactive elements
- Accessible mobile navigation button with visible label text
- `aria-expanded` and `aria-controls` on the menu toggle
- Escape key closes the mobile menu and returns focus to the button
- Meaningful link text (GitHub, LinkedIn, Email)
- Responsive layout across viewport sizes
- Comfortable touch targets via CSS (`--touch-min`)
- No reliance on color alone for meaning

Screen-reader testing has not been formally documented for this release.

## SEO and Discoverability

Implemented in `index.html`, `robots.txt`, and `sitemap.xml`:

- `<title>`
- `<meta name="description">`
- Canonical URL: `https://mohan2406.github.io/`
- Open Graph metadata (`og:type`, `og:title`, `og:description`, `og:url`, `og:image`)
- Twitter card metadata (`twitter:card`, `twitter:image`)
- JSON-LD `ProfilePage` / `Person` structured data
- `robots.txt`
- `sitemap.xml`

Search engine indexing has not been verified as part of this project.

## Deployment

The website is deployed with **GitHub Pages** from the GitHub repository.

Basic workflow after making changes:

```bash
git add .
git commit -m "Describe your change"
git push
```

GitHub Pages serves the site from the repository. No deployment scripts are included in this repo.

## Local Development

Because the site is fully static, open it through a local HTTP server rather than opening `index.html` directly from the file system (which can break relative asset loading in some browsers).

If Python is available:

```bash
python3 -m http.server
```

Then open:

http://localhost:8000/

No additional dependencies are required to run the site locally.

## AI-Assisted Development

This project was developed using an AI-assisted workflow with Cursor, with human review of changes.

Development philosophy:

- AI proposes and implements changes
- Human reviews the output
- Changes are made incrementally
- Avoid unnecessary dependencies
- Explain architectural changes before implementation
- Test changes in the browser
- Preserve accessibility and maintainability
- Prefer the simplest technology that solves the current problem

AI assistance was used throughout development; changes were reviewed and refined before release.

See `AGENTS.md` for repository-specific constraints and conventions for future AI-assisted edits.

## Future Possibilities

Possible future directions (not current features):

- Migrate sections to React if complexity justifies it
- Introduce a CMS or content system if the site grows
- Add a writing/blog section
- Add more projects
- Add a custom domain
- Improve social preview assets

## License

No license has been added yet.
