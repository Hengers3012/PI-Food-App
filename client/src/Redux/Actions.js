import axios from "axios";

import {
  GET_RECIPES,
  GET_DIETS,
  SEARCH_BAR,
  FILTER_FOR_DIETS,
  ORDEN_BY_HEALTH_SCORE,
  ORDEN_BY_NAME,
} from "./Action_Types";

export function getRecipe_Info() {
  return async function (dispatch) {
    const json = await axios.get("/recipes");
    console.log(json);

    return dispatch({
      type: GET_RECIPES,
      payload: json.data,
    });
  };
}

export function getDiets_Info() {
  return async function (dispatch) {
    const json = await axios.get("/diets");
    console.log(json);

    return dispatch({
      type: GET_DIETS,
      payload: json.data,
    });
  };
}

export function search_Bar(recipe_diets_name) {
  return async function (dispatch) {
    try {
      var json = await axios.get(`/recipes/?name=${recipe_diets_name}`);
      console.log(json);

      return dispatch({
        type: SEARCH_BAR,
        payload: json.data,
      });
    } catch (error) {
      return alert(`La Dieta o Receta ${recipe_diets_name} no Existe...`);
    }
  };
}

export function post_Recipe(createdRecipe) {
  console.log(createdRecipe);

  return async function (dispatch) {
    const respose = await axios.post("/recipes", createdRecipe);
    console.log(respose);
    return respose;
    // try {
    //   const post_for_Axios = await axios.post(`/recipes`, created_Recipe);
    //   JSON.stringify(post_for_Axios, post_Recipe);
    //   return dispatch({
    //     type: POST_RECIPE,
    //     payload: post_for_Axios.data,
    //   });
    // } catch (error) {
    //   console.log(error.message);
    // }
  };
}

export function filte_Recipe_For_Diets(diets) {
  return {
    type: FILTER_FOR_DIETS,
    payload: diets,
  };
}

export function order_For_Health_Score(health_score) {
  return {
    type: ORDEN_BY_HEALTH_SCORE,
    payload: health_score,
  };
}

export function orden_For_Name(name) {
  return {
    type: ORDEN_BY_NAME,
    payload: name,
  };
}
