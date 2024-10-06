/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      { protocol: 'http', hostname: '127.0.0.1' },
      { protocol: 'http', hostname: '87.107.146.188' },
      { protocol: 'https', hostname: 'media.fardayeeghtesad.com' },
      { protocol: 'https', hostname: 'www.fardayeeghtesad.com' },
      { protocol: 'https', hostname: 'static3.eghtesadonline.com' },
      { protocol: 'https', hostname: 'static3.donya-e-eqtesad.com' },
      { protocol: 'https', hostname: 'www.melkana.com' },
      { protocol: 'https', hostname: 'static4.eghtesadnews.com' },
      { protocol: 'https', hostname: 'static3.ecoiran.com' },
      { protocol: 'https', hostname: 'www.daraian.com' },

    ],
  },
}

module.exports = nextConfig
