import { cn } from '@/lib/utils'

interface ILogoProps {
  dark?: boolean
  truncated?: boolean
}

export const Logo = ({ dark, truncated }: ILogoProps) => (
  <h1
    className={cn(
      'text-center ss-03 common-ligatures font-display font-black',
      'text-zinc-50 text-5xl tracking-tight',
      dark && 'text-zinc-800',
    )}
  >
    {truncated ? 'G' : 'Gather'}
    <span className="text-yellow-400">.</span>
  </h1>
)
