import { db } from '@/lib/db'
import { Organization, OrganizationCreate, OrganizationUpdate } from './types'

export function getOrganizationById(id: number) {
  return db
    .selectFrom('organizations')
    .where('id', '=', id)
    .selectAll()
    .executeTakeFirst()
}

export function findOrganization(params: Partial<Organization>) {
  if (params.id) {
    return getOrganizationById(params.id)
  }

  if (params.name) {
    return db
      .selectFrom('organizations')
      .where('name', '=', params.name)
      .selectAll()
      .executeTakeFirst()
  }

  return null
}

export function createOrganization(org: OrganizationCreate) {
  return db
    .insertInto('organizations')
    .values(org)
    .returningAll()
    .executeTakeFirstOrThrow()
}

export function updateOrganization(id: number, org: OrganizationUpdate) {
  return db
    .updateTable('organizations')
    .set(org)
    .where('id', '=', id)
    .returningAll()
    .executeTakeFirstOrThrow()
}
