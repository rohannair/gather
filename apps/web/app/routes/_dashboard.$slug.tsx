import { V2_MetaFunction } from '@remix-run/node'
import { useParams } from '@remix-run/react'
import title from 'title'

export const meta: V2_MetaFunction<{
  params: { slug: string }
}> = ({ params }) => [{ title: title(params.slug!) }]

export default function Organizations() {
  const { slug } = useParams()
  return (
    <div className="w-full min-h-screen flex rounded-lg p-6">
      <h1 className="font-bold text-4xl">{title(slug ?? '')}</h1>
    </div>
  )
}
