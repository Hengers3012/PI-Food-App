import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { search_Bar, change_page } from "../../Redux/Actions";

import styles from "./Search_Bar.module.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [recipeName, setRecipeName] = useState("");
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setRecipeName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const regex = /^[a-zA-Z0-9]+$/; // expresión regular que solo permite letras y números
    if (!regex.test(recipeName)) {
      alert("The search field cannot contain special characters or be empty.");
      return;
    }
    setError(null);

    await dispatch(search_Bar(recipeName));
    dispatch(change_page(1));
    setRecipeName("");
  };

  return (
    <div className={styles.containerSearchBar}>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        {error && <div className={styles.error}>{error}</div>}
        <input
          type="search"
          className={styles.searchBar}
          placeholder="Write the name of the desired recipe or diet..."
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
