"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Founder & CEO",
    company: "BlackMint Labs",
    period: "2025 – Present",
    location: "Mumbai, India",
    type: "Full-time",
    highlights: [
      "Founded BlackMint Labs, a software studio specialising in AI automation, SaaS development, and modern full-stack engineering.",
      "Designed and developed scalable web applications, intelligent automation systems, and custom software solutions using Next.js, TypeScript, Python, and cloud technologies.",
      "Built products across healthcare, nutrition, real estate, eCommerce, and business automation — with a strong emphasis on performance, usability, and maintainability.",
      "Integrated AI capabilities including computer vision, conversational assistants, and workflow automation to solve real-world business problems.",
      "Established a growing developer ecosystem through open-source projects, technical content, and internship initiatives.",
      "Managed end-to-end product development — from planning and UI design to deployment, optimisation, and ongoing improvement.",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "React",
      "Node.js",
      "Python",
      "MongoDB",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
      "Framer Motion",
      "AI Automation",
      "Cloud Architecture",
    ],
  },
];

const achievements = [
  { label: "Products built", value: "10+" },
  { label: "Client & internal projects", value: "5+" },
  { label: "Open source repositories", value: "15+" },
  { label: "Technologies used", value: "30+" },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding border-t border-border">
      <div className="container-max space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-2"
        >
          <p className="section-label">Experience</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Work &amp; background
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xl pt-1">
            A summary of my entrepreneurial journey, technical experience, and
            the products I&apos;ve built across web development, AI, and SaaS.
          </p>
        </motion.div>

        {/* Experience entries */}
        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6 rounded-xl border border-border bg-card"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                <div>
                  <h3 className="text-base font-semibold">{exp.role}</h3>
                  <div className="flex items-center gap-1.5 mt-1">
                    <Building2 className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      {exp.company}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {exp.period}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <MapPin className="w-3 h-3" />
                    {exp.location}
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <ul className="space-y-2 mb-5">
                {exp.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-muted-foreground"
                  >
                    <span className="mt-2 w-1 h-1 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Tech */}
              <div className="flex flex-wrap gap-1.5">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-medium px-2 py-0.5 border border-border rounded-md bg-secondary text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement grid */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2"
        >
          {achievements.map((a) => (
            <div
              key={a.label}
              className="p-4 rounded-xl border border-border bg-card text-center"
            >
              <p className="text-2xl font-semibold tracking-tight">{a.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{a.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
