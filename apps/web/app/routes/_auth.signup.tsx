import type { ActionFunction,V2_MetaFunction } from '@remix-run/node';
import { redirect } from '@remix-run/node'
import { Form, Link } from '@remix-run/react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export const meta: V2_MetaFunction = () => [{ title: 'Sign Up' }]

export const action: ActionFunction = async ({ request }) => {
  return redirect('/dashboard')
}

export default function SignUp() {
  return (
    <div className="w-2/3 max-w-screen-sm mx-auto">
      <Card>
        <Form method="post" action="/login">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Sign Up</CardTitle>
            <CardDescription>
              <Link to="/login">Have an account? Log In</Link>
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid grid-rows-3 gap-6">
              <Button variant="outline">
                {/* <Icons.gitHub className="mr-2 h-4 w-4" /> */}
                Google
              </Button>
              <Button variant="outline">
                {/* <Icons.google className="mr-2 h-4 w-4" /> */}
                Apple
              </Button>
              <Button variant="outline">
                {/* <Icons.google className="mr-2 h-4 w-4" /> */}
                Outlook
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4"></CardFooter>
        </Form>
      </Card>
    </div>
  )
}
