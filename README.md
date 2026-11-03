# Musyoki Mutua — portfolio

A static site: `index.html`, `styles.css`, `main.js` and `assets/`. No build step.

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
```

## Deploy

- **Netlify:** drag this folder onto app.netlify.com/drop.
- **GitHub Pages:** push to a repo, then Settings → Pages → deploy from the `main` branch, root folder.

## Editing

- Projects live in the `projects` array at the top of `main.js`. `tags` drive the filters
  (`enterprise`, `payments`, `mobile`).
- Replace `assets/Musyoki_Mutua_Full_Stack_Developer_CV.pdf` when the CV changes.

## Motion

- The hero signature is written once on load, then the "Verified" stamp lands.
- "Mobile apps": the phone stays pinned while each app's story scrolls past, and its screen
  changes to match (`.app-step` and `.phone-screen` in `index.html`; logic at the end of `main.js`).
- "On the web": the section pins and the browser frames slide sideways as you scroll down
  (CSS scroll timeline; a normal sideways-scrolling strip where that isn't supported).
- Project rows fill with navy ink on hover, section headings draw a line as they appear, and
  the experience timeline fills as you scroll.
- Filtering and opening a project use the View Transitions API (Chrome, Edge, Safari 18+).
  Other browsers switch instantly.
- Everything is turned off when the visitor has reduced motion enabled.
