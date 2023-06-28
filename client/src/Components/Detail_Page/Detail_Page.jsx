import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { detail_Recipe } from "../../Redux/Actions";
import NavBarTop from "../Nav_Bar_Top/Nav_Bar_Top";
import Footer from "../Footer/Footer";

import styles from "./Detail_Page.module.css";

export default function DetailsPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const recipe_Details = useSelector((state) => state.detail);

  console.log(recipe_Details);

  // const allInstrucctions = () => {
  //   if (!recipe_Details.instructions) {
  //     return ["La receta o tiene pasos"];
  //   } else {
  //     return recipe_Details.instructions;
  //   }
  // };

  const allInstrucctions = !recipe_Details.instructions
    ? ["La receta no tiene pasos"]
    : recipe_Details.instructions;

  useEffect(() => {
    dispatch(detail_Recipe(id));
  }, [dispatch, id]);

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

      <div className={styles.dataVarTop}>
        <span>ID: {recipe_Details.id}</span>
        <span
          className={
            recipe_Details.health_score < 40
              ? styles.redColor
              : recipe_Details.health_score < 75
              ? styles.orangeColor
              : styles.greenColor
          }
        >
          HS: {recipe_Details.health_score}
        </span>
      </div>

      <div className={styles.containerDetail}>
        <div className={styles.containerName}>
          <h1>{recipe_Details.name}</h1>
        </div>
        <div className={styles.containerImage}>
          <img
            src={recipe_Details.image}
            alt={`img ${recipe_Details.name}`}
            className={styles.recipeImage}
          />
        </div>
        <div className={styles.containerSummary}>
          <h2>Descripción</h2>
          <p>{recipe_Details.summary_of_the_dish}</p>
        </div>
        <div className={styles}>
          <h2>Instrucciones</h2>
          {allInstrucctions.map((element) => {
            return (
              <div>
                <p>{element}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.containerFooter}>
        <Footer />
      </div>
    </div>
  );
}
