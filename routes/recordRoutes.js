const db = require("../models");

module.exports = function (server) {

    server.get("/api/records/all", (req, res) => {
        var query = {};
        if (req.query.pet_id) {
            query.petId = req.query.pet_id;
        }
        db.record.findAll({
            where: query,
            include: [db.pet]
        }).then((dbRecord) => {
            return res.json(dbRecord);
        });

        console.log("Sent Back All Record Data");
    });

    server.get("/api/records/record-id/:recordId", (req, res) => {
        db.record.findOne({
            where: {
                id: req.params.recordId
            }
        }).then((dbRecord) => {
            return res.json(dbRecord);
        });

        console.log("Sent Back Record Data");
    });

    server.get("/api/records/pet-id/:petId", (req, res) => {
        db.record.findAll({
            where: {
                petId: req.params.petId
            },
            include: [db.pet]
        }).then((dbRecord) => {
            return res.json(dbRecord);
        });
        console.log("Sent Back Record Data");
    });

    server.post("/api/records/add", (req, res) => {
        console.log(req.body);
        db.record.create({
            vetFirstName: req.body.vetFirstName,
            vetLastName: req.body.vetLastName,
            vetPhone: req.body.vetPhone,
            weight: req.body.weight,
            diagnosis: req.body.diagnosis,
            prescriptions: req.body.prescriptions,
            symptoms: req.body.symptoms,
            notes: req.body.notes

        }).then((dbRecord) => {
            res.status(204);
            return res.json(dbRecord);
        });

        console.log("Record was ADDED");
    });

    server.delete("/api/records/remove/:recordId", (req, res) => {
        db.record.destroy({
            where: {
                id: req.params.recordId
            }
        }).then((dbRecord) => {
            return res.json(dbRecord);
        });

        console.log("Record was DELETED");
    });

    server.delete("/api/records/remove/all", (req, res) => {
        db.record.destroy({}).then((dbRecord) => {
            return res.json(dbRecord);
        });
        
        console.log("ALL Records was DELETED");
    });

    server.put("/api/records/update/:updateId", (req, res) => {
        console.log(req.body);
        db.record.update(req.body, {
            where: {
                id: req.body.updateId
            }
        }).then((dbRecord) => {
            return res.json(dbRecord);
        });

        console.log("Record was UPDATED");
    });
}