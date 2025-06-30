/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')();

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 't3reva-v13.ddev.site',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 't3reva-v13.thebetaspace.com',
        port: '',
        pathname: '/**',
      },
    ],
    unoptimized: true,
  },
  i18n: {
    locales: ['en', 'de'], // Adjust these based on your actual locales
    defaultLocale: 'en',
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en',
        permanent: true,
      },
    ];
  },
};

module.exports = withNextIntl(nextConfig);
