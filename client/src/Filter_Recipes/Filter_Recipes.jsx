import React from "react";
import { useDispatch, useSelector, useEffect } from "react-redux";
import {
  getRecipe_Info,
  getDiets_Info,
  filterRecipe_For_Diets,
} from "../Redux/Actions";
import styles from "./Filter_Recipes.module.css";
export default function FilterRecipesCards() {
  const dispatch = useDispatch();
  const diets = useSelector((state) => state.Diets);
  useEffect(() => {
    dispatch(getRecipe_Info());
  }, [dispatch]);

  return (
    <div className={styles.containerFilter}>
      <div>
        <select id="diet" />
      </div>
    </div>
  );
}
