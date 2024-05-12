/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "png.pngtree.com",
        port: "",
        pathname: "/background/20210712/original/**",
      },
      {
        protocol: "https",
        hostname: "rukminim1.flixcart.com",
        port: "",
        pathname: "image/**",
      },
      {
        protocol: "https",
        hostname: "tailwindui.com",
        port: "",
        pathname: " img/logos/**",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        port: "",
        pathname: "img/logos/**",
      },
    ],
  },
}
module.exports = nextConfig
