# Amber & Oak Coffee Co. — Landing Page

A responsive, one-page landing site for a fictional neighborhood coffee shop, built as a front-end practice project. The goal was a landing page that feels like a real small-business site rather than a generic template — custom color palette and type pairing, photography, and a working mobile navigation menu.

## Live Preview

Open `index.html` in any browser — no build step or server required.

## Features

- Fully semantic HTML5 — no layout `<div>`s; structure uses `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<address>`, and `<ul>`/`<li>` where content is genuinely a list
- Responsive layout with CSS Grid and Flexbox — menu cards and value cards reflow automatically at any screen width via `auto-fit`/`minmax`
- Fluid typography using `clamp()` — headings scale smoothly between screen sizes without extra breakpoints
- Custom mobile navigation menu (hamburger toggle) built in vanilla JavaScript, including "tap outside to close" and accessible `aria-expanded` state
- Photography-driven design: full-bleed hero image with overlay, a two-column "Our Story" section, drink photos on each menu card, and a storefront photo in Contact — all sourced under the [Unsplash License](https://unsplash.com/license)

## Sections

1. Sticky navbar with logo and mobile hamburger menu
2. Hero — headline, subtext, call-to-action
3. About / Our Story
4. Popular Menu — Cappuccino, Latte, Iced Coffee, Espresso, each with photo and price
5. Why Choose Us — three value points with custom line icons
6. Opening Hours
7. Contact / Location — address, phone, storefront photo
8. Footer — copyright, social links, closing tagline

## Tech Stack

| Tech | Used for |
|---|---|
| HTML5 | Semantic structure and content |
| CSS3 | Custom properties, Grid, Flexbox, responsive design, `clamp()` |
| JavaScript (vanilla) | Mobile nav toggle, no frameworks or libraries |

## Project Structure

```
├── index.html    # Page structure and content
├── style.css     # All styling, layout, and responsive rules
├── script.js     # Mobile navigation interactivity
└── README.md
```

## Running Locally

1. Clone the repo:
   ```
   git clone https://github.com/your-username/your-repo-name.git
   ```
2. Open `index.html` directly in your browser — that's it, no dependencies to install.

## Credits

- Photography via [Unsplash](https://unsplash.com), free to use under the Unsplash License
- Fonts: [Fraunces](https://fonts.google.com/specimen/Fraunces) and [Work Sans](https://fonts.google.com/specimen/Work+Sans) via Google Fonts

## Author

Thomas Olofinkua — [GitHub](https://github.com/your-username)

---

This is a practice/portfolio project — the coffee shop, its name, and its details are fictional.
