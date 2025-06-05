/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cryptoleakv3.vercel.app',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'coinpoker.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ggpoker.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.unibet.eu',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
