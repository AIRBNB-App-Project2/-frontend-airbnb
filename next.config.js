/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'test-upload-s3-rogerdev.s3.ap-southeast-1.amazonaws.com'],
  },
  env: {
    mapbox_key: 'pk.eyJ1IjoiZGl5ZGl5eWRpeXl5IiwiYSI6ImNrenl4aWhlbTAxdXQzaXFvc2EyMGIwYXAifQ.uR0QxT6hcFRAOTWoCs9jfQ'
  },
}

module.exports = nextConfig
