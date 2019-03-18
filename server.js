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
firebase.initializeApp(config);
require('firebase/auth');
require('firebase/storage');

var admin = require('firebase-admin');
var serviceAccount = require('./config/pet-track-63483-firebase-adminsdk-dmy55-a0712ad960.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://pet-track-63483.firebaseio.com"
});

const getIdToken = (req) => {
  const authorizationHeader = req.headers.authorization || "";
  const components = authorizationHeader.split(" ");
  return components.length > 1 ? components[1] : "";
}

const checkIfSignedIn = (url) => {
  return (req, res, next) => {
    if (req.url == url) {
      const idToken = getIdToken(req);
      admin.auth().verifyIdToken(idToken).then((decodedClaims) => {
        res.redirect("/dashboard");
      }).catch(err => {
        next();
      });
    }
    else {
      next();
    }
  }
}

// const isAuthenticated = (req, res, next) => {
//   var user = firebase.auth().currentUser;
//   console.log("User")
//   console.log(user);
//   if (user !== null) {
//     req.user = user;
//     console.log("Passed");
//     console.log(req.user);
//   next();
//   }
//   else {
//     res.redirect("/login");
//     console.log("Failed");
//     console.log(req.body);
//   }
// }

const express = require("express");
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  const PORT = process.env.PORT || 3000;

  server.use(express.urlencoded({ extended: false }));
  server.use(express.json());
  server.use(express.static("pages"));
  server.use(checkIfSignedIn("/"));

  // server.get("/pets", isAuthenticated, (req, res) => {
  //   app.render(req, res);
  // });
  // server.get("/p/:id", (req, res) => {
  //   const actualPage = "/post";
  //   const queryParams = { title: req.params.id };
  //   app.render(req, res, actualPage, queryParams);
  // });


  server.get("*", (req, res) => {
    return handle(req, res);
  });

  var db = require("./models");

  db.sequelize
    .sync({ force: true })
    .then(() => {
      server.listen(PORT, err => {
        if (err) throw err;
        console.log(`>App is Ready and Listening on http://localhost: ${PORT}`);
      });
    })
    .catch(ex => {
      console.error(ex.stack);
      process.exit(1);
    });
});
