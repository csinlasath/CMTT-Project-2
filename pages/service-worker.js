var config = {
    apiKey: "AIzaSyDjkXALCW34tlzUum78_lpDSkytaTHHBnA",
    authDomain: "pet-track-63483.firebaseapp.com",
    databaseURL: "https://pet-track-63483.firebaseio.com",
    projectId: "pet-track-63483",
    storageBucket: "pet-track-63483.appspot.com",
    messagingSenderId: "697781297758"
};

importScripts("https://www.gstatic.com/firebasejs/5.9.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/5.9.0/firebase-auth.js");

firebase.initializeApp(config);

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
        if (self.location.origin == getOriginFromUrl(event.request.url) &&
            (self.location.protocol == 'https:' ||
                self.location.hostname == 'localhost') &&
            idToken) {
            const headers = new Headers();
            for (let entry of req.headers.entries()) {
                headers.append(entry[0], entry[1]);
            }
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