"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  year?: string;
  role?: string;
  index: number;
}

const ProjectCard = ({ title, description, tags, github, live, year, role, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="corner-marks group relative flex flex-col p-8 glass border border-border hover:border-primary/30 transition-all duration-300"
    >
      {/* Top Meta */}
      <div className="flex justify-between items-center mb-6 text-xs font-heading tracking-widest text-muted-foreground uppercase opacity-70">
        <span>{year || "2024"}</span>
        <span>{role || "Engineering"}</span>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 bg-primary/5 text-primary border border-primary/10"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title */}
      <h4 className="text-xl font-heading font-semibold mb-3 group-hover:text-primary transition-colors">
        {title}
      </h4>

      {/* Description */}
      <p className="text-muted-foreground font-body text-sm leading-relaxed mb-8 flex-grow">
        {description}
      </p>

      {/* Action Buttons */}
      <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            aria-label={`View ${title} source code`}
          >
            <GithubIcon className="w-4 h-4" />
            GitHub
          </a>
        )}
        {github && live && <div className="h-4 w-px bg-border" />}
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            aria-label={`View ${title} live preview`}
          >
            <ExternalLink className="w-4 h-4" />
            Live Preview
          </a>
        )}
        {!github && !live && (
          <span className="text-xs text-muted-foreground/50 font-body italic">
            [ SECURE // PRIVATE ]
          </span>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
