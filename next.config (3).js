/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cryptoleakv3.vercel.app",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "coinpoker.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ggpoker.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.unibet.eu",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.bet365.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
