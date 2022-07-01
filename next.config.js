// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
}

module.exports = nextConfig

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  }
})
