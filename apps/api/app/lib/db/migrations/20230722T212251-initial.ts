import { Kysely, sql } from 'kysely'

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable('users')
    .addColumn('id', 'uuid', col => col.primaryKey())
    .addColumn('email', 'text', col => col.unique().notNull())
    .addColumn('given_name', 'varchar')
    .addColumn('family_name', 'varchar')
    .addColumn('initials', 'varchar')
    .addColumn('dob', 'date')
    .addColumn('language', 'varchar')
    .addColumn('profile_img', 'varchar')
    .addColumn('username', 'varchar')
    .addColumn('bio', 'varchar')
    .addColumn('links', 'jsonb', col => col.defaultTo('{}'))
    .addColumn('role', 'varchar')
    .addColumn('created_at', 'timestamp', col =>
      col.defaultTo(sql`CURRENT_TIMESTAMP`).notNull(),
    )
    .addColumn('updated_at', 'timestamp', col =>
      col.defaultTo(sql`CURRENT_TIMESTAMP`).notNull(),
    )
    .execute()

  await db.schema
    .createIndex('users_email_idx')
    .on('users')
    .column('email')
    .execute()
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropIndex('users_email_idx').execute()
  await db.schema.dropTable('users').execute()
}
