import { Insertable, Selectable } from 'kysely'
import { Generated } from '@/lib/types/Generated'
import { Timestamp } from '@/lib/types/Time'

export interface OrganizationsUsersTable {
  organization_id: number | null
  user_id: string | null
  created_at: Generated<Timestamp>
}

export type OrganizationsUsers = Selectable<OrganizationsUsersTable>
export type OrganizationsUsersCreate = Insertable<OrganizationsUsersTable>
