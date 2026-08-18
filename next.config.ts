import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  basePath: "/bijoya-medicine-shop",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;