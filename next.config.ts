import type { NextConfig } from "next";

const [owner, repository] = (process.env.GITHUB_REPOSITORY ?? "").split("/");
const isProjectPages = Boolean(
  owner && repository && repository !== `${owner}.github.io`,
);
const basePath = process.env.GITHUB_ACTIONS === "true" && isProjectPages
  ? `/${repository}`
  : "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
