import React from "react";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/lib/projects";
import { personalInfo } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Web and e-commerce projects by Imran Munge — Nexus Homes, Spice Market, Waffle Forever, Melody Store, BlackMint Labs, and Q Diagnostic.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects | Imran Munge",
    description:
      "Explore premium web and e-commerce builds focused on lead generation, storytelling, and conversion.",
    url: `${personalInfo.siteUrl}/projects`,
  },
};

const projectsListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Portfolio Projects",
  itemListElement: projects.map((project, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: project.title,
    url: `${personalInfo.siteUrl}/projects/${project.id}`,
  })),
};

export default function ProjectsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsListJsonLd) }}
      />
      <div className="pt-28 pb-24 px-6 min-h-screen">
        <div className="container-max space-y-10">
          <div className="space-y-2">
            <p className="section-label">Projects</p>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">All work</h1>
            <p className="text-muted-foreground max-w-lg">
              Premium web and e-commerce experiences built for real estate, food brands,
              restaurants, retail, agencies, and healthcare.
            </p>
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
      </div>
    </>
  );
}
