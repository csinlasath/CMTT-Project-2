module.exports = function(sequelize, DataTypes) {
  const user = sequelize.define("user", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  user.associate = models => {
    user.hasMany(models.pet, {
      foreignKey: {
        field: "petId",
        allowNull: false
      }
    });

    return user;
  };
};
