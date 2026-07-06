import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: "D:/portfolio/immubhai",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
