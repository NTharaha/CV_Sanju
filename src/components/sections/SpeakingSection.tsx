'use client'

import Container from "@/components/Container";
import Card from "@/components/Card";
import ImageModal from "@/components/ImageModal";
import { sections } from "@/lib/data";
import { useState } from "react";

export default function SpeakingSection() {
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
      <section id="speaking" className="scroll-mt-24 py-16 sm:py-10 animate-fade-in-up">
        <Container>
          <div className="mb-10">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl gradient-text">
              {sections.speaking.title}
            </h2>
            <div className="mt-4 h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {sections.speaking.items.map((s) => (
              <Card key={s.title} title={s.title} desc={s.desc}>
                {(s as any).image && (
                  <div className="mt-4 rounded-lg overflow-hidden border border-zinc-200/50 dark:border-zinc-800/50">
                    <img
                      src={(s as any).image}
                      alt={s.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                )}
                <div className="mt-4">
                  <a
                    className="text-sm font-medium underline underline-offset-4 hover:opacity-80"
                    href={(s as any).link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {(s as any).linkLabel}
                  </a>
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
