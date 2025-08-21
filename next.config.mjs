/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false,
  experimental: {
    forceSwcTransforms: false,
  },
  compiler: {
    // Disable SWC and use Babel instead
    removeConsole: false,
  },
};

export default nextConfig;
