/** @type {import('next').NextConfig} */
// const dns = require('dns');
// dns.setDefaultResultOrder('ipv4first');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['87.248.150.89', 'api.sabzum.ir', 'www.api.sabzum.ir'],
    remotePatterns: [
      { protocol: 'http', hostname: '127.0.0.1' },
      { protocol: 'http', hostname: '87.248.150.89' },
      { protocol: 'http', hostname: 'sabzum.ir' },
      { protocol: 'http', hostname: 'api.sabzum.ir' },
    ],
  },
};

module.exports = nextConfig;
