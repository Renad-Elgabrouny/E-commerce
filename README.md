# Scent Store – Mini E-Commerce Project

A small frontend e-commerce site I built for a perfume store. No frameworks, no backend — just HTML, CSS, and vanilla JavaScript with localStorage handling all the cart and favorites logic.

---

## What it does

There are three pages:

- **index.html** — the main shop page. Has a navbar, a hero section, some stats, and a product grid with 9 perfumes.
- **cart.html** — shows whatever the user added to cart. You can increase/decrease quantity or remove items. Total price updates live.
- **favorite.html** — shows saved favorites. You can remove items from here too.

---

## How the data flows

Everything is stored in `localStorage`. When you click the cart icon on a product, it pushes that item into a `"cart"` key in localStorage. The heart icon does the same but under a `"heart"` key. The cart and favorites pages just read from those keys when they load.

There's also a live search bar on the main page that filters products by name or title as you type.

---

## File structure

```
├── index.html
├── script.js
├── cart.html
├── cart.js
├── favorite.html
├── favorite.js
└── assets/
    ├── logo.png
    ├── IMG1.png
    ├── img2.png
    ├── shopping-cart.png
    └── item1.png ... item9.png
```

---

## Running it

Just open `index.html` in a browser. No installs, no build step needed.

If images aren't showing up, make sure the `assets/` folder is in the same directory as the HTML files.

---

## Built with

- HTML & CSS (no frameworks)
- Vanilla JavaScript
- localStorage for persistence
