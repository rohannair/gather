import { db } from '@/lib/db'
import { Fete, FeteCreate, FeteUpdate } from './types'
import invariant from 'tiny-invariant'

export function getFeteById(id: number) {
  return db
    .selectFrom('fetes')
    .where('id', '=', id)
    .selectAll()
    .executeTakeFirst()
}

export function findFete(params: Partial<Fete>) {
  if (params.id) {
    return getFeteById(params.id)
  }

  if (params.name) {
    return db
      .selectFrom('fetes')
      .where('name', '=', params.name)
      .selectAll()
      .executeTakeFirst()
  }

  return null
}

export function createFete(fete: FeteCreate) {
  return db
    .insertInto('fetes')
    .values(fete)
    .returningAll()
    .executeTakeFirstOrThrow()
}

export function updateFete(fete: FeteUpdate) {
  invariant(fete.id, 'Cannot update fete without id')
  return db
    .updateTable('fetes')
    .set(fete)
    .where('id', '=', fete.id)
    .returningAll()
    .executeTakeFirstOrThrow()
}
