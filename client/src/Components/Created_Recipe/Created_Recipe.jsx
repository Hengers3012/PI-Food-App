import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getDiets_Info, post_Recipe } from "../../Redux/Actions";
import NavBarTop from "../Nav_Bar_Top/Nav_Bar_Top";

import styles from "./Created_Recipe.module.css";

export default function CreateRecipeApp() {
  const dispatch = useDispatch();
  const history = useHistory();

  const diets = useSelector((state) => state.diets);
  const allRecipes = useSelector((state) => state.allRecipes);

  let recipesNames = allRecipes.map((el) => el.name);

  const [recipeError, setRecipeErrors] = useState({});
  const [recipeData, setRecipeData] = useState({
    name: "",
    summary_of_the_dish: "",
    health_score: 50,
    instructions: [""],
    image: "",
    diet: [],
  });

  function validate(newRecipe) {
    let recipeError = {};

    if (recipeData.name.length !== "") {
      recipeError.name = "Se requiere un nombre";
    } else if (recipeData.name.length > 255) {
      recipeError.name =
        "El nombre de la receta no debe sobrepasar los 100 caracteres.";
    } else if (recipeData.summary_of_the_dish.length !== "") {
      recipeError.summary_of_the_dish =
        "Se requiere una descripcción para la Receta";
    } else if (recipeData.summary_of_the_dish.length > 255) {
      recipeError.summary_of_the_dish =
        "La descripción de la receta no debe sobrepasar los 200 caracteres.";
    } else if (recipeData.instructions.length !== "") {
      recipeError.instructions =
        "Se requieren las instruccíones para la receta.";
    } else if (recipeData.instructions.length > 255) {
      recipeError.instructions =
        "Las instrucciones no deben sobrepasar los 200 caracetee";
    } else if (recipeData.image.length !== "") {
      recipeError.image =
        "Es requerido introducir la URL de la imagen de la receta";
    }
    return recipeError;
  }

  const handleChange = (event) => {
    //const { data, value } = event.target;
    setRecipeData({
      ...recipeData,
      [event.target.name]: event.target.value,
    });

    setRecipeErrors(
      validate({
        ...recipeData,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleChange_For_Diets = (event) => {
    // const { data } = event.target.checked;
    // const { value } = event.target;

    if (event.target.checked) {
      setRecipeData({
        ...recipeData,
        diet: [...recipeData.diet, event.target],
      });

      setRecipeErrors(
        validate({
          ...recipeData,
          diet: [...recipeData.diet, event.target],
        })
      );
    } else {
      setRecipeData({
        ...recipeData,
        diet: recipeData.diet.filter((element) => element !== event.target),
      });
    }
  };

  function handleSubmit(event) {
    dispatch(post_Recipe(recipeData));

    alert("Recipe Created Successfully");

    setRecipeData({
      name: "",
      summary_of_the_dish: "",
      health_score: 50,
      instructions: [""],
      image: "",
      diet: [],
    });

    history.push("/home");
  }

  useEffect(() => {
    dispatch(getDiets_Info());
  }, [dispatch]);

  console.log(diets);

  return (
    <div className={styles.containerPage}>
      <div className={styles.containerNavBarTop}>
        <NavBarTop />
        <div className={styles.containerBackBtn}>
          <Link to="/home" className={styles.backBtn}>
            BACK
          </Link>
        </div>
      </div>

      <div className={styles.labelPage}>
        <h1>CREANDO UNA NUEVA RECETA</h1>
      </div>

      <form
        onSubmit={(event) => handleSubmit(event)}
        className={styles.containerForm}
      >
        <div className={styles.containerInfoRecipe}>
          <div className={styles.containerGridLeft}>
            <div className={styles.containerNameDiets}>
              <h3>Nombre</h3>
              <input
                autoComplete="off"
                type="text"
                name="name"
                value={recipeData.name}
                onChange={(event) => handleChange(event)}
                onPaste={(event) => handleChange(event)}
              />
              {recipeError.name && <p>{recipeError.name}</p>}
            </div>

            <div>
              <h3>Descripción</h3>
              <textarea
                autoComplete="off"
                name="summary_of_the_dish"
                type="text"
                cols="100"
                rows="10"
                value={recipeData.summary_of_the_dish}
                onChange={(event) => handleChange(event)}
                onPaste={(event) => handleChange(event)}
              />
              {recipeError.summary_of_the_dish && (
                <p>{recipeError.summary_of_the_dish}</p>
              )}
            </div>

            <div>
              <h3>Instrucciones</h3>
              <textarea
                name="instructions"
                type="text"
                cols="100"
                rows="10"
                value={recipeData.instructions}
                onChange={(event) => handleChange(event)}
                onPaste={(event) => handleChange(event)}
              />
              <span>{recipeError.instructions}</span>
            </div>

            <div>
              <h3>Image</h3>
              <input
                type="text"
                name="image"
                value={recipeData.image}
                onChange={(event) => handleChange(event)}
              />
              <span>{recipeError.image}</span>
            </div>
          </div>

          <div className={styles.containerGridRigth}>
            <div className={styles.containerCheckbox}>
              <h3>Dietas</h3>
              {diets.map((diet) => {
                return (
                  <label className={styles.dietsLabel}>
                    <input
                      type="checkbox"
                      name={diet.name}
                      value={diet.name}
                      onChange={(event) => handleChange_For_Diets(event)}
                      onPaste={(event) => handleChange_For_Diets(event)}
                    />
                    {diet.name[0].toUpperCase() + diet.name.slice(1)}
                  </label>
                );
              })}
              {recipeError.diet && <p>{recipeError.diet}</p>}
            </div>

            <div>
              <h3>Health Score</h3>
              <input
                autoComplete="off"
                name="health_score"
                type="range"
                min="0"
                max="100"
                value={recipeData.health_score}
                onChange={(event) => handleChange(event)}
              />
            </div>
          </div>
        </div>
        <div>
          <button type="submit">CREATE RECIPE</button>
        </div>
      </form>
    </div>
  );
}
