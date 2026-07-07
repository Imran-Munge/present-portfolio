"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  SiC,
  SiCplusplus,
  SiCss,
  SiDocker,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiFramer,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiKubernetes,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiNumpy,
  SiOpencv,
  SiPandas,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiScikitlearn,
  SiShadcnui,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import type { IconType } from "react-icons";

type TechItem = {
  name: string;
  icon: IconType;
  brand: string;
  surface: string;
};

type Category = {
  label: string;
  items: TechItem[];
};

const categories: Category[] = [
  {
    label: "Languages",
    items: [
      { name: "Python", icon: SiPython, brand: "#3776AB", surface: "#F7C945" },
      { name: "TypeScript", icon: SiTypescript, brand: "#3178C6", surface: "#0F3E68" },
      { name: "JavaScript", icon: SiJavascript, brand: "#F7DF1E", surface: "#2A2605" },
      { name: "Java", icon: FaJava, brand: "#E11F21", surface: "#3C1010" },
      { name: "C++", icon: SiCplusplus, brand: "#00599C", surface: "#062A46" },
      { name: "C", icon: SiC, brand: "#A8B9CC", surface: "#263445" },
      { name: "HTML5", icon: SiHtml5, brand: "#E34F26", surface: "#3F160C" },
      { name: "CSS3", icon: SiCss, brand: "#1572B6", surface: "#082B48" },
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "React", icon: SiReact, brand: "#61DAFB", surface: "#102C35" },
      { name: "Next.js", icon: SiNextdotjs, brand: "#FFFFFF", surface: "#111111" },
      { name: "Tailwind CSS", icon: SiTailwindcss, brand: "#06B6D4", surface: "#073842" },
      { name: "Framer Motion", icon: SiFramer, brand: "#BB86FC", surface: "#25143D" },
      { name: "shadcn/ui", icon: SiShadcnui, brand: "#FFFFFF", surface: "#18181B" },
      { name: "Figma", icon: SiFigma, brand: "#F24E1E", surface: "#241412" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs, brand: "#5FA04E", surface: "#142A16" },
      { name: "Express.js", icon: SiExpress, brand: "#FFFFFF", surface: "#1F1F1F" },
    ],
  },
  {
    label: "Databases",
    items: [
      { name: "MongoDB", icon: SiMongodb, brand: "#47A248", surface: "#132D16" },
      { name: "PostgreSQL", icon: SiPostgresql, brand: "#4169E1", surface: "#101D48" },
      { name: "Supabase", icon: SiSupabase, brand: "#3ECF8E", surface: "#0F3327" },
      { name: "Firestore", icon: SiFirebase, brand: "#FFCA28", surface: "#3A2905" },
      { name: "Redis", icon: SiRedis, brand: "#FF4438", surface: "#3E1110" },
      { name: "SQL", icon: SiPostgresql, brand: "#4479A1", surface: "#102C3F" },
    ],
  },
  {
    label: "DevOps & Tools",
    items: [
      { name: "Docker", icon: SiDocker, brand: "#2496ED", surface: "#082B46" },
      { name: "Kubernetes", icon: SiKubernetes, brand: "#326CE5", surface: "#101F49" },
      { name: "Git", icon: SiGit, brand: "#F05032", surface: "#3D160E" },
      { name: "GitHub", icon: SiGithub, brand: "#FFFFFF", surface: "#181717" },
    ],
  },
  {
    label: "AI / ML Libraries",
    items: [
      { name: "NumPy", icon: SiNumpy, brand: "#4DABCF", surface: "#102F3C" },
      { name: "Pandas", icon: SiPandas, brand: "#E70488", surface: "#30051F" },
      { name: "Matplotlib", icon: SiNumpy, brand: "#11557C", surface: "#092A3D" },
      { name: "Scikit-learn", icon: SiScikitlearn, brand: "#F7931E", surface: "#3A2108" },
      { name: "OpenCV", icon: SiOpencv, brand: "#5C3EE8", surface: "#1E1649" },
    ],
  },
];

function TechBadge({ item, index }: { item: TechItem; index: number }) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 8 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.28, delay: index * 0.035 }}
      whileHover={{ scale: 1.04, y: -2 }}
      className="group relative flex items-center gap-2.5 overflow-hidden rounded-lg border border-border/70 bg-card px-3 py-2.5 text-sm shadow-sm transition-colors hover:border-foreground/20"
    >
      <span
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `linear-gradient(120deg, transparent 15%, ${item.brand}18 45%, transparent 75%)`,
        }}
      />
      <span
        className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-white/10 shadow-inner"
        style={{ backgroundColor: item.surface, color: item.brand }}
      >
        <Icon className="h-4.5 w-4.5" aria-hidden />
      </span>
      <span className="relative z-10 font-medium tracking-normal text-foreground">
        {item.name}
      </span>
    </motion.div>
  );
}

const Skills = () => {
  return (
    <section id="tech-stack" className="section-padding border-t border-border">
      <div className="container-max space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-2"
        >
          <p className="section-label">Tech Stack</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Tools I work with
          </h2>
          <p className="text-muted-foreground text-base max-w-lg">
            Technologies I use regularly to build, ship, and scale products.
          </p>
        </motion.div>

        <div className="space-y-10">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: categoryIndex * 0.07 }}
              className="space-y-3"
            >
              <div className="flex items-center gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {category.label}
                </p>
                <div className="h-px flex-1 bg-border" />
              </div>

              <div className="flex flex-wrap gap-2.5">
                {category.items.map((item, itemIndex) => (
                  <TechBadge key={item.name} item={item} index={itemIndex} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
