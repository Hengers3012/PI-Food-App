import React from "react";
import { useSelector } from "react-redux";

//import CargandoPage from "../Cargando/Cargando";

import styles from "./Tooltips.module.css";

export default function Tooltips() {
  const recipe_Details = useSelector((state) => state.tooltips);
  console.log(recipe_Details);

  const allDiets = !recipe_Details.diets
    ? alert["La receta no tiene dietas"]
    : recipe_Details.diets;
  console.log(allDiets);

  console.log(recipe_Details.id); //-----> Number

  return (
    <div className={styles.tooltipsContainer}>
      {recipe_Details.id ? (
        <div className={styles.dataVarTop}>
          <span
            className={
              recipe_Details.health_score < 40
                ? styles.redColor
                : recipe_Details.health_score < 75
                ? styles.orangeColor
                : styles.greenColor
            }
          >
            Heath Score: {recipe_Details.health_score}%
          </span>
          <span>ID: {recipe_Details.id} </span>
        </div>
      ) : (
        <div className={styles.dataVarTop}>
          {/* <button onClick={handlerFavorite}>🤍</button> */}
          <span>Heath Score: --%</span>
          <span>ID: -- </span>
        </div>
      )}

      {recipe_Details.id ? (
        <div className={styles.containerDetail}>
          <div className={styles.containerDetailPart1}>
            <div className={styles.containerName}>
              <h3>Name:{recipe_Details.name}</h3>
            </div>
            <div className={styles.containerImage}>
              {/* <img
                src={recipe_Details.image}
                alt={`img ${recipe_Details.name}`}
                className={styles.recipeImage}
              /> */}
              <p>Image: {recipe_Details.image}</p>
            </div>
            <div className={styles.containerDiets}>
              <h2>Diets:</h2>
              <div className={styles.allDiets}>
                {allDiets?.map((element) => {
                  return (
                    <div className={styles.diets}>
                      <p>
                        {element.name[0].toUpperCase() + element.name.slice(1)}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>CARGANDO...</p>
      )}
    </div>
  );
}
