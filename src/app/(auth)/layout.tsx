import { Card } from '@/components/ui/card'
import Image from 'next/image'
import logoFull from '@/assets/logo/logo-full-find-a-friend.svg'
import ilustration from '@/assets/images/hero-find-a-friend.png'

export default function SignInLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative mx-auto flex h-screen w-full items-center justify-center gap-40 bg-white">
      <Card className="bg-brand-primary sticky top-[20px] flex h-full max-h-[660px] w-full max-w-[490px] flex-col items-center justify-between rounded-[20px] p-14">
        <Image
          src={logoFull}
          alt="Logo"
          width={200}
          height={200}
          className="mt-15"
        />
        <Image src={ilustration} alt="Ilustração" width={500} height={500} />
      </Card>
      {children}
    </div>
  )
}

