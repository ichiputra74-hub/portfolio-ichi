import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

console.log(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID)

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-07-01'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
})

const builder = imageUrlBuilder(client)

export function urlForImage(source: any) {
  return builder.image(source)
}