var fetch = require('isomorphic-unfetch');

require('dotenv').config();
var devEnv = process.env.NODE_ENV !== 'production';
var server = devEnv ? "http://localhost:3000" : "https://cmatt-project-2.herokuapp.com";

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
      admin.auth().verifyIdToken(idToken).then((decodedToken) => {
        var currentFbUserId = decodedToken.uid;
        var fetchURL = `${server}/api/users/firebase/${currentFbUserId}`;
        var currentDBUserId;
        var redirectURL;
        fetch(fetchURL).then(res => res.json()).then((data) => {
          currentDBUserId = data.id;
          redirectURL = `${server}/pets?userId=${currentDBUserId}`;
        });
        res.redirect("/pets");
      }).catch((err) => {
        next();
      });
    } else {
      next();
    }
  };
}

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
  server.use(checkIfSignedIn("/login"));

  require("./routes/userRoutes")(server);
  require("./routes/petRoutes")(server);
  require("./routes/loggerRoutes")(server);
  require("./routes/appointmentRoutes")(server);
  require("./routes/recordRoutes")(server);

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  var db = require("./models");

  db.sequelize
    .sync({ force: false })
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
