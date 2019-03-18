// // Initialize the Firebase app in the service worker script.
// firebase.initializeApp(config);

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
            }
        }
        return fetch(req);
    };

    event.respondWith(getIdToken().then(requestProcessor, requestProcessor));
});


self.addEventListener('activate', event => {
    event.waitUntil(clients.claim());
});