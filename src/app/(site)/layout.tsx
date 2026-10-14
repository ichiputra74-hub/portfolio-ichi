import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Cinzel } from 'next/font/google'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import { client } from '@/sanity/lib/client'
import { contactQuery } from '@/sanity/lib/queries'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
})

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-serif',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-ichi-8rg6.vercel.app'),

  title: {
    default: 'Rizky Putra | Video Editor & Drone Videographer',
    template: '%s | Rizky Putra',
  },

  description:
    'Explore Rizky Putra’s creative portfolio featuring cinematic video editing, drone videography, luxury villa visuals, real estate films, and commercial content in Bali and Indonesia.',

  applicationName: 'Rizky Putra Portfolio',

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfolio-ichi-8rg6.vercel.app',
    siteName: 'Rizky Putra Portfolio',
    title: 'Rizky Putra | Video Editor & Drone Videographer',
    description:
      'Cinematic video editing, drone videography, luxury villa films, real estate visuals, and commercial content.',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Rizky Putra | Video Editor & Drone Videographer',
    description:
      'Explore cinematic video editing, drone footage, luxury villa visuals, and commercial video projects.',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export const revalidate = 0

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const contact = await client.fetch(contactQuery)

  return (
    <div className={`${jakarta.variable} ${cinzel.variable}`}>
      <div className="bg-luxury-black text-slate-100 font-sans antialiased selection:bg-luxury-gold selection:text-black min-h-screen">
        <Navbar contact={contact} />
        <main>{children}</main>
        <Footer contact={contact} />
      </div>
    </div>
  )
}