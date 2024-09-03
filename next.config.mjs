/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
      },
      {
        protocol: 'https',
        hostname: "wpuwdfgketkcwixrjcio.supabase.co",
      },
      {
        protocol: "https",
        hostname: "legrbgxzorcxpooaukvr.supabase.co",
      },
    ],
  },
};

export default nextConfig;
