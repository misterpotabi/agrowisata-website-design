"use client"

import type React from "react"

// Import all components
import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import ActivitiesSection from "@/components/ActivitiesSection"
import PackagesSection from "@/components/PackagesSection"
import GallerySection from "@/components/GallerySection"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"

export default function HomePage() {
  // Add scroll offset for fixed navbar
  const scrollOffset = 80 // Height of fixed navbar + some padding

  const handleNavClick = (e: React.MouseEvent<HTMLElement>, targetId: string) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      const elementPosition = element.offsetTop - scrollOffset
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onNavClick={handleNavClick} />
      <HeroSection onNavClick={handleNavClick} />
      <AboutSection />
      <ActivitiesSection />
      <PackagesSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  )
}
