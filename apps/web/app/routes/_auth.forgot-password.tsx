import type { ActionFunction,V2_MetaFunction } from '@remix-run/node';
import { redirect } from '@remix-run/node'
import { Form } from '@remix-run/react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export const meta: V2_MetaFunction = () => [{ title: 'Forgot Password' }]

export const action: ActionFunction = async ({ request }) => {
  return redirect('/dashboard')
}

export default function ResetPassword() {
  return (
    <div className="w-1/3 mx-auto min-h-screen flex flex-col gap-6 rounded-lg p-6 mt-5">
      <h1 className="font-bold text-3xl text-center">Forgot Password</h1>
      <Form method="post" action="/signup" className="flex flex-col gap-6">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            className="text-zinc-800"
          />
        </div>

        <div className="flex items-end justify-center">
          <Button type="submit">Reset</Button>
        </div>
      </Form>
    </div>
  )
}
