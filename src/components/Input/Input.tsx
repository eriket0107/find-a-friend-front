import { forwardRef } from 'react'
import { Input as InputComponent } from '@/components/ui/input'
import { cn } from '@/lib/utils'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  icon?: React.ReactNode
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ icon, ...props }, ref) => {
    return (
      <div className="dark:bg-background-quaternary relative flex items-center">
        <InputComponent
          {...props}
          ref={ref}
          className={cn(
            'text-primary placeholder:text-primary/20 focus-visible:ring-primary dark:bg-background-quaternary h-full max-h-[56px] border-[#D3E2E5] p-6 text-lg font-bold focus-visible:border-transparent focus-visible:ring-[2px]',
            icon && 'pr-12',
            props.className
          )}
        />
        {icon && (
          <div className="absolute right-4 flex items-center justify-center">
            {icon}
          </div>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

