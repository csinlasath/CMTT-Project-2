module.exports = (sequelize, DataTypes) => {
    const petProfiles = sequelize.define("petProfiles", {
      petName: DataTypes.STRING,
      breed: DataTypes.STRING,
    });
    return petProfiles;
  };
  