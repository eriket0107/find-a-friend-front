import { cn } from '@/lib/utils'
import { Button as ButtonComponent } from '../ui/button'
import Link from 'next/link'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'text'
  as?: 'button' | 'link'
  href?: string
  linkClassName?: string
}

export const Button = ({
  children,
  variant = 'primary',
  as = 'button',
  href,
  linkClassName,
  ...props
}: ButtonProps) => {
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary/80',
    secondary:
      'bg-background-quaternary text-primary hover:bg-background-quaternary/70 hover:text-primary/70',
    tertiary: 'bg-brand-tertiary text-white hover:bg-brand-tertiary-darker',
    text: 'bg-transparent border-none  shadow-none text-primary hover:opacity-70 hover:bg-transparent underline w-auto ',
  }

  return (
    <ButtonComponent
      {...props}
      className={cn(
        'text-md h-[56px] rounded-[20px] font-bold duration-1000',
        variantClasses[variant],
        props.className
      )}
    >
      {as === 'link' ? (
        <Link href={href || ''} className={linkClassName}>
          {children}
        </Link>
      ) : (
        children
      )}
    </ButtonComponent>
  )
}

