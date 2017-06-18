import React, { Component } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { RouteTransition, presets } from 'react-router-transition';
import { connect } from 'react-redux';

import RecipeDetail from 'RecipeDetail';
import Recipes from 'Recipes';
import NoMatch from 'NoMatch';

class Main extends Component {

  render() {
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
            <Route exact path="/" render={
              (props)=> <Recipes {...props} />
            } />
            <Route path="/recipe/:id" render={
              (props)=> <RouteTransition 
                          pathname={props.location.pathname}
                          atEnter={{ opacity: 0 }}
                          atLeave={{ opacity: 2 }}
                          atActive={{ opacity: 1 }}
                          mapStyles={styles => {
                            if(styles.opacity > 1){
                              return { display: 'none'}
                            }
                            return { opacity: styles.opacity}
                          }}
                        >
                          <RecipeDetail {...props} />
                        </RouteTransition>
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
    recipes: state.recipes
  };
};

export default connect(mapStateToProps)(Main);