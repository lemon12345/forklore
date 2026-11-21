/**
 * [INPUT]: Depends on @/lib/db's db + isDatabaseEnabled, @/lib/redis's redis,
 *          @/lib/logger's getLogger, drizzle-orm's sql
 * [OUTPUT]: Exports GET — the /api/health liveness + readiness probe
 * [POS]: The uptime entry of app/api/health: one unauthenticated endpoint that pings every
 *        backing service in parallel and folds the results into a single HTTP status, so
 *        load balancers, uptime monitors and container orchestrators share one contract
 * [PROTOCOL]: Update this header on changes, then check CLAUDE.md
 *
 * ============================================================================
 * Contract:
 *
 *   GET /api/health  ->  200 { status: 'ok',    at, uptimeSec, checks }
 *                        503 { status: 'error', at, uptimeSec, checks }
 *
 *   checks[name] = { status: 'ok' | 'down' | 'skipped', latencyMs }
 *
 *   - 'skipped' means the dependency is not configured in this deployment
 *     (the template ships without Redis, for instance) — never a failure.
 *   - Only 'down' turns the whole probe red. A monitor therefore alerts on the
 *     HTTP status alone and never has to parse the body.
 *
 * Deliberately public and deliberately opaque: the endpoint takes no secret so any
 * probe can reach it, and it returns no error strings, versions or hostnames back —
 * failure details go to the logger, not to the caller.
 *
 * Every probe is capped by CHECK_TIMEOUT_MS so a hung TCP connection degrades into a
 * 'down' result instead of holding the request open until the platform kills it.
 *
 * Adding a dependency = appending one entry to CHECKS. No branching anywhere else.
 * ============================================================================
 */

import { db, isDatabaseEnabled } from '@/lib/db';
import { getLogger } from '@/lib/logger';
import { redis } from '@/lib/redis';
import { sql } from 'drizzle-orm';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'
export const revalidate = 0

const logger = getLogger('api:health')

// A probe is a network round-trip, not a computation: this is the whole budget
// each dependency gets before it is declared down.
const CHECK_TIMEOUT_MS = 3_000

// Read-only key, never written. Its absence is a perfectly healthy answer — what
// is being measured is the round-trip, not the value.
const REDIS_PROBE_KEY = 'health:probe'

type CheckStatus = 'ok' | 'down' | 'skipped'

interface CheckResult {
  status: CheckStatus
  latencyMs: number
}

interface HealthCheck {
  name: string
  /**
   * Resolves on a healthy round-trip, throws otherwise; the value is ignored.
   * `null` means the dependency is not configured here — reported as 'skipped'.
   * Both clients are already null-when-unconfigured, so their own existence is
   * the configuration truth and no env var list is duplicated below.
   */
  probe: (() => Promise<unknown>) | null
}

// Local alias: TypeScript narrows a const binding into the closure below, an
// imported one it does not.
const redisClient = redis

const CHECKS: HealthCheck[] = [
  {
    name: 'database',
    probe: isDatabaseEnabled ? () => db.execute(sql`select 1`) : null,
  },
  {
    name: 'redis',
    probe: redisClient ? () => redisClient.get(REDIS_PROBE_KEY) : null,
  },
]

function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const timer = setTimeout(
      () => reject(new Error(`health check timed out after ${ms}ms`)),
      ms
    )
    promise.then(resolve, reject).finally(() => clearTimeout(timer))
  })
}

async function runCheck(check: HealthCheck): Promise<CheckResult> {
  if (!check.probe) {
    return { status: 'skipped', latencyMs: 0 }
  }

  const startedAt = Date.now()
  try {
    await withTimeout(check.probe(), CHECK_TIMEOUT_MS)
    return { status: 'ok', latencyMs: Date.now() - startedAt }
  } catch (error) {
    // The caller gets a bare 'down'; the operator gets the reason. Deliberately
    // warn, not error: a monitor re-probes every few seconds, so an outage would
    // fire one Sentry exception per probe while the 503 already raised the alarm.
    logger.warn({ err: error, check: check.name }, 'health check failed')
    return { status: 'down', latencyMs: Date.now() - startedAt }
  }
}

export async function GET() {
  // Parallel: total latency is the slowest dependency, not their sum.
  const results = await Promise.all(CHECKS.map(runCheck))

  const checks = Object.fromEntries(
    CHECKS.map((check, index) => [check.name, results[index]])
  ) as Record<string, CheckResult>

  const healthy = results.every((result) => result.status !== 'down')

  return NextResponse.json(
    {
      status: healthy ? 'ok' : 'error',
      at: new Date().toISOString(),
      uptimeSec: Math.round(process.uptime()),
      checks,
    },
    {
      status: healthy ? 200 : 503,
      headers: { 'Cache-Control': 'no-store' },
    }
  )
}
