"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Imran delivered a full-stack platform ahead of schedule and beyond our expectations. His attention to detail and ability to understand business requirements is rare in someone so early in their career.",
    name: "Arjun Sharma",
    role: "Founder, TechStartup",
    initials: "AS",
    stars: 5,
  },
  {
    quote:
      "The AI automation system Imran built cut our processing time by 60%. He understood exactly what we needed and executed with precision.",
    name: "Priya Mehta",
    role: "Operations Lead, SaaS Co.",
    initials: "PM",
    stars: 5,
  },
  {
    quote:
      "Clean code, clear communication, and a deep understanding of modern web architecture. I would confidently recommend Imran for any full-stack project.",
    name: "David Chen",
    role: "CTO, Digital Agency",
    initials: "DC",
    stars: 5,
  },
  {
    quote:
      "Working with Imran was effortless. He proactively flagged issues before they became problems and shipped features that genuinely delighted our users.",
    name: "Sofia Russo",
    role: "Product Manager, Fintech",
    initials: "SR",
    stars: 5,
  },
  {
    quote:
      "Imran refactored our entire backend in two weeks — performance went through the roof and the codebase became actually maintainable. Brilliant work.",
    name: "James Okafor",
    role: "Engineering Lead, ScaleUp",
    initials: "JO",
    stars: 5,
  },
  {
    quote:
      "He delivered a pixel-perfect design implementation on a tight deadline. The attention to responsive behaviour was exceptional — every breakpoint just worked.",
    name: "Lena Fischer",
    role: "Design Director, Studio F",
    initials: "LF",
    stars: 5,
  },
  {
    quote:
      "Imran integrated three third-party APIs and built a custom dashboard on top in under a week. We've since hired him for two more projects.",
    name: "Rahul Kapoor",
    role: "Co-Founder, B2B SaaS",
    initials: "RK",
    stars: 5,
  },
  {
    quote:
      "The level of craft in Imran's code is something I rarely see. He thinks like a product person and builds like a senior engineer — an exceptional combination.",
    name: "Mia Tanaka",
    role: "VP Engineering, Series B",
    initials: "MT",
    stars: 5,
  },
];

const row1 = testimonials.slice(0, 4);
const row2 = testimonials.slice(4, 8);

/* ─── Star Rating ─────────────────────────────────────────── */
const StarRating = ({ count }: { count: number }) => (
  <div className="flex items-center gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <svg
        key={i}
        width="14"
        height="14"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        style={{ fill: "#EAB308", flexShrink: 0 }}
      >
        <path d="M8 1l1.85 3.75 4.15.6-3 2.92.71 4.13L8 10.35l-3.71 1.95.71-4.13-3-2.92 4.15-.6z" />
      </svg>
    ))}
  </div>
);

/* ─── Single Card ─────────────────────────────────────────── */
const TestimonialCard = ({ t }: { t: (typeof testimonials)[0] }) => (
  <div className="group flex flex-col shrink-0 w-[300px] md:w-[340px] bg-card border border-border rounded-xl p-6 hover:bg-secondary/40 transition-colors duration-300">
    <div className="flex items-center justify-between mb-5">
      <StarRating count={t.stars} />
    </div>

    <blockquote className="flex-grow">
      <span
        className="block font-serif leading-none select-none -ml-1 -mt-2 mb-1"
        style={{ fontSize: "3.5rem", color: "hsl(var(--foreground) / 0.07)" }}
        aria-hidden
      >
        &ldquo;
      </span>
      <p className="text-sm text-muted-foreground leading-[1.75] -mt-4">
        {t.quote}
      </p>
    </blockquote>

    <div className="my-5 h-px bg-border" />

    <div className="flex items-center gap-3">
      <div className="w-9 h-9 shrink-0 rounded-lg bg-secondary border border-border flex items-center justify-center text-[11px] font-semibold text-foreground/70 tracking-wide">
        {t.initials}
      </div>
      <div className="min-w-0">
        <p className="text-sm font-medium leading-snug truncate">{t.name}</p>
        <p className="text-xs text-muted-foreground truncate mt-0.5">
          {t.role}
        </p>
      </div>
    </div>
  </div>
);

/* ─── Marquee Row ─────────────────────────────────────────── */
// Card width (300px) + gap (16px) = 316px per card
const CARD_W = 316;

const MarqueeRow = ({
  items,
  direction = "left",
  duration = 38,
}: {
  items: (typeof testimonials)[0][];
  direction?: "left" | "right";
  duration?: number;
}) => {
  const [paused, setPaused] = useState(false);
  // Duplicate 3× so there's always content on-screen while looping
  const track = [...items, ...items, ...items];
  const loopW = items.length * CARD_W;

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Left fade */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20"
        style={{
          background:
            "linear-gradient(to right, hsl(var(--background)) 0%, transparent 100%)",
        }}
      />
      {/* Right fade */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20"
        style={{
          background:
            "linear-gradient(to left, hsl(var(--background)) 0%, transparent 100%)",
        }}
      />

      {/* Track */}
      <div
        className="flex gap-4 w-max py-1"
        style={{
          animation: `marquee-${direction}-${loopW} ${duration}s linear infinite`,
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        {track.map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} t={t} />
        ))}
      </div>

      <style>{`
        @keyframes marquee-left-${loopW} {
          from { transform: translateX(0px); }
          to   { transform: translateX(-${loopW}px); }
        }
        @keyframes marquee-right-${loopW} {
          from { transform: translateX(-${loopW}px); }
          to   { transform: translateX(0px); }
        }
      `}</style>
    </div>
  );
};

/* ─── Section ─────────────────────────────────────────────── */
const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="section-padding border-t border-border overflow-hidden"
    >
      {/* Header — contained */}
      <div className="container-max mb-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div className="space-y-2">
            <p className="section-label">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              What people say
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs sm:text-right leading-relaxed">
            Trusted by founders, operators, and engineers across the industry.
          </p>
        </motion.div>
      </div>

      {/* Full-bleed sliding rows */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="space-y-4"
      >
        <MarqueeRow items={row1} direction="left" duration={40} />
        <MarqueeRow items={row2} direction="right" duration={34} />
      </motion.div>

      {/* Trust bar — contained */}
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-12"
        >
          {[
            ["3+", "Years building"],
            ["20+", "Projects shipped"],
            ["100%", "Client satisfaction"],
          ].map(([stat, label]) => (
            <div key={label} className="flex items-baseline gap-2">
              <span className="text-sm font-semibold tabular-nums">{stat}</span>
              <span className="text-xs text-muted-foreground">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
