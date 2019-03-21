module.exports = (sequelize, DataTypes) => {
  const appointment = sequelize.define("appointment", {
    date: {
      type: DataTypes.STRING,
      date: DataTypes.STRING
    },
    time: {
      type: DataTypes.STRING,
      time: DataTypes.STRING
    }
  });

  appointment.associate = models => {
    appointment.belongsTo(models.pet, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return appointment;
};
