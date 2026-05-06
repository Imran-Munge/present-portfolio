"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto w-full">
      <SectionHeading title="About Me" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16 items-center">
        {/* Text Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-muted-foreground font-body text-lg leading-[1.7]"
        >
          <p>
            Hi, I&apos;m <strong className="text-foreground">Imran Munge</strong> — an{" "}
            <strong className="text-foreground">AI Developer in India</strong> and{" "}
            <strong className="text-foreground">Startup Founder</strong> passionate about building
            products that solve real-world problems.
          </p>
          <p>
            As the Founder of{" "}
            <strong className="text-foreground">Blackmint Labs</strong>, I lead the development of
            AI-powered automation systems and scalable SaaS platforms. My approach combines deep
            technical expertise as a{" "}
            <strong className="text-foreground">Full Stack Developer</strong> with product thinking
            — ensuring every solution we ship is not just functional, but genuinely impactful.
          </p>
          <p>
            From concept to deployment, I obsess over clean architecture, user experience, and
            measurable outcomes. Whether it&apos;s computer vision, NLP, or full-stack web applications,
            I build with precision and purpose.
          </p>
        </motion.div>

        {/* Visual Column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/10 blur-2xl" />
            <div className="relative h-full w-full rounded-3xl border border-border glass p-8 flex flex-col justify-center gap-6">
              {[
                { label: "Focus", value: "AI & Full Stack" },
                { label: "Company", value: "Blackmint Labs" },
                { label: "Based in", value: "India (Remote)" },
                { label: "Approach", value: "Product-First" },
              ].map((item) => (
                <div key={item.label} className="flex justify-between items-center border-b border-border pb-4 last:border-0 last:pb-0">
                  <span className="text-sm text-muted-foreground uppercase tracking-widest font-bold">
                    {item.label}
                  </span>
                  <span className="text-foreground font-heading font-semibold">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
