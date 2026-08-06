import { client } from '@/sanity/lib/client'
import {
  portfoliosQuery,
  categoriesQuery,
} from '@/sanity/lib/queries'

import PortfolioClient from '@/components/PortfolioClient'

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