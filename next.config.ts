import type { NextConfig } from "next";
import withPWA from 'next-pwa';

const nextConfig: NextConfig = {
  reactStrictMode: false,
  // turbopack: {}, // Silence webpack config warning from next-pwa (commented out as it might cause issues if not using turbopack explicitly)
};

export default withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
})(nextConfig);
