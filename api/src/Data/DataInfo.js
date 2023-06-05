require("dotenv").config();
const axios = require("axios");
const { API_KEY } = process.env;
const { Recipe, Diet } = require("../db.js");

const allApiData = async function () {
  try {
    const urlApi = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`
    );
    const infoApi = urlApi.data.results.map((element) => {
      return {
        id: element.id,
        name: element.title,
        summary_of_the_dish: element.summary.replace(/<[^>]+>/g, ""),
        diets: element.diets.map((d) => {
          return { name: d };
        }),
        health_score: element.healthScore,
        image: element.image,
        createdInDb: false,
        instructions: element.analyzedInstructions[0]?.steps.map((steps) => {
          return `${steps.number}- ${steps.step}`;
        }),
      };
    });
    return infoApi;
  } catch (err) {
    console.log(err);
  }
};

const allDbData = async function () {
  try {
    return await Recipe.findAll({
      include: {
        model: Diet,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
  } catch (err) {
    console.log(err);
  }
};

const allData = async function () {
  try {
    const apiData = await allApiData();
    const dbData = await allDbData();

    const allDataContainer = apiData.concat(dbData);

    return allDataContainer;
  } catch (err) {
    console.log(err);
  }
};

const allDiets = async function () {
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

module.exports = {
  allData,
  allDbData,
  allApiData,
  allDiets,
};
