const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("recipe", {
    // id: {
    //   type: DataTypes.UUID,
    // },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    // image: {
    //   type: DataTypes.STRING,
    // },
    // summary_of_the_dish: {
    //   type: DataTypes.STRING,
    // },
    // health_score: {
    //   type: DataTypes.STRING,
    // },
    // step_by_step: {
    //   type: DataTypes.STRING,
    // },
  });
};
