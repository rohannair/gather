import 'dotenv/config'
import * as path from 'path'
import { promises as fs } from 'fs'

import { Migrator, FileMigrationProvider } from 'kysely'
import { run } from 'kysely-migration-cli'

import { db } from '../app/lib/db/client'

const migrator = new Migrator({
  db,
  provider: new FileMigrationProvider({
    migrationFolder: path.join(__dirname, '../app/lib/db/migrations'),
    fs,
    path,
  }),
})

run(db, migrator)
