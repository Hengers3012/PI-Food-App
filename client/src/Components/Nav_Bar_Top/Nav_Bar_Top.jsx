import React from "react";
//import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import styles from "./Nav_Bar_Top.module.css";

export default function NavBarTop() {
  // let details = useSelector((state) => state.allRecipes);

  // let amount = details.length - 1;
  // let randomNumber = Math.floor(Math.random() * (amount - 0 + 1) + 0);
  // let randomId = details[randomNumber].id;

  return (
    <div className={styles.containerNavBarTop}>
      <div className={styles.navBarContPart1}>
        <Link to="/" className={styles.logo}>
          <img src={"./assets/Image/Food_Logo.png"} alt="" />
        </Link>
      </div>

      <div className={styles.containerNavBarRoute}>
        <Link to="/created_recipe" className={styles.createBtn}>
          Create Recipe
        </Link>
        {/* <Link to={`/recipes/${randomId}`}>
          <button className={styles.randomRecipe}>Random Recipe</button>
        </Link> */}
        <Link to="/created_recipe" className={styles.createBtn}>
          Create Recipe
        </Link>
      </div>

      {/* <div className={styles.containerBackBtn}>
        <Link to="/" className={styles.backBtn}>
          BACK
        </Link>
      </div> */}
    </div>
  );
}
