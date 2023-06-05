const axios = require("axios");
const { response } = require("express");
const { API_KEY } = process.env;

function getRecipe(id) {
  const URL = `https://api.spoonacular.com/recipes/${id}/information?api_key=${API_KEY}`;

  axios(URL)
    .then((response) => {
      const { id, title, image, summary } = response.data;

      const receta = { id, name: title, image, summary };

      if (receta != "") {
        return receta;
      } else {
        console.log("No existe receta con el id establecido");
      }
    })
    .catch((error) => {
      console.log("Existe un error en la petición realizada");
    });
}

function getRecipeByID(req, res) {
  const { idRecipe } = req.params;
  console.log(idRecipe);
  try {
    const recetaID = getRecipe(idRecipe);
    console.log(recetaID);
    res.status(202).json(recetaID);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

module.exports = getRecipeByID;
