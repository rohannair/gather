import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ActionFunction, V2_MetaFunction, redirect } from '@remix-run/node'
import { Form, Link } from '@remix-run/react'

export const meta: V2_MetaFunction = () => [{ title: 'Log In' }]

export const action: ActionFunction = async ({ request }) => {
  return redirect('/dashboard')
}

export default function LogIn() {
  return (
    <div className="w-1/3 mx-auto min-h-screen flex flex-col gap-6 rounded-lg p-6 mt-5">
      <h1 className="font-bold text-3xl text-center">Log In</h1>
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
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            className="text-zinc-800"
          />
        </div>
        <div className="flex items-end justify-center">
          <Button type="submit">Log In</Button>
        </div>
        <div className="text-sm flex flex-col items-center text-center gap-4">
          <Link to="/signup">Need an account? Sign Up</Link>
          <Link to="/forgot-password">Forgot password?</Link>
        </div>
      </Form>
    </div>
  )
}
