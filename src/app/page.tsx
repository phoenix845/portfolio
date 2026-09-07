import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Credentials } from "@/components/sections/credentials";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";
import { Marquee } from "@/components/ui/marquee";
import { toolMarquee } from "@/lib/skills";

export default function Home() {
  return (
    <main id="main" className="flex flex-col">
      <Hero />
      <div className="border-b border-line py-6" aria-hidden="true">
        <Marquee items={toolMarquee} variant="display" speed={30} />
      </div>
      <About />
      <Experience />
      <FeaturedProjects />
      <Credentials />
      <Skills />
      <Contact />
    </main>
  );
}