import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  detail_Recipe,
  addMyFavorite,
  deleteMyFavorite,
} from "../../Redux/Actions";
import NavBarTop from "../Nav_Bar_Top/Nav_Bar_Top";
import Footer from "../Footer/Footer";
import CargandoPage from "../Cargando/Cargando";

import styles from "./Detail_Page.module.css";

export default function DetailsPage() {
  const dispatch = useDispatch();

  const { id } = useParams();

  const recipe_Details = useSelector((state) => state.detail);
  const favorites = useSelector((state) => state.recipesFavorites);

  const [isFavorite, setIsFavorite] = useState(false);

  console.log(recipe_Details);

  useEffect(() => {
    dispatch(detail_Recipe(id));
  }, [dispatch, id]);

  const handlerFavorite = () => {
    if (isFavorite) {
      setIsFavorite(false);
      dispatch(
        deleteMyFavorite(
          favorites.filter((recipe) => recipe.id === recipe_Details.id)
        )
      );
    } else {
      setIsFavorite(true);
      dispatch(addMyFavorite(recipe_Details));
    }
    console.log(isFavorite);
  };

  useEffect(() => {
    let favoriteRecipeID = favorites.map((element) => {
      return element.id;
    });
    if (favoriteRecipeID.includes(recipe_Details.id)) {
      setIsFavorite(true);
    } else setIsFavorite(false);
  }, [favorites, recipe_Details.id]);

  // const allInstrucctions = () => {
  //   if (!recipe_Details.instructions) {
  //     return ["La receta o tiene pasos"];
  //   } else {
  //     return recipe_Details.instructions;
  //   }
  // };
  const allDiets = !recipe_Details.diets
    ? alert["La receta no tiene dietas"]
    : recipe_Details.diets;
  console.log(allDiets);

  const allInstrucctions = !recipe_Details.instructions
    ? ["La receta no tiene pasos"]
    : recipe_Details.instructions;
  console.log(allInstrucctions);

  // console.log(id); -----> String
  // console.log(recipe_Details.id);  -----> Number

  return (
    <div className={styles.detailContainer}>
      <div className={styles.containerNavBarTop}>
        <div className={styles.containeNav}>
          <NavBarTop />
        </div>
        <div className={styles.containerBackBtn}>
          <Link to="/home" className={styles.backBtn}>
            ⮐
          </Link>
        </div>
      </div>
      {String(recipe_Details.id) === id ? (
        <div className={styles.dataVarTop}>
          {isFavorite ? (
            <button onClick={handlerFavorite}>💖</button>
          ) : (
            <button onClick={handlerFavorite}>🤍</button>
          )}
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
          <button onClick={handlerFavorite}>🤍</button>
          <span>Heath Score: --%</span>
          <span>ID: -- </span>
        </div>
      )}

      {String(recipe_Details.id) === id ? (
        <div className={styles.containerDetail}>
          <div className={styles.containerDetailPart1}>
            <div className={styles.containerImage}>
              <img
                src={recipe_Details.image}
                alt={`img ${recipe_Details.name}`}
                className={styles.recipeImage}
              />
            </div>

            <div className={styles.containerInfoRecipePart1}>
              <div className={styles.containerName}>
                <h1>{recipe_Details.name}</h1>
              </div>

              <div className={styles.containerSummary}>
                <p>{recipe_Details.summary_of_the_dish}</p>
              </div>

              <div className={styles.containerDiets}>
                <h2>Diets</h2>
                <div className={styles.allDiets}>
                  {allDiets?.map((element) => {
                    return (
                      <div className={styles.diets}>
                        <p>
                          {element.name[0].toUpperCase() +
                            element.name.slice(1)}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {recipe_Details.id === id ? (
            <div className={styles.containerDetailPart2}>
              <h2>Instruction</h2>
              {allInstrucctions.map((element, index) => {
                let indInstr = index + 1;
                return (
                  <div className={styles.allInstrucctions}>
                    <p>
                      {indInstr}- {element}
                    </p>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className={styles.containerDetailPart2}>
              <h2>Instruction</h2>
              {allInstrucctions.map((element) => {
                return (
                  <div className={styles.allInstrucctions}>
                    <p>{element}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ) : (
        <CargandoPage />
      )}
      <div className={styles.containerFooter}>
        <Footer />
      </div>
    </div>
  );
}
