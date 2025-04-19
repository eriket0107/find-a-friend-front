export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-background flex h-full max-h-[820px] w-full max-w-[1280px] flex-col items-center justify-center">
      {children}
    </div>
  )
}
