import React from "react";
import { Link } from "react-router-dom";

import SearchBar from "../SearchBar/Search_Bar";
import styles from "./Nav_Bar_Top.module.css";

export default function NavBarTop() {
  return (
    <div className={styles.containerNavBarTop}>
      <SearchBar className={styles.containerSearchBar} />
      <div className={styles.containerNavBarRoute}>
        <Link to="/created_recipe">
          <button>Create Recipe</button>
        </Link>
      </div>
    </div>
  );
}
