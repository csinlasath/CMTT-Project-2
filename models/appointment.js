module.exports = (sequelize, DataTypes) => {
  const appointment = sequelize.define("appointment", {
    type: DataTypes.STRING,
    date: DataTypes.DATE,
  });
  appointment.associate = models => {
    appointment.belongsTo(models.record)
      
  };

  return appointment;
};