import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import recipeData from 'recipeData';

class Recipes extends Component {
  constructor() {
    super();
    // if we had an Api I would do an Api call in ComponentDidMount
    // and then add the response to the state
    this.state = { 
      recipes: recipeData
    };
  }

  getRecipes(){
    // if there are recipes then return them
    if (this.state.recipes.length > 0) {
      return this.state.recipes.map((recipe, index) =>
        <li key={index} className="recipe">
          <Link key={index} to={`/recipe/${index}`}>
            <h2 className="recipeTitle">{recipe.name}</h2>
            <div className="image">
              <img src={recipe.image} alt={recipe.name}/>
            </div>
            <div className="infoContainer">
              <div className="mainIngredients">
                <h3>Ingredients</h3>
                {recipe.ingredients.map((ingredient, index) => {
                  return <div className="ingredient" key={index}>- {ingredient.name}</div>
                })}
              </div>
              <div className="cookingTime">
                <h3>Cooking Time</h3>
                {recipe.cookingTime}
              </div>
            </div>
          </Link>
        </li>
      );
    }
    // if there are not return an error message
    else {
      return <li className="sorryMessage">
        <h2>Sorry, we currently have no recipes for you</h2>
      </li>
    }
  }

  render() {
    let recipes = this.getRecipes();
    return (
        <div className="container">
          <div className="row">
            <ul className="recipeContainer">
              {recipes}
            </ul>
          </div>
        </div>
    );
  }
}

export default Recipes;