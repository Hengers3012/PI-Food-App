import React from "react";
import { useState } from "react";

import CardsRecipes from "../Cards/Cards";
import NavBarTop from "../Nav_Bar_Top/Nav_Bar_Top";

import styles from "./Home_Page.module.css";

export default function HomePage() {
  const [recipes] = useState([]);

  console.log({ recipes });

  return (
    <div className={styles.homeContainer}>
      <NavBarTop />
      <div className={styles.cardRecipeContainer}>
        <h1>Hola</h1>
        {recipes.map((element) => {
          return (
            <div className={styles.containerCard_indiv}>
              <div>
                <CardsRecipes
                  health_score={element.health_score}
                  img={element.image}
                  name={element.name}
                  diets={element.diets}
                  createdInDb={element.createdInDb}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
