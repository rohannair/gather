import { InferModel, sql } from "drizzle-orm";
import {
  pgEnum,
  pgTable,
  date,
  varchar,
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
    given_name: text("given_name"),
    family_name: text("family_name"),
    initials: text("initials"),
    profile_img: text("profile_img"),
    role: text("role")
      .$type<"superadmin" | "admin" | "user">()
      .default("user")
      .notNull(),
    created_at: timestamp("created_at")
      .default(sql`now()`)
      .notNull(),
    updated_at: timestamp("updated_at"),
  },
  (users) => ({
    users_email_idx: uniqueIndex("users_email_idx").on(users.email),
  })
);

export const groups = pgTable(
  "groups",
  {
    id: uuid("id").primaryKey(),
    name: varchar("name", { length: 256 }).notNull(),
    created_at: timestamp("created_at")
      .default(sql`now()`)
      .notNull(),
    updated_at: timestamp("updated_at"),
  },
  (groups) => ({
    groups_name_idx: uniqueIndex("groups_name_idx").on(groups.name),
  })
);
