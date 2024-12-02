import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Redirect non-www to www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'sintatteggs.com',
          },
        ],
        destination: 'https://www.sintatteggs.com/:path*',
        permanent: true,
      },
      // Redirect HTTP to HTTPS
      {
        source: '/:path*',
        has: [
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http',
          },
        ],
        destination: 'https://www.sintatteggs.com/:path*',
        permanent: true,
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        hostname: 'u3uwik5lvx1iudpn.public.blob.vercel-storage.com',
      },
    ],
  },
}

export default nextConfig
