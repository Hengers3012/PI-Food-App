import {
  GET_RECIPES,
  GET_DIETS,
  POST_RECIPE,
  SEARCH_BAR,
  FILTER_FOR_DIETS,
  ORDEN_BY_HEALTH_SCORE,
  ORDEN_BY_NAME,
} from "./Action_Types";

const initialState = {
  recipes: [],
  allRecipes: [],
  diets: [],
  detail: [],
  newRecipe: [],
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

    case POST_RECIPE:
      return {
        state,
      };

    case FILTER_FOR_DIETS:
      const recipes = state.allRecipes;
      const recipesWithDiet = recipes.filter((r) => {
        let names = r.diets.map((d) => d.name);
        if (names.includes(action.payload)) {
          let res = r;
          return res;
        } else {
          return undefined;
        }
      });
      return {
        ...state,
        recipes:
          action.payload === "default" ? state.allRecipes : recipesWithDiet,
      };

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
              if (a.health_score < b.health_score) return 1;
              if (a.health_score > b.health_score) return -1;
              return 0;
            })
          : order_Recipe_HealthScore.sort((a, b) => {
              if (a.health_score < b.health_score) return -1;
              if (a.health_score > b.health_score) return 1;
              return 0;
            });
      return {
        ...state,
        recipes: [...order_Recipe_HealthScore],
      };

    default:
      return { ...state };
  }
}

export default reducer;
