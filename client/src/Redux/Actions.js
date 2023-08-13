import axios from "axios";

import {
  DETAIL_RECIPE,
  TOOLTIPS,
  GET_RECIPES,
  GET_DIETS,
  SEARCH_BAR,
  FILTER_FOR_DIETS,
  FILTER_ORIGEN,
  ORDEN_BY_HEALTH_SCORE,
  ORDEN_BY_NAME,
  ADD_FAVORITES,
  DELETE_FAVORITES,
  SET_PAGES,
  CHANGE_PAGE,
  RELOAD,
} from "./Action_Types";

export function getRecipe_Info() {
  return async function (dispatch) {
    try {
      const json = await axios.get("/recipes");
      console.log(json);

      return dispatch({
        type: GET_RECIPES,
        payload: json.data,
      });
    } catch (error) {
      console.error(error);
      // Realiza la acción adecuada para manejar el error, como mostrar un mensaje de error o realizar otra acción necesaria.
    }
  };
}
export function getDiets_Info() {
  return async function (dispatch) {
    try {
      const json = await axios.get("/diets");
      console.log(json);

      return dispatch({
        type: GET_DIETS,
        payload: json.data,
      });
    } catch (error) {
      console.error(error);
      // Realiza la acción adecuada para manejar el error, como mostrar un mensaje de error o realizar otra acción necesaria.
    }
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
      console.error(error);
      return alert(
        `Ocurrió un error al realizar la solicitud: ${error.message}`
      );
    }
  };
}
export function post_Recipe(createdRecipe) {
  console.log(createdRecipe);

  return async function (dispatch) {
    try {
      const respose = await axios.post("/recipes", createdRecipe);
      console.log(respose);
      return respose;
    } catch (error) {
      console.error(error);
      // Realiza la acción adecuada para manejar el error, como mostrar un mensaje de error o realizar otra acción necesaria.
    }
  };
}

export function detail_Recipe(detail) {
  return async function (dispatch) {
    try {
      const json = await axios.get(`/recipes/${detail}`);
      console.log(json);
      return dispatch({
        type: DETAIL_RECIPE,
        payload: json.data,
      });
    } catch (error) {
      console.error(error);
      // Realiza la acción adecuada para manejar el error, como mostrar un mensaje de error o realizar otra acción necesaria.
    }
  };
}

export function tooltips_Detail(detail) {
  return async function (dispatch) {
    try {
      const json = await axios.get(`/recipes/${detail}`);
      console.log(json);
      return dispatch({
        type: TOOLTIPS,
        payload: json.data,
      });
    } catch (error) {
      console.error(error);
      // Realiza la acción adecuada para manejar el error, como mostrar un mensaje de error o realizar otra acción necesaria.
    }
  };
}

//Reload, Fileter and Orders
export const setPage = (payload) => {
  return {
    type: SET_PAGES,
    payload,
  };
};

export const change_page = (Pagenumber) => {
  return {
    type: CHANGE_PAGE,
    payload: Pagenumber++,
  };
};

export const reload = () => {
  return {
    type: RELOAD,
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
