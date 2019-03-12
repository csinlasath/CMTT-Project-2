/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
require("dotenv").config();
const express = require("express");
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const db = require("./models");

app
  .prepare()
  .then(() => {
    const server = express();
    const PORT = process.env.PORT || 3000;

    server.use(express.urlencoded({ extended: false }));
    server.use(express.json());
    server.use(express.static("pages"));

    //REQUIRE THE ROUTES HERE
    server.get("/p/:id", (req, res) => {
      const actualPage = "/post";
      const queryParams = { id: req.params.id };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(PORT, err => {
      if (err) {
        throw err;
      }
      console.log(">App is Ready and Listening on http://localhost:" + PORT);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
