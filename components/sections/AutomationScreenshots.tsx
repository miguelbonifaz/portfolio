"use client";

import { useCallback, useState } from "react";
import type {
  AutomationScreenshot,
  AutomationScreenshotSection,
} from "@/data/types";
import ScreenshotCard from "./ScreenshotCard";
import ScreenshotLightbox from "./ScreenshotLightbox";

interface AutomationScreenshotsProps {
  sections: AutomationScreenshotSection[];
}

export default function AutomationScreenshots({
  sections,
}: AutomationScreenshotsProps) {
  const [selected, setSelected] = useState<AutomationScreenshot | null>(null);
  const close = useCallback(() => setSelected(null), []);

  return (
    <section className="w-full bg-gray-50 py-20 px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto space-y-20">
        {sections.map((section) => (
          <div key={section.title} className="space-y-10">
            <div className="space-y-2">
              <h2 className="serif-font text-2xl md:text-3xl text-gray-900">
                {section.title}
              </h2>
              {section.description && (
                <p className="text-sm text-gray-500">{section.description}</p>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
              {section.screenshots.map((shot, index) => (
                <ScreenshotCard
                  key={shot.src}
                  screenshot={shot}
                  index={index}
                  onOpen={setSelected}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {selected && <ScreenshotLightbox screenshot={selected} onClose={close} />}
    </section>
  );
}
