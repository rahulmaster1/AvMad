/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');

const settings = {
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
  },
};
const nextConfig = {
  reactStrictMode: true,
};

module.exports =
  process.env.NODE_ENV === 'development' ? nextConfig : withPWA(settings);
