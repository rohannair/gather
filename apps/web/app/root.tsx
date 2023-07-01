import { cssBundleHref } from '@remix-run/css-bundle'
import type { LinksFunction } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import { Toaster } from '@/components/ui/toaster'

import tailwind from './tailwind.css'
import globals from './globals.css'
import calsans from 'cal-sans/index.css'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: calsans },
  { rel: 'stylesheet', href: tailwind },
  { rel: 'stylesheet', href: globals },
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
]

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <Toaster />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
