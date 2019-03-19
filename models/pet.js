module.exports = (sequelize, DataTypes) => {
  const pet = sequelize.define("pet", {
    petName: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    petType: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    breed: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    gender: {
      type: DataTypes.STRING,
      allowNull: true
    },

    dob: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    imageId: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });

  pet.associate = models => {
    pet.hasMany(models.logger, {
      onDelete: "cascade",
      foreignKey: {
        allowNull: false
      }
    });
    pet.hasOne(models.record, {
      onDelete: "cascade",
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
