import { Kysely, sql } from 'kysely'

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable('organizations')
    .addColumn('id', 'serial', col => col.primaryKey())
    .addColumn('name', 'varchar(255)', col => col.unique().notNull())
    .addColumn('description', 'varchar')
    .addColumn('website', 'varchar(255)')
    .addColumn('img_url', 'varchar')
    .addColumn('owner_id', 'uuid', col =>
      col.references('users.id').onDelete('cascade'),
    )
    .addColumn('created_at', 'timestamp', col =>
      col.defaultTo(sql`CURRENT_TIMESTAMP`).notNull(),
    )
    .addColumn('updated_at', 'timestamp', col =>
      col.defaultTo(sql`CURRENT_TIMESTAMP`).notNull(),
    )
    .execute()

  await db.schema
    .createIndex('organizations_name_idx')
    .on('organizations')
    .column('name')
    .execute()
}

export async function down(db: Kysely<any>): Promise<void> {}
