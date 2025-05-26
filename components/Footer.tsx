export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-emerald-400 mb-4">Agrowisata Seakong Wanadadi</h3>
            <p className="text-gray-400 mb-4">
              Destinasi agrowisata terdepan di Banjarnegara yang menawarkan pengalaman edukasi pertanian berkelanjutan
              dan wisata alam yang menyenangkan untuk seluruh keluarga.
            </p>
            <p className="text-gray-500 text-sm">Dikelola oleh BUMDes Wanadadi</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Menu Cepat</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#tentang" className="hover:text-emerald-400 transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#paket" className="hover:text-emerald-400 transition-colors">
                  Paket Wisata
                </a>
              </li>
              <li>
                <a href="#galeri" className="hover:text-emerald-400 transition-colors">
                  Galeri
                </a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-emerald-400 transition-colors">
                  Kontak
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Sosial Media</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  YouTube
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">© {currentYear} Agrowisata Seakong Wanadadi. Semua hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}
