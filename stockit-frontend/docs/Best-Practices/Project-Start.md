# Vite + React Project Guide

## Files You Should Keep & Understand

| File | Why |
|---|---|
| `main.tsx` | Entry point — mounts your app, don't touch much |
| `App.tsx` | Your root component — start here |
| `index.html` | HTML shell — Vite injects your app here |
| `vite.config.ts` | Vite config — you'll tweak this later |
| `tsconfig.json` | TypeScript config — leave it for now |
| `eslint.config.js` | Linting rules — important for best practices |

---

## Best Practices to Build From Day One

### Folder Structure

As your project grows, organize `src/` like this:

```
src/
  components/    # reusable UI pieces
  pages/         # route-level components
  hooks/         # custom React hooks
  utils/         # helper functions
  types/         # TypeScript types/interfaces
```

### Other Habits to Build Early

- One component per file
- Name components in `PascalCase`, files the same way (`MyButton.tsx`)
- Keep components small and focused
- Use TypeScript types for all props — don't use `any`
- Commit often with meaningful messages