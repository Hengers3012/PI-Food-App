import {
  DETAIL_RECIPE,
  GET_RECIPES,
  GET_DIETS,
  POST_RECIPE,
  SEARCH_BAR,
  FILTER_FOR_DIETS,
  FILTER_ORIGEN,
  ORDEN_BY_HEALTH_SCORE,
  ORDEN_BY_NAME,
  ADD_FAVORITES,
  DELETE_FAVORITES,
} from "./Action_Types";

const initialState = {
  recipes: [],
  allRecipes: [],
  diets: [],
  detail: [],
  recipesFavorites: [],
};

function reducer(state = initialState, action) {
  console.log(action.payload);
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        allRecipes: action.payload,
      };

    case GET_DIETS:
      return {
        ...state,
        diets: action.payload,
      };

    case SEARCH_BAR:
      let resultSearch = [...state.recipes];
      return {
        ...state,
        recipes: resultSearch.length > 0 ? action.payload : state.recipes,
        //recipes: action.payload,
      };

    case DETAIL_RECIPE:
      return {
        ...state,
        detail: action.payload,
      };

    case POST_RECIPE:
      return {
        ...state,
      };
    //-------------------------------------------------------------------------------------//
    //                              Filtros y Ordenamientos                                //
    //-------------------------------------------------------------------------------------//
    case FILTER_FOR_DIETS:
      const recipes = state.allRecipes;
      const recipesWithDiet = recipes.filter((recip) => {
        let names = recip.diets.map((diet) => diet.name);
        if (names.includes(action.payload)) {
          let res = recip;
          return res;
        } else {
          return console.error(undefined);
        }
      });
      return {
        ...state,
        recipes:
          action.payload === "default" ? state.allRecipes : recipesWithDiet,
      };

    case FILTER_ORIGEN:
      const allRecipes1 = state.allRecipes;
      console.log(allRecipes1);

      const statusFiltered2 = action.payload
        ? allRecipes1.filter((el) => typeof el.id === "string")
        : allRecipes1.filter((el) => typeof el.id !== "number");
      console.log(statusFiltered2);
      return {
        ...state,
        recipes:
          action.payload === "api"
            ? allRecipes1.filter((el) => typeof el.id === "number")
            : statusFiltered2,
      };
    // action.payload === "allRecipes" ? allRecipes1 : action.payload !== "string" ? allRecipes1.filter((el) => typeof el.id !== "number" : action.payload !== "number" : allRecipes1.filter((el) => typeof el.id === "string"),};

    case ORDEN_BY_NAME:
      let order_Recipe_Name = [...state.recipes];
      order_Recipe_Name =
        action.payload === "ascendente"
          ? order_Recipe_Name.sort((a, b) => {
              if (a.name < b.name) return -1;
              if (a.name > b.name) return 1;
              return 0;
            })
          : order_Recipe_Name.sort((a, b) => {
              if (a.name < b.name) return 1;
              if (a.name > b.name) return -1;
              return 0;
            });
      return {
        ...state,
        recipes: [...order_Recipe_Name],
      };

    case ORDEN_BY_HEALTH_SCORE:
      let order_Recipe_HealthScore = [...state.recipes];
      order_Recipe_HealthScore =
        action.payload === "ascendente"
          ? order_Recipe_HealthScore.sort((a, b) => {
              if (a.health_score < b.health_score) return -1;
              if (a.health_score > b.health_score) return 1;
              return 0;
            })
          : order_Recipe_HealthScore.sort((a, b) => {
              if (a.health_score < b.health_score) return 1;
              if (a.health_score > b.health_score) return -1;
              return 0;
            });
      return {
        ...state,
        recipes: [...order_Recipe_HealthScore],
      };

    //-------------------------------------------------------------------------------------//
    //                            Agregar y Eliminar de Favoritos                          //
    //-------------------------------------------------------------------------------------//

    case ADD_FAVORITES:
      console.log(action.payload);
      //const favorites = action.payload;
      return {
        ...state,
        recipesFavorites: [...state.recipesFavorites, action.payload],
      };

    case DELETE_FAVORITES:
      const favoritesFilter = state.recipesFavorites.filter(
        (word) => word.id !== action.payload[0].id
      );
      return {
        ...state,
        favorites: favoritesFilter,
      };
    default:
      return {
        ...state,
      };
  }
}

export default reducer;
