# Johnathan Stowers Portfolio

Personal portfolio built with Next.js and Tailwind CSS. Deployed to GitHub Pages via static export.

## Tech

- Next.js 16 (static export)
- Tailwind CSS 4
- TypeScript

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # static export to ./out
```

## Structure

- `app/page.tsx` - main page, imports all sections
- `app/projectData.json` - project entries
- `app/components/` - UI components
- `public/` - images, PDFs, robots.txt, sitemap.xml

## Deploy

Pushes to `main` trigger the GitHub Actions workflow in `.github/workflows/nextjs.yml`, which builds and deploys to GitHub Pages.
