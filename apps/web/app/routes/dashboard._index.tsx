const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full h-full bg-slate-400 p-5 rounded-md">{children} </div>
)

export default function Index() {
  return (
    <div>
      <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight mt-4 mb-5 lg:text-4xl">
        Upcoming Events
      </h1>
      <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 sm:gap-4">
        <Card>Hi</Card>
        <Card>Ho</Card>
        <Card>Let's</Card>
        <Card>Go</Card>
      </div>
    </div>
  )
}
