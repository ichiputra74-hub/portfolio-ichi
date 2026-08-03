import { client } from '@/sanity/lib/client'
import { contactQuery } from '@/sanity/lib/queries'
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react'

export const revalidate = 0

export default async function ContactPage() {
  const contact = await client.fetch(contactQuery)

  const waNumber = contact?.whatsappNumber || '6281234567890'
  const waMsg = encodeURIComponent(contact?.whatsappMessage || 'Halo, saya tertarik berkonsultasi mengenai project.')
  const waUrl = `https://wa.me/${waNumber}?text=${waMsg}`

  return (
    <div className="pt-32 pb-24 max-w-5xl mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs uppercase tracking-ultra text-luxury-gold block mb-2">Hubungi Kami</span>
        <h1 className="text-4xl md:text-5xl font-serif text-white font-light">Mulai Kolaborasi</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-neutral-900 border border-neutral-800 p-8 sm:p-12">
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-serif text-white mb-2">Informasi Kontak</h3>
            <p className="text-xs text-neutral-400 font-light">
              Silakan hubungi kami untuk pertanyaan lisensi, reservasi jadwal shooting, atau konsultasi ide project.
            </p>
          </div>

          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-4 text-neutral-300">
              <Mail className="w-5 h-5 text-luxury-gold" />
              <span>{contact?.email || 'studio@luxemedia.com'}</span>
            </div>
            <div className="flex items-center gap-4 text-neutral-300">
              <Phone className="w-5 h-5 text-luxury-gold" />
              <span>+{contact?.whatsappNumber || '6281234567890'}</span>
            </div>
            <div className="flex items-center gap-4 text-neutral-300">
              <MapPin className="w-5 h-5 text-luxury-gold" />
              <span>{contact?.location || 'Jakarta & Bali, Indonesia'}</span>
            </div>
          </div>

          <div className="pt-4">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full py-4 bg-luxury-gold text-black font-semibold text-xs uppercase tracking-widest hover:bg-white transition-colors"
            >
              <MessageSquare className="w-4 h-4" /> Chat Langsung via WhatsApp
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-center border-t md:border-t-0 md:border-l border-neutral-800 pt-8 md:pt-0 md:pl-12">
          <h4 className="text-xs uppercase tracking-widest text-luxury-gold font-mono mb-4">Social Media & Portofolio</h4>
          <ul className="space-y-3">
            {contact?.socialLinks?.map((soc: any, i: number) => (
              <li key={i}>
                <a
                  href={soc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-luxury-gold text-sm flex items-center justify-between border-b border-neutral-800/80 pb-2 transition-colors"
                >
                  <span>{soc.platform}</span>
                  <span className="text-xs font-mono text-neutral-500">→</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
