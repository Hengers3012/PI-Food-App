import React from "react";
import { Link } from "react-router-dom";

import styles from "./Card.module.css";

export default function CardRecipe(id, name, health_score, image, diets) {
  return (
    <Link to={`/detail/${id}`}>
      <div className={styles.continer_Card}>
        <div>
          <h2>{health_score}</h2>
        </div>
        <div>
          <img src={image} alt="Not found" />
          <h2>{name}</h2>
        </div>
        <div>
          <h1>{diets}</h1>
        </div>
      </div>
    </Link>
  );
}
