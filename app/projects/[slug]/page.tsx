import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github, Calendar, Tag } from 'lucide-react'
import { getAllProjects, getProjectBySlug, getProfile } from '@/data'
import { getProjectNavigation } from '@/lib/project-navigation'
import ProjectGallery from '@/components/projects/ProjectGallery'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import JsonLd from '@/components/seo/JsonLd'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/json-ld'

export const dynamic = 'force-static'

export async function generateStaticParams() {
  const projects = getAllProjects()
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  const profile = getProfile()

  if (!project) {
    return {
      title: 'Proyecto no encontrado',
    }
  }

  return {
    title: project.title,
    description: project.shortDescription,
    keywords: [
      ...project.technologies,
      project.category,
      'Miguel Bonifaz',
      'Desarrollador Laravel',
    ],
    authors: [{ name: 'Miguel Bonifaz' }],
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      type: 'article',
      locale: 'es_ES',
      url: `/projects/${project.slug}`,
      siteName: 'Miguel Bonifaz Portfolio',
      title: `${project.title} | Miguel Bonifaz`,
      description: project.shortDescription,
      publishedTime: `${project.year}-01-01T00:00:00.000Z`,
      authors: ['Miguel Bonifaz'],
      images: [
        {
          url: project.images.hero,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | Miguel Bonifaz`,
      description: project.shortDescription,
      images: [project.images.hero],
      creator: '@miguelbonifaz',
    },
  }
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  const profile = getProfile()
  const { previous, next } = getProjectNavigation(slug)

  if (!project) {
    notFound()
  }

  const articleSchema = generateArticleSchema(project)
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Inicio', url: '/' },
    { name: 'Proyectos', url: '/#works' },
    { name: project.title, url: `/projects/${project.slug}` },
  ])

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Header />
      <main className="flex-grow w-full flex flex-col">
        {/* Hero Section */}
        <section className="w-full pt-20 pb-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col space-y-4 mb-12">
              <div className="flex items-center space-x-4 text-xs text-gray-400 uppercase tracking-widest flex-wrap">
                <span>{project.category}</span>
                <span>&mdash;</span>
                <span>{project.year}</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl serif-font text-gray-900 leading-tight">
                {project.title}
              </h1>
            </div>

            {/* Main Hero Image */}
            <div className="w-full aspect-[21/9] bg-gray-100 overflow-hidden mb-12">
              <Image
                src={project.images.hero}
                alt={project.title}
                width={1920}
                height={820}
                className="w-full h-full object-cover grayscale-img hover:filter-none hover:opacity-100 transition-all duration-500"
                priority
              />
            </div>
          </div>
        </section>

        {/* Project Details & Content */}
        <section className="w-full thin-border-top bg-white">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              {/* Sidebar Info */}
              <div className="md:col-span-3 space-y-8 sticky top-24 h-fit">
                {/* Year */}
                <div>
                  <h3 className="text-gray-400 text-xs tracking-widest uppercase mb-2">
                    Año
                  </h3>
                  <p className="text-sm text-gray-900">{project.year}</p>
                </div>

                {/* Category */}
                <div>
                  <h3 className="text-gray-400 text-xs tracking-widest uppercase mb-2">
                    Categoría
                  </h3>
                  <p className="text-sm text-gray-900">{project.category}</p>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-gray-400 text-xs tracking-widest uppercase mb-2">
                    Stack Tecnológico
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="pill-badge text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                {(project.links?.github || project.links?.live || project.links?.demo) && (
                  <div>
                    <h3 className="text-gray-400 text-xs tracking-widest uppercase mb-2">
                      Enlaces
                    </h3>
                    <div className="space-y-2">
                      {project.links?.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center space-x-2 text-xs text-gray-600 hover:text-black transition-colors"
                        >
                          <Github className="w-3 h-3" />
                          <span>GitHub</span>
                          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      )}
                      {project.links?.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center space-x-2 text-xs text-gray-600 hover:text-black transition-colors"
                        >
                          <ExternalLink className="w-3 h-3" />
                          <span>Sitio Web</span>
                        </a>
                      )}
                      {project.links?.demo && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center space-x-2 text-xs text-gray-600 hover:text-black transition-colors"
                        >
                          <ExternalLink className="w-3 h-3" />
                          <span>Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                )}

                {/* Back Button */}
                <div className="pt-8">
                  <Link
                    href="/#works"
                    className="group inline-flex items-center space-x-2 text-xs text-gray-500 hover:text-black transition-colors"
                  >
                    <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                    <span>Volver a Trabajos</span>
                  </Link>
                </div>
              </div>

              {/* Main Content Column */}
              <div className="md:col-span-9 space-y-16">
                {/* Description Section */}
                <div className="space-y-8 max-w-3xl">
                  <h2 className="text-2xl md:text-3xl leading-relaxed font-light text-gray-800">
                    {project.shortDescription}
                  </h2>
                  <div className="space-y-6 text-sm md:text-base text-gray-600 leading-relaxed font-light">
                    {project.longDescription.split('\n').map((paragraph, index) => (
                      <p key={index}>{paragraph.trim()}</p>
                    ))}
                  </div>
                </div>

                {/* Gallery */}
                {project.images.gallery && project.images.gallery.length > 0 && (
                  <ProjectGallery images={project.images.gallery} projectTitle={project.title} />
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Project Navigation */}
        <section className="w-full thin-border-top bg-white">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="flex justify-between items-center">
              {/* Previous Project */}
              {previous ? (
                <Link href={`/projects/${previous.slug}`} className="group text-left">
                  <span className="block text-xs text-gray-400 uppercase tracking-widest mb-1 group-hover:text-black transition-colors">
                    Anterior
                  </span>
                  <span className="block text-lg md:text-xl serif-font text-gray-600 group-hover:text-black transition-colors">
                    {previous.title}
                  </span>
                </Link>
              ) : (
                <div></div>
              )}

              {/* Next Project */}
              {next ? (
                <Link href={`/projects/${next.slug}`} className="group text-right">
                  <span className="block text-xs text-gray-400 uppercase tracking-widest mb-1 group-hover:text-black transition-colors">
                    Siguiente
                  </span>
                  <span className="block text-lg md:text-xl serif-font text-gray-600 group-hover:text-black transition-colors">
                    {next.title}
                  </span>
                </Link>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="w-full thin-border-top bg-gray-50">
          <div className="max-w-3xl mx-auto px-6 py-20 text-center space-y-6">
            <h2 className="serif-font text-3xl md:text-4xl text-gray-800">
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="text-sm text-gray-600">
              Estoy disponible para proyectos freelance y colaboraciones.
            </p>
            <Link
              href="/#contact"
              className="inline-block mt-4 px-8 py-3 bg-gray-900 text-white text-xs uppercase tracking-widest hover:bg-gray-700 transition-colors"
            >
              Contáctame
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

