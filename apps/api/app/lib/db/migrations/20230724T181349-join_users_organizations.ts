import { Kysely, sql } from 'kysely'

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable('organizations_users')
    .addColumn('organization_id', 'integer', col =>
      col.references('organizations.id').onDelete('cascade'),
    )
    .addColumn('user_id', 'uuid', col =>
      col.references('users.id').onDelete('cascade'),
    )
    .addColumn('created_at', 'timestamp', col =>
      col.defaultTo(sql`CURRENT_TIMESTAMP`).notNull(),
    )
    .execute()

  await db.schema
    .createIndex('organizations_users_id_idx')
    .on('organizations_users')
    .columns(['organization_id', 'user_id'])
    .execute()
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropIndex('organizations_users_id_idx').execute()
  await db.schema.dropTable('organizations_users').execute()
}
