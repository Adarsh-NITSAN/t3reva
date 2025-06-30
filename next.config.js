/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')()

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 't3-reva.ddev.site',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 't3reva.thebetaspace.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 't3-reva.t3planet.com',
        port: '',
        pathname: '/**',
      },
    ],
    unoptimized: true,
  },
}

module.exports = withNextIntl(nextConfig)
