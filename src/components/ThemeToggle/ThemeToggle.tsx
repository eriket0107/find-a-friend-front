'use client'

import { useTheme } from '@/providers/theme'
import { MoonStar, Sun } from 'lucide-react'

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()
  console.log(theme)

  return (
    <button
      className="bg-foreground text-background cursor-pointer rounded-md px-4 py-2 transition-opacity duration-700 hover:opacity-80"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'light' ? <MoonStar size={24} /> : <Sun size={24} />}
    </button>
  )
}
