import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RecipeDetail extends Component {
  getRecipe() {
    return this.props.recipesData.map((recipe, index) =>
      <li key={index} className="recipe">
        <Link key={index} to={`/recipe/${index}`}>
          <h2 className="recipeTitle">{recipe.name}</h2>
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
        </Link>
      </li>
    );
  }

  render() {
    // check if the id that was passed exists in our array
    let recipe = this.props.recipesData[this.props.match.params.id];

    if (!recipe) {
      return <div className="fourofour">
        <h3>Sorry, this recipe doesn't exist or may have been removed</h3>
      </div>
    }
    return (
      <div className="container">
        <h1>{recipe.name}</h1>
        <div className="row">
          <ul className="recipeContainer">
            
          </ul>
        </div>
      </div>
    );
  }
}

export default RecipeDetail;