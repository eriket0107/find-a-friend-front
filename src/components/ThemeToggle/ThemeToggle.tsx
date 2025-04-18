'use client'

import { useTheme } from '@/providers/theme'
import { Moon, Sun } from 'lucide-react'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  return (
    <button
      className="bg-foreground text-background cursor-pointer rounded-md px-4 py-2 transition-opacity duration-700 hover:opacity-80"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? <Sun size={32} /> : <Moon size={32} />}
    </button>
  )
}
