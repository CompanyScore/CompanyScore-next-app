const nextConfig = {
  productionBrowserSourceMaps: true,
  trailingSlash: false,
  images: {
    domains: [
      "localhost",
      "companyscore-images.ams3.digitaloceanspaces.com",
      "companyscore-images.ams3.cdn.digitaloceanspaces.com",
    ],
  },
};

export default nextConfig;
