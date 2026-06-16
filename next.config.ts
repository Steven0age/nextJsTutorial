import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here 
  How to deplay on Github can be read here: https://github.com/orgs/community/discussions/191018 */
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [{ hostname: "stephan-haak.com" }],
  },
  basePath: "/nextJsTutorial",
  assetPrefix: "/nextJsTutorial/",
};

export default nextConfig;
