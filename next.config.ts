import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Kosongkan eksperimen turbopack / webpack agar build lancar
  webpack(config) {
    return config;
  },
};

export default nextConfig;
