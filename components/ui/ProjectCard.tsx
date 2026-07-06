"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { ProjectCategory } from "@/lib/projects";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  image: string;
  live?: string;
  year?: string;
  index: number;
}

const ProjectCard = ({
  id,
  title,
  description,
  category,
  tags,
  image,
  live,
  year,
  index,
}: ProjectCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card hover:border-foreground/20 transition-colors duration-200"
    >
      <Link href={`/projects/${id}`} className="relative block aspect-[16/10] overflow-hidden bg-muted">
        <Image
          src={image}
          alt={`${title} project preview`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain p-2 transition-transform duration-300 group-hover:scale-[1.02]"
        />
        <span className="absolute left-3 top-3 rounded-md border border-border bg-background/90 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground backdrop-blur-sm">
          {category}
        </span>
      </Link>

      <div className="flex flex-col flex-grow p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs text-muted-foreground">{year}</span>
        </div>

        <Link href={`/projects/${id}`}>
          <h3 className="text-lg font-semibold tracking-tight mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
        </Link>

        <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow line-clamp-3">
          {description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-medium px-2 py-0.5 border border-border rounded-md bg-secondary text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border">
          <Link
            href={`/projects/${id}`}
            className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors group/link"
          >
            View Project
            <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
          </Link>
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors ml-auto"
            >
              Live
              <ArrowUpRight className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
