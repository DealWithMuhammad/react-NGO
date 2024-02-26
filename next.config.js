/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
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
    // unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};
module.exports = nextConfig;
