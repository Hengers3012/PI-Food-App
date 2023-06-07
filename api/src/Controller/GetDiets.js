//---------------------------------------------------------------------------------
//-            Controler para obtener los tipos de Dietas Disponibles             -
//---------------------------------------------------------------------------------
// En este Controller (getDiets), realizaremos 2 cosas:
// 1- Obtenemos todos los tipos de dieta disponibles.  "✔"
// 2- En una primera instancia, cuando no exista ninguna dieta,
//    deberán precargar la base de datos con los tipos de datos
//    indicados por spoonacular [acá](https://spoonacular.com/food-api/docs#Diets).  "✔"

const { Diet } = require("../db");

const getDiets = async (req, res) => {
  try {
    //
    const diets = await Diet.findAll();
    //
    diets.length
      ? res.send(diets)
      : res.send("Error al traer las dietas (Dietas no encontradas).");
    //
  } catch (error) {
    res.status(400).send("Error al solicitar las dietas.");
  }
};

module.exports = getDiets;
