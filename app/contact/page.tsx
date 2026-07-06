"use client";

import React, { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { Send, MapPin, Calendar } from "lucide-react";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/ui/Icons";
import { motion } from "framer-motion";
import { personalInfo, socialLinks } from "@/lib/data";

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
      <SectionHeading
        title="Get in Touch"
        subtitle="Have a project in mind or just want to say hi? I'd love to hear from you."
        className="mb-20"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Contact Info */}
        <div className="flex flex-col gap-12">
          <div className="space-y-8">
            <h3 className="text-3xl font-heading font-bold">Contact Information</h3>
            <p className="text-muted-foreground text-lg leading-relaxed font-body">
              Feel free to reach out through the form or my social channels. I typically respond
              within 24-48 hours.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-6 p-6 glass-dark rounded-3xl border border-white/5">
              <div className="p-4 bg-mint/10 rounded-2xl text-mint">
                <MailIcon className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground uppercase tracking-widest font-bold">
                  Email
                </div>
                <a
                  href={socialLinks.email}
                  className="text-lg font-sans hover:text-mint transition-colors"
                >
                  hello@imranmunge.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-6 p-6 glass-dark rounded-3xl border border-white/5">
              <div className="p-4 bg-mint/10 rounded-2xl text-mint">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground uppercase tracking-widest font-bold">
                  Location
                </div>
                <div className="text-lg font-sans">{personalInfo.location}</div>
              </div>
            </div>

            <a
              href={personalInfo.calLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-6 p-6 glass-dark rounded-3xl border border-white/5 hover:border-mint/30 transition-all group"
            >
              <div className="p-4 bg-forest/10 rounded-2xl text-forest group-hover:text-mint transition-colors">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground uppercase tracking-widest font-bold">
                  Schedule
                </div>
                <div className="text-lg font-sans group-hover:text-mint transition-colors">
                  Book a 15-min Call
                </div>
              </div>
            </a>
          </div>

          <div className="pt-8">
            <div className="text-sm text-muted-foreground uppercase tracking-widest font-bold mb-6">
              Social Channels
            </div>
            <div className="flex gap-4">
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 glass-dark rounded-2xl border border-white/5 hover:border-mint/50 hover:text-mint transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-6 h-6" />
              </a>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 glass-dark rounded-2xl border border-white/5 hover:border-mint/50 hover:text-mint transition-all"
                aria-label="GitHub"
              >
                <GithubIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="p-8 md:p-12 glass-dark rounded-[3rem] border border-white/10 shadow-2xl relative overflow-hidden">
          {/* Success Overlay */}
          {isSuccess && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 z-20 glass-dark flex flex-col items-center justify-center text-center p-8 backdrop-blur-xl"
            >
              <div className="w-20 h-20 bg-mint/20 text-mint rounded-full flex items-center justify-center mb-6">
                <Send className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-heading font-bold mb-2">Message Sent!</h4>
              <p className="text-muted-foreground mb-8">
                Thanks for reaching out. I&apos;ll get back to you soon.
              </p>
              <button
                onClick={() => setIsSuccess(false)}
                className="text-mint font-bold underline"
              >
                Send another message
              </button>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium ml-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-mint/50 focus:outline-none transition-all"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium ml-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-mint/50 focus:outline-none transition-all"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium ml-1">Subject</label>
              <input
                type="text"
                required
                placeholder="Project Inquiry"
                className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-mint/50 focus:outline-none transition-all"
                value={formState.subject}
                onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium ml-1">Message</label>
              <textarea
                rows={5}
                required
                placeholder="Tell me about your project..."
                className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-mint/50 focus:outline-none transition-all resize-none"
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-4 px-8 py-4 bg-forest text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-mid transition-colors shadow-lg shadow-forest/20 active:scale-95 disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
