import React from "react";
import { useState } from "react";
import CardsRecipes from "../Cards/Cards";
import styles from "./Home_Page.module.css";

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  return (
    <div className={styles.homeContainer}>
      <h2>Henry Food</h2>
      <div className={styles.recipes}>
        <CardsRecipes recipes={recipes} />
      </div>
    </div>
  );
}
