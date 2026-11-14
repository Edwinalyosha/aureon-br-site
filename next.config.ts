import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
  },
  // The free trial was dropped (2026-11); old links go to the consultation form.
  async redirects() {
    return [{ source: "/trial", destination: "/contact", permanent: false }];
  },
};

export default nextConfig;
