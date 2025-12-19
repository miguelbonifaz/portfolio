import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Check, ExternalLink, Bot } from "lucide-react";
import { getAutomations, getAutomationBySlug } from "@/data";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema } from "@/lib/json-ld";

export const dynamic = "force-static";

export async function generateStaticParams() {
  const automations = getAutomations();
  return automations.map((automation) => ({
    slug: automation.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const automation = getAutomationBySlug(slug);

  if (!automation) {
    return {
      title: "Automatización no encontrada",
    };
  }

  return {
    title: `${automation.name} | Agentes IA`,
    description: automation.shortDescription,
    openGraph: {
      title: `${automation.name} | Agentes IA`,
      description: automation.shortDescription,
      images: [automation.images.hero],
    },
  };
}

export default async function AutomationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const automation = getAutomationBySlug(slug);

  if (!automation) {
    notFound();
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Inicio", url: "/" },
    { name: "Automatizaciones", url: "/automations" },
    { name: automation.name, url: `/automations/${automation.slug}` },
  ]);

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
              className="flex justify-center w-full items-center space-x-2 text-xs text-gray-500 hover:text-black transition-colors mb-8"
            >
              <ArrowLeft className="w-3 h-3" />
              <span>Volver a Automatizaciones</span>
            </Link>

            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="flex items-center justify-center space-x-3">
                {automation.status === "live" ? (
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

              <p className="text-lg text-gray-600 leading-relaxed font-light">
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

                {/* Funcionalidades Clave */}
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
              </div>

              {/* Video Demo - Mobile Format */}
              {automation.videoUrl && (
                <div className="lg:col-span-5">
                  <div className="sticky top-8">
                    <div className="aspect-[9/16] relative rounded-xl overflow-hidden shadow-xl border border-gray-200 bg-black max-w-sm mx-auto">
                      {automation.videoUrl.startsWith("http") ? (
                        <iframe
                          width="100%"
                          height="100%"
                          src={automation.videoUrl}
                          title={`${automation.name} - Demo`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="absolute inset-0 w-full h-full"
                        ></iframe>
                      ) : (
                        <video
                          controls
                          className="absolute inset-0 w-full h-full object-contain"
                          playsInline
                        >
                          <source src={automation.videoUrl} type="video/mp4" />
                          Tu navegador no soporta la reproducción de video.
                        </video>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Footer */}
        <section className="bg-gray-900 py-20 text-center px-6">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="serif-font text-3xl text-white">
              ¿Necesitas algo similar?
            </h2>
            <p className="text-gray-400 font-light">
              Podemos implementar un agente como este para tu negocio en menos
              de 72 horas.
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
  );
}
