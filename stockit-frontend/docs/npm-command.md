## Vite Commands
```bash
npm install -D prettier prettier-plugion-tailwindcss # Install Prettier and the Tailwind CSS for dev Dependencies
npm run dev       # Starts the local development server with HMR
npm run build     # Bundles the app for production into dist/
npm run preview   # Serves the production build locally (built-in Vite)
npm install serve -g  # Installs the `serve` package globally
serve -s dist     # Serves the dist/ folder as a static SPA
```

## What They Do

| Command              | What it does                                              | Output        |
|----------------------|-----------------------------------------------------------|---------------|
| `npm run dev`        | Dev server with hot module replacement (HMR)              | None (memory) |
| `npm run build`      | Compiles & minifies source into production-ready files    | `dist/`       |
| `npm run preview`    | Serves `dist/` using Vite's built-in preview server       | None (memory) |
| `npm install -g serve` | Installs the `serve` static file server globally        | Global binary |
| `serve -s dist`      | Serves `dist/` as a SPA, with fallback to `index.html`   | None (memory) |


Note: npm run preview and serve -s dist do similar things — both serve the production build locally. The difference is preview is built into Vite and zero-config, while serve is a separate tool that gives you more options (custom port, HTTPS, etc.).