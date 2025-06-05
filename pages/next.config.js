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
    ],
  },
};

module.exports = nextConfig;
