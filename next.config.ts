import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: true,
  images: {
    unoptimized: true,
    // domains: [
    //   "companyscore-images.ams3.digitaloceanspaces.com",
    //   "companyscore-images.ams3.cdn.digitaloceanspaces.com",
    // ],
  },
  trailingSlash: false,
  output: 'standalone',
};

export default nextConfig;
