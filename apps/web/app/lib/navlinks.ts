import {
  Calendar,
  Image,
  MessageCircle,
  Receipt,
  Settings,
} from 'lucide-react'

import type { INavLink } from '@/components/Sidebar'

export const links: INavLink[] = [
  // {
  //   children: 'Organizations',
  //   to: '/organizations',
  //   Icon: Users2,
  // },
  {
    children: 'Events',
    to: '/events',
    Icon: Calendar,
  },
  {
    children: 'Chats',
    to: '/chats',
    Icon: MessageCircle,
  },
  {
    children: 'Images',
    to: '/images',
    Icon: Image,
  },
  {
    children: 'Tabs',
    to: '/tabs',
    Icon: Receipt,
  },
  {
    children: 'Settings',
    to: '/settings',
    Icon: Settings,
  },
]
