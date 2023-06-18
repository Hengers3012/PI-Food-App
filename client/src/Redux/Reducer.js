import {
  GET_RECIPES,
  GET_DIETS,
  POST_RECIPE,
  SEARCH_BAR,
} from "./Action_Types";

const initialState = {
  recipes: [],
  allRecipes: [],
  diets: [],
  detail: [],
};

function reducer(state = initialState, action) {
  console.log({ state });
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
    // case FILTER_FOR_DIETS:
    //   const filterRecipes_For_Diets = [...state.allRecipes].filter((recipe) => {
    //     let dietsInfo = recipe.diets.map((diet) => diet.name);

    //     if (dietsInfo.includes(payload)) {
    //       return recipe;
    //     } else return undefined;
    //   });
    //   return {
    //     ...state,
    //     recipe: payload === "" ? state.allRecipes : filterRecipes_For_Diets,
    //   };

    // case ORDER:
    //   const orderCards_For_HealthScore = [...state.allRecipes].filter(
    //     (recipe) => recipe.health_score.toLowerCase() === payload.toLowerCase()
    //   );
    //   return {
    //     ...state,
    //     allRecipes: orderCards_For_HealthScore,
    //   };

    default:
      return state;
  }
}

export default reducer;
