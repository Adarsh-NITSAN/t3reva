/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')('./src/i18n.js');

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
};

module.exports = withNextIntl(nextConfig);
