import { useForm } from 'react-hook-form'

export const useSignUp = () => {
  const methods = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      cep: '',
    },
  })

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return { methods, onSubmit }
}

