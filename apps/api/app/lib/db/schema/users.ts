import { sql } from "drizzle-orm";
import {
  pgTable,
  uuid,
  uniqueIndex,
  timestamp,
  text,
} from "drizzle-orm/pg-core";

export const users = pgTable(
  "users",
  {
    id: uuid("id").primaryKey(),
    email: text("email").notNull(),
    givenName: text("given_name"),
    familyName: text("family_name"),
    initials: text("initials"),
    profileImg: text("profile_img"),
    role: text("role")
      .$type<"superadmin" | "admin" | "user">()
      .default("user")
      .notNull(),
    // Meta
    createdAt: timestamp("created_at")
      .default(sql`now()`)
      .notNull(),
    updatedAt: timestamp("updated_at"),
  },
  (users) => ({
    users_email_idx: uniqueIndex("users_email_idx").on(users.email),
  })
);
