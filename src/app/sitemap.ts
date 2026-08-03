import { MetadataRoute } from 'next'
import { client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://domainanda.com'

  const slugs: string[] = await client.fetch(
    groq`*[_type == "portfolio" && defined(slug.current)].slug.current`
  )

  const projectUrls = slugs.map((slug) => ({
    url: `${baseUrl}/portfolio/${slug}`,
    lastModified: new Date(),
  }))

  const routes = ['', '/about', '/portfolio', '/services', '/contact'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }))

  return [...routes, ...projectUrls]
}
