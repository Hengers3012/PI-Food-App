require("dotenv").config();
const axios = require("axios");
const { API_KEY } = process.env;

const getDataDiets = async function () {
  try {
    const dietList = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`
    );
    const repeated = await dietList.data.results.map((d) => d.diets).flat(1);
    return [...new Set(repeated)];
  } catch (err) {
    console.log(err);
  }
};

module.exports = getDataDiets;
