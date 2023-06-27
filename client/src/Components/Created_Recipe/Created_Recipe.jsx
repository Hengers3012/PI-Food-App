import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom";
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
    health_score: 0,
    instructions: [""],
    image: "",
    diet: [],
  });

  function validate(newRecipe) {
    let recipeError = {};

    if (!recipeData.name.length) {
      recipeError.name = "Se requiere un nombre";
    }
    if (!recipeData.summary_of_the_dish.length) {
      recipeError.summary_of_the_dish =
        "Se requiere una descripcción para la receta";
    }
    // if (!recipeData.instructions === [""]) {
    //   recipeError.instructions =
    //     "Se requieren las instrucciones para la receta";
    // }
    if (!recipeData.diet.length) {
      recipeError.diet = "Seleccione almenos una dieta.";
    }
    if (recipeData.name.length > 100) {
      recipeError.name = `El nombre no puede contener mas de 100 Caracteres: ${recipeData.name.length} Caracteres)`;
    }
    if (recipeData.summary_of_the_dish.length > 1000) {
      recipeError.summary_of_the_dish = `La descripción no puede contener mas de 1000 Caracteres: ${recipeData.summary_of_the_dish.length} Caracteres)`;
    }
    if (recipeData.instructions.length > 12) {
      recipeError.instructions = `La receta no debe incluir mas de 12 pasos: ${recipeData.instructions.length} pasos)`;
    }
    if (recipeData.image.length > 255) {
      recipeError.image = `255 characters or less(Characters:${recipeData.image.length})`;
    }
    return recipeError;
  }

  function handleChange(event) {
    //const { data, value } = event.target;
    setRecipeData({
      ...recipeData,
      [event.target.name]: event.target.value,
    });

    console.log(recipeData);

    setRecipeErrors(
      validate({
        ...recipeData,
        [event.target.name]: event.target.value,
      })
    );
  }

  function handleChangeIntructions(event) {
    // get parent LI element to update the correct index on state instructions array
    const parent = event.target.parentElement.parentElement; // parent UL/OL element
    let i;

    for (i = 0; i < parent.childNodes.length; i++) {
      if (event.target.parentElement === parent.childNodes[i]) break;
    }

    let newInstructions = recipeData.instructions;
    newInstructions[i] = event.target.value;

    setRecipeData({
      ...recipeData,
      instructions: newInstructions,
    });

    setRecipeErrors(
      validate({
        ...recipeData,
        instructions: newInstructions,
      })
    );
  }

  function handleChangeImage(event) {
    //const { data, value } = event.target;
    setRecipeData({
      ...recipeData,
      [event.target.name]: event.target.value,
    });
  }

  const imageReg = recipeData.image;
  console.log(imageReg);

  function handleChange_For_Diets(event) {
    // const { data } = event.target.checked;
    // const { value } = event.target;

    let dt = recipeData.diet;
    if (event.target.checked) {
      if (!dt.includes(event.target.value)) dt.push(event.target.value);
    } else {
      dt = dt.filter((d) => d !== event.target.value);
    }

    setRecipeData({
      ...recipeData,
      diet: dt,
    });

    setRecipeErrors(
      validate({
        ...recipeData,
        diet: [...recipeData.diet, event.target],
      })
    );

    // if (event.target.checked === false) {
    //   setRecipeData({
    //     ...recipeData,
    //     diet: recipeData.diet.filter((el) => el === event.target.value),
    //   });
    // }
    // else {
    //   setRecipeData({
    //     ...recipeData,
    //     diet: recipeData.diet.filter((element) => element !== event.target),
    //   });
    // }

    //console.log(recipeData);
  }

  useEffect(() => {
    console.log(recipeData);
  }, [recipeData]);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(recipeData);

    if (!recipeData.name) {
      return alert("El nombre de la receta es requerido");
    } else if (recipeData.name.length > 100) {
      return alert("El nombre introducido es muy largo");
    } else if (recipesNames.includes(recipeData.name)) {
      return alert("Este nombre ya existe");
    } else {
      const name = recipeData.name;
      recipeData.name = recipeData.name[0].toUpperCase() + name.substring(1);
    }

    if (!recipeData.summary_of_the_dish) {
      return alert("La receta debe incluir una descripción");
    }
    if (!recipeData.instructions) {
      return alert("La receta debe incluir las instrucciones de preparación");
    }
    if (!recipeData.diet.length) {
      return alert("La receta debe incluir almenos una dieta");
    }

    dispatch(post_Recipe(recipeData));

    alert("⭐La receta fue creada exitosamente!!!⭐");
    setRecipeData({
      name: "",
      summary_of_the_dish: "",
      health_score: 0,
      instructions: [""],
      image: "",
      diet: [],
    });
    history.push("/home");
  }

  useEffect(() => {
    dispatch(getDiets_Info());
  }, [dispatch]);

  // INSTRUCCIONES
  const instLista = document.getElementById("instLista");

  function addInstruction(e) {
    const newInstruction = document.createElement("li");

    const instText = document.createElement("textarea");
    instText.setAttribute("type", "text");
    instText.addEventListener("input", handleChangeIntructions);

    const delInst = document.createElement("input");
    delInst.setAttribute("type", "button");
    delInst.setAttribute("value", " ❌ ");

    delInst.addEventListener("click", removeInstruction);

    newInstruction.appendChild(instText);
    newInstruction.appendChild(delInst);

    instLista.appendChild(newInstruction);
  }

  function removeInstruction(e) {
    const instruction = e.target.parentElement;
    const list = instruction.parentElement;
    if (list.childNodes.length > 1) list.removeChild(instruction);
  }

  //console.log(diets);

  return (
    <div className={styles.containerPage}>
      <div className={styles.containerNavBarTop}>
        <NavBarTop />
        <div className={styles.containerBackBtn}>
          <Link to="/home" className={styles.backBtn}>
            ⮐
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
            <div className={styles.containerNameRecipe}>
              <h3>Nombre</h3>
              <input
                autoComplete="off"
                type="text"
                name="name"
                placeholder="Introduce un nombre..."
                value={recipeData.name}
                onChange={(event) => handleChange(event)}
                onPaste={(event) => handleChange(event)}
              />
              {recipeError.name && (
                <p style={{ color: "red" }}>{recipeError.name}</p>
              )}
            </div>
            <div className={styles.containerSummaryRecipe}>
              <h3>Descripción</h3>
              <textarea
                name="summary_of_the_dish"
                value={recipeData.summary_of_the_dish}
                onChange={(event) => handleChange(event)}
                onPaste={(event) => handleChange(event)}
              />
              {recipeError.summary_of_the_dish && (
                <p style={{ color: "red" }}>
                  {recipeError.summary_of_the_dish}
                </p>
              )}
            </div>

            <div className={styles.containerInstructionRecipe}>
              <h3>Instrucciones</h3>
              <ol id="instLista">
                <li>
                  <textarea type="text" onChange={handleChangeIntructions} />
                  <input
                    type="button"
                    value=" ❌ "
                    onClick={removeInstruction}
                  />
                </li>
              </ol>
              {recipeError.instructions}

              {/* <textarea
                name="instructions"
                type="text"
                cols="100"
                rows="10"
                value={recipeData.instructions}
                onChange={(event) => handleChangeIntrucctions(event)}
                onPaste={(event) => handleChangeIntrucctions(event)}
              /> */}
            </div>
            <input
              className={styles.buttonAddInstruction}
              type="button"
              value=" Add Instruction "
              onClick={addInstruction}
            />
          </div>

          <div className={styles.containerGridRigth}>
            <div className={styles.containerImage}>
              <h3>Image</h3>
              <div className={styles.imageReg}>
                <img src={imageReg} alt="Imagen" />
              </div>

              <input
                type="text"
                name="image"
                placeholder="Introduce la url de la imagen deseada..."
                value={recipeData.image}
                onChange={(event) => handleChangeImage(event)}
              />
              <p style={{ color: "red" }}>{recipeError.image}</p>
            </div>

            <div className={styles.containerGridRigth_Diet_HS}>
              <div className={styles.containerCheckbox}>
                <h3>Dietas</h3>
                {diets.map((diet, index) => {
                  return (
                    <label className={styles.dietsLabel}>
                      <input
                        key={`diet${index}`}
                        type="checkbox"
                        name={diet.name}
                        value={diet.name}
                        onChange={(event) => handleChange_For_Diets(event)}
                      />
                      {diet.name[0].toUpperCase() + diet.name.slice(1)}
                    </label>
                  );
                })}
                {recipeError.diet && (
                  <p style={{ color: "red" }}>{recipeError.diet}</p>
                )}
              </div>

              <div className={styles.containerHealthScore}>
                <h3>Health Score</h3>
                <input
                  autoComplete="off"
                  name="health_score"
                  type="range"
                  min="0"
                  max="100"
                  className={styles.healthScore}
                  value={recipeData.health_score}
                  onChange={(event) => handleChange(event)}
                />
              </div>
              <div className={styles.containerButtonCreate}>
                <button type="submit">CREATE RECIPE</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
