if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return c[e]||(a=new Promise(async a=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=a}else importScripts(e),a()})),a.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},a=(a,c)=>{Promise.all(a.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(a)};self.define=(a,s,n)=>{c[a]||(c[a]=Promise.resolve().then(()=>{let c={};const i={uri:location.origin+a.slice(1)};return Promise.all(s.map(a=>{switch(a){case"exports":return c;case"module":return i;default:return e(a)}})).then(e=>{const a=n(...e);return c.default||(c.default=a),c})}))}}define("./sw.js",["./workbox-c2b5e142"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/128a548a881ea903f7e43dbc9bce4dfb227d2c41.3e385772dc763f6a083a.js",revision:"f8aaf67a5a70db924c9ea65560170d6c"},{url:"/_next/static/chunks/16.a41e53659c2b78a94991.js",revision:"14b077b828e9cf7921198f3950bfdb69"},{url:"/_next/static/chunks/17.2b5d937074c9d038e14d.js",revision:"df0cd2fc7f8c868c224d55322d515fca"},{url:"/_next/static/chunks/435e2b4f6369ef60e5110dd2964ce85fca53eb47.9631189ebdfbab11413c.js",revision:"77db747886fd415255b9755e73b3f969"},{url:"/_next/static/chunks/46cb5690b4bc96a3809ebd6f6434c876cc7aabd9.b3239e03c9ce495c8ec8.js",revision:"330afd0c197e438bd85020e6a175125d"},{url:"/_next/static/chunks/71247caf95475e3ea7f9a0f8a30beb258b23d005.5ac99513b3bb44ab1de8.js",revision:"b5b1d99df350447acb796d3c73d1d9a1"},{url:"/_next/static/chunks/c833527b1e23064a987e7d4f11808436375328d7.7f44c459c13cb9842a3d.js",revision:"322b43180547104c5a4e5ef760efd5ff"},{url:"/_next/static/chunks/framework.15d2bace796d79622eca.js",revision:"74e2884781b65b1f8656ee9a44d64e84"},{url:"/_next/static/chunks/main-efaca6dcc1268d4a8a5f.js",revision:"cd96774bead6e51e81c9170f62126470"},{url:"/_next/static/chunks/pages/_app-28b9e4ad1de87179eb04.js",revision:"0c82d0cbeeea9f70901ff271055bb6da"},{url:"/_next/static/chunks/pages/_error-912df90ed040036b79b4.js",revision:"cb50f73ee478f696af2aa342c092ff97"},{url:"/_next/static/chunks/pages/about-5db70dd133c861567fa2.js",revision:"7e31ddb8437677708063369cb770005e"},{url:"/_next/static/chunks/pages/blog-329d44adbaec4d26d55b.js",revision:"ebf5bbf6d3e5891c07cd952de18672eb"},{url:"/_next/static/chunks/pages/index-2ce29c83a2f109c6d755.js",revision:"a03fab794f46676a6e350a608739dad7"},{url:"/_next/static/chunks/pages/member/login-8db54ba6bea52f630fb2.js",revision:"33cff7a43389958c9f7201335106b038"},{url:"/_next/static/chunks/pages/profile-sg-cd69a69bf50efaa670ff.js",revision:"72faafbc07ca4bf57ae71284bd97043b"},{url:"/_next/static/chunks/polyfills-e5012cf49fbb0a2642db.js",revision:"03cf8d0f2720a3ed786ea3c4fd75711d"},{url:"/_next/static/chunks/webpack-1d7f163df278b8859bcb.js",revision:"3a018c9ffab48f54f5fb2cb17971bec1"},{url:"/_next/static/css/1ff641ed0e8eec43fa0f.css",revision:"2cf50c60049773a0261955e0b770317c"},{url:"/_next/static/gi8_nkfU_eMEuRub2VkLc/_buildManifest.js",revision:"cd9b48df3d9f765d1f64a37375b0495f"},{url:"/_next/static/gi8_nkfU_eMEuRub2VkLc/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/favicon.ico",revision:"e268be7c051d29a592a24c3ecc21cd29"},{url:"/icons/android-icon-192x192-dunplab-manifest-18305.png",revision:"948901932045bc78904966aa8355f12a"},{url:"/icons/apple-icon-114x114-dunplab-manifest-18305.png",revision:"c6f795c2be78da0dd64739fb6be16331"},{url:"/icons/apple-icon-120x120-dunplab-manifest-18305.png",revision:"3af22b886e1594a5b57bfc091c4ae9e5"},{url:"/icons/apple-icon-144x144-dunplab-manifest-18305.png",revision:"a5e162cf53aaab7a2d1b1c59f09af19d"},{url:"/icons/apple-icon-152x152-dunplab-manifest-18305.png",revision:"4b5a4273802d63d50962140681c57f45"},{url:"/icons/apple-icon-180x180-dunplab-manifest-18305.png",revision:"ce50fb96db483010466b2c9cf3a411e2"},{url:"/icons/apple-icon-57x57-dunplab-manifest-18305.png",revision:"e8cd1b7b2a593dd693e2b8887c721da5"},{url:"/icons/apple-icon-60x60-dunplab-manifest-18305.png",revision:"147dccf7d07632849bc7a936cccb9d61"},{url:"/icons/apple-icon-72x72-dunplab-manifest-18305.png",revision:"78020ec1c9de26d854212d95b3154432"},{url:"/icons/apple-icon-76x76-dunplab-manifest-18305.png",revision:"a70e815d0213132ff05d3c88a014417f"},{url:"/icons/favicon-16x16-dunplab-manifest-18305.png",revision:"cb206e8186465d78beea30dd877a3577"},{url:"/icons/favicon-32x32-dunplab-manifest-18305.png",revision:"51177c2149ebf0a3c1f83d1643b0199b"},{url:"/icons/favicon-96x96-dunplab-manifest-18305.png",revision:"72552fb4f90d70235a33a9bd817ee034"},{url:"/icons/maskable.png",revision:"bbc5b7d46c7fa86203d24aad6aa5e2fc"},{url:"/icons/rsz_maskable.png",revision:"668987579bd7d6ae6efc994a57c1f377"},{url:"/icons/ylc-icon.png",revision:"8cef6591c4640d47e473a9f3682ba47d"},{url:"/manifest.json",revision:"ba55139bfd9fb7691b723aa49134f21f"},{url:"/static/logo.svg",revision:"fd58fb762beaed155905ad347d62c3cf"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
