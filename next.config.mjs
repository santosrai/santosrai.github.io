/** @type {import('next').NextConfig} */
const nextConfig = {
  // Output configuration for static export
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;