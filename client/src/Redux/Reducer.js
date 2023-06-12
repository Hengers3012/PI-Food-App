import { GET_RECIPES, GET_DIETS, SEARCH_BAR } from "./Action_Types";

const initial_State = {
  recipes: [],
  allRecipes: [],
  diets: [],
  detail: [],
};

const reducer = (state = initial_State, { type, payload }) => {
  switch (type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: payload,
        allRecipes: payload,
      };

    case GET_DIETS:
      return {
        ...state,
        diets: payload,
      };

    case SEARCH_BAR:
      let resultSearch = [...state.allRecipes];
      return {
        ...state,
        recipes: resultSearch.length > 0 ? payload : state.allRecipes,
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
      return;
  }
};

export default reducer;
