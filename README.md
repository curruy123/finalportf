# Kyle Sohn · Portfolio

**My personal portfolio: data science, product and design work in one place.**

👉 **[curruy123.github.io/finalportf](https://curruy123.github.io/finalportf/)**

A responsive portfolio site I designed and built from scratch with HTML, CSS and JavaScript, with no frameworks or templates. It showcases my data and code projects alongside UX case studies, and hosts the live dashboard for my Snowball project.

---

## What's on the site

- **Home:** an intro and a short about section with my background (Brown CS-Econ, Penn Data Science & AI) and interests
- **Data & code projects:** [Snowball](https://github.com/curruy123/Snowball) (with its live dashboard), EcoEnergy Insights, Sneaker Bargains, Search, Sketchy and Tetris
- **Design case studies:** full write-ups for Pointz, Apriora AI and User Mindscapes, covering the problem, research, process, solution and what I learned
- **Contact:** email, LinkedIn, GitHub and Instagram

## Design

- **Clean, editorial look:** an Instrument Serif display font with Space Mono labels on a warm off-white background, using red as a small accent
- **Reusable design system:** colors, fonts and spacing are defined once as CSS variables and shared across every page
- **Case-study template:** every case study is built from the same structure (role, context, research, process, solution, learnings), so new ones are quick to add and look consistent

## Built for everyone

- **Responsive:** layouts adapt from wide desktop screens down to phones, with a mobile menu
- **Accessible:** semantic HTML, a skip-to-content link, visible keyboard focus, alt text on images and ARIA labels on icon buttons
- **Respects motion settings:** animations and the background video turn off for visitors who prefer reduced motion
- **Small touches:** section highlighting in the nav as you scroll, a sticky table of contents on case studies and an image carousel with keyboard-friendly controls

---

## Project structure

```
finalportf/
├── index.html                          # homepage
├── site.css                            # homepage styles
├── case.css / case.js                  # shared styles and scripts for case studies
├── pointz.html                         # Pointz case study
├── iterativeredesignfinalportfol.html  # Apriora AI case study
├── usermindscapes.html                 # User Mindscapes case study
├── convert/                            # live Snowball dashboard
├── projects/                           # project cover images
└── homepage/, pointz/, ...             # images for each page
```

## Run it locally

No build step needed. Clone the repo and open `index.html` in a browser:

```bash
git clone https://github.com/curruy123/finalportf.git
cd finalportf
open index.html
```

## Deployment

Hosted with **GitHub Pages** from the `main` branch. Every push to `main` updates the live site within a minute or two.

## Tech stack

HTML · CSS · JavaScript · GitHub Pages
