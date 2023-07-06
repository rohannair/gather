import type { V2_MetaFunction } from '@remix-run/node'
import { Outlet } from '@remix-run/react'

import { NavLink,Sidebar } from '@/components/Sidebar'
import { UserProfileLink } from '@/components/UserProfileLink'
import { links } from '@/lib/navlinks'

export const meta: V2_MetaFunction = () => [{ title: 'Dashboard' }]

export default function Dashboard() {
  return (
    <div className="m-w-[1170px] min-h-screen grid grid-cols-[350px_1fr]">
      <Sidebar>
        <div className="pt-6 pb-4 px-6 flex flex-col gap-6">
          {links.map(({ children, ...link }) => (
            <NavLink key={link.to} {...link}>
              {children}
            </NavLink>
          ))}
        </div>
        <div className="mt-auto border-t border-zinc-700 py-4 px-6 flex flex-row gap-4">
          <UserProfileLink
            to={`/profile/${0}`}
            img="https://avatars.githubusercontent.com/u/263385"
            name="Rohan Nair"
            fallback="RN"
          />
        </div>
      </Sidebar>
      <main className="p-4 text-zinc-800">
        <Outlet />
      </main>
    </div>
  )
}
