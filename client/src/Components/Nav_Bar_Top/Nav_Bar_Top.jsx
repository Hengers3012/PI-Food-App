import React from "react";
import { Link } from "react-router-dom";

import SearchBar from "../SearchBar/Search_Bar";
import styles from "./Nav_Bar_Top.module.css";

export default function NavBarTop() {
  return (
    <div className={styles.containerNavBarTop}>
      <SearchBar className={styles.containerSearchBar} />
      <Link>
        {/* to={`/favorites`} */}
        <button>Favorites</button>
      </Link>
      <Link>
        {/* to={`/recipes/${"id"}`} */}
        <button>Random Recipe</button>
      </Link>
      <Link>
        {/*to="/CreateRecipe"*/}
        <button>Create Recipe</button>
      </Link>
    </div>
  );
}
