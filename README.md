# Forklore Wiki

Meme encyclopedia at [forklore.wiki](https://forklore.wiki).

## Stack

Next.js 16 + OpenNext → Cloudflare Workers (wiki-only: no Postgres / login).

Media: `https://cdn.forklore.wiki` (R2 bucket `forklore`).

## Local

```bash
pnpm i
pnpm dev
```

Copy `.env.example` → `.env.local` and set at least:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_WIKI_ASSET_BASE=https://cdn.forklore.wiki`
- `NEXT_PUBLIC_OPTIMIZED_IMAGES=false`

## Cloudflare Workers

- Worker name / `wrangler.jsonc` `name`: `forklore-wiki`
- Build command: `pnpm cf:workers-ci`
- Disable Build cache
- Set `NEXT_PUBLIC_*` as Build variables

See: https://nexty.dev/zh/docs/start-project/cf-workers
