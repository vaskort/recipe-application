import recipeData from 'recipeData';

const recipesReducer = (state = {
  recipeData
}, action) => {
  switch (action.type) {
    case "RECIPE_SEARCH_NAME":
      break;
    case "RECIPE_SEACH_INGREDIENT":
      break;
  }
  return state;
}

export default recipesReducer; 