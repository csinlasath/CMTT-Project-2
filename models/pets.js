module.exports =  function(sequelize, DataTypes) {
    var Pet = sequelize.define("Pet", {
        petId: {
        type: DataTypes.INTEGER,
        allowNull: false, 
    },
      petName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 45]
      }
     },
      petType: {
        type: DataTypes.ARRAY,
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
        type: DataTypes.ARRAY,
        allowNull: false
      },
      age: {
        type: DataTypes.ARRAY,
        allowNull: false
      }
      });
  

   Pet.associate = models => {
    Pet.hasOne(models.Chart)
   
    }

    return Pet;
    
    };