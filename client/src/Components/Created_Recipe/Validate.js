const validate = (newRecipe) => {
  const patterns = {
    name: {
      pattern: /^\S[a-zA-Z\s]{10,100}\S$/,
      errorMessage:
        "The recipe name must be between 10 and 100 characters and cannot contain special characters.",
    },
    image: {
      pattern:
        /(http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?.*(png|jpg|jpeg|gif)$/,
      errorMessage:
        "A secure link (https) in jpg, jpeg, png or gift format is required",
    },
    instructions: {
      pattern: /^[a-zA-ZÀ-ÿ0-999\s]/u,
      errorMessage:
        "Recipe instructions should only contain letters and numbers.",
    },
    summary_of_the_dish: {
      pattern: /^[a-zA-ZÀ-ÿ0-999\s]{100,600}$/u,
      errorMessage:
        "Your description can only contain 100 to 600 characters maximum.",
    },
    diet: {
      pattern: /^.+$/,
      errorMessage: "Oops, please select at least one diet.",
    },
  };

  // Cobjeto vacío para almacenar los errores de validación
  let errorInput = {};

  // Itera sobre el objeto patterns
  for (const error in patterns) {
    // Verifica si el campo cumple con el patrón de expresión regular
    if (!patterns[error].pattern.test(newRecipe[error])) {
      errorInput[error] = patterns[error].errorMessage;
    }
  }

  return errorInput;
  //   let recipeError = {};

  //   if (!recipeData.name.length) {
  //     recipeError.name = "A name is required";
  //   }
  //   if (!recipeData.summary_of_the_dish.length) {
  //     recipeError.summary_of_the_dish =
  //       "A description is required for the recipe";
  //   }
  //   // if (!recipeData.instructions === [""]) {
  //   //   recipeError.instructions =
  //   //     "Se requieren las instrucciones para la receta";
  //   // }
  //   if (!recipeData.diet.length) {
  //     recipeError.diet = "Select at least one diet";
  //   }
  //   if (recipeData.name.length > 100) {
  //     recipeError.name = `The name cannot contain more than 100 characters: ${recipeData.name.length} characters)`;
  //   }
  //   if (recipeData.summary_of_the_dish.length > 1000) {
  //     recipeError.summary_of_the_dish = `La descripción no puede contener mas de 1000 Caracteres: ${recipeData.summary_of_the_dish.length} Caracteres)`;
  //   }
  //   if (recipeData.instructions.length > 12) {
  //     recipeError.instructions = `La receta no debe incluir mas de 12 pasos: ${recipeData.instructions.length} pasos)`;
  //   }
  //   if (recipeData.image.length > 255) {
  //     recipeError.image = `255 characters or less(Characters:${recipeData.image.length})`;
  //   }
  //   return recipeError;
};

export default validate;
