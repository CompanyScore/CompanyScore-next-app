import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: true,
  trailingSlash: false,
  output: 'standalone',
};

export default nextConfig;
