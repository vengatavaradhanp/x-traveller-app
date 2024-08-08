/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  // React Strict Mode
  reactStrictMode: true,

  // Image optimization configuration
  images: {
    domains: ["reqres.in"], // Add your image domains here
  },

  // Internationalization (i18n) configuration
  i18n: {
    locales: ["en", "fr", "de"], // Add your locales here
    defaultLocale: "en", // Set your default locale here
  },

  // Environment variables
  env: {
    API_URL: process.env.REACT_APP_API_URL,
  },

  // Additional configuration options
  poweredByHeader: false, // Remove the X-Powered-By header
  trailingSlash: true, // Add trailing slash to URLs
};

export default nextConfig;
