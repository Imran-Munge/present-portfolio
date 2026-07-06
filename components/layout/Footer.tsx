"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, XIcon, MailIcon } from "@/components/ui/Icons";
import { socialLinks } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

/* ─── Nav links ──────────────────────────────────────────────────── */
const navLinks = [
  { label: "About",    href: "#about"     },
  { label: "Services", href: "#services"  },
  { label: "Projects", href: "#projects"  },
  { label: "Stack",    href: "#tech-stack"},
  { label: "Contact",  href: "#contact"   },
];

const socials = [
  { label: "GitHub",   href: socialLinks.github,   Icon: GithubIcon   },
  { label: "LinkedIn", href: socialLinks.linkedin,  Icon: LinkedinIcon },
  { label: "Twitter",  href: socialLinks.twitter,   Icon: XIcon        },
  { label: "Email",    href: socialLinks.email,     Icon: MailIcon     },
];

/* ─── Component ──────────────────────────────────────────────────── */
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border relative overflow-hidden">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&display=swap');`}</style>

      {/* Subtle dot-grid backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Top ambient glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />

      {/* ── Main footer body ──────────────────────────────────────── */}
      <div className="container-max px-6 pt-12 pb-8 relative z-10 space-y-10">

        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">

          {/* Brand block */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="space-y-3 max-w-xs"
          >
            <Link
              href="/"
              className="inline-block text-lg font-semibold tracking-tight text-foreground hover:text-foreground/70 transition-colors"
            >
              Imran Munge
            </Link>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Full-stack developer &amp; AI engineer building scalable products
              from Mumbai, India.
            </p>

            {/* Availability badge */}
            <div
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </span>
              <span className="text-[10px] text-muted-foreground tracking-wider uppercase">
                Available for work
              </span>
            </div>
          </motion.div>

          {/* Nav + Social columns */}
          <div className="flex gap-16">

            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="space-y-3"
            >
              <p
                className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground/50"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                Navigation
              </p>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.14 }}
              className="space-y-3"
            >
              <p
                className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground/50"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                Connect
              </p>
              <ul className="space-y-2">
                {socials.map(({ label, href, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={label !== "Email" ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      <Icon className="w-3.5 h-3.5 shrink-0 transition-transform duration-200 group-hover:scale-110" />
                      <span>{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-border" />

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
        >
          <p
            className="text-[11px] text-muted-foreground/50"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            © {year} Imran Munge · All rights reserved
          </p>

          <p
            className="text-[11px] text-muted-foreground/50"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Built with{" "}
            <span className="text-muted-foreground">Next.js</span>
            {" "}·{" "}
            <span className="text-muted-foreground">Tailwind CSS</span>
            {" "}·{" "}
            <span className="text-muted-foreground">Framer Motion</span>
          </p>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;
