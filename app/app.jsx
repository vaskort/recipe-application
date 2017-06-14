import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Main from 'Main';
import RecipeDetail from 'RecipeDetail';

// App css
require('style-loader!css-loader!foundationStyles');
require('style-loader!css-loader!sass-loader!appStyles');

ReactDOM.render(
  <Router>
    {/*Because both Routes will match we want to stop at the first that's why */}
    {/*we use Switch - check more at https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/Switch.md */}
    <Switch>
      <Route path="/recipe/:id" render={()=><RecipeDetail num="2" someProp={100}/>} />
      <Route path="/" component={Main} />
    </Switch>
  </Router>,
  document.getElementById('app')
);
