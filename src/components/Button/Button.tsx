import { cn } from '@/lib/utils'
import { Button as ButtonComponent } from '../ui/button'
import Link from 'next/link'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'tertiary'
  as?: 'button' | 'link'
  href?: string
}

export const Button = ({
  children,
  variant = 'primary',
  as = 'button',
  href,
  ...props
}: ButtonProps) => {
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary/80',
    secondary:
      'bg-background-quaternary text-primary hover:bg-background-quaternary/70 hover:text-primary/70',
    tertiary: 'bg-brand-tertiary text-white hover:bg-brand-tertiary-darker',
  }

  return (
    <ButtonComponent
      {...props}
      className={cn(
        'text-md h-[56px] rounded-[20px] font-bold',
        variantClasses[variant],
        props.className
      )}
    >
      {as === 'link' ? <Link href={href || ''}>{children}</Link> : children}
    </ButtonComponent>
  )
}

