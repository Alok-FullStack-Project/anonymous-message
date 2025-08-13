import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   eslint: {
    ignoreDuringBuilds: true, // ✅ ESLint won't block builds
  },
};

export default nextConfig;
