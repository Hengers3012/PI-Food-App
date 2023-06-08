require("dotenv").config();
const axios = require("axios");
const { API_KEY } = process.env;

const getDataDiets = async function () {
  try {
    const dietList = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`
    );

    const repeated = await dietList.data.results
      .map((diet) => diet.diets)
      .flat(1);

    return [...new Set(repeated)];
  } catch (error) {
    console.log(error);
  }
};

module.exports = getDataDiets;
