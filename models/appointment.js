module.exports = function(sequelize, DataTypes) {
    const Appointment = sequelize.define("appointment", {
      type: DataTypes.STRING,
      date: DataTypes.DATE,
    });
    Appointment.associate = models => {
      Appointment.belongsTo(models.pet, {
        foreignKey: {
          field: "petId"
        },
        type: DataTypes.INTEGER
      });
    };
    return Appointment;
  };