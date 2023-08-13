require("dotenv").config();
const axios = require("axios");
const { API_KEYS } = process.env;

const getDataDiets = async function () {
  const keys = API_KEYS.split(","); // Convierte la cadena en un array

  for (let i = 0; i < keys.length; i++) {
    const apiKey = keys[i];

    try {
      const dietList = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=100&addRecipeInformation=true`
      );

      const repeated = await dietList.data.results
        .map((diet) => diet.diets)
        .flat(1);

      return [...new Set(repeated)];
    } catch (error) {
      if (error.response && error.response.status === 402) {
        console.log(
          `Error 402 con la clave de API ${apiKey}. Pasando a la siguiente clave...`
        );
        await delay(1000); // Esperar 1 segundo antes de reintentar con la siguiente clave
        continue; // Si se produce un error 402, pasa a la siguiente clave
      } else {
        // Maneja otros errores de la llamada a la API aquí
        console.log(error);
        break; // Termina el bucle si se produce un error distinto a 402
      }
    }
  }
};

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

module.exports = getDataDiets;

// require("dotenv").config();
// const axios = require("axios");
// const { API_KEY } = process.env;

// const getDataDiets = async function () {
//   try {
//     const dietList = await axios.get(
//       `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`
//     );
//     // const dietList = await axios.get(
//     //   "https://apimocha.com/n.s.recipes/allrecipes"
//     // );

//     const repeated = await dietList.data.results
//       .map((diet) => diet.diets)
//       .flat(1);

//     return [...new Set(repeated)];
//   } catch (error) {
//     console.log(error);
//   }
// };

// module.exports = getDataDiets;
