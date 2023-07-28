import {
  Generated,
  ColumnType,
  Insertable,
  Selectable,
  Updateable,
} from 'kysely'
import { Timestamp } from '@/lib/types/Time'

export interface OrganizationTable {
  id: Generated<number>
  name: string
  description: string | null
  website: string | null
  img_url: string | null
  owner_id: string | null
  created_at: Generated<Timestamp>
  updated_at: Generated<Timestamp>
}

export type Organization = Selectable<OrganizationTable>
export type OrganizationCreate = Insertable<OrganizationTable>
export type OrganizationUpdate = Updateable<OrganizationTable>
