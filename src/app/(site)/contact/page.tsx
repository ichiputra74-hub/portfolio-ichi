import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Instagram,
  Youtube,
} from 'lucide-react'

export const revalidate = 0

export default function ContactPage() {
  // =========================
  // CONTACT DATA
  // =========================

  const email = 'ichi.putra74@gmail.com'
  const phone = '6285921671851'
  const location = 'Jakarta & Bali, Indonesia'

  const whatsappMessage = encodeURIComponent(
    'Halo Rizky, saya tertarik untuk bekerja sama untuk project video.'
  )

  const whatsappUrl = `https://wa.me/${phone}?text=${whatsappMessage}`

  return (
    <div className="pt-32 pb-24 max-w-6xl mx-auto px-6">

      {/* HEADER */}
      <div className="max-w-3xl mb-20">

        <span className="text-xs uppercase tracking-[0.4em] text-luxury-gold">
          Contact
        </span>

        <h1 className="text-5xl md:text-7xl font-serif text-white font-light mt-5">
          Let's Create
          <br />
          Something Great.
        </h1>

        <p className="text-neutral-400 mt-8 max-w-2xl leading-8">
          Have a project in mind? Whether it's a luxury villa,
          real estate, hotel, commercial campaign, or aerial production,
          feel free to get in touch.
        </p>

      </div>


      {/* CONTACT BOX */}
      <div className="grid md:grid-cols-2 gap-16">

        {/* LEFT */}
        <div>

          <p className="text-xs uppercase tracking-[0.35em] text-neutral-500 mb-8">
            Get In Touch
          </p>

          <div className="space-y-7">

            {/* EMAIL */}
            <div className="flex items-center gap-5">

              <div className="w-12 h-12 border border-neutral-800 flex items-center justify-center">
                <Mail className="w-5 h-5 text-luxury-gold" />
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-neutral-500">
                  Email
                </p>

                <p className="text-white mt-1">
                  {email}
                </p>
              </div>

            </div>


            {/* PHONE */}
            <div className="flex items-center gap-5">

              <div className="w-12 h-12 border border-neutral-800 flex items-center justify-center">
                <Phone className="w-5 h-5 text-luxury-gold" />
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-neutral-500">
                  WhatsApp
                </p>

                <p className="text-white mt-1">
                  +{phone}
                </p>
              </div>

            </div>


            {/* LOCATION */}
            <div className="flex items-center gap-5">

              <div className="w-12 h-12 border border-neutral-800 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-luxury-gold" />
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-neutral-500">
                  Based In
                </p>

                <p className="text-white mt-1">
                  {location}
                </p>
              </div>

            </div>

          </div>


          {/* WHATSAPP BUTTON */}
          <div className="mt-12">

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                gap-3
                w-full
                md:w-auto
                px-10
                py-5
                bg-luxury-gold
                text-black
                font-semibold
                text-xs
                uppercase
                tracking-[0.2em]
                hover:bg-white
                transition-all
                duration-300
              "
            >
              <MessageSquare className="w-4 h-4" />
              Chat via WhatsApp
            </a>

          </div>

        </div>


        {/* RIGHT */}
        <div className="border border-neutral-800 p-10 flex flex-col justify-between">

          <div>

            <p className="text-xs uppercase tracking-[0.35em] text-luxury-gold">
              What I Do
            </p>

            <h2 className="text-3xl md:text-4xl text-white font-light mt-5 leading-tight">
              Cinematic Visuals
              <br />
              That Elevate
              <br />
              Your Brand.
            </h2>

          </div>


          {/* SERVICES */}
          <div className="mt-16 space-y-4">

            <div className="border-b border-neutral-800 pb-4 text-neutral-300">
              Luxury Villa & Real Estate
            </div>

            <div className="border-b border-neutral-800 pb-4 text-neutral-300">
              Hotel & Hospitality
            </div>

            <div className="border-b border-neutral-800 pb-4 text-neutral-300">
              Drone Aerial Production
            </div>

            <div className="border-b border-neutral-800 pb-4 text-neutral-300">
              Commercial Video
            </div>

          </div>

        </div>

      </div>


      {/* SOCIAL MEDIA */}
      <div className="border-t border-neutral-900 mt-24 pt-12">

        <p className="text-xs uppercase tracking-[0.35em] text-neutral-500 mb-6">
          Follow My Work
        </p>

        <div className="flex gap-8">

          <a
            href="https://www.instagram.com/ichiputra?utm_source=qr"
            className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
          >
            <Instagram className="w-4 h-4" />
            Instagram
          </a>

          <a
            href="#"
            className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
          >
            <Youtube className="w-4 h-4" />
            YouTube
          </a>

        </div>

      </div>

    </div>
  )
}