/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  output: "export",
  basePath: "/nextjs-github-pages",
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
