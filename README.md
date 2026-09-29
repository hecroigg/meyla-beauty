# Meyla Beauty

Premium bilingual landing page for Meyla Beauty in Mannheim, built with React, Vite and TypeScript.

## Local development

```bash
pnpm install
pnpm dev
```

## Production build

```bash
pnpm build
```

The static production output is generated in `dist/`.

## Cloudflare Workers Builds

Import this GitHub repository in **Workers & Pages → Create application → Import a repository** and use:

- Build command: `pnpm run build`
- Deploy command: `npx wrangler deploy`
- Preview command: `npx wrangler preview`
- Root directory: `/`
- Node.js: `22` (also defined in `.nvmrc`)

No environment variables are required. Static asset deployment and SPA fallback are configured in `wrangler.jsonc`.

## Editable content

- Business details and external links: `src/data/content.ts`
- Reviews: `src/data/reviews.ts`
- German content: `src/i18n/de.ts`
- English content: `src/i18n/en.ts`
- Design system and responsive styling: `src/styles/index.css`
- Images: `public/images/`
