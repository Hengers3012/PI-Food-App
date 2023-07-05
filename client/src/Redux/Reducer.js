import {
  DETAIL_RECIPE,
  TOOLTIPS,
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
  SET_PAGES,
  CHANGE_PAGE,
  RELOAD,
} from "./Action_Types";

const initialState = {
  recipes: [],
  allRecipes: [],
  diets: [],
  detail: [],
  tooltips: [],
  recipesFavorites: [],
  currentPage: 1,
};

function reducer(state = initialState, action) {
  console.log(action.payload);
  switch (action.type) {
    //-------------------------------------------------------------------------------------//
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

    case TOOLTIPS:
      return {
        ...state,
        tooltips: action.payload,
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
      const recipesDiet = recipes.filter((recip) => {
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
        recipes: action.payload === "default" ? state.allRecipes : recipesDiet,
      };

    case FILTER_ORIGEN:
      const allRecipes_API_BDD = state.allRecipes;
      console.log(allRecipes_API_BDD);

      const filterStatusOption = action.payload
        ? allRecipes_API_BDD.filter((recipe) => typeof recipe.id === "string")
        : allRecipes_API_BDD.filter((recipe) => typeof recipe.id !== "number");
      console.log(filterStatusOption);
      return {
        ...state,
        recipes:
          action.payload === "api"
            ? allRecipes_API_BDD.filter(
                (recipe) => typeof recipe.id === "number"
              )
            : filterStatusOption,
      };
    // action.payload === "allRecipes" ? allRecipes_API_BDD : action.payload !== "string" ? allRecipes_API_BDD.filter((el) => typeof el.id !== "number" : action.payload !== "number" : allRecipes_API_BDD.filter((el) => typeof el.id === "string"),};

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

    //-------------------------------------------------------------------------------------//
    //                                        RELOAD                                       //
    //-------------------------------------------------------------------------------------//
    case SET_PAGES: {
      return {
        ...state,
        currentPage: action.payload,
      };
    }

    case CHANGE_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };

    case RELOAD:
      const recipesReload = state.allRecipes;
      return {
        ...state,
        recipes: recipesReload,
      };

    default:
      return {
        ...state,
      };
  }
}

export default reducer;
