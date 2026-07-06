// Single source of truth for project data
// Rule: Do NOT hardcode project arrays in page files
//
// Media: place cover.webp and demo.webm (or demo.mp4) in public/projects/{id}/

export type ProjectCategory = "Web" | "E-Commerce";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  stack: string[];
  live?: string;
  github?: string;
  year: string;
  /** Cover image path under /public */
  image: string;
  /** Optional gallery images */
  gallery?: string[];
  /** Demo video path under /public (webm preferred for size) */
  video?: string;
  /** Fallback mp4 if webm not supported */
  videoMp4?: string;
}

export const projects: Project[] = [
  {
    id: "nexus-homes",
    title: "Nexus Homes",
    category: "Web",
    description:
      "A premium real-estate website built to turn property browsing into qualified lead generation with a polished brand presence.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Lead Gen"],
    live: "https://nexushomes.in",
    year: "2024",
    image: "/projects/nexus-homes/nexus.png",
    video: "/projects/nexus-homes/demo.webm",
    videoMp4: "/projects/nexus-homes/demo.mp4",
  },
  {
    id: "spice-market",
    title: "Spice Market",
    category: "E-Commerce",
    description:
      "A modern commerce experience for a specialty food brand that needed richer storytelling around products and collections.",
    stack: ["Next.js", "E-Commerce", "Tailwind CSS", "Stripe", "Storytelling"],
    year: "2024",
    image: "/projects/spice-market/spice.png",
    video: "/projects/spice-market/demo.webm",
    videoMp4: "/projects/spice-market/demo.mp4",
  },
  {
    id: "waffle-forever",
    title: "Waffle Forever",
    category: "Web",
    description:
      "A modern restaurant website designed to showcase menu offerings, brand identity, and customer engagement.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Restaurant", "Brand"],
    year: "2024",
    image: "/projects/waffle-forever/waffle.png",
    video: "/projects/waffle-forever/demo.webm",
    videoMp4: "/projects/waffle-forever/demo.mp4",
  },
  {
    id: "melody-store",
    title: "Melody Store",
    category: "E-Commerce",
    description:
      "A stylish online shopping experience focused on product discovery and conversion.",
    stack: ["Next.js", "E-Commerce", "Tailwind CSS", "Product Discovery"],
    year: "2024",
    image: "/projects/melody-store/melody.png",
    video: "/projects/melody-store/demo.webm",
    videoMp4: "/projects/melody-store/demo.mp4",
  },
  {
    id: "blackmint-labs",
    title: "BlackMint Labs",
    category: "Web",
    description:
      "A modern agency website showcasing services, portfolio, and digital expertise.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "SEO"],
    live: "https://blackmintlabs.com",
    year: "2025",
    image: "/projects/blackmint-labs/labs.png",
    video: "/projects/blackmint-labs/demo.webm",
    videoMp4: "/projects/blackmint-labs/demo.mp4",
  },
  {
    id: "q-diagnostic",
    title: "Q Diagnostic",
    category: "Web",
    description:
      "A healthcare and diagnostic platform focused on accessibility and patient trust.",
    stack: ["Next.js", "TypeScript", "Healthcare", "Accessibility", "Tailwind CSS"],
    year: "2025",
    image: "/projects/q-diagnostic/q.png",
    video: "/projects/q-diagnostic/q.png",
    videoMp4: "/projects/q-diagnostic/demo.mp4",
  },

  {
    id: "the bakelan bakery",
    title: "The Bakelan Bakery",
    category: "Web",
    description:
      "A bakery website designed to showcase menu offerings, brand identity, and customer engagement.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Bakery", "Brand"],
    year: "2024",
    image: "/projects/the-bakelan-bakery/bakeland.jpeg",
    video: "/projects/the-bakelan-bakery/demo.webm",
    videoMp4: "/projects/the-bakelan-bakery/demo.mp4",
  },
  {
    id: "the bakelan bakery",
    title: "The Bakelan Bakery",
    category: "Web",
    description:
      "A bakery website designed to showcase menu offerings, brand identity, and customer engagement.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Bakery", "Brand"],
    year: "2024",
    image: "/projects/the-bakelan-bakery/bakeland.jpeg",
    video: "/projects/the-bakelan-bakery/demo.webm",
    videoMp4: "/projects/the-bakelan-bakery/demo.mp4",
  },


];

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}

export function getAllProjectIds(): string[] {
  return projects.map((project) => project.id);
}
