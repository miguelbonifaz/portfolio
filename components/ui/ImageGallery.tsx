"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface ImageGalleryProps {
  images: string[];
  automationName: string;
}

export default function ImageGallery({
  images,
  automationName,
}: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {images.map((img, idx) => (
          <div key={idx} className="group">
            <button
              onClick={() => setSelectedImage(img)}
              className="relative aspect-[4/5] md:aspect-square rounded-lg overflow-hidden bg-gray-100 border border-gray-100 shadow-sm hover:shadow-md transition-all w-full cursor-pointer"
            >
              <Image
                src={img}
                alt={`${automationName} captura ${idx + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </button>
            <p className="mt-2 text-xs text-gray-500 text-center">
              Captura {idx + 1}
            </p>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            aria-label="Cerrar imagen"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full">
            <Image
              src={selectedImage}
              alt={`${automationName} expandida`}
              fill
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
}
