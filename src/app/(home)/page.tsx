import Image from 'next/image'
import logoSimple from '@/assets/logo/logo-full-find-a-friend.svg'
import dogHero from '@/assets/images/dog-hero.png'
import ilustrationHero from '@/assets/images/hero-find-a-friend.png'
import { HeroButton } from '@/components/HeroButton/HeroButton'
import { Location } from '@/components/Location'
import { LocationSkeleton } from '@/components/Location/LocationSkeleton'
import { Suspense } from 'react'

const path = {
  signIn: '/sign-in',
}

export default async function Home() {
  return (
    <main className="bg-brand-primary relative flex w-full flex-1 flex-col justify-evenly gap-5 rounded-2xl p-6 lg:h-full lg:flex-row lg:gap-50 lg:overflow-hidden lg:p-26">
      <div className="flex max-h-[620px] max-w-[460px] flex-col justify-between gap-8 md:items-start">
        <div className="hidden flex-col items-start gap-3 lg:flex lg:gap-4">
          <Image
            src={logoSimple}
            alt="Logo"
            width={200}
            height={200}
            priority
          />
          <Suspense fallback={<LocationSkeleton />}>
            <Location />
          </Suspense>
        </div>
        <div className="flex w-full items-center justify-between gap-3 lg:hidden lg:gap-4">
          <Image
            src={logoSimple}
            alt="Logo"
            width={120}
            height={120}
            priority
          />
          <Suspense fallback={<LocationSkeleton />}>
            <Location />
          </Suspense>
        </div>

        <h1 className="text-[40px] font-bold md:text-6xl">
          Leve a felicidade para o seu lar
        </h1>
        <div className="flex items-center justify-center lg:max-h-[100px]">
          <p className="text-2xl font-bold">
            Encontre o animal de estimação ideal para seu estilo de vida!
          </p>
        </div>
      </div>
      <div className="hidden max-h-[600px] max-w-[500px] flex-col items-start justify-center gap-5 lg:flex lg:justify-between">
        <div className="relative h-full max-h-[500px] w-[400px] rounded-2xl bg-linear-to-tr from-[#E44449] to-[#F36A6F]">
          <Image
            src={dogHero}
            alt="Logo"
            className="absolute left-0"
            priority
          />
        </div>
        <div className="bg-brand-primary-darker hidden w-full rounded-2xl pt-6 pr-8 pb-6 pl-8 md:flex">
          <HeroButton to={path.signIn} className="h-7 p-0" />
        </div>
      </div>
      <div className="max-h-[350px]rounded-2xl relative rounded-xl bg-linear-to-tr from-[#E44449] to-[#F36A6F] lg:hidden">
        <Image src={ilustrationHero} alt="Logo" priority />
        <div className="absolute right-[40px] bottom-[20px]">
          <HeroButton to={path.signIn} />
        </div>
      </div>
      <div className="bg-brand-primary-darker absolute right-[-120px] z-10 hidden h-[600px] w-50 rounded-2xl lg:flex" />
      <div className="bg-brand-primary-darker absolute right-[104px] bottom-[-10px] z-10 hidden h-[100px] w-[400px] rounded-2xl lg:flex" />
      <div className="bg-brand-primary-darker absolute right-[-70px] bottom-[-10px] z-10 hidden h-[100px] w-[150px] rounded-2xl lg:flex" />
    </main>
  )
}

