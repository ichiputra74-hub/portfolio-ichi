import Link from 'next/link'
import { ContactData } from '@/types'

export default function Footer({ contact }: { contact?: ContactData }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-neutral-900 text-neutral-400 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        <div className="space-y-4 md:col-span-2">
          <span className="font-serif text-2xl tracking-widest text-white">
            LUXE<span className="text-luxury-gold">.</span>
          </span>
          <p className="text-sm text-neutral-400 leading-relaxed max-w-md">
            Portfolio Sinematografi, Visual Luxury Real Estate, Drone Aerial Photography, dan Commercial Direction dengan estetik minimalis berkualitas tinggi.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-white font-semibold mb-4">Navigasi</h4>
          <ul className="space-y-2 text-xs uppercase tracking-wider">
            <li><a href="/" className="hover:text-luxury-gold transition-colors">Home</a></li>
            <li><a href="/portfolio" className="hover:text-luxury-gold transition-colors">Portfolio</a></li>
            <li><a href="/about" className="hover:text-luxury-gold transition-colors">About</a></li>
            <li><a href="/services" className="hover:text-luxury-gold transition-colors">Services</a></li>
            <li><a href="/contact" className="hover:text-luxury-gold transition-colors">Contact</a></li>
            <li><a href="/studio" className="hover:text-luxury-gold transition-colors text-luxury-gold">CMS Studio Login</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-white font-semibold mb-4">Kontak</h4>
          <ul className="space-y-2 text-xs">
            <li className="text-neutral-300">{contact?.email || 'studio@luxemedia.com'}</li>
            <li className="text-neutral-300">{contact?.location || 'Jakarta & Bali, Indonesia'}</li>
            {contact?.socialLinks?.map((soc, i) => (
              <li key={i}>
                <a href={soc.url} target="_blank" rel="noopener noreferrer" className="hover:text-luxury-gold text-neutral-400 transition-colors">
                  {soc.platform}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 gap-4">
        <p>&copy; {currentYear} LUXE STUDIO. All rights reserved.</p>
        <p className="tracking-widest uppercase text-[10px]">Powered by Next.js 15 & Sanity CMS</p>
      </div>
    </footer>
  )
}
