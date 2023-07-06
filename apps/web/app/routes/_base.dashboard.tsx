import { PageTitle } from '@/components/PageTitle'

const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full h-full bg-slate-400 p-5 rounded-md">{children} </div>
)

export default function Index() {
  return (
    <div>
      <PageTitle>Upcoming Events</PageTitle>
      <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 sm:gap-4">
        <Card>Hi</Card>
        <Card>Ho</Card>
        <Card>Let's</Card>
        <Card>Go</Card>
      </div>
    </div>
  )
}
