/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/contents',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
