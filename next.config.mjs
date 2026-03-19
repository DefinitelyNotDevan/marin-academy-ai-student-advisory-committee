/** @type {import('next').NextConfig} */
const repo = "marin-academy-ai-student-advisory-committee";
const nextConfig = {
  /* Enable static HTML export so the site can be hosted on GitHub Pages */
  output: "export",
  images: { unoptimized: true },
  basePath: `/${repo}`,
  assetPrefix: `/${repo}`,
};

export default nextConfig;
