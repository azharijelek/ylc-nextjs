const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public',
    register: true,
    scope: '/',
  },
  env: {
    'WP_API_URL': process.env.WP_API_URL
  }
})