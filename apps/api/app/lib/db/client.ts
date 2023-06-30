import { Pool } from "pg";
import { drizzle, NodePgDatabase } from "drizzle-orm/node-postgres";

const { DATABASE_URL } = process.env ?? "";

export const createClient = (opts?: Record<string, any>): NodePgDatabase => {
  const pool = new Pool({
    connectionString: DATABASE_URL!,
    ...opts,
    ssl: {
      rejectUnauthorized: false,
    },
  });

  return drizzle(pool);
};

export const db = createClient();
