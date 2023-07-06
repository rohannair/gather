import type { V2_MetaFunction } from '@remix-run/node'

import { PageTitle } from '@/components/PageTitle'

export const meta: V2_MetaFunction = () => [{ title: 'Organizations' }]

export default function Organizations() {
  return (
    <div className="w-full min-h-screen flex rounded-lg p-6">
      <PageTitle>Organizations</PageTitle>
    </div>
  )
}
