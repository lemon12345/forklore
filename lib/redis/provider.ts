/**
 * [INPUT]: depends on ./types
 * [OUTPUT]: exports getDefaultRedisProvider
 * [POS]: lib/redis provider selection helper, consumed by index.ts and rate-limit.ts
 * [PROTOCOL]: Update this header when changed, then check CLAUDE.md
 */

import "server-only";

import type { RedisProviderName } from "./types";

export function getDefaultRedisProvider(): RedisProviderName {
  const env = process.env.DEFAULT_REDIS_PROVIDER;
  if (env === "ioredis") return "ioredis";
  // Default to Upstash to preserve pre-upgrade behavior.
  return "upstash";
}
