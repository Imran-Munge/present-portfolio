"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Home, 
  Briefcase, 
  LayoutGrid, 
  User, 
  PenTool, 
  Mail
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Work", href: "/#work", icon: Briefcase },
  { name: "Projects", href: "/projects", icon: LayoutGrid },
  { name: "About", href: "/#about", icon: User },
  { name: "Blog", href: "/blog", icon: PenTool },
  { name: "Contact", href: "/#contact", icon: Mail },
];

const FloatingNav = () => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", controlNavbar, { passive: true });
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <div className="fixed bottom-10 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <AnimatePresence>
        {isVisible && (
          <motion.nav
            initial={{ y: 100, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 100, opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="pointer-events-auto flex items-center gap-1 glass-card px-4 py-2 rounded-full shadow-[0_20px_50px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.7)]"
          >
            {navItems.map((item) => {
              const isActive = pathname === item.href || (pathname === "/" && item.href.startsWith("/#"));
              const Icon = item.icon;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative flex items-center justify-center p-3 rounded-full transition-all duration-500 group",
                    isActive 
                      ? "text-primary" 
                      : "text-foreground/40 hover:text-foreground"
                  )}
                >
                  <Icon className="w-5 h-5 relative z-10 transition-transform group-hover:scale-110" />
                  <span className="sr-only">{item.name}</span>
                  
                  {isActive && (
                    <>
                      <motion.div
                        layoutId="active-pill"
                        className="absolute inset-0 bg-primary/10 dark:bg-primary/20 rounded-full"
                        transition={{ type: "spring", bounce: 0.25, duration: 0.8 }}
                      />
                      <motion.div
                        layoutId="active-glow"
                        className="absolute inset-0 bg-primary/5 blur-md rounded-full -z-10"
                        transition={{ type: "spring", bounce: 0.25, duration: 0.8 }}
                      />
                    </>
                  )}
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-full mb-6 px-4 py-2 glass rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 pointer-events-none shadow-xl border border-white/10">
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap">
                      {item.name}
                    </span>
                  </div>
                </Link>
              );
            })}
            <div className="w-px h-6 bg-foreground/10 mx-2" />
            <div className="p-1">
              <ThemeToggle />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingNav;
