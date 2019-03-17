module.exports = (sequelize, DataTypes) => {
  const appointment = sequelize.define("appointment", {
    type: DataTypes.STRING,
    date: DataTypes.DATE
  });
  appointment.associate = models => {
    appointment.belongsTo(models.pet, {
      foreignKey: {
        field: "petId"
      },
      type: DataTypes.INTEGER
    });

    return appointment;
  };
};
