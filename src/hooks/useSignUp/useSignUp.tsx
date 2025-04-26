import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

// {
//   "name": "Teste Org",
//   "email": "org1@gmail.com",
//   "password": "123456",
//   "cnpj": "46367217000135",
//   "whatsapp": "21999999999",
//   "street": "Av Alfredo Balthazar da silveira",
//   "city": "Rio de Janeiro",
//   "state": "Rio de Janeiro",
//   "cep": "22790710",
//   "country": "Brazil"
// }

const SIGN_UP_SCHEMA = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(6),
  cep: z.string().min(9),
  whatsapp: z.string().min(11),
  address: z.string().min(1),
  city: z.string().min(1),
  state: z.string().min(1),
  country: z.string().min(1),
  confirmPassword: z.string().min(6),
})

type SignUpFormData = z.infer<typeof SIGN_UP_SCHEMA>

export const useSignUp = () => {
  const methods = useForm<SignUpFormData>({
    resolver: zodResolver(SIGN_UP_SCHEMA),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      cep: '',
      whatsapp: '',
      address: '',
      city: '',
      state: '',
      country: '',
    },
  })

  const handleEqualPassword = (data: SignUpFormData) => {
    if (data.password !== data.confirmPassword) {
      methods.setError('confirmPassword', {
        message: 'Senhas não coicidem.',
      })
      return false
    }
    return true
  }

  const onSubmit = (data: SignUpFormData) => {
    if (!handleEqualPassword(data)) {
      console.log(data)
    }
  }

  return { methods, onSubmit }
}

