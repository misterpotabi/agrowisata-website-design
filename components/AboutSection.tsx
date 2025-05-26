import { Award, Heart, TreePine, Users } from "lucide-react"

export default function AboutSection() {
  const achievements = [
    {
      icon: <Award className="h-12 w-12 text-emerald-600" />,
      title: "500+",
      subtitle: "Wisatawan per Bulan",
    },
    {
      icon: <Heart className="h-12 w-12 text-emerald-600" />,
      title: "98%",
      subtitle: "Kepuasan Pengunjung",
    },
    {
      icon: <TreePine className="h-12 w-12 text-emerald-600" />,
      title: "15 Ha",
      subtitle: "Luas Area Wisata",
    },
    {
      icon: <Users className="h-12 w-12 text-emerald-600" />,
      title: "50+",
      subtitle: "Petani Mitra",
    },
  ]

  return (
    <section id="tentang" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tentang Agrowisata Seakong</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Dikelola oleh BUMDes Wanadadi, Agrowisata Seakong menawarkan pengalaman unik mengenal dunia pertanian modern
            sambil menikmati keindahan alam pedesaan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="/vegetable_image.jpg"
              alt="Pemandangan Agrowisata Seakong dengan petani sedang bekerja"
              className="rounded-lg shadow-lg w-full h-64 md:h-96 object-cover"
            />
          </div>
          {/* ✅ Tambahkan class text-center di mobile */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Visi & Misi Kami</h3>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-emerald-700 mb-3 flex items-center justify-center md:justify-start">
                  <Award className="h-5 w-5 mr-2" />
                  Visi
                </h4>
                <p className="text-gray-600">
                  Menjadi destinasi agrowisata terdepan yang mengedukasi masyarakat tentang pertanian berkelanjutan dan
                  ramah lingkungan sambil meningkatkan kesejahteraan petani lokal.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-emerald-700 mb-3 flex items-center justify-center md:justify-start">
                  <Heart className="h-5 w-5 mr-2" />
                  Misi
                </h4>
                <ul className="text-gray-600 space-y-2 text-left inline-block">
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">•</span>
                    Menyediakan edukasi pertanian berkualitas tinggi
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">•</span>
                    Mengembangkan ekonomi desa melalui pariwisata berkelanjutan
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">•</span>
                    Melestarikan lingkungan dan budaya pertanian lokal
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">•</span>
                    Memberdayakan dan meningkatkan kapasitas masyarakat desa
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">{achievement.icon}</div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">{achievement.title}</h4>
              <p className="text-gray-600 text-sm">{achievement.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
