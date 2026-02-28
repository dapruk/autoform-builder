import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import type z from 'zod'

interface AutoFormProps<T extends z.ZodType<any, any, any>> {
  schema: T
  onSubmit: (data: z.infer<T>) => void
}

export function useAutoForm<T extends z.ZodType<any, any, any>>({ schema }: AutoFormProps<T>) {
  const form = useForm<z.infer<T>>({
    resolver: zodResolver(schema) as any,
  })

  return form
}
