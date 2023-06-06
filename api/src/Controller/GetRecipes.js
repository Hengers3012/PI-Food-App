const { Diet } = require("../db");
const allData_Info = require("../Data/All_Data_Info");
const data = require("../../data.json");
//model
//   allData => getRecipeInfo
//   allDbData,
//   allApiData,

const getRecipeInfo = async (req, res) => {
  try {
    const { name } = req.query;
    // este name puede ser nombre de receta o tipo de dieta
    const recipeInfo = await allData_Info();
    if (name) {
      let queryDiet = await Diet.findOne({
        where: { name: name.toLowerCase() },
      });
      if (queryDiet) {
        //caso dietQuery
        let byDietQuery = await recipeInfo.filter((r) => {
          let names = r.diets.map((d) => d.name);
          if (names.includes(name)) return r;
        });
        byDietQuery.length
          ? res.status(200).send(byDietQuery)
          : res
              .status(400)
              .send("No existen recetas con el tipo de dieta indicado");
      } else {
        //caso recipeQuery
        let recipeQuery = await recipeInfo.filter((r) =>
          r.name.toLowerCase().includes(name.toString().toLowerCase())
        );
        recipeQuery.length
          ? res.status(200).send(recipeQuery)
          : res.status(400).send("No existen recetas con ese nombre");
      }
    }
    //en caso de que no haya query name, devuelvo todo
    else res.status(200).send(recipeInfo);
  } catch (err) {
    console.log(err);
  }
};
module.exports = getRecipeInfo;

// function getRecipe(name) {
//   return `Retornamos la receta correspondiente al nombre solicitado: ${name}`;
// }

// function getRecipeInfo(req, res) {
//   const { name } = req.query;

//   if (name != "") {
//     const receta = getRecipe(name);
//     res.send(receta);
//   } else {
//     res.send(
//       "Afirmamos si los datos de las receta buscada por el nombre ya se entregaron"
//     );
//   }
// }
