"use client"

import type React from "react"

import { useState } from "react"
import { Menu, X } from "lucide-react"

interface HeaderProps {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void
}

export default function Header({ onNavClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    onNavClick(e, targetId)
    setIsMenuOpen(false)
  }

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-emerald-700">Agrowisata Seakong</h1>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#beranda"
                onClick={(e) => handleMenuClick(e, "beranda")}
                className="text-emerald-700 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Beranda
              </a>
              <a
                href="#tentang"
                onClick={(e) => handleMenuClick(e, "tentang")}
                className="text-gray-700 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Tentang
              </a>
              <a
                href="#paket"
                onClick={(e) => handleMenuClick(e, "paket")}
                className="text-gray-700 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Paket Wisata
              </a>
              <a
                href="#galeri"
                onClick={(e) => handleMenuClick(e, "galeri")}
                className="text-gray-700 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Galeri
              </a>
              <a
                href="#kontak"
                onClick={(e) => handleMenuClick(e, "kontak")}
                className="text-gray-700 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Kontak
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-emerald-600 focus:outline-none focus:text-emerald-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <a
              href="#beranda"
              onClick={(e) => handleMenuClick(e, "beranda")}
              className="text-emerald-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Beranda
            </a>
            <a
              href="#tentang"
              onClick={(e) => handleMenuClick(e, "tentang")}
              className="text-gray-700 hover:text-emerald-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              Tentang
            </a>
            <a
              href="#paket"
              onClick={(e) => handleMenuClick(e, "paket")}
              className="text-gray-700 hover:text-emerald-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              Paket Wisata
            </a>
            <a
              href="#galeri"
              onClick={(e) => handleMenuClick(e, "galeri")}
              className="text-gray-700 hover:text-emerald-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              Galeri
            </a>
            <a
              href="#kontak"
              onClick={(e) => handleMenuClick(e, "kontak")}
              className="text-gray-700 hover:text-emerald-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              Kontak
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
