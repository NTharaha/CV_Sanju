'use client'

import { useState } from 'react'

interface ImageModalProps {
  images: string[]
  currentIndex: number
  onClose: () => void
}

export default function ImageModal({ images, currentIndex, onClose }: ImageModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(currentIndex)

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') onClose()
    if (e.key === 'ArrowLeft') goToPrevious()
    if (e.key === 'ArrowRight') goToNext()
  }

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div 
        className="relative max-w-[90vw] max-h-[90vh] mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-zinc-300 transition-colors"
          aria-label="Close modal"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image counter */}
        <div className="absolute -top-12 left-0 text-white text-sm">
          {currentImageIndex + 1} / {images.length}
        </div>

        {/* Main image container */}
        <div className="flex items-center justify-center min-h-[200px]">
          <img
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
            className="max-w-full max-h-[70vh] object-contain rounded-lg"
          />
        </div>

        {/* Navigation buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-blue-500/90 hover:bg-blue-600/80 text-white rounded-full p-3 transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl backdrop-blur-sm"
              aria-label="Previous image"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-blue-500/90 hover:bg-blue-600/80 text-white rounded-full p-3 transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl backdrop-blur-sm"
              aria-label="Next image"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="flex gap-2 mt-4 overflow-x-auto pb-2 justify-center">
            {images.map((image, index) => (
              <button
                key={image}
                onClick={() => setCurrentImageIndex(index)}
                className={`flex-shrink-0 rounded border-2 transition-all ${
                  index === currentImageIndex 
                    ? 'border-blue-500 opacity-100' 
                    : 'border-zinc-600 opacity-60 hover:opacity-80'
                }`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-16 h-16 object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
