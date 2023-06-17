import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { search_Bar } from "../../Redux/Actions";

import styles from "./Search_Bar.module.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [recipeName, setRecipeName] = useState("");

  const handleInputChange = (event) => {
    setRecipeName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(search_Bar(recipeName));
    setRecipeName("");
  };

  return (
    <div className={styles.containerSearchBar}>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <input
          type="search"
          className={styles.searchBar}
          placeholder="Escribe el nombre de la receta o dieta deseada..."
          onChange={(event) => {
            handleInputChange(event);
          }}
          value={recipeName}
        />
        <button className={styles.searchButton} type="submit">
          🔎
        </button>
      </form>
    </div>
  );
}
