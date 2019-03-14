module.exports = (sequelize, DataTypes) => {
    const Chart = sequelize.define("chart", {
      vetFirstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 45]
        },
      vetLastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 45]
        }
      },
      telephone: {
        type: DataTypes.STRING,
        allowNull: false
      },
      image: DataTypes.TEXT
    });
  
  
    Chart.associate = models => {
      Chart.hasMany(models.appointments, {
        foreignKey: { allowNull: false }
      });
    };
  
    return Chart;
  };
  
  
  