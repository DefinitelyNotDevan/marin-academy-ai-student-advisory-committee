/** @type {import('next').NextConfig} */
const repo = "marin-academy-ai-student-advisory-committee";
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  /* Enable static HTML export so the site can be hosted on GitHub Pages */
  output: "export",
  images: { unoptimized: true },
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}` : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? `/${repo}` : "",
  },
};

export default nextConfig;
