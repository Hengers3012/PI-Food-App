import {
  GET_RECIPES,
  GET_DIETS,
  POST_RECIPE,
  SEARCH_BAR,
  FILTER_FOR_DIETS,
  ORDEN_BY_SCORE,
} from "./Action_Types";

const initialState = {
  recipes: [],
  allRecipes: [],
  diets: [],
  detail: [],
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
      //let resultSearch = [...state.recipes];
      return {
        ...state,
        //recipes: resultSearch.length > 0 ? action.payload : state.recipes,
        recipes: action.payload,
      };

    case POST_RECIPE:
      return {
        state,
      };
    case FILTER_FOR_DIETS:
      const filterRecipes_For_Diets = [...state.allRecipes].filter((recipe) => {
        let dietsInfo = recipe.diets.map((diet) => diet.name);

        if (dietsInfo.includes(action.payload)) {
          return recipe;
        } else return undefined;
      });
      return {
        ...state,
        recipe:
          action.payload === "" ? state.allRecipes : filterRecipes_For_Diets,
      };

    case ORDEN_BY_SCORE:
      let orderedRecipes2 = [...state.recipes];
      orderedRecipes2 =
        action.payload === "asc"
          ? orderedRecipes2.sort((a, b) => {
              if (a.healthScore < b.healthScore) return 1;
              if (a.healthScore > b.healthScore) return -1;
              return 0;
            })
          : orderedRecipes2.sort((a, b) => {
              if (a.healthScore < b.healthScore) return -1;
              if (a.healthScore > b.healthScore) return 1;
              return 0;
            });
      return {
        ...state,
        recipes: [...orderedRecipes2],
      };

    default:
      return { ...state };
  }
}

export default reducer;
