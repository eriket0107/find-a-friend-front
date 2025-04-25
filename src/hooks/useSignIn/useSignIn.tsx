import { zodResolver } from '@hookform/resolvers/zod'
import { FieldValues, useForm } from 'react-hook-form'
import { z } from 'zod'

const SIGN_IN_SCHEMA = z.object({
  email: z.string().email({ message: 'Email inválido' }),
  password: z
    .string()
    .min(6, { message: 'A senha deve conter no mínimo 6 caracteres' }),
})

export const useSignIn = () => {
  const methods = useForm({
    resolver: zodResolver(SIGN_IN_SCHEMA),
  })

  const onSubmit = (data: FieldValues) => {
    console.log(data)
  }

  return {
    methods,
    onSubmit,
  }
}

