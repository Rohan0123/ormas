/** @type {import('next').NextConfig} */
const env = {
  customKey: 'my-value',
}
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = { nextConfig,env }
