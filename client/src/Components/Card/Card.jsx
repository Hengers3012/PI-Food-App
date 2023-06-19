import React from "react";
import { Link } from "react-router-dom";

import styles from "./Card.module.css";

export default function CardRecipe(props) {
  const { id, name, health_score, image, diets } = props;
  console.log(props);
  return (
    <div className={styles.continer_Card}>
      <Link to={`/detail/${id}`}>
        <div className={styles.healthScoreText}>
          <p>Health Score: </p>
          {`${health_score}`}
        </div>
        <div className={styles.contImageName}>
          <img
            src="https://cdn.aarp.net/content/dam/aarp/health/caregiving/2018/03/1140-nutrients-food-loved-ones-caregiving-esp.jpg"
            alt=""
          />
          {/* <img src={image} alt={`${name}`} className={styles.imageRecipe} /> */}
          <h2 className={styles.cardName}>
            {name[0].toUpperCase() + name.slice(1)}
          </h2>
        </div>
        <div>
          <h1>
            {diets.map((diet) => (
              <div className={styles.dietName} key={diet.name}>
                {diet.name}
              </div>
            ))}
          </h1>
        </div>
      </Link>
    </div>
  );
}
