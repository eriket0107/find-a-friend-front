import { forwardRef } from 'react'
import { Input as InputComponent } from '@/components/ui/input'
import { cn } from '@/lib/utils'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  icon?: React.ReactNode
  errorMessage?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ icon, errorMessage, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2 rounded-xl">
        <div className="dark:bg-background-quaternary relative flex items-center rounded-xl">
          <InputComponent
            {...props}
            ref={ref}
            className={cn(
              'text-primary placeholder:text-primary/20 focus-visible:ring-primary dark:bg-background-quaternary h-full max-h-[56px] rounded-xl border-[#D3E2E5] p-6 text-lg font-bold focus-visible:border-transparent focus-visible:ring-[2px]',
              icon && 'pr-12',
              errorMessage && 'border-red-500',
              props.className
            )}
          />
          {icon && (
            <div className="absolute right-4 flex items-center justify-center">
              {icon}
            </div>
          )}
        </div>
        <p className="text-sm text-red-500">{errorMessage}</p>
      </div>
    )
  }
)

Input.displayName = 'Input'

