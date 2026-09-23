import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blog.redbus.in",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
      {
        protocol: "https",
        hostname: "www.dadabhagwan.org",
      },
      {
        protocol: "https",
        hostname: "s7ap1.scene7.com",
      },
    ],
  },
};

export default nextConfig;