import type { MetadataRoute } from 'next'
import { client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  'https://portfolio-ichi-8rg6.vercel.app'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs: string[] = await client.fetch(
    groq`*[_type == "portfolio" && defined(slug.current)].slug.current`
  )

  const projectUrls: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: `${baseUrl}/portfolio/${slug}`,
  }))

  const routes: MetadataRoute.Sitemap = [
    '',
    '/about',
    '/portfolio',
    '/services',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
  }))

  return [...routes, ...projectUrls]
}