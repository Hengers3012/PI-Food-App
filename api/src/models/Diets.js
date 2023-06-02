const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("diets", {
    //crear el ID no es necesario ya que suequelize me otorga un ID automaticamente que es suficiente para nuestro uso.
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
