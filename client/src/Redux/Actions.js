import axios from "axios";

import {
  DETAIL_RECIPE,
  GET_RECIPES,
  GET_DIETS,
  SEARCH_BAR,
  FILTER_FOR_DIETS,
  FILTER_ORIGEN,
  ORDEN_BY_HEALTH_SCORE,
  ORDEN_BY_NAME,
  ADD_FAVORITES,
  DELETE_FAVORITES,
  RELOAD,
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
  };
}

export function detail_Recipe(detail) {
  return async function (dispatch) {
    const json = await axios.get(`/recipes/${detail}`);
    console.log(json);
    return dispatch({
      type: DETAIL_RECIPE,
      payload: json.data,
    });
  };
}

//Reload, Fileter and Orders

export const reload = (payload) => {
  return {
    type: RELOAD,
    payload: payload,
  };
};

export function filter_For_Origen(payload) {
  console.log(payload);
  return {
    type: FILTER_ORIGEN,
    payload: payload,
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
//Agregar y Eliminar de mis Favoritos
export const addMyFavorite = (payload) => {
  console.log(payload);
  return {
    type: ADD_FAVORITES,
    payload: payload,
  };
};
export const deleteMyFavorite = (id) => {
  return {
    type: DELETE_FAVORITES,
    payload: id,
  };
};
