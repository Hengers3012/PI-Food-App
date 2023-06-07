//-----------------------------------------------------------------------------
//-             Controler para obtener la receta atravez de su ID             -
//-----------------------------------------------------------------------------
// En este Controller (getRecipe_ID), realizaremos 3 cosas:
// 1. Obtener el detalle de una receta en particular através del ID. "✔"
// 2. Debe traer solo los datos pedidos en la ruta de detalle de receta. "✔"
// 3. Incluir los tipos de dieta asociados. "✔"

const allData_Info = require("../Data/All_Data_Info");

const getRecipeByID = async (req, res) => {
  try {
    const { id } = req.params;

    if (id) {
      const recipeData = await allData_Info();

      //Si se ingresa un ID, busco la receta con el ID recibido.
      const recipeID = await recipeData.filter((element) => element.id == id);

      recipeID.length
        ? res.send(recipeID[0])
        : res.status(404).send("No existe receta con el id establecido.");
    } else {
      //Si no se ingresa un ID, respondo con el siguiente mensaje, para que ingrecen un ID.
      res.send("Favor de ingresar un ID.");
    }
  } catch (err) {
    console.log(err);
  }
};
module.exports = getRecipeByID;

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
