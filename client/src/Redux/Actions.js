import axios from "axios";

import {
  GET_RECIPES,
  GET_DIETS,
  SEARCH_BAR,
  FILTER_FOR_DIETS,
} from "./Action_Types";

export const getRecipe_Info = () => {
  return async function (dispatch) {
    const response = await axios.get("/recipes");

    return dispatch({
      type: GET_RECIPES,
      payload: response.data,
    });
  };
};

export const getDiets_Info = () => {
  return async function (dispatch) {
    const response = await axios.get("/diets");

    return dispatch({
      type: GET_DIETS,
      payload: response.data,
    });
  };
};

export const search_Bar = (recipe_diets_name) => {
  return async function (dispatch) {
    try {
      const res = await axios.get(`/recipe/?name=${recipe_diets_name}`);

      return dispatch({
        type: SEARCH_BAR,
        payload: res.data,
      });
    } catch (error) {
      return alert("La Dieta o Receta no Existe...");
    }
  };
};

export const filterRecipe_For_Diets = (diets) => {
  return {
    type: FILTER_FOR_DIETS,
    payload: diets,
  };
};
