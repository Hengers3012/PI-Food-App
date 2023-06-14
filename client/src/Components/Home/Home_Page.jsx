import React from "react";
import { useState } from "react";

import CardsRecipes from "../Cards/Cards";
import NavBarTop from "../Nav_Bar_Top/Nav_Bar_Top";

import styles from "./Home_Page.module.css";

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  return (
    <div className={styles.homeContainer}>
      <NavBarTop />
      <div className={styles.cardRecipeContainer}>
        {recipes.map((element, index) => {
          return (
            <div key={`cardRecipe ${index}`}>
              <div>
                <CardsRecipes
                  id={element.id}
                  health_score={element.health_score}
                  img={element.image}
                  name={element.name}
                  diets={element.diets}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
