import axios from "axios";

import {
  GET_RECIPES,
  GET_DIETS,
  SEARCH_BAR,
  FILTER_FOR_DIETS,
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
    var response = await axios.get("/diets");
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
        payload: response,
      });
    } catch (error) {
      return alert(`La Dieta o Receta ${recipe_diets_name} no Existe...`);
    }
  };
}

export function filterRecipe_For_Diets(diets) {
  return {
    type: FILTER_FOR_DIETS,
    payload: diets,
  };
}
