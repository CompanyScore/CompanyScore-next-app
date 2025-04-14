import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: true,
  images: {
    domains: [
      "localhost",
      "api.companyscore.net",
      "images.companyscore.net",
      "companyscore.net",
    ],
  },
  trailingSlash: false,
};

export default nextConfig;
