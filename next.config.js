/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [{
      source: '/',
      destination: '/bung',
      permanent: true,
    }]
  }
}

module.exports = nextConfig
