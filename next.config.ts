import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/",
          destination: "/paid_pitch_landing_v4.html",
        },
      ],
    };
  },
};

export default nextConfig;
