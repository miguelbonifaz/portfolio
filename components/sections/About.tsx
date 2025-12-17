import { experience, skills } from '@/data/skills'

export default function About() {
  return (
    <section id="about" className="w-full thin-border-top bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Label Column */}
          <div className="md:col-span-3 text-gray-400 text-xs tracking-widest uppercase sticky top-24 h-fit">
            (01) &mdash; Acerca de
          </div>

          {/* Content Column */}
          <div className="md:col-span-9 space-y-12">
            <h2 className="text-2xl md:text-3xl leading-relaxed font-light text-gray-800">
              Desarrollador Laravel con más de 5 años de experiencia. Apasionado por la
              <span className="serif-font italic"> programación y el aprendizaje constante</span>.
              Implemento testing en todos mis proyectos para permitir upgrades seguros.
              Utilizo IA en mi flujo de trabajo para acelerar el desarrollo.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-gray-100">
              {/* Experience List */}
              <div>
                <h3 className="font-bold mb-6 text-xs uppercase tracking-wide text-gray-400">
                  Experiencia
                </h3>
                <ul className="space-y-4 text-sm text-gray-700">
                  <li className="flex justify-between items-baseline group cursor-default">
                    <span className="group-hover:text-black transition-colors">
                      Desarrollador Senior Laravel
                    </span>
                    <span className="text-gray-400 text-xs">Presente</span>
                  </li>
                  <li className="flex justify-between items-baseline group cursor-default">
                    <span className="group-hover:text-black transition-colors">
                      Full Stack Developer — Freelance
                    </span>
                    <span className="text-gray-400 text-xs">2021-23</span>
                  </li>
                  <li className="flex justify-between items-baseline group cursor-default">
                    <span className="group-hover:text-black transition-colors">
                      Desarrollo Web
                    </span>
                    <span className="text-gray-400 text-xs">2019-21</span>
                  </li>
                </ul>
              </div>

              {/* Skills List */}
              <div>
                <h3 className="font-bold mb-6 text-xs uppercase tracking-wide text-gray-400">
                  Habilidades
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 border border-gray-200 rounded-full text-xs text-gray-600">
                    Laravel/PHP
                  </span>
                  <span className="px-3 py-1 border border-gray-200 rounded-full text-xs text-gray-600">
                    Vue.js
                  </span>
                  <span className="px-3 py-1 border border-gray-200 rounded-full text-xs text-gray-600">
                    Livewire
                  </span>
                  <span className="px-3 py-1 border border-gray-200 rounded-full text-xs text-gray-600">
                    Inertia.js
                  </span>
                  <span className="px-3 py-1 border border-gray-200 rounded-full text-xs text-gray-600">
                    Filament
                  </span>
                  <span className="px-3 py-1 border border-gray-200 rounded-full text-xs text-gray-600">
                    TailwindCSS
                  </span>
                  <span className="px-3 py-1 border border-gray-200 rounded-full text-xs text-gray-600">
                    Testing (PHPUnit/Pest)
                  </span>
                  <span className="px-3 py-1 border border-gray-200 rounded-full text-xs text-gray-600">
                    APIs RESTful
                  </span>
                  <span className="px-3 py-1 border border-gray-200 rounded-full text-xs text-gray-600">
                    MySQL/PostgreSQL
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
