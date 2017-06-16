import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Main from 'Main';
import store from "./store.js";

// App css
require('style-loader!css-loader!sass-loader!appStyles');


ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('app')
);