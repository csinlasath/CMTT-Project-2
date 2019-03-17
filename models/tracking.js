module.exports = (sequelize, DataTypes) => {
  const tracking = sequelize.define("tracking", {
    foodMeal: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 45]
      }
    },

    foodMeasure: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1, 45]
      }
    },

    foodNotes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },

    waterMeasure: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1, 45]
      }
    },

    waterMeal: {
      type: DataTypes.STRING,
      allowNull: false
    },

    waterNotes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },

    urine: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        len: [1, 45]
      },

      urineMeasure: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
          len: [1, 45]
        },

        urineColor: {
          type: DataTypes.INTEGER,
          allowNull: true,
          validate: {
            len: [1, 45]
          },

          stool: {
            type: DataTypes.INTEGER,
            allowNull: true
          },

          stoolMeasure: {
            type: DataTypes.INTEGER,
            allowNull: true
          },

          stoolColor: {
            type: DataTypes.INTEGER,
            allowNull: true
          },

          stoolNotes: {
            type: DataTypes.STRING,
            allowNull: true
          },

          medicineName: {
            name: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1, 45]
            }
          },

          medicineMeasure: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
              len: [1, 45]
            }
          },

          medicineTime: {
            type: DataTypes.INTEGER,
            allowNull: false
          },

          medicineMeal: {
            type: DataTypes.STRING,
            allowNull: true
          },

          medicineNotes: {
            type: DataTypes.STRING,
            allowNull: true
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
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
              len: [1, 45]
            }
          },

          exerciseTimeHours: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
              len: [1, 45]
            }
          },

          exerciseNotes: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              len: [1, 45]
            }
          },

          weight: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
              len: [1, 45]
            }
          }
        }
      }(
        (tracking.associate = models => {
          tracking.belongsTo(models.pet, {
            foreignKey: { 
              field: petId,
              allowNull: false }
          });

          return tracking;
        })
      )
    }
  });
};
