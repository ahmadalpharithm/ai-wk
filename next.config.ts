import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "avatars.githubusercontent.com",
        },
        {
          protocol: "https",
          hostname: "lh3.googleusercontent.com",
        },
        {
          protocol: "https",
          hostname: "randomuser.me",
        },
      ],
    }
  /* config options here */
};

export default nextConfig;
