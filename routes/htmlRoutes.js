var authenticate = require("./middleware/authenticate");

module.exports = function (server) {
    server.get("/dashboard", (req, res) => {
        res.redirect("/dashboard");
    })
}