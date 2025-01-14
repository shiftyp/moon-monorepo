import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  async rewrites() {
    return [
      {
        source: '/auth/:path*',
        destination: 'https://auth-restless-thunder-1487.fly.dev/auth/:path*',
      },
    ]
  },
};

export default nextConfig;
