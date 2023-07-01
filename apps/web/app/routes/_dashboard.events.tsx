import { V2_MetaFunction } from '@remix-run/node'

export const meta: V2_MetaFunction = () => [{ title: 'Events' }]

export default function Events() {
  return (
    <div className="w-full min-h-screen flex rounded-lg p-6">
      <h1 className="font-bold text-4xl">Events</h1>
    </div>
  )
}
