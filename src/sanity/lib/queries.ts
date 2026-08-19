import { groq } from 'next-sanity'

// Fetch all categories
export const categoriesQuery = groq`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    description
  }
`

// Fetch all portfolio items with category reference
export const portfoliosQuery = groq`
  *[_type == "portfolio"] | order(order asc) {
    _id,
    title,
    "slug": slug.current,
    order,
    "category": category->title,
    "categorySlug": category->slug.current,
    thumbnail,
    videoUrl,
    youtubeUrl,
    client,
    year,
    location,
    software,
    tags
  }
`

// Fetch single portfolio item by slug
export const portfolioBySlugQuery = groq`
  *[_type == "portfolio" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    order,
    "category": category->title,
    "categorySlug": category->slug.current,
    thumbnail,
    gallery,
    videoUrl,
    youtubeUrl,
    client,
    year,
    location,
    software,
    tags,
    description
  }
`

// Fetch About page content
export const aboutQuery = groq`
  *[_type == "about"][0] {
    headline,
    subheadline,
    profileImage,
    bio,
    story,
    cvFileUrl,
    stats
  }
`

// Fetch Contact settings
export const contactQuery = groq`
  *[_type == "contact"][0] {
    email,
    whatsappNumber,
    whatsappMessage,
    location,
    socialLinks
  }
`

// Fetch 3 featured portfolio items for Home
export const featuredPortfoliosQuery = groq`
  *[_type == "portfolio" && defined(order)] 
  | order(order asc) [0...3] {
    _id,
    title,
    "slug": slug.current,
    order,
    "category": category->title,
    "categorySlug": category->slug.current,
    thumbnail,
    videoUrl,
    youtubeUrl,
    client,
    year,
    location,
    software,
    tags
  }
`
