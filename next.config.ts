import { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /close-on-gc\.js$/,
      loader: "null-loader",
    });
    return config;
  },
};

export default nextConfig;
