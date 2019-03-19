module.exports = (sequelize, DataTypes) => {
  const logger = sequelize.define("logger", {
    logType: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    foodName: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 45]
      }
    },

    foodMeal: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 45]
      }
    },

    foodMeasure: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 45]
      }
    },

    foodNotes: {
      type: DataTypes.STRING,
      allowNull: true
    },

    waterMeasure: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 45]
      }
    },

    waterMeal: {
      type: DataTypes.STRING,
      allowNull: true
    },

    waterNotes: {
      type: DataTypes.STRING,
      allowNull: true
    },

    urine: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 45]
      }
    },

    urineMeasure: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 45]
      }
    },

    urineColor: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 45]
      }
    },

    stool: {
      type: DataTypes.STRING,
      allowNull: true
    },

    stoolMeasure: {
      type: DataTypes.STRING,
      allowNull: true
    },

    stoolColor: {
      type: DataTypes.STRING,
      allowNull: true
    },

    stoolNotes: {
      type: DataTypes.STRING,
      allowNull: true
    },

    medicineName: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 45]
      }
    },

    medicineMeasure: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 45]
      }
    },

    medicineTime: {
      type: DataTypes.STRING,
      allowNull: true
    },

    medicineMeal: {
      type: DataTypes.STRING,
      allowNull: true
    },

    medicineNotes: {
      type: DataTypes.STRING,
      allowNull: true
    },

    exerciseType: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 45]
      }
    },

    walk: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 45]
      }
    },

    run: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 45]
      }
    },

    play: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 45]
      }
    },

    other: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 45]
      }
    },

    exerciseTimeMinutes: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 45]
      }
    },

    exerciseTimeHours: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 45]
      }
    },

    exerciseNotes: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    weight: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 45]
      }
    },

    weightNotes: {
      type: DataTypes.STRING,
      allowNull: true,
    },

  });

  logger.associate = models => {
    logger.belongsTo(models.pet, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return logger;
};








