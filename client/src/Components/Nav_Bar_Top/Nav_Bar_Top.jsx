import React from "react";
import { Link } from "react-router-dom";

import SearchBar from "../SearchBar/Search_Bar";
import styles from "./Nav_Bar_Top.module.css";

export default function NavBarTop() {
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
        <Link to="/created_recipe" className={styles.createBtn}>
          Create Recipe
        </Link>
        <Link to="/created_recipe" className={styles.createBtn}>
          Create Recipe
        </Link>
      </div>

      <div className={styles.containerSearchBar}>
        <SearchBar />
      </div>

      {/* <div className={styles.containerBackBtn}>
        <Link to="/" className={styles.backBtn}>
          BACK
        </Link>
      </div> */}
    </div>
  );
}
