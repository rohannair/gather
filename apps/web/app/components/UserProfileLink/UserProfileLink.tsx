import { Link } from '@remix-run/react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface IUserProfileLinkProps {
  name: string
  to: string
  img: string
  fallback: string
}

export const UserProfileLink = ({
  name,
  to,
  img,
  fallback,
}: IUserProfileLinkProps) => (
  <Link to={to} className="flex flex-row gap-4">
    <Avatar>
      <AvatarImage src={img} alt={name} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
    <div className="mt-2 text-center text-zinc-100 hover:text-zinc-200 font-bold text-lg">
      {name}
    </div>
  </Link>
)
