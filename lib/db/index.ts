import type { PgDatabase } from "drizzle-orm/pg-core/db";
import { createDatabase } from "./config";
import type * as schema from "./schema";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type DB = PgDatabase<any, typeof schema>;

const connectionString = process.env.DATABASE_URL?.trim() || "";

export const isDatabaseEnabled = Boolean(connectionString);

/**
 * Lazy / safe DB export for the wiki-only (no Postgres) deploy.
 * When DATABASE_URL is unset, importing this module must not open a client.
 * Any actual query throws a clear error.
 */
function createDisabledDb(): DB {
  return new Proxy({} as DB, {
    get(_target, prop) {
      if (prop === "then") return undefined;
      throw new Error(
        "DATABASE_URL is not set. This Forklore deploy runs without a database.",
      );
    },
  });
}

export const db: DB = isDatabaseEnabled
  ? createDatabase({ connectionString })
  : createDisabledDb();
