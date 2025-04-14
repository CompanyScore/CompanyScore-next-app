import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: true,
  images: {
    domains: ["localhost", "companyscore-images.ams3.cdn.digitaloceanspaces.com"],
  },
  trailingSlash: false,
};

export default nextConfig;
