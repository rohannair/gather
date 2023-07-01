import { Outlet } from '@remix-run/react'
import { Logo } from '@/components/Logo'

export default function Dashboard() {
  return (
    <div className="w-full min-h-screen grid items-center">
      <div className="w-full py-5 bg-zinc-800">
        <Logo />
      </div>
      <div className="text-zinc-800">
        <Outlet />
      </div>
    </div>
  )
}
