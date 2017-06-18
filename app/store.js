import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from "redux-logger";

import recipes from "./reducers/recipesReducer";
import pagination from "./reducers/paginationReducer";
import user from "./reducers/userReducer";

export default createStore(
      combineReducers({
        recipes,
        pagination,
        user
      }), 
      {}, 
      applyMiddleware(createLogger())
);