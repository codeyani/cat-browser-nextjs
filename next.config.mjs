/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  env: {
    CAT_API: process.env.CAT_API,
  },
}

export default nextConfig;
