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
import { InputMask } from '@react-input/mask'
import debounce from 'debounce'
import { useState, useEffect } from 'react'

export const SignUpForm = () => {
  const { methods, onSubmit } = useSignUp()
  const location = useGetLocation()
  const { errors } = methods.formState

  return (
    <FormProvider {...methods}>
      <Button
        variant="text"
        className="flex h-auto w-full items-center justify-center gap-2 p-0"
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
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="org@email.com"
              {...methods.register('email')}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="cep">CEP</Label>
            <InputMask
              mask="_____-___"
              replacement={{ _: /\d/ }}
              component={Input}
              id="cep"
              placeholder="00000-000"
              {...methods.register('cep')}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="address">Endereço</Label>
            <Input
              id="address"
              type="text"
              placeholder="Av Sua Rua"
              {...methods.register('address')}
            />
          </div>

          <Map cep={methods.watch('cep')} />
          <div className="flex flex-col gap-2">
            <Label htmlFor="whatsapp">WhatsApp</Label>
            <InputMask
              mask="(__) _____-____"
              replacement={{ _: /\d/ }}
              component={Input}
              id="whatsapp"
              placeholder="(21) 99999-9999"
              {...methods.register('whatsapp')}
            />
          </div>

          <div className="flex flex-col gap-2">
            <InputPassword {...methods.register('password')} />
          </div>
          <div className="flex flex-col gap-2">
            <InputPassword
              label="Confirmar Senha"
              {...methods.register('confirmPassword')}
            />
          </div>
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

