module.exports = (sequelize, DataTypes) => {
  const chart = sequelize.define("chart", {
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

  chart.associate = models => {
    chart.hasMany(models.appointment, {
      foreignKey: { allowNull: false }
    });
  };

  return chart;
};
