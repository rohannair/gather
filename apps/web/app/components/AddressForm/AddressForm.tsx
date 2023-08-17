import type { FieldConfig } from '@conform-to/react'
import { Form } from '@remix-run/react'
import { z } from 'zod'

import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card'
import { InputWithLabel } from '@/components/InputWithLabel'

export const schema = z.object({
  address1: z.string().nonempty('Address is required'),
  address2: z.string().nonempty().default(''),
  city: z.string().nonempty('City is required'),
  state: z.string().nonempty('State is required'),
  postCode: z.string().nonempty('postCode is required'),
  country: z.string().nonempty('Country is required'),
})

interface AddressFormProps {
  form: { props: any }
  address1: FieldConfig<string>
  address2: FieldConfig<string>
  city: FieldConfig<string>
  state: FieldConfig<string>
  postCode: FieldConfig<string>
  country: FieldConfig<string>
}

export const AddressForm = ({
  form,
  address1,
  address2,
  city,
  state,
  postCode,
  country,
}: AddressFormProps) => (
  <Card>
    <CardHeader>
      <CardTitle>Address</CardTitle>
    </CardHeader>
    <CardContent>
      <Form {...form.props} className="flex flex-col space-y-3">
        <InputWithLabel label="Address" field={address1} />
        <InputWithLabel label="Address 2" field={address2} />
        <InputWithLabel label="City" field={city} />
        <InputWithLabel label="State" field={state} />
        <InputWithLabel label="Postal Code" field={postCode} />
        <InputWithLabel label="Country" field={country} />
      </Form>
    </CardContent>
  </Card>
)
