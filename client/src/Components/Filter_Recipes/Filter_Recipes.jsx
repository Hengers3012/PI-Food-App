import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getRecipe_Info,
  getDiets_Info,
  filte_Recipe_For_Diets,
  filter_For_Origen,
  order_For_Health_Score,
  orden_For_Name,
  reload,
} from "../../Redux/Actions";

import styles from "./Filter_Recipes.module.css";

export default function FilterRecipesCards() {
  const dispatch = useDispatch();

  const diets = useSelector((state) => state.diets);
  // const recipes = useSelector((state) => state.allRecipes);

  function handleReload(event) {
    dispatch(reload());

    const filter_by_Origen = document.getElementById("origen");
    filter_by_Origen.selectedIndex = 0;

    const filter_by_Diets = document.getElementById("diet");
    filter_by_Diets.selectedIndex = 0;

    const filter_by_Alfabeto = document.getElementById("alfabeto");
    filter_by_Alfabeto.selectedIndex = 0;

    const filter_by_HealthScore = document.getElementById("health_score");
    filter_by_HealthScore.selectedIndex = 0;
  }

  function handle_Filter_for_Diet(event) {
    dispatch(filte_Recipe_For_Diets(event.target.value));

    const filter_by_Alfabeto = document.getElementById("alfabeto");
    filter_by_Alfabeto.selectedIndex = 0;

    const filter_by_HealthScore = document.getElementById("health_score");
    filter_by_HealthScore.selectedIndex = 0;
  }

  function handle_Filter_for_Origen(event) {
    if (event.target.value === "allRecipes") {
      dispatch(getRecipe_Info(event.target.value));
    } else dispatch(filter_For_Origen(event.target.value));
    console.log(event.target.value);

    const filter_by_Alfabeto = document.getElementById("alfabeto");
    filter_by_Alfabeto.selectedIndex = 0;

    const filter_by_HealthScore = document.getElementById("health_score");
    filter_by_HealthScore.selectedIndex = 0;
  }

  function handle_Orden_For_Name(event) {
    dispatch(orden_For_Name(event.target.value));

    const filter_by_HealthScore = document.getElementById("health_score");
    filter_by_HealthScore.selectedIndex = 0;
  }

  function handle_Orden_for_Score(event) {
    dispatch(order_For_Health_Score(event.target.value));

    const filter_by_Alfabeto = document.getElementById("alfabeto");
    filter_by_Alfabeto.selectedIndex = 0;
  }

  useEffect(() => {
    dispatch(getDiets_Info());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getRecipe_Info());
  }, [dispatch]);

  // console.log(diets);
  // console.log(recipes);

  return (
    <div className={styles.containerFilterBar}>
      <div className={styles.containerFilter}>
        <div className={styles.container_Reload}>
          <button onClick={(event) => handleReload(event)}>
            <li className={styles.lista}>
              <i class="fa-solid fa-arrows-rotate"></i>
            </li>
          </button>
        </div>

        <div className={styles.containerFilterOrigen}>
          <select
            id="origen"
            defaultValue="Filter by Source"
            onChange={(event) => handle_Filter_for_Origen(event)}
          >
            <option value="allRecipes">All Recipes</option>
            <option value="string">🖥️ BDD</option>
            <option value="api">🌐API</option>
          </select>
        </div>

        <div className={styles.containerFilterDiets}>
          <select
            id="diet"
            onChange={(event) => handle_Filter_for_Diet(event)}
            defaultValue="default"
          >
            <option value="default">All Diets</option>
            {diets.map((diet, index) => {
              return (
                <option key={`Diet${index}`} value={diet.name}>
                  {diet.name[0].toUpperCase() + diet.name.slice(1)}
                  {/* {diet.name} */}
                </option>
              );
            })}
          </select>
        </div>

        <div className={styles.containerFilter_Alfabeto}>
          <select
            id="alfabeto"
            onChange={(event) => handle_Orden_For_Name(event)}
            defaultValue="default"
          >
            <option value="default" disabled>
              In Alphabetical Order
            </option>
            <option value="ascendente">🔺 Ascendent</option>
            <option values="descendente">🔻 Descendent</option>
          </select>
        </div>

        <div className={styles.containerFilter_HealthScore}>
          <select
            id="health_score"
            onChange={(event) => handle_Orden_for_Score(event)}
            defaultValue="default"
          >
            <option value="default" disabled>
              Sort by Health Score
            </option>
            <option value="ascendente">🔺 Ascendent</option>
            <option value="descendente">🔻 Descendent</option>
          </select>
        </div>
      </div>
    </div>
  );
}
