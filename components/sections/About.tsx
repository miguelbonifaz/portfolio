"use client";

import { experience, skills } from "@/data/skills";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="w-full thin-border-top bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Label Column */}
          <div
            className={`md:col-span-3 text-gray-400 text-xs tracking-widest uppercase transition-all duration-600 ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
          >
            (01) &mdash; Acerca de
          </div>

          {/* Content Column */}
          <div className="md:col-span-9 space-y-12">
            <h2
              className={`text-2xl md:text-3xl leading-relaxed font-light text-gray-800 transition-all duration-600 ${
                isVisible
                  ? "animate-fade-in-up delay-100"
                  : "opacity-0 translate-y-5"
              }`}
            >
              Desarrollador Laravel con más de 5 años de experiencia.
              -Apasionado por la
              <span className="serif-font italic">
                {" "}
                programación y el aprendizaje constante
              </span>
              . Aplico TDD y buenas prácticas para entregar proyectos confiables
              y escalables. Aprendizaje continuo de nuevas tecnologías
              manteniendo código limpio y bien estructurado.
            </h2>

            <div
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-gray-100 transition-all duration-600 ${
                isVisible
                  ? "animate-fade-in-up delay-200"
                  : "opacity-0 translate-y-5"
              }`}
            >
              {/* Experience List */}
              <div>
                <h3 className="font-bold mb-6 text-xs uppercase tracking-wide text-gray-400">
                  Experiencia
                </h3>
                <ul className="space-y-4 text-sm text-gray-700">
                  <li className="group cursor-default smooth-color">
                    <span className="group-hover:text-black">
                      Desarrollador Senior Laravel
                    </span>
                  </li>
                  <li className="group cursor-default smooth-color">
                    <span className="group-hover:text-black">
                      Full Stack Developer — Freelance
                    </span>
                  </li>
                </ul>
              </div>

              {/* Skills List */}
              <div>
                <h3 className="font-bold mb-6 text-xs uppercase tracking-wide text-gray-400">
                  Habilidades
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 border border-gray-200 rounded-full text-xs text-gray-600 smooth-color hover:bg-gray-50 hover:border-gray-300 cursor-default">
                    Laravel/PHP
                  </span>
                  <span className="px-3 py-1 border border-gray-200 rounded-full text-xs text-gray-600 smooth-color hover:bg-gray-50 hover:border-gray-300 cursor-default">
                    Vue.js
                  </span>
                  <span className="px-3 py-1 border border-gray-200 rounded-full text-xs text-gray-600 smooth-color hover:bg-gray-50 hover:border-gray-300 cursor-default">
                    React.js
                  </span>
                  <span className="px-3 py-1 border border-gray-200 rounded-full text-xs text-gray-600 smooth-color hover:bg-gray-50 hover:border-gray-300 cursor-default">
                    Next.js
                  </span>
                  <span className="px-3 py-1 border border-gray-200 rounded-full text-xs text-gray-600 smooth-color hover:bg-gray-50 hover:border-gray-300 cursor-default">
                    Livewire
                  </span>
                  <span className="px-3 py-1 border border-gray-200 rounded-full text-xs text-gray-600 smooth-color hover:bg-gray-50 hover:border-gray-300 cursor-default">
                    Inertia.js
                  </span>
                  <span className="px-3 py-1 border border-gray-200 rounded-full text-xs text-gray-600 smooth-color hover:bg-gray-50 hover:border-gray-300 cursor-default">
                    Filament
                  </span>
                  <span className="px-3 py-1 border border-gray-200 rounded-full text-xs text-gray-600 smooth-color hover:bg-gray-50 hover:border-gray-300 cursor-default">
                    TailwindCSS
                  </span>
                  <span className="px-3 py-1 border border-gray-200 rounded-full text-xs text-gray-600 smooth-color hover:bg-gray-50 hover:border-gray-300 cursor-default">
                    Testing (PHPUnit/Pest)
                  </span>
                  <span className="px-3 py-1 border border-gray-200 rounded-full text-xs text-gray-600 smooth-color hover:bg-gray-50 hover:border-gray-300 cursor-default">
                    APIs RESTful
                  </span>
                  <span className="px-3 py-1 border border-gray-200 rounded-full text-xs text-gray-600 smooth-color hover:bg-gray-50 hover:border-gray-300 cursor-default">
                    MySQL/PostgreSQL
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
