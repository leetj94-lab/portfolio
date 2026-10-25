# Taekjun (TJ) Lee — Portfolio

A bilingual portfolio for business systems, software development and automation roles. Buildless HTML, CSS and JavaScript; served by GitHub Pages from the `main` branch root. The root `index.html` loads the shared application and assets from `dist/`.

## Content

- Three featured cases: document delivery, master data and digital twin.
- Seven case studies with interactive architecture/workflow diagrams.
- English/Korean content, responsive layouts, keyboard-accessible workflow controls and reduced-motion support.
- Printable résumé at `dist/resume.html` (Print / Save as PDF).

## Edit

- `dist/content.js` — project copy, metrics, roles, technology, graph nodes and edges. `L(English, Korean)` defines bilingual content.
- `dist/app.js` — homepage copy, layout, routing and SVG overview graphics.
- `dist/styles.css` — visual system and responsive styles.
- `dist/resume.html` — printable résumé.

Diagram nodes use a 1000 × 430 coordinate space: `[id, x, y, title, subtitle, description]`. Edges use `[sourceId, targetId, optionalStyle]`. Use `loop` or `feedback` for dashed edges.

## Preview

Serve `dist/` with any static web server, for example:

```bash
python -m http.server 8000 --directory dist
```

Open `http://localhost:8000`. No dependencies or build required.

## Deploy

In **Settings → Pages**, choose **Deploy from a branch**, branch **main**, folder **/ (root)**. The root `index.html` is the entry point; shared source files remain in `dist/`. The Actions workflow checks JavaScript on pushes without running a competing deployment. Résumé links resolve relative to the application script, so both the root page and `dist/` preview work.
