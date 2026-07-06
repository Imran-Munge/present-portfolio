// Single source of truth for personal data
// Rule: Do NOT hardcode these values anywhere else in JSX

export const personalInfo = {
  name: "Imran Munge",
  title: "Founder & CEO of Blackmint Labs",
  roles: ["AI Engineer", "Full Stack Developer", "Tech Entrepreneur"],
  description:
    "I build AI-powered products, scalable web applications, and automation systems that solve real-world problems.",
  siteUrl: "https://imranmunge.com", // Replace with actual domain if known
  calLink: "https://cal.com/imranmunge/15min",
  location: "Mumbai, India",
} as const;

export const socialLinks = {
  linkedin: "https://linkedin.com/in/imranmunge",
  github: "https://github.com/Imran-Munge",
  twitter: "https://twitter.com/imranmunge",
  email: "mailto:hello@blackmintlabs.com",
} as const;

export const seoKeywords = [
  "Imran Munge",
  "Blackmint Labs",
  "AI Engineer India",
  "Full Stack Developer Portfolio",
  "Founder & CEO Blackmint Labs",
  "Next.js Developer Mumbai",
  "AI Automation Expert",
] as const;
