function getRecipe(name) {
  return `Retornamos la receta correspondiente al nombre solicitado: ${name}`;
}

function getRecipeInfo(req, res) {
  const { name } = req.query;

  if (name != "") {
    const receta = getRecipe(name);
    res.send(receta);
  } else {
    res.send(
      "Afirmamos si los datos de las receta buscada por el nombre ya se entregaron"
    );
  }
}

module.exports = getRecipeInfo;
