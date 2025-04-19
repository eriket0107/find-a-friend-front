'use client'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'
interface HeroButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  to: string
}

export const HeroButton = ({ to, ...props }: HeroButtonProps) => {
  const router = useRouter()

  return (
    <Button
      {...props}
      variant="white"
      className="h-12 w-full text-lg font-extrabold"
      onClick={() => {
        router.push(to)
      }}
    >
      Acessar agora
    </Button>
  )
}
