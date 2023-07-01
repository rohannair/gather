import { INavLink } from '@/components/Sidebar'
import {
  Users2,
  Calendar,
  Receipt,
  MessageCircle,
  Settings,
  Image,
} from 'lucide-react'

export const links: INavLink[] = [
  {
    children: 'Organizations',
    to: '/organizations',
    Icon: Users2,
  },
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
