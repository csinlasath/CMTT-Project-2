const db = require("../models");

module.exports = function (server) {

    server.get("/api/log/all", (req, res) => {
        var query = {};
        if (req.query.user_id) {
            query.petId = req.query.pet_id;
        }
        db.logger.findAll({
            where: query,
            include: [db.pet]
        }).then((dbLog) => {
            return res.json(dbLog);
        });

        console.log("Sent Back All Food Data");
    });

    server.get("/api/log/:foodLogId", (req, res) => {
        db.logger.findOne({
            where: {
                id: req.params.foodLogId
            },
            include: [db.pet]
        }).then((dbLog) => {
            return res.json(dbLog);
        });

        console.log("Sent Back Food Data");
    });

    server.get("/api/log/:petId/all", (req, res) => {
        db.logger.findAll({
            where: {
                petId: req.params.userId
            },
            include: [db.pet]
        }).then((dbLog) => {
            return res.json(dbLog);
        });

        console.log("Sent Back Food Data");
    });

    server.post("/api/log/add/:petId", (req, res) => {
        console.log(req.body);
        db.logger.create({
            logType: req.body.logType,
            foodName: req.body.foodName,
            foodMeal: req.body.foodMeal,
            foodMeasure: req.body.foodMeasure,
            foodNotes: req.body.foodNotes,
            waterMeasure: req.body.waterMeasure,
            waterMeal: req.body.waterMeal,
            waterNotes: req.body.waterNotes,
            urine: req.body.urine,
            urineMeasure: req.body.urineMeasure,
            urineColor: req.body.urineColor,
            stool: req.body.stool,
            stoolMeasure: req.body.stoolMeasure,
            stoolColor: req.body.stoolColor,
            stoolNotes: req.body.stoolNotes,
            medicineName: req.body.medicineName,
            medicineMeasure: req.body.medicineMeasure,
            medicineTime: req.body.medicineTime,
            medicineMeal: req.body.medicineMeal,
            medicineNotes: req.body.medicineNotes,
            exerciseType: req.body.exerciseType,
            exerciseTimeMinutes: req.body.exerciseTimeMinutes,
            exerciseTimeHours: req.body.exerciseTimeHours,
            exerciseNotes: req.body.exerciseNotes,
            weight: req.body.weight,
            weightNotes: req.body.weightNotes,
            petId: req.params.petId
        }).then((dbLog) => {
            res.status(204);
            return res.json(dbLog);
        });

        console.log("Food was ADDED");
    });

    server.delete("/api/log/remove/:petId", (req, res) => {
        db.logger.destroy({
            where: {
                id: req.params.petId
            }
        }).then((dbLog) => {
            return res.json(dbLog)
        });

        console.log("Food was DELETED");
    });

    server.delete("/api/log/remove/all", (req, res) => {
        db.logger.destroy({}).then((dbLog) => {
            return res.json(dbLog);
        });

        console.log("ALL Food were DELETED");
    });

    server.put("/api/log/update/:updateId", (req, res) => {
        console.log(req.body);
        db.logger.update(req.body, {
            where: {
                id: req.body.updateId
            }
        }).then((dbLog) => {
            return res.json(dbLog);
        });

        console.log("Food was UPDATED");
    });
}