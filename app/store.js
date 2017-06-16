import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from "redux-logger";

import recipes from "./reducers/recipesReducer";

export default createStore(
      combineReducers({
        recipes
      }), 
      {}, 
      applyMiddleware(createLogger())
);