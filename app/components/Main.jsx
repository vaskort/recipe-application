import React, { Component } from 'react';
import RecipeDetail from 'RecipeDetail';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


import Recipes from 'Recipes';

class Main extends Component {

  render() {
    return (
      <Router>
        {/* I used the attribute exact in the first route so that not both get matched  */}
        {/* else we could use the Switch component - check more here: https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/Switch.md */}
          <div>
            <Route exact path="/" component={Recipes} />
            <Route path="/recipe/:id" render={()=><RecipeDetail num="2" someProp={100}/>} />
          </div>
      </Router>
    );
  }
}

export default Main;