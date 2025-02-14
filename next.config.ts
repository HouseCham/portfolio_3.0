import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'f005.backblazeb2.com'
      },
    ],
  },
};

export default nextConfig;
