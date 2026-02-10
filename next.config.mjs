/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
  images: {
      domains: [
        'www.mpokket.in',
        'cdn.mpokket.in'
      ],
    },
};

export default nextConfig;
