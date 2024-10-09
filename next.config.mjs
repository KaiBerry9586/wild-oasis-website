/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // Use the protocol (http or https)
        hostname: "gjkjrnllsviegbbrjfui.supabase.co", // Your Supabase domain
        port: "", // Specify port if needed, otherwise leave as empty string
        pathname: "/storage/v1/object/public/cabin-images/**", // Match the image path
      },
    ],
  },
};

export default nextConfig;
