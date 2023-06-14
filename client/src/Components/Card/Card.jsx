import React from "react";
import { Link } from "react-router-dom";

import styles from "./Card.module.css";

export default function CardRecipe(props) {
  const { id, name, health_score, image, diets } = props;
  return (
    <Link to={`/detail/${id}`}>
      <div className={styles.continer_Card}>
        <div>
          <h2>{health_score}</h2>
        </div>
        <div>
          <img
            src={image}
            alt={`Receta ${name}`}
            className={styles.imageRecipe}
          />
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
      </div>
    </Link>
  );
}
