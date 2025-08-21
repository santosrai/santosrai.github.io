/** @type {import('next').NextConfig} */
const nextConfig = {
  // Basic configuration for WebContainer environment
  images: {
    domains: ['localhost'],
  },
  // Disable SWC minification
  swcMinify: false,
  // Output configuration for static export if needed
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;