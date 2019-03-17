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
    pet.hasMany(models.user, {
      foreignKey: { 
        field: userId,
        allowNull: false }
    });
  };

  pet.associate = models => {
    pet.hasOne(models.record, {
      foreignKey: { 
        field: recordId,
        allowNull: false },
    });

    return pet;
  };

  
}
