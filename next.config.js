/** @type {import('next').NextConfig} */
const nextConfig = {
  // No need to configure "images.domains" for local public/ files.
  // If you only use <img src="/foo.png" />, you don't need anything here.
  images: {
    // You can remove this entire `images` section if you're only using local assets.
    // But if you want to keep it, it must be at the root level, NOT under pages/.
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
