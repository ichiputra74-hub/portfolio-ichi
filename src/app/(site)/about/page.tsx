import Image from 'next/image'
import { client } from '@/sanity/lib/client'
import { aboutQuery } from '@/sanity/lib/queries'

export const revalidate = 0

export default async function AboutPage() {
  const about = await client.fetch(aboutQuery)

  return (
    <main className="bg-black min-h-screen pt-32 pb-24">

      <section className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* FOTO */}
          <div className="relative w-full aspect-[4/5] overflow-hidden bg-neutral-900">

            <Image
              src="/profile.png"
              alt="Rizky Putra"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

          </div>


          {/* CONTENT */}
          <div>

            <p className="uppercase tracking-[0.4em] text-luxury-gold text-xs mb-5">
              ABOUT
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white font-light leading-tight">
              {about?.headline || 'Creative Visuals. Cinematic Stories.'}
            </h1>

            <p className="mt-8 text-lg text-neutral-400 leading-8 max-w-xl">
              {about?.subheadline ||
                'I am Rizky Putra, a Drone Pilot and Video Editor specializing in luxury villas, real estate, hotels, and commercial videos.'}
            </p>

            <div className="mt-8 text-neutral-400 leading-8 max-w-xl">
              {about?.bio && (
                <p>
                  {about.bio}
                </p>
              )}
            </div>

            <div className="mt-10">

              <p className="text-sm text-neutral-500 leading-7 max-w-xl">
                I help businesses showcase their properties through
                elegant, cinematic visuals that enhance their value
                and create a lasting impression.
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}