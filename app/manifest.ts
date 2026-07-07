import type { MetadataRoute } from "next";
import { personalInfo } from "@/lib/data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${personalInfo.name} — Portfolio`,
    short_name: personalInfo.name,
    description: personalInfo.description,
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#d2bb97",
    icons: [
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
