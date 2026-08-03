import { CheckCircle2 } from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      title: 'Luxury Villa & Real Estate Cinematography',
      desc: 'Pengambilan gambar arsitektur dan interior vila mewah serta properti komersial dengan pencahayaan sinematik dan gerakan kamera yang presisi.',
      features: ['Walkthrough 4K High Dynamic Range', 'Color Grading Sinematik Klasik', 'Format Reels/TikTok & Landscape HQ'],
    },
    {
      title: 'Drone & Aerial Photography',
      desc: 'Pengambilan gambar udara resolusi tinggi menggunakan drone berlisensi resmi untuk menangkap keindahan lanskap lokasi properti.',
      features: ['Pilot Lisensi Resmi', 'Pengambilan Foto/Video 4K', 'Izin Terbang & Pemetaan Area'],
    },
    {
      title: 'Commercial & Brand Storytelling',
      desc: 'Produksi video iklan komersial dari konsep awal, pembuatan storyboard, eksekusi shooting, hingga tahapan pasca-produksi.',
      features: ['Konseptualisasi & Storyboard', 'Perekaman Audio Profesional', 'Editing & Sound Design Khusus'],
    },
  ]

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <span className="text-xs uppercase tracking-ultra text-luxury-gold block mb-2">Layanan Utama</span>
        <h1 className="text-4xl md:text-5xl font-serif text-white font-light">Layanan Profesional</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((s, idx) => (
          <div key={idx} className="bg-neutral-900 border border-neutral-800 p-8 flex flex-col justify-between">
            <div>
              <span className="text-luxury-gold font-mono text-xs mb-4 block">0{idx + 1}</span>
              <h3 className="text-xl font-serif text-white mb-4">{s.title}</h3>
              <p className="text-neutral-400 text-sm font-light leading-relaxed mb-8">{s.desc}</p>
            </div>
            <ul className="space-y-3 border-t border-neutral-800/80 pt-6">
              {s.features.map((f, fi) => (
                <li key={fi} className="text-xs text-neutral-300 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-luxury-gold flex-shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
