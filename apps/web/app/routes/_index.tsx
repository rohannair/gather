import type { V2_MetaFunction } from '@remix-run/node'

import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

export default function Index() {
  const { toast } = useToast()
  return (
    <div className="w-full min-h-screen flex items-center align-middle bg-yellow-200">
      <h1 className="font-bold text-4xl">Hello world</h1>
      <div>
        <Button
          onClick={() => {
            toast({
              variant: 'destructive',
              title: 'Scheduled: Catch up',
              description: 'Friday, February 10, 2023 at 5:57 PM',
            })
          }}
        >
          Click me
        </Button>
      </div>
    </div>
  )
}
