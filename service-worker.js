"use strict";var precacheConfig=[["/address-book/index.html","9bd215b5740a5f3ba7a651f20762f1f5"],["/address-book/static/css/main.802cfb1a.css","910f3bb8297a9a8e0c0a6fbe2950b541"],["/address-book/static/js/main.1fd9f10e.js","216bdb4bc1939b82a21e500ad2333e55"],["/address-book/static/media/bull.e4db9695.svg","e4db96958f26698b4664371f0b3769b8"],["/address-book/static/media/chick.4d4b5971.svg","4d4b5971b2aacae775c56893cf1e8f2c"],["/address-book/static/media/crab.47e7a89f.svg","47e7a89f5a083bc2395d5da3a285cbc4"],["/address-book/static/media/fox.73abaca0.svg","73abaca0820d226781fe9b1fd8a5e43c"],["/address-book/static/media/hedgehog.9b582b35.svg","9b582b359ff67300c304b42febb03226"],["/address-book/static/media/hippopotamus.674ca4b3.svg","674ca4b309a44fc50dceb30e50e786cc"],["/address-book/static/media/koala.62a21b74.svg","62a21b74d2301fdc574b3194a02a7d16"],["/address-book/static/media/lemur.c9de6a57.svg","c9de6a57f4d1ad8f11300a9fb38f7780"],["/address-book/static/media/tiger.36076082.svg","3607608240d981843ca426db9a52649d"],["/address-book/static/media/zebra.6d5e0dd7.svg","6d5e0dd71583bf86ff0872cc3d1244ad"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),n=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),e=urlsToCacheKeys.has(a));var n="/address-book/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});