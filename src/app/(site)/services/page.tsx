import { CheckCircle2 } from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      title: 'Luxury Villa & Real Estate Cinematography',
      desc: 'Cinematic photography and videography for luxury villas, real estate, and commercial properties, with a focus on architecture, interiors, lighting, and precise camera movement.',
      features: ['4K HDR Property Walkthroughs', 'Cinematic Color Grading', 'Reels, TikTok & High-Quality Landscape Formats'],
    },
    {
      title: 'Drone & Aerial Photography',
      desc: 'High-resolution aerial photography and cinematography designed to showcase the scale, surroundings, architecture, and unique character of each property.',
      features: ['4K Aerial Photography & Videography', 'Landscape & Social Media Formats ','Cinematic Aerial Sequences'],
    },
    {
      title: 'Commercial & Brand Storytelling',
      desc: 'End-to-end commercial video production, from creative concepts and storyboarding to production, editing, and final delivery.',
      features: ['Creative Concept & Storyboarding', 'Cinematic Video Production', 'Editing & Custom Sound Design'],
    },
  ]

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <span className="text-xs uppercase tracking-ultra text-luxury-gold block mb-2">Our Services</span>
        <h1 className="text-4xl md:text-5xl font-serif text-white font-light">Professional Service</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((s, idx) => (
          <div key={idx} className="bg-neutral-900 border border-neutral-800 p-8 flex flex-col justify-between">
            <div>
              <span className="text-luxury-gold font-mono text-xs mb-4 block">0{idx + 1}</span>
              <h3 className="text-xl font-serif text-white mb-4">{s.title}</h3>
              <p className="text-neutral-400 text-sm font-light leading-relaxed mb-8">{s.desc}</p>
            </div>
            <ul className="space-y-3 border-t border-neutral-800/80 pt-6">
              {s.features.map((f, fi) => (
                <li key={fi} className="text-xs text-neutral-300 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-luxury-gold flex-shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
