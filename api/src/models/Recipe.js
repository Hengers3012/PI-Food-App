const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "recipe",
    {
      id: {
        // type: DataTypes.UUID,
        // defaultValue: DataTypes.UUIDV4,
        // allowNull: false,
        // primaryKey: true,
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // title: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      // },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      summary_of_the_dish: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      health_score: {
        type: DataTypes.INTEGER,
        validate: { min: 0, max: 100 },
      },
      instructions: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdInDb: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    { timestamps: false }
  );
};
