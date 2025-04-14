import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: true,
  images: {
    domains: ["localhost", "companyscore-images.ams3.digitaloceanspaces.com"],
  },
  trailingSlash: false,
};

export default nextConfig;
