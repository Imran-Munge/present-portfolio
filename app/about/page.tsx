import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Imran Munge — AI Engineer, Full Stack Developer, and Founder of Blackmint Labs. Building intelligent products and scalable web applications in India.",
};

const skills = [
  {
    name: "AI / ML",
    items: ["Python", "TensorFlow", "OpenCV", "MediaPipe", "NLP", "Computer Vision"],
  },
  {
    name: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    name: "Backend",
    items: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "Prisma"],
  },
  {
    name: "Tools & Infra",
    items: ["Git", "Docker", "Vercel", "AWS", "CI/CD", "Figma"],
  },
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      {/* Reuse the About section component */}
      <About />

      {/* Skills Grid */}
      <section className="px-6 max-w-7xl mx-auto mt-8">
        <SectionHeading title="Skills & Tools" className="mb-16" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((category) => (
            <div
              key={category.name}
              className="p-8 glass-dark rounded-3xl border border-white/5 hover:border-mint/20 transition-all group"
            >
              <h4 className="text-xl font-heading font-bold mb-6 group-hover:text-mint transition-colors">
                {category.name}
              </h4>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 text-sm text-muted-foreground font-sans"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reuse Experience section */}
      <Experience />
    </div>
  );
}
