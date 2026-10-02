import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["@splinetool/runtime"],
  // Dev only: lets a phone on the same Wi-Fi load the dev server's live
  // reload and fonts. Wildcards because the LAN address changes between
  // networks (192.168.29.x at one, 192.168.3.x at another).
  allowedDevOrigins: ["192.168.*.*"],
};

export default nextConfig;
