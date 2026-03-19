/** @type {import('next').NextConfig} */
const nextConfig = {
  /* Enable static HTML export so the site can be hosted on GitHub Pages */
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
