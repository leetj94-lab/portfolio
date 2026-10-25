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

## Recruiter-ready case studies

The featured cases include explicit system names, classified outcome/scope metrics, contribution boundaries and expandable implementation notes. All seven cases are available through persistent desktop navigation and a mobile project selector. Company source code, internal screens and production data are excluded; public diagrams describe high-level workflows.

The public résumé has both PDF (`dist/assets/Taekjun_Lee_Resume.pdf`) and HTML (`dist/resume.html`) versions. Rebuild both with `python scripts/build_resume.py` (ReportLab and DejaVu Sans required). No company materials are embedded.

Run `node tests/validate-content.mjs` from the repository root to check translations, graph integrity, metric classifications, entry-point assets and the PDF/share-image presence. If modifying entry-point metadata, keep the root `index.html` aligned with `dist/index.html`; root resource paths include `dist/`.

## Role-based exploration and connected journey

- `dist/story.js` defines the five work filters, role-specific card descriptions and six connected journey stages. The full journey shows the next problem, expanding responsibility, delivered result and foundation carried forward. Dates can overlap; this is a logical progression, not a claim that every project ran consecutively.
- Shareable routes include `#work/development`, `#work/automation`, `#work/data`, `#work/all`, `#journey` and `#journey/master-data`.
- Case pages link to the prior foundation and next extension; returning to work preserves the last selected filter in the session. Global navigation has desktop links and a keyboard-accessible mobile menu.
