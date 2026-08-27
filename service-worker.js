const CACHE_NAME = "qcnm-opd-shell-v1";

const APP_SHELL = [
  "./index.html",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];


self.addEventListener(
"install",
event => {

 event.waitUntil(

  caches.open(CACHE_NAME)
  .then(cache =>
    cache.addAll(APP_SHELL)
  )

 );

 self.skipWaiting();

});



self.addEventListener(
"activate",
event => {

 event.waitUntil(
  self.clients.claim()
 );

});



self.addEventListener(
"fetch",
event => {


 event.respondWith(

  fetch(event.request)

  .then(response => {

    return response;

  })

  .catch(() => {

    return caches.match(
      event.request
    )
    .then(cached => {

      return cached ||
      caches.match(
        "./index.html"
      );

    });

  })

 );

});
