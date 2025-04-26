'use client'

import { FormProvider } from 'react-hook-form'
import { Input } from '../Input'
import { InputPassword } from '../InputPassword'
import { Label } from '../Label'

import { useSignIn } from '@/hooks/useSignIn'
import { Button } from '../Button'

export const SignInForm = () => {
  const { methods, onSubmit } = useSignIn()
  const { errors } = methods.formState

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex h-full flex-col justify-between"
      >
        <div className="flex flex-col justify-between gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="org@email.com"
              {...methods.register('email')}
              errorMessage={errors.email?.message}
            />
          </div>
          <InputPassword name="password" error={errors.password?.message} />
        </div>

        <div className="flex w-full flex-col gap-4">
          <Button type="submit" variant="primary" className="w-full">
            Login
          </Button>
          <Button
            type="button"
            variant="secondary"
            className="w-full"
            as="link"
            href="/sign-up"
          >
            Cadastrar Organização
          </Button>
        </div>
      </form>
    </FormProvider>
  )
}

