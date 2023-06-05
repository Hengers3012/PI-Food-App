// const axios = require("axios");
// const { response } = require("express");
// const { API_KEY } = process.env;

// function getRecipe(id) {
//   const URL = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${API_KEY}&addRecipeInformation=true`;

//   axios(URL)
//     .then((response) => {
//       const { id, title, image, summary } = response.data;

//       const receta = { id, name: title, image, summary };

//       if (receta != "") {
//         return receta;
//       } else {
//         console.log("No existe receta con el id establecido");
//       }
//     })
//     .catch((error) => {
//       console.log("Existe un error en la petición realizada");
//     });
// }

// function getRecipeByID(req, res) {
//   const { idRecipe } = req.params;
//   console.log(idRecipe);
//   try {
//     const recetaID = getRecipe(idRecipe);
//     console.log(recetaID);
//     res.status(202).json(recetaID);
//   } catch (error) {
//     res.status(404).json({ error: error.message });
//   }
// }

// module.exports = getRecipeByID;

const { Recipe, Diet } = require("../db");
const model = require("../Data/DataInfo.js");
//getRecipe
// Obtener el detalle de una receta en particular
// Debe traer solo los datos pedidos en la ruta de detalle de receta
// Incluir los tipos de dieta asociados
const getRecipeByID = async (req, res) => {
  try {
    const { id } = req.params;
    if (id) {
      const recipes = await model.allData();
      //en caso de que se haya ingresado un id
      const recipesID = await recipes.filter((r) => r.id == id);
      recipesID.length
        ? res.send(recipesID[0])
        : res.status(404).send("No se encontró receta");
    } else {
      //en caso de que no se haya ingresado un id
      res.send("Ingresar un ID por favor");
    }
  } catch (err) {
    console.log(err);
  }
};
module.exports = getRecipeByID;
