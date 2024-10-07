/** @type {import('next').NextConfig} */
// const dns = require('dns');
// dns.setDefaultResultOrder('ipv4first');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['http://87.248.150.89:4100'],
    remotePatterns: [
      { protocol: 'http', hostname: '127.0.0.1' },
      { protocol: 'http', hostname: '87.248.150.89' },
    ],
  },
};

module.exports = nextConfig;
