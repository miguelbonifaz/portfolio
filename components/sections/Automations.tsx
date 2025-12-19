"use client";

import Link from "next/link";
import { Scissors, Cake, Check, ArrowUpRight } from "lucide-react";
import { automations } from "@/data/automations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Automations() {
  const { ref, isVisible } = useScrollAnimation();
  const getStatusBadge = (status: string) => {
    if (status === "live") {
      return (
        <div className="flex items-center space-x-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-xs uppercase tracking-widest text-gray-400">
            Agente en Vivo
          </span>
        </div>
      );
    }
    return (
      <div className="flex items-center space-x-2 mb-6">
        <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
        <span className="text-xs uppercase tracking-widest text-gray-400">
          En Desarrollo
        </span>
      </div>
    );
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "scissors":
        return <Scissors className="w-12 h-12 stroke-[1px]" />;
      case "cake":
        return <Cake className="w-12 h-12 stroke-[1px]" />;
      default:
        return <Scissors className="w-12 h-12 stroke-[1px]" />;
    }
  };

  return (
    <section
      id="automations"
      className="w-full thin-border-top bg-gray-50/50"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Label Column */}
          <div
            className={`md:col-span-3 text-gray-400 text-xs tracking-widest uppercase transition-all duration-600 ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
          >
            (03) &mdash; Automatizaciones
          </div>

          {/* Content Column */}
          <div className="md:col-span-9">
            <div className="mb-12">
              <h2
                className={`serif-font text-3xl md:text-4xl text-gray-900 mb-4 transition-all duration-600 ${
                  isVisible
                    ? "animate-fade-in-up delay-100"
                    : "opacity-0 translate-y-5"
                }`}
              >
                Agentes de IA Conversacional
              </h2>
              <p
                className={`text-sm md:text-base text-gray-600 font-light max-w-2xl leading-relaxed transition-all duration-600 ${
                  isVisible
                    ? "animate-fade-in-up delay-200"
                    : "opacity-0 translate-y-5"
                }`}
              >
                Diseño agentes de IA conversacional que automatizan procesos
                empresariales vía WhatsApp. Mejoran eficiencia operativa,
                reducen costes y aceleran respuestas al cliente trabajando 24/7.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {automations.map((automation, index) => (
                <div
                  key={automation.id}
                  className={`bg-white p-8 border border-gray-200 group smooth-color hover:border-gray-400 relative overflow-hidden hover-lift transition-all duration-600 ${
                    isVisible
                      ? `animate-fade-in-up delay-${300 + index * 100}`
                      : "opacity-0 translate-y-5"
                  }`}
                >
                  <div className="absolute top-4 right-4 text-gray-100 smooth-color group-hover:text-gray-200">
                    {getIcon(automation.icon)}
                  </div>

                  {getStatusBadge(automation.status)}

                  <h3 className="serif-font text-2xl text-gray-900 mb-2">
                    {automation.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-6 min-h-[40px]">
                    {automation.shortDescription}
                  </p>

                  <ul className="space-y-2 mb-8">
                    {automation.features.slice(0, 2).map((feature, i) => (
                      <li key={i} className="flex items-center text-xs text-gray-600">
                        <Check className="w-3 h-3 mr-2 text-gray-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/automations#agents"
                    className="inline-flex items-center text-xs uppercase tracking-widest text-black border-b border-black pb-1 smooth-color hover:opacity-60 group"
                  >
                    Conocer más...
                    <ArrowUpRight className="w-3 h-3 ml-1 smooth-color group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
