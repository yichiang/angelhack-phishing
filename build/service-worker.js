"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","a25d0cafe62da7ae54d81c2c2887b451"],["static/css/main.9ca3512b.css","eff6b1f02740ee3a61d00fdcf640d2c5"],["static/js/main.e78be0b9.js","a6fa616bcafce85a7e5397a9bd7aef12"],["static/media/flags.9c74e172.png","9c74e172f87984c48ddf5c8108cabe67"],["static/media/glyphicons-halflings-regular.448c34a5.woff2","448c34a56d699c29117adc64c43affeb"],["static/media/glyphicons-halflings-regular.89889688.svg","89889688147bd7575d6327160d64e760"],["static/media/glyphicons-halflings-regular.e18bbf61.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["static/media/glyphicons-halflings-regular.f4769f9b.eot","f4769f9bdb7466be65088239c12046d1"],["static/media/glyphicons-halflings-regular.fa277232.woff","fa2772327f55d8198301fdb8bcfc8158"],["static/media/icons.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["static/media/icons.912ec66d.svg","912ec66d7572ff821749319396470bde"],["static/media/icons.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["static/media/icons.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["static/media/icons.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["static/media/loading.c5590569.svg","c5590569aab553af03722baa7d379978"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);t=urlsToCacheKeys.has(a);t||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted([],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});