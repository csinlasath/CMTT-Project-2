module.exports = (sequelize, DataTypes) => {
  const exercise = sequelize.define("exercise", {
    activity: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 45]
      }
    }
  });

  exercise.associate = models => {
    exercise.belongsTo(models.pet, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return exercise;
};
