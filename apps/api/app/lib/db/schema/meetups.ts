import { sql, InferModel, eq } from "drizzle-orm";
import { db } from "../client";

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

export type Meetup = InferModel<typeof meetups>;
export type NewMeetup = InferModel<typeof meetups, "insert">;

export const getMeetupByOrganization = async (
  organizationId: string
): Promise<Meetup[]> => {
  return await db
    .select()
    .from(meetups)
    .where(eq(meetups.organizationId, organizationId));
};

export const getMeetupById = async (id: number): Promise<Meetup> => {
  return await db
    .select()
    .from(meetups)
    .where(eq(meetups.id, id))
    .then((res) => res[0]);
};

export const insertMeetup = async (args: NewMeetup): Promise<Meetup> => {
  const records = await db.insert(meetups).values(args).returning();
  return records[0];
};

export const updateMeetup = async (
  id: number,
  args: NewMeetup
): Promise<Meetup> => {
  const records = await db
    .update(meetups)
    .set(args)
    .where(eq(meetups.id, id))
    .returning();
  return records[0];
};
