import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import CardRecipe from "../Card/Card";
import NavBarTop from "../Nav_Bar_Top/Nav_Bar_Top";

import styles from "./Home_Page.module.css";

export default function HomePage() {
  const [recipeName, setRecipeName] = useState([]);

  return (
    <div className={styles.homeContainer}>
      <div className={styles.containerNavBarTop}>
        <NavBarTop />
        <div className={styles.containerBackBtn}>
          <Link to="/" className={styles.backBtn}>
            BACK
          </Link>
        </div>
      </div>

      <div className={styles.cardRecipeContainer}>
        <h1>Contenedor de Cards</h1>
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
