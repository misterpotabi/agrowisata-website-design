import { Leaf, Users, Camera } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ActivitiesSection() {
  const activities = [
    {
      icon: <Leaf className="h-8 w-8 text-emerald-600" />,
      title: "Pertanian Organik",
      description: "Pelajari teknik bertani organik yang ramah lingkungan dan berkelanjutan",
    },
    {
      icon: <Users className="h-8 w-8 text-emerald-600" />,
      title: "Wisata Edukasi",
      description: "Program edukasi khusus untuk sekolah, universitas, dan komunitas",
    },
    {
      icon: <Camera className="h-8 w-8 text-emerald-600" />,
      title: "Spot Foto Instagramable",
      description: "Berbagai spot foto menarik di tengah hamparan hijau dan gazebo tradisional",
    },
  ]

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Aktivitas Unggulan</h2>
          <p className="text-lg text-gray-600">
            Berbagai aktivitas menarik yang bisa Anda nikmati di Agrowisata Seakong
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex justify-center mb-4">{activity.icon}</div>
                <CardTitle className="text-xl">{activity.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{activity.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
