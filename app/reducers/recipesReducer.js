import recipesData from 'recipeData';
import { Map } from 'immutable';

const recipesReducer = (state = Map({
  searchText: '',
  searchType: 'byName',
  recipesData
}), action) => {
  switch (action.type) {
    case "RECIPE_SEARCH_NAME":
      state = state.merge({searchText: action.payload});
      break;
    case "RECIPE_SEARCH_TYPE":
      state = state.merge({searchType: action.payload});
      break;
  }
  return state;
}

export default recipesReducer; 