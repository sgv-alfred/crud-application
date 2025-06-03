import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    useCache: true,
  },
  images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'dummyimage.com',
      port: '',
      pathname: '/**',  
    },
  ],
},
};

export default nextConfig;
