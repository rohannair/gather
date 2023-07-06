import { type LoaderArgs, redirect } from '@remix-run/node'
import { useParams } from '@remix-run/react'

import { PageTitle } from '@/components/PageTitle'

interface IEventViewProps {
  params: {
    id: string
  }
}

export const loader = async ({ params }: IEventViewProps & LoaderArgs) => {
  const { id } = params
  if (!id) {
    return redirect(`/events`)
  }
}

const EventView = () => {
  const { id } = useParams<{
    id: string
  }>()

  return (
    <div className="w-full min-h-screen flex flex-col rounded-lg p-6">
      <PageTitle>{`Event: ${id}`}</PageTitle>
      <pre className="w-full">
        <code>{JSON.stringify({ id }, null, 2)}</code>
      </pre>
    </div>
  )
}

export default EventView
