import { db } from '@/lib/db'
import { Organization, OrganizationCreate, OrganizationUpdate } from './types'

export async function getOrganizationById(id: number) {
  return await db
    .selectFrom('organizations')
    .where('id', '=', id)
    .selectAll()
    .executeTakeFirst()
}

export async function findOrganization(params: Partial<Organization>) {
  if (params.id) {
    return await getOrganizationById(params.id)
  }

  if (params.name) {
    return await db
      .selectFrom('organizations')
      .where('name', '=', params.name)
      .selectAll()
      .executeTakeFirst()
  }

  return null
}

export async function createOrganization(org: OrganizationCreate) {
  return await db
    .insertInto('organizations')
    .values(org)
    .returningAll()
    .executeTakeFirstOrThrow()
}

export async function updateOrganization(id: number, org: OrganizationUpdate) {
  return await db
    .updateTable('organizations')
    .set(org)
    .where('id', '=', id)
    .returningAll()
    .executeTakeFirstOrThrow()
}
