const db = require("../models");

module.exports = function (server) {

    server.get("/api/users/all", (req, res) => {
        db.user.findAll({}).then((dbUser) => {
            return res.json(dbUser);
        });

        console.log("Sent Back All User Data");
    });

    server.get("/api/users/user/:userId", (req, res) => {
        db.user.findOne({
            where: {
                id: req.params.userId
            }
        }).then((dbUser) => {
            return res.json(dbUser);
        });

        console.log("Sent Back User Data");
    });

    server.get("/api/users/:userId/pets", (req, res) => {
        db.pet.findAll({
            where: {
                userId: req.params.userId
            },
            include: [db.user]
        }).then((dbUser) => {
            return res.json(dbUser);
        });
        console.log("Sent Back Pets Data for User");
    });

    server.post("/api/users/add", (req, res) => {
        console.log(req.body);
        db.user.create({
            email: req.body.email,
            firebaseUID: req.body.firebaseUID
        }).then((dbUser) => {
            return res.json(dbUser);
        });

        res.status(204).end();
        console.log("User was ADDED");
    });

    server.delete("/api/users/remove/:userId", (req, res) => {
        db.user.destroy({
            where: {
                id: req.params.userId
            }
        }).then((dbUser) => {
            return res.json(dbUser);
        });

        console.log("User was DELETED");
    });

    server.delete("/api/users/remove/all", (req, res) => {
        db.user.destroy({}).then((dbUser) => {
            return res.json(dbUser);
        });
        
        console.log("ALL Users were DELETED");
    });

    server.put("/api/users/update/:updateId", (req, res) => {
        console.log(req.body);
        db.user.update(req.body, {
            where: {
                id: req.body.updateId
            }
        }).then((dbUser) => {
            return res.json(dbUser);
        });

        console.log("User was UPDATED");
    });
}