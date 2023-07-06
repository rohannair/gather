import type { V2_MetaFunction } from '@remix-run/node'
import { useParams } from '@remix-run/react'
import title from 'title'

import { PageTitle } from '@/components/PageTitle'

export const meta: V2_MetaFunction<{
  params: { slug: string }
}> = ({ params }) => [{ title: title(params.slug!) }]

export default function Organizations() {
  const { slug } = useParams<{ slug: string }>()
  return (
    <div className="w-full min-h-screen flex rounded-lg p-6">
      <PageTitle>{String(slug)}</PageTitle>
    </div>
  )
}
