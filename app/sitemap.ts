import { MetadataRoute } from "next";
import { personalInfo } from "@/lib/data";
import { getAllPosts } from "@/lib/blog";
import { projects } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: personalInfo.siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${personalInfo.siteUrl}/projects`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${personalInfo.siteUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${personalInfo.siteUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${personalInfo.siteUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const projectEntries: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${personalInfo.siteUrl}/projects/${project.id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${personalInfo.siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...projectEntries, ...postEntries];
}
