/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'test-upload-s3-rogerdev.s3.ap-southeast-1.amazonaws.com', 'karen-givi-bucket.s3.ap-southeast-1.amazonaws.com', 'source.unsplash.com'],
  },
  env: {
    mapbox_key: 'pk.eyJ1IjoiZGl5ZGl5eWRpeXl5IiwiYSI6ImNsMDN4ZDc2dTA2bXAzZW53Y3o0YWJoeXAifQ.0U679u57gA-TslK-PsTZcQ',
    gmaps_key: 'AIzaSyBEZeE2yHsb3z-Y64ZyKzOCBr-k35loguE'
  },
}

module.exports = nextConfig
