import Hero from "@/components/Hero/Hero";
import dynamic from "next/dynamic";
const About = dynamic(() => import("@/components/Sections/about"));
const FeaturedProjects = dynamic(() => import("@/components/Sections/projects/featured"));
const Experience = dynamic(() => import("@/components/Experience/experience"));

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedProjects />
      <About />
      <Experience />
    </div>
  );
}
