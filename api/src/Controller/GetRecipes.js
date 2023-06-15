//---------------------------------------------------------------------------------
//-     Controler para obtener la receta atravez de su Nombre o tipo de Dieta     -
//---------------------------------------------------------------------------------
// En este Controller (getRecipes), realizaremos 3 cosas:
// 1. Debe poder buscarla independientemente de mayúsculas o minúsculas.  "✔"
// 2. Si no existe la receta, debe mostrar un mensaje adecuado.  "✔"
// 3. Debe buscar tanto las de la API como las de la base de datos.  "✔"

const { Diet } = require("../db");
const allData_Info = require("../Data/All_Data_Info");
const data = require("../../data.json");

const getRecipeInfo = async (req, res) => {
  try {
    const { name } = req.query;
    console.log({ name });

    // El nombre solicitado puede ser: un nombre de receta o un tipo de dieta.

    // Al concatenar en "allData_Info" la info de la API externa con la BDD food, obtengo la información de ambas directamente.
    const recipeInfo = await allData_Info();

    if (name) {
      let dietQuery = await Diet.findOne({
        where: {
          name: name.toLowerCase(),
        },
      });

      if (dietQuery) {
        //Si se recibe una petición de dieta: "diet Query".

        let byDietQuery = await recipeInfo.filter((recipe) => {
          let names = recipe.diets.map((diet) => diet.name);
          if (names.includes(name)) return recipe;
        });

        byDietQuery.length
          ? res.status(200).send(byDietQuery)
          : res
              .status(400)
              .send("No existen recetas con el tipo de dieta indicado.");
      } else {
        //Si se recibe una petición de receta: "recipe Query".
        let recipeQuery = await recipeInfo.filter((recipe) =>
          recipe.name.toLowerCase().includes(name.toString().toLowerCase())
        );

        recipeQuery.length
          ? res.status(200).send(recipeQuery)
          : res
              .status(400)
              .send("No existen recetas con ese nombre establecido.");
      }
    }
    //Ahora bien, si no recibimos ninguna petición de nombre: "query name", entonces devuelvo toda la información recibida.
    else res.status(200).send(recipeInfo);
  } catch (error) {
    console.log(error);
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
