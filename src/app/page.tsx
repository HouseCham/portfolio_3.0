import Hero from "@/components/Hero/Hero";
// -- dynamic imports
import dynamic from "next/dynamic";
const FeaturedProjects = dynamic(() => import("@/components/Sections/projects/featured"));

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedProjects />
    </div>
  );
}
