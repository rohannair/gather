import { Link } from '@remix-run/react'

import { Logo } from '@/components/Logo'

interface ISidebarProps {
  children: React.ReactNode
}

export const Sidebar = ({ children }: ISidebarProps) => (
  <div className="h-full">
    <div className="rounded-lg m-4 bg-zinc-800 min-h-full flex flex-col">
      <div className="py-5 px-6 border-b border-zinc-700">
        <Link to="/dashboard">
          <Logo />
        </Link>
      </div>
      {children}
    </div>
  </div>
)
