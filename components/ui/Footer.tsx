import Link from 'next/link'
import { getProfile } from '@/data'

export default function Footer() {
  const profile = getProfile()

  return (
    <footer className="w-full thin-border-top py-4 bg-white z-10 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-xs md:text-sm text-gray-600">
          <Link href="/" className="hover:text-black transition-colors">
            © Miguel Bonifaz
          </Link>
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-black transition-colors"
          >
            {profile.email}
          </a>
          <Link href="/#contact" className="hover:text-black transition-colors">
            Contacto
          </Link>
        </div>
      </div>
    </footer>
  )
}
