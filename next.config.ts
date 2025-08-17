import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig = {
  productionBrowserSourceMaps: true,
  trailingSlash: false,
  experimental: {
    optimizePackageImports: ['@tabler/icons-react', 'react-icons'],
  },
};

export default withNextIntl(nextConfig);
