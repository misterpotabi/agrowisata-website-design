"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface HeroSectionProps {
  onNavClick: (e: React.MouseEvent<HTMLElement>, targetId: string) => void
}

export default function HeroSection({ onNavClick }: HeroSectionProps) {
  return (
    <section id="beranda" className="relative h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/nature_image2.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 via-emerald-800/70 to-emerald-700/60"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Agrowisata Seakong
            <span className="block text-emerald-300">Wanadadi</span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Nikmati pengalaman wisata edukasi pertanian yang menyenangkan di tengah hamparan hijau Wanadadi
          </p>
          <div className="mb-8">
            <Badge className="bg-emerald-500 text-white text-lg px-4 py-2 mb-4">Dikelola oleh BUMDes Wanadadi</Badge>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={(e) => onNavClick(e, "tentang")}
              className="bg-white text-emerald-700 hover:bg-gray-100 text-lg px-8 py-4"
            >
              Jelajahi Sekarang
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={(e) => onNavClick(e, "paket")}
              className="border-white text-emerald-700 hover:bg-white hover:text-emerald-700 text-lg px-8 py-4"
            >
              Lihat Paket Wisata
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll untuk melihat lebih</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
