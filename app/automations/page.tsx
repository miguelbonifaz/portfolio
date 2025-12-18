'use client'

import { Metadata } from 'next'
import Link from 'next/link'
import { Scissors, Cake, Bot, MessageSquare, Database, Zap, Check } from 'lucide-react'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

// export const metadata: Metadata = {
//   title: 'Automatizaciones | Miguel Bonifaz',
//   description: 'Diseño e implemento agentes de IA que transforman conversaciones en conversiones. Operaciones comerciales optimizadas.',
//   keywords: ['IA', 'Automatización', 'Agentes IA', 'WhatsApp Bot', 'OpenAI', 'Miguel Bonifaz'],
// }

export default function AutomationsPage() {
  const agentsSection = useScrollAnimation()
  const techSection = useScrollAnimation()

  return (
    <>
      <Header />
      <main className="flex-grow w-full flex flex-col">
        {/* Hero Section with Dotted Glow */}
        <section className="dotted-bg min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-20 relative">
          <div className="glow-effect"></div>

          <div className="content-z max-w-4xl mx-auto space-y-8">
            <div className="inline-block px-3 py-1 rounded-full border border-gray-700 bg-gray-900/50 text-blue-400 text-xs tracking-widest uppercase mb-4 backdrop-blur-sm animate-fade-in">
              Inteligencia Artificial & Automatización
            </div>

            <h1 className="text-5xl md:text-7xl text-white serif-font tracking-wide leading-tight animate-fade-in-up delay-100">
              Automatiza tu <span className="italic text-blue-400">futuro</span>
            </h1>

            <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              Diseño e implemento agentes de IA que transforman conversaciones en conversiones.
              Operaciones comerciales optimizadas que funcionan mientras duermes.
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8 animate-fade-in-up delay-300">
              <a
                href="#agents"
                className="px-8 py-3 bg-white text-black text-xs uppercase tracking-widest hover:bg-gray-200 transition-colors font-bold"
              >
                Ver Soluciones
              </a>
              <Link
                href="/#contact"
                className="px-8 py-3 border border-gray-700 text-white text-xs uppercase tracking-widest hover:bg-gray-900 transition-colors"
              >
                Agendar Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Agents Section */}
        <section id="agents" className="w-full bg-white py-20" ref={agentsSection.ref}>
          <div className="max-w-7xl mx-auto px-6">
            <div className={`mb-16 text-center transition-all duration-600 ${agentsSection.isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-5'}`}>
              <h2 className="serif-font text-3xl md:text-4xl text-gray-900 mb-4">Casos de Uso</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">Soluciones implementadas en producción</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Agent 1: Bonifaz Peluqueros */}
              <div className={`bg-white p-8 border border-gray-200 group hover:border-blue-400 hover:shadow-xl hover:shadow-blue-100 transition-all duration-600 relative overflow-hidden rounded-xl hover-lift ${agentsSection.isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0 translate-y-5'}`}>
                <div className="absolute top-4 right-4 text-gray-50 group-hover:text-blue-50 transition-colors">
                  <Scissors className="w-24 h-24 stroke-[1px]" />
                </div>

                <div className="flex items-center space-x-2 mb-6 relative z-10">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="text-xs uppercase tracking-widest text-gray-400">Agente en Vivo</span>
                </div>

                <h3 className="serif-font text-2xl text-gray-900 mb-2 relative z-10">Bonifaz Peluqueros</h3>
                <p className="text-sm text-gray-500 mb-6 min-h-[40px] relative z-10">
                  Bot de agendamiento de citas que gestiona sincronización de calendario, reprogramación y consultas del menú de servicios.
                </p>

                <ul className="space-y-2 mb-8 relative z-10">
                  <li className="flex items-center text-xs text-gray-600">
                    <Check className="w-3 h-3 mr-2 text-blue-500" />
                    Reserva automática vía WhatsApp
                  </li>
                  <li className="flex items-center text-xs text-gray-600">
                    <Check className="w-3 h-3 mr-2 text-blue-500" />
                    Recordatorios para reducir ausencias
                  </li>
                </ul>
              </div>

              {/* Agent 2: Dulce Sabor */}
              <div className={`bg-white p-8 border border-gray-200 group hover:border-blue-400 hover:shadow-xl hover:shadow-blue-100 transition-all duration-600 relative overflow-hidden rounded-xl hover-lift ${agentsSection.isVisible ? 'animate-fade-in-up delay-300' : 'opacity-0 translate-y-5'}`}>
                <div className="absolute top-4 right-4 text-gray-50 group-hover:text-blue-50 transition-colors">
                  <Cake className="w-24 h-24 stroke-[1px]" />
                </div>

                <div className="flex items-center space-x-2 mb-6 relative z-10">
                  <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
                  <span className="text-xs uppercase tracking-widest text-gray-400">En Desarrollo</span>
                </div>

                <h3 className="serif-font text-2xl text-gray-900 mb-2 relative z-10">Dulce Sabor</h3>
                <p className="text-sm text-gray-500 mb-6 min-h-[40px] relative z-10">
                  Asistente virtual para pastelería que cotiza tortas personalizadas, informa sobre productos y gestiona disponibilidad.
                </p>

                <ul className="space-y-2 mb-8 relative z-10">
                  <li className="flex items-center text-xs text-gray-600">
                    <Check className="w-3 h-3 mr-2 text-blue-500" />
                    Cotización de tortas personalizadas
                  </li>
                  <li className="flex items-center text-xs text-gray-600">
                    <Check className="w-3 h-3 mr-2 text-blue-500" />
                    Consulta de disponibilidad de fechas
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="w-full bg-gray-50 py-20 border-t border-gray-200" ref={techSection.ref}>
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h3 className={`font-bold mb-12 text-xs uppercase tracking-wide text-gray-400 transition-all duration-600 ${techSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>Stack Tecnológico</h3>
            <div className={`flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-600 ${techSection.isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0 translate-y-5'}`}>
              <div className="flex flex-col items-center gap-2">
                <Bot className="w-8 h-8" />
                <span className="text-xs font-bold">OpenAI API</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <MessageSquare className="w-8 h-8" />
                <span className="text-xs font-bold">WhatsApp Business</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Database className="w-8 h-8" />
                <span className="text-xs font-bold">Supabase</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Zap className="w-8 h-8" />
                <span className="text-xs font-bold">n8n</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
