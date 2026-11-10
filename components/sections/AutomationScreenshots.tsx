"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import type { AutomationScreenshot } from "@/data/types";

interface AutomationScreenshotsProps {
  screenshots: AutomationScreenshot[];
}

const spanClasses = {
  1: "md:col-span-1",
  2: "md:col-span-2",
  3: "md:col-span-3",
} as const;

export default function AutomationScreenshots({
  screenshots,
}: AutomationScreenshotsProps) {
  const [selected, setSelected] = useState<AutomationScreenshot | null>(null);

  return (
    <section className="w-full bg-gray-50 py-20 px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto space-y-10">
        <h2 className="serif-font text-2xl md:text-3xl text-gray-900">
          Dentro del panel
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {screenshots.map((shot) => (
            <figure
              key={shot.src}
              className={`space-y-3 ${spanClasses[shot.span ?? 3]}`}
            >
              <button
                type="button"
                onClick={() => setSelected(shot)}
                className="block w-full rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow cursor-zoom-in"
              >
                <Image
                  src={shot.src}
                  alt={shot.title}
                  width={shot.width}
                  height={shot.height}
                  sizes="(min-width: 768px) 66vw, 100vw"
                  className="w-full h-auto"
                />
              </button>
              <figcaption>
                <p className="text-sm font-medium text-gray-900">
                  {shot.title}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {shot.description}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            type="button"
            onClick={() => setSelected(null)}
            className="absolute top-4 right-4 text-white/80 hover:text-white"
            aria-label="Cerrar"
          >
            <X className="w-8 h-8" />
          </button>
          <Image
            src={selected.src}
            alt={selected.title}
            width={selected.width}
            height={selected.height}
            className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg"
          />
        </div>
      )}
    </section>
  );
}
