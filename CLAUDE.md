# NEXTY — Multi-provider AI SaaS template (Stripe + PayPal + Creem)
Next.js 16 + React 19 + TypeScript 5 + Drizzle ORM 0.44 (PostgreSQL, public schema) + Better Auth 1.4 (organization plugin) + next-intl 4 (en/zh/ja) + Tailwind 4 + shadcn/ui + Resend + Upstash Redis + Cloudflare R2 + AI SDK

<directory>
actions/ - Server Actions (billing, coupons, credits, orders, overview, paypal, team, users, feedback, newsletter, plausible, posts, r2-resources)
app/ - App Router: [locale] pages, (site) routes, api (stripe/creem/paypal webhooks, paypal create/capture-order, cron/credits, health, auth, ai-demo, admin, webhooks)
components/ - UI components (pricing, layout, header, footer, home, cms, tiptap, ai-demo, shared, ui)
config/ - Business config source of truth (pricing.ts, credits.ts, site.ts, ai-providers.ts, ai-models.ts, colors.ts, common.ts)
lib/ - Core libraries (db, credits, billing, auth, mail, redis, storage, stripe, creem, paypal, ai, cms, logger, tracking, pricing, signup-blocklist, signup-gift-gate)
i18n/ - next-intl routing + messages/{en,zh,ja} (one namespace per file, aggregated by request.ts)
emails/ - react-email templates
blogs/ - MDX blog content per locale (en/zh/ja)
content/ - Static MDX pages
constants/, hooks/, stores/, types/, styles/ - Shared constants, hooks, zustand stores, TypeScript types, global CSS
scripts/ - Ops scripts (bootstrap-stripe-prices, env sync, PayPal renewal test, check-user-spend read-only probe of the admin spend aggregate)
</directory>

<architecture>
Pricing: config/pricing.ts is the single source of truth — no pricing_plans table, no admin CRUD. One provider per plan plus per-provider price IDs {test, live}. planId slugs are never reused and sold entries are never deleted (existing subscriptions resolve invoices through them); retire a plan with active:false.
Credits: two buckets — subscription (reset on each grant) and purchased (never expires); spending drains the subscription bucket first. Balances change only through lib/credits/ledger.ts, and credit_transactions is an append-only log (delta + snapshot + seq). Annual plans grant month one immediately, then drip 11 monthly grants (cron plus lazy settlement, anchored on the subscription row).
Fulfillment: lib/billing/fulfillment.ts is the provider-agnostic core; the idempotency key is the unique index on orders(provider, provider_order_id). Each adapter translates provider webhook events into core calls and normalizes subscription status. Mid-cycle plan changes go through incremental fulfillment; pending payments (PayPal eCheck) land as status='pending' rows and are reconciled by cron. Webhook routes stay thin — retryable errors return 5xx, PermanentFulfillmentError alerts then acks.
Teams: Better Auth organization plugin. The organization is the billing subject (organization_credit_balances shared pool). Seat cap = the team plan's seats, or 1 without a subscription. Credit packs are disabled in team workspaces.
Money: always integer cents. Refunds rewrite the original order row instead of adding one. Financial rows are SET NULL on user delete and RESTRICT on organization delete.
</architecture>

<config>
drizzle.config.ts - Drizzle migration config (public schema, no schemaFilter)
config/pricing.ts - Pricing plan source of truth (multi-provider)
config/credits.ts - Credit config (signup bonus amount, signup-gift cluster caps per IP / device)
styles/globals.css - Theme tokens (tweakcn shadcn palette + the --credit trio: coin gold for the balance badge, roles swapped per theme)
.env.example - Environment variable manifest (DATABASE_URL, three payment providers, CRON_SECRET, Resend, R2, ...)
</config>

Law: minimal, stable, navigable, versions precise

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
