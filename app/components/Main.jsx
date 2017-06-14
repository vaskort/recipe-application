import React, { Component } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Link } from 'react-router-dom';

import RecipeDetail from 'RecipeDetail';
import Recipes from 'Recipes';
import NoMatch from 'NoMatch';
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
        {/*  Check more about Switch Component here: https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/Switch.md */}
        {/*  And some info to handle urls here: https://reacttraining.com/react-router/web/example/no-match */}
          <Switch>
            {/* So despite passing the recipesData as props we pass the params that react-router passes as well */}
            {/* That way we would be able to handle if a recipe is missing and of course show the relevant data of the recipe */}
            {/* The relevant commit id is: f8820d22806a2ff8f8e823a432f33840f666de29 */}
            <Route exact path="/" render={(props)=><Recipes recipesData={this.state.recipes} {...props} />} />
            <Route path="/recipe/:id" render={(props)=><RecipeDetail recipesData={this.state.recipes} {...props} />} />
            <Route component={NoMatch}/>
          </Switch>
      </Router>
    );
  }
}

export default Main;