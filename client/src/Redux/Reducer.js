import { FILTER, ORDER } from "./Action_Types";

const initial_State = {
  allRecipes: [],
};

const reducer = (state = initial_State, { type, payload }) => {
  switch (type) {
    case FILTER:
      const filterCards_For_Diets = [...state.allRecipes].filter(
        (recipe) => recipe.diets.toLowerCase() === payload.toLowerCase()
      );
      return {
        ...state,
        allRecipes: filterCards_For_Diets,
      };

    case ORDER:
      const orderCards_For_HealthScore = [...state.allRecipes].filter(
        (recipe) => recipe.health_score.toLowerCase() === payload.toLowerCase()
      );
      return {
        ...state,
        allRecipes: orderCards_For_HealthScore,
      };

    default:
      return;
  }
};

export default reducer;
