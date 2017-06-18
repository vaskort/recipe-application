import { Map } from 'immutable';

const paginationReducer = (state = Map({
  currentPage: 1,
  recipesPerPage: 10,
  currentRecipies: []
}), action) => {
  switch (action.type) {
    case "GO_TO_PAGE":
      state = state.merge({currentPage: action.payload});
      break;
  }
  return state;
}

export default paginationReducer; 