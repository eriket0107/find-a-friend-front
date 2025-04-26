'use client'
import Image from 'next/image'
import logoSimple from '@/assets/logo/logo-simple-find-a-friend.png'
import { loadingText } from '@/constants/loading-text'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loading() {
  const [currentText, setCurrentText] = useState(
    loadingText[Math.floor(Math.random() * loadingText.length)]
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText(
        loadingText[Math.floor(Math.random() * loadingText.length)]
      )
    }, 10000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Image
        src={logoSimple}
        alt="Logo"
        width={100}
        height={100}
        className="animate-pulse"
      />
      <AnimatePresence mode="wait">
        <motion.h2
          key={currentText}
          initial={{ opacity: 0, translateX: 10 }}
          animate={{ opacity: 1, translateX: 0 }}
          exit={{ opacity: 0, translateX: -10 }}
          transition={{ duration: 0.5 }}
        >
          {currentText}
        </motion.h2>
      </AnimatePresence>
    </div>
  )
}

