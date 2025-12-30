'use client'

import Container from "@/components/Container";
import Card from "@/components/Card";
import ImageModal from "@/components/ImageModal";
import { sections } from "@/lib/data";
import { useState } from "react";

export default function ExperienceSection() {
  const [modalImages, setModalImages] = useState<string[] | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openModal = (images: string[], index: number) => {
    setModalImages(images)
    setCurrentImageIndex(index)
  }

  const closeModal = () => {
    setModalImages(null)
  }

  return (
    <>
      <section id="experience" className="scroll-mt-24 py-16 sm:py-10 animate-fade-in-up">
        <Container>
          <div className="mb-10">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl gradient-text">
              {sections.experience.title}
            </h2>
            <div className="mt-4 h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
          </div>
          <div className="space-y-4">
            {sections.experience.items.map((e) => (
              <Card key={e.title} title={e.title} desc={e.period}>
                <div className="grid gap-4 md:grid-cols-[1.5fr_1fr] md:items-start">
                  <div>
                    <ul className="list-disc space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                      {e.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                    {(e as any).link && (
                      <div className="mt-4">
                        <a
                          className="text-sm font-medium underline underline-offset-4 hover:opacity-80"
                          href={(e as any).link.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {(e as any).link.label}
                        </a>
                      </div>
                    )}
                  </div>
                  
                  {(e as any).images && Array.isArray((e as any).images) && (
                    <div className="grid grid-cols-2 gap-2">
                      {(e as any).images.map((img: string, index: number) => (
                        <div 
                          key={img} 
                          className="rounded-lg overflow-hidden border border-zinc-200/50 dark:border-zinc-800/50 cursor-pointer hover:scale-105 transition-transform duration-200"
                          onClick={() => openModal((e as any).images, index)}
                        >
                          <img
                            src={img}
                            alt={`${e.title} - Image ${index + 1}`}
                            className="w-full h-24 object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>
      {modalImages && (
        <ImageModal
          images={modalImages}
          currentIndex={currentImageIndex}
          onClose={closeModal}
        />
      )}
    </>
  );
}
