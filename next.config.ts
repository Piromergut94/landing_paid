import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/",
          destination: "/paid_pitch_landing_v4.html",
        },
        {
          source: "/presentaciones/:name([^.]*)",
          destination: "/presentaciones/:name.html",
        },
      ],
    };
  },
};

export default nextConfig;
