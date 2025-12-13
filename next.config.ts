import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    inlineCss: true,
    globalNotFound: true,
  }
};

export default nextConfig;
