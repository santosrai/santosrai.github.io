/** @type {import('next').NextConfig} */
const nextConfig = {
  // Completely disable SWC
  swcMinify: false,
  experimental: {
    forceSwcTransforms: false,
    swcTraceProfiling: false,
  },
  // Use Terser for minification instead of SWC
  webpack: (config, { dev, isServer }) => {
    // Disable SWC loader
    if (!dev && !isServer) {
      config.optimization.minimizer = config.optimization.minimizer.filter(
        (minimizer) => minimizer.constructor.name !== 'SwcMinifyPlugin'
      );
    }
    return config;
  },
};

export default nextConfig;
