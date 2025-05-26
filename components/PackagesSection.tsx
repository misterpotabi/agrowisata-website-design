import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PackagesSection() {
  const packages = [
    {
      title: "Paket Edukasi Pertanian",
      description: "Belajar langsung tentang teknik pertanian modern dan organik",
      price: "Rp 75.000",
      duration: "4 jam",
      image: "/landmark_image.jpg",
      includes: ["Tur kebun organik", "Workshop pertanian", "Makan siang tradisional", "Sertifikat peserta"],
      highlights: "Cocok untuk pelajar dan mahasiswa",
    },
    {
      title: "Paket Wisata Keluarga",
      description: "Pengalaman seru untuk seluruh keluarga di alam terbuka",
      price: "Rp 125.000",
      duration: "6 jam",
      image: "/sheep_image.jpg",
      includes: ["Tur lengkap area", "Aktivitas anak-anak", "Makan siang keluarga", "Foto dokumentasi"],
      highlights: "Termasuk playground anak",
    },
    {
      title: "Paket Camping & Outbound",
      description: "Menginap di alam dengan berbagai aktivitas outdoor",
      price: "Rp 200.000",
      duration: "2 hari 1 malam",
      image: "/nature_image1.jpg",
      includes: ["Tenda camping", "Outbound team building", "3x makan", "Api unggun & musik"],
      highlights: "Minimal 10 orang",
    },
  ]

  return (
    <section id="paket" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Paket Wisata</h2>
          <p className="text-lg text-gray-600">Pilih paket wisata yang sesuai dengan kebutuhan dan budget Anda</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative">
                <img src={pkg.image || "/placeholder.svg"} alt={pkg.title} className="w-full h-48 object-cover" />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-emerald-600 text-white">
                    {pkg.duration}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{pkg.title}</CardTitle>
                <CardDescription className="text-gray-600">{pkg.description}</CardDescription>
                <p className="text-sm text-emerald-600 font-medium">{pkg.highlights}</p>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-emerald-700">{pkg.price}</span>
                  <span className="text-gray-600">/orang</span>
                </div>
                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-gray-900">Yang Termasuk:</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    {pkg.includes.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <Star className="h-4 w-4 text-emerald-600 mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3">
                  Pesan Sekarang
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Butuh paket khusus untuk grup besar atau acara perusahaan?</p>
          <Button
            variant="outline"
            className="border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white"
          >
            Konsultasi Paket Custom
          </Button>
        </div>
      </div>
    </section>
  )
}
