// Single source of truth for personal data
// Rule: Do NOT hardcode these values anywhere else in JSX

export const personalInfo = {
  name: "Imran Munge",
  title: "Founder & CEO — Blackmint Labs",
  roles: ["AI Engineer", "Full Stack Developer", "Tech Entrepreneur"],
  description:
    "I build AI-powered products, scalable web applications, and real-world solutions.",
  siteUrl: "https://imranmunge.com",
  calLink: "https://cal.com/black-mint-labs-vgoabo/15min",
  location: "India (Global Remote)",
} as const;

export const socialLinks = {
  linkedin: "https://linkedin.com/in/imranmunge",
  github: "https://github.com/imranmunge",
  email: "mailto:hello@imranmunge.com",
} as const;

export const seoKeywords = [
  "Imran Munge",
  "Blackmint Labs",
  "AI Developer India",
  "Full Stack Developer",
  "Startup Founder",
  "AI Engineer India",
] as const;
