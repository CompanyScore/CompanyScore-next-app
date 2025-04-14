import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: true,
  images: {
    domains: [
      "localhost",
      "digitaloceanspaces.com",
      "ams3.digitaloceanspaces.com",
      "companyscore-images.ams3.digitaloceanspaces.com",
      "companyscore-images.ams3.cdn.digitaloceanspaces.com",
    ],
  },
  trailingSlash: false,
};

export default nextConfig;
