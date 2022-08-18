/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;

/*
webpack: (config, { dev }) => {
    // Perform customizations to config
    config.node = {
      fs: "empty",
    };
    return config;
  },
*/
