/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    swcPlugins: [
      [
        'use-client',
        {
          include: ['@siyuqian/commerce-ui'],
        },
      ],
    ],
  },
};

export default nextConfig;
