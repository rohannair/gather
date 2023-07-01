import { cn } from '@/lib/utils'

export const Logo = () => (
  <h1
    className={cn(
      'text-center ss-03 common-ligatures font-display font-black text-zinc-50 text-5xl tracking-tight',
    )}
  >
    Gather
    <span className="text-yellow-400">.</span>
  </h1>
)
