import Image from 'next/image'
import logoSimple from '@/assets/logo/logo-full-find-a-friend.svg'
import dogHero from '@/assets/images/dog-hero.png'
import { Button } from '@/components/ui/button'
import { HeroButton } from '@/components/HeroButton/HeroButton'

export default function Home() {
  return (
    <main className="lg:bg-brand-primary relative flex h-full w-full flex-row items-center justify-center gap-50 overflow-hidden rounded-2xl p-26">
      <div className="flex h-full max-h-[620px] max-w-[400px] flex-col items-start justify-between">
        <Image src={logoSimple} alt="Logo" width={200} height={200} />
        <h1 className="max-w-[512px] text-7xl font-bold">
          Leve
          <br /> a felicidade <br />
          para o seu lar
        </h1>
        <div className="flex h-full max-h-[100px] items-center justify-center">
          <p className="text-2xl font-bold">
            Encontre o animal de estimação ideal para seu estilo de vida!
          </p>
        </div>
      </div>
      <div className="flex max-w-[500px] flex-col items-start justify-center gap-2">
        <div className="relative rounded-2xl bg-linear-to-tr from-[#E44449] to-[#F36A6F]">
          <Image src={dogHero} alt="Logo" height={500} />
        </div>
        <div className="bg-brand-primary-darker w-full rounded-2xl pt-6 pr-8 pb-6 pl-8">
          <HeroButton to="/sim" className="h-7 p-0" />
        </div>
      </div>
      <div className="bg-brand-primary-darker absolute right-[-90px] z-10 h-[603px] w-50 rounded-2xl" />
      <div className="bg-brand-primary-darker absolute right-[126] bottom-[-10px] z-10 h-[100px] w-[420px] rounded-2xl" />
      <div className="bg-brand-primary-darker absolute right-[-40px] bottom-[-10px] z-10 h-[100px] w-[150px] rounded-2xl" />
    </main>
  )
}
