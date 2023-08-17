import { Insertable, Selectable, Updateable } from 'kysely'
import { Json } from '@/lib/types/Json'
import { Timestamp } from '@/lib/types/Time'
import { Generated } from '@/lib/types/Generated'

export interface FeteTable {
  id: Generated<number>
  name: string
  description: string | null
  website: string | null
  type: string | null
  metadata: Json | null
  start_time: Timestamp | null
  end_time: Timestamp | null
  owner_id: string | null
  organization_id: number | null
  created_at: Generated<Timestamp>
  updated_at: Generated<Timestamp>
}

export type Fete = Selectable<FeteTable>
export type FeteCreate = Insertable<FeteTable>
export type FeteUpdate = Updateable<FeteTable>
