import { useState } from 'react'
import { conform, useForm } from '@conform-to/react'
import { parse } from '@conform-to/zod'
import { Switch } from '@radix-ui/react-switch'
import { type ActionFunction, json } from '@remix-run/node'
import { Form, useActionData } from '@remix-run/react'
import { z } from 'zod'

import { AddressForm, schema as addressSchema } from '@/components/AddressForm'
import { Editor } from '@/components/Editor'
import { PageTitle } from '@/components/PageTitle'
import { Alert } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData()
  const submission = await parse(formData, { schema })

  if (!submission.value) {
    return json({ status: 'error', submission }, { status: 400 })
  }

  const { name, description } = submission.value
  return {
    name,
    description,
  }
  // call graphql here
  // return redirect(`/events/${name}`)
}

const schema = z.object({
  name: z.string().nonempty('Name is required'),
  description: z.string().nonempty('Description is required'),
  startDate: z.string().datetime('Start Date is required'),
  endDate: z.string().datetime('End Date is required'),
  location: z.string().nonempty('Location is required'),
  address: addressSchema,
})

const EventCreate = () => {
  const actionData = useActionData<typeof action>()
  const [isVirtual, setIsVirtual] = useState<boolean>(false)

  const [form, { name, description, location, startDate, endDate, address }] =
    useForm({
      id: 'event-create',
      onValidate({ formData }) {
        return parse(formData, { schema })
      },
      lastSubmission: actionData?.submission,
      shouldValidate: 'onBlur',
    })

  return (
    <div className="w-full min-h-screen flex flex-col rounded-lg p-6">
      <PageTitle>Create Event</PageTitle>
      <Form method="post" {...form.props}>
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-2">
            <Label htmlFor={name.id}>Event Name</Label>
            <Input {...conform.input(name)} />
            {name.errors ? (
              <Alert variant="destructive">{name.errors[0]}</Alert>
            ) : null}
          </div>
          <div className="flex flex-row space-x-2">
            <div className="flex flex-col space-y-2 w-1/2">
              <Label htmlFor={startDate.id}>Start Date &amp; Time</Label>
              <Input type="datetime-local" {...conform.input(startDate)} />
            </div>
            <div className="flex flex-col space-y-2 w-1/2">
              <Label htmlFor={endDate.id}>End Date &amp; Time</Label>
              <Input type="datetime-local" {...conform.input(endDate)} />
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor={location.id}>Location</Label>

            <Label>
              <Switch
                id="switch"
                checked={isVirtual}
                onCheckedChange={setIsVirtual}
              />
              Virtual Event?
            </Label>

            {isVirtual ? (
              <>
                <Label htmlFor="location">Address</Label>
                <Input id="location" {...conform.input(location)} />
              </>
            ) : (
              <AddressForm
                form={form}
                address1={address1}
                address2={address2}
                city={city}
                state={state}
                postCode={postCode}
                country={country}
              />
            )}
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor={description.id}>Description</Label>

            <Editor {...conform.input(description)} />
            {description.errors && description.errors.length > 0 ? (
              <Alert variant="destructive">{description.errors[0]}</Alert>
            ) : null}
          </div>

          <div className="text-right">
            <Button type="submit">Create</Button>
          </div>
        </div>
      </Form>
    </div>
  )
}

export default EventCreate
