import { db } from '@/lib/db'
import {
  OrganizationsUsers,
  OrganizationsUsersCreate,
} from '@/modules/organizationsusers/types'
import { User } from '@/modules/user'

export function getOrganizationsByUserId(id: string) {
  return db
    .selectFrom('organizations')
    .innerJoin('organizations_users as ou', 'organizations.id', 'ou.user_id')
    .where('ou.user_id', '=', id)
    .selectAll()
    .execute()
}

export function getUserssByOrganizationId(id: number): Promise<User[]> {
  return db
    .selectFrom('users')
    .innerJoin('organizations_users as ou', 'users.id', 'ou.user_id')
    .where('ou.organization_id', '=', id)
    .selectAll()
    .execute()
}

export function createOrganizationsUsers(
  args: OrganizationsUsersCreate,
): Promise<OrganizationsUsers> {
  return db
    .insertInto('organizations_users')
    .values(args)
    .returningAll()
    .executeTakeFirstOrThrow()
}

export function deleteOrganizationsUsers({
  organization_id,
  user_id,
}: {
  organization_id: number
  user_id: string
}) {
  return db
    .deleteFrom('organizations_users')
    .where('organization_id', '=', organization_id)
    .where('user_id', '=', user_id)
    .execute()
}
