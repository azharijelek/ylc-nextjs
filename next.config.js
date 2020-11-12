const withPWA = require('next-pwa')
const nextBuildId = require('next-build-id')

module.exports = withPWA({
  generateBuildId: () => nextBuildId({ dir: __dirname }),
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public',
    register: true,
    scope: '/'
  },
  env: {
    WP_API_URL: process.env.WP_API_URL,
    IMG_OPT_URL: process.env.IMG_OPT_URL,
    SECRET_COOKIE_PASSWORD: process.env.SECRET_COOKIE_PASSWORD,
    APPHOST: process.env.APPHOST
  },
  generateEtags: true,
  poweredByHeader: false,
  compress: true,
  trailingSlash: true
})
