import { db } from '@/lib/db'
import { User, UserCreate, UserUpdate } from './types'
import invariant from 'tiny-invariant'

export function getUserById(id: string) {
  invariant(id, 'id is required')

  return db
    .selectFrom('users')
    .where('id', '=', id)
    .selectAll()
    .executeTakeFirst()
}

export function findUsers(params: Partial<User>) {
  let query = db.selectFrom('users')

  if (params.id) {
    return getUserById(params.id)
  }

  if (params.email) {
    return query.where('email', '=', params.email).selectAll().execute()
  }

  if (params.family_name) {
    return query
      .where('family_name', '=', params.family_name)
      .selectAll()
      .execute()
  }
}

export function updateUser(id: string, updateWith: UserUpdate) {
  invariant(id, 'id is required')

  return db.updateTable('users').set(updateWith).where('id', '=', id).execute()
}

export function createPerson(person: UserCreate) {
  return db
    .insertInto('users')
    .values(person)
    .returningAll()
    .executeTakeFirstOrThrow()
}
