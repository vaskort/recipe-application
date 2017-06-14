import React, { Component } from 'react';

class RecipeDetail extends Component {
  getRecipe() {

  }

  render() {
    let recipe = this.getRecipe();
    return (
      <div>
        {console.log(this.props)}
      </div>
    );
  }
}

export default RecipeDetail;