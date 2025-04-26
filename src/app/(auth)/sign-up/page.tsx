import { Button } from '@/components/Button'
import { SignUpForm } from '@/components/SignUpForm'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Suspense } from 'react'

export default function SignUp() {
  return (
    <div className="no-scrollbar relative flex h-full max-h-[660px] w-full max-w-[400px] flex-col justify-center overflow-auto rounded-b-xl">
      <Card className="flex h-full w-full max-w-[400px] gap-10 bg-white p-0 shadow-none">
        <CardTitle className="text-primary sticky top-0 z-10 max-w-[400px] border-b border-gray-200 bg-white p-0 pb-2 text-center text-5xl font-bold">
          Cadastre sua organização
        </CardTitle>
        <CardContent className="flex flex-1 flex-col gap-4 p-0">
          <SignUpForm />
        </CardContent>
      </Card>
    </div>
  )
}

