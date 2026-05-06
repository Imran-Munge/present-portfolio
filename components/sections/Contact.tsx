"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { personalInfo, socialLinks } from "@/lib/data";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-[640px] mx-auto text-center"
      >
        <h2 className="text-3xl md:text-[42px] font-heading font-semibold leading-[1.2] text-gradient mb-6">
          Let&apos;s Build Something Impactful Together
        </h2>
        <p className="text-muted-foreground font-body text-lg leading-relaxed mb-10">
          Whether you have a project idea, need AI-powered solutions, or want to discuss opportunities — I&apos;d love to connect.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <a
            href={personalInfo.calLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-[10px] font-body font-medium text-[15px] tracking-[0.02em] flex items-center gap-2 hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 active:scale-95"
          >
            <Calendar className="w-4 h-4" />
            Book a Call
          </a>
          <a
            href={socialLinks.email}
            className="px-6 py-3 border border-primary text-primary rounded-[10px] font-body font-medium text-[15px] tracking-[0.02em] flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-colors active:scale-95"
          >
            <Mail className="w-4 h-4" />
            Send Email
          </a>
        </div>

        <div className="flex justify-center gap-4">
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass rounded-2xl border border-border hover:border-primary/30 hover:text-primary transition-all"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass rounded-2xl border border-border hover:border-primary/30 hover:text-primary transition-all"
            aria-label="GitHub"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
