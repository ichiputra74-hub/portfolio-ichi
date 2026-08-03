import { client } from '@/sanity/lib/client'
import { aboutQuery } from '@/sanity/lib/queries'
import { urlForImage } from '@/sanity/lib/image'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { Download } from 'lucide-react'

export const revalidate = 0

export default async function AboutPage() {
  const about = await client.fetch(aboutQuery)

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Profile Image */}
        <div className="lg:col-span-5 relative aspect-[3/4] w-full bg-neutral-900 border border-neutral-800">
          {about?.profileImage && (
            <Image
              src={urlForImage(about.profileImage).url()}
              alt="Profile"
              fill
              priority
              className="object-cover"
            />
          )}
        </div>

        {/* Info */}
        <div className="lg:col-span-7 space-y-8">
          <div>
            <span className="text-xs uppercase tracking-ultra text-luxury-gold font-mono block mb-2">About Studio</span>
            <h1 className="text-4xl sm:text-5xl font-serif text-white font-light">
              {about?.headline || 'Creative Director & Cinematographer'}
            </h1>
          </div>

          <p className="text-neutral-300 text-lg font-light leading-relaxed">
            {about?.bio}
          </p>

          {about?.story && (
            <div className="text-neutral-400 font-light leading-relaxed space-y-4 pt-4 border-t border-neutral-800/80">
              <PortableText value={about.story} />
            </div>
          )}

          {/* Stats */}
          {about?.stats && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6">
              {about.stats.map((st: any, i: number) => (
                <div key={i} className="border-l border-luxury-gold/50 pl-4">
                  <span className="text-3xl font-serif text-white block">{st.value}</span>
                  <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-mono">{st.label}</span>
                </div>
              ))}
            </div>
          )}

          {/* Download CV */}
          {about?.cvFileUrl && (
            <div className="pt-6">
              <a
                href={about.cvFileUrl}
                target="_blank"
                download
                className="inline-flex items-center gap-2 px-8 py-4 bg-luxury-gold text-black font-semibold text-xs uppercase tracking-widest hover:bg-white transition-colors"
              >
                <Download className="w-4 h-4" /> Download Curriculum Vitae
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
