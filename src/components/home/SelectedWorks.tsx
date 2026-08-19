import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

type Props = {
  projects: any[];
};

export default function SelectedWorks({ projects }: Props) {
  return (
    <section className="bg-black py-28">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-16">
          <p className="uppercase tracking-[0.4em] text-neutral-500 text-xs">
            Selected Works
          </p>

          <h2 className="text-white text-5xl md:text-6xl font-light mt-4">
            Featured Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

     {projects.slice(0,3).map((project:any)=>(
  <Link
    key={project._id}
    href={`/portfolio/${project.slug}`}
    className="group"
  >

              <div className="relative aspect-[4/5] overflow-hidden">

                <Image
                  src={urlForImage(project.thumbnail).url()}
                  alt={project.title}
                  fill
                  className="object-cover duration-700 group-hover:scale-105"
                />

              </div>

              <div className="mt-5">

                <p className="uppercase text-xs tracking-[0.3em] text-neutral-500">
                  {project.category}
                </p>

                <h3 className="text-white text-2xl mt-2">
                  {project.title}
                </h3>

              </div>

            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}