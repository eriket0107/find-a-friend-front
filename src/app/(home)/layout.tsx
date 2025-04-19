export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="lg:bg-background bg-brand-primary flex h-screen w-full flex-col items-center justify-center md:h-full lg:max-h-[820px] lg:max-w-[1280px]">
      {children}
    </div>
  )
}

