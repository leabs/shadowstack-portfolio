# Shadowstack Portfolio

This project is a web developer portfolio built with Astro and deployed to a hosting service like vercel or netlify or cloudflare.

## 🚀 Quick start

**Clone the repository on GitHub web or your terminal:**

```bash
git clone https://github.com/leabs/shadowstack-portfolio.git
```

**Change into the directory:**

```bash
cd shadowstack-portfolio
```

**Install the dependencies:**

```bash
npm install
```

**Start the development server:**

```bash
npm run dev
```

**Start editing the code!**

Start with src/layouts/Layout.astro to set site description, title, and URL above the markup. Then start building out components for work and projects in `src/components/` and pages in `src/pages/`. Use the ones I left as a starting point. Make sure to update your social links in `src/components/Social.astro` and provide a [https://formspree.io/](https://formspree.io/) URL in `src/components/Contact.astro`. Most of the rest of the information lives on `src/pages/index.astro`.

## Scrolling Image Section

This section is `src/components/CustomImageScroll.astro` and can be updated above the markup in the JSON object called cards. Images should be placed in `src/assets/` so Astro can optimize them! This section is responsive and assumes a 16:9 aspect ratio for the images with a row count of 6 (so 12 total images) before the CSS fades out and loops. The anaimation for this is in `tailwind.config.mjs` and can be adjusted there.
