# https://in-info-web4.luddy.indianapolis.iu.edu/~jat5/homework-eight/

## Dependencies

- **Browser**: Any modern browser (Chrome, Edge, Firefox, Safari)
- **Styles**: SCSS compiled to CSS
- **JavaScript**: Vanilla JavaScript (no external framework/library required)

### Optional Development Tools

- **Node.js + npm** (if using a Sass build workflow)
- **Sass** (`npm install -D sass`) for compiling `.scss` to `css/styles.css`

## Project Structure

```text
homework-eight/
├── app/
│   └── app.js
├── css/
│   └── styles.css
├── images/
│   └── (project images)
├── scss/
│   ├── variables.scss
│   ├── structure.scss
│   ├── nav.scss
│   ├── home.scss
│   ├── portfolio.scss
│   ├── contact.scss
│   └── (other partials if present)
├── index.html
└── README.md
```

## Notes

- `index.html` loads `css/styles.css` and `app/app.js`.
- App content is injected into `<main id="app"></main>` using JavaScript page templates.
- Recompile SCSS after style updates so `css/styles.css` stays current.
