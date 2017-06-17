import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Filter from 'Filter';
import { getFilteredRecipes } from '../selector.js';


class Recipes extends Component {

  getRecipes(){
    // if there are recipes then return them
    if (this.props.filteredRecipes.length > 0) {
      return this.props.filteredRecipes.map((recipe, index) =>
        <li key={index} className="recipe">
          <Link key={index} to={`/recipe/${index}`}>
            <h2 className="recipeTitle">
              <span className="underlineHelper">{recipe.name}</span>
            </h2>
            <div className="recipeHelperContainer">
              <div className="image">
                <img src={recipe.image} alt={recipe.name}/>
              </div>
              <div className="infoContainer">
                <div className="mainIngredients">
                  <h3>Main ingredients</h3>
                  {recipe.ingredients.map((ingredient, index) => {
                    return <div className="ingredient" key={index}>- {ingredient.name}</div>
                  })}
                </div>
                <div className="cookingTime">
                  <h3>Cooking Time</h3>
                  {recipe.cookingTime}
                </div>
              </div>
            </div>
          </Link>
        </li>
      );
    }
    // if there are not return an error message
    else if (this.props.filteredRecipes.length === 0 && this.props.recipes.get('recipesData').length > 0) {
      return <li className="sorryMessage">
        <h2>Sorry, nothing matched your filter term</h2>
      </li>
    }
  }

  render() {
    let recipes = this.getRecipes();
    return (
        <div>
          <Filter />
          <div className="container">
            <div className="row">
              <ul className="recipeContainer">
                {recipes}
              </ul>
            </div>
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
    filteredRecipes: getFilteredRecipes(state)
  };
};

export default connect(mapStateToProps)(Recipes);
