/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'test-upload-s3-rogerdev.s3.ap-southeast-1.amazonaws.com'],
  },
}

module.exports = nextConfig
