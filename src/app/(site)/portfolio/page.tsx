
import type { Metadata } from 'next'

import { client } from '@/sanity/lib/client'
import {
  portfoliosQuery,
  categoriesQuery,
} from '@/sanity/lib/queries'

import PortfolioClient from '@/components/PortfolioClient'

export const metadata: Metadata = {
  title: 'Video Editing & Drone Portfolio in Bali | Rizky Putra',
  description:
    'Explore Rizky Putra’s portfolio of cinematic video editing, drone videography, luxury villa films, real estate visuals, and commercial content in Bali, Indonesia.',
  alternates: {
    canonical: '/portfolio',
  },
  openGraph: {
    title: 'Video Editing & Drone Portfolio in Bali | Rizky Putra',
    description:
      'Discover cinematic video editing, drone footage, luxury property films, and commercial visual projects by Rizky Putra in Bali, Indonesia.',
    url: '/portfolio',
    type: 'website',
  },
}

export const revalidate = 60

export default async function PortfolioPage() {
  const [projects, categories] = await Promise.all([
    client.fetch(portfoliosQuery),
    client.fetch(categoriesQuery),
  ])

  return (
    <PortfolioClient
      projects={projects || []}
      categories={categories || []}
    />
  )
}
