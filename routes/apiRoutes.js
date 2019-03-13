/* eslint-disable no-unused-vars */
const db = require("../models");

module.exports = (app) => {

    // GET route for getting all of the todos
    app.get("/api/petProfiles", (req, res) => {
      // findAll returns all entries for a table when used with no options
      db.petProfiles.findAll({}).then( (dbpetProfiles) => {
        // We have access to the todos as an argument inside of the callback function
        res.json(dbpetProfiles);
      });
    });
}