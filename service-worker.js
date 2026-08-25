const CACHE_NAME = "qcnm-opd-v2";

const FILES_TO_CACHE = [
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];


self.addEventListener(
"fetch",
event => {

event.respondWith(

fetch(event.request)

.catch(
() =>
caches.match(
event.request
)
)

);

});



self.addEventListener(
  "fetch",
  event => {

    event.respondWith(

      caches.match(
        event.request
      )
      .then(
        response => {

          return response ||
          fetch(
            event.request
          );

        }
      )

    );

  }
);
