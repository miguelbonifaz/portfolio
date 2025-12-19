import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Check, Play, ExternalLink, Bot, MessageSquare } from 'lucide-react'
import { getAutomations, getAutomationBySlug } from '@/data'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import JsonLd from '@/components/seo/JsonLd'
import { generateBreadcrumbSchema } from '@/lib/json-ld'

export const dynamic = 'force-static'

export async function generateStaticParams() {
  const automations = getAutomations()
  return automations.map((automation) => ({
    slug: automation.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const automation = getAutomationBySlug(slug)

  if (!automation) {
    return {
      title: 'Automatización no encontrada',
    }
  }

  return {
    title: `${automation.name} | Agentes IA`,
    description: automation.shortDescription,
    openGraph: {
      title: `${automation.name} | Agentes IA`,
      description: automation.shortDescription,
      images: [automation.images.hero],
    },
  }
}

export default async function AutomationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const automation = getAutomationBySlug(slug)

  if (!automation) {
    notFound()
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Inicio', url: '/' },
    { name: 'Automatizaciones', url: '/automations' },
    { name: automation.name, url: `/automations/${automation.slug}` },
  ])

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <Header />
      <main className="flex-grow w-full flex flex-col">
        {/* Hero Section */}
        <section className="w-full bg-gray-50 pt-28 pb-16 px-6">
          <div className="max-w-7xl mx-auto">
            <Link
              href="/automations"
              className="inline-flex items-center space-x-2 text-xs text-gray-500 hover:text-black transition-colors mb-8"
            >
              <ArrowLeft className="w-3 h-3" />
              <span>Volver a Automatizaciones</span>
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center space-x-3">
                  {automation.status === 'live' ? (
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium tracking-wide">
                      <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                      EN VIVO
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs font-medium tracking-wide">
                      <span className="w-2 h-2 rounded-full bg-yellow-500 mr-2 animate-pulse"></span>
                      EN DESARROLLO
                    </span>
                  )}
                  <span className="text-gray-400 text-xs tracking-widest uppercase">
                    Caso de Éxito
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl serif-font text-gray-900 leading-tight">
                  {automation.name}
                </h1>

                <p className="text-lg text-gray-600 leading-relaxed font-light max-w-xl">
                  {automation.shortDescription}
                </p>

                {automation.cta && (
                  <div className="pt-4">
                    <a
                      href={automation.cta.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-gray-900 text-white text-xs uppercase tracking-widest hover:bg-gray-700 transition-all hover:-translate-y-1"
                    >
                      {automation.cta.text}
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                )}
              </div>

              {/* Hero Image / Video Thumbnail */}
              <div className="lg:col-span-6 relative group">
                <div className="aspect-video relative rounded-xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
                  {automation.videoUrl ? (
                     <iframe
                        width="100%"
                        height="100%"
                        src={automation.videoUrl}
                        title="Video Demo"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                     ></iframe>
                  ) : (
                    <Image
                      src={automation.images.hero}
                      alt={automation.name}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Details & Features */}
        <section className="w-full bg-white py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              {/* Main Description */}
              <div className="lg:col-span-7 space-y-8">
                <h2 className="serif-font text-2xl md:text-3xl text-gray-900">
                  Sobre la Solución
                </h2>
                <div className="prose prose-lg text-gray-600 font-light leading-relaxed">
                  <p>{automation.longDescription}</p>
                </div>

                {/* Gallery */}
                {automation.images.gallery.length > 0 && (
                  <div className="mt-12">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-6">
                      Evidencia & Capturas
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {automation.images.gallery.map((img, idx) => (
                        <div key={idx} className="relative aspect-[4/5] md:aspect-square rounded-lg overflow-hidden bg-gray-100 border border-gray-100 shadow-sm hover:shadow-md transition-all">
                          <Image
                            src={img}
                            alt={`${automation.name} gallery ${idx + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar / Features */}
              <div className="lg:col-span-5 space-y-10">
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                  <h3 className="flex items-center space-x-2 serif-font text-xl text-gray-900 mb-6">
                    <Bot className="w-5 h-5 text-gray-500" />
                    <span>Funcionalidades Clave</span>
                  </h3>
                  
                  <ul className="space-y-4">
                    {automation.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </span>
                        <span className="text-gray-600 text-sm leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Hints */}
                <div className="border-t border-gray-100 pt-8">
                   <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-4">
                     Canales Integrados
                   </h3>
                   <div className="flex flex-wrap gap-3">
                     <span className="inline-flex items-center px-3 py-1.5 rounded-md bg-green-50 text-green-700 text-xs border border-green-100">
                       <MessageSquare className="w-3 h-3 mr-1.5" />
                       WhatsApp Business
                     </span>
                     <span className="inline-flex items-center px-3 py-1.5 rounded-md bg-blue-50 text-blue-700 text-xs border border-blue-100">
                       <Bot className="w-3 h-3 mr-1.5" />
                       OpenAI GPT-4
                     </span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Footer */}
        <section className="bg-gray-900 py-20 text-center px-6">
           <div className="max-w-2xl mx-auto space-y-6">
             <h2 className="serif-font text-3xl text-white">¿Necesitas algo similar?</h2>
             <p className="text-gray-400 font-light">
               Podemos implementar un agente como este para tu negocio en menos de 72 horas.
             </p>
             <Link
               href="/#contact"
               className="inline-block bg-white text-black px-8 py-3 text-xs uppercase tracking-widest font-bold hover:bg-gray-200 transition-colors"
             >
               Cotizar Ahora
             </Link>
           </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
