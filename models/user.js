module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define("user", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
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
