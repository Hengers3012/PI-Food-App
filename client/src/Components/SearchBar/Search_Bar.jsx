import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { search_Bar } from "../../Redux/Actions";

import styles from "./Search_Bar.module.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [recipe, setRecipe] = useState("");

  const handleInputChange = (event) => {
    setRecipe(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.containerSearchBar}>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      ></form>
      <input
        type="search"
        onChange={(event) => {
          handleInputChange(event);
        }}
        value={recipe}
      />
      <button type="submit">Shearch</button>
    </div>
  );
}
