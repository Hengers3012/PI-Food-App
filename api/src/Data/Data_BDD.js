const { Recipe, Diet } = require("../db.js");

const allDataBDD = async function () {
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
  } catch (error) {
    console.log(error);
  }

  // const result = data.map((el) => {
  //   const dietas = el.Diets.map((elm) => elm.name);
  //   console.log(dietas);
  //   return {
  //     id: el.id,
  //     title: el.title,
  //     summary: el.summary,
  //     health_Score: el.health_Score,
  //     image: el.image,
  //     steps: el.steps,
  //     diets: dietas,
  //   };
  // });

  // // console.log(data, "esto es la base de datos");
  // return result;
};

module.exports = allDataBDD;
