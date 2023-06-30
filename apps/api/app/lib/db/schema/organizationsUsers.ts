import { pgTable, uuid, primaryKey } from "drizzle-orm/pg-core";
import { users } from "./users";
import { organizations } from "./organizations";

export const organizationsUsers = pgTable(
  "organizations_users",
  {
    userId: uuid("user_id")
      .references(() => users.id)
      .notNull(),
    organizationId: uuid("organization_id")
      .references(() => organizations.id)
      .notNull(),
  },
  (t) => ({
    pk: primaryKey(t.userId, t.organizationId),
  })
);
