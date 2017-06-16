import recipesData from 'recipeData';

const recipesReducer = (state = {
  searchText: '',
  searchType: 'byName',
  recipesData
}, action) => {
  switch (action.type) {
    case "RECIPE_SEARCH_NAME":
      break;
    case "RECIPE_SEARCH_TYPE":
      break;
  }
  return state;
}

export default recipesReducer; 