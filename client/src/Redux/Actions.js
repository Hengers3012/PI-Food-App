import axios from "axios";

import {
  GET_RECIPES,
  GET_DIETS,
  SEARCH_BAR,
  FILTER_FOR_DIETS,
  ORDEN_BY_HEALTH_SCORE,
  ORDEN_BY_NAME,
  POST_RECIPE,
} from "./Action_Types";

export function getRecipe_Info() {
  return async function (dispatch) {
    const response = await axios.get("/recipes");
    console.log(response);

    return dispatch({
      type: GET_RECIPES,
      payload: response.data,
    });
  };
}

export function getDiets_Info() {
  return async function (dispatch) {
    const response = await axios.get("/diets");
    console.log(response);

    return dispatch({
      type: GET_DIETS,
      payload: response.data,
    });
  };
}

export function search_Bar(recipe_diets_name) {
  return async function (dispatch) {
    try {
      var response = await axios.get(`/recipes/?name=${recipe_diets_name}`);
      console.log(response);

      return dispatch({
        type: SEARCH_BAR,
        payload: response.data,
      });
    } catch (error) {
      return alert(`La Dieta o Receta ${recipe_diets_name} no Existe...`);
    }
  };
}

export function post_Recipe(created_Recipe) {
  return async function (dispatch) {
    try {
      const post_for_Axios = await axios.post(`/recipes`, created_Recipe);
      JSON.stringify(post_for_Axios, post_Recipe);
      return dispatch({
        type: POST_RECIPE,
        payload: post_for_Axios.data,
      });
    } catch (error) {
      console.log(error.message);
    }
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
