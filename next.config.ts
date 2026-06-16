import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{ hostname: "stephan-haak.com" }],
  },
};

export default nextConfig;
