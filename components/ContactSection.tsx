import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactSection() {
  return (
    <section id="kontak" className="py-16 bg-emerald-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Hubungi Kami</h2>
          <p className="text-lg text-emerald-100">Siap melayani dan memberikan pengalaman terbaik untuk Anda</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-6">Informasi Kontak</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 mr-4 text-emerald-300 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-1">Alamat Lengkap</p>
                  <p className="text-emerald-100">
                    Desa Seakong, Kecamatan Wanadadi
                    <br />
                    Kabupaten Banjarnegara
                    <br />
                    Jawa Tengah 53473
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-6 w-6 mr-4 text-emerald-300 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-1">Telepon & WhatsApp</p>
                  <p className="text-emerald-100">+62 812-3456-7890</p>
                  <p className="text-emerald-100">+62 856-7890-1234</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-6 w-6 mr-4 text-emerald-300 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-1">Email</p>
                  <p className="text-emerald-100">info@agrowisataseakong.com</p>
                  <p className="text-emerald-100">bumdes.wanadadi@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="h-6 w-6 mr-4 text-emerald-300 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-1">Jam Operasional</p>
                  <p className="text-emerald-100">Senin - Jumat: 08.00 - 17.00 WIB</p>
                  <p className="text-emerald-100">Sabtu - Minggu: 07.00 - 18.00 WIB</p>
                  <p className="text-emerald-100 text-sm mt-1">*Reservasi diperlukan untuk grup</p>
                </div>
              </div>
            </div>
          </div>

          {/* About BUMDes */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-6">Tentang BUMDes Wanadadi</h3>
            <div className="space-y-4">
              <p className="text-emerald-100">
                Badan Usaha Milik Desa (BUMDes) Wanadadi adalah lembaga ekonomi desa yang mengelola berbagai usaha untuk
                meningkatkan kesejahteraan masyarakat desa, termasuk pengembangan Agrowisata Seakong.
              </p>
              <p className="text-emerald-100">
                Dengan komitmen pada pembangunan berkelanjutan dan pemberdayaan masyarakat, BUMDes Wanadadi terus
                berinovasi dalam mengembangkan potensi desa untuk kemajuan bersama.
              </p>
              <div className="bg-emerald-800 p-4 rounded-lg mt-6">
                <h4 className="font-semibold mb-2">Unit Usaha BUMDes:</h4>
                <ul className="text-emerald-100 text-sm space-y-1">
                  <li>• Agrowisata Seakong</li>
                  <li>• Simpan Pinjam Desa</li>
                  <li>• Pengelolaan Sampah</li>
                  <li>• Produksi Pupuk Organik</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-6">Aksi Cepat</h3>
            <div className="space-y-4">
              <Button className="w-full bg-white text-emerald-700 hover:bg-emerald-50 justify-start">
                <Phone className="h-4 w-4 mr-2" />
                Hubungi via WhatsApp
              </Button>
              <Button className="w-full bg-emerald-600 hover:bg-emerald-500 justify-start">
                <Mail className="h-4 w-4 mr-2" />
                Kirim Email
              </Button>
              <Button
                variant="outline"
                className="w-full border-white text-white hover:bg-white hover:text-emerald-700 justify-start"
              >
                <MapPin className="h-4 w-4 mr-2" />
                Lihat di Google Maps
              </Button>
            </div>

            <div className="mt-8 p-4 bg-emerald-800 rounded-lg">
              <h4 className="font-semibold mb-3">Tips Berkunjung:</h4>
              <ul className="text-emerald-100 text-sm space-y-2">
                <li>• Reservasi H-1 untuk grup &gt;10 orang</li>
                <li>• Bawa topi dan sunscreen</li>
                <li>• Gunakan pakaian nyaman</li>
                <li>• Kamera untuk dokumentasi</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
