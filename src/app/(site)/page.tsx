import Hero from "@/components/home/Hero";
import SelectedWorks from "@/components/home/SelectedWorks";
import AboutSection from "@/components/home/AboutSection";

import { client } from "@/sanity/lib/client";
import { portfoliosQuery } from "@/sanity/lib/queries";

export const revalidate = 60;

export default async function HomePage() {
  const projects = await client.fetch(portfoliosQuery);

  return (
    <>
      <Hero />
      <SelectedWorks projects={projects} />
      <AboutSection />
    </>
  );
}