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

  // // console.log(data, "esto es la base de datos");
  // return result;
};

module.exports = allDataBDD;
