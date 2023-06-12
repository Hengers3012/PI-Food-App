import React from "react";
import CardRecipe from "../Card/Card.jsx";
import styles from "./Cards.module.css";

export default function Cards(props) {
  const { recipes } = props;

  return (
    <div>
      {recipes.map(({ id, name, health_score, image, diets }) => (
        <CardRecipe
          id={id}
          key={id}
          name={name}
          health_score={health_score}
          image={image}
          diets={diets}
        />
      ))}
    </div>
  );
}
