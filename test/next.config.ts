import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/test",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === "production" ? "/test" : "",
};

export default nextConfig;
