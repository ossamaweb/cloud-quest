/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    DEFAULT_COURSE_ID: process.env.DEFAULT_COURSE_ID
  }
};


export default nextConfig;
