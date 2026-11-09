# Aditya Acharya — Portfolio

Source for [adiportfolio2026.framer.website](https://adiportfolio2026.framer.website)'s
replacement, built with [Astro](https://astro.build) and plain CSS, deployed on Vercel.

## Stack

- Astro (static output)
- Plain CSS, design tokens in `src/styles/tokens.css`
- `@fontsource/besley` (headings) and `@fontsource/plus-jakarta-sans` (body), self-hosted
- A Markdown content collection (`src/content/work/`) for case studies

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # type-checks (astro check) then builds to dist/
npm run preview  # serve the production build locally
```

## Adding a case study

1. Add a new `.md` file to `src/content/work/`, e.g. `src/content/work/my-project.md`.
2. Put its cover image next to it (or in `src/content/work/assets/`) and reference it with a
   relative path in frontmatter, e.g. `./assets/my-project-cover.png`.
3. Fill in the frontmatter:

   ```md
   ---
   title: My Project
   description: One line shown on cards.
   cover: ./assets/my-project-cover.png
   coverAlt: Describe what the image shows.
   role: Product Designer
   timeline: 2026
   tools: [Figma, TODO]
   order: 5
   featured: true
   ---

   ## Problem
   ...

   ## Process
   ...

   ## Outcome
   ...
   ```

4. `order` controls position in the grid (ascending) on Home and `/work`. No code changes
   needed — the page at `/work/my-project` is generated automatically.

## Editing tokens

All color, type, spacing, layout and motion values live in `src/styles/tokens.css`, grouped
under one CSS comment per category. Change a value there and it propagates everywhere; avoid
hardcoding colors/sizes elsewhere in component `<style>` blocks — use the `var(--token)` instead.

## Editing site-wide config

`src/data/site.ts` holds the email, resume path, LinkedIn/Behance URLs and nav items. Update
the `TODO` URLs there once you have real links; everything else (header, contact section)
reads from this one file.

## Deploying on Vercel

1. Push this repo to GitHub.
2. In Vercel, "Add New Project" → import the GitHub repo.
3. Framework preset: Astro (auto-detected). Build command `npm run build`, output directory
   `dist` (Vercel's Astro preset sets these automatically — no changes needed).
4. Deploy. Every push to the default branch redeploys automatically.

## Outstanding TODOs

- `src/assets/images/avatar.png` and `src/assets/images/hero.png` are neutral placeholders —
  replace with the real 3D-illustration assets.
- `public/resume.pdf` is a placeholder PDF — replace with the real resume.
- `src/data/site.ts`: `linkedinUrl` and `behanceUrl` are placeholders.
- `src/pages/archive.astro`: the three archive rows are placeholder TODO rows — replace with
  real projects.
- Each case study's `role`, `timeline`, `tools`, `coverAlt`, cover image and Problem/Process/
  Outcome body copy are placeholder TODOs — fill in real content per project.
