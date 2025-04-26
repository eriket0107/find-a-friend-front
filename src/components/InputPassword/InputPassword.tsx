'use client'

import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { Label } from '../Label'
import { Input } from '../Input'
import { useFormContext } from 'react-hook-form'

type InputPasswordProps = {
  name: string
  label?: string
  error?: string
}

export const InputPassword = ({
  name,
  label = 'Senha',
  error,
}: InputPasswordProps) => {
  const [showPassword, setShowPassword] = useState(false)
  const { register } = useFormContext()
  const Icon = showPassword ? Eye : EyeOff

  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name}
        type={showPassword ? 'text' : 'password'}
        placeholder={showPassword ? '********' : 'Digite a senha'}
        errorMessage={error}
        icon={
          <Icon
            className="cursor-pointer text-gray-300"
            onClick={() => setShowPassword(!showPassword)}
          />
        }
        {...register(name)}
      />
    </div>
  )
}

