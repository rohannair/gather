import { db } from '@/lib/db'
import { User, UserCreate, UserUpdate } from './types'
import invariant from 'tiny-invariant'

export async function getUserById(id: string) {
  invariant(id, 'id is required')

  return await db
    .selectFrom('users')
    .where('id', '=', id)
    .selectAll()
    .executeTakeFirst()
}

export async function findUsers(params: Partial<User>) {
  let query = db.selectFrom('users')

  if (params.id) {
    return await getUserById(params.id)
  }

  if (params.email) {
    query = query.where('email', '=', params.email)
  }

  if (params.family_name) {
    query = query.where('family_name', '=', params.family_name)
  }

  return await query.selectAll().execute()
}

export async function updateUser(id: string, updateWith: UserUpdate) {
  invariant(id, 'id is required')

  return await db
    .updateTable('users')
    .set(updateWith)
    .where('id', '=', id)
    .execute()
}

export async function createPerson(person: UserCreate) {
  return await db
    .insertInto('users')
    .values(person)
    .returningAll()
    .executeTakeFirstOrThrow()
}
