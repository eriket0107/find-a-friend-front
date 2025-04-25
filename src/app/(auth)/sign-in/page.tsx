import { SignInForm } from '@/components/SignInForm'
import { Card, CardContent, CardTitle } from '@/components/ui/card'

export default function SignIn() {
  return (
    <Card className="flex h-full max-h-[660px] w-full max-w-[400px] gap-30 bg-white shadow-none">
      <CardTitle className="text-primary p-0 text-left text-5xl font-bold">
        Boas vindas!
      </CardTitle>
      <CardContent className="flex flex-1 flex-col gap-4 p-0">
        <SignInForm />
      </CardContent>
    </Card>
  )
}

