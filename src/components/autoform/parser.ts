import type z from 'zod'
import { ZodFirstPartyTypeKind } from 'zod'

export function getBaseSchema(schema: z.ZodTypeAny): z.ZodTypeAny {
  if (!schema) return schema
  if ('unwrap' in schema) return getBaseSchema(schema.unwrap())
  if (schema._def.typeName === ZodFirstPartyTypeKind.ZodDefault)
    return getBaseSchema(schema._def.innerType)
  if (schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects)
    return getBaseSchema(schema._def.schema)
  return schema
}
