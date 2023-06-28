const allDataBDD = require("../Data/Data_BDD");

const getRecipesBDD = async (req, res) => {
  try {
    const { id } = req.params;

    if (id.include()) {
      const recipeData = await allDataBDD();

      //Si se ingresa un ID, busco la receta con el ID recibido.
      const recipeID = await recipeData.filter((element) => element.id == id);

      recipeID.length
        ? res.status(200).send(recipeID[0])
        : res.status(404).send("No existe receta con el id establecido.");
    } else {
      //Si no se ingresa un ID, respondo con el siguiente mensaje, para que ingrecen un ID.
      res.send("Favor de ingresar un ID.");
    }
  } catch (err) {
    console.log(err);
  }
};
module.exports = getRecipesBDD;
