/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["tailwindui.com", "res.cloudinary.com"],
  },
  experimental: {
    appDir: true,
  },
}

export default nextConfig
