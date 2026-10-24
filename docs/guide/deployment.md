# Production Deployment

## Building the Client

To compile the production SPA bundle:

```bash
npm run build
```

This outputs production artifacts to `dist/`:
- `dist/index.html`
- `dist/assets/index-[hash].css`
- `dist/assets/index-[hash].js`

## Building the Documentation

To build the static VitePress docs site:

```bash
npm run docs:build
```

Outputs static HTML to `docs/.vitepress/dist/`.

## Hosting Configuration (SPA Routing)

When deploying to Vercel, Netlify, Cloudflare Pages, or Apache/Nginx, configure fallback rewrite to `/index.html` so direct routes (e.g. `/events/winter-hackathon-2026`) resolve properly without 404 errors.

### Vercel `vercel.json`
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### Netlify `_redirects`
```
/*    /index.html   200
```
