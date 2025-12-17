'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Linkedin, Twitter, Sparkles, Menu, X } from 'lucide-react'

export default function Header() {
  const [currentTime, setCurrentTime] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
    <>
      <header className="w-full px-6 py-4 border-b border-[#e5e5e5] text-xs md:text-sm text-gray-600 sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="flex justify-between items-center">
          <Link href="/" className="font-bold text-black tracking-tight hover:opacity-70 transition-opacity z-50">
            Miguel Bonifaz
          </Link>

          {/* Desktop Navigation */}
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

          {/* Clock - Desktop only */}
          <div className="hidden md:block text-right text-gray-500 w-[140px]">
            {currentTime || 'Loading...'}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 -mr-2 text-black z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col pt-24 px-6 md:hidden overflow-y-auto animate-in slide-in-from-top-10 duration-200">
          <nav className="flex flex-col space-y-4 text-sm">
            <Link 
              href="/" 
              className="hover:text-black transition-colors border-b border-gray-100 pb-3"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link 
              href="/#about" 
              className="hover:text-black transition-colors border-b border-gray-100 pb-3"
              onClick={() => setIsMenuOpen(false)}
            >
              Acerca de
            </Link>
            <Link 
              href="/#works" 
              className="hover:text-black transition-colors border-b border-gray-100 pb-3"
              onClick={() => setIsMenuOpen(false)}
            >
              Trabajos
            </Link>
            <Link 
              href="/automations" 
              className="relative group w-fit"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
              <div className="relative px-4 py-2 bg-black rounded-full flex items-center space-x-2">
                <span className="text-white text-xs">Automatizaciones</span>
                <Sparkles className="w-3 h-3 text-yellow-300" />
              </div>
            </Link>
            <Link 
              href="/#contact" 
              className="hover:text-black transition-colors border-b border-gray-100 pb-3"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
          </nav>

          <div className="mt-auto mb-10 text-gray-400 text-xs">
            <div className="mb-4">{currentTime}</div>
            <p>© {new Date().getFullYear()} Miguel Bonifaz</p>
          </div>
        </div>
      )}
    </>
  )
}
