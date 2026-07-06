"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/ui/Icons";
import { socialLinks } from "@/lib/data";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Replace with your actual form endpoint (Resend, Formspree, etc.)
    await new Promise((r) => setTimeout(r, 900));
    setStatus("sent");
  };

  return (
    <section id="contact" className="section-padding border-t border-border">
      <div className="container-max grid lg:grid-cols-[1fr_400px] gap-16 items-start">
        {/* Left: heading + social links */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <p className="section-label">Contact</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Let&apos;s work together.
            </h2>
          </div>

          <p className="text-muted-foreground leading-relaxed max-w-sm">
            I&apos;m open to internship opportunities, freelance projects, and
            interesting engineering conversations. Send a message or reach out
            directly.
          </p>

          <div className="space-y-3">
            <a
              href={socialLinks.email}
              className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              <MailIcon className="w-4 h-4 shrink-0" />
              hello@blackmintlabs.com
              <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              <GithubIcon className="w-4 h-4 shrink-0" />
              github.com/Imran-Munge
              <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              <LinkedinIcon className="w-4 h-4 shrink-0" />
              linkedin.com/in/imranmunge
              <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </motion.div>

        {/* Right: form */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {status === "sent" ? (
            <div className="flex flex-col items-start gap-3 p-6 rounded-xl border border-border bg-card">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Send className="w-4 h-4 text-primary" />
              </div>
              <h3 className="text-base font-semibold">Message sent!</h3>
              <p className="text-sm text-muted-foreground">
                Thanks for reaching out. I&apos;ll get back to you within 24 hours.
              </p>
              <button
                onClick={() => {
                  setStatus("idle");
                  setForm({ name: "", email: "", message: "" });
                }}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors mt-1"
              >
                Send another →
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-4 p-6 rounded-xl border border-border bg-card"
            >
              <div className="space-y-1.5">
                <label
                  htmlFor="name"
                  className="text-xs font-medium text-muted-foreground"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-3 py-2.5 text-sm rounded-lg border border-border bg-secondary placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-ring focus:border-foreground/30 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="text-xs font-medium text-muted-foreground"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full px-3 py-2.5 text-sm rounded-lg border border-border bg-secondary placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-ring focus:border-foreground/30 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="text-xs font-medium text-muted-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity…"
                  className="w-full px-3 py-2.5 text-sm rounded-lg border border-border bg-secondary placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-ring focus:border-foreground/30 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full btn-primary justify-center disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  "Sending…"
                ) : (
                  <>
                    Send Message
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
