const db = require("../models");

module.exports = function (server) {

    server.get("/api/pets/all", (req, res) => {
        var query = {};
        if (req.query.user_id) {
            query.userId = req.query.user_id;
        }
        db.pet.findAll({
            where: query,
            include: [db.user]
        }).then((dbPets) => {
            return res.json(dbPets);
        });

        console.log("Sent Back All Pet Data");
    });

    server.get("/api/pets/pet-id/:petId", (req, res) => {
        db.pet.findOne({
            where: {
                id: req.params.petId
            },
            include: [db.user]
        }).then((dbPets) => {
            return res.json(dbPets);
        });

        console.log("Sent Back Pet Data");
    });

    server.get("/api/pets/:userId/all", (req, res) => {
        db.pet.findAll({
            where: {
                userId: req.params.userId
            },
            include: [db.pet]
        }).then((dbPets) => {
            return res.json(dbPets);
        });

        console.log("Sent Back Pet Data");
    });

    server.post("/api/pets/add", (req, res) => {
        console.log(req.body);
        db.pet.create({
            petName: req.body.petName,
            petType: req.body.petType,
            breed: req.body.breed,
            gender: req.body.gender,
            dob: req.body.dob,
            imageId: req.body.imageId,

        }).then((dbPets) => {
            return res.json(dbPets);
        });

        res.status(204).end();
        console.log("Pet was ADDED");
    });

    server.delete("/api/pets/remove/:petId", (req, res) => {
        db.pet.destroy({
            where: {
                id: req.params.petId
            }
        }).then((dbPets) => {
            return res.json(dbPets);
        });

        console.log("Pet was DELETED");
    });

    server.delete("/api/pets/remove/all", (req, res) => {
        db.pet.destroy({}).then((dbPets) => {
            return res.json(dbPets);
        });

        console.log("ALL Pets were DELETED");
    });

    server.put("/api/pets/update/:updateId", (req, res) => {
        console.log(req.body);
        db.pet.update(req.body, {
            where: {
                id: req.body.updateId
            }
        }).then((dbPets) => {
            return res.json(dbPets);
        });

        console.log("Pet was UPDATED");
    });
}