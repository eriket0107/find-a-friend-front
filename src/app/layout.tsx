import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/providers/theme'
import Loading from './loading'
import { Suspense } from 'react'

const roboto = Nunito({
  variable: '--font-nunito',
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  preload: true,
  adjustFontFallback: true,
})

export const metadata: Metadata = {
  title: 'Find a Friend',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${roboto.variable} flex h-screen w-screen items-center justify-center overflow-hidden antialiased`}
      >
        <ThemeProvider>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}

