
import type { Metadata } from "next";

import Hero from "@/components/home/Hero";
import SelectedWorks from "@/components/home/SelectedWorks";
import AboutSection from "@/components/home/AboutSection";

import { client } from "@/sanity/lib/client";
import { portfoliosQuery } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: {
    absolute: "Video Editor & Drone Videographer in Bali | Rizky Putra",
  },
  description:
    "Explore Rizky Putra's creative portfolio featuring cinematic video editing, drone videography, luxury villa films, real estate visuals, and social media content in Bali, Indonesia.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Video Editor & Drone Videographer in Bali | Rizky Putra",
    description:
      "Cinematic video editing, drone videography, luxury villa films, and creative social media content in Bali, Indonesia.",
    url: "/",
    type: "website",
  },
};

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
