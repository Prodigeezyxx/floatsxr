import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [25, 50, 75, 100],
    remotePatterns: [
      new URL("https://images.unsplash.com/**"),
    ],
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
