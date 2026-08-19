'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { urlForImage } from '@/sanity/lib/image'

type Project = {
  _id: string
  title: string
  slug: string
  category: string
  thumbnail?: any
  location?: string
  description?: string
}

type Category = {
  _id: string
  title: string
  slug?: string
}

export default function PortfolioClient({
  projects,
  categories,
}: {
  projects: Project[]
  categories: Category[]
}) {
  const [activeCategory, setActiveCategory] = useState('All')

  const categoryList = [
    'All',
    ...categories
      .map((c) => c.title)
      .filter((title) => title && title !== 'All'),
  ]

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory)

  const isPhoto = activeCategory.toLowerCase() === 'photo'

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-6">

      {/* HEADER */}
      <div className="text-center max-w-2xl mx-auto mb-16">

        <span className="text-xs uppercase tracking-[0.4em] text-luxury-gold block mb-3">
          Showcase Karya
        </span>

        <h1 className="text-4xl md:text-5xl font-serif text-white font-light">
          Koleksi Portofolio
        </h1>

        <p className="text-neutral-500 text-sm mt-5 leading-7">
          A collection of cinematic films, aerial productions,
          photography, and visual stories.
        </p>

      </div>


      {/* CATEGORY FILTER */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">

        {categoryList.map((cat) => (

          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`
              px-5 py-2.5
              text-[11px]
              uppercase
              tracking-widest
              transition-all
              duration-300
              border
              ${
                activeCategory === cat
                  ? 'bg-luxury-gold text-black border-luxury-gold'
                  : 'bg-transparent text-neutral-400 border-neutral-700 hover:border-neutral-500 hover:text-white'
              }
            `}
          >
            {cat}
          </button>

        ))}

      </div>


      {/* PHOTO GALLERY */}
      {isPhoto ? (

        <motion.div
          layout
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-x-6
            gap-y-12
          "
        >

          <AnimatePresence mode="popLayout">

            {filteredProjects.map((project) => (

              <motion.div
                key={project._id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                className="group"
              >

                <Link href={`/portfolio/${project.slug}`}>

                  {/* PHOTO */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-neutral-900">

                    {project.thumbnail && (

                      <Image
                        src={urlForImage(project.thumbnail).url()}
                        alt={project.title}
                        fill
                        sizes="
                          (max-width: 640px) 100vw,
                          (max-width: 1024px) 50vw,
                          33vw
                        "
                        className="
                          object-cover
                          transition-transform
                          duration-700
                          ease-out
                          group-hover:scale-105
                        "
                      />

                    )}

                  </div>


                  {/* PHOTO INFO */}
                  <div className="pt-4">

                    <div className="flex items-center justify-between gap-4">

                      <h3 className="text-white text-lg font-light">
                        {project.title}
                      </h3>

                      {project.location && (

                        <span className="text-[10px] uppercase tracking-widest text-neutral-500 whitespace-nowrap">
                          {project.location}
                        </span>

                      )}

                    </div>

                    {project.description && (

                      <p className="text-neutral-500 text-xs leading-6 mt-2 line-clamp-2">
                        {project.description}
                      </p>

                    )}

                  </div>

                </Link>

              </motion.div>

            ))}

          </AnimatePresence>

        </motion.div>

      ) : (

        /* NORMAL VIDEO / PROJECT GRID */
        <motion.div
          layout
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
          "
        >

          <AnimatePresence mode="popLayout">

            {filteredProjects.map((project) => (

              <motion.div
                key={project._id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                className="group"
              >

                <Link href={`/portfolio/${project.slug}`}>

                  {/* THUMBNAIL */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900">

                    {project.thumbnail && (

                      <Image
                        src={urlForImage(project.thumbnail).url()}
                        alt={project.title}
                        fill
                        sizes="
                          (max-width: 768px) 100vw,
                          (max-width: 1200px) 50vw,
                          33vw
                        "
                        className="
                          object-cover
                          transition-transform
                          duration-700
                          ease-out
                          group-hover:scale-105
                        "
                      />

                    )}

                  </div>


                  {/* PROJECT INFO */}
                  <div className="mt-4">

                    <p className="text-luxury-gold text-xs uppercase tracking-widest">
                      {project.category}
                    </p>

                    <h3 className="text-white text-xl font-light mt-1">
                      {project.title}
                    </h3>

                    {project.location && (

                      <p className="text-neutral-500 text-xs mt-2">
                        {project.location}
                      </p>

                    )}

                  </div>

                </Link>

              </motion.div>

            ))}

          </AnimatePresence>

        </motion.div>

      )}


      {/* EMPTY STATE */}
      {filteredProjects.length === 0 && (

        <div className="text-center py-24">

          <p className="text-neutral-500 text-sm">
            Belum ada karya dalam kategori ini.
          </p>

        </div>

      )}

    </div>
  )
}