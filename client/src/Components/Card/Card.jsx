import React from "react";
import { Link } from "react-router-dom";

import styles from "./Card.module.css";

export default function CardRecipe(props) {
  const { id, name, health_score, image, diets } = props;
  //const { id, name, health_score, diets } = props;
  //console.log(props);
  // function cardMouseOverHandler(e) {
  //   const tooltip = document.getElementsByClassName("dietName");

  // }
  // function cardMouseOutHandler(e) {
  //   const tooltip = document.getElementsByClassName("dietName");

  // }

  return (
    <div
      className={styles.continer_Card}
      // onMouseOver={cardMouseOverHandler}
      // onMouseOut={cardMouseOutHandler}
    >
      <Link
        className={styles.link}
        to={`/detail/${id}`}
        style={{ textDecoration: "none" }}
      >
        <div>{id}</div>
        <div className={styles.healthScoreText}>
          <p
            className={
              health_score < 40
                ? styles.redColor
                : health_score < 75
                ? styles.orangeColor
                : styles.greenColor
            }
          >
            <span
              className={
                health_score < 40
                  ? styles.redColorText
                  : health_score < 75
                  ? styles.orangeColorText
                  : styles.greenColorText
              }
            >
              Health Score:
            </span>
            {` ${health_score}%`}
          </p>
        </div>
        <div className={styles.contImageName}>
          <img src={image} alt={name} className={styles.imageRecipe} />
          <h2 className={styles.cardName}>
            {name[0].toUpperCase() + name.slice(1)}
          </h2>
        </div>

        <div className={styles.dietsName}>
          <h1>Diets:</h1>
          <h2>
            {diets.map((diet) => (
              <div className={styles.dietName} key={diet.name}>
                {diet.name[0].toUpperCase() + diet.name.slice(1)}
              </div>
            ))}
          </h2>
        </div>
      </Link>
    </div>
  );
}
