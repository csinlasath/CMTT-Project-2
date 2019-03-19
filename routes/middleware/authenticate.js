require('dotenv').config();
var firebase = require('firebase');
var config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
}
if (!firebase.apps.length) {
    firebase.initializeApp(config);
}
require('firebase/auth');

module.exports = {
    isAuthenticated: function(req, res, next) {
        var user = firebase.auth().currentUser;
        console.log(user);
        if (user !== null) {
            req.user = user;
            next()
        }
        else {
            res.redirect("/login");
        }
    }
}