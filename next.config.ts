import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cache Components stays off: Ant Design calls Math.random() while rendering,
  // which that mode rejects during prerendering.
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  experimental: {
    turbopackFileSystemCacheForDev: false,
  },
};

export default nextConfig;
