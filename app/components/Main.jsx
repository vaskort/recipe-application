import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Link } from 'react-router-dom';

import RecipeDetail from 'RecipeDetail';
import Recipes from 'Recipes';
import recipeData from 'recipeData';

class Main extends Component {
  constructor() {
    super();
    // if we had an Api I would do an Api call in ComponentDidMount
    // and then add the response to the state
    this.state = { 
      recipes: recipeData
    };
  }

  render() {
    return (
      <Router>
        {/* I used the attribute exact in the first route so that not both get matched  */}
        {/* else we could use the Switch component - check more here: https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/Switch.md */}
          <div>
            <Route exact path="/" render={(props)=><Recipes recipesData={this.state.recipes} {...props} />} />
            <Route path="/recipe/:id" render={(props)=><RecipeDetail recipesData={this.state.recipes} {...props} />} />
          </div>
      </Router>
    );
  }
}

export default Main;