import { cn } from '@/lib/utils'
import { NavLink as Base } from '@remix-run/react'
import { LucideIcon } from 'lucide-react'

export interface INavLink {
  to: string
  children: string
  Icon?: LucideIcon
}

export const NavLink = ({ to, children, Icon }: INavLink) => (
  <Base
    to={to}
    className={({ isActive }) =>
      cn(
        'flex flex-row gap-3 align-middle text-zinc-400 font-semibold',
        'hover:text-zinc-200',
        isActive && 'text-zinc-200',
      )
    }
  >
    {Icon && <Icon size={20} />}
    <span className="relative -top-0.5">{children}</span>
  </Base>
)
