import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Services from "@/components/sections/Services";
import Experience from "@/components/sections/Experience";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/lib/projects";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* 1 · Hero */}
      <Hero />

      {/* 2 · Projects */}
      <section id="projects" className="section-padding border-t border-border">
        <div className="container-max space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <p className="section-label">client Projects</p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Selected freelance work
              </h2>
              <p className="text-muted-foreground text-base max-w-lg">
                Web and e-commerce builds for real estate, food, retail, agencies, and healthcare.
              </p>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors shrink-0 mb-1"
            >
              View all
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                category={project.category}
                tags={project.stack}
                image={project.image}
                live={project.live}
                year={project.year}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3 · Tech Stack */}
      <Skills />

      {/* 4 · Services */}
      <Services />

      {/* 5 · About */}
      <About />

      {/* 6 · Experience */}
      <Experience />

      {/* 7 · Testimonials */}
      <Testimonials />

      {/* 8 · Contact */}
      <Contact />
    </div>
  );
}
