import { conform, type FieldConfig } from '@conform-to/react'

import { Alert } from '@/components/ui/alert'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface InputWithLabelProps {
  field: FieldConfig<string>
  label: string
}

export const InputWithLabel = ({ label, field }: InputWithLabelProps) => (
  <div className="flex flex-col space-y-2">
    <Label htmlFor={field.id}>{label}</Label>
    <Input {...conform.input(field)} />
    {field.errors ? (
      <Alert variant="destructive">{field.errors[0]}</Alert>
    ) : null}
  </div>
)
