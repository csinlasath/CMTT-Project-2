const db = require("../models");

module.exports = function (server) {

    server.get("/api/appointments/all", (req, res) => {
        var query = {};
        if (req.query.pet_id) {
            query.petId = req.query.pet_id;
        }
        db.appointment.findAll({
            where: query,
            include: [db.Pet]
        }).then((dbAppointment) => {
            return res.json(dbAppointment);
        });

        console.log("Sent Back All Appointment Data");
    });

    server.get("/api/appointments/appointment-id/:appointmentId", (req, res) => {
        db.appointment.findOne({
            where: {
                id: req.params.appointmentId
            }
        }).then((dbAppointment) => {
            return res.json(dbAppointment);
        });

        console.log("Sent Back Appointment Data");
    });

    server.get("/api/appointments/pet-id/:petId", (req, res) => {
        db.appointment.findAll({
            where: {
                petId: req.params.petId
            },
            include: [db.Pet]
        }).then((dbAppointment) => {
            return res.json(dbAppointment);
        });
        console.log("Sent Back Appointment Data");
    });

    server.post("/api/appointments/add/:petId", (req, res) => {
        console.log(req.body);
        db.appointment.create({
            date: req.body.date,
            userId: req.params.petId
        }).then((dbAppointment) => {
            return res.json(dbAppointment);
        });

        res.status(204).end();
        console.log("Appointment was ADDED");
    });

    server.delete("/api/appointments/remove/:appointmentId", (req, res) => {
        db.appointment.destroy({
            where: {
                id: req.params.appointmentId
            }
        }).then((dbAppointment) => {
            return res.json(dbAppointment);
        });

        console.log("Appointment was DELETED");
    });

    server.delete("/api/appointments/remove/all", (req, res) => {
        db.appointment.destroy({}).then((dbAppointment) => {
            return res.json(dbAppointment);
        });

        console.log("ALL Appointments was DELETED");
    });

    server.put("/api/appointments/update/:updateId", (req, res) => {
        console.log(req.body);
        db.appointment.update(req.body, {
            where: {
                id: req.body.updateId
            }
        }).then((dbAppointment) => {
            return res.json(dbAppointment);
        });
        
        console.log("Appointment was UPDATED");
    });
}