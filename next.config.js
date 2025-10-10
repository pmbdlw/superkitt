/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')

const nextConfig = {
  i18n,
  reactStrictMode: true,
  images: {
    // Add your custom image domains here when you add real images
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'your-cdn.com',
    //     port: '',
    //     pathname: '/**',
    //   },
    // ],
  },
}

module.exports = nextConfig
