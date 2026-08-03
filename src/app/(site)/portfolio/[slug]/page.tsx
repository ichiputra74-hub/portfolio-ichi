import { client } from '@/sanity/lib/client'
import { portfolioBySlugQuery } from '@/sanity/lib/queries'
import { urlForImage } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Play, ExternalLink } from 'lucide-react'
import { PortableText } from '@portabletext/react'

export const revalidate = 0

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = await client.fetch(portfolioBySlugQuery, { slug })

  if (!project) return notFound()

  return (
    <article className="pt-32 pb-24 max-w-6xl mx-auto px-6">
      <Link
        href="/portfolio"
        className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-400 hover:text-luxury-gold mb-12 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Kembali ke Portfolio
      </Link>

      <header className="mb-12">
        <span className="text-xs uppercase tracking-ultra text-luxury-gold font-mono block mb-2">
          {project.category}
        </span>
        <h1 className="text-4xl md:text-6xl font-serif text-white font-light tracking-tight mb-8">
          {project.title}
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-y border-neutral-800/80 py-6 text-xs">
          <div>
            <span className="text-neutral-500 uppercase tracking-widest font-mono block mb-1">Client</span>
            <span className="text-neutral-200 font-medium">{project.client || '-'}</span>
          </div>
          <div>
            <span className="text-neutral-500 uppercase tracking-widest font-mono block mb-1">Tahun</span>
            <span className="text-neutral-200 font-medium">{project.year || '-'}</span>
          </div>
          <div>
            <span className="text-neutral-500 uppercase tracking-widest font-mono block mb-1">Lokasi</span>
            <span className="text-neutral-200 font-medium">{project.location || '-'}</span>
          </div>
          <div>
            <span className="text-neutral-500 uppercase tracking-widest font-mono block mb-1">Software</span>
            <span className="text-neutral-200 font-medium">{project.software?.join(', ') || '-'}</span>
          </div>
        </div>
      </header>

      {/* Main Video / Image Display */}
      {project.videoUrl ? (
        <div className="mb-16 relative aspect-video w-full overflow-hidden bg-neutral-900 border border-neutral-800">
          <video controls className="w-full h-full object-cover">
            <source src={project.videoUrl} type="video/mp4" />
          </video>
        </div>
      ) : project.thumbnail ? (
        <div className="mb-16 relative aspect-video w-full overflow-hidden bg-neutral-900 border border-neutral-800">
          <Image
            src={urlForImage(project.thumbnail).url()}
            alt={project.title}
            fill
            priority
            className="object-cover"
          />
        </div>
      ) : null}

      {/* Description */}
      {project.description && (
        <div className="max-w-3xl mx-auto mb-16 text-neutral-300 font-light leading-relaxed space-y-4">
          <h3 className="text-xs uppercase tracking-widest text-luxury-gold font-mono mb-4">Tentang Project</h3>
          <PortableText value={project.description} />
        </div>
      )}

      {/* External Links */}
      {project.youtubeUrl && (
        <div className="mb-16 text-center">
          <a
            href={project.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold text-xs uppercase tracking-widest transition-colors"
          >
            <Play className="w-4 h-4 fill-current" /> Tonton di YouTube
          </a>
        </div>
      )}

      {/* Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="mt-20 border-t border-neutral-900 pt-16">
          <h3 className="text-xs uppercase tracking-ultra text-luxury-gold mb-8 font-mono">Galeri Foto High-Res</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.gallery.map((img: any, idx: number) => (
              <div key={idx} className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900 border border-neutral-800">
                <Image
                  src={urlForImage(img).url()}
                  alt={`Gallery ${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      )}
    </article>
  )
}
