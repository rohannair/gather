import type { V2_MetaFunction } from '@remix-run/node'

import { PageTitle } from '@/components/PageTitle'

export const meta: V2_MetaFunction = () => [{ title: 'Events' }]

export default function Events() {
  return (
    <div className="w-full min-h-screen flex flex-col rounded-lg p-6">
      <PageTitle>Events</PageTitle>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
          eaque accusantium nisi inventore ad iure et animi eos delectus
          corporis nulla commodi tempore vero, voluptas hic aperiam quas neque
          expedita.
        </p>
      </div>
    </div>
  )
}
