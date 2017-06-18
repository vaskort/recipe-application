import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from "redux-logger";

import recipes from "./reducers/recipesReducer";
import pagination from "./reducers/paginationReducer";

export default createStore(
      combineReducers({
        recipes,
        pagination
      }), 
      {}, 
      applyMiddleware(createLogger())
);