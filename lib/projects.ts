// Single source of truth for project data
// Rule: Do NOT hardcode project arrays in page files

export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  github: string;
  live: string;
  year?: string;
  role?: string;
}

export const projects: Project[] = [
  {
    id: "phono-forensics",
    title: "Phono Forensics",
    description:
      "AI-powered forensic analysis system for audio signals and voice pattern investigation. Extracts insights, detects anomalies, and enables intelligent analysis using machine learning.",
    stack: ["Python", "Machine Learning", "Audio Processing", "AI"],
    github: "",
    live: "",
    year: "2024",
    role: "AI Lead",
  },
  {
    id: "nexus-homes",
    title: "Nexus Homes",
    description:
      "Transparent real estate platform with a real-review system. Eliminates fake listings and provides verified property insights for buyers and investors.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
    github: "",
    live: "",
    year: "2023",
    role: "Full Stack Engineer",
  },
  {
    id: "hand-gesture-controller",
    title: "Hand Gesture Controller",
    description:
      "AI-based Python system to control screen operations using real-time hand gesture recognition via computer vision.",
    stack: ["Python", "OpenCV", "MediaPipe", "Computer Vision"],
    github: "",
    live: "",
    year: "2022",
    role: "Computer Vision Eng.",
  },
  {
    id: "hand-gesture-game",
    title: "Hand Gesture Game",
    description:
      "Interactive game fully controlled using computer vision and real-time gesture recognition — no keyboard or mouse required.",
    stack: ["Python", "OpenCV", "MediaPipe", "Pygame"],
    github: "",
    live: "",
    year: "2022",
    role: "Developer",
  },
  {
    id: "spice-market",
    title: "Spice Market",
    description:
      "Full-stack import-export platform with authentication, product management, order handling, and a scalable backend.",
    stack: ["Next.js", "Node.js", "MongoDB", "Tailwind"],
    github: "",
    live: "",
    year: "2023",
    role: "Backend Lead",
  },
  {
    id: "movie-streaming-app",
    title: "Movie Streaming Web App",
    description:
      "Full-stack streaming platform with modern UI, user authentication, content management, and media playback.",
    stack: ["Next.js", "TypeScript", "Prisma", "Tailwind"],
    github: "",
    live: "",
    year: "2024",
    role: "Full Stack Developer",
  },
];
