"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative flex items-center justify-center p-2.5 rounded-full transition-all duration-300 text-muted-foreground hover:text-foreground group"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 relative z-10" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 z-10" />
      <span className="sr-only">Toggle theme</span>
      
      {/* Tooltip */}
      <span className="absolute bottom-full mb-4 px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Toggle Theme
      </span>
    </button>
  );
}
