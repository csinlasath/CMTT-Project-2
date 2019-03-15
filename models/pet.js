module.exports = (sequelize, DataTypes) => {
  const pet = sequelize.define("pet", {
    petName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 45]
      }
    },
    petType: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 45]
      }
    },
    breed: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 45]
      }
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dob: {
      date: DataTypes.DATE,
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  pet.associate = models => {
    pet.belongsTo(models.user);
  };

  pet.associate = models => {
    pet.hasOne(models.chart);
  };

  return pet;
};
