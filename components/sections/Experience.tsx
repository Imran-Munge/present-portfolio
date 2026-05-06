"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { Building2 } from "lucide-react";

const experiences = [
  {
    company: "Blackmint Labs",
    role: "Founder & CEO",
    period: "2025 – Present",
    responsibilities: [
      "Built AI automation systems for real-world business use-cases",
      "Developed and launched scalable SaaS platforms",
      "Delivered end-to-end client solutions across web, mobile, and AI",
      "Built and managed a growing developer community",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 max-w-7xl mx-auto w-full">
      <SectionHeading title="Experience" />

      <div className="mt-16 space-y-8">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-8 md:p-10 glass rounded-3xl border border-border hover:border-primary/20 transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-2xl text-primary w-fit">
                <Building2 className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-heading font-bold">{exp.role}</h3>
                <p className="text-muted-foreground font-body">
                  {exp.company} · {exp.period}
                </p>
              </div>
            </div>
            <ul className="space-y-3 ml-1">
              {exp.responsibilities.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-muted-foreground font-body leading-relaxed"
                >
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
