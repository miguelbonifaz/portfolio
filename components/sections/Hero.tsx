import Image from 'next/image'
import Link from 'next/link'
import { Linkedin, Twitter } from 'lucide-react'
import { profile } from '@/data/profile'

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center text-center px-4 py-20 min-h-[80vh]"
    >
      {/* Portrait Image */}
      <div className="mb-0 relative">
        <div className="w-48 h-56 md:w-64 md:h-72 overflow-hidden mx-auto relative z-10">
          <Image
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            alt="Portrait"
            width={500}
            height={600}
            className="w-full h-full object-cover grayscale-img"
            style={{
              clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)',
              transform: 'scale(1.1)',
            }}
            priority
          />
        </div>
      </div>

      {/* Horizontal line */}
      <div className="w-full max-w-md border-t border-gray-400 mb-4"></div>

      {/* Intro Text */}
      <div className="space-y-1">
        <p className="text-sm md:text-base text-gray-600">¡Hola! Soy--</p>
        <h1 className="text-5xl md:text-7xl text-gray-800 serif-font tracking-wide mb-6">
          Miguel
        </h1>
      </div>

      {/* Links and Info Grid */}
      <div className="w-full max-w-2xl mt-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-4 md:space-y-0">
          {/* Left: LinkedIn & Badge */}
          <div className="flex items-center space-x-3">
            <Link
              href="https://www.linkedin.com/in/miguelbonifaz126/"
              target="_blank"
              className="text-gray-600 hover:text-black"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="https://x.com/MBonifaz126"
              target="_blank"
              className="text-gray-600 hover:text-black"
            >
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="#contact" className="pill-badge hover:no-underline">
              Disponible para Trabajar
            </Link>
          </div>

          {/* Right: Email */}
          <div className="text-gray-500 text-sm">miguelbonifaz126@gmail.com</div>
        </div>

        {/* Bottom Details */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-500 mt-2">
          <div>Laravel Developer</div>
          <div className="mt-2 md:mt-0">Basado en Guayaquil, Ecuador</div>
        </div>
      </div>
    </section>
  )
}
