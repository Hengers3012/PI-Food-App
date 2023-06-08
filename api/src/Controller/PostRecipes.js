//---------------------------------------------------------------------------------
//-                          Controler para crear recetas                         -
//---------------------------------------------------------------------------------
// En este Controller (postRecipes), realizaremos 2 cosas:
// 1. Toda la información debe ser recibida por body.  "✔"
// 2. Debe crear la receta en la base de datos, y esta debe estar relacionada
//    con los tipos de dieta indicados (al menos uno).  "✔"

const { Recipe, Diet } = require("../db");

const createRecipe = async (req, res) => {
  try {
    // Extraigo la información recibida por body.
    const {
      name,
      summary_of_the_dish,
      health_score,
      image,
      instructions,
      diet,
    } = req.body;

    // Creo la creta en la BDD
    const newRecipe = await Recipe.create({
      name,
      summary_of_the_dish,
      image,
      health_score,
      instructions,
    });

    // Relaciono la receta con los tipos de dietas indicados.
    diet.map(async (diets) => {
      const dietDBB = await Diet.findOrCreate({
        where: {
          name: diets,
        },
      });

      newRecipe.addDiet(dietDBB[0]);
    });
    //Si la receta se agrego correctamente a la BDD, respondo con el siguiente mensaje.
    res.send("¡Receta creada con éxito!");
    //
  } catch (error) {
    console.log(error);
  }
};

module.exports = createRecipe;
