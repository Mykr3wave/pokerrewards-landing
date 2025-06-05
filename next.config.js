/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // All images are served from /public, so this can remain empty.
    // If you later need external domains, add them under remotePatterns.
    remotePatterns: []
  }
};

module.exports = nextConfig;
