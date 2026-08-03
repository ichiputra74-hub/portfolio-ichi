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
  title: 'LUXE STUDIO | Portfolio Cinema & Creative Direction',
  description:
    'Portofolio Sinematografi, Luxury Villa, Drone Footage, Real Estate & Commercial Video Production.',
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