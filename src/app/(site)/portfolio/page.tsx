'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import { portfoliosQuery, categoriesQuery } from '@/sanity/lib/queries'
import { urlForImage } from '@/sanity/lib/image'

export default function PortfolioPage() {
  const [projects, setProjects] = useState<any[]>([])
  const [categories, setCategories] = useState<string[]>(['All'])
  const [activeCategory, setActiveCategory] = useState('All')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      const [fetchedProjects, fetchedCats] = await Promise.all([
        client.fetch(portfoliosQuery),
        client.fetch(categoriesQuery),
      ])
      setProjects(fetchedProjects || [])
      const catList = ['All', ...fetchedCats.map((c: any) => c.title)]
      setCategories(catList)
      setLoading(false)
    }
    fetchData()
  }, [])

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs uppercase tracking-ultra text-luxury-gold block mb-2">Showcase Karya</span>
        <h1 className="text-4xl md:text-5xl font-serif text-white font-light">Koleksi Portofolio</h1>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2.5 text-[11px] uppercase tracking-widest transition-all duration-300 border ${
              activeCategory === cat
                ? 'bg-luxury-gold text-black border-luxury-gold font-semibold'
                : 'bg-transparent text-neutral-400 border-neutral-800 hover:border-neutral-600 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      {loading ? (
        <div className="text-center text-neutral-500 py-20 font-mono text-xs uppercase tracking-widest">Memuat Portofolio...</div>
      ) : (
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project._id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden bg-neutral-900 border border-neutral-800/80"
              >
                <Link href={`/portfolio/${project.slug}`}>
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    {project.thumbnail && (
                      <Image
                        src={urlForImage(project.thumbnail).url()}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        loading="lazy"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <span className="text-[10px] tracking-widest text-luxury-gold uppercase font-mono">
                        {project.category}
                      </span>
                      <h3 className="text-lg font-serif text-white mt-1">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  )
}
