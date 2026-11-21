#!/usr/bin/env node
/**
 * Sync .env* keys into Cloudflare Workers secrets (non-NEXT_PUBLIC).
 * NEXT_PUBLIC_* should be set as Build variables in the CF dashboard.
 *
 * Usage: node scripts/sync-env-to-cloudflare.mjs [.env.local]
 * Requires: wrangler logged in; wrangler.jsonc "name" set.
 */
import { execSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const envFile = resolve(process.argv[2] || ".env.local");
if (!existsSync(envFile)) {
  console.error(`Missing env file: ${envFile}`);
  process.exit(1);
}

function parseEnv(raw) {
  const out = {};
  for (const line of raw.split(/\r?\n/)) {
    const t = line.trim();
    if (!t || t.startsWith("#")) continue;
    const i = t.indexOf("=");
    if (i <= 0) continue;
    const key = t.slice(0, i).trim();
    let val = t.slice(i + 1).trim();
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    out[key] = val;
  }
  return out;
}

const env = parseEnv(readFileSync(envFile, "utf8"));
const skip = new Set([
  "DATABASE_URL", // wiki deploy: no Postgres
]);

const secrets = Object.entries(env).filter(([k, v]) => {
  if (!v) return false;
  if (k.startsWith("NEXT_PUBLIC_")) return false;
  if (skip.has(k)) return false;
  return true;
});

console.log(`Syncing ${secrets.length} secrets from ${envFile} …`);
for (const [key, value] of secrets) {
  try {
    execSync(`npx wrangler secret put ${key}`, {
      input: value,
      stdio: ["pipe", "inherit", "inherit"],
      encoding: "utf8",
    });
    console.log(`  ok ${key}`);
  } catch {
    console.error(`  FAIL ${key}`);
    process.exitCode = 1;
  }
}
