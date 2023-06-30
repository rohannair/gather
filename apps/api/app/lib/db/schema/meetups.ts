import { sql } from "drizzle-orm";
import {
  pgTable,
  uuid,
  uniqueIndex,
  timestamp,
  text,
  serial,
} from "drizzle-orm/pg-core";

import { users } from "./users";
import { organizations } from "./organizations";

export const meetups = pgTable(
  "meetups",
  {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    description: text("description"),
    startDate: timestamp("start_date"),
    endDate: timestamp("end_date"),
    organizationId: uuid("organization_id")
      .references(() => organizations.id)
      .notNull(),
    organizerId: uuid("organizer")
      .references(() => users.id)
      .notNull(),
    createdAt: timestamp("created_at")
      .default(sql`now()`)
      .notNull(),
    updatedAt: timestamp("updated_at"),
  },
  (t) => ({
    meetups_name_idx: uniqueIndex("meetups_name_idx").on(t.name),
  })
);
