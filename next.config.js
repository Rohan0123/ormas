/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true
};

const env = {
  customKey: 'my-value'
};

module.exports = {
  nextConfig,
  env
};
