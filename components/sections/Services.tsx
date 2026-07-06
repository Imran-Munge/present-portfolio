"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Globe, Bot, LayoutDashboard, Plug, ArrowUpRight } from "lucide-react";

/* ─── Service data ────────────────────────────────────────────────── */
const services = [
  {
    number: "01",
    icon: Globe,
    title: "Full-Stack Development",
    description:
      "End-to-end web application development using React, Next.js, Node.js, and modern databases. From MVP to production-ready systems.",
    tags: ["React", "Next.js", "Node.js", "PostgreSQL", "Docker"],
    accent: "#0A3B28", // blue
    glyph: "◈",
  },
  {
    number: "02",
    icon: Bot,
    title: "AI Integration",
    description:
      "Integrate large language models, computer vision, and intelligent automation into existing products or build AI-first applications from scratch.",
    tags: ["LLMs", "OpenCV", "TensorFlow", "Langchain", "REST APIs"],
    accent: "#0A3B28", // purple
    glyph: "◎",
  },
  {
    number: "03",
    icon: LayoutDashboard,
    title: "SaaS Development",
    description:
      "Design and build multi-tenant SaaS platforms with authentication, billing, analytics, and scalable cloud infrastructure.",
    tags: ["Stripe", "Auth", "Analytics", "Supabase", "Redis"],
    accent: "#0A3B28", // emerald
    glyph: "◉",
  },
  {
    number: "04",
    icon: Plug,
    title: "API Development",
    description:
      "Design robust REST and GraphQL APIs, third-party integrations, webhooks, and backend microservices for high-performance systems.",
    tags: ["REST", "GraphQL", "Webhooks", "Express", "Kubernetes"],
    accent: "#0A3B28", // amber
    glyph: "◈",
  },
];

/* ─── Card ────────────────────────────────────────────────────────── */
function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex flex-col rounded-2xl border border-border bg-card overflow-hidden cursor-default transition-colors duration-300"
      style={{
        borderColor: hovered ? service.accent + "55" : undefined,
      }}
    >
      {/* Ambient glow behind card on hover */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${service.accent}18, transparent 70%)`,
        }}
      />

      {/* Animated top accent bar */}
      <div className="relative h-[2px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-border" />
        <motion.div
          className="absolute inset-y-0 left-0 h-full"
          style={{ backgroundColor: service.accent }}
          initial={{ width: "0%" }}
          animate={{ width: hovered ? "100%" : "0%" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />
      </div>

      {/* Card body */}
      <div className="relative z-10 flex flex-col flex-1 p-7">
        {/* Top row: number + arrow */}
        <div className="flex items-start justify-between mb-6">
          <span
            className="text-[11px] font-bold tracking-[0.25em] uppercase tabular-nums"
            style={{
              fontFamily: "'DM Mono', 'Courier New', monospace",
              color: hovered ? service.accent : "var(--muted-foreground)",
              transition: "color 0.3s",
            }}
          >
            {service.number}
          </span>

          <motion.div
            animate={{ rotate: hovered ? 0 : -45, opacity: hovered ? 1 : 0.3 }}
            transition={{ duration: 0.25 }}
          >
            <ArrowUpRight
              className="w-4 h-4"
              style={{ color: hovered ? service.accent : "var(--muted-foreground)" }}
            />
          </motion.div>
        </div>

        {/* Icon */}
        <div className="relative mb-5 w-fit">
          <div
            className="absolute inset-0 rounded-xl blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-500"
            style={{ backgroundColor: service.accent }}
          />
          <div
            className="relative w-12 h-12 rounded-xl flex items-center justify-center border transition-colors duration-300"
            style={{
              backgroundColor: hovered ? service.accent + "22" : "var(--secondary)",
              borderColor: hovered ? service.accent + "66" : "var(--border)",
            }}
          >
            <Icon
              className="w-5 h-5 transition-colors duration-300"
              style={{ color: hovered ? service.accent : "var(--foreground)" }}
            />
          </div>
        </div>

        {/* Title */}
        <h3
          className="text-[17px] font-semibold tracking-tight mb-2 transition-colors duration-300"
          style={{ color: hovered ? "#fff" : "var(--foreground)" }}
        >
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
          {service.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {service.tags.map((tag, ti) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: hovered ? ti * 0.04 : 0, duration: 0.2 }}
              className="inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase transition-colors duration-300"
              style={{
                fontFamily: "'DM Mono', monospace",
                backgroundColor: hovered ? service.accent + "22" : "var(--secondary)",
                color: hovered ? service.accent : "var(--muted-foreground)",
                border: `1px solid ${hovered ? service.accent + "44" : "transparent"}`,
              }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Large background number watermark */}
      <div
        className="pointer-events-none absolute bottom-3 right-4 text-[80px] font-black leading-none select-none transition-opacity duration-300"
        style={{
          fontFamily: "'DM Mono', monospace",
          color: hovered ? service.accent : "var(--border)",
          opacity: hovered ? 0.12 : 0.5,
        }}
      >
        {service.number}
      </div>
    </motion.div>
  );
}

/* ─── Section ────────────────────────────────────────────────────── */
const Services = () => {
  return (
    <section id="services" className="section-padding border-t border-border">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&display=swap');`}</style>

      <div className="container-max space-y-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-2"
        >
          <p className="section-label">Services</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            What I build
          </h2>
          <p className="text-muted-foreground text-base max-w-lg">
            Focused on delivering quality engineering across the full product lifecycle.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
