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
        protocol: 'https',
        hostname: 'www.centuryrealestate.in',
        port: '',
        pathname: '/**'
      },
    ]
  },
};

export default nextConfig;