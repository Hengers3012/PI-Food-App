require("dotenv").config();
const axios = require("axios");
const { API_KEYS } = process.env;

const allDataAPI = async function () {
  const keys = API_KEYS.split(","); // Convierte la cadena en un array de claves de API

  try {
    let infoApi = [];

    for (let i = 0; i < keys.length; i++) {
      const apiKey = keys[i];

      try {
        const urlApi = await axios.get(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=100&addRecipeInformation=true`
        );

        infoApi = urlApi.data.results.map((element) => {
          return {
            id: element.id,
            name: element.title,
            summary_of_the_dish: element.summary.replace(/<[^>]+>/g, ""),
            diets: element.diets.map((diet) => {
              return { name: diet };
            }),
            health_score: element.healthScore,
            image: element.image,
            createdInDb: false,
            instructions: element.analyzedInstructions[0]?.steps.map(
              (steps) => {
                return `${steps.number}- ${steps.step}`;
              }
            ),
          };
        });

        if (infoApi.length > 0) {
          break; // Si se obtienen resultados, finaliza el bucle
        }
      } catch (error) {
        console.log(`Error con la clave de API ${apiKey}: ${error.message}`);

        if (i < keys.length - 1) {
          // Si no es la última clave, esperar antes de intentar con la siguiente clave
          await delay(1000); // Esperar 1 segundo antes de reintentar
        }
      }
    }

    return infoApi;
  } catch (error) {
    console.log(error);
  }
};

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

module.exports = allDataAPI;

// require("dotenv").config();
// const axios = require("axios");
// const { API_KEY } = process.env;

// const allDataAPI = async function () {
//   try {
//     const urlApi = await axios.get(
//       `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`
//     );
//     // const urlApi = await axios.get(
//     //   "https://apimocha.com/n.s.recipes/allrecipes"
//     // );
//     //
//     const infoApi = urlApi.data.results.map((element) => {
//       //
//       return {
//         id: element.id,
//         name: element.title,
//         summary_of_the_dish: element.summary.replace(/<[^>]+>/g, ""), // /<[^>]+>/g => expresión regular para reemplazar  <[^>]+>  del texto de las descripciones.
//         diets: element.diets.map((diet) => {
//           return { name: diet };
//         }),
//         health_score: element.healthScore,
//         image: element.image,
//         createdInDb: false,
//         instructions: element.analyzedInstructions[0]?.steps.map((steps) => {
//           return `${steps.number}- ${steps.step}`;
//         }),
//       };
//     });
//     //
//     return infoApi;
//     //
//   } catch (error) {
//     console.log(error);
//   }
// };

// module.exports = allDataAPI;
