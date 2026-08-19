import Link from "next/link";

export default function Footer({ contact }: { contact: any }) {
  return (
    <footer className="bg-black border-t border-neutral-900">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-2">

            <p className="text-2xl md:text-3xl font-serif text-white tracking-wide">
              RIZKY PUTRA<span className="text-luxury-gold">.</span>
            </p>

            <p className="mt-6 max-w-xl text-neutral-500 leading-7 text-sm">
              Drone Pilot & Video Editor specializing in luxury villas,
              real estate, hotels, and commercial productions.
              Creating cinematic visuals that elevate brands and properties.
            </p>

            <p className="mt-6 text-xs uppercase tracking-[0.3em] text-neutral-600">
              Jakarta • Bali • Indonesia
            </p>

          </div>


          {/* Navigation */}
          <div>

            <h3 className="text-xs uppercase tracking-[0.3em] text-white font-semibold mb-6">
              Navigation
            </h3>

            <div className="flex flex-col gap-4">

              <Link
                href="/"
                className="text-sm text-neutral-500 hover:text-luxury-gold transition-colors"
              >
                Home
              </Link>

              <Link
                href="/portfolio"
                className="text-sm text-neutral-500 hover:text-luxury-gold transition-colors"
              >
                Portfolio
              </Link>

              <Link
                href="/about"
                className="text-sm text-neutral-500 hover:text-luxury-gold transition-colors"
              >
                About
              </Link>

              <Link
                href="/services"
                className="text-sm text-neutral-500 hover:text-luxury-gold transition-colors"
              >
                Services
              </Link>

              <Link
                href="/contact"
                className="text-sm text-neutral-500 hover:text-luxury-gold transition-colors"
              >
                Contact
              </Link>

            </div>

          </div>


          {/* Contact */}
          <div>

            <h3 className="text-xs uppercase tracking-[0.3em] text-white font-semibold mb-6">
              Contact
            </h3>

            <div className="flex flex-col gap-4">

              <a
                href="mailto:your@email.com"
                className="text-sm text-neutral-500 hover:text-luxury-gold transition-colors"
              >
                ichi.putra74@gmail.com
              </a>

              <a
                href="https://wa.me/6285921671851"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-500 hover:text-luxury-gold transition-colors"
              >
                WhatsApp
              </a>

              <a
                href="https://www.instagram.com/ichiputra?utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-500 hover:text-luxury-gold transition-colors"
              >
                Instagram
              </a>

          

            </div>

          </div>

        </div>

      </div>


      {/* Bottom Footer */}
      <div className="border-t border-neutral-900">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-xs text-neutral-600">
            © {new Date().getFullYear()} Rizky Putra. All rights reserved.
          </p>

          <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-700">
            Drone • Film • Visual Storytelling
          </p>

        </div>

      </div>

    </footer>
  );
}