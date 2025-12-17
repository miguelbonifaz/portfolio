'use client'

import Image from 'next/image'
import { useState } from 'react'

interface ProjectGalleryProps {
  images: string[]
  projectTitle: string
}

export default function ProjectGallery({ images, projectTitle }: ProjectGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  if (!images || images.length === 0) {
    return null
  }

  return (
    <>
      <div className="space-y-8">
        {images.map((image, index) => (
          <div key={index} className="space-y-2">
            <div className="bg-gray-100 aspect-[16/9] overflow-hidden cursor-pointer group">
              <Image
                src={image}
                alt={`${projectTitle} - Imagen ${index + 1}`}
                width={1200}
                height={675}
                className="w-full h-full object-cover grayscale-img group-hover:filter-none group-hover:opacity-100 transition-all duration-500"
                onClick={() => setSelectedImage(image)}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-full">
            <Image
              src={selectedImage}
              alt={`${projectTitle} - Vista ampliada`}
              width={1920}
              height={1080}
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              aria-label="Cerrar"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  )
}

