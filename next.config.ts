import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  images: {
      remotePatterns: [
          {
              protocol: 'https',
              hostname: '**.**.**',
              port: '',
              pathname: '/**/**'
          },
      ],
  },
  /*allowedDevOrigins: ['192.168.0.192', '192.168.1.2', '*.ngrok-free.app'],*/
};

export default nextConfig;
