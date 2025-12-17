'use client'

import Link from 'next/link'
import { Linkedin, MessageCircle, Loader2 } from 'lucide-react'
import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { submitContactForm, type ContactFormState } from '@/app/actions/contact'
import { useEffect, useRef } from 'react'
import toast, { Toaster } from 'react-hot-toast'

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className="mt-4 px-6 py-3 bg-gray-900 text-white text-xs uppercase tracking-widest hover:bg-gray-700 transition-colors w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
    >
      {pending ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
          Enviando...
        </>
      ) : (
        'Enviar Mensaje'
      )}
    </button>
  )
}

export default function Contact() {
  const [state, formAction, isPending] = useActionState<ContactFormState | null, FormData>(
    submitContactForm,
    null
  )
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state?.success) {
      toast.success(state.message, {
        duration: 5000,
        position: 'bottom-right',
        style: {
          background: '#1f2937',
          color: '#fff',
        },
      })
      formRef.current?.reset()
    } else if (state?.success === false && !state.errors) {
      toast.error(state.message, {
        duration: 5000,
        position: 'bottom-right',
        style: {
          background: '#ef4444',
          color: '#fff',
        },
      })
    }
  }, [state])

  return (
    <>
      <Toaster />
      <section id="contact" className="w-full thin-border-top bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Label Column */}
            <div className="md:col-span-3 text-gray-400 text-xs tracking-widest uppercase sticky top-24 h-fit">
              (04) &mdash; Contacto
            </div>

            {/* Content Column */}
            <div className="md:col-span-9">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                {/* Contact Form */}
                <div className="space-y-8">
                  <h2 className="serif-font text-3xl text-gray-800">
                    Comencemos un proyecto
                  </h2>
                  <form ref={formRef} action={formAction} className="space-y-6">
                    <div className="space-y-1">
                      <label
                        htmlFor="name"
                        className="text-xs text-gray-400 uppercase tracking-wide"
                      >
                        Nombre
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full border-b border-gray-200 py-2 text-gray-800 focus:outline-none focus:border-gray-800 transition-colors bg-transparent font-light"
                        placeholder="Tu nombre"
                        required
                      />
                      {state?.errors?.name && (
                        <p className="text-xs text-red-500 mt-1">
                          {state.errors.name[0]}
                        </p>
                      )}
                    </div>
                    <div className="space-y-1">
                      <label
                        htmlFor="email"
                        className="text-xs text-gray-400 uppercase tracking-wide"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full border-b border-gray-200 py-2 text-gray-800 focus:outline-none focus:border-gray-800 transition-colors bg-transparent font-light"
                        placeholder="tu@ejemplo.com"
                        required
                      />
                      {state?.errors?.email && (
                        <p className="text-xs text-red-500 mt-1">
                          {state.errors.email[0]}
                        </p>
                      )}
                    </div>
                    <div className="space-y-1">
                      <label
                        htmlFor="message"
                        className="text-xs text-gray-400 uppercase tracking-wide"
                      >
                        Mensaje
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        className="w-full border-b border-gray-200 py-2 text-gray-800 focus:outline-none focus:border-gray-800 transition-colors bg-transparent font-light resize-none"
                        placeholder="Cuéntame sobre tu proyecto..."
                        required
                      ></textarea>
                      {state?.errors?.message && (
                        <p className="text-xs text-red-500 mt-1">
                          {state.errors.message[0]}
                        </p>
                      )}
                    </div>
                    <SubmitButton />
                  </form>
                </div>

                {/* Socials & Info */}
                <div className="space-y-12 md:pt-16">
                <div>
                  <h3 className="font-bold mb-4 text-xs uppercase tracking-wide text-gray-400">
                    Redes Sociales
                  </h3>
                  <ul className="space-y-4">
                    <li>
                      <Link
                        href="https://www.linkedin.com/in/miguelbonifaz126/"
                        target="_blank"
                        className="flex items-center space-x-3 text-gray-600 hover:text-black transition-colors group"
                      >
                        <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
                        <span className="text-sm">LinkedIn</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://x.com/MBonifaz126"
                        target="_blank"
                        className="flex items-center space-x-3 text-gray-600 hover:text-black transition-colors group"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors"
                        >
                          <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                          <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                        </svg>
                        <span className="text-sm">X (Twitter)</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://wa.me/593968204300"
                        target="_blank"
                        className="flex items-center space-x-3 text-gray-600 hover:text-black transition-colors group"
                      >
                        <MessageCircle className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
                        <span className="text-sm">WhatsApp</span>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold mb-4 text-xs uppercase tracking-wide text-gray-400">
                    Contacto Directo
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">miguelbonifaz126@gmail.com</p>
                  <p className="text-sm text-gray-600">+593 968 204 300</p>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
