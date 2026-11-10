"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import type { AutomationScreenshot } from "@/data/types";

interface ScreenshotLightboxProps {
  screenshot: AutomationScreenshot;
  onClose: () => void;
}

export default function ScreenshotLightbox({
  screenshot,
  onClose,
}: ScreenshotLightboxProps) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={screenshot.title}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-black/90 p-4"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-2 right-2 flex h-11 w-11 items-center justify-center rounded-full text-white/80 hover:text-white focus-visible:outline-2 focus-visible:outline-white"
        aria-label="Cerrar"
      >
        <X className="h-7 w-7" />
      </button>
      <Image
        src={screenshot.src}
        alt={screenshot.title}
        width={screenshot.width}
        height={screenshot.height}
        className="h-auto max-h-[78vh] w-auto max-w-full rounded-lg object-contain"
      />
      <div className="max-w-2xl text-center">
        <p className="serif-font text-lg text-white">{screenshot.title}</p>
        <p className="text-sm text-pretty text-gray-300">
          {screenshot.description}
        </p>
      </div>
    </div>
  );
}
