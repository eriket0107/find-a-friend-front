import { FieldValues, useForm } from 'react-hook-form'

export const useSignIn = () => {
  const methods = useForm()
  const onSubmit = (data: FieldValues) => {
    console.log(data)
  }

  return {
    methods,
    onSubmit,
  }
}

