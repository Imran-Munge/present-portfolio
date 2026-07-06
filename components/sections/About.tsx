"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { MapPin, Briefcase, Sparkles } from "lucide-react";

/* ─── Data ───────────────────────────────────────────────────────── */
const stats = [
  { value: "6+", label: "Projects shipped", glyph: "◈" },
  { value: "2025", label: "Founded BlackMint Labs", glyph: "◎" },
  { value: "AI-First", label: "Engineering philosophy", glyph: "◉" },
];

const pills = [
  { icon: <MapPin className="w-3 h-3" />, text: "Mumbai, India" },
  { icon: <Briefcase className="w-3 h-3" />, text: "Full-Stack + AI" },
  { icon: <Sparkles className="w-3 h-3" />, text: "BlackMint Labs" },
];

/* ─── Component ──────────────────────────────────────────────────── */
const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  /* subtle parallax on the photo */
  const photoY = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section-padding border-t border-border overflow-hidden"
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&display=swap');`}</style>

      <div className="container-max grid lg:grid-cols-2 gap-16 items-start">

        {/* ── LEFT: Text ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="space-y-7"
        >
          <p className="section-label">About</p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
            Engineering software{" "}
            <br className="hidden sm:block" />
            that actually{" "}
            <span className="relative inline-block">
              <span className="relative z-10">matters.</span>
              {/* animated underline */}
              <motion.span
                className="absolute bottom-0.5 left-0 h-[2px] bg-foreground/30 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              />
            </span>
          </h2>

          {/* Context pills */}
          <div className="flex flex-wrap gap-2">
            {pills.map((p) => (
              <span
                key={p.text}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-3 py-1 text-[11px] font-medium text-muted-foreground"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                {p.icon}
                {p.text}
              </span>
            ))}
          </div>

          {/* Body copy */}
          <div className="space-y-4 text-muted-foreground leading-relaxed text-base">
            <p>
              I&apos;m <span className="text-foreground font-medium">Imran Munge</span>,
              a full-stack developer and AI engineer based in Mumbai, India.
              I build scalable web applications, intelligent software systems,
              and products that solve real-world problems with precision and care.
            </p>
            <p>
              As the founder of{" "}
              <span className="text-foreground font-medium">BlackMint Labs</span>,
              I lead the development of AI-powered SaaS products, automation
              systems, and modern web applications for clients across the globe.
            </p>
            <p>
              My approach combines technical depth with product thinking — I care
              as much about the experience as the architecture behind it.
            </p>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-0 pt-6 border-t border-border">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
                className={`pr-4 ${i !== 0 ? "pl-4 border-l border-border" : ""}`}
              >
                {/* glyph accent */}
                <p
                  className="text-[10px] text-muted-foreground/40 mb-1 font-mono select-none"
                >
                  {stat.glyph}
                </p>
                <p
                  className="text-xl font-semibold tracking-tight text-foreground"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {stat.value}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5 leading-snug">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── RIGHT: Photo ───────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="relative"
        >
          {/* Decorative grid backdrop */}
          <div
            className="pointer-events-none absolute -inset-6 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          {/* Offset accent block */}
          <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border border-border/50 bg-secondary/30" />

          {/* Photo frame */}
          <motion.div
            style={{ y: photoY }}
            className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border bg-secondary z-10"
          >
            <Image
              src="/pfp.jpeg"
              alt="Imran Munge"
              fill
              className="object-cover"
            />

            {/* Subtle gradient vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

            {/* Floating name card */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.45 }}
              className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-black/50 backdrop-blur-md px-4 py-3 flex items-center justify-between"
            >
              <div>
                <p className="text-sm font-semibold text-white leading-tight">
                  Imran Munge
                </p>
                <p
                  className="text-[10px] text-white/50 mt-0.5"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  Full-Stack &amp; AI Engineer
                </p>
              </div>

              {/* Live dot */}
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span
                  className="text-[10px] text-white/50"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  Available
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Corner label */}
          <div
            className="absolute -top-3 -left-3 z-20 rounded-md border border-border bg-card px-2.5 py-1"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            <span className="text-[10px] font-medium text-muted-foreground tracking-widest uppercase">
              Mumbai · India
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;