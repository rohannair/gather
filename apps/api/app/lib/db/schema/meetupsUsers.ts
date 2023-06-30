import { sql } from "drizzle-orm";
import {
  pgTable,
  uuid,
  timestamp,
  text,
  primaryKey,
} from "drizzle-orm/pg-core";

import { users } from "./users";
import { meetups } from "./meetups";

export const meetupsUsers = pgTable(
  "meetups_users",
  {
    userId: uuid("user_id")
      .references(() => users.id)
      .notNull(),
    meetupId: uuid("meetup_id")
      .references(() => meetups.id)
      .notNull(),
    replyStatus: text("reply_status")
      .$type<"yes" | "no" | "maybe">()
      .default("no"),
    createdAt: timestamp("created_at")
      .default(sql`now()`)
      .notNull(),
    updatedAt: timestamp("updated_at"),
  },
  (t) => ({
    pk: primaryKey(t.userId, t.meetupId),
  })
);
