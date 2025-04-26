'use client'

import { FormProvider } from 'react-hook-form'
import { Input } from '../Input'
import { InputPassword } from '../InputPassword'
import { Label } from '../Label'

import { Button } from '../Button'
import { useSignUp } from '@/hooks/useSignUp'
import { useGetLocation } from '@/hooks/useGetLocation'
import { Map } from '../Map'
import { ArrowRight } from 'lucide-react'

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

export const SignUpForm = () => {
  const { methods, onSubmit } = useSignUp()
  const location = useGetLocation()
  console.log(location)
  const { errors } = methods.formState

  return (
    <FormProvider {...methods}>
      <Button
        variant="text"
        className="flex h-auto w-full items-center gap-2 p-0"
        linkClassName="flex w-full items-center gap-2  justify-center"
        as="link"
        href="/sign-in"
      >
        Já possui uma conta? Faça login <ArrowRight className="h-4 w-4" />
      </Button>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex flex-col justify-between gap-4"
      >
        <div className="flex flex-col justify-between gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Nome da organização</Label>
            <Input
              id="name"
              type="text"
              placeholder="Sua Organização S.A"
              {...methods.register('name')}
              // errorMessage={errors.email?.message}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="org@email.com"
              {...methods.register('email')}
              // errorMessage={errors.email?.message}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="cep">CEP</Label>
            <Input
              id="cep"
              type="number"
              placeholder="22222111"
              {...methods.register('cep')}
              // errorMessage={errors.email?.message}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="address">Endereço</Label>
            <Input
              id="address"
              type="text"
              placeholder="Av Sua Rua"
              {...methods.register('address')}
              // errorMessage={errors.email?.message}
            />
          </div>

          <Map cep={methods.getValues('cep') || location.location.cep} />
          <div className="flex flex-col gap-2">
            <Label htmlFor="address">Endereço</Label>
            <Input
              id="whatsapp"
              type="text"
              placeholder="21999999999"
              {...methods.register('whatsapp')}
              // errorMessage={errors.email?.message}
            />
          </div>

          <div className="flex flex-col gap-2">
            <InputPassword
              id="password"
              placeholder="********"
              {...methods.register('password')}
              // errorMessage={errors.email?.message}
            />
          </div>
          <div className="flex flex-col gap-2">
            <InputPassword
              id="confirmPassword"
              label="Confirmar Senha"
              placeholder="********"
              {...methods.register('confirmPassword')}
              // errorMessage={errors.email?.message}
            />
          </div>
          {/* <InputPassword name="password" error={errors.password?.message} /> */}
        </div>

        <div className="flex w-full flex-col gap-4">
          <Button type="submit" variant="primary" className="w-full">
            Cadastrar
          </Button>
        </div>
      </form>
    </FormProvider>
  )
}

