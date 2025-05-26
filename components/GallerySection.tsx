import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function GallerySection() {
  const [showAll, setShowAll] = useState(false)

  const galleryImages = [
    { src: "/landmark_image.jpg", alt: "Hamparan sawah hijau", category: "Pemandangan" },
    { src: "/nature_hande.jpg", alt: "Aktivitas menanam padi", category: "Aktivitas" },
    { src: "/nature_image2.jpg", alt: "Gazebo tradisional", category: "Fasilitas" },
    { src: "/nature_image1.jpg", alt: "Workshop pertanian", category: "Edukasi" },
    { src: "/sheep_image.jpg", alt: "Anak-anak bermain", category: "Keluarga" },
    { src: "/vegetable_image.jpg", alt: "Sunset di kebun", category: "Pemandangan" },
    { src: "/tractor_iamge.jpg", alt: "Camping area", category: "Fasilitas" },
    { src: "/landmark_image.jpg", alt: "Produk organik", category: "Produk" },
  ]

  const displayedImages = showAll ? galleryImages : galleryImages.slice(0, 4)

  return (
    <section id="galeri" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ...judul dan deskripsi... */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {displayedImages.map((image, index) => (
            <div key={index} className="relative group aspect-square overflow-hidden rounded-lg">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-end">
                <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm font-semibold">{image.alt}</p>
                  <Badge variant="secondary" className="mt-1 text-xs">
                    {image.category}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            className="border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Sembunyikan" : "Lihat Semua Foto"}
          </Button>
        </div>
      </div>
    </section>
  )
}