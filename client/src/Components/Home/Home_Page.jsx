import React from "react";
import { useState } from "react";

import CardRecipe from "../Card/Card";
import NavBarTop from "../Nav_Bar_Top/Nav_Bar_Top";

import styles from "./Home_Page.module.css";

export default function HomePage() {
  const [recipeName, setRecipeName] = useState([]);

  return (
    <div className={styles.homeContainer}>
      <NavBarTop />
      <div className={styles.cardRecipeContainer}>
        <h1>Hola</h1>
        {recipeName?.map((element) => {
          return (
            <div className={styles.containerCard_indiv}>
              <div>
                <CardRecipe
                  id={element.id}
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
