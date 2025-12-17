import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { projects } from '@/data/projects'
import ProjectCard from '@/components/projects/ProjectCard'

export default function Works() {
  // Get featured projects and separate the last one for full-width display
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 4)
  const lastProject = projects.find((p) => p.slug === 'beaubella')

  return (
    <section id="works" className="w-full thin-border-top bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Label Column */}
          <div className="md:col-span-3 text-gray-400 text-xs tracking-widest uppercase sticky top-24 h-fit">
            (02) &mdash; Trabajos Seleccionados
          </div>

          {/* Projects Grid */}
          <div className="md:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
              {featuredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  className={index % 2 !== 0 ? 'md:mt-12' : ''}
                />
              ))}
            </div>

            {/* Last Project (Full Width) */}
            {lastProject && (
              <ProjectCard
                project={lastProject}
                className="mt-16 border-t border-gray-100 pt-16"
              />
            )}

            {/* View More Button */}
            <div className="mt-20 flex justify-center">
              <Link
                href="/automations"
                className="group inline-flex items-center space-x-2 text-sm text-gray-600 hover:text-black transition-colors border-b border-gray-300 pb-1 hover:border-black"
              >
                <span>Ver Automatizaciones</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
