import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { getDiets_Info } from "../../Redux/Actions";
import NavBarTop from "../Nav_Bar_Top/Nav_Bar_Top";
import styles from "./Created_Recipe.module.css";

export default function CreateRecipeApp() {
  const dispatch = useDispatch();

  const diets = useSelector((state) => state.diets);

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

      <form className={styles.containerForm}>
        <div className={styles.containerNameDiets}>
          <h3>Nombre</h3>
          <input type="text" name="name" />
        </div>
        <div>
          <h3>Health Score</h3>
          <input type="range" min="0" max="100" name="health_score" />
        </div>
        <div>
          <h3>Descripción</h3>
          <textarea
            name="summary_of_the_dish"
            key="summ"
            type="text"
            cols="30"
            rows="10"
          />
        </div>
        <div className={styles.containerCheckbox}>
          <h3>Dietas</h3>
          <br />
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
        </div>
        <div>
          <h3>Instrucciones</h3>
          <textarea name="instructions" type="text" cols="30" rows="10" />
        </div>
        <div>
          <h3>Image</h3>
          <input type="text" name="image" />
        </div>
        <div>
          <button type="submit">CREATE RECIPE</button>
        </div>
      </form>
    </div>
  );
}
