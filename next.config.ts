import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/island-hopper",
  assetPrefix: "/island-hopper/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
