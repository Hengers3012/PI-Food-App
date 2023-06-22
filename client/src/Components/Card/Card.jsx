import React from "react";
import { Link } from "react-router-dom";

import styles from "./Card.module.css";

export default function CardRecipe(props) {
  const { id, name, health_score, image, diets } = props;
  //const { id, name, health_score, diets } = props;
  console.log(props);

  return (
    <div className={styles.continer_Card}>
      <Link
        className={styles.link}
        to={`/detail/${id}`}
        style={{ textDecoration: "none" }}
      >
        <div className={styles.healthScoreText}>
          <p>HS:</p>
          {`${health_score}`}
        </div>

        <div className={styles.contImageName}>
          {/* <img
            src="https://cdn.aarp.net/content/dam/aarp/health/caregiving/2018/03/1140-nutrients-food-loved-ones-caregiving-esp.jpg"
            alt=""
          /> */}
          <img src={image} alt="" className={styles.imageRecipe} />
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
