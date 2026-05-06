import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/lib/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore projects by Imran Munge — AI-powered systems, full-stack platforms, and real-world solutions built at Blackmint Labs.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
      <SectionHeading
        title="My Work"
        subtitle="All projects — from AI-powered analysis systems to full-stack web platforms."
        className="mb-20"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
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
    </div>
  );
}
