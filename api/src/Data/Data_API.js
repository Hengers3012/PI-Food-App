require("dotenv").config();
const axios = require("axios");
const { API_KEY } = process.env;

const allDataAPI = async function () {
  try {
    const urlApi = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`
    );
    //
    const infoApi = urlApi.data.results.map((element) => {
      //
      return {
        id: element.id,
        name: element.title,
        summary_of_the_dish: element.summary.replace(/<[^>]+>/g, ""), // /<[^>]+>/g => expresión regular para reemplazar  <[^>]+>  del texto de las descripciones.
        diets: element.diets.map((diet) => {
          return { name: diet };
        }),
        health_score: element.healthScore,
        image: element.image,
        createdInDb: false,
        instructions: element.analyzedInstructions[0]?.steps.map((steps) => {
          return `${steps.number}- ${steps.step}`;
        }),
      };
    });
    //
    return infoApi;
    //
  } catch (error) {
    console.log(error);
  }
};

module.exports = allDataAPI;
