# Tailwind-Best-Practices
## Tailwind CSS Order
1. Layout          → block, flex, grid, hidden
2. Position        → relative, absolute, fixed, top, left
3. Box Model       → w, h, m, p
4. Typography      → text, font, leading, tracking
5. Visual          → bg, border, rounded, shadow
6. Effects         → opacity, blur, transition
7. Responsive      → sm:, md:, lg:
8. State           → hover:, focus:, dark:

example: 
```jsx
// ❌ unsorted — hard to read
<div className="hover:bg-blue-600 p-4 text-white flex rounded-xl bg-blue-500 items-center w-full shadow-md font-bold">

// ✅ sorted — easy to scan
<div className="flex w-full items-center rounded-xl bg-blue-500 p-4 font-bold text-white shadow-md hover:bg-blue-600">
```
source: [Tailwind CSS Best Practices for Vite](https://medium.com/@vishalthakur2463/tailwind-css-in-large-projects-best-practices-pitfalls-bf745f72862b)

## Create Design System with @apply
```css
/* styles.css */
/*
.btn-primary {
  @apply bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700;
}
*/
```

```jsx
<button className="btn-primary">Submit</button>
```

## Use Tailwind Config for Theme Consistency
```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: "#1DA1F2",
      },
    },
  },
};
```
Everyone on the team now uses `text-brand` instead of random hex codes.

## Componentize with Tailwind
```jsx
<div className="flex items-center justify-between px-4 py-2 bg-gray-100 rounded-lg shadow-md">...</div>
```
can be refactored to:
```jsx
function Card({ children }) {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-gray-100 rounded-lg shadow-md">
      {children}
    </div>
  );
}
```
This promotes reusability and keeps your JSX clean.
## Use Prettier + Tailwind Plugin
```terminaloutput
npm install -D prettier prettier-plugin-tailwindcss
```
consistent Class order


