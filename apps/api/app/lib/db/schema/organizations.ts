import { sql } from "drizzle-orm";
import {
  pgTable,
  varchar,
  uuid,
  uniqueIndex,
  timestamp,
} from "drizzle-orm/pg-core";

import { users } from "./users";

export const organizations = pgTable(
  "organizations",
  {
    id: uuid("id").primaryKey(),
    name: varchar("name", { length: 256 }).notNull(),
    ownerId: uuid("owner")
      .references(() => users.id)
      .notNull(),
    // Meta
    createdAt: timestamp("created_at")
      .default(sql`now()`)
      .notNull(),
    updatedAt: timestamp("updated_at"),
  },
  (organizations) => ({
    organizations_name_idx: uniqueIndex("organizations_name_idx").on(
      organizations.name
    ),
  })
);
