const withPWA = require('next-pwa')

// module.exports = {
//     devIndicators: {
//         autoPrerender: false,
//     },
// }

module.exports = withPWA({
    webpack(config, { dev }) {
        if (dev) {
            config.devServer = {
                compress: true, 
                historyApiFallback: true,
                hot: true, 
                noInfo: true,
                host: '0.0.0.0',
                clientLogLevel: 'silent',
                stats: 'errors-only'
            };
        }
        return config
    },
    devIndicators: {
        autoPrerender: false,
    },
    pwa: {
        dest: 'public'
    },
    compress: true,
    trailingSlash: true,
    target: 'server',
    poweredByHeader: false,
    generateEtags: false,
})