if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,a,n)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const i={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return r;case"module":return i;default:return e(s)}}))).then((e=>{const s=n(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/12-9e55d60c69db38d864e1.js",revision:"oKgrGDuqe8KsLOLK74zCq"},{url:"/_next/static/chunks/546-9007e093a23320144a6f.js",revision:"oKgrGDuqe8KsLOLK74zCq"},{url:"/_next/static/chunks/679-bdf48dc6a4800d9b1530.js",revision:"oKgrGDuqe8KsLOLK74zCq"},{url:"/_next/static/chunks/837-7940988601947ff9f194.js",revision:"oKgrGDuqe8KsLOLK74zCq"},{url:"/_next/static/chunks/845-5d0c6eea7d5a3c3b131a.js",revision:"oKgrGDuqe8KsLOLK74zCq"},{url:"/_next/static/chunks/framework-1e6fa876f9b3a94ae3ac.js",revision:"oKgrGDuqe8KsLOLK74zCq"},{url:"/_next/static/chunks/main-871a3d34db02497e5a3d.js",revision:"oKgrGDuqe8KsLOLK74zCq"},{url:"/_next/static/chunks/pages/404-4262a3190d5bbe37ebc9.js",revision:"oKgrGDuqe8KsLOLK74zCq"},{url:"/_next/static/chunks/pages/_app-8523105d67d7a89e6cba.js",revision:"oKgrGDuqe8KsLOLK74zCq"},{url:"/_next/static/chunks/pages/_error-ef77a5a077663df606c5.js",revision:"oKgrGDuqe8KsLOLK74zCq"},{url:"/_next/static/chunks/pages/dashboard-7bb0567cfa567be79d5d.js",revision:"oKgrGDuqe8KsLOLK74zCq"},{url:"/_next/static/chunks/pages/episodes/%5Bslug%5D-71d44987d2d621259709.js",revision:"oKgrGDuqe8KsLOLK74zCq"},{url:"/_next/static/chunks/pages/index-45a6d9673ed3c9680561.js",revision:"oKgrGDuqe8KsLOLK74zCq"},{url:"/_next/static/chunks/polyfills-3d2c0f0875171918a758.js",revision:"oKgrGDuqe8KsLOLK74zCq"},{url:"/_next/static/chunks/webpack-be9716da460c7242ad7d.js",revision:"oKgrGDuqe8KsLOLK74zCq"},{url:"/_next/static/css/bbfbaade2e9194faa0f9.css",revision:"oKgrGDuqe8KsLOLK74zCq"},{url:"/_next/static/oKgrGDuqe8KsLOLK74zCq/_buildManifest.js",revision:"oKgrGDuqe8KsLOLK74zCq"},{url:"/_next/static/oKgrGDuqe8KsLOLK74zCq/_ssgManifest.js",revision:"oKgrGDuqe8KsLOLK74zCq"},{url:"/apple-icon.png",revision:"07717d5e7c78398ab549fac81db49a19"},{url:"/favicon.png",revision:"9a10a0c57853a065708f39c0cf7c8640"},{url:"/icon-1024x1024.png",revision:"07717d5e7c78398ab549fac81db49a19"},{url:"/icon-128x128.png",revision:"f944a36fa089827baff0c85f2265e5a6"},{url:"/icon-256x256.png",revision:"84bbba49f8419fbf82a2870291fc48f7"},{url:"/icon-512x512.png",revision:"1a3728b6addda79f67debdb58168f110"},{url:"/icons/arrow-left.svg",revision:"a4bec8983393a6650eeadc70ceaca3f1"},{url:"/icons/logo.svg",revision:"270fed2f85e264e3b1b678bb7fb3f2fd"},{url:"/icons/pause.svg",revision:"54841e81896727b41392f30ac032a7be"},{url:"/icons/play-green.svg",revision:"de07138a15303202044cb5e780d3fdd3"},{url:"/icons/play-next.svg",revision:"25a2b47e3cda80ad6285c6725bf9d5ba"},{url:"/icons/play-previous.svg",revision:"85b6ed81bd274cf318272535025f002b"},{url:"/icons/play.svg",revision:"4639f696f322c696dc52f91fdf2f6fcc"},{url:"/icons/playing.svg",revision:"2f05f6b73a93700697b0491d1b77370a"},{url:"/icons/repeat.svg",revision:"f61d9bb4e9c66d07ecb06fc5844a52c8"},{url:"/icons/shuffle.svg",revision:"34540ba61de3ff9c3fff2af2c9cad007"},{url:"/icons/simple-logo.svg",revision:"007f5e97a0722deccb3488b4970a6e91"},{url:"/images/blur.svg",revision:"d8d1af2d619e2ff01139f1fa7d33f32a"},{url:"/manifest.json",revision:"9c3e03c78752efb34024a04fefcc758e"},{url:"/robots.txt",revision:"3a830b976af1533d0385101e643439ff"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:r,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));