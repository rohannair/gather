import { sql } from 'drizzle-orm'
import {
  pgTable,
  uuid,
  uniqueIndex,
  timestamp,
  text,
  jsonb,
  date,
} from 'drizzle-orm/pg-core'

export const users = pgTable(
  'users',
  {
    id: uuid('id').primaryKey(),
    email: text('email').notNull(),
    // Profile
    givenName: text('given_name'),
    familyName: text('family_name'),
    initials: text('initials'),
    dob: date('dob'),
    language: text('language').$type<'en' | 'fr' | 'es'>(),
    // Account
    profileImg: text('profile_img'),
    username: text('username'),
    bio: text('bio'),
    links: jsonb('links').default(sql`'[]'::jsonb`),
    role: text('role')
      .$type<'superadmin' | 'admin' | 'user'>()
      .default('user')
      .notNull(),
    // Meta
    createdAt: timestamp('created_at')
      .default(sql`now()`)
      .notNull(),
    updatedAt: timestamp('updated_at'),
  },
  users => ({
    users_email_idx: uniqueIndex('users_email_idx').on(users.email),
  }),
)
