import type { ColumnType } from 'kysely'

export type JsonValue = JsonArray | JsonObject | JsonPrimitive
export type Json = ColumnType<JsonValue, string, string>
export type JsonArray = JsonValue[]
export type JsonObject = {
  [K in string]?: JsonValue
}
export type JsonPrimitive = boolean | null | number | string
