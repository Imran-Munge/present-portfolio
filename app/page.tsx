import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/lib/projects";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <TrustStrip />
      <About />

      {/* Featured Projects Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <SectionHeading
            title="Projects"
            subtitle="A selection of things I've built — from AI systems to full-stack platforms."
          />
          <Link
            href="/projects"
            className="group flex items-center gap-2 text-primary font-medium mb-4"
          >
            View all projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              tags={project.stack}
              github={project.github || undefined}
              live={project.live || undefined}
              year={project.year}
              role={project.role}
              index={index}
            />
          ))}
        </div>
      </section>

      <Experience />
      <Contact />
    </div>
  );
}
