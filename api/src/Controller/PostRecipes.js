const { Recipe, Diet } = require("../db");

const createRecipe = async (req, res) => {
  try {
    const {
      name,
      summary_of_the_dish,
      health_score,
      image,
      instructions,
      diet,
    } = req.body;

    const newRecipe = await Recipe.create({
      name,
      summary_of_the_dish,
      image,
      health_score,
      instructions,
    });
    diet.map(async (diets) => {
      const dbDiet = await Diet.findOrCreate({
        where: {
          name: diets,
        },
      });
      newRecipe.addDiet(dbDiet[0]);
    });

    res.send("¡Receta creada con éxito!");
  } catch (err) {
    console.log(err);
  }
};

module.exports = createRecipe;
