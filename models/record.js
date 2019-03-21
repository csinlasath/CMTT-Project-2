module.exports = (sequelize, DataTypes) => {
  const record = sequelize.define("record", {
    vetFirstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 45]
      }
    },

    vetLastName: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 45]
      }
    },

    vetPhone: {
      type: DataTypes.STRING,
      allowNull: true
    },

    weight: {
      type: DataTypes.STRING,
      allowNull: true
    },

    diagnosis: {
      type: DataTypes.STRING,
      allowNull: true
    },

    prescriptions: {
      type: DataTypes.STRING,
      allowNull: true
    },

    symptoms: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    notes: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });

  record.associate = models => {
    // record.hasMany(models.appointment, {
    //   onDelete: "cascade",
    //   foreignKey: { 
    //     allowNull: false 
    //   }
    // });
    record.belongsTo(models.pet, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return record;
};
