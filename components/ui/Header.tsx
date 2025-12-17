'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Linkedin, Twitter, Sparkles } from 'lucide-react'

export default function Header() {
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    const updateClock = () => {
      const now = new Date()
      const options: Intl.DateTimeFormatOptions = {
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      }
      const timeString = now.toLocaleDateString('es-ES', options)
      setCurrentTime(timeString)
    }

    updateClock()
    const interval = setInterval(updateClock, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <header className="w-full px-6 py-4 flex justify-between items-center thin-border-bottom text-xs md:text-sm text-gray-600 sticky top-0 bg-white/95 backdrop-blur-sm z-50">
      <Link href="/" className="font-bold text-black tracking-tight hover:opacity-70 transition-opacity">
        Miguel Bonifaz
      </Link>

      <nav className="hidden md:flex space-x-12 items-center">
        <Link href="/" className="hover:text-black transition-colors">
          Inicio
        </Link>
        <Link href="/#about" className="hover:text-black transition-colors">
          Acerca de
        </Link>
        <Link href="/#works" className="hover:text-black transition-colors">
          Trabajos
        </Link>
        <Link href="/automations" className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
          <div className="relative px-4 py-2 bg-black rounded-full flex items-center space-x-2">
            <span className="text-white text-xs">Automatizaciones</span>
            <Sparkles className="w-3 h-3 text-yellow-300" />
          </div>
        </Link>
        <Link href="/#contact" className="hover:text-black transition-colors">
          Contacto
        </Link>
      </nav>

      <div className="text-right text-gray-500 w-[140px]">
        {currentTime || 'Loading...'}
      </div>
    </header>
  )
}
