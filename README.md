# Araj Shah — academic website

Personal research website built with Next.js, TypeScript, and Tailwind CSS. The source content lives in `content/site.ts`; reusable sections are in `components/`; supplied assets are in `public/`.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Checks

```bash
npm run lint
npm run typecheck
npm run build -- --webpack
```

## Vercel

Import `arajshah/arajshah-website` at https://vercel.com/new, keep the framework preset as Next.js, and set the production branch to `main`. Vercel will build and deploy each push to `main` automatically. Set `SITE_URL` to the final production origin if you add a custom domain; this enables the canonical URL, sitemap, and public robots metadata.
