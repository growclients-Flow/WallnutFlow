/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'avatar.vercel.sh',
      },
    ],
  },

  turbopack: {
    root: "C:/Users/Sachi/Desktop/New folder/my-web-app",
  },

};

module.exports = nextConfig;


