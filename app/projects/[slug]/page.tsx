import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowUpRight, ChevronLeft, ExternalLink } from "lucide-react";
import ProjectVideo from "@/components/ui/ProjectVideo";
import { getAllProjectIds, getProjectById, projects } from "@/lib/projects";
import { buildProjectMetadata, projectJsonLd } from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjectIds().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectById(slug);
  if (!project) return {};
  return buildProjectMetadata(project);
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectById(slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.id === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const jsonLd = projectJsonLd(project);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="pt-28 pb-24 px-6 min-h-screen">
        <div className="container-max max-w-4xl space-y-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            All projects
          </Link>

          <header className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-medium uppercase tracking-wide px-2.5 py-1 rounded-md bg-secondary border border-border text-muted-foreground">
                {project.category}
              </span>
              <span className="text-xs text-muted-foreground">{project.year}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">{project.title}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              {project.description}
            </p>
          </header>

          <ProjectVideo
            title={project.title}
            projectId={project.id}
            poster={project.image}
            video={project.video}
            videoMp4={project.videoMp4}
            live={project.live}
          />

          {project.gallery && project.gallery.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.gallery.map((src) => (
                <div
                  key={src}
                  className="relative aspect-video overflow-hidden rounded-lg border border-border"
                >
                  <Image
                    src={src}
                    alt={`${project.title} screenshot`}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          )}

          <section className="space-y-4">
            <h2 className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
              Technologies
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-3 py-1 border border-border rounded-md bg-secondary text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>

          <div className="flex flex-wrap gap-4 pt-4 border-t border-border">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Visit live site
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-sm font-medium hover:bg-secondary transition-colors"
              >
                View source
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </div>

          <nav
            aria-label="Next project"
            className="pt-8 border-t border-border flex items-center justify-between gap-4"
          >
            <span className="text-sm text-muted-foreground">Next project</span>
            <Link
              href={`/projects/${nextProject.id}`}
              className="inline-flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors group"
            >
              {nextProject.title}
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
