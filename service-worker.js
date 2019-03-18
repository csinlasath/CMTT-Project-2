/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

importScripts(
  "/precache-manifest.41fb9e2106379bc649016eb621749246.js"
);

workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/index.html", {
  
  blacklist: [/^\/_/,/\/[^\/]+\.[^\/]+$/],
});

// Initialize the Firebase app in the service worker script.
firebase.initializeApp(config);

/**
 * Returns a promise that resolves with an ID token if available.
 * @return {!Promise<?string>} The promise that resolves with an ID token if
 *     available. Otherwise, the promise resolves with null.
 */
const getIdToken = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            unsubscribe();
            if (user) {
                user.getIdToken().then((idToken) => {
                    resolve(idToken);
                }, (error) => {
                    resolve(null);
                });
            } else {
                resolve(null);
            }
        });
    });
};

const getOriginFromUrl = (url) => {
    // https://stackoverflow.com/questions/1420881/how-to-extract-base-url-from-a-string-in-javascript
    const pathArray = url.split('/');
    const protocol = pathArray[0];
    const host = pathArray[2];
    return protocol + '//' + host;
};

self.addEventListener('fetch', (event) => {
    const requestProcessor = (idToken) => {
        let req = event.request;
        // For same origin https requests, append idToken to header.
        if (self.location.origin == getOriginFromUrl(event.request.url) &&
            (self.location.protocol == 'https:' ||
                self.location.hostname == 'localhost') &&
            idToken) {
            // Clone headers as request headers are immutable.
            const headers = new Headers();
            for (let entry of req.headers.entries()) {
                headers.append(entry[0], entry[1]);
            }
            // Add ID token to header.
            headers.append('Authorization', 'Bearer ' + idToken);
            try {
                req = new Request(req.url, {
                    method: req.method,
                    headers: headers,
                    mode: 'same-origin',
                    credentials: req.credentials,
                    cache: req.cache,
                    redirect: req.redirect,
                    referrer: req.referrer,
                    body: req.body,
                    bodyUsed: req.bodyUsed,
                    context: req.context
                });
            } catch (e) {
                // This will fail for CORS requests. We just continue with the
                // fetch caching logic below and do not pass the ID token.
            }
        }
        return fetch(req);
    };
    // Fetch the resource after checking for the ID token.
    // This can also be integrated with existing logic to serve cached files
    // in offline mode.
    event.respondWith(getIdToken().then(requestProcessor, requestProcessor));
});

// In service worker script.
self.addEventListener('activate', event => {
    event.waitUntil(clients.claim());
});