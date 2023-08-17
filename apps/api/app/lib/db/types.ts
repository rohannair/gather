import { type FeteTable } from '@/modules/fete'
import { type OrganizationsUsersTable } from '@/modules/organizationsusers'
import { type OrganizationTable } from '@/modules/organization'
import { type UserTable } from '@/modules/user'

export interface Database {
  fetes: FeteTable
  users: UserTable
  organizations: OrganizationTable
  organizations_users: OrganizationsUsersTable
}
