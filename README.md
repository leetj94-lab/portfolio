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

## Final information architecture

- The homepage presents three selected production systems and four additional experiences once each. There are no overlapping role-filter tabs. Contribution labels identify relevant skills without duplicating cases.
- Each case contains business change, personally delivered work grouped by applicable software/data/operations responsibilities, an interactive workflow, design choices and expandable technical detail. Early analysis/design roles remain distinct from later full-stack delivery.
- `dist/story.js` owns contribution labels, six connected journey stages and delivery-section content. The journey separates the problem, responsibility, result/scope and foundation carried forward; overlapping dates are explicit.
- Current routes: `#work`, `#experience`, `#journey`, `#journey/master-data` and `#project/master-data`. Previous `#work/...` category links resolve to the current work overview.
- Company code, internal screens and production records are excluded. Scope and outcome labels and the printable/PDF résumé remain consistent.

Release acceptance checks are recorded in `docs/final-review.md`.
