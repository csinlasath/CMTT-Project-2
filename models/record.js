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
      allowNull: false,
      validate: {
        len: [1, 45]
      }
    },

    vetPhone: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    weight: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    diagnosis: {
      type: DataTypes.STRING,
      allowNull: false
    },

    prescriptions: {
      type: DataTypes.STRING,
      allowNull: false
    },

    symptoms: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    notes: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

  record.associate = models => {
    record.hasMany(models.appointment, {
      foreignKey: { 
        field: appointmentId,
        allowNull: false }
    });
  };

  return record;
};
