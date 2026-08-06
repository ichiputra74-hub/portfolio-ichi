'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { urlForImage } from '@/sanity/lib/image'

export default function PortfolioClient({
  projects,
  categories,
}: {
  projects: any[]
  categories: any[]
}) {
  const [activeCategory, setActiveCategory] = useState('All')

  const categoryList = ['All', ...categories.map((c: any) => c.title)]

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-6">

      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs uppercase tracking-ultra text-luxury-gold block mb-2">
          Showcase Karya
        </span>

        <h1 className="text-4xl md:text-5xl font-serif text-white font-light">
          Koleksi Portofolio
        </h1>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {categoryList.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2.5 text-[11px] uppercase tracking-widest transition-all duration-300 border ${
              activeCategory === cat
                ? 'bg-luxury-gold text-black border-luxury-gold'
                : 'border-neutral-700 text-neutral-400'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project._id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Link href={`/portfolio/${project.slug}`}>
                <div className="relative aspect-[4/3]">

                  <Image
                    src={urlForImage(project.thumbnail).url()}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />

                </div>

                <div className="mt-4">

                  <p className="text-luxury-gold text-xs uppercase">
                    {project.category}
                  </p>

                  <h3 className="text-white text-xl">
                    {project.title}
                  </h3>

                </div>

              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

    </div>
  )
}