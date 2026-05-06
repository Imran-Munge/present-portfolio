import React from "react";
import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { personalInfo, socialLinks } from "@/lib/data";

const footerSocials = [
  { name: "GitHub", href: socialLinks.github, icon: GithubIcon },
  { name: "LinkedIn", href: socialLinks.linkedin, icon: LinkedinIcon },
  { name: "Email", href: socialLinks.email, icon: Mail },
];

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border py-12 px-6 pb-28">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <Link href="/" className="text-2xl font-heading font-bold text-foreground tracking-tighter">
            IMRAN<span className="text-primary">.</span>
          </Link>
          <p className="text-muted-foreground text-sm font-sans max-w-xs">
            Building AI-powered products and scalable solutions at Blackmint Labs.
          </p>
        </div>

        <div className="flex gap-4">
          {footerSocials.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-surface-high border border-border rounded-xl hover:bg-surface hover:text-primary transition-all group"
              aria-label={link.name}
            >
              <link.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
          ))}
        </div>

        <div className="text-muted-foreground text-xs font-sans">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
