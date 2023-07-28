import { type OrganizationsUsersTable } from '@/modules/organizationsusers'
import { type OrganizationTable } from '@/modules/organization'
import { type UserTable } from '@/modules/user/types'

export interface Database {
  users: UserTable
  organizations: OrganizationTable
  organizations_users: OrganizationsUsersTable
}
