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
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isDate: true
      }
    },

    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    imageId: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });

  pet.associate = models => {
    pet.hasMany(models.logger, {
      foreignKey: {
        allowNull: false
      }
    });
    pet.hasOne(models.record, {
      foreignKey: {
        allowNull: false
      }
    });
    pet.belongsTo(models.user, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return pet;
};
