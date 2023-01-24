/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    baseUrl : process.env.URL,
    uid: process.env.ID,
  }
}

module.exports = nextConfig
