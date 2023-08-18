import { conform, type FieldConfig } from '@conform-to/react'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

interface InputWithLabelProps {
  field: FieldConfig<string>
  label: string
  className?: string
}

export const InputWithLabel = ({
  label,
  field,
  className,
}: InputWithLabelProps) => {
  const hasErrors = field.errors && field.errors?.length > 0
  const error = field.errors?.[0]

  return (
    <section className={cn('flex flex-col space-y-2', className)}>
      <Label htmlFor={field.id}>{label}</Label>
      <Input
        {...conform.input(field)}
        className={cn(hasErrors && 'border-red-500')}
      />
      {hasErrors && (
        <div className="text-xs text-red-500 font-semibold">{error}</div>
      )}
    </section>
  )
}
