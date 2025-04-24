'use client'

import { FormProvider } from 'react-hook-form'
import { Input } from '../Input'
import { InputPassword } from '../InputPassword'
import { Label } from '../Label'

import { useSignIn } from '@/hooks/useSignIn'
import { Button } from '../Button'

export const SignInForm = () => {
  const { methods, onSubmit } = useSignIn()

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="org@email.com"
            {...methods.register('email')}
          />
        </div>
        <InputPassword name="password" />

        <Button type="submit" variant="primary">
          Login
        </Button>
      </form>
    </FormProvider>
  )
}

