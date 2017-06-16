import React, { Component } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { RouteTransition } from 'react-router-transition';
import { connect } from 'react-redux';

import RecipeDetail from 'RecipeDetail';
import Recipes from 'Recipes';
import NoMatch from 'NoMatch';
import recipeData from 'recipeData';
import { searchName } from '../actions/recipesActions.js';

class Main extends Component {

  render() {
    console.log(this.props);
    return (
      <Router>
        <div>
          <h1>Recipes App</h1>
          {/*  Check more about Switch Component here: https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/Switch.md */}
          {/*  And some info to handle urls here: https://reacttraining.com/react-router/web/example/no-match */}
          <Switch>
            {/* So despite passing the recipesData as props we pass the params that react-router passes as well hence the {...props} */}
            {/* That way we would be able to handle if a recipe is missing and of course show the relevant data of the recipe */}
            {/* The relevant commit id is: f8820d22806a2ff8f8e823a432f33840f666de29 */}
            <Route exact path="/" render={(props)=><Recipes recipesData={this.props.recipes} {...props} />} />
            <Route path="/recipe/:id" render={
              (props)=> <RouteTransition pathname={props.location.pathname} atEnter={{ opacity: 0 }} atLeave={{ opacity: 0 }} atActive={{ opacity: 1 }} ><RecipeDetail recipesData={this.props.recipes} {...props} /></RouteTransition>
            } />
            <Route component={NoMatch}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes.recipeData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchName: (name) => {
      dispatch(searchName(name));
    },
    searchIngredient: (ingredient) => {
      dispatch(searchIngredient(ingredient));
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);