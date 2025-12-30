'use client'

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import SkillsSection from "@/components/sections/SkillsSection";
import TrainingSection from "@/components/sections/TrainingSection";
import SpeakingSection from "@/components/sections/SpeakingSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import { profile, sections } from "@/lib/data";
import { useState } from "react";
import ImageModal from "@/components/ImageModal";

export default function Page() {
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
    <main>
      <Navbar />
      {modalImages && (
        <ImageModal
          images={modalImages}
          currentIndex={currentImageIndex}
          onClose={closeModal}
        />
      )}
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <ExperienceSection />
      <SkillsSection />
      <TrainingSection />
      <SpeakingSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
