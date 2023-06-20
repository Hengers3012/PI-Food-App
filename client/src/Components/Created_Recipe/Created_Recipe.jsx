import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { getDiets_Info, post_Recipe } from "../../Redux/Actions";
import NavBarTop from "../Nav_Bar_Top/Nav_Bar_Top";
import styles from "./Created_Recipe.module.css";

export default function CreateRecipeApp() {
  const dispatch = useDispatch();

  const diets = useSelector((state) => state.diets);
  const [recipeError, setRecipeErrors] = useState({});
  const [infoRecipe, setInfoRecipe] = useState({
    name: "",
    summary_of_the_dish: "",
    health_score: 50,
    instructions: [""],
    image: "",
    diet: [],
  });

  function validate(recipeInfo) {
    let recipeError = {};

    if (infoRecipe.name.length !== "") {
      recipeError.name = "Se requiere un nombre";
    } else if (infoRecipe.name.length > 100) {
      recipeError.name =
        "El nombre de la receta no debe sobrepasar los 100 caracteres.";
    } else if (infoRecipe.summary_of_the_dish.length !== "") {
      recipeError.summary_of_the_dish =
        "Se requiere una descripcción para la Receta";
    } else if (infoRecipe.summary_of_the_dish.length > 200) {
      recipeError.summary_of_the_dish =
        "La descripción de la receta no debe sobrepasar los 200 caracteres.";
    } else if (infoRecipe.instructions.length !== "") {
      recipeError.instructions =
        "Se requieren las instruccíones para la receta.";
    } else if (infoRecipe.instructions.length > 200) {
      recipeError.instructions =
        "Las instrucciones no deben sobrepasar los 200 caracetee";
    } else if (infoRecipe.image.length !== "") {
      recipeError.image =
        "Es requerido introducir la URL de la imagen de la receta";
    }
    return recipeError;
  }

  function handleChange(event) {
    setInfoRecipe({
      ...infoRecipe,
      [event.target.name]: event.target.value,
    });

    setRecipeErrors(
      validate({
        ...infoRecipe,
        [event.target.name]: event.target.value,
      })
    );
  }

  function handleSubmit(event) {}

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
                type="text"
                name="name"
                value={infoRecipe.name}
                onChange={(event) => handleChange(event)}
              />
              <span>{recipeError.name}</span>
            </div>
            <div>
              <h3>Descripción</h3>
              <textarea
                name="summary_of_the_dish"
                type="text"
                cols="100"
                rows="10"
                value={infoRecipe.summary_of_the_dish}
                onChange={(event) => handleChange(event)}
              />
              <span>{recipeError.summary_of_the_dish}</span>
            </div>

            <div>
              <h3>Instrucciones</h3>
              <textarea
                name="instructions"
                type="text"
                cols="100"
                rows="10"
                value={infoRecipe.instructions}
                onChange={(event) => handleChange(event)}
              />
              <span>{recipeError.instructions}</span>
            </div>

            <div>
              <h3>Image</h3>
              <input
                type="text"
                name="image"
                value={infoRecipe.image}
                onChange={(event) => handleChange(event)}
              />
              <span>{recipeError.image}</span>
            </div>
          </div>

          <div className={styles.containerGridRigth}>
            <div className={styles.containerCheckbox}>
              <h3>Dietas</h3>
              {diets.map((diet, index) => {
                return (
                  <label className={styles.dietsLabel}>
                    <input
                      type="checkbox"
                      key={`Diet${index}`}
                      name={diet.name}
                      value={diet.name}
                    />
                    {diet.name[0].toUpperCase() + diet.name.slice(1)}
                  </label>
                );
              })}
              <span>{recipeError.diet}</span>
            </div>

            <div>
              <h3>Health Score</h3>
              <input type="range" min="0" max="100" name="health_score" />
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
