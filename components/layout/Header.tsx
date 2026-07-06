"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import { FileText, Menu, X, Download } from "lucide-react";

const navItems = [
  { name: "Projects", href: "/#projects" },
  { name: "Tech Stack", href: "/#tech-stack" },
  { name: "Services", href: "/#services" },
  { name: "About", href: "/#about" },
  { name: "Contact", href: "/#contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-[60] transition-all duration-300",
        isScrolled
          ? "border-b border-border bg-background/95 backdrop-blur-sm"
          : "bg-transparent"
      )}
    >
      <div className="container-max flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-foreground hover:text-foreground/70 transition-colors"
        >
          Imran Munge
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <div className="hidden md:flex items-center gap-2">
            <a
              href="/Imran Munge Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-border rounded-lg text-xs font-medium hover:bg-secondary transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              View Resume
            </a>
            <a
              href="/Imran Munge Resume.pdf"
              download
              className="inline-flex items-center justify-center p-1.5 border border-border rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              title="Download Resume"
            >
              <Download className="w-3.5 h-3.5" />
            </a>
          </div>
          <button
            className="md:hidden p-1.5 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container-max flex flex-col px-6 py-4 gap-0.5">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col gap-2 mt-3 pt-3 border-t border-border">
              <a
                href="/Imran Munge Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 py-2 text-sm font-medium text-foreground"
              >
                <FileText className="w-4 h-4" />
                View Resume ↗
              </a>
              <a
                href="/Imran Munge Resume.pdf"
                download
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 py-2 text-sm font-medium text-muted-foreground"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
