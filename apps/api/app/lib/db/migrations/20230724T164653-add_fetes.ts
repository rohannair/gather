import { Kysely, sql } from 'kysely'

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable('fetes')
    .addColumn('id', 'serial', col => col.primaryKey())
    .addColumn('name', 'varchar(255)', col => col.notNull())
    .addColumn('description', 'varchar')
    .addColumn('website', 'varchar(255)')
    .addColumn('type', 'varchar')
    .addColumn('metadata', 'jsonb')
    .addColumn('start_time', 'timestamp')
    .addColumn('end_time', 'timestamp')
    .addColumn('owner_id', 'uuid', col =>
      col.references('users.id').onDelete('cascade'),
    )
    .addColumn('organization_id', 'integer', col =>
      col.references('organizations.id').onDelete('cascade'),
    )
    .addColumn('created_at', 'timestamp', col =>
      col.defaultTo(sql`CURRENT_TIMESTAMP`).notNull(),
    )
    .addColumn('updated_at', 'timestamp', col =>
      col.defaultTo(sql`CURRENT_TIMESTAMP`).notNull(),
    )
    .execute()

  await db.schema
    .createIndex('fetes_name_idx')
    .on('fetes')
    .column('name')
    .execute()
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropIndex('fetes_name_idx').execute()
  await db.schema.dropTable('fetes').execute()
}
