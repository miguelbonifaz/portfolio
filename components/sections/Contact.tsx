'use client'

import Link from 'next/link'
import { Linkedin, MessageCircle, Loader2, CheckCircle2 } from 'lucide-react'
import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { submitContactForm, type ContactFormState } from '@/app/actions/contact'
import { useEffect, useRef, useState } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { useFormValidation } from '@/hooks/useFormValidation'
import { contactFormSchema } from '@/data/schemas'

function SubmitButton({ isValid }: { isValid: boolean }) {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending || !isValid}
      className="mt-4 px-6 py-3 bg-gray-900 text-white text-xs uppercase tracking-widest smooth-color hover:bg-gray-700 hover-lift w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
  const { ref, isVisible } = useScrollAnimation()
  const { validateField, setFieldTouched, getFieldError, hasFieldError, isFieldTouched, clearErrors } = useFormValidation(contactFormSchema)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [showSuccess, setShowSuccess] = useState(false)

  // Character counter for message
  const messageLength = formData.message.length
  const minMessageLength = 10

  // Check if form is valid
  const isFormValid = formData.name.length >= 2 &&
                      formData.email.includes('@') &&
                      formData.message.length >= 10 &&
                      !hasFieldError('name') &&
                      !hasFieldError('email') &&
                      !hasFieldError('message')

  useEffect(() => {
    if (state?.success) {
      setShowSuccess(true)
      formRef.current?.reset()
      setFormData({ name: '', email: '', message: '' })
      clearErrors()

      // Hide success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000)
    }
  }, [state, clearErrors])

  const handleBlur = (field: 'name' | 'email' | 'message') => {
    setFieldTouched(field)
    validateField(field, formData[field])
  }

  const handleChange = (field: 'name' | 'email' | 'message', value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))

    // Validate on change if field has been touched
    if (isFieldTouched(field)) {
      validateField(field, value)
    }
  }

  const getInputClassName = (field: 'name' | 'email' | 'message') => {
    const baseClass = "w-full border-b border-gray-200 py-2 text-gray-800 focus:outline-none focus:border-gray-800 smooth-color bg-transparent font-light"

    if (!isFieldTouched(field)) return baseClass

    if (hasFieldError(field)) {
      return `${baseClass} input-invalid animate-shake`
    }

    if (formData[field].length > 0) {
      return `${baseClass} input-valid`
    }

    return baseClass
  }

  return (
    <>
      <section id="contact" className="w-full thin-border-top bg-white" ref={ref}>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Label Column */}
            <div className={`md:col-span-3 text-gray-400 text-xs tracking-widest uppercase transition-all duration-600 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              (04) &mdash; Contacto
            </div>

            {/* Content Column */}
            <div className="md:col-span-9">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                {/* Contact Form */}
                <div className="space-y-8">
                  <h2 className={`serif-font text-3xl text-gray-800 transition-all duration-600 ${isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0 translate-y-5'}`}>
                    Comencemos un proyecto
                  </h2>
                  <form
                    ref={formRef}
                    action={formAction}
                    className={`space-y-6 transition-all duration-600 ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0 translate-y-5'} ${showSuccess ? 'animate-success-pulse' : ''}`}
                  >
                    {/* Name Field */}
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
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        onBlur={() => handleBlur('name')}
                        className={getInputClassName('name')}
                        placeholder="Tu nombre"
                        required
                      />
                      {(getFieldError('name') || state?.errors?.name) && (
                        <p className="text-xs text-red-500 mt-1 animate-error-slide">
                          {getFieldError('name') || state?.errors?.name?.[0]}
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
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
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        onBlur={() => handleBlur('email')}
                        className={getInputClassName('email')}
                        placeholder="tu@ejemplo.com"
                        required
                      />
                      {(getFieldError('email') || state?.errors?.email) && (
                        <p className="text-xs text-red-500 mt-1 animate-error-slide">
                          {getFieldError('email') || state?.errors?.email?.[0]}
                        </p>
                      )}
                    </div>

                    {/* Message Field */}
                    <div className="space-y-1">
                      <div className="flex justify-between items-center">
                        <label
                          htmlFor="message"
                          className="text-xs text-gray-400 uppercase tracking-wide"
                        >
                          Mensaje
                        </label>
                        <span className={`text-xs ${messageLength >= minMessageLength ? 'text-green-600' : 'text-gray-400'} transition-colors`}>
                          {messageLength}/{minMessageLength}
                        </span>
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        onBlur={() => handleBlur('message')}
                        className={getInputClassName('message') + ' resize-none'}
                        placeholder="Cuéntame sobre tu proyecto..."
                        required
                      ></textarea>
                      {(getFieldError('message') || state?.errors?.message) && (
                        <p className="text-xs text-red-500 mt-1 animate-error-slide">
                          {getFieldError('message') || state?.errors?.message?.[0]}
                        </p>
                      )}
                    </div>

                    <SubmitButton isValid={isFormValid} />

                    {/* Success Message */}
                    {showSuccess && state?.success && (
                      <div className="flex items-center gap-2 text-green-600 text-sm animate-fade-in">
                        <CheckCircle2 className="w-5 h-5" />
                        <p>{state.message}</p>
                      </div>
                    )}

                    {/* Error Message */}
                    {state?.success === false && !state.errors && (
                      <div className="text-red-500 text-sm animate-error-slide">
                        <p>{state.message}</p>
                      </div>
                    )}
                  </form>
                </div>

                {/* Socials & Info */}
                <div className={`space-y-12 md:pt-16 transition-all duration-600 ${isVisible ? 'animate-fade-in-up delay-300' : 'opacity-0 translate-y-5'}`}>
                <div>
                  <h3 className="font-bold mb-4 text-xs uppercase tracking-wide text-gray-400">
                    Redes Sociales
                  </h3>
                  <ul className="space-y-4">
                    <li>
                      <Link
                        href="https://www.linkedin.com/in/miguelbonifaz126/"
                        target="_blank"
                        className="flex items-center space-x-3 text-gray-600 smooth-color hover:text-black group"
                      >
                        <Linkedin className="w-5 h-5 text-gray-400 smooth-color group-hover:text-black hover-scale" />
                        <span className="text-sm">LinkedIn</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://x.com/MBonifaz126"
                        target="_blank"
                        className="flex items-center space-x-3 text-gray-600 smooth-color hover:text-black group"
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
                          className="w-5 h-5 text-gray-400 smooth-color group-hover:text-black hover-scale"
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
                        className="flex items-center space-x-3 text-gray-600 smooth-color hover:text-black group"
                      >
                        <MessageCircle className="w-5 h-5 text-gray-400 smooth-color group-hover:text-black hover-scale" />
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
