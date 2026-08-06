import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-6">

        <h1 className="text-5xl md:text-8xl font-bold tracking-[0.25em]">
          RIZKY PUTRA
        </h1>

        <p className="mt-6 text-lg md:text-2xl text-gray-300 tracking-[0.15em]">
          Luxury Villa • Drone • Commercial
        </p>

        <Link
          href="/portfolio"
          className="
            mt-10
            inline-block
            border
            border-white
            px-10
            py-4
            uppercase
            tracking-[0.2em]
            hover:bg-white
            hover:text-black
            transition-all
            duration-500
          "
        >
          View Portfolio
        </Link>

      </div>

    </section>
  );
}