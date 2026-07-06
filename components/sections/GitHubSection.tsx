"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";

const GitHubCalendar = dynamic(() => import("react-github-calendar").then((mod) => mod.GitHubCalendar), { ssr: false });

const GitHubSection = () => {
  const { theme } = useTheme();

  return (
    <section className="section-padding overflow-hidden">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Code Contributions</h2>
          <p className="text-foreground/60 max-w-2xl">
            My open-source contributions and development activity on GitHub. 
            Building consistently to stay sharp.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-8 rounded-[2rem] border border-border bg-card shadow-xl overflow-x-auto"
        >
          <div className="min-w-[800px] flex justify-center">
            <GitHubCalendar
              username="Imran-Munge"
              blockSize={12}
              blockMargin={4}
              fontSize={12}
              theme={{
                light: ["#F3F4F6", "#D1FAE5", "#6EE7B7", "#10B981", "#065F46"],
                dark: ["#1F2937", "#064E3B", "#065F46", "#059669", "#10B981"],
              }}
              colorScheme={theme === "dark" ? "dark" : "light"}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubSection;
