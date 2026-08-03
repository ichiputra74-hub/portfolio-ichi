export interface Category {
  _id: string
  title: string
  slug: string
  description?: string
}

export interface Portfolio {
  _id: string
  title: string
  slug: string
  order?: number
  category: string
  categorySlug?: string
  thumbnail: any
  gallery?: any[]
  videoUrl?: string
  youtubeUrl?: string
  client?: string
  year?: string
  location?: string
  software?: string[]
  tags?: string[]
  description?: any
}

export interface AboutData {
  headline: string
  subheadline?: string
  profileImage: any
  bio?: string
  story?: any
  cvFileUrl?: string
  stats?: { label: string; value: string }[]
}

export interface ContactData {
  email: string
  whatsappNumber: string
  whatsappMessage?: string
  location?: string
  socialLinks?: { platform: string; url: string }[]
}
