import { ColumnType, Insertable, Selectable, Updateable } from 'kysely'
import { Generated } from '@/lib/types/Generated'
import { Timestamp } from '@/lib/types/Time'
import { Json } from '@/lib/types/Json'

export interface UserTable {
  id: string
  email: string
  given_name: string | null
  family_name: string | null
  initials: string | null
  dob: ColumnType<Date, string> | null
  language: 'en' | 'fr' | 'es'
  profile_img: string | null
  username: string | null
  bio: string | null
  role: 'superadmin' | 'admin' | 'user'
  links: Generated<Json | null>
  created_at: Generated<Timestamp>
  updated_at: Generated<Timestamp>
}

export type User = Selectable<UserTable>
export type UserCreate = Insertable<UserTable>
export type UserUpdate = Updateable<UserTable>
