
import type { Metadata } from 'next'
import { client } from '@/sanity/lib/client'
import { portfolioBySlugQuery } from '@/sanity/lib/queries'
import { urlForImage } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Play } from 'lucide-react'
import { PortableText } from '@portabletext/react'

export const revalidate = 0

type PageProps = {
  params: Promise<{ slug: string }>
}

// Mengambil data project dari Sanity
async function getProject(slug: string) {
  return client.fetch(
    portfolioBySlugQuery,
    { slug },
    { cache: 'no-store' }
  )
}

// Mengubah Portable Text Sanity menjadi teks biasa untuk SEO
function getPlainText(description: any): string {
  if (typeof description === 'string') {
    return description
  }

  if (!Array.isArray(description)) {
    return ''
  }

  return description
    .filter((block: any) => block?._type === 'block')
    .map((block: any) =>
      (block.children || [])
        .map((child: any) => child.text || '')
        .join('')
    )
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim()
}

// SEO dinamis untuk setiap halaman project
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = await getProject(slug)

  if (!project) {
    return {
      title: {
        absolute: 'Project Not Found | Rizky Putra',
      },
      robots: {
        index: false,
        follow: true,
      },
    }
  }

  const projectTitle = project.title || 'Creative Project'
  const category = project.category || 'Video Production'
  const location = project.location || 'Bali, Indonesia'

  const pageTitle = `${projectTitle} | ${category} by Rizky Putra`

  const descriptionText = getPlainText(project.description)

  const metaDescription = (
    descriptionText ||
    `${projectTitle} — a ${category.toLowerCase()} project by Rizky Putra, featuring cinematic visuals and creative production in ${location}.`
  ).slice(0, 155)

  const canonicalUrl = `/portfolio/${slug}`

  const imageUrl = project.thumbnail
    ? urlForImage(project.thumbnail).width(1200).height(630).url()
    : undefined

  return {
    title: {
      absolute: pageTitle,
    },
    description: metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: 'article',
      locale: 'en_US',
      url: canonicalUrl,
      siteName: 'Rizky Putra Portfolio',
      title: pageTitle,
      description: metaDescription,
      ...(imageUrl
        ? {
            images: [
              {
                url: imageUrl,
                width: 1200,
                height: 630,
                alt: projectTitle,
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: imageUrl ? 'summary_large_image' : 'summary',
      title: pageTitle,
      description: metaDescription,
      ...(imageUrl ? { images: [imageUrl] } : {}),
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default async function ProjectDetailPage({
  params,
}: PageProps) {
  const { slug } = await params
  const project = await getProject(slug)

  if (!project) {
    notFound()
  }

  return (
    <article className="pt-32 pb-24 max-w-6xl mx-auto px-6">
      {/* Back Button */}
      <Link
        href="/portfolio"
        className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-400 hover:text-luxury-gold mb-12 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Portfolio
      </Link>

      {/* Header */}
      <header className="mb-12">
        <span className="text-xs uppercase tracking-ultra text-luxury-gold font-mono block mb-2">
          {project.category || 'Portfolio'}
        </span>

        <h1 className="text-4xl md:text-6xl font-serif text-white font-light tracking-tight mb-8">
          {project.title}
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-y border-neutral-800/80 py-6 text-xs">
          <div>
            <span className="text-neutral-500 uppercase tracking-widest font-mono block mb-1">
              Client
            </span>
            <span className="text-neutral-200 font-medium">
              {project.client || '-'}
            </span>
          </div>

          <div>
            <span className="text-neutral-500 uppercase tracking-widest font-mono block mb-1">
              Year
            </span>
            <span className="text-neutral-200 font-medium">
              {project.year || '-'}
            </span>
          </div>

          <div>
            <span className="text-neutral-500 uppercase tracking-widest font-mono block mb-1">
              Location
            </span>
            <span className="text-neutral-200 font-medium">
              {project.location || '-'}
            </span>
          </div>

          <div>
            <span className="text-neutral-500 uppercase tracking-widest font-mono block mb-1">
              Software
            </span>
            <span className="text-neutral-200 font-medium">
              {project.software?.join(', ') || '-'}
            </span>
          </div>
        </div>
      </header>

      {/* Main Media */}
      {project.videoUrl ? (
        <div className="mb-16 w-full flex justify-center bg-black border border-neutral-800">
          <video
            key={project.videoUrl}
            src={project.videoUrl}
            controls
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-auto max-h-[80vh] object-contain"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      ) : project.thumbnail ? (
        <div className="mb-16 relative aspect-video w-full overflow-hidden bg-neutral-900 border border-neutral-800">
          <Image
            src={urlForImage(project.thumbnail).url()}
            alt={project.title || 'Portfolio project'}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover"
          />
        </div>
      ) : (
        <div className="mb-16 aspect-video w-full flex items-center justify-center bg-neutral-900 border border-neutral-800">
          <p className="text-neutral-500 text-sm">
            No media available for this project.
          </p>
        </div>
      )}

      {/* Description */}
      {project.description && (
        <div className="max-w-3xl mx-auto mb-16 text-neutral-300 font-light leading-relaxed">
          <h2 className="text-xs uppercase tracking-widest text-luxury-gold font-mono mb-4">
            About Project
          </h2>
          <PortableText value={project.description} />
        </div>
      )}

      {/* YouTube */}
      {project.youtubeUrl && (
        <div className="mb-16 text-center">
          <a
            href={project.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold text-xs uppercase tracking-widest transition-colors"
          >
            <Play className="w-4 h-4 fill-current" />
            Watch on YouTube
          </a>
        </div>
      )}

      {/* Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="mt-20 border-t border-neutral-900 pt-16">
          <h2 className="text-xs uppercase tracking-ultra text-luxury-gold mb-8 font-mono">
            High-Resolution Photo Gallery
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.gallery.map((img: any, idx: number) => (
              <div
                key={idx}
                className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900 border border-neutral-800"
              >
                <Image
                  src={urlForImage(img).url()}
                  alt={`${project.title || 'Project'} gallery image ${idx + 1}`}
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
