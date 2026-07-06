import type { Metadata } from "next";
import { personalInfo } from "@/lib/data";
import type { Project } from "@/lib/projects";

export function absoluteUrl(path: string): string {
  const base = personalInfo.siteUrl.replace(/\/$/, "");
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildProjectMetadata(project: Project): Metadata {
  const url = absoluteUrl(`/projects/${project.id}`);
  const title = `${project.title} — ${project.category} Project`;

  return {
    title,
    description: project.description,
    keywords: [
      project.title,
      project.category,
      ...project.stack,
      personalInfo.name,
      "Portfolio Project",
    ],
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title,
      description: project.description,
      siteName: personalInfo.name,
      images: [
        {
          url: absoluteUrl(project.image),
          width: 1200,
          height: 630,
          alt: `${project.title} project preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: project.description,
      images: [absoluteUrl(project.image)],
    },
  };
}

export function projectJsonLd(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    url: absoluteUrl(`/projects/${project.id}`),
    image: absoluteUrl(project.image),
    author: {
      "@type": "Person",
      name: personalInfo.name,
      url: personalInfo.siteUrl,
    },
    dateCreated: project.year,
    genre: project.category,
    keywords: project.stack.join(", "),
    ...(project.live
      ? {
          isPartOf: {
            "@type": "WebSite",
            name: project.title,
            url: project.live,
          },
        }
      : {}),
  };
}
