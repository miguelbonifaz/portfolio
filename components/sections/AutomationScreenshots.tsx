"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import type { AutomationScreenshot } from "@/data/types";
import ScreenshotLightbox from "./ScreenshotLightbox";

interface AutomationScreenshotsProps {
  screenshots: AutomationScreenshot[];
}

const spanClasses = {
  2: "md:col-span-2",
  3: "md:col-span-3",
  4: "md:col-span-4",
  6: "md:col-span-6",
} as const;

const cardClasses =
  "rounded-2xl bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_2px_-1px_rgba(0,0,0,0.06),0_8px_24px_-12px_rgba(0,0,0,0.12)] transition-[transform,box-shadow] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_2px_4px_-1px_rgba(0,0,0,0.08),0_16px_32px_-12px_rgba(0,0,0,0.18)] active:scale-[0.99] motion-reduce:transition-none motion-reduce:hover:translate-y-0";

export default function AutomationScreenshots({
  screenshots,
}: AutomationScreenshotsProps) {
  const [selected, setSelected] = useState<AutomationScreenshot | null>(null);
  const close = useCallback(() => setSelected(null), []);

  return (
    <section className="w-full bg-gray-50 py-20 px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="space-y-2">
          <h2 className="serif-font text-2xl md:text-3xl text-gray-900">
            Dentro del panel
          </h2>
          <p className="text-sm text-gray-500">
            Las herramientas que usa el equipo día a día, conectadas al agente.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {screenshots.map((shot, index) => {
            const isPortrait = shot.height > shot.width;

            return (
              <figure
                key={shot.src}
                className={`flex flex-col ${cardClasses} ${spanClasses[shot.span ?? 6]}`}
              >
                <div className="p-3">
                  <button
                    type="button"
                    onClick={() => setSelected(shot)}
                    aria-label={`Ampliar ${shot.title}`}
                    className={`relative block w-full cursor-zoom-in overflow-hidden rounded-xl bg-gray-50 ring-1 ring-inset ring-black/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 ${isPortrait ? "aspect-[3/4]" : ""}`}
                  >
                    {isPortrait ? (
                      <Image
                        src={shot.src}
                        alt={shot.title}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover object-top"
                      />
                    ) : (
                      <Image
                        src={shot.src}
                        alt={shot.title}
                        width={shot.width}
                        height={shot.height}
                        sizes="(min-width: 768px) 66vw, 100vw"
                        className="h-auto w-full"
                      />
                    )}
                  </button>
                </div>
                <figcaption className="space-y-1 px-5 pb-5 pt-2">
                  <p className="text-[11px] font-medium uppercase tracking-widest text-gray-400">
                    {String(index + 1).padStart(2, "0")}
                    {shot.label ? ` · ${shot.label}` : ""}
                  </p>
                  <p className="serif-font text-lg text-gray-900">
                    {shot.title}
                  </p>
                  <p className="text-sm leading-relaxed text-pretty text-gray-500">
                    {shot.description}
                  </p>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>

      {selected && <ScreenshotLightbox screenshot={selected} onClose={close} />}
    </section>
  );
}
