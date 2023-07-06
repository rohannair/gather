import { sql, eq, InferModel } from "drizzle-orm";
import {
  pgTable,
  uuid,
  uniqueIndex,
  timestamp,
  text,
  jsonb,
  date,
} from "drizzle-orm/pg-core";
import { db } from "../client";

export const users = pgTable(
  "users",
  {
    id: uuid("id").primaryKey(),
    email: text("email").notNull(),
    // Profile
    givenName: text("given_name"),
    familyName: text("family_name"),
    initials: text("initials"),
    dob: date("dob"),
    language: text("language").$type<"en" | "fr" | "es">(),
    // Account
    profileImg: text("profile_img"),
    username: text("username"),
    bio: text("bio"),
    links: jsonb("links").default(sql`'[]'::jsonb`),
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
  (t) => ({
    users_email_idx: uniqueIndex("users_email_idx").on(t.email),
  })
);

export type User = InferModel<typeof users>;
export type NewUser = InferModel<typeof users, "insert">;

export const getUserById = async (id: string): Promise<User> => {
  const records = await db.select().from(users).where(eq(users.id, id));
  return records[0];
};

export const insertUser = async (args: NewUser): Promise<User> => {
  const records = await db.insert(users).values(args).returning();
  return records[0];
};

export const updateUser = async (id: string, args: NewUser): Promise<User> => {
  const records = await db
    .update(users)
    .set(args)
    .where(eq(users.id, id))
    .returning();
  return records[0];
};
