import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/test",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

export default nextConfig;
