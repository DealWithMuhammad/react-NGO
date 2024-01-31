/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // images: {
  //   domains: [
  //     "images.unsplash.com",
  //     "cdn.pixabay.com",
  //     "images.pexel.com",
  //     "img.freepik.com",
  //     "drive.google.com",
  //     "localhost",
  //   ],
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};
module.exports = nextConfig;
