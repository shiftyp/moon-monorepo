import type { NextConfig } from "next";
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  pageExtensions: ['tsx', 'mdx', 'ts'],
  async rewrites() {
    return [
      {
        source: '/auth/:path*',
        destination: 'https://auth-restless-thunder-1487.fly.dev/auth/:path*',
      },
    ]
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
})

export default withMDX(nextConfig);
