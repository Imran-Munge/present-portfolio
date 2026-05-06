"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight, Calendar } from "lucide-react";
import Link from "next/link";
import { personalInfo } from "@/lib/data";
import ParticleBackground from "@/components/ui/ParticleBackground";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <ParticleBackground />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px] animate-glow" />
        <div
          className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] rounded-full bg-primary/15 blur-[100px] animate-glow"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center pt-32">
        {/* Status Badge */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          Available for Work
        </motion.div>

        {/* H1 */}
        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-4xl md:text-[60px] font-heading font-bold leading-[1.1] tracking-[-0.02em] text-gradient mb-4"
        >
          {personalInfo.name}
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-5"
        >
          <p className="text-xl md:text-2xl font-heading font-semibold text-foreground/80">
            {personalInfo.title}
          </p>
          <p className="text-base md:text-lg text-muted-foreground font-body mt-1">
            {personalInfo.roles.join(" · ")}
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-lg md:text-xl text-muted-foreground font-body max-w-xl mx-auto leading-relaxed mb-8"
        >
          {personalInfo.description}
        </motion.p>

        {/* Buttons */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-wrap justify-center gap-3"
        >
          <Link
            href="/projects"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-[10px] font-body font-medium text-[15px] tracking-[0.02em] flex items-center gap-2 hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 active:scale-95"
          >
            View Projects
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 border border-primary text-primary rounded-[10px] font-body font-medium text-[15px] tracking-[0.02em] hover:bg-primary hover:text-primary-foreground transition-colors active:scale-95"
          >
            Hire Me
          </Link>
          <a
            href={personalInfo.calLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-muted-foreground hover:text-foreground rounded-[10px] font-body font-medium text-[15px] tracking-[0.02em] flex items-center gap-2 transition-colors active:scale-95"
          >
            <Calendar className="w-4 h-4" />
            Book a Call
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
