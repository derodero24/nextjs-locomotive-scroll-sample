/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
});

const nextConfig = {
  // commentout for the Bug of locomotive-scroll scrollTo()
  // reactStrictMode: true,
};

module.exports = withPWA(nextConfig);
