module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define("user", {
    provider: {
      type: DataTypes.STRING,
      allowNull: false
    },

    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    firstName: {
      type: DataTypes.STRING,
      allowNull: true
    },

    lastName: {
      type: DataTypes.STRING,
      allowNull: true
    },

    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: true
    },

    photoURL: {
      type: DataTypes.STRING,
      allowNull: true
    },

    firebaseUID: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }

  });

  user.associate = models => {
    user.hasMany(models.pet, {
      onDelete: "cascade",
      foreignKey: {
        allowNull: false
      }
    });
  };
  
  return user;
};
