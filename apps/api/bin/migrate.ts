import "dotenv/config";

import { migrate } from "drizzle-orm/postgres-js/migrator";
import { createClient } from "../app/lib/db";

async function main() {
  try {
    const db = createClient({
      max: 1,
      // eslint-disable-next-line turbo/no-undeclared-env-vars
      connectionString: process.env.DATABASE_URL!,
    });
    await migrate(db, {
      migrationsFolder: "app/lib/db/migrations",
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

main();
