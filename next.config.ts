import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '2977',
        pathname: '/**'
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '2978',
        pathname: '/**'
      },
    ]
  },
};

export default nextConfig;