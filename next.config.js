/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,  // This skips ESLint during build
  },
};

module.exports = nextConfig;

