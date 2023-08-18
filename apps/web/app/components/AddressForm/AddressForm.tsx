import type { FieldConfig } from '@conform-to/react'
import { useFieldset } from '@conform-to/react'
import { z } from 'zod'

import { InputWithLabel } from '@/components/InputWithLabel'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const schema = z.object({
  address1: z.string().nonempty('Address is required'),
  address2: z.string().nonempty().default(''),
  city: z.string().nonempty('City is required'),
  state: z.string().nonempty('State is required'),
  postCode: z.string().nonempty('postCode is required'),
  country: z.string().nonempty('Country is required'),
})

interface AddressFormProps {
  address: FieldConfig<typeof schema>
  form: { props: any; ref: any }
}

export const AddressForm = ({ form, address }: AddressFormProps) => {
  const { address1, address2, city, state, postCode, country } = useFieldset(
    form.ref,
    address,
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle>Address</CardTitle>
      </CardHeader>
      <CardContent>
        <fieldset className="flex flex-col space-y-3">
          <InputWithLabel label="Address" field={address1} />
          <InputWithLabel label="Address 2" field={address2} />
          <InputWithLabel label="City" field={city} />
          <InputWithLabel label="State" field={state} />
          <InputWithLabel label="Postal Code" field={postCode} />
          <InputWithLabel label="Country" field={country} />
        </fieldset>
      </CardContent>
    </Card>
  )
}
