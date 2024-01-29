/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: [
            "images.unsplash.com",
            "cdn.pixabay.com",
            "images.pexel.com",
            "img.freepik.com",
            "localhost"
        ]
    },
};
module.exports = nextConfig
