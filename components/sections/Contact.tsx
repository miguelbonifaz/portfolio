'use client'

import Link from 'next/link'
import { Linkedin, MessageCircle, Mail, Phone } from 'lucide-react'
import type { ReactNode } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const EMAIL = 'miguelbonifaz126@gmail.com'
const PHONE_DISPLAY = '+593 968 204 300'
const WHATSAPP_URL = 'https://wa.me/593968204300'

const iconClass = 'w-5 h-5 text-gray-400 smooth-color group-hover:text-black hover-scale'

function XIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={iconClass}
    >
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  )
}

function ContactLink({ href, icon, children }: { href: string; icon: ReactNode; children: ReactNode }) {
  const isExternal = href.startsWith('http')

  return (
    <li>
      <Link
        href={href}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className="flex items-center space-x-3 text-gray-600 smooth-color hover:text-black group"
      >
        {icon}
        <span className="text-sm">{children}</span>
      </Link>
    </li>
  )
}

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="contact" className="w-full thin-border-top bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className={`md:col-span-3 text-gray-400 text-xs tracking-widest uppercase transition-all duration-600 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            (04) &mdash; Contacto
          </div>

          <div className="md:col-span-9 space-y-12">
            <h2 className={`serif-font text-3xl text-gray-800 transition-all duration-600 ${isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0 translate-y-5'}`}>
              Comencemos un proyecto
            </h2>

            <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 transition-all duration-600 ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0 translate-y-5'}`}>
              <div>
                <h3 className="font-bold mb-4 text-xs uppercase tracking-wide text-gray-400">
                  Redes Sociales
                </h3>
                <ul className="space-y-4">
                  <ContactLink href="https://www.linkedin.com/in/miguelbonifaz126/" icon={<Linkedin className={iconClass} />}>
                    LinkedIn
                  </ContactLink>
                  <ContactLink href="https://x.com/MBonifaz126" icon={<XIcon />}>
                    X (Twitter)
                  </ContactLink>
                  <ContactLink href={WHATSAPP_URL} icon={<MessageCircle className={iconClass} />}>
                    WhatsApp
                  </ContactLink>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-4 text-xs uppercase tracking-wide text-gray-400">
                  Contacto Directo
                </h3>
                <ul className="space-y-4">
                  <ContactLink href={`mailto:${EMAIL}`} icon={<Mail className={iconClass} />}>
                    {EMAIL}
                  </ContactLink>
                  <ContactLink href={WHATSAPP_URL} icon={<Phone className={iconClass} />}>
                    {PHONE_DISPLAY}
                  </ContactLink>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
