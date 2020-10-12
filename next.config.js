const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public',
    register: true,
    scope: '/',
  },
  env: {
    'WP_API_URL': process.env.WP_API_URL,
    'IMG_OPT_URL': process.env.IMG_OPT_URL,
    'SECRET_COOKIE_PASSWORD': process.env.SECRET_COOKIE_PASSWORD,
  },
  trailingSlash: true,
})