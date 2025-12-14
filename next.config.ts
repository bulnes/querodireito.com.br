import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    cssChunking: true,
    inlineCss: true,
    useLightningcss: true,
  },

  // 🖼️ Compressão e imagens otimizadas
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 dias
  },
};

export default nextConfig;
