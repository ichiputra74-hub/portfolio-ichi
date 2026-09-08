import { CheckCircle2 } from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      title: 'VIDEO, COLOR GRADING & DRONE',
      desc: 'Producing cinematic visual content through video editing, professional color grading, and drone cinematography, with a focus on properties and commercial projects.',
      features: ['Video Editing & Color Grading', 'Drone Pilot & Aerial Cinematography', 'Property & Commercial Video'],
    },
    {
      title: 'CONTENT STRATEGY & PLANNING',
      desc: 'Developing structured content plans and creative concepts based on audience, brand identity, trends, and business objectives.',
      features: ['Content Strategy & Planning', 'Social Media Content Planning','Creative Concept Development'],
    },
    {
      title: 'COPYWRITING & BRAND STORYTELLING',
      desc: 'Crafting clear, engaging, and persuasive copy that communicates brand value and connects with the target audience.',
      features: ['Copywriting', 'Brand Messaging & Storytelling'],
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
