"use strict";var precacheConfig=[["/index.html","e3ae3ad3d55c1af31a67bc97de148dd2"],["/static/css/main.f08e84ec.css","ba57303782dd22743ca8a31d63257265"],["/static/js/main.e30f6c2d.js","aac369941fb381bab98bf645acc89665"],["/static/media/CRM.65ff740d.png","65ff740df1928d435fb9177fbef4553a"],["/static/media/CRM.c282cc6c.svg","c282cc6c92116d598f40adb41d7ac339"],["/static/media/CRMST.2b49c503.png","2b49c503af12e72746f4d766401c5b84"],["/static/media/Challenge.7b1a5975.jpg","7b1a59759b55dbc25cc7f729df8de50e"],["/static/media/Creative.c4d2dd45.jpg","c4d2dd45129199dddfd0db69983d0740"],["/static/media/Credible.d77b7ebc.jpg","d77b7ebcc64a2544f68d2ff6b120574a"],["/static/media/EMR.778f937f.svg","778f937fdf70e4afb09fe5500bcd92ab"],["/static/media/EMR.7b3988b7.svg","7b3988b7dd3323df511331b6c446f64e"],["/static/media/ERP.6639535e.svg","6639535e6e20cf60c918fa81f75bfaff"],["/static/media/ERP.f5edaa25.svg","f5edaa25a2ff32f2a6546b299cb6164b"],["/static/media/HP.4058e2af.png","4058e2afe7b3516a790a365b25598024"],["/static/media/MS.51b99d14.png","51b99d14e39b37266b7b6c9fa5c2e548"],["/static/media/OCS.49c49dc6.svg","49c49dc6286da8341b475be796937938"],["/static/media/OCS.9aeeb9f4.png","9aeeb9f48fad4d2bd4e2e815429e2b03"],["/static/media/TBiz.449828f0.png","449828f0cabd4c68a5a4afe879fb42d0"],["/static/media/VOIP.b11c0900.svg","b11c0900c4645639154c8f7d7467da16"],["/static/media/businessContent.63c16071.svg","63c1607141032baa853faaa6b80206a4"],["/static/media/cloud.269f8a35.svg","269f8a357fa95eb509cf71d761377377"],["/static/media/connect.7199aaff.svg","7199aaffed2d12cbda46004e8fe48ee3"],["/static/media/iEMR.5b051cea.svg","5b051ceaebfb49a46ddc609c86cd7764"],["/static/media/iEMR.bfd809a1.svg","bfd809a167a61c0eba96c85ef30e4fb4"],["/static/media/mPOC.130061f4.svg","130061f4fb2f20f5da40b9c7efb185d4"],["/static/media/metrologo.22cef2d3.png","22cef2d39b292f1c221b40ed28cd8f13"],["/static/media/phone.19b6be6c.jpg","19b6be6c23df163557dcb227a703b744"],["/static/media/서비스 구성도.e198d7fc.svg","e198d7fcb185776d703af2d2fad903b8"],["/static/media/조직도.690fc4b2.svg","690fc4b2e86ccb517d876f79f64668c6"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),a=urlsToCacheKeys.has(t));var n="/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(n,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});