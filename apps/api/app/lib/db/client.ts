import { Pool } from "pg";
import { drizzle, NodePgDatabase } from "drizzle-orm/node-postgres";

const { DATABASE_URL } = process.env ?? "";

export const createClient = (): NodePgDatabase => {
  const pool = new Pool({
    connectionString: DATABASE_URL!,
  });

  return drizzle(pool);
};
