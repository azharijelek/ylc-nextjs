if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return n[e]||(a=new Promise(async a=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=a}else importScripts(e),a()})),a.then(()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]})},a=(a,n)=>{Promise.all(a.map(e)).then(e=>n(1===e.length?e[0]:e))},n={require:Promise.resolve(a)};self.define=(a,s,c)=>{n[a]||(n[a]=Promise.resolve().then(()=>{let n={};const i={uri:location.origin+a.slice(1)};return Promise.all(s.map(a=>{switch(a){case"exports":return n;case"module":return i;default:return e(a)}})).then(e=>{const a=c(...e);return n.default||(n.default=a),n})}))}}define("./sw.js",["./workbox-c2b5e142"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/AiIl7TBVuXR_7VOrjjVQ2/_buildManifest.js",revision:"5d16cf4e22ffb08761fdcadfefc198f1"},{url:"/_next/static/AiIl7TBVuXR_7VOrjjVQ2/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/chunks/12.6cc0ce748bdc703abef5.js",revision:"7e3230f19ec08e61d1c1847eacd1171e"},{url:"/_next/static/chunks/701e55b9450706e1e000a5c1b3746a90803fda45.0fb51d4162a704d492e6.js",revision:"e99bf09ad25ac1498991837721077109"},{url:"/_next/static/chunks/71247caf95475e3ea7f9a0f8a30beb258b23d005.894ae3a9ee13c6390abe.js",revision:"ce17623952f6c97e7d329a53bbc527ae"},{url:"/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.e5de13c418ff98211334.js",revision:"fb9adc62f2034a116e14d728325abe3a"},{url:"/_next/static/chunks/framework.5bb7deae9daf1b0ed0d0.js",revision:"74e2884781b65b1f8656ee9a44d64e84"},{url:"/_next/static/chunks/main-26ab511caabceeb61132.js",revision:"092d0e16c30cbebff0993fc66c5ed157"},{url:"/_next/static/chunks/pages/_app-de0eb46b0b4ab60c48c9.js",revision:"2222624d3571ec571005b58244a44f2f"},{url:"/_next/static/chunks/pages/_error-5efcade778114a255845.js",revision:"141c627c0661c83a10d0cc1fef94f982"},{url:"/_next/static/chunks/pages/about-1aea25bd9307ef6d5a63.js",revision:"1a94534170f7f5271c12856e48908ac3"},{url:"/_next/static/chunks/pages/blog-dec17934e3e9920b7510.js",revision:"aed7386bb244e60e0416d03ed4d3fa24"},{url:"/_next/static/chunks/pages/index-6f545af5a1bc998ce086.js",revision:"cac1906d92e36f49d5025ab07b7c9e68"},{url:"/_next/static/chunks/polyfills-fa276ba060a4a8ac7eef.js",revision:"d6e6a8bc3994b844b391066d75421272"},{url:"/_next/static/chunks/webpack-869e62a68ee066dba1c9.js",revision:"baeb8f2f5426b3fff68934a56dc1cba2"},{url:"/_next/static/css/c384161cad403f79936d.css",revision:"1b541653f9e544d04bf679ef3f7297e5"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/icons/android-icon-192x192-dunplab-manifest-11123.png",revision:"a183b429fad09f68474fa3e964891fd9"},{url:"/icons/apple-icon-114x114-dunplab-manifest-11123.png",revision:"d33cd6bb355de0b131cdfbfff00786f5"},{url:"/icons/apple-icon-120x120-dunplab-manifest-11123.png",revision:"90e760fe56d538b8238de67774ad5ce2"},{url:"/icons/apple-icon-144x144-dunplab-manifest-11123.png",revision:"31d94ebdb79d6baa3a2c79d2c1b4c165"},{url:"/icons/apple-icon-152x152-dunplab-manifest-11123.png",revision:"8093e0efa1dadeeaab7bf96ac22f3f1d"},{url:"/icons/apple-icon-180x180-dunplab-manifest-11123.png",revision:"77b598c07028a1bc7a67c9e604bb32a8"},{url:"/icons/apple-icon-57x57-dunplab-manifest-11123.png",revision:"25de07fc1f6b669a003a399ed273fa82"},{url:"/icons/apple-icon-60x60-dunplab-manifest-11123.png",revision:"8cc70bc571bed24df3505f05baed2b68"},{url:"/icons/apple-icon-72x72-dunplab-manifest-11123.png",revision:"46ef0f67d98716863916dfce59d09b25"},{url:"/icons/apple-icon-76x76-dunplab-manifest-11123.png",revision:"5e4dee09a1c4174081087c82aa626c82"},{url:"/icons/favicon-16x16-dunplab-manifest-11123.png",revision:"f229efc914457d2a573d93557ab00473"},{url:"/icons/favicon-32x32-dunplab-manifest-11123.png",revision:"64819a98e74de24a663ef19c4c4b3e02"},{url:"/icons/favicon-96x96-dunplab-manifest-11123.png",revision:"74f8f7c4ce95105d4003ede7d3ad8038"},{url:"/manifest.json",revision:"55d79ab5a36e65d96856db292bf961e8"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
