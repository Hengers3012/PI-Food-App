import React from "react";
import CardRecipe from "../Card/Card.jsx";
import styles from "./Cards.modules.css";

export default function CardsRecipes(props) {
  const { recipeName } = props;
  console.log({ recipeName });

  return (
    <div className={styles.cardsContainer}>
      {recipeName.map(({ id, name, health_score, image, diets }) => (
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
