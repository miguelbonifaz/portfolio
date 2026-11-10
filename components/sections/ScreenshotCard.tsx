import Image from "next/image";
import type { AutomationScreenshot } from "@/data/types";

interface ScreenshotCardProps {
  screenshot: AutomationScreenshot;
  index: number;
  onOpen: (screenshot: AutomationScreenshot) => void;
}

const spanClasses = {
  2: "md:col-span-2",
  3: "md:col-span-3",
  4: "md:col-span-4",
  6: "md:col-span-6",
} as const;

const cardClasses =
  "rounded-2xl bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_2px_-1px_rgba(0,0,0,0.06),0_8px_24px_-12px_rgba(0,0,0,0.12)] transition-[transform,box-shadow] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_2px_4px_-1px_rgba(0,0,0,0.08),0_16px_32px_-12px_rgba(0,0,0,0.18)] active:scale-[0.99] motion-reduce:transition-none motion-reduce:hover:translate-y-0";

export default function ScreenshotCard({
  screenshot,
  index,
  onOpen,
}: ScreenshotCardProps) {
  const isPortrait = screenshot.height > screenshot.width;

  return (
    <figure
      className={`flex flex-col ${cardClasses} ${spanClasses[screenshot.span ?? 6]}`}
    >
      <div className="p-3">
        <button
          type="button"
          onClick={() => onOpen(screenshot)}
          aria-label={`Ampliar ${screenshot.title}`}
          className={`relative block w-full cursor-zoom-in overflow-hidden rounded-xl bg-gray-50 ring-1 ring-inset ring-black/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 ${isPortrait ? "aspect-[3/4]" : ""}`}
        >
          {isPortrait ? (
            <Image
              src={screenshot.src}
              alt={screenshot.title}
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover object-top"
            />
          ) : (
            <Image
              src={screenshot.src}
              alt={screenshot.title}
              width={screenshot.width}
              height={screenshot.height}
              sizes="(min-width: 768px) 66vw, 100vw"
              className="h-auto w-full"
            />
          )}
        </button>
      </div>
      <figcaption className="space-y-1 px-5 pb-5 pt-2">
        <p className="text-[11px] font-medium uppercase tracking-widest text-gray-400">
          {String(index + 1).padStart(2, "0")}
          {screenshot.label ? ` · ${screenshot.label}` : ""}
        </p>
        <p className="serif-font text-lg text-gray-900">{screenshot.title}</p>
        <p className="text-sm leading-relaxed text-pretty text-gray-500">
          {screenshot.description}
        </p>
      </figcaption>
    </figure>
  );
}
