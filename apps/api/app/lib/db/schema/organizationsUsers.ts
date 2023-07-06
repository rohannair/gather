import { sql, eq, InferModel } from "drizzle-orm";
import { pgTable, uuid, primaryKey } from "drizzle-orm/pg-core";
import { users } from "./users";
import { organizations } from "./organizations";
import { db } from "../client";

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

export const getOrganizationsByUser = async (userId: string) => {
  return await db
    .select({
      id: organizations.id,
      name: organizations.name,
      ownerId: organizations.ownerId,
    })
    .from(organizationsUsers)
    .leftJoin(
      organizations,
      eq(organizationsUsers.organizationId, organizations.id)
    )
    .leftJoin(users, eq(organizationsUsers.userId, users.id))
    .where(eq(organizationsUsers.userId, userId));
};
