import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-neutral-950 py-32">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* Foto */}
        <div className="flex justify-center">
          <Image
            src="/profile.png"
            alt="Rizky Putra"
            width={500}
            height={600}
            className="rounded-xl object-cover shadow-2xl"
          />
        </div>

        {/* About */}
        <div>

          <p className="uppercase tracking-[0.35em] text-neutral-500 text-xs">
            ABOUT
          </p>

          <h2 className="text-5xl text-white mt-5">
            Hi, I'm Rizky Putra
          </h2>

          <p className="text-neutral-400 leading-8 mt-8">
            I am a Drone Pilot and Video Editor specializing in luxury villas,
            real estate, hotels, and commercial videos.
            I help businesses showcase their properties through elegant,
            cinematic visuals that enhance their value and leave a lasting impression.
          </p>

        </div>

      </div>
    </section>
  );
}