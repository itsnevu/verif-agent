import type { NextConfig } from "next";
import withPWA from 'next-pwa';

const nextConfig: NextConfig = {
  reactStrictMode: false,
  turbopack: {}, // Satisfy Next.js 16 build requirements when plugins touch webpack
};

export default withPWA({
  dest: 'public',
  register: process.env.NEXT_PUBLIC_ENABLE_PWA === 'true',
  skipWaiting: true,
  disable: process.env.NEXT_PUBLIC_ENABLE_PWA !== 'true',
})(nextConfig);
