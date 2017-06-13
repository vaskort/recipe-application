import React, { Component } from 'react';

import Recipes from 'Recipes';

class Main extends Component {

  render() {
    return (
      <div>
        <h1>Recipes</h1>
        <Recipes />
      </div>
    );
  }
}

export default Main;