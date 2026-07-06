"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import { personalInfo } from "@/lib/data";

/* ─── animation helpers ─────────────────────────────── */
const easeOutQuart = [0.25, 0.46, 0.45, 0.94] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: easeOutQuart },
});

const Hero = () => {
  return (
    <section className="relative section-padding min-h-[calc(100svh-4rem)] flex items-center pt-32 overflow-hidden">

      {/* ── Background layer ──────────────────────────── */}
      {/* Subtle dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.035] dark:opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Top-left ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, #0A3B28, transparent 70%)",
          filter: "blur(48px)",
          opacity: 0.15,
        }}
      />

      {/* Bottom-right ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 70% 70%, #0A3B28, transparent 70%)",
          filter: "blur(64px)",
          opacity: 0.1,
        }}
      />

      {/* Thin horizontal rule at top of section */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
        style={{ transformOrigin: "left" }}
        className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
      />

      {/* ── Main grid ─────────────────────────────────── */}
      <div className="container-max relative grid lg:grid-cols-[1fr_280px] gap-16 items-center">

        {/* ─── Left content ─────────────────────────── */}
        <div className="space-y-8">

          {/* Availability badge */}
          <motion.div {...fadeUp(0)} className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0A3B28] opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0A3B28]" />
            </span>
            <span className="text-sm text-muted-foreground tracking-wide">
              Available for internships &amp; freelance opportunities
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.1)}
            className="text-4xl md:text-5xl lg:text-[54px] font-semibold tracking-tight leading-[1.1] text-foreground"
          >
            Building{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#0A3B28] dark:text-[#10B981]">AI-Powered</span>
              {/* underline accent */}
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.55, ease: "easeOut" }}
                style={{ transformOrigin: "left" }}
                className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-[#0A3B28]/30"
              />
            </span>{" "}
            Products and Scalable Web Applications.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            {...fadeUp(0.2)}
            className="text-lg text-muted-foreground leading-relaxed max-w-xl"
          >
            Full-stack developer specializing in modern web technologies, SaaS
            platforms, and intelligent software solutions.
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...fadeUp(0.28)}
            className="flex flex-wrap gap-3"
          >
            <Link
              href="#projects"
              className="btn-primary group relative overflow-hidden"
            >
              {/* shine sweep on hover */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out bg-gradient-to-r from-transparent via-white/15 to-transparent"
              />
              View Projects
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>

            <Link href="#contact" className="btn-outline">
              Contact Me
            </Link>
          </motion.div>

          {/* Meta info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.42 }}
            className="flex items-center gap-4 text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              {personalInfo.location}
            </span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 shrink-0 text-[#0A3B28]/60" />
              Founder of BlackMint Labs
            </span>
          </motion.div>

          {/* Subtle stat row */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.52 }}
            className="flex flex-wrap items-center gap-6 pt-2 border-t border-border/60"
          >
            {[
              { value: "3+", label: "Years building" },
              { value: "20+", label: "Projects shipped" },
              { value: "Full-Stack", label: "& AI Engineering" },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col gap-0.5">
                <span className="text-sm font-semibold text-foreground">
                  {value}
                </span>
                <span className="text-xs text-muted-foreground">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ─── Right: portrait ──────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.22, ease: "easeOut" }}
          className="hidden lg:flex flex-col items-center gap-4"
        >
          {/* Outer glow ring */}
          <div className="relative group">
            {/* Animated ring */}
            <div
              aria-hidden
              className="absolute -inset-[3px] rounded-[18px] bg-gradient-to-br from-[#0A3B28]/60 via-[#0A3B28]/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500"
            />
            {/* Card */}
            <div className="relative w-56 h-64 rounded-2xl overflow-hidden border border-border bg-secondary">
              <Image
                src="/pfp.jpeg"
                alt={personalInfo.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                priority
              />
              {/* Bottom gradient overlay */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>

          {/* Name + role pill */}
          <div className="flex flex-col items-center gap-1">
            <p className="text-sm font-medium text-foreground">
              {personalInfo.name}
            </p>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-border bg-secondary text-[11px] text-muted-foreground tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0A3B28]/70" />
              Full-Stack · AI Engineer
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
