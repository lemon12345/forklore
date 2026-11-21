/**
 * [INPUT]: Depends on the pricingPlans source of truth in config/pricing.ts, the stripe SDK, env loading from @next/env
 * [OUTPUT]: CLI script — creates Stripe Products/Prices from the pricing source of truth and backfills the placeholders in config/pricing.ts
 * [POS]: The Stripe bootstrap tool of scripts, turning step 1 of the "pre-launch Stripe configuration checklist" into a single command
 * [PROTOCOL]: Update this header on changes, then check CLAUDE.md
 *
 * Usage:
 *   pnpm stripe:bootstrap          # dry run: show what would be created
 *   pnpm stripe:bootstrap --write  # create the Stripe resources and backfill config/pricing.ts
 *
 * The mode follows the STRIPE_SECRET_KEY prefix (sk_test → test column, sk_live → live column).
 * Only plans carrying a stripePriceId are processed (provider='stripe', or multi-provider configs that added a Stripe ref).
 * Idempotent: Products are deduped and reused by metadata.planId; Prices are matched and reused by amount + currency + interval.
 * Entries already backfilled (i.e. not carrying the price_REPLACE prefix) are skipped.
 */

import { loadEnvConfig } from "@next/env";
import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";
import Stripe from "stripe";

loadEnvConfig(process.cwd());

// Env loading is unrelated to the pricing import (pricing is pure data), so
// the order does not matter — kept here to match the other scripts.
import { isSubscriptionPlan, pricingPlans } from "../config/pricing";

const PLACEHOLDER_PREFIX = "price_REPLACE";

async function main() {
  const write = process.argv.includes("--write");
  const secretKey = process.env.STRIPE_SECRET_KEY;

  if (!secretKey) {
    console.error("STRIPE_SECRET_KEY is not set (.env.local or env).");
    process.exit(1);
  }

  const mode: "test" | "live" = secretKey.startsWith("sk_live") ? "live" : "test";
  const stripe = new Stripe(secretKey);

  console.log(`Stripe mode: ${mode}${write ? "" : "  (dry run — pass --write to apply)"}\n`);

  const replacements: Array<{ placeholder: string; priceId: string }> = [];

  for (const plan of pricingPlans) {
    if (plan.active === false) {
      console.log(`- ${plan.id}: inactive, skipped`);
      continue;
    }

    // Only plans carrying a Stripe price ref belong to this bootstrap —
    // creem/paypal plans configure their provider-side objects elsewhere.
    const ref = plan.stripePriceId;
    if (!ref) {
      console.log(`- ${plan.id}: no stripePriceId (provider=${plan.provider}), skipped`);
      continue;
    }

    const currentId = ref[mode];
    if (!currentId.startsWith(PLACEHOLDER_PREFIX)) {
      console.log(`- ${plan.id}: already configured (${currentId}), skipped`);
      continue;
    }

    const unitAmount = Math.round(plan.price * 100);
    const currency = plan.currency.toLowerCase();
    const recurring = isSubscriptionPlan(plan)
      ? ({ interval: plan.interval } as const)
      : undefined;

    console.log(
      `- ${plan.id}: ${plan.copy.en.name} — ${plan.price} ${plan.currency}` +
        (recurring ? ` / ${recurring.interval}` : " (one-time)")
    );

    if (!write) continue;

    // Idempotent product lookup by metadata.planId
    const found = await stripe.products.search({
      query: `metadata['planId']:'${plan.id}'`,
      limit: 1,
    });
    const product =
      found.data[0] ??
      (await stripe.products.create({
        name: plan.copy.en.name,
        description: plan.copy.en.description,
        metadata: { planId: plan.id },
      }));

    // Idempotent price match by amount + currency + interval
    const prices = await stripe.prices.list({ product: product.id, limit: 100 });
    const matched = prices.data.find(
      (p) =>
        p.active &&
        p.unit_amount === unitAmount &&
        p.currency === currency &&
        (recurring
          ? p.recurring?.interval === recurring.interval
          : p.recurring === null)
    );
    const price =
      matched ??
      (await stripe.prices.create({
        product: product.id,
        unit_amount: unitAmount,
        currency,
        ...(recurring ? { recurring } : {}),
        metadata: { planId: plan.id },
      }));

    console.log(`    product=${product.id}  price=${price.id}${matched ? " (reused)" : ""}`);
    replacements.push({ placeholder: currentId, priceId: price.id });
  }

  if (!write) {
    console.log("\nDry run complete. Re-run with --write to create and backfill.");
    return;
  }

  if (replacements.length === 0) {
    console.log("\nNothing to backfill.");
    return;
  }

  // Backfill config/pricing.ts — placeholders are globally unique strings, replaced in place
  const pricingPath = resolve(process.cwd(), "config/pricing.ts");
  let source = readFileSync(pricingPath, "utf8");
  for (const { placeholder, priceId } of replacements) {
    if (!source.includes(placeholder)) {
      console.warn(`WARN: placeholder ${placeholder} not found in config/pricing.ts`);
      continue;
    }
    source = source.replace(placeholder, priceId);
  }
  writeFileSync(pricingPath, source);
  console.log(`\nBackfilled ${replacements.length} price id(s) into config/pricing.ts (${mode} column).`);
  console.log("Review the diff, then commit.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
