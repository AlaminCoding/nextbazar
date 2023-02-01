/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

// module.exports = nextConfig;
module.exports = {
  images: {
    domains: ["i.postimg.cc"],
    formats: ["image/avif", "image/webp"],
  },
  reactStrictMode: true,
};
